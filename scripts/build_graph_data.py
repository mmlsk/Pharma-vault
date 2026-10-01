#!/usr/bin/env python3
"""Build apps/graph-viewer/graph-data.js from the canonical catalogue.

Inputs : data/processed/substances.json (+ pk.json, chembl.json, pk-verification.json, links.json when present)
Output : apps/graph-viewer/graph-data.js  ->  window.PV_GRAPH = {...}

A .js wrapper (not .json) is used on purpose: the viewer must work when index.html is
opened straight from disk (file://), where fetch() of local JSON is blocked by browsers.
Layout is computed here, deterministically, so the viewer needs no physics simulation.
"""
from __future__ import annotations

import json
import math
from collections import OrderedDict, defaultdict

from generate_vault_notes import CHOLINERGIC, TRIAGE_TO_HUB, TRIAGE_TO_PATHWAY
from pv_common import GROUP_TO_CLUSTER, PROCESSED, ROOT, safe_filename

OUT = ROOT / "apps/graph-viewer/graph-data.js"
HUBS = ["Stacking and Interaction Risks", "Cholinergic Load", "Stimulant and Cardiovascular Load",
        "Hormonal Axis Suppression", "Serotonin Toxicity", "Respiratory Depression and Fatal Overdose",
        "Experimental and Evidence-Limited Compounds"]
PATHWAYS = ["Cholinergic Signaling", "Catecholamines and Attention", "Serotonergic Signaling",
            "Sleep-Wake Regulation", "Glucose and Incretin Signaling", "HPG and GH-IGF-1 Axes", "CYP450 Metabolism"]
CONCEPTS = ["Evidence Tiers", "Stack Redundancy", "Interaction Overlap"]
CLUSTER_ORDER = ["Nootropics", "Metabolic and Incretin Agents", "Growth Hormone and Peptide Agents",
                 "Androgens SARMs and PCT", "Cardiovascular and Lipid Agents",
                 "Longevity and Experimental Compounds", "Ancillary Supplements and Topicals", "General Pharmacology",
                 "Novel Psychoactive Substances"]
# hub -> pathway / concept links drawn in the core of the graph
CORE_EDGES = [
    ("Cholinergic Load", "Cholinergic Signaling"), ("Stimulant and Cardiovascular Load", "Catecholamines and Attention"),
    ("Stimulant and Cardiovascular Load", "Sleep-Wake Regulation"), ("Serotonin Toxicity", "Serotonergic Signaling"),
    ("Hormonal Axis Suppression", "HPG and GH-IGF-1 Axes"), ("Stacking and Interaction Risks", "CYP450 Metabolism"),
    ("Stacking and Interaction Risks", "Interaction Overlap"), ("Stacking and Interaction Risks", "Stack Redundancy"),
    ("Experimental and Evidence-Limited Compounds", "Evidence Tiers"), ("Respiratory Depression and Fatal Overdose", "Interaction Overlap"),
    ("Stack Redundancy", "HPG and GH-IGF-1 Axes"), ("Stack Redundancy", "Cholinergic Signaling"),
]
SPACING = 15.0  # px between compound dots inside a group disc
GOLDEN = math.pi * (3 - math.sqrt(5))


def r1(x):
    return round(x, 1)


def main() -> None:
    rows = json.loads((PROCESSED / "substances.json").read_text(encoding="utf-8"))
    pk_path = PROCESSED / "pk.json"
    pk = {p["compound_id"]: p for p in json.loads(pk_path.read_text(encoding="utf-8"))} if pk_path.exists() else {}

    loadp = lambda n: json.loads((PROCESSED / n).read_text(encoding="utf-8")) if (PROCESSED / n).exists() else []
    ch = {c["compound_id"]: c for c in loadp("chembl.json")}
    ver = {v["compound_id"]: v for v in loadp("pk-verification.json")}
    links = loadp("links.json") or {"targets": []}
    t_index = {t["id"]: i for i, t in enumerate(links["targets"])}

    by_group: dict[str, list] = defaultdict(list)
    labels = {}
    for r in rows:
        by_group[r["group"]].append(r)
        labels[r["group"]] = r["group_label"]
    groups = sorted(by_group, key=lambda g: (CLUSTER_ORDER.index(GROUP_TO_CLUSTER[g]), -len(by_group[g]), g))

    # ---- ring layout of group discs
    radii = {g: SPACING * math.sqrt(len(by_group[g])) + 18 for g in groups}
    gap_group, gap_cluster = 40, 160
    total = sum(2 * radii[g] + gap_group for g in groups) + gap_cluster * len(CLUSTER_ORDER)
    maxr = max(radii.values())
    R = max(total / (2 * math.pi), maxr + 1100)  # keep a free core for hubs/pathways
    inner = R - maxr - 60
    ang, prev_cluster, gpos = -math.pi / 2, None, {}
    cl_span = defaultdict(list)
    for g in groups:
        c = GROUP_TO_CLUSTER[g]
        if c != prev_cluster:
            ang += gap_cluster / R
            prev_cluster = c
        ang += radii[g] / R
        gpos[g] = (R * math.cos(ang), R * math.sin(ang), ang)
        cl_span[c].append(ang)
        ang += (radii[g] + gap_group) / R

    core = OrderedDict()
    for i, h in enumerate(HUBS):
        a = -math.pi / 2 + 2 * math.pi * i / len(HUBS)
        core[h] = ("hub", 0.42 * inner * math.cos(a), 0.42 * inner * math.sin(a))
    ring2 = PATHWAYS + CONCEPTS
    for i, p in enumerate(ring2):
        a = -math.pi / 2 + math.pi / len(ring2) + 2 * math.pi * i / len(ring2)
        core[p] = ("pathway" if p in PATHWAYS else "concept", 0.8 * inner * math.cos(a), 0.8 * inner * math.sin(a))
    core_names = list(core)
    idx = {n: i for i, n in enumerate(core_names)}

    compounds = []
    for g in groups:
        gx, gy, _ = gpos[g]
        members = sorted(by_group[g], key=lambda r: (r["compound_id"] not in pk, r["name"].lower()))
        for k, r in enumerate(members):
            rad = SPACING * math.sqrt(k + 0.5)
            x, y = gx + rad * math.cos(k * GOLDEN), gy + rad * math.sin(k * GOLDEN)
            hubs = [idx["Stacking and Interaction Risks"]]
            for t in r["group_risk_triage"]:
                h = TRIAGE_TO_HUB.get(t)
                if h and idx[h] not in hubs:
                    hubs.append(idx[h])
            if CHOLINERGIC.search(r["description"] + " " + r["mechanism"]):
                hubs.append(idx["Cholinergic Load"])
            pws = {idx[TRIAGE_TO_PATHWAY[t]] for t in r["group_risk_triage"] if t in TRIAGE_TO_PATHWAY}
            p = pk.get(r["compound_id"])
            if p and (p.get("cyp-interactions") or {}).get("substrates"):
                pws.add(idx["CYP450 Metabolism"])
            item = {"id": r["compound_id"], "n": r["name"], "g": groups.index(g),
                    "x": r1(x), "y": r1(y), "l": sorted(hubs + list(pws))}
            if r["aliases"]:
                item["a"] = r["aliases"]
            if r["description"]:
                item["d"] = r["description"][:420]
            if r["mechanism"]:
                item["m"] = r["mechanism"]
            if r["chembl_id"]:
                item["ch"] = r["chembl_id"]
                if r["chembl_max_phase"]:
                    item["ph"] = int(r["chembl_max_phase"])
            if r["group_risk_triage"]:
                item["t"] = r["group_risk_triage"]
            fname = safe_filename(r["name"])
            item["f"] = f"04 Compound Notes/{r['cluster']}/{fname}"
            if p:
                item["pk"] = compact_pk(p)
            c = ch.get(r["compound_id"])
            if c:
                item["ch"] = item.get("ch") or c["identity"]["chembl-id"]
                if "ph" not in item and c["max-phase"] is not None and c["max-phase"] >= 0:
                    item["ph"] = c["max-phase"] if c["max-phase"] % 1 else int(c["max-phase"])
                if "m" not in item and c["mechanisms"]:
                    item["m"] = "; ".join(sorted({m["text"] for m in c["mechanisms"] if m["text"]}))
                item["ids"] = c["identity"]["source"]
                if c["molecule-type"]:
                    item["mt"] = c["molecule-type"]
                if c["atc"]:
                    item["atc"] = [[a["code"], a["level4"] or a["level3"] or ""] for a in c["atc"]][:4]
                if c["black-box-warning"]:
                    item["bb"] = 1
                if c["withdrawn"]:
                    item["wd"] = 1
                if c["first-approval"]:
                    item["fa"] = c["first-approval"]
                tg = sorted({t_index[m["target-chembl-id"]] for m in c["mechanisms"] if m["target-chembl-id"] in t_index})
                if tg:
                    item["tg"] = tg
                pr = c["properties"]
                if pr:
                    item["pr"] = [pr.get("mw-freebase"), pr.get("alogp"), pr.get("psa"), pr.get("num-ro5-violations")]
            v = ver.get(r["compound_id"])
            if v and v.get("fields"):
                item["v"] = {"s": v["status"], "u": v["url"], "et": v["effective-time"],
                             "f": {k: [f["status"], (f.get("label-values-h") or f.get("label-values-pct") or [])[:6]] for k, f in v["fields"].items()}}
            elif v:
                item["v"] = {"s": v["status"]}
            compounds.append(item)
    # disambiguated filenames mirror generate_vault_notes.py
    seen = set()
    for c in compounds:
        key = c["f"].lower()
        if key in seen:
            c["f"] = f"{c['f']} ({c['id']})"
        seen.add(key)

    data = {
        "meta": {"substances": len(rows), "groups": len(groups), "clusters": len(CLUSTER_ORDER),
                 "with_pk": sum(1 for c in compounds if "pk" in c), "radius": r1(R),
                 "pk_source": "Wikipedia {{Infobox drug}}, revision-pinned (see data/enrichment/)"},
        "clusters": [{"name": c, "angle": r1(sum(cl_span[c]) / len(cl_span[c]) * 1000) / 1000 if cl_span[c] else 0}
                     for c in CLUSTER_ORDER],
        "groups": [{"key": g, "label": labels[g], "c": CLUSTER_ORDER.index(GROUP_TO_CLUSTER[g]),
                    "x": r1(gpos[g][0]), "y": r1(gpos[g][1]), "r": r1(radii[g]), "n": len(by_group[g])} for g in groups],
        "core": [{"name": n, "kind": k, "x": r1(x), "y": r1(y)} for n, (k, x, y) in core.items()],
        "coreEdges": [[idx[a], idx[b]] for a, b in CORE_EDGES],
        "targets": [{"id": t["id"], "n": t["name"], "ty": t["type"]} for t in links["targets"]],
        "compounds": compounds,
    }
    data["meta"].update({
        "with_chembl": sum(1 for c in compounds if c.get("ch")),
        "with_targets": sum(1 for c in compounds if c.get("tg")),
        "pk_fda_consistent": sum(1 for c in compounds if (c.get("v") or {}).get("s") == "consistent"),
        "pk_fda_discrepant": sum(1 for c in compounds if (c.get("v") or {}).get("s") == "discrepant"),
        "curated_additions": sum(1 for r in rows if r["source"] == "curated-addition"),
    })
    OUT.write_text("/* generated by scripts/build_graph_data.py - do not edit */\nwindow.PV_GRAPH = "
                   + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";\n", encoding="utf-8")
    print(f"compounds={len(compounds)} with_pk={data['meta']['with_pk']} size_kb={OUT.stat().st_size // 1024}")


def compact_pk(p: dict) -> dict:
    out = {"src": p["source-url"], "title": p["source-title"]}
    hl = p.get("half-life") or {}
    if hl.get("value") is not None:
        out["hl"] = [hl["value"], hl.get("value-max"), hl["unit"]]
    if hl.get("notes"):
        out["hlt"] = hl["notes"][:200]
    for key, short in (("protein-binding", "pb"), ("bioavailability", "ba")):
        v = p.get(key) or {}
        if v.get("value") is not None:
            out[short] = [v["value"], v.get("value-max")]
        if v.get("notes"):
            out[short + "t"] = v["notes"][:160]
    rc = p.get("renal-clearance") or {}
    if rc:
        out["ex"] = (rc.get("notes") or "")[:220]
        if rc.get("primary-route") is not None:
            out["ren"] = rc["primary-route"]
        if rc.get("fraction-excreted-unchanged") is not None:
            out["fe"] = rc["fraction-excreted-unchanged"]
    hc = p.get("hepatic-clearance") or {}
    if hc.get("notes"):
        out["met"] = hc["notes"][:220]
    cy = (p.get("cyp-interactions") or {}).get("substrates")
    if cy:
        out["cyp"] = cy
    return out


if __name__ == "__main__":
    main()
