---
type: compound
schema-version: 2
compound-id: n-n-dimethyltryptamine-compound
name: N,N-Dimethyltryptamine
aliases:
- DMT
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
chembl-id: CHEMBL12420
chembl-max-phase: 2
half-life:
  value: 5.0
  value-max: 19.0
  unit: min
  notes: 'Alone: 5–19 min; With MAOI: 1–4 hours'
protein-binding:
  value: 30.0
  value-max: null
  unit: percent
  notes: 30%
bioavailability:
  value: null
  value-max: null
  notes: Very low and inactive (except with MAOI)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Oxidative deamination (MAO-A), N-oxidation, N-demethylation, peroxidation
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
- curated-addition
- group/neuropsych
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Dimethyltryptamine
  url: https://en.wikipedia.org/w/index.php?title=Dimethyltryptamine&oldid=1377666661
  revision: 1377666661
  retrieved: '2026-10-01'
  chembl-confirmed: true
chembl:
  identity-source: curated-addition
  parent-id: CHEMBL12420
  pref-name: N,N-DIMETHYLTRYPTAMINE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 188.27
    mw-freebase: 188.27
    alogp: 2.27
    psa: 19.03
    hba: 1
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.78
    full-molformula: C12H16N2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# N,N-Dimethyltryptamine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `n-n-dimethyltryptamine-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **Aliases:** DMT
- **ChEMBL:** [CHEMBL12420](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL12420/) · max phase 2 · id via curated addition, exact ChEMBL match

## Source summary

Curated addition (backlog: Psychoplastogens / Reference psychedelics). Identity resolved by exact name match (synonym) to ChEMBL CHEMBL12420 (N,N-DIMETHYLTRYPTAMINE).

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 188.27 | 2.27 | 19.03 | 1/1 | 0 | C12H16N2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dimethyltryptamine*](https://en.wikipedia.org/w/index.php?title=Dimethyltryptamine&oldid=1377666661) (revision 1377666661, retrieved 2026-10-01); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–19 min | Alone: 5–19 min; With MAOI: 1–4 hours |
| Protein binding | 30 % | 30% |
| Bioavailability | - | Very low and inactive (except with MAOI) |
| Metabolism | hepatic | Oxidative deamination (MAO-A), N-oxidation, N-demethylation, peroxidation |
| Metabolites | - | Indole-3-acetic acid (IAA, 3-IAA) (63–97%); DMT-N-oxide (DMT-NO) (3–28%); N-Methyltryptamine (NMT); Tryptamine; Others |
| Excretion | mainly urinary | Urine |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
