---
type: cluster
tags: [cluster]
---

# General Pharmacology

**Scope:** Anti-infectives, immunology/biologics, analgesia/anaesthesia, GI/hepatic and oncology agents.

## Interpretation
Added in v3 to host catalogue groups outside the original seven clusters. Key cross-cluster relevance: CYP inhibition/induction (azoles, macrolides, rifamycins), opioid/sedative respiratory depression, immunosuppression.

## Safety hubs
- [[Respiratory Depression and Fatal Overdose]]
- [[Stacking and Interaction Risks]]

## Pathways
- [[CYP450 Metabolism]]

## Compounds
```dataview
TABLE WITHOUT ID file.link AS Compound, group AS Group, review-status AS Review, evidence-level AS Evidence
FROM "04 Compound Notes"
WHERE type = "compound" AND cluster = "General Pharmacology"
SORT file.name ASC
```

Back to [[Compound Clusters MOC]]
