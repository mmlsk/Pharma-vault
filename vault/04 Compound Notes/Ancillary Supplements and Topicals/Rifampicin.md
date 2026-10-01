---
type: compound
schema-version: 2
compound-id: rifampicin-compound
name: Rifampicin
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Bacterial DNA-directed RNA polymerase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL374478
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: 4.0
  unit: h
  notes: 3–4 hours
protein-binding:
  value: 80.0
  value-max: null
  unit: percent
  notes: 80%
bioavailability:
  value: 90.0
  value-max: 95.0
  notes: 90–95% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine (~30%), faeces (60–65%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver and intestinal wall
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
pk-source:
  type: wikipedia-infobox
  title: Rifampicin
  url: https://en.wikipedia.org/w/index.php?title=Rifampicin&oldid=1374979670
  revision: 1374979670
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL374478
  pref-name: RIFAMPIN
  molecule-type: Small molecule
  first-approval: 1971
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J04AB02
  targets:
  - id: CHEMBL2364672
    name: Bacterial DNA-directed RNA polymerase
    action: INHIBITOR
  properties:
    full-mwt: 822.95
    mw-freebase: 822.95
    alogp: 4.34
    psa: 220.15
    hba: 15
    hbd: 6
    rtb: 4
    num-ro5-violations: 3
    qed-weighted: 0.11
    full-molformula: C43H58N4O12
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Rifampicin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rifampicin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL374478](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL374478/) · max phase 4 · id via Wikipedia infobox

## Source summary

Antimycobacterial and the archetypal enzyme inducer — the reference case for PXR-mediated CYP3A4 induction.

## Mechanism

Bacterial DNA-directed RNA polymerase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1971
- **ATC J04AB02:** ANTIINFECTIVES FOR SYSTEMIC USE › DRUGS FOR TREATMENT OF TUBERCULOSIS › Antibiotics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 822.95 | 4.34 | 220.15 | 6/15 | 3 | C43H58N4O12 |

**Targets (ChEMBL curated mechanisms):**

- [[Bacterial DNA-directed RNA polymerase (CHEMBL2364672)|Bacterial DNA-directed RNA polymerase]] - inhibitor · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rifampicin*](https://en.wikipedia.org/w/index.php?title=Rifampicin&oldid=1374979670) (revision 1374979670, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–4 h | 3–4 hours |
| Protein binding | 80 % | 80% |
| Bioavailability | 90–95 % | 90–95% (by mouth) |
| Metabolism | hepatic | Liver and intestinal wall |
| Excretion | - | Urine (~30%), faeces (60–65%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Rifabutin]] (Bacterial DNA-directed RNA polymerase), [[Rifaximin]] (Bacterial DNA-directed RNA polymerase)
- **Same ATC subgroup:** [[Capreomycin]], [[Cycloserine]], [[Rifabutin]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
