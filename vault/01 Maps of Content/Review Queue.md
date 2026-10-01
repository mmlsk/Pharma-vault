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

## PK discrepant with the FDA label (v3.2 automated cross-check)
Auto-extracted values that matched **no** number in the US label (t½ ×0.5–1.5, protein binding ±10 pp). Typical causes: formulation-specific apparent t½ (depots, implants), metabolite vs parent, enantiomer, parser error.
```dataview
TABLE cluster, half-life.value AS "t½ (Wiki)", half-life.unit AS Unit, pk-verification.fields AS Fields, pk-verification.url AS Label
FROM "04 Compound Notes"
WHERE pk-verification.status = "discrepant"
SORT file.name ASC
```

## Identity matched by name only (confirm)
```dataview
TABLE cluster, chembl-id AS ChEMBL, chembl.pref-name AS "ChEMBL name"
FROM #chembl-name-match
SORT cluster ASC, file.name ASC
LIMIT 300
```

## Possible duplicates (same ChEMBL parent molecule)
Notes whose **Related compounds** section lists a *Same ChEMBL parent molecule* entry. Salts/esters of one parent are expected here (base vs hydrochloride); merge under one canonical id during curation.
```dataview
LIST
FROM "04 Compound Notes"
WHERE contains(tags, "possible-duplicate")
SORT file.name ASC
```
