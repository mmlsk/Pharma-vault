---
type: compound
schema-version: 2
compound-id: diflunisal-compound
name: Diflunisal
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
chembl-id: CHEMBL898
chembl-max-phase: 4
half-life:
  value: 8.0
  value-max: 12.0
  unit: h
  notes: 8 to 12 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
bioavailability:
  value: 80.0
  value-max: 90.0
  notes: 80-90%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
  title: Diflunisal
  url: https://en.wikipedia.org/w/index.php?title=Diflunisal&oldid=1370053535
  revision: 1370053535
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL898
  pref-name: DIFLUNISAL
  molecule-type: Small molecule
  first-approval: 1982
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N02BA11
  targets:
  - id: CHEMBL2094253
    name: Cyclooxygenase
    action: INHIBITOR
  properties:
    full-mwt: 250.2
    mw-freebase: 250.2
    alogp: 3.04
    psa: 57.53
    hba: 2
    hbd: 2
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.86
    full-molformula: C13H8F2O3
pk-verification:
  source: fda-label
  status: consistent
  set-id: 666f89b4-fd81-420a-a390-eb1cd4014f61
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=666f89b4-fd81-420a-a390-eb1cd4014f61
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Diflunisal

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `diflunisal-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL898](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL898/) · max phase 4 · id via source catalogue

## Source summary

Cyclooxygenase inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL898).

## Mechanism

Cyclooxygenase inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1982
- **Flags:** black-box warning
- **ATC N02BA11:** NERVOUS SYSTEM › OTHER ANALGESICS AND ANTIPYRETICS › Salicylic acid and derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 250.2 | 3.04 | 57.53 | 2/2 | 0 | C13H8F2O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Cyclooxygenase (CHEMBL2094253)|Cyclooxygenase]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Diflunisal*](https://en.wikipedia.org/w/index.php?title=Diflunisal&oldid=1370053535) (revision 1370053535, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8–12 h | 8 to 12 hours |
| Protein binding | 99 % | >99% |
| Bioavailability | 80–90 % | 80-90% |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 666f89b4…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=666f89b4-fd81-420a-a390-eb1cd4014f61), label version 20260804. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2, 8, 12)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acemetacin]] (Cyclooxygenase), [[Acetaminophen]] (Cyclooxygenase), [[Aloxiprin]] (Cyclooxygenase), [[Aspirin]] (Cyclooxygenase), [[Benzydamine]] (Cyclooxygenase), [[Bismuth Subsalicylate]] (Cyclooxygenase), [[Clometacin]] (Cyclooxygenase), [[Dexibuprofen]] (Cyclooxygenase), [[Dexketoprofen]] (Cyclooxygenase), [[Diclofenac]] (Cyclooxygenase), [[Esflurbiprofen]] (Cyclooxygenase), [[Fenclofenac]] (Cyclooxygenase)
- **Same ATC subgroup:** [[Aloxiprin]], [[Aspirin]], [[Salsalate]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
