---
type: compound
schema-version: 2
compound-id: ropinirole-compound
name: Ropinirole
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: D2-like dopamine receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL589
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 6.0
  unit: h
  notes: 5-6 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 50.0
  value-max: null
  notes: 50%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP1A2)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Ropinirole
  url: https://en.wikipedia.org/w/index.php?title=Ropinirole&oldid=1374715842
  revision: 1374715842
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL589
  pref-name: ROPINIROLE
  molecule-type: Small molecule
  first-approval: 1997
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N04BC04
  targets: []
  properties:
    full-mwt: 260.38
    mw-freebase: 260.38
    alogp: 2.85
    psa: 32.34
    hba: 2
    hbd: 1
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.82
    full-molformula: C16H24N2O
pk-verification:
  source: fda-label
  status: consistent
  set-id: cdc63b7a-062a-4519-a63e-e48a356f641c
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=cdc63b7a-062a-4519-a63e-e48a356f641c
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Ropinirole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ropinirole-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL589](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL589/) · max phase 4 · id via source catalogue

## Source summary

D2-like dopamine receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL589).

## Mechanism

D2-like dopamine receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1997
- **Flags:** black-box warning
- **ATC N04BC04:** NERVOUS SYSTEM › DOPAMINERGIC AGENTS › Dopamine agonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 260.38 | 2.85 | 32.34 | 1/2 | 0 | C16H24N2O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ropinirole*](https://en.wikipedia.org/w/index.php?title=Ropinirole&oldid=1374715842) (revision 1374715842, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–6 h | 5-6 hours |
| Bioavailability | 50 % | 50% |
| Metabolism | hepatic | Liver (CYP1A2) |
| CYP (metabolised by) | CYP1A2 | roles as inhibitor/inducer not assessed |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set cdc63b7a…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=cdc63b7a-062a-4519-a63e-e48a356f641c), label version 20260904. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 6)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Apomorphine]], [[Bromocriptine (Parlodel)]], [[Cabergoline (Dostinex)]], [[Pergolide]], [[Pramipexole (Mirapex)]], [[Rotigotine]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
