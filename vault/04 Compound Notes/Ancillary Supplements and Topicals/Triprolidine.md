---
type: compound
schema-version: 2
compound-id: triprolidine-compound
name: Triprolidine
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
chembl-id: CHEMBL855
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: 6.0
  unit: h
  notes: 4–6 hours
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: 90%
bioavailability:
  value: 4.0
  value-max: null
  notes: 'Oral: 4%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP2D6)
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
  title: Triprolidine
  url: https://en.wikipedia.org/w/index.php?title=Triprolidine&oldid=1354892877
  revision: 1354892877
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL855
  pref-name: TRIPROLIDINE
  molecule-type: Small molecule
  first-approval: 1982
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - R06AX07
  targets: []
  properties:
    full-mwt: 278.4
    mw-freebase: 278.4
    alogp: 3.92
    psa: 16.13
    hba: 2
    hbd: 0
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.84
    full-molformula: C19H22N2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Triprolidine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `triprolidine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL855](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL855/) · max phase 4 · id via source catalogue

## Source summary

Histamine H1 receptor antagonist; approved/marketed compound catalogued by ChEMBL (CHEMBL855).

## Mechanism

Histamine H1 receptor antagonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1982
- **ATC R06AX07:** RESPIRATORY SYSTEM › ANTIHISTAMINES FOR SYSTEMIC USE › Other antihistamines for systemic use

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 278.4 | 3.92 | 16.13 | 0/2 | 0 | C19H22N2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Triprolidine*](https://en.wikipedia.org/w/index.php?title=Triprolidine&oldid=1354892877) (revision 1354892877, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4–6 h | 4–6 hours |
| Protein binding | 90 % | 90% |
| Bioavailability | 4 % | Oral: 4% |
| Metabolism | hepatic | Hepatic (CYP2D6) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Renal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Acrivastine]], [[Antazoline]], [[Astemizole]], [[Azatadine]], [[Azelastine]], [[Bilastine]], [[Cyproheptadine]], [[Desloratadine]], [[Ebastine]], [[Epinastine]], [[Fexofenadine]], [[Ketotifen]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
