---
type: compound
schema-version: 2
compound-id: amisulpride-compound
name: Amisulpride
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Dopamine receptors; D2 & D3 antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL243712
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: null
  unit: h
  notes: 12 hours
protein-binding:
  value: 16.0
  value-max: null
  unit: percent
  notes: 16%
bioavailability:
  value: 48.0
  value-max: null
  notes: 48%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney (23–46%), Faecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (minimal; most excreted unchanged)
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
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Amisulpride
  url: https://en.wikipedia.org/w/index.php?title=Amisulpride&oldid=1366501553
  revision: 1366501553
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL243712
  pref-name: AMISULPRIDE
  molecule-type: Small molecule
  first-approval: 1986
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N05AL05
  targets:
  - id: CHEMBL2096904
    name: Serotonin (5-HT) receptor
    action: ANTAGONIST
  - id: CHEMBL2095169
    name: Dopamine receptors; D2 & D3
    action: ANTAGONIST
  properties:
    full-mwt: 369.49
    mw-freebase: 369.49
    alogp: 1.29
    psa: 101.73
    hba: 6
    hbd: 2
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.7
    full-molformula: C17H27N3O4S
pk-verification:
  source: fda-label
  status: discrepant
  set-id: ab23bc6e-b6a8-165f-e053-2a95a90ab144
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ab23bc6e-b6a8-165f-e053-2a95a90ab144
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
---

# Amisulpride

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `amisulpride-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL243712](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL243712/) · max phase 4 · id via source catalogue

## Source summary

Dopamine receptors; D2 & D3 antagonist; approved/marketed compound catalogued by ChEMBL (CHEMBL243712).

## Mechanism

Dopamine receptors; D2 & D3 antagonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1986
- **ATC N05AL05:** NERVOUS SYSTEM › ANTIPSYCHOTICS › Benzamides

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 369.49 | 1.29 | 101.73 | 2/6 | 0 | C17H27N3O4S |

**Targets (ChEMBL curated mechanisms):**

- [[Serotonin (5-HT) receptor (CHEMBL2096904)|Serotonin (5-HT) receptor]] - antagonist · PROTEIN FAMILY
- [[Dopamine receptors; D2 & D3 (CHEMBL2095169)|Dopamine receptors; D2 & D3]] - antagonist · SELECTIVITY GROUP

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Amisulpride*](https://en.wikipedia.org/w/index.php?title=Amisulpride&oldid=1366501553) (revision 1366501553, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12 h | 12 hours |
| Protein binding | 16 % | 16% |
| Bioavailability | 48 % | 48% |
| Metabolism | hepatic | Liver (minimal; most excreted unchanged) |
| Excretion | - | Kidney (23–46%), Faecal |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set ab23bc6e…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ab23bc6e-b6a8-165f-e053-2a95a90ab144), label version 20260617. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 4, 5)
> - protein-binding: consistent (label values: 25, 30)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Pardoprunox]] (Dopamine receptors; D2 & D3)
- **Same ATC subgroup:** [[Remoxipride]], [[Sulpiride]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
