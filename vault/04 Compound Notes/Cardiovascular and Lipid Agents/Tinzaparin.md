---
type: compound
schema-version: 2
compound-id: tinzaparin-compound
name: Tinzaparin
aliases: []
cluster: Cardiovascular and Lipid Agents
group: cardio
class: null
subclass: null
mechanism: Antithrombin-III activator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201414
chembl-max-phase: 4
half-life:
  value: 200.0
  value-max: null
  unit: min
  notes: 200 min. for Anti-Xa activity, 257. min for Anti-IIa activity
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 90.0
  value-max: null
  notes: 90% for Anti-Xa activity, 67% for Anti-IIa activity)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: minor metabolisation in liver by desulfation and/or depolymerization; excretion via kidneys in almost unchanged form
dosage-ranges: {}
cyp-interactions:
  substrates: []
  inhibitors: []
  inducers: []
  transporters: []
  notes: null
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- cardiovascular-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/cardio
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Tinzaparin sodium
  url: https://en.wikipedia.org/w/index.php?title=Tinzaparin_sodium&oldid=1353808137
  revision: 1353808137
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201414
  pref-name: TINZAPARIN SODIUM
  molecule-type: Oligosaccharide
  first-approval: 2000
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - B01AB10
  targets:
  - id: CHEMBL1950
    name: Antithrombin-III
    action: ACTIVATOR
  properties: {}
  identity-check: no-chembl-structure
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Tinzaparin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tinzaparin-compound`
- **Source group:** Cardiovascular (`cardio`)
- **Cluster:** [[Cardiovascular and Lipid Agents]]
- **ChEMBL:** [CHEMBL1201414](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201414/) · max phase 4 · id via Wikipedia infobox · structure check: no small-molecule structure in ChEMBL

## Source summary

Low molecular weight heparin with a higher mean molecular weight than the others, so it retains more anti-thrombin activity.

## Mechanism

Antithrombin-III activator _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Oligosaccharide
- **First approval (ChEMBL):** 2000
- **Flags:** black-box warning
- **ATC B01AB10:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Heparin group

**Targets (ChEMBL curated mechanisms):**

- [[Antithrombin-III (CHEMBL1950)|Antithrombin-III]] - activator · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tinzaparin sodium*](https://en.wikipedia.org/w/index.php?title=Tinzaparin_sodium&oldid=1353808137) (revision 1353808137, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 200 min | 200 min. for Anti-Xa activity, 257. min for Anti-IIa activity |
| Bioavailability | 90 % | 90% for Anti-Xa activity, 67% for Anti-IIa activity) |
| Metabolism | hepatic | minor metabolisation in liver by desulfation and/or depolymerization; excretion via kidneys in almost unchanged form |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Dalteparin]] (Antithrombin-III), [[Nadroparin]] (Antithrombin-III), [[Semuloparin Sodium]] (Antithrombin-III)
- **Same ATC subgroup:** [[Dalteparin]], [[Nadroparin]], [[Sulodexide]]

## Safety routing

Group-level triage (not compound-specific): `cardiovascular-load`

- [[Stacking and Interaction Risks]]
- [[Stimulant and Cardiovascular Load]]
