---
type: compound
schema-version: 2
compound-id: diclofenac-compound
name: Diclofenac
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
chembl-id: CHEMBL139
chembl-max-phase: 4
half-life:
  value: 1.2
  value-max: 2.0
  unit: h
  notes: 1.2–2 h (35% of the drug enters enterohepatic recirculation)
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: More than 99%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 35% bile, 65% urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, oxidative, primarily by CYP2C9, also by CYP2C8, CYP3A4, as well as conjugative by glucuronidation (UGT2B7) and sulfation; no active metabolites exist
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C8
  - CYP2C9
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C8, CYP2C9, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Diclofenac
  url: https://en.wikipedia.org/w/index.php?title=Diclofenac&oldid=1370369641
  revision: 1370369641
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL139
  pref-name: DICLOFENAC
  molecule-type: Small molecule
  first-approval: 1988
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - D11AX18
  - M01AB05
  - M01AB55
  - M02AA15
  - S01BC03
  targets:
  - id: CHEMBL2094253
    name: Cyclooxygenase
    action: INHIBITOR
  properties:
    full-mwt: 296.15
    mw-freebase: 296.15
    alogp: 4.36
    psa: 49.33
    hba: 2
    hbd: 2
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.88
    full-molformula: C14H11Cl2NO2
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 937e9ba5-cdad-4e72-a77a-bad699e1b236
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=937e9ba5-cdad-4e72-a77a-bad699e1b236
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
---

# Diclofenac

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `diclofenac-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL139](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL139/) · max phase 4 · id via source catalogue

## Source summary

Cyclooxygenase inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL139).

## Mechanism

Cyclooxygenase inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1988
- **Flags:** black-box warning
- **ATC D11AX18:** DERMATOLOGICALS › OTHER DERMATOLOGICAL PREPARATIONS › Other dermatologicals
- **ATC M01AB05:** MUSCULO-SKELETAL SYSTEM › ANTIINFLAMMATORY AND ANTIRHEUMATIC PRODUCTS, NON-STEROIDS › Acetic acid derivatives and related substances
- **ATC M01AB55:** MUSCULO-SKELETAL SYSTEM › ANTIINFLAMMATORY AND ANTIRHEUMATIC PRODUCTS, NON-STEROIDS › Acetic acid derivatives and related substances
- **ATC M02AA15:** MUSCULO-SKELETAL SYSTEM › TOPICAL PRODUCTS FOR JOINT AND MUSCULAR PAIN › Antiinflammatory preparations, non-steroids for topical use
- **ATC S01BC03:** SENSORY ORGANS › ANTIINFLAMMATORY AGENTS › Antiinflammatory agents, non-steroids

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 296.15 | 4.36 | 49.33 | 2/2 | 0 | C14H11Cl2NO2 |

**Targets (ChEMBL curated mechanisms):**

- [[Cyclooxygenase (CHEMBL2094253)|Cyclooxygenase]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Diclofenac*](https://en.wikipedia.org/w/index.php?title=Diclofenac&oldid=1370369641) (revision 1370369641, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.2–2 h | 1.2–2 h (35% of the drug enters enterohepatic recirculation) |
| Protein binding | 99 % | More than 99% |
| Metabolism | hepatic | Liver, oxidative, primarily by CYP2C9, also by CYP2C8, CYP3A4, as well as conjugative by glucuronidation (UGT2B7) and sulfation; no active metabolites exist |
| CYP (metabolised by) | CYP2C8, CYP2C9, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | 35% bile, 65% urine |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 937e9ba5…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=937e9ba5-cdad-4e72-a77a-bad699e1b236), label version 20260402. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 168)
> - protein-binding: consistent (label values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acemetacin]] (Cyclooxygenase), [[Acetaminophen]] (Cyclooxygenase), [[Aloxiprin]] (Cyclooxygenase), [[Aspirin]] (Cyclooxygenase), [[Benzydamine]] (Cyclooxygenase), [[Bismuth Subsalicylate]] (Cyclooxygenase), [[Clometacin]] (Cyclooxygenase), [[Dexibuprofen]] (Cyclooxygenase), [[Dexketoprofen]] (Cyclooxygenase), [[Diflunisal]] (Cyclooxygenase), [[Esflurbiprofen]] (Cyclooxygenase), [[Fenclofenac]] (Cyclooxygenase)
- **Same ATC subgroup:** [[Aceclofenac]], [[Acemetacin]], [[Alclofenac]], [[Benzydamine]], [[Brimonidine]], [[Bromfenac]], [[Caffeine]], [[Dexketoprofen]], [[Esflurbiprofen]], [[Etodolac]], [[Finasteride]], [[Finasteride (topical spray solution)]]
- **Shared CYP substrate pool:** CYP2C8 (+15 others), CYP2C9 (+40 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
