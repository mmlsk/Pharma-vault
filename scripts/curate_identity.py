#!/usr/bin/env python3
"""Structure-level corroboration of ChEMBL identities (v3.3).

  python3 curate_identity.py fetch   # network: ChEMBL standard InChIKeys, PubChem CID/name -> InChIKey
  python3 curate_identity.py parse   # offline: data/processed/identity-review.json + identity-review.csv

For every compound whose ChEMBL id was NOT taken from the source catalogue, the ChEMBL standard
InChIKey (of the id and of its parent) is compared with structures from independent PubChem evidence:

  * infobox-cid : the PubChem CID printed in the matched Wikipedia {{Infobox drug}};
  * name-cid    : PubChem PUG REST name lookup of the matched name (only if it yields <= 3 CIDs).

Verdicts (InChIKey = connectivity block 14 chars + stereo/isotope block + protonation flag):
  structure-confirmed  full InChIKey equal to ChEMBL id or parent (salt-insensitive via parent);
  connectivity-match   same skeleton, different stereo/isotope layer -> stereo form needs review;
  conflict             PubChem structures exist, none shares the skeleton -> manual decision required;
  no-chembl-structure  ChEMBL record has no small-molecule structure (biologics, mixtures);
  formula-match        same molecular formula, different InChIKey (tautomer / representation);
  inn-match-ema        no comparable structure, but ChEMBL pref_name = INN of an EU centrally authorised product;
  no-evidence          no PubChem structure available.

Manual decisions live in data/curated/identity-decisions.csv (compound_id, decision, chembl_id,
reviewer, reason); `reject` removes the identity, `replace` sets a different ChEMBL id,
`confirm` records an accepted conflict/connectivity case. Decisions are applied by enrich_chembl.py.
"""
from __future__ import annotations

import argparse
import csv
import json
import re
import time
import urllib.error
import urllib.parse
import urllib.request
from collections import Counter
from concurrent.futures import ThreadPoolExecutor
from datetime import date

from enrich_chembl import API, CH, PUBCHEM, UA, chunks, get_all, load_cache, save_cache
from pv_common import CURATED, PROCESSED, ROOT

STRUCT = "structures.jsonl"          # ChEMBL id -> standard InChIKey
PC_CID = "pubchem-cid.jsonl"          # PubChem CID -> InChIKey/title
PC_NAME = "pubchem-name-evidence.jsonl"  # name -> CIDs (separate from the expansion cache)
CHECKED_TIERS = ("wikipedia-infobox", "chembl-name-match", "curated-identity")


def http_json(url: str):
    for attempt in range(5):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=60) as fh:
                return json.load(fh)
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return None
            time.sleep(2 ** attempt)
        except Exception:  # noqa: BLE001
            time.sleep(2 ** attempt)
    return None


def infobox_cids() -> dict:
    out = {}
    for line in (ROOT / "data/enrichment/wikipedia-infobox.jsonl").read_text(encoding="utf-8").splitlines():
        rec = json.loads(line)
        m = re.match(r"\s*(\d+)", rec["fields"].get("PubChem", ""))
        if m:
            out[rec["compound_id"]] = int(m.group(1))
    return out


def chembl_records() -> list[dict]:
    return json.loads((PROCESSED / "chembl.json").read_text(encoding="utf-8"))


def fetch() -> None:
    recs = chembl_records()
    st = load_cache(STRUCT, "id")
    want = sorted({r["identity"][k] for r in recs for k in ("chembl-id", "parent-chembl-id")} - set(st))
    for part in chunks(want, 50):
        got = get_all("molecule", "molecules", {"molecule_chembl_id__in": ",".join(part),
                                                 "only": "molecule_chembl_id,molecule_structures"})
        for m in got:
            s = m.get("molecule_structures") or {}
            st[m["molecule_chembl_id"]] = {"id": m["molecule_chembl_id"], "inchikey": s.get("standard_inchi_key")}
        for x in part:
            st.setdefault(x, {"id": x, "inchikey": None})
    save_cache(STRUCT, st)
    print(f"chembl structures={len(st)}", flush=True)

    ib = infobox_cids()
    checked = [r for r in recs if r["identity"]["source"] in CHECKED_TIERS]
    cids = load_cache(PC_CID, "cid")
    want = sorted({ib[r["compound_id"]] for r in checked if r["compound_id"] in ib}
                  - {k for k, v in cids.items() if "formula" in v})
    props_into(cids, want)
    save_cache(PC_CID, cids)
    print(f"pubchem cids={len(cids)}", flush=True)

    names = load_cache(PC_NAME, "query")
    todo = sorted({r["identity"]["matched-name"].lower() for r in checked if r["identity"].get("matched-name")} - set(names))

    def one(q):
        data = http_json(f"{PUBCHEM}/compound/name/{urllib.parse.quote(q, safe='')}/property/InChIKey,Title,MolecularFormula/JSON")
        time.sleep(0.4)
        props = ((data or {}).get("PropertyTable") or {}).get("Properties", [])
        return {"query": q, "retrieved": date.today().isoformat(), "chembl": None,
                "cids": [{"cid": p["CID"], "inchikey": p.get("InChIKey"), "title": p.get("Title"),
                          "formula": p.get("MolecularFormula")} for p in props[:10]]}

    with ThreadPoolExecutor(2) as ex:
        for i, rec in enumerate(ex.map(one, todo)):
            names[rec["query"]] = rec
            if i % 100 == 0:
                print(f"  names {i}/{len(todo)}", flush=True)
    save_cache(PC_NAME, names)
    print(f"pubchem names={len(names)}")

    # salts / mixtures: for evidence CIDs that still conflict, add the PubChem *parent* compound
    parse(write=False)
    rev = json.loads((PROCESSED / "identity-review.json").read_text(encoding="utf-8")) if (PROCESSED / "identity-review.json").exists() else []
    need = sorted({e["cid"] for x in rev if x["verdict"] == "conflict" for e in x["evidence"]} - {k for k, v in cids.items() if "parent" in v})
    for c in need:
        data = http_json(f"{PUBCHEM}/compound/cid/{c}/cids/JSON?cids_type=parent") or {}
        par = ((data.get("IdentifierList") or {}).get("CID") or [None])[0]
        cids.setdefault(c, {"cid": c, "inchikey": None, "title": None})["parent"] = par
        time.sleep(0.3)
    props_into(cids, sorted({v["parent"] for v in cids.values() if v.get("parent")} - set(cids)))
    save_cache(PC_CID, cids)
    print(f"pubchem parents resolved={len(need)}")


def props_into(cids: dict, want: list) -> None:
    for part in chunks(want, 100):
        data = http_json(f"{PUBCHEM}/compound/cid/{','.join(map(str, part))}/property/InChIKey,Title,MolecularFormula/JSON") or {}
        for p in (data.get("PropertyTable") or {}).get("Properties", []):
            cids[p["CID"]] = {**cids.get(p["CID"], {}), "cid": p["CID"], "inchikey": p.get("InChIKey"),
                              "title": p.get("Title"), "formula": p.get("MolecularFormula")}
        for x in part:
            cids.setdefault(x, {"cid": x, "inchikey": None, "title": None, "formula": None})
        time.sleep(0.3)


def verdict(keys: set[str], ref: set[str], formulas: set[str] = frozenset(), ref_formulas: set[str] = frozenset()) -> str:
    if not ref:
        return "no-chembl-structure"
    if not keys:
        return "no-evidence"
    if keys & ref:
        return "structure-confirmed"
    if {k[:14] for k in keys} & {k[:14] for k in ref}:
        return "connectivity-match"
    if formulas & ref_formulas:
        return "formula-match"   # same composition, different InChI layer (tautomer / representation)
    return "conflict"


def parse(write: bool = True) -> None:
    recs = chembl_records()
    mols = load_cache("molecules.jsonl", "molecule_chembl_id")
    cat = {r["compound_id"]: r for r in json.loads((PROCESSED / "substances.json").read_text(encoding="utf-8"))}
    st, cids = load_cache(STRUCT, "id"), load_cache(PC_CID, "cid")
    names, ib = load_cache(PC_NAME, "query"), infobox_cids()
    out = []
    for r in recs:
        i = r["identity"]
        if i["source"] not in CHECKED_TIERS:
            continue
        ref = {k for k in ((st.get(i["chembl-id"]) or {}).get("inchikey"), (st.get(i["parent-chembl-id"]) or {}).get("inchikey")) if k}
        rf = {((mols.get(x) or {}).get("molecule_properties") or {}).get("full_molformula") for x in (i["chembl-id"], i["parent-chembl-id"])} - {None}
        ev = []

        def add(via, c, title=None):
            x = cids.get(c) or {}
            if x.get("inchikey"):
                ev.append({"via": via, "cid": c, "inchikey": x["inchikey"], "formula": x.get("formula"), "title": x.get("title") or title})
            par = x.get("parent")
            if par and par != c and (cids.get(par) or {}).get("inchikey"):
                ev.append({"via": via + "-parent", "cid": par, "inchikey": cids[par]["inchikey"],
                           "formula": cids[par].get("formula"), "title": cids[par].get("title")})

        c = ib.get(r["compound_id"])
        if c:
            add("infobox-cid", c)
        n = names.get((i.get("matched-name") or "").lower())
        if n and 0 < len(n["cids"]) <= 3:
            for x in n["cids"]:
                if x["inchikey"]:
                    if not (cids.get(x["cid"]) or {}).get("inchikey"):
                        cids[x["cid"]] = {**cids.get(x["cid"], {}), "cid": x["cid"], "inchikey": x["inchikey"],
                                          "title": x["title"], "formula": x.get("formula")}
                    add("name-cid", x["cid"], x["title"])
        keys, forms = {e["inchikey"] for e in ev}, {e["formula"] for e in ev if e["formula"]}
        # an infobox CID is page-specific -> it outranks a name lookup when both exist
        ibe = [e for e in ev if e["via"].startswith("infobox")]
        v1 = verdict({e["inchikey"] for e in ibe}, ref, {e["formula"] for e in ibe if e["formula"]}, rf) if ibe else None
        v = v1 if v1 and v1 != "conflict" else verdict(keys, ref, forms, rf)
        out.append({"compound_id": r["compound_id"], "name": cat[r["compound_id"]]["name"], "tier": i["source"],
                    "chembl-id": i["chembl-id"], "pref-name": i.get("pref-name"), "matched-name": i.get("matched-name"),
                    "chembl-inchikeys": sorted(ref), "evidence": ev, "verdict": v})
    # biologics / mixtures: an exact INN match with an EU centrally authorised product is the
    # regulatory identity (INNs are unique by design) - recorded as a separate, weaker verdict
    meds = ROOT / "data/enrichment/ema/medicines.jsonl"
    if meds.exists():
        from verify_pk_ema import is_single, norm
        inns = {norm(m["international_non_proprietary_name_common_name"]): m["ema_product_number"]
                for m in map(json.loads, meds.read_text(encoding="utf-8").splitlines()) if is_single(m)}
        for x in out:
            n = norm(x["pref-name"] or "")
            if x["verdict"] in ("no-chembl-structure", "no-evidence") and n in inns:
                x["verdict"] = "inn-match-ema"
                x["evidence"].append({"via": "ema-inn", "ema-number": inns[n]})
    out.sort(key=lambda x: x["compound_id"])
    dec = decisions()
    for x in out:
        d = dec.get(x["compound_id"])
        if d and d["decision"] == "confirm" and (not d["chembl_id"] or d["chembl_id"] == x["chembl-id"]):
            x["decision"] = {"decision": "confirm", "reviewer": d["reviewer"], "reason": d["reason"]}
    if not write:
        (PROCESSED / "identity-review.json").write_text(json.dumps(out, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
        return
    (PROCESSED / "identity-review.json").write_text(json.dumps(out, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    with open(PROCESSED / "identity-review.csv", "w", newline="", encoding="utf-8") as fh:
        w = csv.writer(fh)
        w.writerow(["compound_id", "name", "tier", "chembl_id", "chembl_pref_name", "matched_name", "verdict",
                    "chembl_inchikey", "pubchem_cids", "pubchem_titles"])
        for x in out:
            w.writerow([x["compound_id"], x["name"], x["tier"], x["chembl-id"], x["pref-name"], x["matched-name"] or "",
                        x["verdict"], ";".join(x["chembl-inchikeys"]), ";".join(str(e.get("cid") or e.get("ema-number")) for e in x["evidence"]),
                        ";".join(e.get("title") or "" for e in x["evidence"])])
    cov = {t: dict(sorted(Counter(x["verdict"] for x in out if x["tier"] == t).items())) for t in CHECKED_TIERS}
    (ROOT / "data/enrichment/identity-review-coverage.json").write_text(json.dumps(cov, indent=1) + "\n")
    print(json.dumps(cov, indent=1))


def decisions() -> dict:
    p = CURATED / "identity-decisions.csv"
    if not p.exists():
        return {}
    return {r["compound_id"]: r for r in csv.DictReader(open(p, encoding="utf-8"))}


if __name__ == "__main__":
    a = argparse.ArgumentParser()
    a.add_argument("stage", choices=["fetch", "parse"])
    {"fetch": fetch, "parse": parse}[a.parse_args().stage]()
