---
type: reference
tags: [dataview]
---

# Dataview Examples v2

## Clearance and half-life overview
```dataview
TABLE class, half-life.value AS HalfLife, renal-clearance.primary-route AS Renal, hepatic-clearance.primary-route AS Hepatic, regulatory-status
FROM "04 Compound Notes"
WHERE type = "compound" AND (renal-clearance.primary-route OR hepatic-clearance.primary-route OR half-life.value)
SORT file.name ASC
```

## CYP3A4-relevant compounds
```dataview
TABLE class, cyp-interactions.substrates AS Substrates, cyp-interactions.inhibitors AS Inhibitors, cyp-interactions.inducers AS Inducers
FROM "04 Compound Notes"
WHERE type = "compound" AND (contains(cyp-interactions.substrates, "CYP3A4") OR contains(cyp-interactions.inhibitors, "CYP3A4") OR contains(cyp-interactions.inducers, "CYP3A4"))
SORT file.name ASC
```

## Cardiovascular risk domain
```dataview
TABLE cluster, evidence-level, monitoring
FROM "04 Compound Notes"
WHERE contains(risk-domains, "cardiovascular-load") OR contains(group-risk-triage, "cardiovascular-load")
SORT cluster ASC
```

## Evidence-tier distribution
```dataview
TABLE WITHOUT ID evidence-level AS Tier, length(rows) AS Count
FROM "04 Compound Notes"
WHERE type = "compound"
GROUP BY evidence-level
```

## Review workflow
```dataview
TABLE review-status, last-reviewed
FROM "04 Compound Notes"
WHERE review-status != "verified"
SORT last-reviewed ASC
LIMIT 100
```
