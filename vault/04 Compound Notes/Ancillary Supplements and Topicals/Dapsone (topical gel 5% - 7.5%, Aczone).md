---
type: compound
schema-version: 2
compound-id: dapsone-topical-compound
name: Dapsone (topical gel 5% / 7.5%, Aczone)
aliases:
- Dapsone
- Aczone
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Dihydropteroate synthase 1 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1043
chembl-max-phase: 4
half-life:
  value: 20.0
  value-max: 30.0
  unit: h
  notes: 20 to 30 hours
protein-binding:
  value: 70.0
  value-max: 90.0
  unit: percent
  notes: 70 to 90%
bioavailability:
  value: 70.0
  value-max: 80.0
  notes: 70 to 80%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mostly CYP2E1-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2E1
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2E1 (from metabolism field); inhibitor/inducer roles not assessed
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
- possible-duplicate
pk-source:
  type: wikipedia-infobox
  title: Dapsone
  url: https://en.wikipedia.org/w/index.php?title=Dapsone&oldid=1365208985
  revision: 1365208985
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1043
  pref-name: DAPSONE
  molecule-type: Small molecule
  first-approval: 1979
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - D10AX05
  - J04BA02
  targets:
  - id: CHEMBL2362993
    name: Dihydropteroate synthase
    action: INHIBITOR
  properties:
    full-mwt: 248.31
    mw-freebase: 248.31
    alogp: 1.68
    psa: 86.18
    hba: 4
    hbd: 2
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.79
    full-molformula: C12H12N2O2S
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 839d7440-ba0e-4c56-b648-d374b155cf03
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=839d7440-ba0e-4c56-b648-d374b155cf03
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Dapsone (topical gel 5% / 7.5%, Aczone)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dapsone-topical-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Dapsone, Aczone
- **ChEMBL:** [CHEMBL1043](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1043/) · max phase 4 · id via Wikipedia infobox

## Source summary

Topical sulfone for acne; the gel, not the oral tablet that causes haemolysis and methaemoglobinaemia.

## Mechanism

Dihydropteroate synthase 1 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1979
- **ATC D10AX05:** DERMATOLOGICALS › ANTI-ACNE PREPARATIONS FOR TOPICAL USE › Other anti-acne preparations for topical use
- **ATC J04BA02:** ANTIINFECTIVES FOR SYSTEMIC USE › DRUGS FOR TREATMENT OF LEPRA › Drugs for treatment of lepra

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 248.31 | 1.68 | 86.18 | 2/4 | 0 | C12H12N2O2S |

**Targets (ChEMBL curated mechanisms):**

- [[Dihydropteroate synthase (CHEMBL2362993)|Dihydropteroate synthase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dapsone*](https://en.wikipedia.org/w/index.php?title=Dapsone&oldid=1365208985) (revision 1365208985, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20–30 h | 20 to 30 hours |
| Protein binding | 70–90 % | 70 to 90% |
| Bioavailability | 70–80 % | 70 to 80% |
| Metabolism | hepatic | Liver (mostly CYP2E1-mediated) |
| CYP (metabolised by) | CYP2E1 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 839d7440…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=839d7440-ba0e-4c56-b648-d374b155cf03), label version 20260720. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- ⚠️ **Same molecule in ChEMBL (formulation variant or possible duplicate):** [[Dapsone]]
- **Shared target:** [[Dapsone]] (Dihydropteroate synthase)
- **Same ATC subgroup:** [[Azelaic Acid]], [[CB-03-01 (Clascoterone research formulation)]], [[Clascoterone (Winlevi)]], [[Clofazimine]], [[Dapsone]]
- **Shared CYP substrate pool:** CYP2E1 (+8 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
