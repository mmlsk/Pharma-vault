---
type: compound
schema-version: 2
compound-id: meclizine-compound
name: Meclizine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Histamine H1 receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1623
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
  value: 22.0
  value-max: 32.0
  notes: 22 - 32%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2D6)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Meclizine
  url: https://en.wikipedia.org/w/index.php?title=Meclizine&oldid=1365249255
  revision: 1365249255
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1623
  pref-name: MECLIZINE
  molecule-type: Small molecule
  first-approval: 1957
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - R06AE05
  - R06AE55
  targets: []
  properties:
    full-mwt: 390.96
    mw-freebase: 390.96
    alogp: 5.56
    psa: 6.48
    hba: 2
    hbd: 0
    rtb: 5
    num-ro5-violations: 1
    qed-weighted: 0.56
    full-molformula: C25H27ClN2
pk-verification:
  source: fda-label
  status: consistent
  set-id: f755f8f3-7645-433c-b502-c1f15b700299
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f755f8f3-7645-433c-b502-c1f15b700299
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Meclizine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `meclizine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1623](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1623/) · max phase 4 · id via source catalogue

## Source summary

Histamine H1 receptor antagonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1623).

## Mechanism

Histamine H1 receptor antagonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1957
- **ATC R06AE05:** RESPIRATORY SYSTEM › ANTIHISTAMINES FOR SYSTEMIC USE › Piperazine derivatives
- **ATC R06AE55:** RESPIRATORY SYSTEM › ANTIHISTAMINES FOR SYSTEMIC USE › Piperazine derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 390.96 | 5.56 | 6.48 | 0/2 | 1 | C25H27ClN2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Meclizine*](https://en.wikipedia.org/w/index.php?title=Meclizine&oldid=1365249255) (revision 1365249255, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–6 h | 5-6 hours |
| Bioavailability | 22–32 % | 22 - 32% |
| Metabolism | hepatic | Liver (CYP2D6) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set f755f8f3…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f755f8f3-7645-433c-b502-c1f15b700299), label version 20260803. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 5, 6)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Buclizine]], [[Cetirizine]], [[Cyclizine]], [[Levocetirizine]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
