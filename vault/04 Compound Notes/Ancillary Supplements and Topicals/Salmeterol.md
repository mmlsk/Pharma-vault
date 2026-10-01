---
type: compound
schema-version: 2
compound-id: salmeterol-compound
name: Salmeterol
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
chembl-id: CHEMBL1263
chembl-max-phase: 4
half-life:
  value: 5.5
  value-max: null
  unit: h
  notes: 5.5 hours
protein-binding:
  value: 96.0
  value-max: null
  unit: percent
  notes: 96%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4)
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
  title: Salmeterol
  url: https://en.wikipedia.org/w/index.php?title=Salmeterol&oldid=1328958670
  revision: 1328958670
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1263
  pref-name: SALMETEROL
  molecule-type: Small molecule
  first-approval: 1994
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - R03AC12
  targets: []
  properties:
    full-mwt: 415.57
    mw-freebase: 415.57
    alogp: 4.11
    psa: 81.95
    hba: 5
    hbd: 4
    rtb: 16
    num-ro5-violations: 0
    qed-weighted: 0.31
    full-molformula: C25H37NO4
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Salmeterol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `salmeterol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1263](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1263/) · max phase 4 · id via source catalogue

## Source summary

Beta-2 adrenergic receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1263).

## Mechanism

Beta-2 adrenergic receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1994
- **Flags:** black-box warning
- **ATC R03AC12:** RESPIRATORY SYSTEM › ADRENERGICS, INHALANTS › Selective beta-2-adrenoreceptor agonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 415.57 | 4.11 | 81.95 | 4/5 | 0 | C25H37NO4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Salmeterol*](https://en.wikipedia.org/w/index.php?title=Salmeterol&oldid=1328958670) (revision 1328958670, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5.5 h | 5.5 hours |
| Protein binding | 96 % | 96% |
| Metabolism | hepatic | Liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Albuterol]], [[Bitolterol]], [[Clenbuterol]], [[Fenoterol]], [[Formoterol]], [[Indacaterol]], [[Isoetharine]], [[Olodaterol]], [[Pirbuterol]], [[Procaterol]], [[Salbutamol (Albuterol)]], [[Terbutaline]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
