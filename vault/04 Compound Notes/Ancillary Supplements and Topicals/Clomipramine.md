---
type: compound
schema-version: 2
compound-id: clomipramine-compound
name: Clomipramine
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
chembl-id: CHEMBL415
chembl-max-phase: 4
half-life:
  value: 19.0
  value-max: 37.0
  unit: h
  notes: 'CMI: 19–37 hours; DCMI: 54–77 hours'
protein-binding:
  value: 96.0
  value-max: 98.0
  unit: percent
  notes: 96–98%
bioavailability:
  value: 50.0
  value-max: null
  notes: ~50%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney (51–60%); Feces (24–32%)
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
  title: Clomipramine
  url: https://en.wikipedia.org/w/index.php?title=Clomipramine&oldid=1374798625
  revision: 1374798625
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL415
  pref-name: CLOMIPRAMINE
  molecule-type: Small molecule
  first-approval: 1989
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06AA04
  targets: []
  properties:
    full-mwt: 314.86
    mw-freebase: 314.86
    alogp: 4.53
    psa: 6.48
    hba: 2
    hbd: 0
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.82
    full-molformula: C19H23ClN2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Clomipramine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `clomipramine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL415](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL415/) · max phase 4 · id via source catalogue

## Source summary

Serotonin transporter inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL415).

## Mechanism

Serotonin transporter inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1989
- **Flags:** black-box warning
- **ATC N06AA04:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Non-selective monoamine reuptake inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 314.86 | 4.53 | 6.48 | 0/2 | 0 | C19H23ClN2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Clomipramine*](https://en.wikipedia.org/w/index.php?title=Clomipramine&oldid=1374798625) (revision 1374798625, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 19–37 h | CMI: 19–37 hours; DCMI: 54–77 hours |
| Protein binding | 96–98 % | 96–98% |
| Bioavailability | 50 % | ~50% |
| Metabolism | hepatic | Liver (CYP2D6) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Desmethylclomipramine |
| Excretion | - | Kidney (51–60%); Feces (24–32%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Amineptine]], [[Amitriptyline]], [[Amoxapine]], [[Desipramine]], [[Dibenzepin]], [[Dothiepin]], [[Doxepin]], [[Doxepin, low dose (Silenor)]], [[Imipramine]], [[Maprotiline]], [[Nortriptyline]], [[Protriptyline]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
