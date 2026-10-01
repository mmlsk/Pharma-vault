---
type: compound
schema-version: 2
compound-id: chlorpheniramine-compound
name: Chlorpheniramine
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
chembl-id: CHEMBL505
chembl-max-phase: 4
half-life:
  value: 13.9
  value-max: 43.4
  unit: h
  notes: 13.9–43.4 hours
protein-binding:
  value: 72.0
  value-max: null
  unit: percent
  notes: 72%
bioavailability:
  value: 25.0
  value-max: 50.0
  notes: 25 to 50%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
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
  title: Chlorphenamine
  url: https://en.wikipedia.org/w/index.php?title=Chlorphenamine&oldid=1360097031
  revision: 1360097031
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL505
  pref-name: CHLORPHENIRAMINE
  molecule-type: Small molecule
  first-approval: 1950
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - R06AB04
  - R06AB54
  targets: []
  properties:
    full-mwt: 274.8
    mw-freebase: 274.8
    alogp: 3.82
    psa: 16.13
    hba: 2
    hbd: 0
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.82
    full-molformula: C16H19ClN2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Chlorpheniramine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `chlorpheniramine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL505](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL505/) · max phase 4 · id via source catalogue

## Source summary

Histamine H1 receptor antagonist; approved/marketed compound catalogued by ChEMBL (CHEMBL505).

## Mechanism

Histamine H1 receptor antagonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1950
- **ATC R06AB04:** RESPIRATORY SYSTEM › ANTIHISTAMINES FOR SYSTEMIC USE › Substituted alkylamines
- **ATC R06AB54:** RESPIRATORY SYSTEM › ANTIHISTAMINES FOR SYSTEMIC USE › Substituted alkylamines

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 274.8 | 3.82 | 16.13 | 0/2 | 0 | C16H19ClN2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Chlorphenamine*](https://en.wikipedia.org/w/index.php?title=Chlorphenamine&oldid=1360097031) (revision 1360097031, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 13.9–43.4 h | 13.9–43.4 hours |
| Protein binding | 72 % | 72% |
| Bioavailability | 25–50 % | 25 to 50% |
| Metabolism | hepatic | Liver (CYP2D6) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Brompheniramine]], [[Dexbrompheniramine]], [[Dexchlorpheniramine]], [[Dimethindene]], [[Pheniramine]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
