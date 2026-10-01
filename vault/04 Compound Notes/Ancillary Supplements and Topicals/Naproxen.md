---
type: compound
schema-version: 2
compound-id: naproxen-compound
name: Naproxen
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
chembl-id: CHEMBL154
chembl-max-phase: 4
half-life:
  value: 14.0
  value-max: null
  unit: h
  notes: 14 hours (adults)
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99%
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (to 6-desmethylnaproxen)
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
  title: Naproxen
  url: https://en.wikipedia.org/w/index.php?title=Naproxen&oldid=1360544020
  revision: 1360544020
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL154
  pref-name: NAPROXEN
  molecule-type: Small molecule
  first-approval: 1976
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - G02CC02
  - M01AE02
  - M02AA12
  targets:
  - id: CHEMBL2094253
    name: Cyclooxygenase
    action: INHIBITOR
  properties:
    full-mwt: 230.26
    mw-freebase: 230.26
    alogp: 3.04
    psa: 46.53
    hba: 2
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.88
    full-molformula: C14H14O3
pk-verification:
  source: fda-label
  status: consistent
  set-id: 5954565a-d9bd-9e26-e063-6294a90a03cb
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5954565a-d9bd-9e26-e063-6294a90a03cb
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Naproxen

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `naproxen-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL154](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL154/) · max phase 4 · id via source catalogue

## Source summary

Cyclooxygenase inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL154).

## Mechanism

Cyclooxygenase inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1976
- **Flags:** black-box warning
- **ATC G02CC02:** GENITO URINARY SYSTEM AND SEX HORMONES › OTHER GYNECOLOGICALS › Antiinflammatory products for vaginal administration
- **ATC M01AE02:** MUSCULO-SKELETAL SYSTEM › ANTIINFLAMMATORY AND ANTIRHEUMATIC PRODUCTS, NON-STEROIDS › Propionic acid derivatives
- **ATC M02AA12:** MUSCULO-SKELETAL SYSTEM › TOPICAL PRODUCTS FOR JOINT AND MUSCULAR PAIN › Antiinflammatory preparations, non-steroids for topical use

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 230.26 | 3.04 | 46.53 | 1/2 | 0 | C14H14O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Cyclooxygenase (CHEMBL2094253)|Cyclooxygenase]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Naproxen*](https://en.wikipedia.org/w/index.php?title=Naproxen&oldid=1360544020) (revision 1360544020, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 14 h | 14 hours (adults) |
| Protein binding | 99 % | 99% |
| Bioavailability | 100 % | 100% (by mouth) |
| Metabolism | hepatic | Liver (to 6-desmethylnaproxen) |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 5954565a…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5954565a-d9bd-9e26-e063-6294a90a03cb), label version 20260818. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 12, 17, 96, 120)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acemetacin]] (Cyclooxygenase), [[Acetaminophen]] (Cyclooxygenase), [[Aloxiprin]] (Cyclooxygenase), [[Aspirin]] (Cyclooxygenase), [[Benzydamine]] (Cyclooxygenase), [[Bismuth Subsalicylate]] (Cyclooxygenase), [[Clometacin]] (Cyclooxygenase), [[Dexibuprofen]] (Cyclooxygenase), [[Dexketoprofen]] (Cyclooxygenase), [[Diclofenac]] (Cyclooxygenase), [[Diflunisal]] (Cyclooxygenase), [[Esflurbiprofen]] (Cyclooxygenase)
- **Same ATC subgroup:** [[Aceclofenac]], [[Benzydamine]], [[Dexibuprofen]], [[Dexketoprofen]], [[Diclofenac]], [[Esflurbiprofen]], [[Fenoprofen]], [[Flurbiprofen]], [[Ibuprofen]], [[Indomethacin]], [[Indoprofen]], [[Ketoprofen]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
