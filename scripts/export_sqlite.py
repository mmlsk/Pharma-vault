#!/usr/bin/env python3
"""Export the generated JSON layers into one queryable SQLite file (not versioned; CI uploads it as an artifact).

Output: data/processed/pharma-vault.db

Example queries
  -- substances sharing a ChEMBL target with modafinil
  SELECT DISTINCT s.name FROM compound_targets a JOIN compound_targets b USING (target_id)
    JOIN substances s ON s.compound_id = b.compound_id
   WHERE a.compound_id = 'modafinil-compound' AND b.compound_id <> a.compound_id;
  -- auto-extracted half-lives that disagree with the FDA label
  SELECT compound_id, field, wikipedia, label_values FROM pk_verification_fields WHERE status = 'discrepant';
"""
from __future__ import annotations

import json
import sqlite3

from pv_common import CURATED, PROCESSED, load_pk_annotations

DB = PROCESSED / "pharma-vault.db"


def load(n):
    p = PROCESSED / n
    return json.loads(p.read_text(encoding="utf-8")) if p.exists() else []


def main() -> None:
    DB.unlink(missing_ok=True)
    con = sqlite3.connect(DB)
    cur = con.cursor()
    cur.executescript("""
    PRAGMA foreign_keys = ON;
    CREATE TABLE substances (compound_id TEXT PRIMARY KEY, name TEXT, grp TEXT, group_label TEXT, cluster TEXT,
        aliases TEXT, description TEXT, mechanism TEXT, chembl_id TEXT, review_status TEXT, source TEXT, triage TEXT);
    CREATE TABLE pk (compound_id TEXT PRIMARY KEY REFERENCES substances, half_life REAL, half_life_max REAL, half_life_unit TEXT,
        protein_binding REAL, bioavailability REAL, renal_primary INTEGER, fe REAL, cyp_substrates TEXT, source_url TEXT, revid INTEGER);
    CREATE TABLE chembl (compound_id TEXT PRIMARY KEY REFERENCES substances, chembl_id TEXT, parent_id TEXT, id_source TEXT,
        pref_name TEXT, molecule_type TEXT, max_phase REAL, first_approval INTEGER, black_box INTEGER, withdrawn INTEGER,
        mw REAL, alogp REAL, psa REAL, ro5_violations INTEGER);
    CREATE TABLE atc (compound_id TEXT REFERENCES substances, code TEXT, level1 TEXT, level3 TEXT, level4 TEXT, who_name TEXT);
    CREATE TABLE targets (target_id TEXT PRIMARY KEY, name TEXT, type TEXT, organism TEXT);
    CREATE TABLE compound_targets (compound_id TEXT REFERENCES substances, target_id TEXT REFERENCES targets, action TEXT, mechanism TEXT);
    CREATE TABLE pk_verification (compound_id TEXT PRIMARY KEY REFERENCES substances, status TEXT, set_id TEXT, url TEXT, effective_time TEXT);
    CREATE TABLE pk_verification_fields (compound_id TEXT, field TEXT, status TEXT, wikipedia TEXT, label_values TEXT);
    CREATE TABLE pk_verification_ema (compound_id TEXT PRIMARY KEY REFERENCES substances, status TEXT, product TEXT, ema_number TEXT,
                                      smpc_url TEXT, chpl_url TEXT, ema_atc TEXT, atc_agrees_chembl INTEGER);
    CREATE TABLE pk_verification_ema_fields (compound_id TEXT, field TEXT, status TEXT, wikipedia TEXT, smpc_values TEXT);
    CREATE TABLE pk_annotations (compound_id TEXT REFERENCES substances, regulator TEXT, field TEXT,
                                 category TEXT, resolution TEXT, explanation TEXT, reviewer TEXT);
    CREATE TABLE identity_review (compound_id TEXT PRIMARY KEY REFERENCES substances, tier TEXT, chembl_id TEXT, verdict TEXT,
                                  decision TEXT, reason TEXT, pubchem_cids TEXT);
    CREATE TABLE curated_typed_edges (source_compound TEXT REFERENCES substances, target_compound TEXT, edge_type TEXT, description TEXT);
    CREATE TABLE metabolite_cascades (compound_id TEXT PRIMARY KEY REFERENCES substances, root_role TEXT, notes TEXT, phase1_json TEXT, phase2_json TEXT);
    CREATE TABLE target_3d_catalog (target_id TEXT PRIMARY KEY, name TEXT, gene TEXT, pdb TEXT, resolution TEXT, uniprot TEXT, ligand TEXT, affinity TEXT, class TEXT, arch TEXT, pocket_json TEXT);
    CREATE TABLE adr_definitions (key TEXT PRIMARY KEY, name TEXT, icon TEXT, axis TEXT, description TEXT);
    CREATE TABLE rpl_products (compound_id TEXT REFERENCES substances, trade_name TEXT, form TEXT, strength TEXT, mah TEXT, permit_no TEXT, status TEXT, atc TEXT, chpl_url TEXT);
    CREATE TABLE psychonaut_profiles (compound_id TEXT PRIMARY KEY REFERENCES substances, evidence_tier TEXT, url TEXT, chemical_class TEXT, psychoactive_class TEXT, duration_onset TEXT, duration_peak TEXT, duration_total TEXT, effects TEXT, addiction_potential TEXT, tolerance TEXT);
    CREATE TABLE compound_indications (compound_id TEXT REFERENCES substances, icd10_code TEXT, icd10_name_pl TEXT, icd11_code TEXT, icd_chapter TEXT, status TEXT, evidence_tier TEXT);
    CREATE TABLE clinical_evidence (compound_id TEXT REFERENCES substances, pmid TEXT, pmcid TEXT, doi TEXT, title TEXT, journal TEXT, journal_abbr TEXT, pub_year INTEGER, study_type TEXT, ebm_tier TEXT, cochrane BOOLEAN, cited_by_count INTEGER, is_open_access BOOLEAN, pdf_url TEXT, conclusion TEXT, abstract TEXT);
    CREATE TABLE ddi_rules (id TEXT PRIMARY KEY, vector TEXT NOT NULL, severity TEXT NOT NULL, compound_a TEXT, compound_b TEXT, enzyme TEXT, title_pl TEXT NOT NULL, description_pl TEXT NOT NULL, clinical_consequence TEXT NOT NULL, monitoring_recommendation TEXT NOT NULL);
    CREATE TABLE receptor_affinities (compound_id TEXT REFERENCES substances, target_name TEXT NOT NULL, chembl_target_id TEXT, ki_nm REAL NOT NULL, pki REAL NOT NULL, action TEXT NOT NULL, kinetic_class TEXT, PRIMARY KEY (compound_id, target_name));
    CREATE TABLE pk_compartment_models (compound_id TEXT PRIMARY KEY REFERENCES substances, vc_l_kg REAL NOT NULL, vp_l_kg REAL NOT NULL, vss_l_kg REAL NOT NULL, cl_l_h_kg REAL NOT NULL, k12_h REAL NOT NULL, k21_h REAL NOT NULL, k10_h REAL NOT NULL, ka_h REAL NOT NULL, alpha_h REAL NOT NULL, beta_h REAL NOT NULL, t_half_alpha_h REAL NOT NULL, t_half_beta_h REAL NOT NULL, primary_cyp TEXT, fm_cyp REAL, fe REAL, notes_pl TEXT);
    CREATE TABLE toxicology_profiles (compound_id TEXT PRIMARY KEY REFERENCES substances, dilirank TEXT NOT NULL, dili_phenotype TEXT NOT NULL, dili_mechanism_pl TEXT, hy_law_risk TEXT, herg_ic50_um REAL, cmax_um REAL, redfern_margin REAL, redfern_class TEXT, crediblemeds TEXT, cipa_compensation TEXT, structural_alerts_json TEXT, fda_category TEXT, teratogenic_risk TEXT, rid_pct REAL, black_box_teratogen BOOLEAN, pregnancy_summary_pl TEXT, lactation_summary_pl TEXT);
    CREATE TABLE transporter_profiles (compound_id TEXT PRIMARY KEY REFERENCES substances, logbb_clark REAL, tpsa REAL, cns_mpo REAL, kp_uu_baseline REAL, cns_penetration_class TEXT, pgp_role TEXT, bcrp_role TEXT, lat1_role TEXT, oatp1b1_role TEXT, oat1_3_role TEXT, oct2_role TEXT, bsep_role TEXT, pept1_role TEXT, transporters_json TEXT, clinical_summary_pl TEXT);
    CREATE TABLE chemical_space (compound_id TEXT PRIMARY KEY REFERENCES substances, x_coord REAL NOT NULL, y_coord REAL NOT NULL, scaffold_id TEXT NOT NULL, scaffold_name TEXT NOT NULL, scaffold_family TEXT NOT NULL, top_analogs_json TEXT, predicted_offtargets_json TEXT);
    CREATE TABLE food_drug_interactions (id TEXT PRIMARY KEY, food_id TEXT NOT NULL, food_name_pl TEXT NOT NULL, compound_id TEXT, atc_pattern TEXT, vector TEXT NOT NULL, severity TEXT NOT NULL, title_pl TEXT NOT NULL, mechanism_pl TEXT NOT NULL, clinical_consequence TEXT NOT NULL, management TEXT NOT NULL, evidence_level TEXT NOT NULL, target_gene TEXT, pdb_id TEXT);
    CREATE TABLE clinical_notes (id TEXT PRIMARY KEY, title TEXT NOT NULL, subtitle TEXT, category TEXT NOT NULL, provenance TEXT NOT NULL, source_file TEXT, updated TEXT, cluster TEXT, tags_json TEXT, compounds_json TEXT, targets_json TEXT, icd_json TEXT, patient_json TEXT, html TEXT NOT NULL);
    CREATE INDEX idx_compound_targets_target ON compound_targets(target_id);
    CREATE INDEX idx_compound_targets_compound ON compound_targets(compound_id);
    CREATE INDEX idx_atc_compound ON atc(compound_id);
    CREATE INDEX idx_atc_code ON atc(code);
    CREATE INDEX idx_pk_ver_fields_compound ON pk_verification_fields(compound_id);
    CREATE INDEX idx_typed_edges_source ON curated_typed_edges(source_compound);
    CREATE INDEX idx_rpl_compound ON rpl_products(compound_id);
    CREATE INDEX idx_rpl_trade_name ON rpl_products(trade_name);
    CREATE INDEX idx_indications_compound ON compound_indications(compound_id);
    CREATE INDEX idx_indications_icd10 ON compound_indications(icd10_code);
    CREATE INDEX idx_indications_icd11 ON compound_indications(icd11_code);
    CREATE INDEX idx_evidence_compound ON clinical_evidence(compound_id);
    CREATE INDEX idx_evidence_ebm_tier ON clinical_evidence(ebm_tier);
    CREATE INDEX idx_evidence_cochrane ON clinical_evidence(cochrane);
    CREATE INDEX idx_ddi_vector ON ddi_rules(vector);
    CREATE INDEX idx_ddi_compounds ON ddi_rules(compound_a, compound_b);
    CREATE INDEX idx_affinities_compound ON receptor_affinities(compound_id);
    CREATE INDEX idx_affinities_target ON receptor_affinities(target_name);
    CREATE INDEX idx_pk_models_compound ON pk_compartment_models(compound_id);
    CREATE INDEX idx_tox_dilirank ON toxicology_profiles(dilirank);
    CREATE INDEX idx_tox_redfern ON toxicology_profiles(redfern_class);
    CREATE INDEX idx_tox_pregnancy ON toxicology_profiles(fda_category);
    CREATE INDEX idx_transporter_logbb ON transporter_profiles(logbb_clark);
    CREATE INDEX idx_transporter_cns_mpo ON transporter_profiles(cns_mpo);
    CREATE INDEX idx_transporter_pgp ON transporter_profiles(pgp_role);
    CREATE INDEX idx_transporter_oatp ON transporter_profiles(oatp1b1_role);
    CREATE INDEX idx_chemspace_coords ON chemical_space(x_coord, y_coord);
    CREATE INDEX idx_chemspace_scaffold ON chemical_space(scaffold_id);
    CREATE INDEX idx_fdi_compound ON food_drug_interactions(compound_id);
    CREATE INDEX idx_fdi_food ON food_drug_interactions(food_id);
    CREATE INDEX idx_fdi_severity ON food_drug_interactions(severity);
    CREATE INDEX idx_notes_category ON clinical_notes(category);
    CREATE INDEX idx_notes_provenance ON clinical_notes(provenance);
    """)
    for r in load("substances.json"):
        cur.execute("INSERT INTO substances VALUES (?,?,?,?,?,?,?,?,?,?,?,?)", (
            r["compound_id"], r["name"], r["group"], r["group_label"], r["cluster"], "; ".join(r["aliases"]), r["description"],
            r["mechanism"], r["chembl_id"], r["review_status"], r["source"], "; ".join(r["group_risk_triage"])))
    for p in load("pk.json"):
        hl, pb, ba = p.get("half-life") or {}, p.get("protein-binding") or {}, p.get("bioavailability") or {}
        rc = p.get("renal-clearance") or {}
        cur.execute("INSERT INTO pk VALUES (?,?,?,?,?,?,?,?,?,?,?)", (
            p["compound_id"], hl.get("value"), hl.get("value-max"), hl.get("unit"), pb.get("value"), ba.get("value"),
            None if rc.get("primary-route") is None else int(rc["primary-route"]), rc.get("fraction-excreted-unchanged"),
            ", ".join((p.get("cyp-interactions") or {}).get("substrates", [])), p["source-url"], p["revid"]))
    for c in load("chembl.json"):
        i, pr = c["identity"], c["properties"]
        cur.execute("INSERT INTO chembl VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)", (
            c["compound_id"], i["chembl-id"], i["parent-chembl-id"], i["source"], i["pref-name"], c["molecule-type"], c["max-phase"],
            c["first-approval"], int(c["black-box-warning"]), int(c["withdrawn"]), pr.get("mw-freebase"), pr.get("alogp"),
            pr.get("psa"), pr.get("num-ro5-violations")))
        for a in c["atc"]:
            cur.execute("INSERT INTO atc VALUES (?,?,?,?,?,?)", (c["compound_id"], a["code"], a["level1"], a["level3"], a["level4"], a["name"]))
        for m in c["mechanisms"]:
            if m["target-chembl-id"]:
                cur.execute("INSERT OR IGNORE INTO targets VALUES (?,?,?,?)", (m["target-chembl-id"], m["target"], m["target-type"], m["organism"]))
                cur.execute("INSERT INTO compound_targets VALUES (?,?,?,?)", (c["compound_id"], m["target-chembl-id"], m["action"], m["text"]))
    for v in load("pk-verification.json"):
        cur.execute("INSERT INTO pk_verification VALUES (?,?,?,?,?)", (v["compound_id"], v["status"], v.get("set-id"), v.get("url"), v.get("effective-time")))
        for f, d in v.get("fields", {}).items():
            cur.execute("INSERT INTO pk_verification_fields VALUES (?,?,?,?,?)", (
                v["compound_id"], f, d["status"], json.dumps(d.get("wikipedia-h") or d.get("wikipedia-pct")),
                json.dumps(d.get("label-values-h") or d.get("label-values-pct"))))
    for v in load("pk-verification-ema.json"):
        cur.execute("INSERT INTO pk_verification_ema VALUES (?,?,?,?,?,?,?,?)", (
            v["compound_id"], v["status"], v["product"], v["ema-number"], v.get("smpc-url"), v.get("chpl-url"), v.get("ema-atc"),
            None if v.get("atc-agrees-chembl") is None else int(v["atc-agrees-chembl"])))
        for f, d in v.get("fields", {}).items():
            cur.execute("INSERT INTO pk_verification_ema_fields VALUES (?,?,?,?,?)", (
                v["compound_id"], f, d["status"], json.dumps(d.get("wikipedia-h") or d.get("wikipedia-pct")),
                json.dumps(d.get("smpc-values-h") or d.get("smpc-values-pct"))))
    for x in load("identity-review.json"):
        d = x.get("decision") or {}
        cur.execute("INSERT INTO identity_review VALUES (?,?,?,?,?,?,?)", (
            x["compound_id"], x["tier"], x["chembl-id"], x["verdict"], d.get("decision"), d.get("reason"),
            ";".join(str(e.get("cid") or e.get("ema-number")) for e in x["evidence"])))
    pka = load_pk_annotations()
    for cid, anns in pka.items():
        for a in anns:
            cur.execute("INSERT INTO pk_annotations VALUES (?,?,?,?,?,?,?)", (
                cid, a["regulator"], a["field"], a["category"], a["resolution"], a["explanation"], a["reviewer"]))

    # Curated clinical extensions
    edges_p = CURATED / "curated_typed_edges.json"
    if edges_p.exists():
        for e in json.loads(edges_p.read_text(encoding="utf-8")):
            cur.execute("INSERT INTO curated_typed_edges VALUES (?,?,?,?)", (e[0], e[1], e[2], e[3] if len(e) > 3 else ""))

    meta_p = CURATED / "metabolite_cascades.json"
    if meta_p.exists():
        for cid, meta in json.loads(meta_p.read_text(encoding="utf-8")).items():
            cur.execute("INSERT OR IGNORE INTO metabolite_cascades VALUES (?,?,?,?,?)", (
                cid, meta.get("rootRole", ""), meta.get("notes", ""),
                json.dumps(meta.get("phase1", [])), json.dumps(meta.get("phase2", []))))

    targets_p = CURATED / "target_3d_catalog.json"
    if targets_p.exists():
        for tid, tinfo in json.loads(targets_p.read_text(encoding="utf-8")).items():
            cur.execute("INSERT OR IGNORE INTO target_3d_catalog VALUES (?,?,?,?,?,?,?,?,?,?,?)", (
                tinfo.get("id", tid), tinfo.get("name", ""), tinfo.get("gene", ""), tinfo.get("pdb", ""),
                tinfo.get("res", ""), tinfo.get("uniprot", ""), tinfo.get("ligand", ""), tinfo.get("affinity", ""),
                tinfo.get("class", ""), tinfo.get("arch", ""), json.dumps(tinfo.get("pocket", []))))

    adr_p = CURATED / "adr_definitions.json"
    if adr_p.exists():
        for a in json.loads(adr_p.read_text(encoding="utf-8")):
            cur.execute("INSERT OR IGNORE INTO adr_definitions VALUES (?,?,?,?,?)", (
                a.get("key", ""), a.get("name", ""), a.get("icon", ""), a.get("axis", ""), a.get("desc", "")))

    rpl_p = PROCESSED / "rpl-products.json"
    if rpl_p.exists():
        for cid, prods in json.loads(rpl_p.read_text(encoding="utf-8")).items():
            for p in prods:
                cur.execute("INSERT INTO rpl_products VALUES (?,?,?,?,?,?,?,?,?)", (
                    cid, p.get("trade_name"), p.get("form"), p.get("strength"),
                    p.get("mah"), p.get("permit_no"), p.get("status"), p.get("atc"), p.get("chpl_url")))

    psy_p = PROCESSED / "psychonaut.json"
    if psy_p.exists():
        for cid, prof in json.loads(psy_p.read_text(encoding="utf-8")).items():
            dur = prof.get("duration", {})
            cls = prof.get("class", {})
            cur.execute("INSERT INTO psychonaut_profiles VALUES (?,?,?,?,?,?,?,?,?,?,?)", (
                cid, prof.get("evidence_tier"), prof.get("url"),
                ", ".join(cls.get("chemical", [])), ", ".join(cls.get("psychoactive", [])),
                dur.get("onset"), dur.get("peak"), dur.get("total"),
                "; ".join(prof.get("effects", [])), prof.get("addiction_potential"), prof.get("tolerance")
            ))

    ind_p = CURATED / "compound_indications.json"
    if ind_p.exists():
        for ind in json.loads(ind_p.read_text(encoding="utf-8")):
            cur.execute("INSERT INTO compound_indications VALUES (?,?,?,?,?,?,?)", (
                ind.get("compound_id"), ind.get("icd10_code"), ind.get("icd10_name_pl"),
                ind.get("icd11_code"), ind.get("icd_chapter"), ind.get("status"), ind.get("evidence_tier")
            ))

    lit_p = PROCESSED / "literature.json"
    if lit_p.exists():
        lit_data = json.loads(lit_p.read_text(encoding="utf-8"))
        for cid, studies in lit_data.get("by_compound", {}).items():
            for s in studies:
                cur.execute("INSERT INTO clinical_evidence VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", (
                    cid, s.get("pmid"), s.get("pmcid"), s.get("doi"), s.get("title"),
                    s.get("journal"), s.get("journal_abbr"), s.get("pub_year"), s.get("study_type"),
                    s.get("ebm_tier"), 1 if s.get("cochrane") else 0, s.get("cited_by_count", 0),
                    1 if s.get("is_open_access") else 0, s.get("pdf_url"), s.get("conclusion"), s.get("abstract")
                ))

    ddi_p = CURATED / "ddi_rules.json"
    if ddi_p.exists():
        ddi_data = json.loads(ddi_p.read_text(encoding="utf-8"))
        for rule in ddi_data.get("specific_pair_rules", []):
            cur.execute("INSERT INTO ddi_rules VALUES (?,?,?,?,?,?,?,?,?,?)", (
                rule.get("id"), rule.get("vector"), rule.get("severity"),
                rule.get("compound_a"), rule.get("compound_b"), rule.get("enzyme"),
                rule.get("title_pl"), rule.get("description_pl"),
                rule.get("clinical_consequence"), rule.get("monitoring_recommendation")
            ))

    rec_p = CURATED / "receptor_affinities.json"
    if rec_p.exists():
        rec_data = json.loads(rec_p.read_text(encoding="utf-8"))
        for cid, drug in rec_data.items():
            k_class = drug.get("kinetic_class")
            for prof in drug.get("profiles", []):
                cur.execute("INSERT OR REPLACE INTO receptor_affinities VALUES (?,?,?,?,?,?,?)", (
                    cid, prof.get("target"), prof.get("chembl_id"),
                    prof.get("ki_nm"), prof.get("pki"), prof.get("action"), k_class
                ))

    comp_p = CURATED / "pk_compartment_models.json"
    if comp_p.exists():
        comp_data = json.loads(comp_p.read_text(encoding="utf-8"))
        for cid, m in comp_data.items():
            cur.execute("INSERT OR REPLACE INTO pk_compartment_models VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", (
                cid, m.get("vc_l_kg"), m.get("vp_l_kg"), m.get("vss_l_kg"), m.get("cl_l_h_kg"),
                m.get("k12_h"), m.get("k21_h"), m.get("k10_h"), m.get("ka_h"),
                m.get("alpha_h"), m.get("beta_h"), m.get("t_half_alpha_h"), m.get("t_half_beta_h"),
                m.get("primary_cyp"), m.get("fm_cyp"), m.get("fe"), m.get("notes_pl")
            ))

    tox_p = CURATED / "toxicology_profiles.json"
    if tox_p.exists():
        tox_data = json.loads(tox_p.read_text(encoding="utf-8"))
        for cid, prof in tox_data.items():
            dili = prof.get("dili", {})
            cardio = prof.get("cardiotox", {})
            preg = prof.get("pregnancy_lactation", {})
            alerts = prof.get("structural_alerts", [])
            cur.execute("INSERT OR REPLACE INTO toxicology_profiles VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", (
                cid,
                dili.get("dilirank", "Ambiguous"),
                dili.get("phenotype", "none"),
                dili.get("mechanism_pl", ""),
                dili.get("hy_law_risk", "low"),
                cardio.get("herg_ic50_um"),
                cardio.get("cmax_therapeutic_um"),
                cardio.get("redfern_margin"),
                cardio.get("redfern_class", "Class 5 (No TdP reported)"),
                cardio.get("crediblemeds", "No known risk"),
                cardio.get("cipa_compensation", "none"),
                json.dumps(alerts, ensure_ascii=False),
                preg.get("fda_category", "C"),
                preg.get("teratogenic_risk", "low"),
                preg.get("rid_pct"),
                bool(preg.get("black_box_teratogen", False)),
                preg.get("pllr_pregnancy_pl", ""),
                preg.get("pllr_lactation_pl", "")
            ))

    trans_p = CURATED / "transporter_profiles.json"
    if trans_p.exists():
        trans_data = json.loads(trans_p.read_text(encoding="utf-8"))
        for cid, prof in trans_data.items():
            phys = prof.get("physicochem", {})
            cns = prof.get("cns_metrics", {})
            t_map = prof.get("transporters", {})
            cur.execute("INSERT OR REPLACE INTO transporter_profiles VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", (
                cid,
                cns.get("logbb_clark"),
                phys.get("tpsa"),
                cns.get("cns_mpo_score"),
                cns.get("kp_uu_baseline"),
                cns.get("cns_penetration_class", "unknown"),
                t_map.get("pgp", {}).get("role", "none"),
                t_map.get("bcrp", {}).get("role", "none"),
                t_map.get("lat1", {}).get("role", "none"),
                t_map.get("oatp1b1", {}).get("role", "none"),
                t_map.get("oat1_3", {}).get("role", "none"),
                t_map.get("oct2", {}).get("role", "none"),
                t_map.get("bsep", {}).get("role", "none"),
                t_map.get("pept1", {}).get("role", "none"),
                json.dumps(t_map, ensure_ascii=False),
                cns.get("summary_pl", "")
            ))

    cs_p = PROCESSED / "chemical_space_2d.json"
    if cs_p.exists():
        cs_data = json.loads(cs_p.read_text(encoding="utf-8"))
        for cid, cs in cs_data.items():
            cur.execute("INSERT OR REPLACE INTO chemical_space VALUES (?,?,?,?,?,?,?,?)", (
                cid,
                cs.get("x", 0.0),
                cs.get("y", 0.0),
                cs.get("scaffold_id", "scaff_miscellaneous_aliphatic"),
                cs.get("scaffold_name", "Inne"),
                cs.get("scaffold_family", "Inne"),
                json.dumps(cs.get("top_analogs", []), ensure_ascii=False),
                json.dumps(cs.get("predicted_offtargets", []), ensure_ascii=False)
            ))

    fdi_p = CURATED / "food_drug_interactions.json"
    if fdi_p.exists():
        fdi_data = json.loads(fdi_p.read_text(encoding="utf-8"))
        food_cat = fdi_data.get("food_catalog", {})
        for rule in fdi_data.get("interaction_rules", []):
            fid = rule["food_id"]
            fname = food_cat.get(fid, {}).get("name_pl", fid)
            atc_pat = "; ".join(rule.get("compound_selector", {}).get("atc_prefixes", []))
            exacts = rule.get("compound_selector", {}).get("exact_compounds", [])
            if exacts:
                for cid in exacts:
                    cur.execute("INSERT OR REPLACE INTO food_drug_interactions VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)", (
                        f"{rule['id']}_{cid}", fid, fname, cid, atc_pat, rule["vector"], rule["severity"],
                        rule["title_pl"], rule["mechanism_pl"], rule["clinical_consequence"], rule["management"],
                        rule["evidence_level"], rule.get("target_gene"), rule.get("pdb_id")
                    ))
            else:
                cur.execute("INSERT OR REPLACE INTO food_drug_interactions VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)", (
                    rule["id"], fid, fname, None, atc_pat, rule["vector"], rule["severity"],
                    rule["title_pl"], rule["mechanism_pl"], rule["clinical_consequence"], rule["management"],
                    rule["evidence_level"], rule.get("target_gene"), rule.get("pdb_id")
                ))

    notes_p = PROCESSED / "clinical_notes.json"
    if notes_p.exists():
        notes_data = json.loads(notes_p.read_text(encoding="utf-8"))
        for n in notes_data:
            cur.execute("INSERT OR REPLACE INTO clinical_notes VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)", (
                n["id"],
                n["title"],
                n.get("subtitle", ""),
                n.get("category", "html_note"),
                n.get("provenance", "repo-curated"),
                n.get("source_file", ""),
                n.get("updated", ""),
                n.get("cluster", "General Pharmacology"),
                json.dumps(n.get("tags", []), ensure_ascii=False),
                json.dumps(n.get("compounds", []), ensure_ascii=False),
                json.dumps(n.get("targets", []), ensure_ascii=False),
                json.dumps(n.get("icd", []), ensure_ascii=False),
                json.dumps(n.get("patient"), ensure_ascii=False) if n.get("patient") else None,
                n.get("html", "")
            ))

    con.commit()
    tables = (
        "substances", "pk", "chembl", "atc", "targets", "compound_targets",
        "pk_verification", "pk_verification_ema", "identity_review", "pk_annotations",
        "curated_typed_edges", "metabolite_cascades", "target_3d_catalog", "adr_definitions",
        "rpl_products", "psychonaut_profiles", "compound_indications", "clinical_evidence", "ddi_rules", "receptor_affinities",
        "pk_compartment_models", "toxicology_profiles", "transporter_profiles", "chemical_space", "food_drug_interactions",
        "clinical_notes"
    )
    n = {t: cur.execute(f"SELECT COUNT(*) FROM {t}").fetchone()[0] for t in tables}
    con.close()
    print("sqlite:", n, "->", DB.name)


if __name__ == "__main__":
    main()
