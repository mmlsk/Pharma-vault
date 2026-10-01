---
type: compound
schema-version: 2
compound-id: amitriptyline-compound
name: Amitriptyline
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Serotonin transporter inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL629
chembl-max-phase: 4
half-life:
  value: 21.0
  value-max: null
  unit: h
  notes: 21 hours
protein-binding:
  value: 96.0
  value-max: null
  unit: percent
  notes: 96%
bioavailability:
  value: 45.0
  value-max: 53.0
  notes: 45–53%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 'Urine: 12–80% after 48 hours; feces: not studied'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2D6, CYP2C19, CYP3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Amitriptyline
  url: https://en.wikipedia.org/w/index.php?title=Amitriptyline&oldid=1375865422
  revision: 1375865422
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL629
  pref-name: AMITRIPTYLINE
  molecule-type: Small molecule
  first-approval: 1961
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06AA09
  targets: []
  properties:
    full-mwt: 277.41
    mw-freebase: 277.41
    alogp: 4.17
    psa: 3.24
    hba: 1
    hbd: 0
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.81
    full-molformula: C20H23N
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Amitriptyline

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `amitriptyline-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL629](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL629/) · max phase 4 · id via source catalogue

## Source summary

Serotonin transporter inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL629).

## Mechanism

Serotonin transporter inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1961
- **Flags:** black-box warning
- **ATC N06AA09:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Non-selective monoamine reuptake inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 277.41 | 4.17 | 3.24 | 0/1 | 0 | C20H23N |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Amitriptyline*](https://en.wikipedia.org/w/index.php?title=Amitriptyline&oldid=1375865422) (revision 1375865422, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 21 h | 21 hours |
| Protein binding | 96 % | 96% |
| Bioavailability | 45–53 % | 45–53% |
| Metabolism | hepatic | Liver (CYP2D6, CYP2C19, CYP3A4) |
| CYP (metabolised by) | CYP2C19, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | nortriptyline, (E)-10-hydroxynortriptyline |
| Excretion | - | Urine: 12–80% after 48 hours; feces: not studied |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Amineptine]], [[Amoxapine]], [[Clomipramine]], [[Desipramine]], [[Dibenzepin]], [[Dothiepin]], [[Doxepin]], [[Doxepin, low dose (Silenor)]], [[Imipramine]], [[Maprotiline]], [[Nortriptyline]], [[Protriptyline]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others), CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
