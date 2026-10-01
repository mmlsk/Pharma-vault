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

from pv_common import PROCESSED

DB = PROCESSED / "pharma-vault.db"


def load(n):
    p = PROCESSED / n
    return json.loads(p.read_text(encoding="utf-8")) if p.exists() else []


def main() -> None:
    DB.unlink(missing_ok=True)
    con = sqlite3.connect(DB)
    cur = con.cursor()
    cur.executescript("""
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
    CREATE TABLE identity_review (compound_id TEXT PRIMARY KEY REFERENCES substances, tier TEXT, chembl_id TEXT, verdict TEXT,
                                  decision TEXT, reason TEXT, pubchem_cids TEXT);
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
    con.commit()
    n = {t: cur.execute(f"SELECT COUNT(*) FROM {t}").fetchone()[0] for t in
         ("substances", "pk", "chembl", "atc", "targets", "compound_targets", "pk_verification", "pk_verification_ema", "identity_review")}
    con.close()
    print("sqlite:", n, "->", DB.name)


if __name__ == "__main__":
    main()
