---
type: reference
tags: [reference, pharmacokinetics]
---

# Pharmacokinetics Summary

Conventions for the v2 PK fields (validated by `schemas/compound-frontmatter.v2.schema.json`).

| Field | Structure | Convention |
|---|---|---|
| `half-life` | `value`, `unit` (min/h/d/wk), `notes` | Terminal elimination t½ of the parent drug in adults; note active metabolites separately |
| `active-metabolites` | list | Named metabolites contributing to effect (e.g. desmethyl-, hydroxy-) |
| `protein-binding` | `value` 0–100, `unit: percent` | High binding (> 90 %) → displacement interactions rarely matter clinically, but affects dialysis |
| `renal-clearance` | `primary-route` bool, `fraction-excreted-unchanged` 0–1 | fe > 0.5 → dose adjustment likely in CKD |
| `hepatic-clearance` | `primary-route` bool, `extraction-ratio` 0–1 | E > 0.7 flow-limited (high first-pass); E < 0.3 capacity-limited (sensitive to enzyme inhibition/induction) |
| `cyp-interactions` | `substrates`, `inhibitors`, `inducers` (CYP names), `transporters` | Record the enzyme **role** of this compound, e.g. `inhibitors: [CYP3A4]` if it inhibits 3A4 |

Key relations: t½ ≈ 0.693·Vd/CL; steady state after ~4–5 half-lives; clearance = renal + hepatic + other.

Sources to prefer: SmPC/FDA label, DrugBank, ChEMBL, primary PK studies.

Related: [[CYP450 Metabolism]] · [[Clearance Dashboard]]
