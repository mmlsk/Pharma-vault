import json
import re
import sys
from pathlib import Path

import pytest
import yaml

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))
from pv_common import FRONTMATTER as FM, VAULT  # noqa: E402

_LOADER = getattr(yaml, "CSafeLoader", yaml.SafeLoader)


@pytest.fixture(scope="session")
def all_notes():
    return sorted((VAULT / "04 Compound Notes").rglob("*.md"))


@pytest.fixture(scope="session")
def parsed_notes(all_notes):
    out = []
    for p in all_notes:
        txt = p.read_text(encoding="utf-8")
        m = FM.match(txt)
        data = json.loads(json.dumps(yaml.load(m.group(1), Loader=_LOADER), default=str))
        out.append((p, data, txt[m.end():]))
    return out
