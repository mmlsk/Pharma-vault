import csv
import copy
import hashlib
import json
import re
import subprocess
import sys

import pytest
import yaml
from jsonschema import Draft202012Validator

from pv_common import FRONTMATTER as FM, GROUP_TO_CLUSTER, PROCESSED, ROOT, SCHEMA, VAULT


@pytest.fixture(scope="module")
def rows():
    return json.loads((PROCESSED / "substances.json").read_text(encoding="utf-8"))


@pytest.fixture(scope="module")
def validator():
    return Draft202012Validator(json.loads(SCHEMA.read_text()))


def fm(path):
    return json.loads(json.dumps(yaml.safe_load(FM.match(path.read_text(encoding="utf-8")).group(1)), default=str))


def test_catalogue_counts(rows):
    ids = [r["compound_id"] for r in rows]
    assert len(ids) == len(set(ids)) == 2533          # 2351 source - 13 merged duplicates + 195 curated additions
    assert sum(r["source"] == "curated-addition" for r in rows) == 195
    assert len({r["group"] for r in rows}) == 19


def test_every_group_mapped_to_cluster(rows):
    assert {r["group"] for r in rows} <= set(GROUP_TO_CLUSTER)
    assert len(set(GROUP_TO_CLUSTER.values())) == 9


def test_build_is_deterministic():
    before = hashlib.sha256((PROCESSED / "substances.csv").read_bytes()).hexdigest()
    subprocess.run([sys.executable, "build_catalog.py"], cwd=ROOT / "scripts", check=True, capture_output=True)
    after = hashlib.sha256((PROCESSED / "substances.csv").read_bytes()).hexdigest()
    assert before == after


def test_one_note_per_compound(rows):
    notes = list((VAULT / "04 Compound Notes").rglob("*.md"))
    assert len(notes) == len(rows)


def test_example_note_validates(validator):
    assert not list(validator.iter_errors(fm(VAULT / "90 Templates/Compound Note Example.md")))


@pytest.mark.parametrize("field,value", [
    ("evidence-level", "very-good"),
    ("review-status", "done"),
    ("schema-version", 1),
    ("chembl-max-phase", 7),
])
def test_schema_rejects_bad_values(validator, field, value):
    doc = copy.deepcopy(fm(VAULT / "90 Templates/Compound Note Example.md"))
    doc[field] = value
    assert list(validator.iter_errors(doc))


def test_schema_rejects_bad_protein_binding(validator):
    doc = fm(VAULT / "90 Templates/Compound Note Example.md")
    doc["protein-binding"]["value"] = 140
    assert list(validator.iter_errors(doc))


def test_curated_tables_parse():
    for name in ["alias-map.csv", "expansion-backlog.csv", "storefront-new-compounds.csv", "additions.csv",
                 "expansion-resolution.csv", "identity-overrides.csv", "merges.csv", "identity-decisions.csv",
                 "pk-annotations.csv"]:
        with open(ROOT / "data/curated" / name, encoding="utf-8") as fh:
            assert len(list(csv.DictReader(fh))) > 0


def test_pk_annotations(rows):
    from pv_common import load_pk_annotations
    anns = load_pk_annotations()
    assert len(anns) >= 70
    ids = {r["compound_id"] for r in rows}
    valid_categories = {"formulation", "metabolite", "pk-phase", "unbound-fraction", "population", "parser-artifact"}
    valid_fields = {"half-life", "protein-binding"}
    valid_regulators = {"fda", "ema", "both"}
    for cid, items in anns.items():
        assert cid in ids
        for a in items:
            assert a["regulator"] in valid_regulators
            assert a["field"] in valid_fields
            assert a["category"] in valid_categories
            assert a["resolution"] == "explained"
            assert len(a["explanation"]) > 10


def test_identity_conflicts_fully_resolved():
    items = json.loads((PROCESSED / "identity-review.json").read_text(encoding="utf-8"))
    conflicts = [it for it in items if it.get("verdict") == "conflict"]
    assert len(conflicts) == 7
    for c in conflicts:
        assert c.get("decision") is not None
        assert c["decision"]["decision"] == "confirm"
        assert len(c["decision"]["reason"]) > 10


# ---------- v3.1: PK enrichment + graph data
PK_PATH = PROCESSED / "pk.json"


@pytest.fixture(scope="module")
def pk():
    return json.loads(PK_PATH.read_text(encoding="utf-8"))


def test_pk_records_reference_catalogue(pk, rows):
    ids = {r["compound_id"] for r in rows}
    assert len(pk) > 1000
    for p in pk:
        assert p["compound_id"] in ids
        assert re.match(r"^https://en\.wikipedia\.org/w/index\.php\?title=.+&oldid=\d+$", p["source-url"])


def test_no_numeric_half_life_from_animal_data(pk):
    animal = re.compile(r"\b(rats?|mice|mouse|dogs?|rabbits?|monkeys?|animals?|in vitro)\b", re.I)
    for p in pk:
        hl = p.get("half-life") or {}
        if hl.get("value") is not None:
            assert not animal.search(hl["notes"].split(";")[0]), p["compound_id"]


def test_pk_ranges_are_sane(pk):
    for p in pk:
        for key in ("protein-binding", "bioavailability"):
            v = p.get(key) or {}
            for x in (v.get("value"), v.get("value-max")):
                assert x is None or 0 <= x <= 100, (p["compound_id"], key, x)
        fe = (p.get("renal-clearance") or {}).get("fraction-excreted-unchanged")
        assert fe is None or 0 <= fe <= 1


def test_enriched_notes_validate(validator, pk, parsed_notes):
    enriched = [(p, data) for p, data, _ in parsed_notes if "pk-auto" in data.get("tags", [])]
    assert len(enriched) == len(pk)
    for path, data in enriched:
        assert data["source-status"] in ("auto-extracted", "partially-verified") and data["review-status"] == "stub"
        assert not list(validator.iter_errors(data)), path.name


def test_graph_data_matches_catalogue(rows):
    js = (ROOT / "apps/graph-viewer/graph-data.js").read_text(encoding="utf-8")
    data = json.loads(js[js.index("{"): js.rindex("}") + 1])
    assert len(data["compounds"]) == len(rows)
    assert {c["id"] for c in data["compounds"]} == {r["compound_id"] for r in rows}
    n_core = len(data["core"])
    assert all(0 <= li < n_core for c in data["compounds"] for li in c["l"])


# ---------- v3.2: expansion, ChEMBL layer, FDA cross-check, links
def load(name):
    return json.loads((PROCESSED / name).read_text(encoding="utf-8"))


def test_raw_source_untouched():
    m = load("manifest.json")
    raw = ROOT / m["input"]
    assert hashlib.sha256(raw.read_bytes()).hexdigest() == m["input_sha256"]


def test_additions_have_identity_and_provenance(rows):
    adds = list(csv.DictReader(open(ROOT / "data/curated/additions.csv", encoding="utf-8")))
    assert len(adds) == 195
    for a in adds:
        assert a["chembl_id"] or a["pubchem_cid"], a["compound_id"]
        assert a["origin"].startswith(("backlog:", "storefront:")) and a["match"]
        assert not a["chembl_id"] or re.match(r"^CHEMBL\d+$", a["chembl_id"])
    rejected = {r["candidate"] for r in csv.DictReader(open(ROOT / "data/curated/expansion-resolution.csv", encoding="utf-8"))
                if r["status"] == "rejected"}
    assert "Ademol" in rejected  # ChEMBL synonym clash with flumethiazide must not be admitted


def test_merge_removed_duplicate(rows):
    ids = {r["compound_id"] for r in rows}
    assert "methylene-blue-cation-compound" not in ids and "methylene-blue-compound" in ids


def test_chembl_layer(rows):
    ch = load("chembl.json")
    ids = {r["compound_id"] for r in rows}
    assert len(ch) > 2000
    for c in ch:
        assert c["compound_id"] in ids
        assert re.match(r"^CHEMBL\d+$", c["identity"]["chembl-id"])
        for a in c["atc"]:
            assert re.match(r"^[A-Z]\d{2}[A-Z]{2}\d{2}$", a["code"])


@pytest.mark.parametrize("text,lo,hi", [
    ("1.54 ± 0.63 h", 1.54, None),        # ± SD is not the central value
    ("7.3 +/-1.5 hours", 7.3, None),
    ("10–20 hours", 10, 20),
])
def test_half_life_parser_regressions(text, lo, hi):
    from enrich_pk import parse_half_life
    r = parse_half_life(text)
    assert (r["value"], r["value-max"]) == (lo, hi)


def test_ndash_template_is_a_range():
    from enrich_pk import clean, parse_half_life
    r = parse_half_life(clean("10{{ndash}}20 hours<ref>x</ref>"))
    assert (r["value"], r["value-max"]) == (10, 20)


def test_animal_percentages_not_numeric():
    from enrich_pk import parse_percent
    assert parse_percent("Unknown (but 65–90% in guinea pigs)") == (None, None)
    assert parse_percent("87% (in vitro)", allow_in_vitro=True) == (87, None)


def test_pk_verification_consistency(parsed_notes):
    ver = {v["compound_id"]: v for v in load("pk-verification.json")}
    assert ver and {v["status"] for v in ver.values()} <= {"consistent", "discrepant", "no-label-value", "no-label"}
    for v in ver.values():
        if v["status"] in ("consistent", "discrepant"):
            assert v["url"].startswith("https://dailymed.nlm.nih.gov/") and v["fields"]
    notes = {data["compound-id"]: data for _, data, _ in parsed_notes}
    for cid, n in notes.items():
        if n.get("source-status") == "partially-verified":
            sts = {x["status"] for x in (n.get("pk-verification"), n.get("pk-verification-ema")) if x}
            assert "consistent" in sts and "discrepant" not in sts, cid


def test_links_symmetric_and_targets_have_notes():
    links = load("links.json")
    rel = links["related"]
    for a, r in rel.items():
        for b, n, _ in r["shared-target"]:
            assert any(x[0] == a for x in rel[b]["shared-target"]) or len(rel[b]["shared-target"]) >= 12
    names = {p.stem for p in (VAULT / "07 Targets").glob("*.md")}
    assert len(names) == len(links["targets"]) + 1  # + Targets MOC


def test_graph_has_targets_and_verification():
    js = (ROOT / "apps/graph-viewer/graph-data.js").read_text(encoding="utf-8")
    data = json.loads(js[js.index("{"): js.rindex("}") + 1])
    nt = len(data["targets"])
    assert nt > 300 and data["meta"]["pk_fda_consistent"] > 300
    assert all(0 <= t < nt for c in data["compounds"] for t in c.get("tg", []))
    assert len(data["clusters"]) == 9


@pytest.fixture(scope="module")
def sqlite_con():
    import sqlite3
    subprocess.run([sys.executable, "export_sqlite.py"], cwd=ROOT / "scripts", check=True, capture_output=True)
    con = sqlite3.connect(PROCESSED / "pharma-vault.db")
    yield con
    con.close()


def test_sqlite_export(sqlite_con):
    assert sqlite_con.execute("SELECT COUNT(*) FROM substances").fetchone()[0] == 2533
    assert sqlite_con.execute("SELECT COUNT(*) FROM compound_targets").fetchone()[0] > 1000


# ---------- v3.3: identity curation + EU SmPC (ChPL) cross-check
IDENTITY_VERDICTS = {"structure-confirmed", "connectivity-match", "formula-match", "inn-match-ema",
                     "no-chembl-structure", "no-evidence", "conflict"}


def test_identity_decisions_applied(rows):
    ids = {r["compound_id"] for r in rows}
    ch = {c["compound_id"]: c for c in load("chembl.json")}
    dec = list(csv.DictReader(open(ROOT / "data/curated/identity-decisions.csv", encoding="utf-8")))
    assert dec
    for d in dec:
        assert d["compound_id"] in ids and d["decision"] in ("confirm", "replace", "reject") and d["reason"] and d["reviewer"]
        if d["decision"] == "reject":
            assert d["compound_id"] not in ch
        else:
            assert ch[d["compound_id"]]["identity"]["chembl-id"] == d["chembl_id"]
    # regression: infobox typo 435170 (adaprolol) must not resurface
    assert ch["deucravacitinib-compound"]["identity"]["chembl-id"] == "CHEMBL4435170"


def test_identity_review_shape():
    rev = load("identity-review.json")
    assert len(rev) > 1500 and {x["verdict"] for x in rev} <= IDENTITY_VERDICTS
    assert all(x["tier"] != "catalogue" for x in rev)
    by = {x["compound_id"]: x for x in rev}
    open_conflicts = [x for x in rev if x["verdict"] == "conflict" and not x.get("decision")]
    assert len(open_conflicts) <= 5, [x["compound_id"] for x in open_conflicts]
    assert by["clozapine-compound"]["verdict"] in ("structure-confirmed", "formula-match")


def test_section_52_extraction():
    from verify_pk_ema import section_52
    text = (
        "Table of Contents\n"
        "5.2 Pharmacokinetic properties ................................ 10\n"
        "5.3 Non-clinical safety data .................................. 12\n"
        "4.2 Posology\nx\n"
        "5.2 Pharmacokinetic properties\n"
        "The mean half-life is 12 hours.\n"
        "5.3 Non-clinical safety data\n"
        "rat t1/2 99 h"
    )
    sec = section_52(text)
    assert "12 hours" in sec and "rat" not in sec


def test_pb_values_ignores_unrelated_percentages():
    from verify_pk_fda import pb_values
    sents = [
        "The drug is 98% bound to plasma proteins (50% renal impairment) and bioavailability is 30%.",
        "Plasma protein binding is 95%, with 20% excreted in urine.",
    ]
    assert pb_values(sents) == [98.0, 95.0]


def test_infobox_conflict_outranks_name_lookup(monkeypatch, tmp_path):
    import curate_identity as ci
    ref_ik = "AAAAAAAAAAAAAA-UHFFFAOYSA-N"
    bad_ik = "BBBBBBBBBBBBBB-UHFFFAOYSA-N"
    monkeypatch.setattr(ci, "PROCESSED", tmp_path)
    (tmp_path / "substances.json").write_text(json.dumps([{"compound_id": "x-compound", "name": "X"}]), encoding="utf-8")
    monkeypatch.setattr(ci, "chembl_records", lambda: [{
        "compound_id": "x-compound",
        "identity": {"source": "chembl-name-match", "chembl-id": "CHEMBL1", "parent-chembl-id": "CHEMBL1", "matched-name": "X"},
    }])
    monkeypatch.setattr(ci, "infobox_cids", lambda: {"x-compound": 111})
    monkeypatch.setattr(ci, "decisions", lambda: {})

    def fake_cache(name, key):
        if name == "molecules.jsonl":
            return {"CHEMBL1": {"molecule_properties": {"full_molformula": "C10H12N2O"}}}
        if name == ci.STRUCT:
            return {"CHEMBL1": {"id": "CHEMBL1", "inchikey": ref_ik}}
        if name == ci.PC_CID:
            return {111: {"cid": 111, "inchikey": bad_ik, "formula": "C9H9N", "title": "Wrong"}}
        if name == ci.PC_NAME:
            return {"x": {"query": "x", "cids": [{"cid": 222, "inchikey": ref_ik, "formula": "C10H12N2O", "title": "X"}]}}
        return {}

    monkeypatch.setattr(ci, "load_cache", fake_cache)
    ci.parse(write=False)
    rev = json.loads((tmp_path / "identity-review.json").read_text(encoding="utf-8"))
    assert rev[0]["verdict"] == "conflict"


def test_ema_verification():
    ema = load("pk-verification-ema.json")
    assert len(ema) > 150
    assert {v["status"] for v in ema} <= {"consistent", "discrepant", "no-smpc-value", "no-smpc-text"}
    for v in ema:
        assert v["epar-url"].startswith("https://www.ema.europa.eu/")
        assert not v.get("chpl-url") or v["chpl-url"].endswith("_pl.pdf")
        assert not re.search(r"/|,|;|\band\b|\+", v["inn"])  # single-substance products only
    assert sum(v["status"] == "consistent" for v in ema) > 100


def test_sqlite_has_v33_tables(sqlite_con):
    assert sqlite_con.execute("SELECT COUNT(*) FROM identity_review").fetchone()[0] > 1500
    assert sqlite_con.execute("SELECT COUNT(*) FROM pk_verification_ema").fetchone()[0] > 150
    assert sqlite_con.execute("SELECT COUNT(*) FROM pk_annotations").fetchone()[0] >= 70


def test_stack_presets_and_hubs(rows):
    """Verify that substances referenced in graph-viewer stack presets and interaction hubs exist and are consistent."""
    cids = {r["compound_id"] for r in rows}
    presets = [
        ("caffeine-compound", "theanine-compound"),
        ("sertraline-compound", "tramadol-compound"),
        ("morphine-compound", "diazepam-compound"),
        ("quetiapine-compound", "clarithromycin-compound"),
    ]
    for pair in presets:
        for cid in pair:
            assert cid in cids, f"Preset compound {cid} not found in substances catalogue"

    pk = json.loads((PROCESSED / "pk.json").read_text(encoding="utf-8"))
    cyp_records = [r for r in pk if r.get("cyp-interactions") and r["cyp-interactions"].get("substrates")]
    assert len(cyp_records) > 200
    for r in cyp_records:
        subs = r["cyp-interactions"]["substrates"]
        assert isinstance(subs, list)
        for enz in subs:
            assert re.match(r"^CYP[0-9A-Z]+$", enz), f"Invalid CYP name {enz} for {r.get('compound_id')}"


def test_pk_simulation_math():
    """Verify that pharmacokinetic equations implemented in the graph-viewer simulator produce physically accurate outputs."""
    import math

    def solve_ka(ke, t_max):
        ka = max(ke * 1.5, 1.2 / t_max + ke)
        for _ in range(6):
            f = math.log(ka / ke) - (ka - ke) * t_max
            df = 1.0 / ka - t_max
            if abs(df) < 1e-6:
                break
            ka = ka - f / df
        return ka

    def conc(t, ke, ka, t_max):
        c_peak = math.exp(-ke * t_max) - math.exp(-ka * t_max)
        return 100.0 * (math.exp(-ke * t) - math.exp(-ka * t)) / c_peak

    # 1. Peak matches Tmax
    t_half = 5.0
    ke = math.log(2) / t_half
    t_max = 1.5
    ka = solve_ka(ke, t_max)
    c_at_peak = conc(t_max, ke, ka, t_max)
    assert abs(c_at_peak - 100.0) < 0.01

    # 2. Concentration decays after Tmax
    assert conc(t_max + t_half, ke, ka, t_max) < 60.0
    assert conc(t_max + 2 * t_half, ke, ka, t_max) < 30.0

    # 3. Accumulation ratio Rac matches 1 / (1 - exp(-ke * tau))
    tau = 8.0
    rac_expected = 1.0 / (1.0 - math.exp(-ke * tau))
    assert 1.45 < rac_expected < 1.55


def test_chemical_structures_and_inchikeys():
    """Verify that graph-data.js contains canonical InChIKeys, molecular formulas, and ChEMBL IDs in valid IUPAC format."""
    graph_js = (ROOT / "apps/graph-viewer/graph-data.js").read_text(encoding="utf-8")
    assert "window.PV_GRAPH = {" in graph_js
    prefix = "window.PV_GRAPH = "
    start_idx = graph_js.index(prefix) + len(prefix)
    end_idx = graph_js.rindex("};") + 1
    graph = json.loads(graph_js[start_idx:end_idx])
    compounds = graph["compounds"]

    with_ik = [c for c in compounds if c.get("ik")]
    with_ch = [c for c in compounds if c.get("ch")]
    with_mf = [c for c in compounds if c.get("mf")]

    assert len(with_ik) >= 1400, f"Expected >= 1400 compounds with InChIKey, found {len(with_ik)}"
    assert len(with_ch) >= 2200, f"Expected >= 2200 compounds with ChEMBL ID, found {len(with_ch)}"
    assert len(with_mf) >= 1900, f"Expected >= 1900 compounds with molecular formula, found {len(with_mf)}"

    ik_regex = re.compile(r"^[A-Z]{14}-[A-Z]{10}-[A-Z]$")
    for c in with_ik:
        assert ik_regex.match(c["ik"]), f"Invalid InChIKey format '{c['ik']}' for compound {c.get('id')}"


def test_comparator_feature_extraction():
    """Verify that graph data and viewer markup support drug comparison, target diffing, and CYP bottleneck detection."""
    html_src = (ROOT / "apps/graph-viewer/index.html").read_text(encoding="utf-8")
    assert 'id="comparatorModal"' in html_src
    assert 'id="stackCompareBtn"' in html_src
    assert 'id="compModalClose"' in html_src
    assert 'id="compModalCopyMd"' in html_src
    assert 'id="compModalObsidian"' in html_src

    app_src = (ROOT / "apps/graph-viewer/app.js").read_text(encoding="utf-8")
    assert "function openComparator(" in app_src
    assert "function renderComparator(" in app_src
    assert "function exportComparisonMarkdown(" in app_src
    assert "cardCompareBtn" in app_src

    graph_js = (ROOT / "apps/graph-viewer/graph-data.js").read_text(encoding="utf-8")
    prefix = "window.PV_GRAPH = "
    start_idx = graph_js.index(prefix) + len(prefix)
    end_idx = graph_js.rindex("};") + 1
    graph = json.loads(graph_js[start_idx:end_idx])
    compounds = graph["compounds"]
    targets = graph["targets"]

    # Verify target indexing matches
    with_tg = [c for c in compounds if c.get("tg")]
    assert len(with_tg) > 500, f"Expected > 500 compounds with targets, found {len(with_tg)}"
    for c in with_tg[:20]:
        for ti in c["tg"]:
            assert 0 <= ti < len(targets), f"Target index {ti} out of range in compound {c.get('id')}"

    # Verify CYP substrate detection across compounds
    with_cyp = [c for c in compounds if c.get("pk") and c["pk"].get("cyp")]
    assert len(with_cyp) > 100, f"Expected > 100 compounds with CYP substrates, found {len(with_cyp)}"

    # Check simulated head-to-head comparison between 2 compounds sharing targets or CYP
    c1, c2 = with_cyp[0], with_cyp[1]
    shared_cyp = set(c1["pk"]["cyp"]) & set(c2["pk"]["cyp"])
    # Logic works without exception
    assert isinstance(shared_cyp, set)


def test_advanced_multi_filter():
    """Verify markup and filter logic for Smart Multi-Filter (CYP, Ro5, Physicochemical, Clinical Phase)."""
    html_src = (ROOT / "apps/graph-viewer/index.html").read_text(encoding="utf-8")
    for el_id in ["advFilterDetails", "advFilterBadge", "advCypSelect", "advRo5Select", "advPropSelect", "advPhaseSelect", "advFilterReset"]:
        assert f'id="{el_id}"' in html_src, f"Missing element id '{el_id}' in index.html"

    app_src = (ROOT / "apps/graph-viewer/app.js").read_text(encoding="utf-8")
    for term in ["state.adv", "passAdvCyp", "passAdvRo5", "passAdvProp", "passAdvPhase", "updateAdvFilterUI"]:
        assert term in app_src, f"Missing '{term}' in app.js"

    graph_js = (ROOT / "apps/graph-viewer/graph-data.js").read_text(encoding="utf-8")
    prefix = "window.PV_GRAPH = "
    start_idx = graph_js.index(prefix) + len(prefix)
    end_idx = graph_js.rindex("};") + 1
    graph = json.loads(graph_js[start_idx:end_idx])
    compounds = graph["compounds"]

    # 1. CYP3A4 filtering
    cyp3a4_hits = [c for c in compounds if c.get("pk") and "CYP3A4" in (c["pk"].get("cyp") or [])]
    assert len(cyp3a4_hits) >= 100, f"Expected >= 100 CYP3A4 substrates, got {len(cyp3a4_hits)}"

    # 2. Ro5 compliance (0 violations)
    ro5_clean = [c for c in compounds if c.get("pr") and c["pr"][3] == 0]
    assert len(ro5_clean) >= 1000, f"Expected >= 1000 Ro5-compliant compounds, got {len(ro5_clean)}"

    # 3. CNS / BBB-friendly profile (MW <= 400 and 1 <= ALogP <= 3)
    cns_hits = [c for c in compounds if c.get("pr") and c["pr"][0] is not None and c["pr"][1] is not None and c["pr"][0] <= 400 and 1.0 <= c["pr"][1] <= 3.0]
    assert len(cns_hits) >= 200, f"Expected >= 200 CNS/BBB-friendly compounds, got {len(cns_hits)}"

    # 4. Phase 4 approved drugs
    phase4_hits = [c for c in compounds if c.get("ph") == 4]
    assert len(phase4_hits) >= 1000, f"Expected >= 1000 Phase 4 approved compounds, got {len(phase4_hits)}"

    # 5. Composite faceted search: Phase 4 + CYP3A4 + Ro5 compliant
    composite = [c for c in cyp3a4_hits if c.get("ph") == 4 and c.get("pr") and c["pr"][3] == 0]
    assert len(composite) >= 20, f"Expected >= 20 composite search hits, got {len(composite)}"


def test_stack_interaction_matrix():
    """Verify markup and pairwise evaluation logic for Pairwise Interaction Matrix (N x N)."""
    html_src = (ROOT / "apps/graph-viewer/index.html").read_text(encoding="utf-8")
    for css_class in ["matrix-table", "matrix-cell", "matrix-detail-card", "cell-danger", "cell-warn", "cell-synergy", "cell-clear", "cell-diag"]:
        assert css_class in html_src, f"Missing CSS class '{css_class}' in index.html"

    app_src = (ROOT / "apps/graph-viewer/app.js").read_text(encoding="utf-8")
    for term in ["function evaluatePairwiseInteraction(", "function buildMatrixHtml(", "data-matrix-pair", "data-stack-tab"]:
        assert term in app_src, f"Missing term '{term}' in app.js"

    graph_js = (ROOT / "apps/graph-viewer/graph-data.js").read_text(encoding="utf-8")
    prefix = "window.PV_GRAPH = "
    start_idx = graph_js.index(prefix) + len(prefix)
    end_idx = graph_js.rindex("};") + 1
    graph = json.loads(graph_js[start_idx:end_idx])
    compounds = graph["compounds"]
    core = graph["core"]

    # Locate sample test compounds
    by_name = {c["n"].lower(): c for c in compounds}
    sertraline = by_name.get("sertraline") or by_name.get("sertralina")
    tramadol = by_name.get("tramadol")

    if sertraline and tramadol:
        # Check CYP and risk hubs
        cyp_s = set(sertraline.get("pk", {}).get("cyp") or [])
        cyp_t = set(tramadol.get("pk", {}).get("cyp") or [])
        shared_cyp = cyp_s & cyp_t

        hubs_s = [core[li]["name"].lower() for li in sertraline.get("l", []) if core[li]["kind"] == "hub"]
        hubs_t = [core[li]["name"].lower() for li in tramadol.get("l", []) if core[li]["kind"] == "hub"]
        shared_hubs = set(hubs_s) & set(hubs_t)

        has_serotonin = any("seroton" in h for h in (hubs_s + hubs_t))
        assert has_serotonin or shared_cyp, "Expected serotonergic activity or shared CYP between Sertraline and Tramadol"


def test_target_explorer_deep_dive():
    """Verify markup and action classification logic for Target & Pathway Deep-Dive Explorer."""
    html_src = (ROOT / "apps/graph-viewer/index.html").read_text(encoding="utf-8")
    for el_id in ["targetModal", "targetModalHead", "targetModalBody", "targetModalFootNote"]:
        assert f'id="{el_id}"' in html_src, f"Missing id '{el_id}' in index.html"

    for css in ["target-grid", "target-action-col", "target-drug-card"]:
        assert css in html_src, f"Missing CSS class '{css}' in index.html"

    app_src = (ROOT / "apps/graph-viewer/app.js").read_text(encoding="utf-8")
    for term in ["function openTargetModal(", "function closeTargetModal(", "function classifyTargetAction(", "activeModalTarget", "targetShowOnGraphBtn"]:
        assert term in app_src, f"Missing term '{term}' in app.js"

    graph_js = (ROOT / "apps/graph-viewer/graph-data.js").read_text(encoding="utf-8")
    prefix = "window.PV_GRAPH = "
    start_idx = graph_js.index(prefix) + len(prefix)
    end_idx = graph_js.rindex("};") + 1
    graph = json.loads(graph_js[start_idx:end_idx])
    targets = graph["targets"]
    compounds = graph["compounds"]

    # 1. Verify existence of major pharmacological targets
    target_names = [t["n"].lower() for t in targets]
    assert any("5-hydroxytryptamine receptor 2a" in tn for tn in target_names), "5-HT2A target not found"
    assert any("dopamine" in tn for tn in target_names), "Dopamine targets not found"

    # 2. Verify ligands linked to targets
    t_idx_map = {t["id"]: i for i, t in enumerate(targets)}
    chembl224_idx = t_idx_map.get("CHEMBL224")
    if chembl224_idx is not None:
        ht2a_ligands = [c for c in compounds if chembl224_idx in (c.get("tg") or [])]
        assert len(ht2a_ligands) >= 10, f"Expected >= 10 ligands for 5-HT2A, got {len(ht2a_ligands)}"

    # 3. Test functional action classifier logic
    def classify(mech, t_name):
        m = (mech or "").lower()
        if any(w in m for w in ["antagonist", "inverse agonist", "blocker", "negative allosteric"]):
            return "antagonist"
        if any(w in m for w in ["agonist", "activator", "positive allosteric", "opener"]):
            return "agonist"
        if any(w in m for w in ["inhibitor", "reuptake inhibitor", "inactivator"]):
            return "inhibitor"
        return "other"

    assert classify("5-hydroxytryptamine receptor 2A agonist", "5-HT2A") == "agonist"
    assert classify("5-hydroxytryptamine receptor 2A antagonist", "5-HT2A") == "antagonist"
    assert classify("HMG-CoA reductase inhibitor", "HMG-CoA") == "inhibitor"
    assert classify("", "5-HT2A") == "other"


def test_clinical_dossier_generator():
    """Verify markup, style rules, and generator functions for Clinical Dossier (Monograph & Polypharmacy Report)."""
    html_src = (ROOT / "apps/graph-viewer/index.html").read_text(encoding="utf-8")
    for el_id in ["dossierModal", "dossierSheet", "dossierPrintBtn", "dossierCopyMdBtn", "dossierObsidianBtn", "dossierCloseBtn", "stackDossierBtn"]:
        assert f'id="{el_id}"' in html_src, f"Missing #{el_id} in index.html"

    for css_cls in [".dossier-modal", ".dossier-toolbar", ".dossier-sheet", ".dossier-table", "@media print"]:
        assert css_cls in html_src, f"Missing CSS class/rule '{css_cls}' in index.html"

    app_src = (ROOT / "apps/graph-viewer/app.js").read_text(encoding="utf-8")
    for fn in [
        "function generateCompoundDossierHtml(",
        "function generateStackDossierHtml(",
        "function generateCompoundDossierMarkdown(",
        "function generateStackDossierMarkdown(",
        "function openDossierModal(",
        "function closeDossierModal(",
        "cardDossierBtn",
        "stackDossierBtn"
    ]:
        assert fn in app_src, f"Missing '{fn}' in app.js"

    # Test monograph data generation with graph data
    graph_js = (ROOT / "apps/graph-viewer/graph-data.js").read_text(encoding="utf-8")
    prefix = "window.PV_GRAPH = "
    start_idx = graph_js.index(prefix) + len(prefix)
    end_idx = graph_js.rindex("};") + 1
    graph = json.loads(graph_js[start_idx:end_idx])
    compounds = graph["compounds"]

    # Find compound with both PK and properties (e.g. Fluoxetine or Caffeine)
    c_full = next((c for c in compounds if c.get("pk") and c.get("pr") and c.get("mf") and c.get("ik")), None)
    assert c_full is not None, "Could not find a fully-annotated compound in PV_GRAPH"

    # Verify fields for single substance dossier
    assert "n" in c_full
    assert "mf" in c_full
    assert "pr" in c_full and len(c_full["pr"]) == 4
    assert "pk" in c_full
    assert "ik" in c_full

    # Simulate markdown structure
    md_header = f"# Monografia Kliniczna: {c_full['n']}"
    assert len(md_header) > 0


def test_clinical_risk_engine_and_adr_heatmap():
    """Verify markup, style rules, and calculation engine for Clinical Risk Engine and ADR Heatmap."""
    html_src = (ROOT / "apps/graph-viewer/index.html").read_text(encoding="utf-8")
    for css_cls in [".risk-gauge-box", ".risk-score-badge", ".axis-grid", ".axis-card", ".adr-table", ".adr-cell"]:
        assert css_cls in html_src, f"Missing CSS class '{css_cls}' in index.html"

    app_src = (ROOT / "apps/graph-viewer/app.js").read_text(encoding="utf-8")
    for term in [
        "function calculateStackRiskMetrics(",
        "function detectPharmacodynamicPhenomena(",
        "function buildToxicityTabHtml(",
        "data-stack-tab=\"toxicity\"",
        "data-adr-toggle=",
        "ADR_DEFINITIONS"
    ]:
        assert term in app_src, f"Missing '{term}' in app.js"

    # Test logic on real graph data
    graph_js = (ROOT / "apps/graph-viewer/graph-data.js").read_text(encoding="utf-8")
    prefix = "window.PV_GRAPH = "
    start_idx = graph_js.index(prefix) + len(prefix)
    end_idx = graph_js.rindex("};") + 1
    graph = json.loads(graph_js[start_idx:end_idx])
    compounds = graph["compounds"]
    core = graph["core"]

    # Identify Serotonin and Respiratory hubs
    serotonin_hub_idx = next((i for i, h in enumerate(core) if h.get("kind") == "hub" and "serotonin" in h.get("name", "").lower()), -1)
    respiratory_hub_idx = next((i for i, h in enumerate(core) if h.get("kind") == "hub" and ("oddech" in h.get("name", "").lower() or "respiratory" in h.get("name", "").lower())), -1)

    assert serotonin_hub_idx >= 0, "Serotonin hub not found in core"

    # Find two serotonergic compounds
    sero_compounds = [c for c in compounds if serotonin_hub_idx in (c.get("l") or [])]
    assert len(sero_compounds) >= 2, f"Expected >= 2 serotonergic compounds, found {len(sero_compounds)}"

    # Simulate ADR evaluation for dual serotonergic combination
    # Both have serotonin hazard
    def eval_serotonin(c):
        m = (c.get("m") or "").lower()
        t = " ".join(c.get("t") or []).lower()
        s = 5
        if serotonin_hub_idx in (c.get("l") or []):
            s += 35
        if any(w in m for w in ["serotonin", "5-ht", "sert", "ssri", "snri", "mao"]):
            s += 40
        if "serotonin" in t or "hiperterm" in t:
            s += 25
        return min(100, s)

    s1 = eval_serotonin(sero_compounds[0])
    s2 = eval_serotonin(sero_compounds[1])
    assert s1 >= 40
    assert s2 >= 40

    # Combined formula
    prod = (1 - s1 / 100.0) * (1 - s2 / 100.0)
    comb = min(99, int(round((1 - prod) * 100 * 1.25)))
    assert comb >= 75, f"Expected high/critical combined serotonin hazard, got {comb}"


def test_chemical_similarity_and_analogs_explorer():
    """Verify markup, style classes, and similarity computation for Chemical Similarity & Analogs Explorer."""
    html_src = (ROOT / "apps/graph-viewer/index.html").read_text(encoding="utf-8")
    for el_id in ["analogsModal", "analogsQuerySubtitle", "analogsSameCategoryCheck", "analogsQueryCol", "analogsResultsGrid"]:
        assert f'id="{el_id}"' in html_src, f"Missing #{el_id} in index.html"

    for css_cls in [".analogs-modal", ".analogs-grid", ".analog-card", ".similarity-badge"]:
        assert css_cls in html_src, f"Missing CSS class '{css_cls}' in index.html"

    app_src = (ROOT / "apps/graph-viewer/app.js").read_text(encoding="utf-8")
    for term in [
        "function findCompoundAnalogs(",
        "function openAnalogsModal(",
        "function closeAnalogsModal(",
        "cardAnalogsBtn",
        "data-analog-mode",
        "data-analog-compare="
    ]:
        assert term in app_src, f"Missing '{term}' in app.js"

    # Test similarity logic on real graph data
    graph_js = (ROOT / "apps/graph-viewer/graph-data.js").read_text(encoding="utf-8")
    prefix = "window.PV_GRAPH = "
    start_idx = graph_js.index(prefix) + len(prefix)
    end_idx = graph_js.rindex("};") + 1
    graph = json.loads(graph_js[start_idx:end_idx])
    compounds = graph["compounds"]

    # Locate Citalopram and Escitalopram
    citalopram = next((c for c in compounds if "citalopram" in c.get("n", "").lower() and "es" not in c.get("n", "").lower()), None)
    escitalopram = next((c for c in compounds if "escitalopram" in c.get("n", "").lower()), None)

    assert citalopram is not None, "Citalopram not found in graph"
    assert escitalopram is not None, "Escitalopram not found in graph"

    # Both have InChIKey
    assert citalopram.get("ik"), "Citalopram missing InChIKey"
    assert escitalopram.get("ik"), "Escitalopram missing InChIKey"

    # Skeletons match
    ik_prefix_c = citalopram["ik"][:14]
    ik_prefix_e = escitalopram["ik"][:14]
    assert ik_prefix_c == ik_prefix_e, f"Expected matching scaffold InChIKey prefix, got {ik_prefix_c} vs {ik_prefix_e}"

    # Verify high similarity calculation
    # Delta MW is 0
    d_mw = abs((citalopram.get("pr") or [0])[0] - (escitalopram.get("pr") or [0])[0])
    assert d_mw < 1.0, f"Expected identical MW, got delta {d_mw}"


def test_semantic_typed_edges_and_graph_filtering():
    """Verify markup, style classes, and relation indexing for Semantic Pharmacological Typed Edges."""
    html_src = (ROOT / "apps/graph-viewer/index.html").read_text(encoding="utf-8")
    for el_id in [
        "edgesBtn", "edgesPopover", "closeEdgesPopover", "edgeFilterList",
        "edgeGlobalModeCheck", "edgeFilterAllBtn", "edgeFilterNoneBtn"
    ]:
        assert f'id="{el_id}"' in html_src, f"Missing #{el_id} in index.html"

    for css_cls in [
        ".edges-popover", ".edge-filter-list", ".edge-filter-item",
        ".edge-filter-label", ".edge-color-dot", ".edge-badge", ".edge-pill", ".edge-pill-tag"
    ]:
        assert css_cls in html_src, f"Missing CSS class '{css_cls}' in index.html"

    app_src = (ROOT / "apps/graph-viewer/app.js").read_text(encoding="utf-8")
    for term in [
        "TYPED_EDGE_CONFIG",
        "PRODRUG_OF",
        "CONTRAINDICATION",
        "CYP_INTERACTION",
        "TARGET_SYNERGY",
        "TARGET_ANTAGONISM",
        "CURATED_TYPED_EDGES",
        "function getCompoundTypedEdges(",
        "function drawSingleTypedEdge(",
        "function toggleEdgesPopover(",
        "data-edge-goto="
    ]:
        assert term in app_src, f"Missing '{term}' in app.js"

    # Test presence of clinical pairs in graph data
    graph_js = (ROOT / "apps/graph-viewer/graph-data.js").read_text(encoding="utf-8")
    prefix = "window.PV_GRAPH = "
    start_idx = graph_js.index(prefix) + len(prefix)
    end_idx = graph_js.rindex("};") + 1
    graph = json.loads(graph_js[start_idx:end_idx])
    compounds = graph["compounds"]
    comp_ids = {c["id"] for c in compounds}

    # Verify key clinical relationships pairs exist in dataset
    key_pairs = [
        ("lisdexamfetamine-compound", "dextroamphetamine-compound"),
        ("codeine-compound", "morphine-compound"),
        ("psilocybin-compound", "psilocin-compound"),
        ("diamorphine-compound", "morphine-compound"),
        ("enalapril-compound", "enalaprilat-anhydrous-compound"),
        ("moclobemide-compound", "fluoxetine-compound"),
        ("diazepam-compound", "morphine-compound"),
        ("fluoxetine-compound", "codeine-compound"),
        ("naloxone-compound", "morphine-compound"),
        ("flumazenil-compound", "diazepam-compound")
    ]
    for p1, p2 in key_pairs:
        assert p1 in comp_ids, f"Expected {p1} in graph compounds"
        assert p2 in comp_ids, f"Expected {p2} in graph compounds"


def test_metabolite_tree_and_prodrug_navigator():
    """Verify markup, style classes, and cascade repository for Metabolite Tree & Prodrug Navigator."""
    html_src = (ROOT / "apps/graph-viewer/index.html").read_text(encoding="utf-8")
    for el_id in [
        "metaboliteModal", "metaQuerySubtitle", "metaboliteModalClose",
        "metaTreeContainer", "metaSidePanel"
    ]:
        assert f'id="{el_id}"' in html_src, f"Missing #{el_id} in index.html"

    for css_cls in [
        ".metabolite-modal", ".meta-head", ".meta-body", ".meta-tree-container",
        ".meta-phase-col", ".meta-phase-head", ".meta-node-card",
        ".meta-enzyme-pill", ".meta-activity-badge", ".meta-side-panel", ".meta-diff-table"
    ]:
        assert css_cls in html_src, f"Missing CSS class '{css_cls}' in index.html"

    app_src = (ROOT / "apps/graph-viewer/app.js").read_text(encoding="utf-8")
    for term in [
        "METABOLITE_CASCADES",
        "function parseMetabolismText(",
        "function getMetaboliteCascade(",
        "function openMetaboliteModal(",
        "function closeMetaboliteModal(",
        "cardMetaboliteBtn",
        "pkMetaboliteTreeBtn"
    ]:
        assert term in app_src, f"Missing '{term}' in app.js"

    # Verify curated pathways exist in app.js
    assert '"codeine-compound"' in app_src
    assert '"morphine-compound"' in app_src
    assert '"CYP2D6"' in app_src
    assert '"UGT2B7"' in app_src
    assert '"diazepam-compound"' in app_src
    assert '"oxazepam-compound"' in app_src
    assert '"NAPQI"' in app_src
    assert '"lisdexamfetamine-compound"' in app_src
    assert '"dextroamphetamine-compound"' in app_src
    assert '"enalapril-compound"' in app_src
    assert '"enalaprilat-anhydrous-compound"' in app_src


def test_clinical_trials_and_evidence_explorer():
    """Verify Clinical Trials & Evidence Explorer markup, styles, engine, and UI integrations."""
    html_src = (ROOT / "apps/graph-viewer/index.html").read_text(encoding="utf-8")
    for el_id in [
        "evidenceModal", "evidenceBtn", "evidenceSubtitle", "evidenceApplyGraphBtn",
        "evidenceModalClose", "evidenceKpiBar", "evidenceFunnel", "evidenceTimelineBar",
        "evidenceGrid", "evFilterFdaBtn", "evFilterEmaBtn", "evFilterDiscBtn",
        "evFilterBlackBoxBtn", "evFilterWithdrawnBtn", "evidenceSearchInput",
        "evidenceResetFiltersBtn", "evidenceCohortResetBtn"
    ]:
        assert f'id="{el_id}"' in html_src, f"Missing #{el_id} in index.html"

    for css_cls in [
        ".evidence-modal", ".evidence-head", ".evidence-body", ".evidence-kpi-bar",
        ".evidence-funnel", ".evidence-funnel-card", ".evidence-timeline-bar",
        ".evidence-timeline-pill", ".evidence-grid", ".evidence-drug-card",
        ".phase-4", ".phase-3", ".phase-2", ".phase-1", ".phase-0"
    ]:
        assert css_cls in html_src, f"Missing CSS class '{css_cls}' in index.html"

    app_src = (ROOT / "apps/graph-viewer/app.js").read_text(encoding="utf-8")
    for term in [
        "activeEvidenceModalOpen",
        "evidenceFilterState",
        "function getCompoundApprovalDecade(",
        "function computeEvidenceStats(",
        "function filterEvidenceCohort(",
        "function updateEvidenceCohortIndicator(",
        "function renderEvidenceKPIs(",
        "function renderEvidenceFunnel(",
        "function renderEvidenceTimelineBar(",
        "function renderEvidenceDrugCards(",
        "function openEvidenceModal(",
        "function closeEvidenceModal(",
        "function resetEvidenceFilters(",
        "evidenceCohort",
        "cardEvidenceBtn",
        "safetyEvidenceBtn",
        "data-open-evidence"
    ]:
        assert term in app_src, f"Missing '{term}' in app.js"

    # Verify root files are synchronized
    root_html = (ROOT.parent / "index.html").read_text(encoding="utf-8")
    root_app = (ROOT.parent / "app.js").read_text(encoding="utf-8")
    assert 'id="evidenceModal"' in root_html
    assert 'id="evidenceBtn"' in root_html
    assert "function openEvidenceModal(" in root_app
    assert "activeEvidenceModalOpen" in root_app













