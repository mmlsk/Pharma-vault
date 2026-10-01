---
type: compound
schema-version: 2
compound-id: desipramine-compound
name: Desipramine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL72
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: 30.0
  unit: h
  notes: 12–30 hours
protein-binding:
  value: 91.0
  value-max: null
  unit: percent
  notes: 91%
bioavailability:
  value: 60.0
  value-max: 70.0
  notes: 60–70%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (70%), feces
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
  title: Desipramine
  url: https://en.wikipedia.org/w/index.php?title=Desipramine&oldid=1328703992
  revision: 1328703992
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL72
  pref-name: DESIPRAMINE
  molecule-type: Small molecule
  first-approval: 1964
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06AA01
  targets: []
  properties:
    full-mwt: 266.39
    mw-freebase: 266.39
    alogp: 3.53
    psa: 15.27
    hba: 2
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.85
    full-molformula: C18H22N2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Desipramine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `desipramine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL72](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL72/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits norepinephrine reuptake, often alongside serotonin effects; blood pressure and discontinuation effects require attention.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1964
- **Flags:** black-box warning
- **ATC N06AA01:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Non-selective monoamine reuptake inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 266.39 | 3.53 | 15.27 | 1/2 | 0 | C18H22N2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Desipramine*](https://en.wikipedia.org/w/index.php?title=Desipramine&oldid=1328703992) (revision 1328703992, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12–30 h | 12–30 hours |
| Protein binding | 91 % | 91% |
| Bioavailability | 60–70 % | 60–70% |
| Metabolism | hepatic | Liver (CYP2D6) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine (70%), feces |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Amineptine]], [[Amitriptyline]], [[Amoxapine]], [[Clomipramine]], [[Dibenzepin]], [[Dothiepin]], [[Doxepin]], [[Doxepin, low dose (Silenor)]], [[Imipramine]], [[Maprotiline]], [[Nortriptyline]], [[Protriptyline]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
