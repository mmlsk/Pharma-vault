---
type: compound
schema-version: 2
compound-id: nitroprusside-compound
name: Nitroprusside
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Soluble guanylate cyclase activator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2097081
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: null
  unit: min
  notes: <2 minutes (3 days for thiocyanate metabolite)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (intravenous)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: kidney (100%; as thiocyanate)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: By haemoglobin being converted to cyanmethaemoglobin and cyanide ions
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
- needs-compound-review
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Sodium nitroprusside
  url: https://en.wikipedia.org/w/index.php?title=Sodium_nitroprusside&oldid=1353452919
  revision: 1353452919
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL2097081
  pref-name: NITROPRUSSIDE
  molecule-type: Small molecule
  first-approval: 1981
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C02DD01
  targets: []
  properties:
    full-mwt: 215.94
    mw-freebase: 215.94
    full-molformula: C5FeN6O-2
pk-verification:
  source: fda-label
  status: consistent
  set-id: 5a599880-c133-44ef-a9f2-bd1b681563be
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5a599880-c133-44ef-a9f2-bd1b681563be
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Nitroprusside

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nitroprusside-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL2097081](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2097081/) · max phase 4 · id via source catalogue

## Source summary

Soluble guanylate cyclase activator; approved/marketed compound catalogued by ChEMBL (CHEMBL2097081).

## Mechanism

Soluble guanylate cyclase activator _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1981
- **Flags:** black-box warning
- **ATC C02DD01:** CARDIOVASCULAR SYSTEM › ARTERIOLAR SMOOTH MUSCLE, AGENTS ACTING ON › Nitroferricyanide derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 215.94 | - | - | -/- | - | C5FeN6O-2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sodium nitroprusside*](https://en.wikipedia.org/w/index.php?title=Sodium_nitroprusside&oldid=1353452919) (revision 1353452919, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 min | <2 minutes (3 days for thiocyanate metabolite) |
| Bioavailability | 100 % | 100% (intravenous) |
| Metabolism | - | By haemoglobin being converted to cyanmethaemoglobin and cyanide ions |
| Excretion | mainly urinary | kidney (100%; as thiocyanate) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 5a599880…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5a599880-c133-44ef-a9f2-bd1b681563be), label version 20260810. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.033, 0.333, 72)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
