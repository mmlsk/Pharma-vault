---
type: compound
schema-version: 2
compound-id: indomethacin-compound
name: Indomethacin
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
chembl-id: CHEMBL6
chembl-max-phase: 4
half-life:
  value: 2.6
  value-max: 11.2
  unit: h
  notes: 2.6-11.2 hours (adults), 12-28 hours (infants)
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99%
bioavailability:
  value: 100.0
  value-max: null
  notes: ~100% (oral), 80–90% (rectal)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (60%), fecal (33%)
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
  title: Indometacin
  url: https://en.wikipedia.org/w/index.php?title=Indometacin&oldid=1373734407
  revision: 1373734407
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL6
  pref-name: INDOMETHACIN
  molecule-type: Small molecule
  first-approval: 1965
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C01EB03
  - M01AB01
  - M01AB51
  - M02AA23
  - S01BC01
  targets:
  - id: CHEMBL2094253
    name: Cyclooxygenase
    action: INHIBITOR
  properties:
    full-mwt: 357.79
    mw-freebase: 357.79
    alogp: 3.93
    psa: 68.53
    hba: 4
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.77
    full-molformula: C19H16ClNO4
pk-verification:
  source: fda-label
  status: consistent
  set-id: 12821a3a-b5f2-4415-84c9-0a30a4725f1e
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=12821a3a-b5f2-4415-84c9-0a30a4725f1e
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Indomethacin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `indomethacin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL6](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL6/) · max phase 4 · id via source catalogue

## Source summary

Cyclooxygenase inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL6).

## Mechanism

Cyclooxygenase inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1965
- **Flags:** black-box warning
- **ATC C01EB03:** CARDIOVASCULAR SYSTEM › OTHER CARDIAC PREPARATIONS › Other cardiac preparations
- **ATC M01AB01:** MUSCULO-SKELETAL SYSTEM › ANTIINFLAMMATORY AND ANTIRHEUMATIC PRODUCTS, NON-STEROIDS › Acetic acid derivatives and related substances
- **ATC M01AB51:** MUSCULO-SKELETAL SYSTEM › ANTIINFLAMMATORY AND ANTIRHEUMATIC PRODUCTS, NON-STEROIDS › Acetic acid derivatives and related substances
- **ATC M02AA23:** MUSCULO-SKELETAL SYSTEM › TOPICAL PRODUCTS FOR JOINT AND MUSCULAR PAIN › Antiinflammatory preparations, non-steroids for topical use
- **ATC S01BC01:** SENSORY ORGANS › ANTIINFLAMMATORY AGENTS › Antiinflammatory agents, non-steroids

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 357.79 | 3.93 | 68.53 | 1/4 | 0 | C19H16ClNO4 |

**Targets (ChEMBL curated mechanisms):**

- [[Cyclooxygenase (CHEMBL2094253)|Cyclooxygenase]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Indometacin*](https://en.wikipedia.org/w/index.php?title=Indometacin&oldid=1373734407) (revision 1373734407, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.6–11.2 h | 2.6-11.2 hours (adults), 12-28 hours (infants) |
| Protein binding | 99 % | 99% |
| Bioavailability | 100 % | ~100% (oral), 80–90% (rectal) |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Kidney (60%), fecal (33%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 12821a3a…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=12821a3a-b5f2-4415-84c9-0a30a4725f1e), label version 20260817. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 4.5)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acemetacin]] (Cyclooxygenase), [[Acetaminophen]] (Cyclooxygenase), [[Aloxiprin]] (Cyclooxygenase), [[Aspirin]] (Cyclooxygenase), [[Benzydamine]] (Cyclooxygenase), [[Bismuth Subsalicylate]] (Cyclooxygenase), [[Clometacin]] (Cyclooxygenase), [[Dexibuprofen]] (Cyclooxygenase), [[Dexketoprofen]] (Cyclooxygenase), [[Diclofenac]] (Cyclooxygenase), [[Diflunisal]] (Cyclooxygenase), [[Esflurbiprofen]] (Cyclooxygenase)
- **Same ATC subgroup:** [[Aceclofenac]], [[Acemetacin]], [[Adenosine (IV)]], [[Alclofenac]], [[Benzydamine]], [[Bromfenac]], [[Coenzyme Q10]], [[Dexketoprofen]], [[Diclofenac]], [[Esflurbiprofen]], [[Etodolac]], [[Flurbiprofen]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
