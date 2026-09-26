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
    assert len(ids) == len(set(ids)) == 2351
    assert len({r["group"] for r in rows}) == 18


def test_every_group_mapped_to_cluster(rows):
    assert {r["group"] for r in rows} <= set(GROUP_TO_CLUSTER)
    assert len(set(GROUP_TO_CLUSTER.values())) == 8


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
    for name in ["alias-map.csv", "expansion-backlog.csv", "storefront-new-compounds.csv"]:
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
        assert data["source-status"] == "auto-extracted" and data["review-status"] == "stub"
        assert not list(validator.iter_errors(data)), path.name


def test_graph_data_matches_catalogue(rows):
    js = (ROOT / "apps/graph-viewer/graph-data.js").read_text(encoding="utf-8")
    data = json.loads(js[js.index("{"): js.rindex("}") + 1])
    assert len(data["compounds"]) == len(rows)
    assert {c["id"] for c in data["compounds"]} == {r["compound_id"] for r in rows}
    n_core = len(data["core"])
    assert all(0 <= li < n_core for c in data["compounds"] for li in c["l"])
