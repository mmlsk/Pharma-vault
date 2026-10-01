#!/usr/bin/env python3
"""ChEMBL identity + attribute enrichment, and catalogue expansion.

Stages (network stages write append-only caches under data/enrichment/chembl/, so the
offline `parse` stage - used by CI - is deterministic):

  python3 enrich_chembl.py resolve   # network: name -> ChEMBL id for catalogue rows lacking an id
                                     #          and for expansion candidates; writes data/curated/additions.csv
  python3 enrich_chembl.py fetch     # network: molecules, mechanisms, targets, ATC classes for every resolved id
  python3 enrich_chembl.py parse     # offline: data/processed/chembl.json (+ coverage)

Identity rules (nothing is inferred):
  * id precedence: catalogue (source text) > Wikipedia infobox ChEMBL field > exact ChEMBL name match;
  * a name match is accepted only when every hit collapses to ONE parent molecule (salts -> parent);
  * expansion candidates are admitted only with such a unique match and only if the parent id is not
    already present in the catalogue (otherwise they are recorded as duplicates, not added);
  * mechanisms/targets are taken for the PARENT molecule, as curated by ChEMBL.
"""
from __future__ import annotations

import argparse
import csv
import json
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from datetime import date

from enrich_pk import candidates as name_candidates
from pv_common import CURATED, PROCESSED, ROOT, normalize

CH = ROOT / "data/enrichment/chembl"
API = "https://www.ebi.ac.uk/chembl/api/data"
UA = "Pharma-vault/3.2 (https://github.com/mmlsk/Pharma-vault; educational pharmacology research)"
MOL_ONLY = ("molecule_chembl_id,pref_name,max_phase,molecule_type,first_approval,atc_classifications,"
            "black_box_warning,withdrawn_flag,molecule_properties,molecule_hierarchy,oral,parenteral,topical,"
            "natural_product,prodrug,therapeutic_flag")
INT_PROPS = {"hba", "hbd", "rtb", "num_ro5_violations"}
PROPS = ["full_mwt", "mw_freebase", "alogp", "psa", "hba", "hbd", "rtb", "num_ro5_violations", "qed_weighted", "full_molformula"]

# expansion: backlog domain -> catalogue group
DOMAIN_TO_GROUP = {
    "Emerging CNS agents": "neuropsych",
    "Psychoplastogens": "neuropsych",
    "Grey-market nootropics": "nootropic",
    "Supplements and nutraceuticals": "ancillary",
    "Neuroactive peptides": "peptides",
    "Designer-drug families": "nps",
}
# extra *triage* labels by backlog subdomain (routing only - not compound-level facts)
SUBDOMAIN_TRIAGE = {
    "Novel opioids": ["sedation-respiratory-depression"],
    "Designer benzodiazepines": ["sedation-respiratory-depression"],
    "Synthetic stimulants": ["cardiovascular-load", "serotonergic-or-dopaminergic-load"],
    "Reference psychedelics": ["serotonergic-or-dopaminergic-load"],
    "Dissociatives": ["sedation-respiratory-depression"],
}
NOT_AN_ENTITY = re.compile(r"\b(if represented|mixtures?|metabolites|analogues|analogs|successor|family|families|series|extracts?)\b", re.I)


# --------------------------------------------------------------------------- io helpers
def get(path: str, params: dict) -> dict:
    url = f"{API}/{path}.json?" + urllib.parse.urlencode(params)
    last = None
    for attempt in range(6):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json"})
            with urllib.request.urlopen(req, timeout=90) as fh:
                return json.load(fh)
        except Exception as exc:  # noqa: BLE001 - retry any transient failure
            last = exc
            time.sleep(1.5 * 2 ** attempt)
    raise RuntimeError(f"{url}: {last}")


def get_all(path: str, key: str, params: dict) -> list:
    out, offset = [], 0
    while True:
        data = get(path, {**params, "limit": 1000, "offset": offset})
        out += data[key]
        if not data["page_meta"]["next"]:
            return out
        offset += 1000


def load_cache(name: str, key: str) -> dict:
    p = CH / name
    if not p.exists():
        return {}
    return {json.loads(l)[key]: json.loads(l) for l in p.read_text(encoding="utf-8").splitlines() if l.strip()}


def save_cache(name: str, recs: dict) -> None:
    CH.mkdir(parents=True, exist_ok=True)
    with open(CH / name, "w", encoding="utf-8") as fh:
        for k in sorted(recs):
            fh.write(json.dumps(recs[k], ensure_ascii=False, sort_keys=True) + "\n")


def chunks(seq, n):
    seq = list(seq)
    for i in range(0, len(seq), n):
        yield seq[i:i + n]


# --------------------------------------------------------------------------- resolve
def lookup(q: str) -> dict:
    only = "molecule_chembl_id,pref_name,max_phase,molecule_hierarchy"
    hits = get("molecule", {"molecule_synonyms__molecule_synonym__iexact": q, "only": only, "limit": 20})["molecules"]
    how = "synonym"
    if not hits:
        hits = get("molecule", {"pref_name__iexact": q, "only": only, "limit": 20})["molecules"]
        how = "pref_name"
    return {"query": q.lower(), "how": how if hits else None, "retrieved": date.today().isoformat(),
            "hits": [{"id": h["molecule_chembl_id"], "pref_name": h["pref_name"], "max_phase": h["max_phase"],
                      "parent": (h.get("molecule_hierarchy") or {}).get("parent_chembl_id") or h["molecule_chembl_id"]}
                     for h in hits]}


PUBCHEM = "https://pubchem.ncbi.nlm.nih.gov/rest/pug"


def pubchem_lookup(q: str) -> dict:
    """PubChem PUG REST name -> CIDs (+ InChIKey/title of each), then InChIKey -> ChEMBL (exact structure)."""
    url = f"{PUBCHEM}/compound/name/{urllib.parse.quote(q, safe='')}/property/InChIKey,Title,MolecularFormula/JSON"
    rec = {"query": q.lower(), "retrieved": date.today().isoformat(), "cids": [], "chembl": None}
    for attempt in range(5):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=60) as fh:
                props = json.load(fh)["PropertyTable"]["Properties"]
            rec["cids"] = [{"cid": p["CID"], "inchikey": p.get("InChIKey"), "title": p.get("Title"),
                            "formula": p.get("MolecularFormula")} for p in props[:10]]
            break
        except urllib.error.HTTPError as e:
            if e.code == 404:
                break
            time.sleep(2 ** attempt)
        except Exception:  # noqa: BLE001
            time.sleep(2 ** attempt)
    time.sleep(0.35)  # PubChem: <= 5 requests/s
    if len(rec["cids"]) == 1 and rec["cids"][0]["inchikey"]:
        hits = get("molecule", {"molecule_structures__standard_inchi_key": rec["cids"][0]["inchikey"],
                                "only": "molecule_chembl_id,pref_name,max_phase,molecule_hierarchy"})["molecules"]
        if hits:
            h = hits[0]
            rec["chembl"] = {"id": h["molecule_chembl_id"], "pref_name": h["pref_name"],
                             "parent": (h.get("molecule_hierarchy") or {}).get("parent_chembl_id") or h["molecule_chembl_id"]}
    return rec


def unique_parent(rec: dict | None) -> dict | None:
    if not rec or not rec["hits"]:
        return None
    parents = {h["parent"] for h in rec["hits"]}
    if len(parents) != 1:
        return None
    parent = parents.pop()
    exact = [h for h in rec["hits"] if h["id"] == parent] or rec["hits"]
    return {"id": exact[0]["id"], "parent": parent, "pref_name": exact[0]["pref_name"], "how": rec["how"]}


def good_query(q: str, min_len: int = 4) -> bool:
    return len(normalize(q)) >= min_len and not NOT_AN_ENTITY.search(q)


def pubchem_unique(rec: dict | None) -> dict | None:
    """Accept a PubChem name match only if it maps to exactly one CID."""
    if not rec or len(rec["cids"]) != 1:
        return None
    c = rec["cids"][0]
    ch = rec.get("chembl")
    return {"id": ch["id"] if ch else "", "parent": ch["parent"] if ch else f"CID{c['cid']}",
            "pref_name": (ch or {}).get("pref_name") or c["title"], "how": "PubChem name → CID" + (" → InChIKey → ChEMBL" if ch else ""),
            "cid": c["cid"], "inchikey": c["inchikey"]}


def candidate_names(text: str) -> list[str]:
    text = re.sub(r"\b(formerly|previously|also)\s+", "", text.strip())
    names = []
    m = re.match(r"^(.*?),?\s+also known as\s+(.*)$", text, re.I)
    if m:
        names += [m.group(1), m.group(2)]
    else:
        names.append(text)
    out = []
    for n in names:
        out += re.findall(r"\(([^()]+)\)", n)
        n = re.sub(r"\s*\([^()]*\)\s*", " ", n).strip()
        out += [p.strip() for p in re.split(r"\s*/\s*|,\s+|\s+or\s+", n) if p.strip()]
    seen, res = set(), []
    for n in out:
        n = re.sub(r"\s+(HCl|hydrochloride|dihydrochloride|mesylate|99%)$", "", n, flags=re.I).strip()
        if n and n.lower() not in seen:
            seen.add(n.lower())
            res.append(n)
    return res


def infobox_ids() -> dict:
    out = {}
    p = ROOT / "data/enrichment/wikipedia-infobox.jsonl"
    for line in p.read_text(encoding="utf-8").splitlines():
        rec = json.loads(line)
        m = re.match(r"\s*(?:CHEMBL)?(\d+)", rec["fields"].get("ChEMBL", ""))
        if m:
            out[rec["compound_id"]] = "CHEMBL" + m.group(1)
    return out


def source_rows() -> list[dict]:
    rows = json.loads((PROCESSED / "substances.json").read_text(encoding="utf-8"))
    return [r for r in rows if r["source"] != "curated-addition"]


SALT = re.compile(r"\b(hydrochloride|dihydrochloride|hydrobromide|chloride|bromide|tosylate|maleate|mesylate|besylate|sulfate|"
                  r"sulphate|acetate|citrate|fumarate|tartrate|succinate|phosphate|sodium|potassium|calcium|magnesium|"
                  r"hemihydrate|hydrate|nitrate|lactate|gluconate|oxalate|malate|pamoate|dimesylate|decanoate|propionate|"
                  r"enanthate|cypionate|undecanoate)\b", re.I)


def dedupe_key(mol_id: str, parent: str, pref_name: str | None) -> str:
    """Salts/esters collapse to the parent; isotopologues/other named children (e.g. deupsilocin) do not."""
    return parent if (mol_id == parent or not mol_id or SALT.search(pref_name or "")) else mol_id


def overrides() -> dict:
    p = CURATED / "identity-overrides.csv"
    return {r["candidate"]: r for r in csv.DictReader(open(p, encoding="utf-8"))} if p.exists() else {}


def expansion_candidates() -> list[dict]:
    out = []
    for r in csv.DictReader(open(CURATED / "expansion-backlog.csv", encoding="utf-8")):
        if r["already_in_catalog_as"]:
            continue
        out.append({"label": r["candidate"], "origin": f"backlog: {r['domain']}" + (f" / {r['subdomain']}" if r["subdomain"] else ""),
                    "group": DOMAIN_TO_GROUP[r["domain"]], "triage": SUBDOMAIN_TRIAGE.get(r["subdomain"], [])})
    for r in csv.DictReader(open(CURATED / "storefront-new-compounds.csv", encoding="utf-8")):
        if not r["catalog_compound_id"]:
            out.append({"label": r["product_name"], "origin": f"storefront: {r['found_in_pdf']}", "group": "nootropic", "triage": []})
    ov = overrides()
    for c in out:
        o = ov.get(c["label"])
        if o:
            c["override"] = o
    return out


def names_of(c: dict) -> list[str]:
    o = c.get("override")
    if o and o["action"] == "query":
        return [x.strip() for x in o["value"].split(";") if x.strip()] + [n for n in candidate_names(c["label"]) if len(normalize(n)) <= 4][:1]
    return candidate_names(c["label"])


def resolve() -> None:
    cache = load_cache("name-lookup.jsonl", "query")
    rows, ib = source_rows(), infobox_ids()
    queries = set()
    for r in rows:
        if not r["chembl_id"] and r["compound_id"] not in ib:
            queries |= {q for q in name_candidates(r)[:4] if good_query(q)}
    cands = expansion_candidates()
    for c in cands:
        queries |= {q for q in names_of(c) if good_query(q)}
    todo = sorted(q for q in queries if q.lower() not in cache)
    print(f"lookups: cached={len(cache)} todo={len(todo)}", flush=True)
    with ThreadPoolExecutor(6) as ex:
        for i, rec in enumerate(ex.map(lookup, todo)):
            cache[rec["query"]] = rec
            if i % 200 == 0:
                print(f"  {i}/{len(todo)}", flush=True)
                save_cache("name-lookup.jsonl", cache)
    save_cache("name-lookup.jsonl", cache)
    # tier 2: PubChem for candidates (and catalogue rows) that ChEMBL names could not resolve
    pc = load_cache("pubchem-lookup.jsonl", "query")
    pq = set()
    for c in cands:
        qs = [q for q in names_of(c) if good_query(q, 3)]
        if not any(unique_parent(cache.get(q.lower())) for q in qs):
            pq |= set(qs)
    for r in rows:
        if not r["chembl_id"] and r["compound_id"] not in ib:
            qs = [q for q in name_candidates(r)[:3] if good_query(q)]
            if not any(unique_parent(cache.get(q.lower())) for q in qs):
                pq |= set(qs)
    todo = sorted(q for q in pq if q.lower() not in pc)
    print(f"pubchem: cached={len(pc)} todo={len(todo)}", flush=True)
    with ThreadPoolExecutor(3) as ex:
        for rec in ex.map(pubchem_lookup, todo):
            pc[rec["query"]] = rec
    save_cache("pubchem-lookup.jsonl", pc)
    write_additions(rows, ib, cache, cands, pc)


def write_additions(rows, ib, cache, cands, pc=None) -> None:
    pc = pc if pc is not None else load_cache("pubchem-lookup.jsonl", "query")
    present = {}
    mols = load_cache("molecules.jsonl", "molecule_chembl_id")
    ident = identities()
    for r in rows:
        i = ident.get(r["compound_id"])
        if i:
            cid = i["chembl-id"]
            m = mols.get(cid) or {}
            par = parent_of(mols, cid)
            present.setdefault(cid, r["compound_id"])
            present.setdefault(dedupe_key(cid, par, m.get("pref_name")), r["compound_id"])
    names = {normalize(n): r["compound_id"] for r in rows for n in [r["name"], *r["aliases"]]}
    ids = {r["compound_id"] for r in rows}
    added, report = {}, []
    for c in cands:
        o = c.get("override") or {}
        if o.get("action") in ("reject", "alias-of"):
            report.append({"candidate": c["label"], "origin": c["origin"], "status": "rejected" if o["action"] == "reject" else "duplicate-name",
                           "chembl_id": "", "pubchem_cid": "", "chembl_pref_name": "", "note": o["value"] or o["reason"]})
            continue
        qs = [q for q in names_of(c) if good_query(q, 3)]
        dup_name = next((names[normalize(q)] for q in qs if normalize(q) in names), None)
        hit = next((u for q in qs if (u := unique_parent(cache.get(q.lower())))), None) \
            or next((u for q in qs if (u := pubchem_unique(pc.get(q.lower()))) and (u["id"] or len(normalize(q)) > 3)), None)
        status, note = "added", ""
        if dup_name:
            status, note = "duplicate-name", dup_name
        elif not hit:
            amb = any(cache.get(q.lower()) and cache[q.lower()]["hits"] for q in qs)
            amb = amb or any(pc.get(q.lower()) and len(pc[q.lower()]["cids"]) > 1 for q in qs)
            status = "ambiguous" if amb else "not-found"
        key = dedupe_key(hit["id"], hit["parent"], hit["pref_name"]) if hit else None
        if hit and status == "added" and (key in present or (hit["id"] and hit["id"] in present)):
            status, note = "duplicate-chembl", present.get(key) or present.get(hit["id"])
        elif hit and status == "added" and key in added:
            status, note = "duplicate-candidate", added[key]["compound_id"]
        report.append({"candidate": c["label"], "origin": c["origin"], "status": status,
                       "chembl_id": hit["id"] if hit else "", "pubchem_cid": hit.get("cid", "") if hit else "", "chembl_pref_name": hit["pref_name"] if hit else "", "note": note})
        if status != "added":
            continue
        base = qs[0] if qs else c["label"]
        pn = hit["pref_name"] or ""
        inn_like = re.fullmatch(r"[A-Za-z][A-Za-z \-]{4,39}", pn) is not None
        if len(normalize(base)) <= 4 and inn_like:  # "LSD" -> INN "Lysergide" as name, abbreviation as alias
            qs = [pn.title() if pn.isupper() else pn] + qs
            base = qs[0]
        slug = re.sub(r"[^a-z0-9]+", "-", base.lower()).strip("-") + "-compound"
        while slug in ids:
            slug = slug.replace("-compound", "-x-compound")
        ids.add(slug)
        extra = pn.title() if pn.isupper() else pn
        aliases = [q for q in qs[1:]] + ([extra] if pn and len(pn) <= 60 and normalize(pn) not in {normalize(q) for q in qs} else [])
        added[key] = {"compound_id": slug, "name": base, "aliases": "; ".join(aliases), "group": c["group"],
                                "chembl_id": hit["id"], "identity_key": key, "chembl_pref_name": hit["pref_name"] or "",
                                "pubchem_cid": hit.get("cid", ""), "match": hit["how"], "origin": c["origin"], "extra_triage": "; ".join(c["triage"])}
        for q in qs:
            names[normalize(q)] = slug
    cols = ["compound_id", "name", "aliases", "group", "chembl_id", "identity_key", "chembl_pref_name", "pubchem_cid", "match", "origin", "extra_triage"]
    with open(CURATED / "additions.csv", "w", newline="", encoding="utf-8") as fh:
        w = csv.DictWriter(fh, fieldnames=cols, lineterminator="\n")
        w.writeheader()
        w.writerows(sorted(added.values(), key=lambda a: a["compound_id"]))
    with open(CURATED / "expansion-resolution.csv", "w", newline="", encoding="utf-8") as fh:
        w = csv.DictWriter(fh, fieldnames=["candidate", "origin", "status", "chembl_id", "pubchem_cid", "chembl_pref_name", "note"], lineterminator="\n")
        w.writeheader()
        w.writerows(report)
    from collections import Counter
    print("expansion:", dict(Counter(r["status"] for r in report)))


# --------------------------------------------------------------------------- fetch
def identities() -> dict:
    """compound_id -> {chembl_id, source, pref_name?}"""
    rows = json.loads((PROCESSED / "substances.json").read_text(encoding="utf-8"))
    ib, cache = infobox_ids(), load_cache("name-lookup.jsonl", "query")
    mols = load_cache("molecules.jsonl", "molecule_chembl_id")
    if mols:  # drop infobox ids that ChEMBL does not know (obsolete/mistyped) -> fall back to name match
        ib = {k: v for k, v in ib.items() if v in mols}
    out = {}
    for r in rows:
        if r["chembl_id"]:
            out[r["compound_id"]] = {"chembl-id": r["chembl_id"],
                                     "source": "curated-addition" if r["source"] == "curated-addition" else "catalogue"}
        elif r["compound_id"] in ib:
            out[r["compound_id"]] = {"chembl-id": ib[r["compound_id"]], "source": "wikipedia-infobox"}
        else:
            for q in name_candidates(r)[:4]:
                u = unique_parent(cache.get(q.lower())) if good_query(q) else None
                if u:
                    out[r["compound_id"]] = {"chembl-id": u["id"], "source": "chembl-name-match", "matched-name": q}
                    break
    # v3.3: manual identity decisions (data/curated/identity-decisions.csv) - reject / replace
    p = CURATED / "identity-decisions.csv"
    for d in (csv.DictReader(open(p, encoding="utf-8")) if p.exists() else []):
        if d["decision"] == "reject":
            out.pop(d["compound_id"], None)
        elif d["decision"] == "replace":
            out[d["compound_id"]] = {"chembl-id": d["chembl_id"], "source": "curated-identity"}
    return out


def fetch() -> None:
    ident = identities()
    mols = load_cache("molecules.jsonl", "molecule_chembl_id")
    # + every infobox id, so enrich_pk can compare salt/parent hierarchies offline
    want = sorted(({v["chembl-id"] for v in ident.values()} | set(infobox_ids().values())) - set(mols))
    for part in chunks(want, 50):
        for m in get_all("molecule", "molecules", {"molecule_chembl_id__in": ",".join(part), "only": MOL_ONLY}):
            mols[m["molecule_chembl_id"]] = m
    parents = sorted({(m.get("molecule_hierarchy") or {}).get("parent_chembl_id") or k for k, m in mols.items()} - set(mols))
    for part in chunks(parents, 50):
        for m in get_all("molecule", "molecules", {"molecule_chembl_id__in": ",".join(part), "only": MOL_ONLY}):
            mols[m["molecule_chembl_id"]] = m
    save_cache("molecules.jsonl", mols)
    print(f"molecules={len(mols)} (missing ids: {len(set(want) - set(mols))})", flush=True)

    mech = load_cache("mechanisms.jsonl", "molecule_chembl_id")
    pids = sorted({parent_of(mols, k) for k in mols} - set(mech))
    for part in chunks(pids, 40):
        got = {p: [] for p in part}
        for x in get_all("mechanism", "mechanisms", {"molecule_chembl_id__in": ",".join(part)}):
            got.setdefault(x["molecule_chembl_id"], []).append(
                {k: x.get(k) for k in ("mec_id", "mechanism_of_action", "action_type", "target_chembl_id", "direct_interaction", "disease_efficacy")}
                | {"refs": [{"type": r.get("ref_type"), "url": r.get("ref_url")} for r in (x.get("mechanism_refs") or [])[:3]]})
        for p, lst in got.items():
            mech[p] = {"molecule_chembl_id": p, "mechanisms": sorted(lst, key=lambda m: m["mec_id"] or 0)}
    save_cache("mechanisms.jsonl", mech)

    tg = load_cache("targets.jsonl", "target_chembl_id")
    tids = sorted({m["target_chembl_id"] for v in mech.values() for m in v["mechanisms"] if m["target_chembl_id"]} - set(tg))
    for part in chunks(tids, 50):
        for t in get_all("target", "targets", {"target_chembl_id__in": ",".join(part), "only": "target_chembl_id,pref_name,target_type,organism"}):
            tg[t["target_chembl_id"]] = t
    save_cache("targets.jsonl", tg)

    atc = load_cache("atc.jsonl", "level5")
    codes = sorted({c for m in mols.values() for c in (m.get("atc_classifications") or [])} - set(atc))
    for part in chunks(codes, 50):
        for a in get_all("atc_class", "atc", {"level5__in": ",".join(part)}):
            atc[a["level5"]] = a
    save_cache("atc.jsonl", atc)
    print(f"mechanism-sets={len(mech)} targets={len(tg)} atc={len(atc)}")


def parent_of(mols: dict, cid: str) -> str:
    m = mols.get(cid) or {}
    return (m.get("molecule_hierarchy") or {}).get("parent_chembl_id") or cid


# --------------------------------------------------------------------------- parse
def num(x):
    try:
        return round(float(x), 2)
    except (TypeError, ValueError):
        return None


def parse() -> None:
    ident = identities()
    mols, mech = load_cache("molecules.jsonl", "molecule_chembl_id"), load_cache("mechanisms.jsonl", "molecule_chembl_id")
    tg, atc = load_cache("targets.jsonl", "target_chembl_id"), load_cache("atc.jsonl", "level5")
    out, missing = [], []
    for cid in sorted(ident):
        i = ident[cid]
        m = mols.get(i["chembl-id"])
        if not m:
            missing.append(cid)
            continue
        pid = parent_of(mols, i["chembl-id"])
        pm = mols.get(pid, m)
        props = pm.get("molecule_properties") or {}
        rec = {
            "compound_id": cid,
            "identity": {"chembl-id": i["chembl-id"], "parent-chembl-id": pid, "source": i["source"],
                         "dedupe-key": dedupe_key(i["chembl-id"], pid, m.get("pref_name")),
                         "pref-name": m.get("pref_name") or pm.get("pref_name"), **({"matched-name": i["matched-name"]} if "matched-name" in i else {})},
            "molecule-type": pm.get("molecule_type"),
            "max-phase": num(pm.get("max_phase")),
            "first-approval": pm.get("first_approval"),
            "black-box-warning": bool(pm.get("black_box_warning")),
            "withdrawn": bool(pm.get("withdrawn_flag")),
            "natural-product": pm.get("natural_product") == 1,
            "prodrug": pm.get("prodrug") == 1,
            "routes-flagged": [r for r in ("oral", "parenteral", "topical") if pm.get(r)],
            "atc": [{"code": c, "level1": atc.get(c, {}).get("level1_description"), "level2": atc.get(c, {}).get("level2_description"),
                     "level3": atc.get(c, {}).get("level3_description"), "level4": atc.get(c, {}).get("level4_description"),
                     "name": atc.get(c, {}).get("who_name")} for c in sorted(set((m.get("atc_classifications") or []) + (pm.get("atc_classifications") or [])))],
            "properties": {k.replace("_", "-"): (props.get(k) if k == "full_molformula" else int(props[k]) if k in INT_PROPS else num(props.get(k)))
                           for k in PROPS if props.get(k) is not None},
            "mechanisms": [{"action": x["action_type"], "text": x["mechanism_of_action"], "target-chembl-id": x["target_chembl_id"],
                            "target": (tg.get(x["target_chembl_id"]) or {}).get("pref_name"),
                            "target-type": (tg.get(x["target_chembl_id"]) or {}).get("target_type"),
                            "organism": (tg.get(x["target_chembl_id"]) or {}).get("organism"),
                            "refs": x["refs"]} for x in (mech.get(pid) or {}).get("mechanisms", [])],
            "url": f"https://www.ebi.ac.uk/chembl/compound_report_card/{i['chembl-id']}/",
        }
        out.append(rec)
    (PROCESSED / "chembl.json").write_text(json.dumps(out, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    from collections import Counter
    src = Counter(r["identity"]["source"] for r in out)
    targets = Counter(m["target-chembl-id"] for r in out for m in r["mechanisms"] if m["target-chembl-id"])
    cov = {"substances": len(json.loads((PROCESSED / "substances.json").read_text(encoding="utf-8"))),
           "with_chembl_identity": len(out), "identity_source": dict(sorted(src.items())),
           "unresolved_ids": len(missing), "with_mechanism": sum(1 for r in out if r["mechanisms"]),
           "with_atc": sum(1 for r in out if r["atc"]), "black_box": sum(1 for r in out if r["black-box-warning"]),
           "withdrawn": sum(1 for r in out if r["withdrawn"]), "distinct_targets": len(targets),
           "targets_shared_by_2plus": sum(1 for v in targets.values() if v >= 2)}
    (ROOT / "data/enrichment/chembl-coverage.json").write_text(json.dumps(cov, indent=1) + "\n")
    print(json.dumps(cov, indent=1))


if __name__ == "__main__":
    a = argparse.ArgumentParser()
    a.add_argument("stage", choices=["resolve", "fetch", "parse"])
    {"resolve": resolve, "fetch": fetch, "parse": parse}[a.parse_args().stage]()
