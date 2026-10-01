---
type: compound
schema-version: 2
compound-id: anidulafungin-compound
name: Anidulafungin
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
chembl-id: CHEMBL1630215
chembl-max-phase: null
half-life:
  value: 27.0
  value-max: null
  unit: h
  notes: 27 hours; 40–50 hours (terminal)
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: Extensive (>99%)
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (intravenous use only)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Feces (~30%), urine (<1%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver metabolism not observed, CYP system not involved
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
- cyp-interactions
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Anidulafungin
  url: https://en.wikipedia.org/w/index.php?title=Anidulafungin&oldid=1359987880
  revision: 1359987880
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1630215
  pref-name: null
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 1140.25
    mw-freebase: 1140.25
    full-molformula: C58H73N7O17
pk-verification:
  source: fda-label
  status: consistent
  set-id: a88d9010-55fb-4a02-baff-042cd27688ea
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Anidulafungin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `anidulafungin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1630215](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1630215/) · max phase n/a · id via Wikipedia infobox

## Source summary

Echinocandin cleared by spontaneous chemical degradation rather than by any enzyme, so no dose adjustment is needed in hepatic or renal failure.

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1140.25 | - | - | -/- | - | C58H73N7O17 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Anidulafungin*](https://en.wikipedia.org/w/index.php?title=Anidulafungin&oldid=1359987880) (revision 1359987880, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 27 h | 27 hours; 40–50 hours (terminal) |
| Protein binding | 99 % | Extensive (>99%) |
| Bioavailability | 100 % | 100% (intravenous use only) |
| Metabolism | hepatic | Liver metabolism not observed, CYP system not involved |
| Excretion | - | Feces (~30%), urine (<1%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set a88d9010…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea), label version 20250819. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.5, 1, 24, 40, 50, 240)
> - protein-binding: consistent (label values: 99)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
