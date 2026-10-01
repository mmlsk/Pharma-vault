---
type: compound
schema-version: 2
compound-id: brilaroxazine-compound
name: Brilaroxazine
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
chembl-id: CHEMBL5095172
chembl-max-phase: 3
half-life:
  value: 55.0
  value-max: null
  unit: h
  notes: 55 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
bioavailability:
  value: 80.0
  value-max: null
  notes: '>80%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mostly via CYP3A4 (64%) and CYP2D6 (17%))
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Brilaroxazine
  url: https://en.wikipedia.org/w/index.php?title=Brilaroxazine&oldid=1370373722
  revision: 1370373722
  retrieved: '2026-10-01'
  chembl-confirmed: false
chembl:
  identity-source: curated-addition
  parent-id: CHEMBL5095172
  pref-name: BRILAROXAZINE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 450.37
    mw-freebase: 450.37
    alogp: 4.31
    psa: 54.04
    hba: 5
    hbd: 1
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.64
    full-molformula: C22H25Cl2N3O3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Brilaroxazine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `brilaroxazine-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL5095172](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL5095172/) · max phase 3 · id via curated addition, exact ChEMBL match

## Source summary

Curated addition (backlog: Emerging CNS agents / Muscarinic and TAAR1). Identity resolved by exact name match (synonym) to ChEMBL CHEMBL5095172 (BRILAROXAZINE).

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 450.37 | 4.31 | 54.04 | 1/5 | 0 | C22H25Cl2N3O3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Brilaroxazine*](https://en.wikipedia.org/w/index.php?title=Brilaroxazine&oldid=1370373722) (revision 1370373722, retrieved 2026-10-01); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 55 h | 55 hours |
| Protein binding | 99 % | >99% |
| Bioavailability | 80 % | >80% |
| Metabolism | hepatic | Liver (mostly via CYP3A4 (64%) and CYP2D6 (17%)) |
| CYP (metabolised by) | CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared CYP substrate pool:** CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[Cholinergic Load]]
- [[CYP450 Metabolism]]
