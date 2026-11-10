#!/usr/bin/env python3
"""Build apps/graph-viewer/graph-data.js from the canonical catalogue.

Inputs : data/processed/substances.json (+ pk.json, chembl.json, pk-verification.json, links.json when present)
Output : apps/graph-viewer/graph-data.js  ->  window.PV_GRAPH = {...}

A .js wrapper (not .json) is used on purpose: the viewer must work when index.html is
opened straight from disk (file://), where fetch() of local JSON is blocked by browsers.
Layout is computed here, deterministically, so the viewer needs no physics simulation.
"""
from __future__ import annotations

import html
import json
import math
import re
from collections import OrderedDict, defaultdict

from pv_common import CURATED, FRONTMATTER, GROUP_TO_CLUSTER, PROCESSED, ROOT, VAULT, assign_note_filenames, hubs_and_pathways, load_jsonl, load_pk_annotations

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
    ema = {v["compound_id"]: v for v in loadp("pk-verification-ema.json")}
    pka = load_pk_annotations()
    idr = {x["compound_id"]: x for x in loadp("identity-review.json")}
    rpl = json.loads((PROCESSED / "rpl-products.json").read_text(encoding="utf-8")) if (PROCESSED / "rpl-products.json").exists() else {}
    psy = json.loads((PROCESSED / "psychonaut.json").read_text(encoding="utf-8")) if (PROCESSED / "psychonaut.json").exists() else {}
    ind_data = json.loads((PROCESSED / "indications.json").read_text(encoding="utf-8")) if (PROCESSED / "indications.json").exists() else {"by_compound": {}, "by_disease": {}}
    by_comp_ind = ind_data.get("by_compound", {})
    lit_data = json.loads((PROCESSED / "literature.json").read_text(encoding="utf-8")) if (PROCESSED / "literature.json").exists() else {"by_compound": {}}
    by_comp_lit = lit_data.get("by_compound", {})
    cs_path = PROCESSED / "chemical_space_2d.json"
    cs_data = json.loads(cs_path.read_text(encoding="utf-8")) if cs_path.exists() else {}
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

    fnames = assign_note_filenames(rows)
    compounds = []
    for g in groups:
        gx, gy, _ = gpos[g]
        members = sorted(by_group[g], key=lambda r: (r["compound_id"] not in pk, r["name"].lower()))
        for k, r in enumerate(members):
            rad = SPACING * math.sqrt(k + 0.5)
            x, y = gx + rad * math.cos(k * GOLDEN), gy + rad * math.sin(k * GOLDEN)
            p = pk.get(r["compound_id"])
            hubs, pws = hubs_and_pathways(r, p)
            item = {"id": r["compound_id"], "n": r["name"], "g": groups.index(g),
                    "x": r1(x), "y": r1(y), "l": sorted({idx[n] for n in hubs + pws})}
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
            item["f"] = f"04 Compound Notes/{r['cluster']}/{fnames[r['compound_id']]}"
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
            e = ema.get(r["compound_id"])
            if e and e.get("fields"):
                item["ve"] = {"s": e["status"], "u": e["smpc-url"], "pl": e.get("chpl-url"), "p": e["product"],
                              "f": {k: [f["status"], (f.get("smpc-values-h") or f.get("smpc-values-pct") or [])[:6]] for k, f in e["fields"].items()}}
            pa = pka.get(r["compound_id"])
            if pa:
                item["pka"] = [{"c": a["category"], "f": a["field"], "r": a["regulator"], "e": a["explanation"]} for a in pa]
            x = idr.get(r["compound_id"])
            if x and c and x["chembl-id"] == c["identity"]["chembl-id"]:
                item["ic"] = "curated" if (x.get("decision") or c["identity"]["source"] == "curated-identity") else x["verdict"]
            if x:
                iks = x.get("chembl-inchikeys") or []
                if iks and iks[0]:
                    item["ik"] = iks[0]
                elif x.get("evidence"):
                    for ev in x["evidence"]:
                        if ev.get("inchikey"):
                            item["ik"] = ev["inchikey"]
                            break
            cid = r.get("pubchem_cid")
            if not cid and x and x.get("evidence"):
                for ev in x["evidence"]:
                    if ev.get("cid"):
                        cid = ev["cid"]
                        break
            if cid:
                item["cid"] = cid
            if c:
                pr = c.get("properties")
                if pr and pr.get("full-molformula"):
                    item["mf"] = pr["full-molformula"]
            if r["compound_id"] in rpl:
                item["rpl"] = rpl[r["compound_id"]]
            if r["compound_id"] in psy:
                item["psy"] = psy[r["compound_id"]]
            if r["compound_id"] in by_comp_ind:
                item["ind"] = by_comp_ind[r["compound_id"]]
            if r["compound_id"] in by_comp_lit:
                item["ebm"] = [
                    {
                        "pmid": s.get("pmid"),
                        "doi": s.get("doi"),
                        "title": s.get("title"),
                        "journal": s.get("journal_abbr") or s.get("journal"),
                        "year": s.get("pub_year"),
                        "type": s.get("study_type"),
                        "tier": s.get("ebm_tier"),
                        "cochrane": s.get("cochrane"),
                        "cits": s.get("cited_by_count"),
                        "oa": s.get("is_open_access"),
                        "pdf": s.get("pdf_url"),
                        "concl": s.get("conclusion"),
                        "abstr": s.get("abstract")
                    }
                    for s in by_comp_lit[r["compound_id"]]
                ]
            if r["compound_id"] in cs_data:
                cs = cs_data[r["compound_id"]]
                item["cs"] = {
                    "x": cs.get("x", 0.0),
                    "y": cs.get("y", 0.0),
                    "s": cs.get("scaffold_id", "scaff_miscellaneous_aliphatic"),
                    "an": [[a["id"], a["tanimoto"]] for a in cs.get("top_analogs", [])],
                    "ot": [[o["gene"], o["score"], o["safety_flag"], o.get("pdb") or ""] for o in cs.get("predicted_offtargets", [])]
                }
            compounds.append(item)

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
        "pk_ema_consistent": sum(1 for c in compounds if (c.get("ve") or {}).get("s") == "consistent"),
        "pk_ema_discrepant": sum(1 for c in compounds if (c.get("ve") or {}).get("s") == "discrepant"),
        "with_rpl": sum(1 for c in compounds if c.get("rpl")),
        "with_psychonaut": sum(1 for c in compounds if c.get("psy")),
        "with_indications": sum(1 for c in compounds if c.get("ind")),
        "with_ebm": sum(1 for c in compounds if c.get("ebm")),
        "with_chemical_space": sum(1 for c in compounds if "cs" in c),
        "with_offtargets": sum(1 for c in compounds if (c.get("cs") or {}).get("ot")),
        "identity_confirmed": sum(1 for c in compounds if c.get("ic") in ("structure-confirmed", "curated", "inn-match-ema")),
    })

    def load_curated_json(name: str, default):
        p = CURATED / name
        return json.loads(p.read_text(encoding="utf-8")) if p.exists() else default

    data["metaboliteCascades"] = load_curated_json("metabolite_cascades.json", {})
    data["target3DCatalog"] = load_curated_json("target_3d_catalog.json", {})
    data["curatedTypedEdges"] = load_curated_json("curated_typed_edges.json", [])
    data["adrDefinitions"] = load_curated_json("adr_definitions.json", [])
    data["indicationsCatalog"] = ind_data.get("by_disease", {})
    data["pathwaySystems"] = load_curated_json("pathway_systems.json", [])
    data["ddiRules"] = load_curated_json("ddi_rules.json", {})
    data["receptorAffinities"] = load_curated_json("receptor_affinities.json", {})
    data["pkCompartmentModels"] = load_curated_json("pk_compartment_models.json", {})
    data["toxicologyProfiles"] = load_curated_json("toxicology_profiles.json", {})
    data["transporterProfiles"] = load_curated_json("transporter_profiles.json", {})
    data["scaffoldDefinitions"] = load_curated_json("scaffold_definitions.json", [])
    data["foodDrugInteractions"] = load_curated_json("food_drug_interactions.json", {})
    clinical_notes = compile_clinical_notes(rows, links["targets"])
    (PROCESSED / "clinical_notes.json").write_text(json.dumps(clinical_notes, ensure_ascii=False, indent=2), encoding="utf-8")
    data["clinicalNotes"] = clinical_notes
    data["meta"]["clinical_notes"] = len(clinical_notes)

    content = ("/* generated by scripts/build_graph_data.py - do not edit */\nwindow.PV_GRAPH = "
               + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";\n")
    OUT.write_text(content, encoding="utf-8")
    root_out = ROOT.parent / "graph-data.js"
    if root_out.exists():
        root_out.write_text(content, encoding="utf-8")
    print(f"compounds={len(compounds)} with_pk={data['meta']['with_pk']} notes={len(clinical_notes)} size_kb={OUT.stat().st_size // 1024}")


META_COMMENT_RE = re.compile(r"<!--\s*pv-note-meta:\s*(\{.*?\})\s*-->", re.S)


def md_to_clinical_html(md_text: str) -> str:
    body = FRONTMATTER.sub("", md_text).strip()
    lines = body.splitlines()
    out: list[str] = ["<article class=\"pv-clinical-note\">"]
    in_ul = False
    in_ol = False
    in_table = False
    table_head_done = False

    def close_lists():
        nonlocal in_ul, in_ol, in_table, table_head_done
        if in_ul:
            out.append("</ul>")
            in_ul = False
        if in_ol:
            out.append("</ol>")
            in_ol = False
        if in_table:
            out.append("</tbody></table>")
            in_table = False
            table_head_done = False

    def fmt_inline(s: str) -> str:
        s = html.escape(s)
        s = re.sub(r"\[\[([^\]|]+)\|([^\]]+)\]\]", r"<strong>\2</strong>", s)
        s = re.sub(r"\[\[([^\]]+)\]\]", r"<strong>\1</strong>", s)
        s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
        s = re.sub(r"`([^`]+)`", r"<code>\1</code>", s)
        return s

    for raw in lines:
        line = raw.strip()
        if not line or line == "---":
            close_lists()
            continue
        if line.startswith("# "):
            close_lists()
            continue
        if line.startswith("## "):
            close_lists()
            out.append(f"<h3>{fmt_inline(line[3:].strip())}</h3>")
        elif line.startswith("### "):
            close_lists()
            out.append(f"<h4>{fmt_inline(line[4:].strip())}</h4>")
        elif line.startswith("|") and line.endswith("|"):
            if in_ul or in_ol:
                close_lists()
            cells = [c.strip() for c in line.strip("|").split("|")]
            if all(re.match(r"^:?-{2,}:?$", c) for c in cells if c):
                continue
            if not in_table:
                in_table = True
                table_head_done = True
                out.append("<table><thead><tr>" + "".join(f"<th>{fmt_inline(c)}</th>" for c in cells) + "</tr></thead><tbody>")
            else:
                out.append("<tr>" + "".join(f"<td>{fmt_inline(c)}</td>" for c in cells) + "</tr>")
        elif line.startswith("- "):
            if in_ol or in_table:
                close_lists()
            if not in_ul:
                out.append("<ul>")
                in_ul = True
            out.append(f"<li>{fmt_inline(line[2:].strip())}</li>")
        elif re.match(r"^\d+\.\s+", line):
            if in_ul or in_table:
                close_lists()
            if not in_ol:
                out.append("<ol>")
                in_ol = True
            item_txt = re.sub(r"^\d+\.\s+", "", line)
            out.append(f"<li>{fmt_inline(item_txt)}</li>")
        else:
            close_lists()
            out.append(f"<p>{fmt_inline(line)}</p>")
    close_lists()
    out.append("</article>")
    return "\n".join(out)


def compile_clinical_notes(rows: list[dict], targets: list[dict]) -> list[dict]:
    notes: list[dict] = []
    notes_dir = CURATED / "notes"
    if notes_dir.exists():
        for p in sorted(notes_dir.glob("*.html")):
            raw = p.read_text(encoding="utf-8")
            m = META_COMMENT_RE.search(raw)
            meta = json.loads(m.group(1)) if m else {}
            html_body = META_COMMENT_RE.sub("", raw).strip()
            notes.append({
                "id": meta.get("id") or p.stem,
                "title": meta.get("title") or p.stem.replace("-", " ").title(),
                "subtitle": meta.get("subtitle") or "Notatka kliniczno-farmakologiczna",
                "category": meta.get("category") or "html_note",
                "provenance": meta.get("provenance") or "repo-curated",
                "source_file": f"data/curated/notes/{p.name}",
                "updated": meta.get("updated") or "2026-11-10",
                "cluster": meta.get("cluster") or "General Pharmacology",
                "tags": meta.get("tags") or [],
                "compounds": meta.get("compounds") or [],
                "targets": meta.get("targets") or [],
                "icd": meta.get("icd") or [],
                "patient": meta.get("patient"),
                "html": html_body,
            })

    res_notes = [
        (
            ROOT / "Resources/notes/01-przeglad-krytyczny.md",
            "ebm-biohacking-bible-critical-review",
            "Przegląd EBM #1: Krytyczna analiza neurofarmakologiczna „Biohacking Bible”",
            "Metodologia oceny bezpieczeństwa: IMAO, tianeptyna, fenotypy dopaminergiczne, peptydy badawcze i 5-punktowy filtr kliniczny",
            "ebm_review",
            "repo-resources",
            "Nootropics",
            ["EBM", "neurofarmakologia", "IMAO", "tianeptyna", "nootropiki", "bezpieczeństwo"],
            ["phenelzine-compound", "tranylcypromine-compound", "tianeptine-compound", "lamotrigine-compound", "amisulpride-compound", "modafinil-compound", "metformin-compound"],
            ["CHEMBL2095205", "CHEMBL233", "CHEMBL217", "CHEMBL340"],
            ["F32.9", "F90.0"],
        ),
        (
            ROOT / "Resources/notes/02-tabela-selekcyjna.md",
            "ebm-substance-selection-matrix",
            "Przegląd EBM #2: Matryca selekcyjna leków psychotropowych, nootropików i peptydów",
            "Porównanie twierdzeń popularnonaukowych z poziomem dowodów klinicznych (SSRI, Fluwoksamina, TLPD, IMAO, Stymulanty, NAC, Dziurawiec)",
            "ebm_review",
            "repo-resources",
            "General Pharmacology",
            ["matryca-EBM", "psychofarmakologia", "SSRI", "SNRI", "stymulanty", "dziurawiec"],
            ["fluvoxamine-compound", "clomipramine-compound", "amitriptyline-compound", "phenelzine-compound", "methylphenidate-compound", "bupropion-compound", "ketamine-compound", "acetylcysteine-compound"],
            ["CHEMBL228", "CHEMBL222", "CHEMBL238", "CHEMBL340"],
            ["F32.9", "F42.9", "F90.0"],
        ),
        (
            VAULT / "06 Safety Hubs/Stacking and Interaction Risks.md",
            "vault-hub-stacking-interaction-risks",
            "Synteza Vault #1: Polipragmazja, kaskady CYP450 i nakładanie mechanizmów receptorowych",
            "Kanoniczna notatka z Pharma-vault/vault/06 Safety Hubs: wąskie gardła metaboliczne i addycja farmakodynamiczna",
            "mechanism",
            "repo-vault",
            "General Pharmacology",
            ["polipragmazja", "DDI", "CYP450", "safety-hub", "vault"],
            ["modafinil-compound", "fluoxetine-compound", "carbamazepine-compound", "simvastatin-compound"],
            ["CHEMBL340", "CHEMBL228"],
            [],
        ),
        (
            VAULT / "03 Pathways/Pharmacokinetics Summary.md",
            "vault-pathway-pharmacokinetics-summary",
            "Synteza Vault #2: Kompendium parametrów farmakokinetycznych (t½, biodostępność, wiązanie z białkami, klirens)",
            "Kanoniczna notatka z Pharma-vault/vault/03 Pathways: interpretacja kliniczna okresu półtrwania i dróg eliminacji",
            "mechanism",
            "repo-vault",
            "General Pharmacology",
            ["farmakokinetyka", "ADME", "t1/2", "biodostępność", "klirens", "vault"],
            ["modafinil-compound", "diazepam-compound", "levetiracetam-compound", "metformin-compound"],
            ["CHEMBL340"],
            [],
        ),
    ]
    for path, nid, title, sub, cat, prov, cluster, tags, comps, tgs, icds in res_notes:
        if path.exists():
            md_raw = path.read_text(encoding="utf-8")
            notes.append({
                "id": nid,
                "title": title,
                "subtitle": sub,
                "category": cat,
                "provenance": prov,
                "source_file": str(path.relative_to(ROOT)),
                "updated": "2026-11-10",
                "cluster": cluster,
                "tags": tags,
                "compounds": comps,
                "targets": tgs,
                "icd": icds,
                "patient": None,
                "html": md_to_clinical_html(md_raw),
            })
    return notes


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
