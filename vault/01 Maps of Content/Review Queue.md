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

## PK discrepant with the EU SmPC / ChPL (v3.3 automated cross-check)
Same tolerance as the FDA check, against section 5.2 of the EMA product information. A link to the Polish ChPL is in each note.
```dataview
TABLE cluster, half-life.value AS "t½ (Wiki)", half-life.unit AS Unit, pk-verification-ema.fields AS Fields, pk-verification-ema.chpl-url AS ChPL
FROM "04 Compound Notes"
WHERE pk-verification-ema.status = "discrepant"
SORT file.name ASC
```

## Identity: structure conflicts (v3.3, highest priority)
ChEMBL InChIKey shares no skeleton with the PubChem structure from the Wikipedia infobox or the name lookup. Record the decision in `data/curated/identity-decisions.csv` (`confirm` / `replace` / `reject`).
```dataview
TABLE cluster, chembl-id AS ChEMBL, chembl.pref-name AS "ChEMBL name", chembl.identity-source AS Tier
FROM #identity-conflict
SORT file.name ASC
```

## Identity: stereo / tautomer differences
Same skeleton (`identity-stereo-check`) or same formula (`identity-formula-match`) as PubChem. Usually racemate vs enantiomer, deuterated form or tautomer representation - confirm the intended stereo form.
```dataview
TABLE cluster, chembl-id AS ChEMBL, chembl.pref-name AS "ChEMBL name", chembl.identity-check AS Check
FROM #identity-stereo-check OR #identity-formula-match
SORT file.name ASC
```

## Identity matched by name only, no structure evidence
Name-matched identities that could not be corroborated (biologics without INN match in the EMA register, mixtures, extracts).
```dataview
TABLE cluster, chembl-id AS ChEMBL, chembl.pref-name AS "ChEMBL name", chembl.molecule-type AS Type, chembl.identity-check AS Check
FROM #chembl-name-match
WHERE !contains(tags, "identity-confirmed") AND !contains(tags, "identity-inn-ema") AND !contains(tags, "identity-curated")
SORT cluster ASC, file.name ASC
LIMIT 300
```

## Curated identity decisions
```dataview
TABLE chembl-id AS ChEMBL, chembl.identity-decision.decision AS Decision, chembl.identity-decision.reason AS Reason
FROM #identity-curated
SORT file.name ASC
```

## Possible duplicates (same ChEMBL parent molecule)
Notes whose **Related compounds** section lists a *Same ChEMBL parent molecule* entry. Salts/esters of one parent are expected here (base vs hydrochloride); merge under one canonical id during curation.
```dataview
LIST
FROM "04 Compound Notes"
WHERE contains(tags, "possible-duplicate")
SORT file.name ASC
```
