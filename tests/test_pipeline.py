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

from pv_common import GROUP_TO_CLUSTER, PROCESSED, ROOT, SCHEMA, VAULT

FM = re.compile(r"^---\n(.*?)\n---\n", re.S)


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
    assert len(ids) == len(set(ids)) == 2537          # 2351 source - 1 merged duplicate + 187 curated additions
    assert sum(r["source"] == "curated-addition" for r in rows) == 187
    assert len({r["group"] for r in rows}) == 19


def test_every_group_mapped_to_cluster(rows):
    assert {r["group"] for r in rows} <= set(GROUP_TO_CLUSTER)
    assert len(set(GROUP_TO_CLUSTER.values())) == 9


def test_build_is_deterministic(tmp_path):
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
                 "expansion-resolution.csv", "identity-overrides.csv", "merges.csv"]:
        with open(ROOT / "data/curated" / name, encoding="utf-8") as fh:
            assert len(list(csv.DictReader(fh))) > 0


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


def test_enriched_notes_validate(validator, pk):
    enriched = [p for p in VAULT.glob("04 Compound Notes/*/*.md") if "pk-auto" in p.read_text(encoding="utf-8")[:4000]]
    assert len(enriched) == len(pk)
    for path in enriched[:300]:
        data = fm(path)
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


def test_pk_verification_consistency():
    ver = {v["compound_id"]: v for v in load("pk-verification.json")}
    assert ver and {v["status"] for v in ver.values()} <= {"consistent", "discrepant", "no-label-value", "no-label"}
    for v in ver.values():
        if v["status"] in ("consistent", "discrepant"):
            assert v["url"].startswith("https://dailymed.nlm.nih.gov/") and v["fields"]
    notes = {fm(p)["compound-id"]: fm(p) for p in list(VAULT.glob("04 Compound Notes/*/*.md"))[:800]}
    for cid, n in notes.items():
        if n.get("source-status") == "partially-verified":
            assert ver[cid]["status"] == "consistent"


def test_links_symmetric_and_targets_have_notes():
    links = load("links.json")
    rel = links["related"]
    for a, r in list(rel.items())[:400]:
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


def test_sqlite_export(tmp_path):
    import sqlite3
    subprocess.run([sys.executable, "export_sqlite.py"], cwd=ROOT / "scripts", check=True, capture_output=True)
    con = sqlite3.connect(PROCESSED / "pharma-vault.db")
    assert con.execute("SELECT COUNT(*) FROM substances").fetchone()[0] == 2537
    assert con.execute("SELECT COUNT(*) FROM compound_targets").fetchone()[0] > 1000
    con.close()
