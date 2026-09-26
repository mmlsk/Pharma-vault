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
