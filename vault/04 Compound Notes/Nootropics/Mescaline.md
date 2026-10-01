---
type: compound
schema-version: 2
compound-id: mescaline-compound
name: Mescaline
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
chembl-id: CHEMBL26687
chembl-max-phase: 1
half-life:
  value: 3.6
  value-max: null
  unit: h
  notes: 3.6 hours (range 2.6–5.3 hours)
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: Unknown (but appears minimal)
bioavailability:
  value: 53.0
  value-max: null
  notes: Unknown (but ≥53%)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.6
  notes: Urine (≥92%; 28–60% unchanged, ≥27–31% as TMPAA, 5% as N-Ac-3,4-DiMeO-5-OH-PEA, <0.1% as NAM)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Oxidative deamination, N-acetylation, O-demethylation, conjugation, other pathways
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
  title: Mescaline
  url: https://en.wikipedia.org/w/index.php?title=Mescaline&oldid=1375914928
  revision: 1375914928
  retrieved: '2026-10-01'
  chembl-confirmed: true
chembl:
  identity-source: curated-addition
  parent-id: CHEMBL26687
  pref-name: MESCALINE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 211.26
    mw-freebase: 211.26
    alogp: 1.21
    psa: 53.71
    hba: 4
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.8
    full-molformula: C11H17NO3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Mescaline

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `mescaline-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL26687](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL26687/) · max phase 1 · id via curated addition, exact ChEMBL match

## Source summary

Curated addition (backlog: Psychoplastogens / Reference psychedelics). Identity resolved by exact name match (synonym) to ChEMBL CHEMBL26687 (MESCALINE).

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 211.26 | 1.21 | 53.71 | 1/4 | 0 | C11H17NO3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Mescaline*](https://en.wikipedia.org/w/index.php?title=Mescaline&oldid=1375914928) (revision 1375914928, retrieved 2026-10-01); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3.6 h | 3.6 hours (range 2.6–5.3 hours) |
| Protein binding | - | Unknown (but appears minimal) |
| Bioavailability | 53 % | Unknown (but ≥53%) |
| Metabolism | hepatic | Oxidative deamination, N-acetylation, O-demethylation, conjugation, other pathways |
| Metabolites | - | • TMPA; • TMPAA; • TMPE; • Others |
| Excretion | mainly urinary · fe 0.6 | Urine (≥92%; 28–60% unchanged, ≥27–31% as TMPAA, 5% as N-Ac-3,4-DiMeO-5-OH-PEA, <0.1% as NAM) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
