---
type: compound
schema-version: 2
compound-id: dalteparin-compound
name: Dalteparin
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
chembl-id: CHEMBL1201460
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: 5.0
  unit: h
  notes: 3-5 hours subcutaneous; 2.1-2.3 hours IV
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 81.0
  value-max: 93.0
  notes: 81-93%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/cardio
- stub
- pk-auto
- chembl-profile
- chembl-name-match
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Dalteparin sodium
  url: https://en.wikipedia.org/w/index.php?title=Dalteparin_sodium&oldid=1340417494
  revision: 1340417494
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL1201460
  pref-name: DALTEPARIN SODIUM
  molecule-type: Oligosaccharide
  first-approval: 1994
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - B01AB04
  targets:
  - id: CHEMBL1950
    name: Antithrombin-III
    action: ACTIVATOR
  properties: {}
  identity-check: no-chembl-structure
pk-verification:
  source: fda-label
  status: consistent
  set-id: 23527b8b-9b28-4e6d-9751-33b143975ac7
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=23527b8b-9b28-4e6d-9751-33b143975ac7
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Dalteparin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dalteparin-compound`
- **Source group:** Cardiovascular (`cardio`)
- **Cluster:** [[Cardiovascular and Lipid Agents]]
- **ChEMBL:** [CHEMBL1201460](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201460/) · max phase 4 · id via exact ChEMBL name match · structure check: no small-molecule structure in ChEMBL

## Source summary

Low molecular weight heparin, the standard agent for cancer-associated thrombosis in the era before direct oral anticoagulants.

## Mechanism

Antithrombin-III activator _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Oligosaccharide
- **First approval (ChEMBL):** 1994
- **Flags:** black-box warning
- **ATC B01AB04:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Heparin group

**Targets (ChEMBL curated mechanisms):**

- [[Antithrombin-III (CHEMBL1950)|Antithrombin-III]] - activator · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dalteparin sodium*](https://en.wikipedia.org/w/index.php?title=Dalteparin_sodium&oldid=1340417494) (revision 1340417494, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–5 h | 3-5 hours subcutaneous; 2.1-2.3 hours IV |
| Bioavailability | 81–93 % | 81-93% |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 23527b8b…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=23527b8b-9b28-4e6d-9751-33b143975ac7), label version 20250930. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1.47, 2.1, 2.3, 2.5, 3, 5)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Nadroparin]] (Antithrombin-III), [[Semuloparin Sodium]] (Antithrombin-III), [[Tinzaparin]] (Antithrombin-III)
- **Same ATC subgroup:** [[Nadroparin]], [[Sulodexide]], [[Tinzaparin]]

## Safety routing

Group-level triage (not compound-specific): `cardiovascular-load`

- [[Stacking and Interaction Risks]]
- [[Stimulant and Cardiovascular Load]]
