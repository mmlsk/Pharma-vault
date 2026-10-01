#!/usr/bin/env python3
"""Derive compound-to-compound connections from ChEMBL and PK data (offline, deterministic).

Output: data/processed/links.json
  targets   : ChEMBL targets reached by >= 1 catalogue compound (curated mechanisms of the parent molecule)
  atc4      : ATC level-4 classes -> compounds
  related   : per compound, ranked neighbours by
                - shared-target  (same ChEMBL mechanism target; strongest pharmacological link)
                - same-atc4      (same WHO ATC chemical/therapeutic subgroup)
                - shared-cyp     (both listed as substrates of the same CYP isoenzyme)
Links are *navigational* ("look at these together"), not interaction claims.
"""
from __future__ import annotations

import json
from collections import defaultdict

from pv_common import PROCESSED

TOP = 12  # neighbours kept per link type per compound


def load(name):
    p = PROCESSED / name
    return json.loads(p.read_text(encoding="utf-8")) if p.exists() else []


def main() -> None:
    cat = {r["compound_id"]: r for r in load("substances.json")}
    ch = {r["compound_id"]: r for r in load("chembl.json") if r["compound_id"] in cat}
    pk = {r["compound_id"]: r for r in load("pk.json") if r["compound_id"] in cat}

    targets, by_target = {}, defaultdict(dict)
    for cid, r in ch.items():
        for m in r["mechanisms"]:
            t = m["target-chembl-id"]
            if not t:
                continue
            targets[t] = {"id": t, "name": m["target"], "type": m["target-type"], "organism": m["organism"]}
            by_target[t].setdefault(cid, m["action"])
    # a compound recorded under several parents/aliases of the same molecule counts once
    atc4 = defaultdict(set)
    for cid, r in ch.items():
        for a in r["atc"]:
            atc4[a["code"][:5]].add(cid)
    cyp = defaultdict(set)
    for cid, r in pk.items():
        for e in (r.get("cyp-interactions") or {}).get("substrates", []):
            cyp[e].add(cid)

    same_parent = defaultdict(set)
    for cid, r in ch.items():
        same_parent[r["identity"]["dedupe-key"]].add(cid)

    related = {}
    for cid in sorted(cat):
        out = {}
        mine = [t for t, cs in by_target.items() if cid in cs]
        score = defaultdict(list)
        for t in mine:
            for o in by_target[t]:
                if o != cid:
                    score[o].append(targets[t]["name"])
        out["shared-target"] = [[o, len(ts), sorted(set(ts))[:3]] for o, ts in
                                sorted(score.items(), key=lambda kv: (-len(kv[1]), cat[kv[0]]["name"].lower(), kv[0]))[:TOP]]
        codes = sorted({a["code"][:5] for a in ch.get(cid, {}).get("atc", [])})
        peers = sorted({o for c in codes for o in atc4[c] if o != cid}, key=lambda o: (cat[o]["name"].lower(), o))
        out["same-atc4"] = peers[:TOP]
        enz = sorted(e for e, cs in cyp.items() if cid in cs)
        out["shared-cyp"] = {e: len(cyp[e]) - 1 for e in enz}
        dup = sorted(same_parent.get(ch.get(cid, {}).get("identity", {}).get("dedupe-key"), set()) - {cid})
        if dup:
            out["same-molecule"] = dup
        if any(out.values()):
            related[cid] = out

    data = {
        "targets": [targets[t] | {"compounds": sorted(by_target[t])} for t in sorted(targets, key=lambda t: ((targets[t]["name"] or "").lower(), t))],
        "atc4": {k: sorted(v) for k, v in sorted(atc4.items())},
        "related": related,
    }
    (PROCESSED / "links.json").write_text(json.dumps(data, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    n_edges = sum(len(v) * (len(v) - 1) // 2 for v in by_target.values())
    print(f"targets={len(targets)} shared-target pairs={n_edges} atc4={len(atc4)} compounds_with_links={len(related)}")


if __name__ == "__main__":
    main()
