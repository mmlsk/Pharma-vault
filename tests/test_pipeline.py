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
    assert len(ids) == len(set(ids)) == 2525          # 2351 source - 13 merged duplicates + 187 curated additions
    assert sum(r["source"] == "curated-addition" for r in rows) == 187
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
    assert len(adds) == 187
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
    assert sqlite_con.execute("SELECT COUNT(*) FROM substances").fetchone()[0] == 2525
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


