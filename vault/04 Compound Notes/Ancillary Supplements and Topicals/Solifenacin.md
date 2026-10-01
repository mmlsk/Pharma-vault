---
type: compound
schema-version: 2
compound-id: solifenacin-compound
name: Solifenacin
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1734
chembl-max-phase: 4
half-life:
  value: 45.0
  value-max: 68.0
  unit: h
  notes: 45 to 68 hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98%
bioavailability:
  value: 90.0
  value-max: null
  notes: 90%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (69.2%) and fecal (22.5%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- needs-compound-review
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Solifenacin
  url: https://en.wikipedia.org/w/index.php?title=Solifenacin&oldid=1363792577
  revision: 1363792577
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1734
  pref-name: SOLIFENACIN
  molecule-type: Small molecule
  first-approval: 2004
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - G04BD08
  targets: []
  properties:
    full-mwt: 362.47
    mw-freebase: 362.47
    alogp: 3.86
    psa: 32.78
    hba: 3
    hbd: 0
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.81
    full-molformula: C23H26N2O2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Solifenacin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `solifenacin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1734](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1734/) · max phase 4 · id via Wikipedia infobox

## Source summary

Antagonises muscarinic receptors; peripheral selectivity determines how much dry mouth, constipation and central anticholinergic burden an agent carries; M3-preferring.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2004
- **ATC G04BD08:** GENITO URINARY SYSTEM AND SEX HORMONES › UROLOGICALS › Drugs for urinary frequency and incontinence

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 362.47 | 3.86 | 32.78 | 0/3 | 0 | C23H26N2O2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Solifenacin*](https://en.wikipedia.org/w/index.php?title=Solifenacin&oldid=1363792577) (revision 1363792577, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 45–68 h | 45 to 68 hours |
| Protein binding | 98 % | 98% |
| Bioavailability | 90 % | 90% |
| Metabolism | hepatic | CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Glucuronide, N-oxide, others |
| Excretion | mainly urinary | Kidney (69.2%) and fecal (22.5%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Darifenacin]], [[Fesoterodine]], [[Imidafenacin]], [[Oxybutynin]], [[Propiverine]], [[Tolterodine]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[Cholinergic Load]]
- [[CYP450 Metabolism]]
