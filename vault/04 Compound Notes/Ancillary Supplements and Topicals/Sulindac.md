---
type: compound
schema-version: 2
compound-id: sulindac-compound
name: Sulindac
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
chembl-id: CHEMBL15770
chembl-max-phase: 4
half-life:
  value: 7.8
  value-max: null
  unit: h
  notes: 7.8 hours, metabolites up to 16.4 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 90.0
  value-max: null
  notes: Approximately 90% (Oral)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal (50%) and fecal (25%)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: '?'
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
  title: Sulindac
  url: https://en.wikipedia.org/w/index.php?title=Sulindac&oldid=1339456381
  revision: 1339456381
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL15770
  pref-name: SULINDAC
  molecule-type: Small molecule
  first-approval: 1978
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - M01AB02
  targets:
  - id: CHEMBL2094253
    name: Cyclooxygenase
    action: INHIBITOR
  properties:
    full-mwt: 356.42
    mw-freebase: 356.42
    alogp: 4.37
    psa: 60.36
    hba: 2
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.83
    full-molformula: C20H17FO3S
pk-verification:
  source: fda-label
  status: consistent
  set-id: 6041acc2-5e8a-4d3c-bf50-7e9447748e2b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6041acc2-5e8a-4d3c-bf50-7e9447748e2b
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Sulindac

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sulindac-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL15770](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL15770/) · max phase 4 · id via source catalogue

## Source summary

Cyclooxygenase inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL15770).

## Mechanism

Cyclooxygenase inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1978
- **Flags:** black-box warning, prodrug
- **ATC M01AB02:** MUSCULO-SKELETAL SYSTEM › ANTIINFLAMMATORY AND ANTIRHEUMATIC PRODUCTS, NON-STEROIDS › Acetic acid derivatives and related substances

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 356.42 | 4.37 | 60.36 | 1/2 | 0 | C20H17FO3S |

**Targets (ChEMBL curated mechanisms):**

- [[Cyclooxygenase (CHEMBL2094253)|Cyclooxygenase]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sulindac*](https://en.wikipedia.org/w/index.php?title=Sulindac&oldid=1339456381) (revision 1339456381, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7.8 h | 7.8 hours, metabolites up to 16.4 hours |
| Bioavailability | 90 % | Approximately 90% (Oral) |
| Metabolism | - | ? |
| Excretion | mainly urinary | Renal (50%) and fecal (25%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 6041acc2…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6041acc2-5e8a-4d3c-bf50-7e9447748e2b), label version 20260508. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 7.8, 16.4)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acemetacin]] (Cyclooxygenase), [[Acetaminophen]] (Cyclooxygenase), [[Aloxiprin]] (Cyclooxygenase), [[Aspirin]] (Cyclooxygenase), [[Benzydamine]] (Cyclooxygenase), [[Bismuth Subsalicylate]] (Cyclooxygenase), [[Clometacin]] (Cyclooxygenase), [[Dexibuprofen]] (Cyclooxygenase), [[Dexketoprofen]] (Cyclooxygenase), [[Diclofenac]] (Cyclooxygenase), [[Diflunisal]] (Cyclooxygenase), [[Esflurbiprofen]] (Cyclooxygenase)
- **Same ATC subgroup:** [[Aceclofenac]], [[Acemetacin]], [[Alclofenac]], [[Diclofenac]], [[Etodolac]], [[Indomethacin]], [[Ketorolac]], [[Tolmetin]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
