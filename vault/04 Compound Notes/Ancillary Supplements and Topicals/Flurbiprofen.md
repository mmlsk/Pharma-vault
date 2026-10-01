---
type: compound
schema-version: 2
compound-id: flurbiprofen-compound
name: Flurbiprofen
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
chembl-id: CHEMBL563
chembl-max-phase: 4
half-life:
  value: 4.7
  value-max: 5.7
  unit: h
  notes: 4.7-5.7 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '> 99%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C9)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C9
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C9 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Flurbiprofen
  url: https://en.wikipedia.org/w/index.php?title=Flurbiprofen&oldid=1373669934
  revision: 1373669934
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL563
  pref-name: FLURBIPROFEN
  molecule-type: Small molecule
  first-approval: 1986
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - M01AE09
  - M02AA19
  - R02AX01
  - S01BC04
  targets:
  - id: CHEMBL2094253
    name: Cyclooxygenase
    action: INHIBITOR
  properties:
    full-mwt: 244.26
    mw-freebase: 244.26
    alogp: 3.68
    psa: 37.3
    hba: 1
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.89
    full-molformula: C15H13FO2
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 4670cf21-eb0e-4f5a-ab22-41af85733525
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4670cf21-eb0e-4f5a-ab22-41af85733525
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: no-label-value
---

# Flurbiprofen

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `flurbiprofen-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL563](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL563/) · max phase 4 · id via source catalogue

## Source summary

Cyclooxygenase inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL563).

## Mechanism

Cyclooxygenase inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1986
- **Flags:** black-box warning
- **ATC M01AE09:** MUSCULO-SKELETAL SYSTEM › ANTIINFLAMMATORY AND ANTIRHEUMATIC PRODUCTS, NON-STEROIDS › Propionic acid derivatives
- **ATC M02AA19:** MUSCULO-SKELETAL SYSTEM › TOPICAL PRODUCTS FOR JOINT AND MUSCULAR PAIN › Antiinflammatory preparations, non-steroids for topical use
- **ATC R02AX01:** RESPIRATORY SYSTEM › THROAT PREPARATIONS › Other throat preparations
- **ATC S01BC04:** SENSORY ORGANS › ANTIINFLAMMATORY AGENTS › Antiinflammatory agents, non-steroids

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 244.26 | 3.68 | 37.3 | 1/1 | 0 | C15H13FO2 |

**Targets (ChEMBL curated mechanisms):**

- [[Cyclooxygenase (CHEMBL2094253)|Cyclooxygenase]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Flurbiprofen*](https://en.wikipedia.org/w/index.php?title=Flurbiprofen&oldid=1373669934) (revision 1373669934, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4.7–5.7 h | 4.7-5.7 hours |
| Protein binding | 99 % | > 99% |
| Metabolism | hepatic | Liver (CYP2C9) |
| CYP (metabolised by) | CYP2C9 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 4670cf21…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4670cf21-eb0e-4f5a-ab22-41af85733525), label version 20260203. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 12)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acemetacin]] (Cyclooxygenase), [[Acetaminophen]] (Cyclooxygenase), [[Aloxiprin]] (Cyclooxygenase), [[Aspirin]] (Cyclooxygenase), [[Benzydamine]] (Cyclooxygenase), [[Bismuth Subsalicylate]] (Cyclooxygenase), [[Clometacin]] (Cyclooxygenase), [[Dexibuprofen]] (Cyclooxygenase), [[Dexketoprofen]] (Cyclooxygenase), [[Diclofenac]] (Cyclooxygenase), [[Diflunisal]] (Cyclooxygenase), [[Esflurbiprofen]] (Cyclooxygenase)
- **Same ATC subgroup:** [[Aceclofenac]], [[Benzydamine]], [[Bromfenac]], [[Dexibuprofen]], [[Dexketoprofen]], [[Diclofenac]], [[Esflurbiprofen]], [[Fenoprofen]], [[Ibuprofen]], [[Indomethacin]], [[Indoprofen]], [[Ketoprofen]]
- **Shared CYP substrate pool:** CYP2C9 (+40 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
