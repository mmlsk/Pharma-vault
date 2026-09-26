---
type: cluster
tags: [cluster]
---

# Ancillary Supplements and Topicals

**Scope:** Supportive medicines, supplements and dermatological/topical agents (largest group; many ChEMBL-derived entries).

## Interpretation
Heterogeneous — each compound needs individual review. Group-level triage is deliberately set to `needs-compound-review`.

## Safety hubs
- [[Stacking and Interaction Risks]]

## Pathways
- [[CYP450 Metabolism]]

## Compounds
```dataview
TABLE WITHOUT ID file.link AS Compound, group AS Group, review-status AS Review, evidence-level AS Evidence
FROM "04 Compound Notes"
WHERE type = "compound" AND cluster = "Ancillary Supplements and Topicals"
SORT file.name ASC
```

Back to [[Compound Clusters MOC]]
