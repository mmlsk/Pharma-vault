---
type: compound
schema-version: 2
compound-id: rasburicase-compound
name: Rasburicase
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Uric acid oxidative enzyme
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201594
chembl-max-phase: 4
half-life:
  value: 18.0
  value-max: null
  unit: h
  notes: 18 hrs
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: N/A
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
  title: Rasburicase
  url: https://en.wikipedia.org/w/index.php?title=Rasburicase&oldid=1337699059
  revision: 1337699059
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201594
  pref-name: RASBURICASE
  molecule-type: Enzyme
  first-approval: 2001
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - M04AX01
  - V03AF07
  targets:
  - id: CHEMBL2364183
    name: Uric acid
    action: OXIDATIVE ENZYME
  properties: {}
pk-verification:
  source: fda-label
  status: consistent
  set-id: 0ae10bc4-6b65-402f-9db5-2d7753054922
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0ae10bc4-6b65-402f-9db5-2d7753054922
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Rasburicase

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rasburicase-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1201594](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201594/) · max phase 4 · id via Wikipedia infobox

## Source summary

Recombinant urate oxidase that converts uric acid to soluble allantoin, used for tumour lysis syndrome.

## Mechanism

Uric acid oxidative enzyme _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Enzyme
- **First approval (ChEMBL):** 2001
- **Flags:** black-box warning
- **ATC M04AX01:** MUSCULO-SKELETAL SYSTEM › ANTIGOUT PREPARATIONS › Other antigout preparations
- **ATC V03AF07:** VARIOUS › ALL OTHER THERAPEUTIC PRODUCTS › Detoxifying agents for antineoplastic treatment

**Targets (ChEMBL curated mechanisms):**

- [[Uric acid (CHEMBL2364183)|Uric acid]] - oxidative enzyme · SMALL MOLECULE

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rasburicase*](https://en.wikipedia.org/w/index.php?title=Rasburicase&oldid=1337699059) (revision 1337699059, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 18 h | 18 hrs |
| Bioavailability | - | N/A |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 0ae10bc4…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0ae10bc4-6b65-402f-9db5-2d7753054922), label version 20260730. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 15.7, 22.5)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Dexrazoxane (Zinecard)]], [[Glucarpidase]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
