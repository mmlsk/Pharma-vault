---
type: compound
schema-version: 2
compound-id: indacaterol-compound
name: Indacaterol
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Beta-2 adrenergic receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1095777
chembl-max-phase: 4
half-life:
  value: 40.0
  value-max: 56.0
  unit: h
  notes: 40-56 h
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 43.0
  value-max: 45.0
  notes: 43-45 % (inhaled)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: UGT1A1, CYP3A4
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Indacaterol
  url: https://en.wikipedia.org/w/index.php?title=Indacaterol&oldid=1354766271
  revision: 1354766271
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1095777
  pref-name: INDACATEROL
  molecule-type: Small molecule
  first-approval: 2009
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - R03AC18
  targets: []
  properties:
    full-mwt: 392.5
    mw-freebase: 392.5
    alogp: 3.15
    psa: 85.35
    hba: 4
    hbd: 4
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.52
    full-molformula: C24H28N2O3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Indacaterol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `indacaterol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1095777](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1095777/) · max phase 4 · id via source catalogue

## Source summary

Beta-2 adrenergic receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1095777).

## Mechanism

Beta-2 adrenergic receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2009
- **ATC R03AC18:** RESPIRATORY SYSTEM › ADRENERGICS, INHALANTS › Selective beta-2-adrenoreceptor agonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 392.5 | 3.15 | 85.35 | 4/4 | 0 | C24H28N2O3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Indacaterol*](https://en.wikipedia.org/w/index.php?title=Indacaterol&oldid=1354766271) (revision 1354766271, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 40–56 h | 40-56 h |
| Bioavailability | 43–45 % | 43-45 % (inhaled) |
| Metabolism | hepatic | UGT1A1, CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Albuterol]], [[Bitolterol]], [[Clenbuterol]], [[Fenoterol]], [[Formoterol]], [[Isoetharine]], [[Olodaterol]], [[Pirbuterol]], [[Procaterol]], [[Salbutamol (Albuterol)]], [[Salmeterol]], [[Terbutaline]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
