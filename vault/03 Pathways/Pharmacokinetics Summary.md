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

## Provenance levels (`source-status`)

| Value | Meaning |
|---|---|
| `source-summary-only` | Only the catalogue description; no PK fields |
| `auto-extracted` | PK parsed from a revision-pinned Wikipedia infobox (`pk-source`) |
| `partially-verified` | Auto-extracted **and** consistent with at least one regulatory text in an automated cross-check - US label (`pk-verification`) or EU SmPC/ChPL (`pk-verification-ema`) - with **no** regulator discrepant. Still not a human review |
| `verified` | Human-reviewed against SmPC/label/primary literature (set by hand; then `review-status` ≠ `stub`) |

## Auto-extracted PK (all)
```dataview
TABLE WITHOUT ID file.link AS Compound, cluster AS Cluster, half-life.value AS "t½", half-life.unit AS Unit,
  protein-binding.value AS "PB %", bioavailability.value AS "F %", pk-verification.status AS "FDA check", pk-verification-ema.status AS "ChPL check"
FROM #pk-auto
SORT file.name ASC
```

## Cross-checked against the FDA label
```dataview
TABLE WITHOUT ID file.link AS Compound, half-life.value AS "t½", half-life.unit AS Unit, pk-verification.fields AS Fields
FROM #pk-fda-consistent
SORT file.name ASC
```

## Consistent with both FDA label and EU SmPC (ChPL)
```dataview
TABLE WITHOUT ID file.link AS Compound, half-life.value AS "t½", half-life.unit AS Unit, pk-verification-ema.product AS "EU product", pk-verification-ema.chpl-url AS ChPL
FROM #pk-2-regulators
SORT file.name ASC
```

## Regulators disagree (FDA vs EU)
One regulatory text matches, the other does not - usually a different reference product (depot, liposomal, transdermal) or population.
```dataview
TABLE WITHOUT ID file.link AS Compound, pk-verification.fields AS FDA, pk-verification-ema.fields AS EU, pk-verification-ema.product AS "EU product"
FROM #pk-sources-disagree
SORT file.name ASC
```

Related: [[CYP450 Metabolism]] · [[Clearance Dashboard]] · [[Review Queue]]
