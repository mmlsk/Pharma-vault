---
type: compound
schema-version: 2
compound-id: bromfenac-compound
name: Bromfenac
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
chembl-id: CHEMBL1077
chembl-max-phase: 4
half-life:
  value: 1.4
  value-max: null
  unit: h
  notes: 1.4 hours in aqueous humour
protein-binding:
  value: 99.8
  value-max: null
  unit: percent
  notes: 99.8%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 82% urine, 13% faeces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP2C9
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
pk-source:
  type: wikipedia-infobox
  title: Bromfenac
  url: https://en.wikipedia.org/w/index.php?title=Bromfenac&oldid=1268659641
  revision: 1268659641
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1077
  pref-name: BROMFENAC
  molecule-type: Small molecule
  first-approval: 1997
  black-box-warning: false
  withdrawn: true
  atc-codes:
  - S01BC11
  targets: []
  properties:
    full-mwt: 334.17
    mw-freebase: 334.17
    alogp: 2.89
    psa: 80.39
    hba: 3
    hbd: 2
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.67
    full-molformula: C15H12BrNO3
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 144a5072-341b-4591-8705-773b63044bcc
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=144a5072-341b-4591-8705-773b63044bcc
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Bromfenac

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `bromfenac-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1077](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1077/) · max phase 4 · id via source catalogue

## Source summary

Cyclooxygenase inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL1077).

## Mechanism

Cyclooxygenase inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1997
- **Flags:** withdrawn
- **ATC S01BC11:** SENSORY ORGANS › ANTIINFLAMMATORY AGENTS › Antiinflammatory agents, non-steroids

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 334.17 | 2.89 | 80.39 | 2/3 | 0 | C15H12BrNO3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Bromfenac*](https://en.wikipedia.org/w/index.php?title=Bromfenac&oldid=1268659641) (revision 1268659641, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.4 h | 1.4 hours in aqueous humour |
| Protein binding | 99.8 % | 99.8% |
| Metabolism | hepatic | CYP2C9 |
| CYP (metabolised by) | CYP2C9 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Lactam, others |
| Excretion | - | 82% urine, 13% faeces |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 144a5072…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=144a5072-341b-4591-8705-773b63044bcc), label version 20260108. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Diclofenac]], [[Flurbiprofen]], [[Indomethacin]], [[Ketorolac]], [[Nepafenac]], [[Piroxicam]], [[Salicylic Acid]]
- **Shared CYP substrate pool:** CYP2C9 (+40 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
