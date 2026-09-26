---
type: dashboard
tags: [dashboard, review]
---

# Review Queue

Curation workflow: `stub` → `candidate` → `expanded` → `verified` (→ `needs-update` when evidence changes).

## Stubs with a ChEMBL mechanism (fastest wins)
```dataview
TABLE cluster, mechanism, chembl-max-phase AS "Max phase"
FROM "04 Compound Notes"
WHERE review-status = "stub" AND mechanism
SORT cluster ASC, file.name ASC
LIMIT 200
```

## In progress
```dataview
TABLE cluster, evidence-level, last-reviewed
FROM "04 Compound Notes"
WHERE review-status != "stub"
SORT last-reviewed DESC
```

## Overdue (> 365 days since review)
```dataview
TABLE cluster, last-reviewed
FROM "04 Compound Notes"
WHERE review-status = "verified" AND last-reviewed AND date(today) - date(last-reviewed) > dur(365 days)
```
