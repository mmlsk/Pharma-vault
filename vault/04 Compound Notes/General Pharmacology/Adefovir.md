---
type: compound
schema-version: 2
compound-id: adefovir-compound
name: Adefovir
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: DNA polymerase/reverse transcriptase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL484
chembl-max-phase: 3
half-life:
  value: 7.5
  value-max: null
  unit: h
  notes: 7.5 hours
protein-binding:
  value: 4.0
  value-max: null
  unit: percent
  notes: <4%
bioavailability:
  value: 59.0
  value-max: null
  notes: 59%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine
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
  title: Adefovir
  url: https://en.wikipedia.org/w/index.php?title=Adefovir&oldid=1329238271
  revision: 1329238271
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL484
  pref-name: ADEFOVIR
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL2362994
    name: DNA polymerase/reverse transcriptase
    action: INHIBITOR
  properties:
    full-mwt: 273.19
    mw-freebase: 273.19
    alogp: -0.44
    psa: 136.38
    hba: 7
    hbd: 3
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.49
    full-molformula: C8H12N5O4P
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Adefovir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `adefovir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL484](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL484/) · max phase 3 · id via Wikipedia infobox

## Source summary

Nucleotide analogue for hepatitis B, dose-limited by nephrotoxicity and now largely superseded by tenofovir.

## Mechanism

DNA polymerase/reverse transcriptase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **Flags:** prodrug

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 273.19 | -0.44 | 136.38 | 3/7 | 0 | C8H12N5O4P |

**Targets (ChEMBL curated mechanisms):**

- [[DNA polymerase-reverse transcriptase (CHEMBL2362994)|DNA polymerase/reverse transcriptase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Adefovir*](https://en.wikipedia.org/w/index.php?title=Adefovir&oldid=1329238271) (revision 1329238271, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7.5 h | 7.5 hours |
| Protein binding | 4 % | <4% |
| Bioavailability | 59 % | 59% |
| Excretion | mainly urinary | Urine |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Lamivudine]] (DNA polymerase/reverse transcriptase), [[Telbivudine]] (DNA polymerase/reverse transcriptase)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
