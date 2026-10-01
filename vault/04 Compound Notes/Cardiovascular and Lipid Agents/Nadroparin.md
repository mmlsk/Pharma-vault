---
type: compound
schema-version: 2
compound-id: nadroparin-compound
name: Nadroparin
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
chembl-id: CHEMBL2109204
chembl-max-phase: 4
half-life:
  value: 3.7
  value-max: null
  unit: h
  notes: 3.7 hours (SC dose)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 89.0
  value-max: null
  notes: 89% (SC dose)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: clearance 21.4mL/min (+/- 7)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
- chembl-name-match
pk-source:
  type: wikipedia-infobox
  title: Nadroparin calcium
  url: https://en.wikipedia.org/w/index.php?title=Nadroparin_calcium&oldid=1338876904
  revision: 1338876904
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL2109204
  pref-name: NADROPARIN CALCIUM
  molecule-type: Oligosaccharide
  first-approval: 2018
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - B01AB06
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

# Nadroparin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nadroparin-compound`
- **Source group:** Cardiovascular (`cardio`)
- **Cluster:** [[Cardiovascular and Lipid Agents]]
- **ChEMBL:** [CHEMBL2109204](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2109204/) · max phase 4 · id via exact ChEMBL name match · structure check: no small-molecule structure in ChEMBL

## Source summary

Low molecular weight heparin used widely in continental Europe for thromboprophylaxis and treatment.

## Mechanism

Antithrombin-III activator _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Oligosaccharide
- **First approval (ChEMBL):** 2018
- **ATC B01AB06:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Heparin group

**Targets (ChEMBL curated mechanisms):**

- [[Antithrombin-III (CHEMBL1950)|Antithrombin-III]] - activator · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nadroparin calcium*](https://en.wikipedia.org/w/index.php?title=Nadroparin_calcium&oldid=1338876904) (revision 1338876904, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3.7 h | 3.7 hours (SC dose) |
| Bioavailability | 89 % | 89% (SC dose) |
| Excretion | - | clearance 21.4mL/min (+/- 7) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Dalteparin]] (Antithrombin-III), [[Semuloparin Sodium]] (Antithrombin-III), [[Tinzaparin]] (Antithrombin-III)
- **Same ATC subgroup:** [[Dalteparin]], [[Sulodexide]], [[Tinzaparin]]

## Safety routing

Group-level triage (not compound-specific): `cardiovascular-load`

- [[Stacking and Interaction Risks]]
- [[Stimulant and Cardiovascular Load]]
