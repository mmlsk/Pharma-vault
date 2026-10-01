#!/usr/bin/env python3
"""Generate Obsidian compound stubs from data/processed/substances.json.

One note per substance in  vault/04 Compound Notes/<Cluster>/<Name>.md

Safety rule: a note whose frontmatter `review-status` is anything other than
`stub` is treated as human-curated and is NEVER overwritten. Only stubs are
(re)generated, so running the script repeatedly is safe and deterministic.
Use --prune to delete stubs whose compound id no longer exists in the catalogue.
"""
from __future__ import annotations

import argparse
import json
import re

import yaml

from pv_common import COMPOUND_NOTES, PROCESSED, VAULT, safe_filename

TARGET_NOTES = VAULT / "07 Targets"

TRIAGE_TO_HUB = {
    "endocrine-feedback-disruption": "Hormonal Axis Suppression",
    "cardiovascular-load": "Stimulant and Cardiovascular Load",
    "evidence-limited": "Experimental and Evidence-Limited Compounds",
    "identity-contamination": "Experimental and Evidence-Limited Compounds",
    "growth-plate": "Experimental and Evidence-Limited Compounds",
    "serotonergic-or-dopaminergic-load": "Serotonin Toxicity",
    "sedation-respiratory-depression": "Respiratory Depression and Fatal Overdose",
}
TRIAGE_TO_PATHWAY = {
    "cyp-interactions": "CYP450 Metabolism",
    "glucose-metabolism": "Glucose and Incretin Signaling",
    "endocrine-feedback-disruption": "HPG and GH-IGF-1 Axes",
}
CHOLINERGIC = re.compile(r"cholin|acetylcholinesterase|muscarinic|nicotinic", re.I)
FRONTMATTER = re.compile(r"^---\n(.*?)\n---\n", re.S)


def frontmatter(r: dict, pk: dict | None = None, ch: dict | None = None, ver: dict | None = None) -> dict:
    fm = {
        "type": "compound",
        "schema-version": 2,
        "compound-id": r["compound_id"],
        "name": r["name"],
        "aliases": r["aliases"],
        "cluster": r["cluster"],
        "group": r["group"],
        "class": None,
        "subclass": None,
        "mechanism": r["mechanism"] or None,
        "pathways": [],
        "indications": [],
        "off-label-contexts": [],
        "regulatory-status": None,
        "evidence-level": None,
        "review-status": "stub",
        "chembl-id": r["chembl_id"] or None,
        "chembl-max-phase": int(r["chembl_max_phase"]) if r["chembl_max_phase"] else None,
        "half-life": {"value": None, "unit": None, "notes": None},
        "protein-binding": {"value": None, "unit": "percent", "notes": None},
        "active-metabolites": [],
        "renal-clearance": {"primary-route": None, "fraction-excreted-unchanged": None, "notes": None},
        "hepatic-clearance": {"primary-route": None, "extraction-ratio": None, "notes": None},
        "dosage-ranges": {},
        "cyp-interactions": {"substrates": [], "inhibitors": [], "inducers": [], "transporters": [], "notes": None},
        "contraindications": [],
        "major-interactions": [],
        "monitoring": [],
        "risk-domains": [],
        "group-risk-triage": r["group_risk_triage"],
        "source-status": "source-summary-only",
        "last-reviewed": None,
        "tags": r["tags"] + ["stub"],
    }
    if pk:
        apply_pk(fm, pk)
    if ch:
        apply_chembl(fm, r, ch)
    if ver and pk:
        apply_verification(fm, ver)
    return fm


def apply_chembl(fm: dict, r: dict, ch: dict) -> None:
    """ChEMBL identity + attributes (data/processed/chembl.json)."""
    idn = ch["identity"]
    fm["chembl-id"] = fm["chembl-id"] or idn["chembl-id"]
    if fm["chembl-max-phase"] is None and ch["max-phase"] is not None and ch["max-phase"] >= 0:
        fm["chembl-max-phase"] = int(ch["max-phase"])  # -1 = unknown/preclinical in ChEMBL
    if not fm["mechanism"] and ch["mechanisms"]:
        fm["mechanism"] = "; ".join(sorted({m["text"] for m in ch["mechanisms"] if m["text"]})) or None
    fm["chembl"] = {
        "identity-source": idn["source"], "parent-id": idn["parent-chembl-id"], "pref-name": idn["pref-name"],
        "molecule-type": ch["molecule-type"], "first-approval": ch["first-approval"],
        "black-box-warning": ch["black-box-warning"], "withdrawn": ch["withdrawn"],
        "atc-codes": [a["code"] for a in ch["atc"]],
        "targets": [{"id": m["target-chembl-id"], "name": m["target"], "action": m["action"]} for m in ch["mechanisms"] if m["target-chembl-id"]],
        "properties": ch["properties"],
    }
    fm["tags"] = fm["tags"] + ["chembl-profile"] + (["chembl-name-match"] if idn["source"] == "chembl-name-match" else [])


def apply_verification(fm: dict, v: dict) -> None:
    """Automated cross-check against the FDA label (data/processed/pk-verification.json)."""
    fm["pk-verification"] = {"source": "fda-label", "status": v["status"], "set-id": v.get("set-id"),
                             "url": v.get("url"), "checked": v["checked"],
                             "fields": {k: f["status"] for k, f in v.get("fields", {}).items()}}
    if v["status"] == "consistent":
        fm["source-status"] = "partially-verified"
    if v["status"] in ("consistent", "discrepant"):
        fm["tags"] = fm["tags"] + [f"pk-fda-{v['status']}"]


def apply_pk(fm: dict, pk: dict) -> None:
    """Merge auto-extracted PK (data/processed/pk.json) into a stub's frontmatter."""
    hl = pk.get("half-life")
    if hl:
        fm["half-life"] = {"value": hl["value"], "value-max": hl.get("value-max"), "unit": hl["unit"], "notes": hl["notes"]}
    pb = pk.get("protein-binding")
    if pb:
        fm["protein-binding"] = {"value": pb["value"], "value-max": pb.get("value-max"),
                                 "unit": "percent" if pb["value"] is not None else None, "notes": pb["notes"]}
    ba = pk.get("bioavailability")
    rc, hc, cy = pk.get("renal-clearance"), pk.get("hepatic-clearance"), pk.get("cyp-interactions")
    if rc:
        fm["renal-clearance"] = rc
    if hc:
        fm["hepatic-clearance"] = hc
    if cy:
        fm["cyp-interactions"] = cy
    # keep key order readable: bioavailability right after protein-binding
    if ba:
        items = list(fm.items())
        pos = [k for k, _ in items].index("protein-binding") + 1
        items.insert(pos, ("bioavailability", ba))
        fm.clear()
        fm.update(items)
    fm["source-status"] = "auto-extracted"
    fm["pk-source"] = {"type": "wikipedia-infobox", "title": pk["source-title"], "url": pk["source-url"],
                       "revision": pk["revid"], "retrieved": pk["retrieved"], "chembl-confirmed": pk["chembl-confirmed"]}
    fm["tags"] = fm["tags"] + ["pk-auto"]


UNIT_PL = {"min": "min", "h": "h", "d": "d", "wk": "tyg."}


def _rng(v, vmax, unit=""):
    if v is None:
        return None
    fmt = lambda x: f"{x:g}"
    return (f"{fmt(v)}–{fmt(vmax)}" if vmax else fmt(v)) + (f" {unit}" if unit else "")


def pk_section(pk: dict | None, ver: dict | None = None) -> list[str]:
    if not pk:
        return ["## Pharmacokinetics", "",
                "_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._", ""]
    rows = []
    hl, pb, ba = pk.get("half-life") or {}, pk.get("protein-binding") or {}, pk.get("bioavailability") or {}
    rc, hc, cy = pk.get("renal-clearance") or {}, pk.get("hepatic-clearance") or {}, pk.get("cyp-interactions") or {}
    esc = lambda t: (t or "").replace("|", "\\|")
    if hl:
        rows.append(("Elimination t½", _rng(hl.get("value"), hl.get("value-max"), hl.get("unit") or "") or "-", hl.get("notes")))
    if pb:
        rows.append(("Protein binding", _rng(pb.get("value"), pb.get("value-max"), "%") or "-", pb.get("notes")))
    if ba:
        rows.append(("Bioavailability", _rng(ba.get("value"), ba.get("value-max"), "%") or "-", ba.get("notes")))
    if hc:
        rows.append(("Metabolism", "hepatic" if hc.get("primary-route") else "-", hc.get("notes")))
    if cy.get("substrates"):
        rows.append(("CYP (metabolised by)", ", ".join(cy["substrates"]), "roles as inhibitor/inducer not assessed"))
    if pk.get("metabolites-text"):
        rows.append(("Metabolites", "-", pk["metabolites-text"]))
    if rc:
        route = {True: "mainly urinary", False: "mainly non-renal", None: "-"}[rc.get("primary-route")]
        fe = rc.get("fraction-excreted-unchanged")
        rows.append(("Excretion", route + (f" · fe {fe:g}" if fe is not None else ""), rc.get("notes")))
    lines = ["## Pharmacokinetics", "",
             "> [!info] Auto-extracted - verify before use",
             f"> Parsed from the [Wikipedia infobox of *{pk['source-title']}*]({pk['source-url']}) "
             f"(revision {pk['revid']}, retrieved {pk['retrieved']})"
             + ("; ChEMBL id matches the catalogue." if pk.get("chembl-confirmed") else "; identity matched by name.")
             + " Confirm against the SmPC / FDA label before relying on it.", "",
             "| Parameter | Parsed | Source text |", "|---|---|---|"]
    lines += [f"| {a} | {esc(b)} | {esc(c)} |" for a, b, c in rows]
    lines.append("")
    if ver and ver.get("fields"):
        icon = {"consistent": "success", "discrepant": "danger"}.get(ver["status"], "note")
        lines += [f"> [!{icon}] FDA label cross-check: **{ver['status']}**",
                  f"> Automated comparison with the [US prescribing information (DailyMed set {ver['set-id'][:8]}…)]({ver['url']}),"
                  f" label version {ver['effective-time']}. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp."]
        for k, f in ver["fields"].items():
            got = f.get("label-values-h") or f.get("label-values-pct") or []
            lines.append(f"> - {k}: {f['status']} (label values: {', '.join(f'{x:g}' for x in got[:6]) or '-'})")
        lines.append("")
    elif ver and ver["status"] == "no-label":
        lines += ["_No FDA label found for automated cross-check (not US-approved, or different name)._", ""]
    return lines


def body(r: dict, pk: dict | None = None, ch: dict | None = None, ver: dict | None = None,
         rel: dict | None = None, link=None) -> str:
    hubs = ["Stacking and Interaction Risks"]
    for t in r["group_risk_triage"]:
        if t in TRIAGE_TO_HUB and TRIAGE_TO_HUB[t] not in hubs:
            hubs.append(TRIAGE_TO_HUB[t])
    if CHOLINERGIC.search(r["description"] + " " + r["mechanism"]):
        hubs.append("Cholinergic Load")
    pathways = {TRIAGE_TO_PATHWAY[t] for t in r["group_risk_triage"] if t in TRIAGE_TO_PATHWAY}
    if pk and (pk.get("cyp-interactions") or {}).get("substrates"):
        pathways.add("CYP450 Metabolism")
    pathways = sorted(pathways)

    lines = [
        f"# {r['name']}", "",
        "> [!warning] Source-derived stub",
        "> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.",
        "> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.",
        "", "## Identity", "",
        f"- **Compound ID:** `{r['compound_id']}`",
        f"- **Source group:** {r['group_label']} (`{r['group']}`)",
        f"- **Cluster:** [[{r['cluster']}]]",
    ]
    if r["aliases"]:
        lines.append(f"- **Aliases:** {', '.join(r['aliases'])}")
    cid_ = r["chembl_id"] or (ch or {}).get("identity", {}).get("chembl-id")
    if cid_:
        src = {"catalogue": "source catalogue", "curated-addition": "curated addition, exact ChEMBL match",
               "wikipedia-infobox": "Wikipedia infobox", "chembl-name-match": "exact ChEMBL name match - confirm"}
        how = src.get((ch or {}).get("identity", {}).get("source", "catalogue"), "")
        phase = r["chembl_max_phase"] or (f"{ch['max-phase']:g}" if ch and ch.get("max-phase") is not None and ch["max-phase"] >= 0 else "n/a")
        lines.append(f"- **ChEMBL:** [{cid_}](https://www.ebi.ac.uk/chembl/compound_report_card/{cid_}/)"
                     f" · max phase {phase} · id via {how}")
    if r.get("pubchem_cid"):
        lines.append(f"- **PubChem:** [CID {r['pubchem_cid']}](https://pubchem.ncbi.nlm.nih.gov/compound/{r['pubchem_cid']})")
    lines += ["", "## Source summary", "", r["description"] or "_No description in source._", ""]
    if r["mechanism"]:
        lines += ["## Mechanism", "", f"{r['mechanism']} _(ChEMBL curated mechanism, as quoted by the source)._", ""]
    elif ch and ch["mechanisms"]:
        lines += ["## Mechanism", "", "; ".join(sorted({m["text"] for m in ch["mechanisms"] if m["text"]}))
                  + " _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._", ""]
    if ch:
        lines += chembl_section(ch)
    lines += [
        "## Evidence boundaries", "",
        "- Evidence tier: _not assigned_ - see [[Evidence Tiers]].",
        "- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.", "",
        *pk_section(pk, ver),
        *related_section(rel, link),
        "## Safety routing", "",
        "Group-level triage (not compound-specific): " + (", ".join(f"`{t}`" for t in r["group_risk_triage"]) or "-"),
        "",
        *[f"- [[{h}]]" for h in hubs],
        *[f"- [[{p}]]" for p in pathways],
        "",
    ]
    return "\n".join(lines)


def target_note_name(t: dict) -> str:
    return safe_filename(f"{t['name']} ({t['id']})")


def chembl_section(ch: dict) -> list[str]:
    lines = ["## ChEMBL profile", ""]
    facts = [f"- **Molecule type:** {ch['molecule-type'] or '-'}"]
    if ch["first-approval"]:
        facts.append(f"- **First approval (ChEMBL):** {ch['first-approval']}")
    flags = [x for x, on in (("black-box warning", ch["black-box-warning"]), ("withdrawn", ch["withdrawn"]),
                             ("prodrug", ch["prodrug"])) if on]
    if flags:
        facts.append(f"- **Flags:** {', '.join(flags)}")
    for a in ch["atc"]:
        facts.append(f"- **ATC {a['code']}:** {a['level1'] or ''} › {a['level3'] or ''} › {a['level4'] or ''}".rstrip(" ›"))
    lines += facts
    p = ch["properties"]
    if p:
        lines += ["", "| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |", "|---|---|---|---|---|---|",
                  f"| {p.get('mw-freebase', '-')} | {p.get('alogp', '-')} | {p.get('psa', '-')} | {p.get('hbd', '-')}/{p.get('hba', '-')} "
                  f"| {p.get('num-ro5-violations', '-')} | {p.get('full-molformula', '-')} |"]
    tg = [m for m in ch["mechanisms"] if m["target-chembl-id"]]
    if tg:
        lines += ["", "**Targets (ChEMBL curated mechanisms):**", ""]
        lines += [f"- [[{target_note_name({'name': m['target'], 'id': m['target-chembl-id']})}|{m['target']}]] - "
                  f"{(m['action'] or 'unknown action').lower()} · {m['target-type'] or ''}" for m in tg]
    return lines + [""]


def related_section(rel: dict | None, link) -> list[str]:
    if not rel:
        return []
    lines = ["## Related compounds (auto)", "", "_Navigational links derived from ChEMBL targets, ATC classes and CYP"
             " substrate lists - not interaction claims._", ""]
    if rel.get("same-molecule"):
        lines.append("- ⚠️ **Same molecule in ChEMBL (formulation variant or possible duplicate):** " + ", ".join(link(o) for o in rel["same-molecule"]))
    if rel.get("shared-target"):
        lines.append("- **Shared target:** " + ", ".join(f"{link(o)} ({'; '.join(ts)})" for o, _, ts in rel["shared-target"]))
    if rel.get("same-atc4"):
        lines.append("- **Same ATC subgroup:** " + ", ".join(link(o) for o in rel["same-atc4"]))
    if rel.get("shared-cyp"):
        lines.append("- **Shared CYP substrate pool:** " + ", ".join(f"{e} (+{n} others)" for e, n in rel["shared-cyp"].items())
                     + " → [[CYP450 Metabolism]]")
    return lines + [""]


def write_target_notes(links: dict, cat: dict, link) -> int:
    """07 Targets/ - fully generated (no curated content lives here)."""
    TARGET_NOTES.mkdir(parents=True, exist_ok=True)
    keep = set()
    for t in links.get("targets", []):
        name = target_note_name(t)
        keep.add(name + ".md")
        fm = {"type": "target", "chembl-target-id": t["id"], "name": t["name"], "target-type": t["type"],
              "organism": t["organism"], "compounds": len(t["compounds"]), "tags": ["target", "generated"]}
        lines = [f"# {t['name']}", "", f"- **ChEMBL:** [{t['id']}](https://www.ebi.ac.uk/chembl/target_report_card/{t['id']}/)"
                 f" · {t['type'] or '-'} · {t['organism'] or '-'}", "",
                 "Catalogue compounds whose ChEMBL curated mechanism acts on this target:", ""]
        lines += [f"- {link(c)} - {(cat[c]['cluster'])}" for c in t["compounds"]]
        (TARGET_NOTES / f"{name}.md").write_text(
            "---\n" + yaml.safe_dump(fm, sort_keys=False, allow_unicode=True, width=1000) + "---\n\n" + "\n".join(lines) + "\n",
            encoding="utf-8")
    for p in TARGET_NOTES.glob("*.md"):
        if p.name not in keep and p.name != "Targets MOC.md":
            p.unlink()
    return len(keep)


def existing_notes() -> dict[str, tuple]:
    found = {}
    for p in COMPOUND_NOTES.rglob("*.md"):
        m = FRONTMATTER.match(p.read_text(encoding="utf-8"))
        if m:
            fm = yaml.safe_load(m.group(1)) or {}
            if fm.get("compound-id"):
                found[fm["compound-id"]] = (p, fm.get("review-status"))
    return found


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--prune", action="store_true", help="delete orphaned stubs")
    args = ap.parse_args()

    rows = json.loads((PROCESSED / "substances.json").read_text(encoding="utf-8"))
    pk_path = PROCESSED / "pk.json"
    pks = {p["compound_id"]: p for p in json.loads(pk_path.read_text(encoding="utf-8"))} if pk_path.exists() else {}
    loadp = lambda n: json.loads((PROCESSED / n).read_text(encoding="utf-8")) if (PROCESSED / n).exists() else []
    chs = {c["compound_id"]: c for c in loadp("chembl.json")}
    vers = {v["compound_id"]: v for v in loadp("pk-verification.json")}
    links = loadp("links.json") or {}
    rels = links.get("related", {})
    existing = existing_notes()
    used, written, kept = set(), 0, 0
    written_paths = set()
    fnames = {}
    for r in rows:
        fname = safe_filename(r["name"])
        if (r["cluster"], fname.lower()) in used:  # duplicate label -> disambiguate by id
            fname = f"{fname} ({r['compound_id']})"
        used.add((r["cluster"], fname.lower()))
        fnames[r["compound_id"]] = fname
    cat = {r["compound_id"]: r for r in rows}
    link = lambda c: f"[[{fnames[c]}|{cat[c]['name']}]]" if fnames[c] != cat[c]["name"] else f"[[{fnames[c]}]]"
    for r in rows:
        folder = COMPOUND_NOTES / r["cluster"]
        fname = fnames[r["compound_id"]]

        prev = existing.get(r["compound_id"])
        if prev and prev[1] != "stub":
            kept += 1
            continue
        target = folder / f"{fname}.md"
        if prev and prev[0] != target:
            prev[0].unlink()
        folder.mkdir(parents=True, exist_ok=True)
        cid = r["compound_id"]
        pk, ch, ver = pks.get(cid), chs.get(cid), vers.get(cid)
        fmd = frontmatter(r, pk, ch, ver)
        if (rels.get(cid) or {}).get("same-molecule"):
            fmd["tags"] = fmd["tags"] + ["possible-duplicate"]
        if r.get("pubchem_cid"):
            fmd["pubchem-cid"] = int(r["pubchem_cid"])
        fm = yaml.safe_dump(fmd, sort_keys=False, allow_unicode=True, width=1000)
        target.write_text(f"---\n{fm}---\n\n{body(r, pk, ch, ver, rels.get(cid), link)}", encoding="utf-8")
        written_paths.add(target)
        written += 1

    pruned = 0
    if args.prune:
        ids = {r["compound_id"] for r in rows}
        for cid, (path, status) in existing.items():
            if cid not in ids and status == "stub" and path not in written_paths and path.exists():
                path.unlink()
                pruned += 1
    n_t = write_target_notes(links, cat, link) if links else 0
    print(f"stubs_written={written} curated_kept={kept} pruned={pruned} target_notes={n_t}")


if __name__ == "__main__":
    main()
