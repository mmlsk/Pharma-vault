---
type: compound
schema-version: 2
compound-id: hydrochlorothiazide-compound
name: Hydrochlorothiazide (HCTZ)
aliases:
- Hydrochlorothiazide
- HCTZ
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
chembl-id: CHEMBL435
chembl-max-phase: 4
half-life:
  value: 5.6
  value-max: 14.8
  unit: h
  notes: 5.6–14.8 h
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 70.0
  value-max: null
  notes: Variable (~70% on average)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.95
  notes: Primarily kidney (>95% as unchanged drug)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Not significant
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Hydrochlorothiazide
  url: https://en.wikipedia.org/w/index.php?title=Hydrochlorothiazide&oldid=1376522473
  revision: 1376522473
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL435
  pref-name: HYDROCHLOROTHIAZIDE
  molecule-type: Small molecule
  first-approval: 1959
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C03AA03
  - C03AX01
  targets:
  - id: CHEMBL1876
    name: Solute carrier family 12 member 3
    action: INHIBITOR
  properties:
    full-mwt: 297.75
    mw-freebase: 297.75
    alogp: -0.35
    psa: 118.36
    hba: 5
    hbd: 3
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.65
    full-molformula: C7H8ClN3O4S2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: f20fd735-30c7-4f89-8ceb-b6186646eea6
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f20fd735-30c7-4f89-8ceb-b6186646eea6
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Hydrochlorothiazide (HCTZ)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `hydrochlorothiazide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Hydrochlorothiazide, HCTZ
- **ChEMBL:** [CHEMBL435](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL435/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

The default thiazide worldwide -- though the outcome evidence actually favours chlorthalidone.

## Mechanism

Thiazide-sensitive sodium-chloride cotransporter inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1959
- **ATC C03AA03:** CARDIOVASCULAR SYSTEM › LOW-CEILING DIURETICS, THIAZIDES › Thiazides, plain
- **ATC C03AX01:** CARDIOVASCULAR SYSTEM › LOW-CEILING DIURETICS, THIAZIDES › Thiazides, combinations with other drugs

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 297.75 | -0.35 | 118.36 | 3/5 | 0 | C7H8ClN3O4S2 |

**Targets (ChEMBL curated mechanisms):**

- [[Solute carrier family 12 member 3 (CHEMBL1876)|Solute carrier family 12 member 3]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Hydrochlorothiazide*](https://en.wikipedia.org/w/index.php?title=Hydrochlorothiazide&oldid=1376522473) (revision 1376522473, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5.6–14.8 h | 5.6–14.8 h |
| Bioavailability | 70 % | Variable (~70% on average) |
| Metabolism | - | Not significant |
| Excretion | mainly urinary · fe 0.95 | Primarily kidney (>95% as unchanged drug) |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set f20fd735…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f20fd735-30c7-4f89-8ceb-b6186646eea6), label version 20260827. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Chlorthalidone]] (Solute carrier family 12 member 3), [[Indapamide]] (Solute carrier family 12 member 3), [[Metolazone]] (Solute carrier family 12 member 3)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
