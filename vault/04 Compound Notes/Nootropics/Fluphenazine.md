---
type: compound
schema-version: 2
compound-id: fluphenazine-compound
name: Fluphenazine
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
chembl-id: CHEMBL726
chembl-max-phase: 4
half-life:
  value: 15.0
  value-max: null
  unit: h
  notes: IM 15 hours (HCl), 7–10 days (decanoate)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 2.7
  value-max: null
  notes: 2.7% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine, feces
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: unclear
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Fluphenazine
  url: https://en.wikipedia.org/w/index.php?title=Fluphenazine&oldid=1347484226
  revision: 1347484226
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL726
  pref-name: FLUPHENAZINE
  molecule-type: Small molecule
  first-approval: 1959
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N05AB02
  targets: []
  properties:
    full-mwt: 437.53
    mw-freebase: 437.53
    alogp: 4.31
    psa: 29.95
    hba: 5
    hbd: 1
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.73
    full-molformula: C22H26F3N3OS
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Fluphenazine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fluphenazine-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL726](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL726/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

High-potency phenothiazine available as a long-acting depot, effective but with a high extrapyramidal burden.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1959
- **Flags:** black-box warning
- **ATC N05AB02:** NERVOUS SYSTEM › ANTIPSYCHOTICS › Phenothiazines with piperazine structure

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 437.53 | 4.31 | 29.95 | 1/5 | 0 | C22H26F3N3OS |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fluphenazine*](https://en.wikipedia.org/w/index.php?title=Fluphenazine&oldid=1347484226) (revision 1347484226, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 15 h | IM 15 hours (HCl), 7–10 days (decanoate) |
| Bioavailability | 2.7 % | 2.7% (by mouth) |
| Metabolism | - | unclear |
| Excretion | - | Urine, feces |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Perphenazine]], [[Trifluoperazine]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
