---
type: compound
schema-version: 2
compound-id: chlorthalidone-compound
name: Chlorthalidone
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Thiazide-sensitive sodium-chloride cotransporter inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1055
chembl-max-phase: 4
half-life:
  value: 40.0
  value-max: null
  unit: h
  notes: 40 hours
protein-binding:
  value: 75.0
  value-max: null
  unit: percent
  notes: 75%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
dosage-ranges: {}
cyp-interactions:
  substrates: []
  inhibitors: []
  inducers: []
  transporters: []
  notes: null
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- needs-compound-review
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Chlortalidone
  url: https://en.wikipedia.org/w/index.php?title=Chlortalidone&oldid=1360846956
  revision: 1360846956
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1055
  pref-name: CHLORTHALIDONE
  molecule-type: Small molecule
  first-approval: 1960
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C03BA04
  targets:
  - id: CHEMBL1876
    name: Solute carrier family 12 member 3
    action: INHIBITOR
  properties:
    full-mwt: 338.77
    mw-freebase: 338.77
    alogp: 0.92
    psa: 109.49
    hba: 4
    hbd: 3
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.76
    full-molformula: C14H11ClN2O4S
pk-verification:
  source: fda-label
  status: consistent
  set-id: 5de362df-8fb9-4421-864c-7ea06339d6e7
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5de362df-8fb9-4421-864c-7ea06339d6e7
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Chlorthalidone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `chlorthalidone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1055](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1055/) · max phase 4 · id via Wikipedia infobox

## Source summary

Thiazide-like diuretic; ALLHAT's reference arm and the best of the three at systolic control.

## Mechanism

Thiazide-sensitive sodium-chloride cotransporter inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1960
- **ATC C03BA04:** CARDIOVASCULAR SYSTEM › LOW-CEILING DIURETICS, EXCL. THIAZIDES › Sulfonamides, plain

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 338.77 | 0.92 | 109.49 | 3/4 | 0 | C14H11ClN2O4S |

**Targets (ChEMBL curated mechanisms):**

- [[Solute carrier family 12 member 3 (CHEMBL1876)|Solute carrier family 12 member 3]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Chlortalidone*](https://en.wikipedia.org/w/index.php?title=Chlortalidone&oldid=1360846956) (revision 1360846956, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 40 h | 40 hours |
| Protein binding | 75 % | 75% |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 5de362df…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5de362df-8fb9-4421-864c-7ea06339d6e7), label version 20260805. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 40, 53, 60)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Hydrochlorothiazide (HCTZ)]] (Solute carrier family 12 member 3), [[Indapamide]] (Solute carrier family 12 member 3), [[Metolazone]] (Solute carrier family 12 member 3)
- **Same ATC subgroup:** [[Indapamide]], [[Metolazone]], [[Xipamide]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
