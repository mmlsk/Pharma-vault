---
type: compound
schema-version: 2
compound-id: loxoprofen-compound
name: Loxoprofen
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Cyclooxygenase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL19299
chembl-max-phase: 4
half-life:
  value: 75.0
  value-max: null
  unit: min
  notes: 75 minutes
protein-binding:
  value: 97.0
  value-max: null
  unit: percent
  notes: 97%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver glucuronidation
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
  title: Loxoprofen
  url: https://en.wikipedia.org/w/index.php?title=Loxoprofen&oldid=1331526208
  revision: 1331526208
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL19299
  pref-name: LOXOPROFEN
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - M01AE19
  - M02AA31
  targets:
  - id: CHEMBL2094253
    name: Cyclooxygenase
    action: INHIBITOR
  properties:
    full-mwt: 246.31
    mw-freebase: 246.31
    alogp: 2.79
    psa: 54.37
    hba: 2
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.89
    full-molformula: C15H18O3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Loxoprofen

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `loxoprofen-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL19299](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL19299/) · max phase 4 · id via source catalogue

## Source summary

Cyclooxygenase inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL19299).

## Mechanism

Cyclooxygenase inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **Flags:** prodrug
- **ATC M01AE19:** MUSCULO-SKELETAL SYSTEM › ANTIINFLAMMATORY AND ANTIRHEUMATIC PRODUCTS, NON-STEROIDS › Propionic acid derivatives
- **ATC M02AA31:** MUSCULO-SKELETAL SYSTEM › TOPICAL PRODUCTS FOR JOINT AND MUSCULAR PAIN › Antiinflammatory preparations, non-steroids for topical use

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 246.31 | 2.79 | 54.37 | 1/2 | 0 | C15H18O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Cyclooxygenase (CHEMBL2094253)|Cyclooxygenase]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Loxoprofen*](https://en.wikipedia.org/w/index.php?title=Loxoprofen&oldid=1331526208) (revision 1331526208, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 75 min | 75 minutes |
| Protein binding | 97 % | 97% |
| Metabolism | hepatic | Liver glucuronidation |
| Excretion | mainly urinary | Kidney |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acemetacin]] (Cyclooxygenase), [[Acetaminophen]] (Cyclooxygenase), [[Aloxiprin]] (Cyclooxygenase), [[Aspirin]] (Cyclooxygenase), [[Benzydamine]] (Cyclooxygenase), [[Bismuth Subsalicylate]] (Cyclooxygenase), [[Clometacin]] (Cyclooxygenase), [[Dexibuprofen]] (Cyclooxygenase), [[Dexketoprofen]] (Cyclooxygenase), [[Diclofenac]] (Cyclooxygenase), [[Diflunisal]] (Cyclooxygenase), [[Esflurbiprofen]] (Cyclooxygenase)
- **Same ATC subgroup:** [[Aceclofenac]], [[Benzydamine]], [[Dexibuprofen]], [[Dexketoprofen]], [[Diclofenac]], [[Esflurbiprofen]], [[Fenoprofen]], [[Flurbiprofen]], [[Ibuprofen]], [[Indomethacin]], [[Indoprofen]], [[Ketoprofen]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
