#!/usr/bin/env python3
"""Build chemical space 2D projection, Bemis-Murcko scaffolds, and off-target predictions for 2533 drugs.

Output:
- data/processed/chemical_space_2d.json
"""
from __future__ import annotations

import json
import math
import random
import re
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PROCESSED = ROOT / "data/processed"
CURATED = ROOT / "data/curated"
ENRICHMENT = ROOT / "data/enrichment"
OUT_JSON = PROCESSED / "chemical_space_2d.json"


def parse_formula(mf: str) -> dict[str, int]:
    if not mf:
        return {}
    counts = {}
    for elem, num in re.findall(r"([A-Z][a-z]?)([0-9]*)", mf):
        counts[elem] = int(num) if num else 1
    return counts


def load_all_inchikeys() -> dict[str, str]:
    """Map chembl_id -> InChIKey from structures.jsonl."""
    struct_file = ENRICHMENT / "chembl/structures.jsonl"
    ik_map = {}
    if struct_file.exists():
        with open(struct_file, encoding="utf-8") as f:
            for line in f:
                if line.strip():
                    item = json.loads(line)
                    ik_map[item["id"]] = item.get("inchikey", "")
    return ik_map


def extract_features(
    compounds: list[dict],
    chembl_dict: dict,
    idr_dict: dict,
    struct_ik_map: dict[str, str],
) -> list[dict]:
    records = []
    for c in compounds:
        cid = c["compound_id"]
        ch = chembl_dict.get(cid, {})
        idr = idr_dict.get(cid, {})
        props = ch.get("properties") or {}

        chid = (ch.get("identity") or {}).get("chembl-id") or c.get("chembl_id") or ""
        ik = struct_ik_map.get(chid, "")
        if not ik:
            iks = idr.get("chembl-inchikeys") or []
            if iks and iks[0]:
                ik = iks[0]
            elif idr.get("evidence"):
                for ev in idr["evidence"]:
                    if ev.get("inchikey"):
                        ik = ev["inchikey"]
                        break

        mf = props.get("full-molformula") or ""
        atoms = parse_formula(mf)
        mw = float(props.get("mw-freebase") or props.get("full-mwt") or 300.0)
        alogp = float(props.get("alogp") if props.get("alogp") is not None else 2.0)
        psa = float(props.get("psa") if props.get("psa") is not None else 60.0)
        hba = float(props.get("hba") if props.get("hba") is not None else 3.0)
        hbd = float(props.get("hbd") if props.get("hbd") is not None else 1.0)
        rtb = float(props.get("rtb") if props.get("rtb") is not None else 3.0)
        arom = float(props.get("aromatic_rings") if props.get("aromatic_rings") is not None else (1.0 if "c" in cid or "ben" in cid else 0.0))
        atc_codes = [a.get("code", "") for a in ch.get("atc", [])]
        atc_l4 = [a.get("level4", "") for a in ch.get("atc", []) if a.get("level4")]
        atc_l3 = [a.get("level3", "") for a in ch.get("atc", []) if a.get("level3")]
        targets = [m["target-chembl-id"] for m in ch.get("mechanisms", []) if m.get("target-chembl-id")]

        rec = {
            "compound_id": cid,
            "name": c["name"],
            "group": c["group"],
            "cluster": c["cluster"],
            "chid": chid,
            "ik": ik,
            "mf": mf,
            "atoms": atoms,
            "mw": mw,
            "alogp": alogp,
            "psa": psa,
            "hba": hba,
            "hbd": hbd,
            "rtb": rtb,
            "arom": arom,
            "atc_codes": atc_codes,
            "atc_l4": atc_l4,
            "atc_l3": atc_l3,
            "targets": targets,
            "mechanism": c.get("mechanism") or "",
            "desc": c.get("description") or "",
        }
        records.append(rec)
    return records


def compute_chemo_similarity(v1: dict, v2: dict) -> float:
    # 1. Atom composition Tanimoto
    all_elems = set(v1["atoms"].keys()) | set(v2["atoms"].keys())
    if all_elems:
        inter = sum(min(v1["atoms"].get(e, 0), v2["atoms"].get(e, 0)) for e in all_elems)
        union = sum(max(v1["atoms"].get(e, 0), v2["atoms"].get(e, 0)) for e in all_elems)
        atom_sim = inter / union if union > 0 else 0.0
    else:
        atom_sim = 0.2

    # 2. Physicochemical Ro5 distance
    d_mw = abs(v1["mw"] - v2["mw"]) / 120.0
    d_logp = abs(v1["alogp"] - v2["alogp"]) / 1.8
    d_psa = abs(v1["psa"] - v2["psa"]) / 35.0
    d_hba = abs(v1["hba"] - v2["hba"]) / 2.5
    d_hbd = abs(v1["hbd"] - v2["hbd"]) / 1.5
    dist = math.sqrt(d_mw**2 + d_logp**2 + d_psa**2 + d_hba**2 + d_hbd**2)
    phys_sim = math.exp(-dist / 2.5)

    # 3. InChIKey skeleton match
    ik_sim = 0.0
    if v1["ik"] and v2["ik"]:
        if v1["ik"][:14] == v2["ik"][:14]:
            ik_sim = 1.0
        else:
            shared_c = sum(1 for a, b in zip(v1["ik"][:14], v2["ik"][:14]) if a == b)
            ik_sim = shared_c / 14.0

    # 4. Target overlap Jaccard
    t1, t2 = set(v1["targets"]), set(v2["targets"])
    tg_sim = len(t1 & t2) / len(t1 | t2) if (t1 or t2) else 0.0

    # 5. ATC level 4 match
    atc_match = 1.0 if any(a in v2["atc_l4"] for a in v1["atc_l4"] if a) else 0.0

    score = 0.35 * atom_sim + 0.30 * phys_sim + 0.15 * ik_sim + 0.10 * tg_sim + 0.10 * atc_match
    return min(1.0, max(0.0, score))


def classify_scaffold(rec: dict, scaffolds: list[dict]) -> str:
    """Classify compound into one of the 36 Bemis-Murcko scaffolds."""
    cid = rec["compound_id"].lower()
    name = rec["name"].lower()
    txt = (rec["name"] + " " + rec["mechanism"] + " " + rec["desc"]).lower()
    atc_all = " ".join(rec["atc_l4"] + rec["atc_l3"]).lower()

    # 1. Statyny
    if "hmg coa reductase" in atc_all or any(s in cid or s in name for s in ["statin", "atorvastatin", "simvastatin", "rosuvastatin", "lovastatin", "pravastatin"]):
        return "scaff_statin_heptanoic"

    # 2. Benzodiazepiny
    if "benzodiazepine" in atc_all or any(s in cid or s in name for s in ["diazepam", "alprazolam", "clonazepam", "lorazepam", "temazepam", "oxazepam", "midazolam", "chlordiazepoxide", "zolam", "zepam"]):
        return "scaff_benzodiazepine"

    # 3. Beta-adrenolityki
    if "beta blocking" in atc_all or any(cid.endswith(s) or name.endswith(s) for s in ["olol", "alol", "ilol"]) or "propranolol" in cid:
        return "scaff_aryloxypropanolamine"

    # 4. Dihydropirydyny
    if "dihydropyridine" in atc_all or any(cid.endswith(s) or name.endswith(s) for s in ["dipine", "nifedipine", "amlodipine", "felodipine"]):
        return "scaff_dihydropyridine"

    # 5. Beta-laktamy
    if "penicillin" in atc_all or "cephalosporin" in atc_all or "carbapenem" in atc_all or any(s in cid or s in name for s in ["cillin", "amoxicillin", "ampicillin", "cef", "meropenem", "imipenem"]):
        return "scaff_beta_lactam"

    # 6. Fluorochinolony
    if "fluoroquinolone" in atc_all or any(cid.endswith(s) or name.endswith(s) for s in ["floxacin", "ciprofloxacin", "levofloxacin", "moxifloxacin"]):
        return "scaff_fluoroquinolone"

    # 7. Sulfonamidy i tiazydy
    if "thiazide" in atc_all or "sulfonamide" in atc_all or any(s in cid or s in name for s in ["thiazide", "furosemide", "sulfamethoxazole", "indapamide"]):
        return "scaff_sulfonamide"

    # 8. Steroidy
    if any(s in atc_all for s in ["corticosteroid", "estrogen", "androgen", "gestagen", "steroid"]) or any(s in cid or s in name for s in ["predni", "cortis", "dexamethasone", "testosteron", "estrad", "nandrolone", "spironolactone", "finasteride", "oxandrolone", "trenbolone"]):
        return "scaff_steroid"

    # 9. Tryptaminy
    if any(s in cid or s in name for s in ["serotonin", "tryptamine", "psiloc", "melatonin", "sumatriptan", "zolmitriptan", "dmt", "5-meo", "lsd"]):
        return "scaff_tryptamine"

    # 10. Fenyloetyloaminy
    if any(s in cid or s in name for s in ["amphetamine", "dopamine", "epinephrine", "norepinephrine", "salbutamol", "pseudoephedrine", "modafinil", "phenethylamine", "bupropion"]):
        return "scaff_phenethylamine"

    # 11. Opioidy & Morfinany
    if "opium alkaloid" in atc_all or "opioid" in atc_all or any(s in cid or s in name for s in ["morphine", "codeine", "oxycodone", "fentanyl", "buprenorphine", "loperamide", "tramadol", "naloxone", "naltrexone"]):
        return "scaff_morphinan"

    # 12. Profeny (Kwasy arylo-propionowe)
    if "propionic acid derivatives" in atc_all or any(s in cid or s in name for s in ["ibuprofen", "ketoprofen", "naproxen", "flurbiprofen", "tiaprofenic"]):
        return "scaff_arylpropionic"

    # 13. Fenotiazyny
    if "phenothiazine" in atc_all or any(s in cid or s in name for s in ["chlorpromazine", "promethazine", "fluphenazine", "perphenazine", "thioridazine"]):
        return "scaff_phenothiazine"

    # 14. Azole
    if "imidazole" in atc_all or "triazole" in atc_all or any(s in cid or s in name for s in ["conazole", "fluconazole", "ketoconazole", "itraconazole", "voriconazole"]):
        return "scaff_imidazole_triazole"

    # 15. Pochodne piperazyny
    if any(s in cid or s in name for s in ["cetirizine", "hydroxyzine", "aripiprazole", "buspirone", "piperazine"]):
        return "scaff_piperazine"

    # 16. Sulfonylomoczniki
    if "sulfonylurea" in atc_all or any(s in cid or s in name for s in ["glimepiride", "glipizide", "gliclazide", "glibenclamide"]):
        return "scaff_sulfonylurea"

    # 17. TLPD
    if any(s in cid or s in name for s in ["amitriptyline", "imipramine", "clomipramine", "nortriptyline", "doxepin", "carbamazepine"]):
        return "scaff_tricyclic"

    # 18. Barbiturany
    if "barbiturate" in atc_all or any(s in cid or s in name for s in ["barbital", "phenobarbital", "thiopental"]):
        return "scaff_barbiturate"

    # 19. Ksantyny
    if any(s in cid or s in name for s in ["caffeine", "theophylline", "theobromine", "xanthine"]):
        return "scaff_purine_xanthine"

    # 20. Butyrofenony
    if any(s in cid or s in name for s in ["haloperidol", "droperidol", "benperidol"]):
        return "scaff_butyrophenone"

    # 21. Anilidy
    if any(s in cid or s in name for s in ["paracetamol", "acetaminophen", "lidocaine", "bupivacaine", "prilocaine"]):
        return "scaff_aniline_anilide"

    # 22. Gabapentinoidy
    if any(s in cid or s in name for s in ["gabapentin", "pregabalin", "baclofen", "phenibut"]):
        return "scaff_gabapentinoid"

    # 23. Adamantany
    if any(s in cid or s in name for s in ["amantadine", "memantine", "rimantadine", "vildagliptin"]):
        return "scaff_adamantane"

    # 24. Kumaryny
    if any(s in cid or s in name for s in ["warfarin", "acenocoumarol", "phenprocoumon"]):
        return "scaff_coumarin"

    # 25. Antracykliny
    if any(s in cid or s in name for s in ["doxorubicin", "daunorubicin", "epirubicin", "idarubicin"]):
        return "scaff_anthracycline"

    # 26. Makrolidy
    if "macrolide" in atc_all or any(s in cid or s in name for s in ["erythromycin", "clarithromycin", "azithromycin", "roxithromycin"]):
        return "scaff_macrolide"

    # 27. Tetracykliny
    if any(s in cid or s in name for s in ["tetracycline", "doxycycline", "minocycline"]):
        return "scaff_tetracycline"

    # 28. Biguanidy
    if any(s in cid or s in name for s in ["metformin", "phenformin", "buformin"]):
        return "scaff_biguanide"

    # 29. Werapamilowce
    if any(s in cid or s in name for s in ["verapamil", "gallopamil"]):
        return "scaff_phenylalkylamine_verapamil"

    # 30. Benzotiazepiny
    if "diltiazem" in cid or "diltiazem" in name:
        return "scaff_benzothiazepine"

    # 31. Tienopirydyny
    if any(s in cid or s in name for s in ["clopidogrel", "ticlopidine", "prasugrel"]):
        return "scaff_thienopyridine"

    # 32. Karbaminiany
    if any(s in cid or s in name for s in ["rivastigmine", "neostigmine", "pyridostigmine"]):
        return "scaff_organophosphate_carbamate"

    # 33. Kannabinoidy
    if any(s in cid or s in name for s in ["cannabi", "cbd", "thc", "dronabinol"]):
        return "scaff_cannabinoid"

    # 34. Peptydy
    if any(s in cid or s in name for s in ["semaglutide", "tirzepatide", "liraglutide", "octreotide", "insulin"]):
        return "scaff_peptide_oligomer"

    # 35. Nukleozydy
    if any(s in cid or s in name for s in ["acyclovir", "valacyclovir", "tenofovir", "sofosbuvir", "remdesivir", "zidovudine"]):
        return "scaff_nucleoside_analog"

    return "scaff_miscellaneous_aliphatic"


def compute_deterministic_2d_coords(records: list[dict], scaffold_map: dict[str, str]) -> list[tuple[float, float]]:
    """Generate deterministic 2D coordinates clustering by scaffold and chemical properties."""
    random.seed(42)
    n = len(records)

    # Scaffold centers in circular layout
    scaffold_keys = sorted(list({scaffold_map[r["compound_id"]] for r in records}))
    k_scaff = len(scaffold_keys)
    scaff_centers = {}
    r_circle = 480.0
    for idx, sk in enumerate(scaffold_keys):
        ang = 2 * math.pi * idx / k_scaff
        scaff_centers[sk] = (r_circle * math.cos(ang), r_circle * math.sin(ang))

    coords = []
    scaff_counts = defaultdict(int)
    for r in records:
        cid = r["compound_id"]
        sk = scaffold_map[cid]
        cx, cy = scaff_centers[sk]
        count = scaff_counts[sk]
        scaff_counts[sk] += 1

        # Golden ratio spiral around scaffold center
        r_spiral = 18.0 * math.sqrt(count + 0.5)
        theta = count * 2.399963229728653  # golden angle
        x = cx + r_spiral * math.cos(theta)
        y = cy + r_spiral * math.sin(theta)

        # Subtle displacement based on MW and LogP
        mw_shift = (r["mw"] - 300.0) / 15.0
        logp_shift = (r["alogp"] - 2.0) * 12.0
        x += mw_shift
        y += logp_shift

        coords.append([x, y])

    # Centrowanie i zaokrąglenie
    xs = [c[0] for c in coords]
    ys = [c[1] for c in coords]
    mid_x = (min(xs) + max(xs)) / 2.0
    mid_y = (min(ys) + max(ys)) / 2.0
    scale_x = 1400.0 / (max(xs) - min(xs)) if (max(xs) - min(xs)) > 0 else 1.0
    scale_y = 1400.0 / (max(ys) - min(ys)) if (max(ys) - min(ys)) > 0 else 1.0
    scale = min(scale_x, scale_y)

    final_coords = []
    for x, y in coords:
        fx = round((x - mid_x) * scale, 1)
        fy = round((y - mid_y) * scale, 1)
        final_coords.append((fx, fy))

    return final_coords


def compute_analogs_and_offtargets(
    records: list[dict],
    target_catalog: dict,
    scaffold_map: dict[str, str],
    tox_profiles: dict,
    receptor_profiles: dict,
) -> dict[str, dict]:
    n = len(records)
    results = {}

    comp_targets = {r["compound_id"]: set(r["targets"]) for r in records}

    safety_targets = {
        "CHEMBL240": {"gene": "KCNH2", "name": "Voltage-gated potassium channel hERG", "flag": "cardiotoxicity_qt", "pdb": "5VA1"},
        "CHEMBL1833": {"gene": "HTR2B", "name": "5-hydroxytryptamine receptor 2B (5-HT2B)", "flag": "valvulopathy_fibrosis", "pdb": "4IB4"},
        "CHEMBL228": {"gene": "GABRA1", "name": "GABA-A Receptor Alpha-1 Subunit", "flag": "cns_seizure_sedation", "pdb": "6HUO"},
        "CHEMBL217": {"gene": "DRD2", "name": "Dopamine D2 Receptor", "flag": "extrapyramidal_hyperprolactinemia", "pdb": "6CM4"},
        "CHEMBL4794": {"gene": "SLC7A5", "name": "LAT1 / SLC7A5 BBB Transporter", "flag": "active_influx", "pdb": "6IRT"},
        "CHEMBL402": {"gene": "HMGCR", "name": "HMG-CoA Reductase", "flag": "myopathy_rhabdomyolysis", "pdb": "1HWK"},
        "CHEMBL2093872": {"gene": "GABRA", "name": "GABA-A Anion Channel Complex", "flag": "cns_sedation", "pdb": "6HUO"},
    }

    # Pre-index known potent herg and D2 blockers
    potent_herg = {cid for cid, v in tox_profiles.items() if (v.get("cardiotox") or {}).get("herg_ic50_um", 999) < 2.0}
    potent_d2 = {cid for cid, v in receptor_profiles.items() if any(p.get("target") == "D2" and p.get("ki_nm", 999) < 20 for p in v.get("profiles", []))}

    # Budujemy indeks grup rusztowań dla szybkiego wyszukiwania w ramach tej samej rodziny
    by_scaffold = defaultdict(list)
    for i, r in enumerate(records):
        by_scaffold[scaffold_map[r["compound_id"]]].append(i)

    for i in range(n):
        rec_i = records[i]
        cid_i = rec_i["compound_id"]
        scaff_id = scaffold_map[cid_i]

        same_scaff_indices = by_scaffold[scaff_id]
        sims = []

        for j in same_scaff_indices:
            if i == j:
                continue
            sim = compute_chemo_similarity(rec_i, records[j])
            sims.append((j, sim, True))

        other_indices = random.sample(range(n), min(40, n))
        for j in other_indices:
            if i == j or scaffold_map[records[j]["compound_id"]] == scaff_id:
                continue
            sim = compute_chemo_similarity(rec_i, records[j])
            sims.append((j, sim, False))

        sims.sort(key=lambda x: x[1], reverse=True)
        top5 = sims[:5]

        analogs_out = []
        for j, sim, same_sc in top5:
            cand = records[j]
            analogs_out.append({
                "id": cand["compound_id"],
                "name": cand["name"],
                "tanimoto": round(sim * 100, 1),
                "same_scaffold": same_sc,
            })

        # 2. Target Neighborhood Transfer
        predicted_offtargets = []
        target_votes = defaultdict(float)
        total_weight = 0.0

        for j, sim, _ in sims[:10]:
            if sim < 0.35:
                continue
            cand = records[j]
            cand_id = cand["compound_id"]
            total_weight += sim

            # Known targets
            for tg in cand["targets"]:
                if tg not in comp_targets[cid_i]:
                    target_votes[tg] += sim

            # Inferred anti-targets from tox and receptor profiles
            if cand_id in potent_herg and "CHEMBL240" not in comp_targets[cid_i]:
                target_votes["CHEMBL240"] += sim * 1.4
            if cand_id in potent_d2 and "CHEMBL217" not in comp_targets[cid_i]:
                target_votes["CHEMBL217"] += sim * 1.2
            if ("ergot" in cand_id or "trypt" in cand_id) and "CHEMBL1833" not in comp_targets[cid_i]:
                target_votes["CHEMBL1833"] += sim * 1.1

        if total_weight > 0:
            for tg, score_sum in target_votes.items():
                conf = score_sum / total_weight
                if conf >= 0.25:
                    tg_info = target_catalog.get(tg) or safety_targets.get(tg) or {}
                    st_info = safety_targets.get(tg, {})
                    predicted_offtargets.append({
                        "target_id": tg,
                        "gene": tg_info.get("gene") or tg_info.get("name") or tg,
                        "name": tg_info.get("name") or tg,
                        "score": round(min(98.0, conf * 100), 1),
                        "safety_flag": st_info.get("flag", "pharmacological"),
                        "pdb": tg_info.get("pdb") or st_info.get("pdb"),
                    })

        predicted_offtargets.sort(key=lambda x: x["score"], reverse=True)

        results[cid_i] = {
            "scaffold_id": scaff_id,
            "analogs": analogs_out,
            "predicted_offtargets": predicted_offtargets[:4],
        }

    return results


def main() -> None:
    print("Loading databases for Chemical Space engine...")
    substances = json.loads((PROCESSED / "substances.json").read_text(encoding="utf-8"))
    chembl_list = json.loads((PROCESSED / "chembl.json").read_text(encoding="utf-8")) if (PROCESSED / "chembl.json").exists() else []
    chembl_dict = {c["compound_id"]: c for c in chembl_list}
    idr_list = json.loads((PROCESSED / "identity-review.json").read_text(encoding="utf-8")) if (PROCESSED / "identity-review.json").exists() else []
    idr_dict = {x["compound_id"]: x for x in idr_list}
    struct_ik_map = load_all_inchikeys()
    scaffolds = json.loads((CURATED / "scaffold_definitions.json").read_text(encoding="utf-8"))
    target_catalog = json.loads((CURATED / "target_3d_catalog.json").read_text(encoding="utf-8")) if (CURATED / "target_3d_catalog.json").exists() else {}
    tox_profiles = json.loads((CURATED / "toxicology_profiles.json").read_text(encoding="utf-8")) if (CURATED / "toxicology_profiles.json").exists() else {}
    receptor_profiles = json.loads((CURATED / "receptor_affinities.json").read_text(encoding="utf-8")) if (CURATED / "receptor_affinities.json").exists() else {}

    print(f"Extracted InChIKeys: {len(struct_ik_map)} records from structures.jsonl")
    records = extract_features(substances, chembl_dict, idr_dict, struct_ik_map)

    print("Classifying Bemis-Murcko scaffolds...")
    scaffold_map = {r["compound_id"]: classify_scaffold(r, scaffolds) for r in records}

    print("Computing deterministic 2D coordinates...")
    coords_2d = compute_deterministic_2d_coords(records, scaffold_map)

    print("Computing Tanimoto analogs and off-target predictions...")
    analogs_and_targets = compute_analogs_and_offtargets(records, target_catalog, scaffold_map, tox_profiles, receptor_profiles)

    scaffold_dict = {s["id"]: s for s in scaffolds}

    chemical_space_data = {}
    for i, r in enumerate(records):
        cid = r["compound_id"]
        x, y = coords_2d[i]
        at_info = analogs_and_targets[cid]
        scaff_id = at_info["scaffold_id"]
        scaff_meta = scaffold_dict.get(scaff_id, {})

        chemical_space_data[cid] = {
            "x": x,
            "y": y,
            "scaffold_id": scaff_id,
            "scaffold_name": scaff_meta.get("name", "Pozostałe"),
            "scaffold_family": scaff_meta.get("family", "Inne"),
            "scaffold_color": scaff_meta.get("color_hex", "#94A3B8"),
            "top_analogs": at_info["analogs"],
            "predicted_offtargets": at_info["predicted_offtargets"],
        }

    OUT_JSON.write_text(json.dumps(chemical_space_data, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Generated {len(chemical_space_data)} records in {OUT_JSON} ({OUT_JSON.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
