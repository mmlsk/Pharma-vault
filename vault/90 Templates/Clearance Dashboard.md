---
type: dashboard
tags: [dashboard, pharmacokinetics]
---

# Clearance Dashboard

## Renal vs hepatic clearance
```dataview
TABLE half-life.value AS "t½", renal-clearance.primary-route AS Renal, renal-clearance.fraction-excreted-unchanged AS fe, hepatic-clearance.primary-route AS Hepatic, hepatic-clearance.extraction-ratio AS E
FROM "04 Compound Notes"
WHERE type = "compound" AND (renal-clearance.primary-route != null OR hepatic-clearance.primary-route != null)
SORT file.name ASC
```

## Renally cleared (fe > 0.5) — CKD caution
```dataview
TABLE renal-clearance.fraction-excreted-unchanged AS fe, monitoring
FROM "04 Compound Notes"
WHERE renal-clearance.fraction-excreted-unchanged > 0.5
```

## CYP3A4 screen
```dataview
TABLE cyp-interactions.substrates AS Substrates, cyp-interactions.inhibitors AS Inhibitors, cyp-interactions.inducers AS Inducers
FROM "04 Compound Notes"
WHERE contains(cyp-interactions.substrates, "CYP3A4") OR contains(cyp-interactions.inhibitors, "CYP3A4") OR contains(cyp-interactions.inducers, "CYP3A4")
```

## Active metabolites and protein binding
```dataview
TABLE active-metabolites, protein-binding.value AS "Protein binding %"
FROM "04 Compound Notes"
WHERE length(active-metabolites) > 0 OR protein-binding.value
```

Related: [[Pharmacokinetics Summary]] · [[CYP450 Metabolism]]
