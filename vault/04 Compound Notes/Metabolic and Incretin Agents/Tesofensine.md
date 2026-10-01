---
type: compound
schema-version: 2
compound-id: tesofensine-compound
name: Tesofensine
aliases: []
cluster: Metabolic and Incretin Agents
group: glp1
class: null
subclass: null
mechanism: Monoamine transporter inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3989690
chembl-max-phase: 2
half-life:
  value: 220.0
  value-max: null
  unit: h
  notes: 220 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 90.0
  value-max: null
  notes: 90%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Not applicable
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: '15–20% renal; hepatic: CYP3A4'
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
- glucose-metabolism
- gastrointestinal
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/glp1
- stub
- pk-auto
- chembl-profile
- chembl-name-match
pk-source:
  type: wikipedia-infobox
  title: Tesofensine
  url: https://en.wikipedia.org/w/index.php?title=Tesofensine&oldid=1374173975
  revision: 1374173975
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL3989690
  pref-name: TESOFENSINE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL2363064
    name: Monoamine transporter
    action: INHIBITOR
  properties:
    full-mwt: 328.28
    mw-freebase: 328.28
    alogp: 4.6
    psa: 12.47
    hba: 2
    hbd: 0
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.8
    full-molformula: C17H23Cl2NO
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Tesofensine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tesofensine-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **ChEMBL:** [CHEMBL3989690](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3989690/) · max phase 2 · id via exact ChEMBL name match - confirm

## Source summary

Investigational triple monoamine-reuptake inhibitor with substantial weight-loss signals but dose-related heart-rate and blood-pressure concerns; not broadly approved.

## Mechanism

Monoamine transporter inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 328.28 | 4.6 | 12.47 | 0/2 | 0 | C17H23Cl2NO |

**Targets (ChEMBL curated mechanisms):**

- [[Monoamine transporter (CHEMBL2363064)|Monoamine transporter]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tesofensine*](https://en.wikipedia.org/w/index.php?title=Tesofensine&oldid=1374173975) (revision 1374173975, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 220 h | 220 hours |
| Bioavailability | 90 % | 90% |
| Metabolism | hepatic | 15–20% renal; hepatic: CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Not applicable |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Bicifadine]] (Monoamine transporter), [[Mazindol]] (Monoamine transporter)
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
- [[Glucose and Incretin Signaling]]
