---
type: compound
schema-version: 2
compound-id: bedaquiline-compound
name: Bedaquiline
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL376488
chembl-max-phase: 4
half-life:
  value: null
  value-max: null
  unit: null
  notes: 5.5 months
protein-binding:
  value: 99.9
  value-max: null
  unit: percent
  notes: '>99.9%'
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: fecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, by CYP3A4
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
- cyp-interactions
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Bedaquiline
  url: https://en.wikipedia.org/w/index.php?title=Bedaquiline&oldid=1369611134
  revision: 1369611134
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL376488
  pref-name: BEDAQUILINE
  molecule-type: Small molecule
  first-approval: 2012
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J04AK05
  targets: []
  properties:
    full-mwt: 555.52
    mw-freebase: 555.52
    alogp: 7.13
    psa: 45.59
    hba: 4
    hbd: 1
    rtb: 8
    num-ro5-violations: 2
    qed-weighted: 0.22
    full-molformula: C32H31BrN2O2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Bedaquiline

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `bedaquiline-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL376488](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL376488/) · max phase 4 · id via Wikipedia infobox

## Source summary

Diarylquinoline that opened a genuinely new target in tuberculosis after forty years, inhibiting the mycobacterial ATP synthase.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2012
- **Flags:** black-box warning
- **ATC J04AK05:** ANTIINFECTIVES FOR SYSTEMIC USE › DRUGS FOR TREATMENT OF TUBERCULOSIS › Other drugs for treatment of tuberculosis

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 555.52 | 7.13 | 45.59 | 1/4 | 2 | C32H31BrN2O2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Bedaquiline*](https://en.wikipedia.org/w/index.php?title=Bedaquiline&oldid=1369611134) (revision 1369611134, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | - | 5.5 months |
| Protein binding | 99.9 % | >99.9% |
| Metabolism | hepatic | Liver, by CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | fecal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Delamanid]], [[Ethambutol]], [[Pretomanid]], [[Pyrazinamide]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
