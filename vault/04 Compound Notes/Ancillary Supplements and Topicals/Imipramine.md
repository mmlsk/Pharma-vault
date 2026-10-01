---
type: compound
schema-version: 2
compound-id: imipramine-compound
name: Imipramine
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
chembl-id: CHEMBL11
chembl-max-phase: 4
half-life:
  value: 20.0
  value-max: null
  unit: h
  notes: 20 hours
protein-binding:
  value: 86.0
  value-max: null
  unit: percent
  notes: 86%
bioavailability:
  value: 94.0
  value-max: 96.0
  notes: 94–96%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (80%), fecal (20%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP1A2, CYP2C19, CYP2D6)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2C19
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2C19, CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Imipramine
  url: https://en.wikipedia.org/w/index.php?title=Imipramine&oldid=1371037707
  revision: 1371037707
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL11
  pref-name: IMIPRAMINE
  molecule-type: Small molecule
  first-approval: 1959
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06AA02
  targets: []
  properties:
    full-mwt: 280.42
    mw-freebase: 280.42
    alogp: 3.88
    psa: 6.48
    hba: 2
    hbd: 0
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.84
    full-molformula: C19H24N2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Imipramine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `imipramine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL11](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL11/) · max phase 4 · id via source catalogue

## Source summary

Serotonin transporter inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL11).

## Mechanism

Serotonin transporter inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1959
- **Flags:** black-box warning
- **ATC N06AA02:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Non-selective monoamine reuptake inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 280.42 | 3.88 | 6.48 | 0/2 | 0 | C19H24N2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Imipramine*](https://en.wikipedia.org/w/index.php?title=Imipramine&oldid=1371037707) (revision 1371037707, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20 h | 20 hours |
| Protein binding | 86 % | 86% |
| Bioavailability | 94–96 % | 94–96% |
| Metabolism | hepatic | Liver (CYP1A2, CYP2C19, CYP2D6) |
| CYP (metabolised by) | CYP1A2, CYP2C19, CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Desipramine |
| Excretion | mainly urinary | Kidney (80%), fecal (20%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Amineptine]], [[Amitriptyline]], [[Amoxapine]], [[Clomipramine]], [[Desipramine]], [[Dibenzepin]], [[Dothiepin]], [[Doxepin]], [[Doxepin, low dose (Silenor)]], [[Maprotiline]], [[Nortriptyline]], [[Protriptyline]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP2C19 (+43 others), CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
