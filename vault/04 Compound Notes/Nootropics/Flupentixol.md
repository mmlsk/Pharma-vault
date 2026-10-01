---
type: compound
schema-version: 2
compound-id: flupentixol-compound
name: Flupentixol
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL42055
chembl-max-phase: 2
half-life:
  value: 35.0
  value-max: null
  unit: h
  notes: 35 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 40.0
  value-max: 55.0
  notes: 40–55% (oral)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal (negligible)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Gut wall, hepatic
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
- cns-activity
- serotonergic-or-dopaminergic-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/neuropsych
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Flupentixol
  url: https://en.wikipedia.org/w/index.php?title=Flupentixol&oldid=1369614467
  revision: 1369614467
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL42055
  pref-name: E-FLUPENTIXOL
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 434.53
    mw-freebase: 434.53
    alogp: 4.6
    psa: 26.71
    hba: 4
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.63
    full-molformula: C23H25F3N2OS
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Flupentixol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `flupentixol-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL42055](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL42055/) · max phase 2 · id via Wikipedia infobox

## Source summary

Thioxanthene used as a depot antipsychotic and, at very low dose, as an antidepressant in several European countries.

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 434.53 | 4.6 | 26.71 | 1/4 | 0 | C23H25F3N2OS |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Flupentixol*](https://en.wikipedia.org/w/index.php?title=Flupentixol&oldid=1369614467) (revision 1369614467, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 35 h | 35 hours |
| Bioavailability | 40–55 % | 40–55% (oral) |
| Metabolism | hepatic | Gut wall, hepatic |
| Excretion | mainly urinary | Renal (negligible) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
