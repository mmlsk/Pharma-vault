---
type: compound
schema-version: 2
compound-id: darifenacin-compound
name: Darifenacin
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
chembl-id: CHEMBL1346
chembl-max-phase: 4
half-life:
  value: 13.0
  value-max: 19.0
  unit: h
  notes: 13 to 19 hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98%
bioavailability:
  value: 15.0
  value-max: 19.0
  notes: 15 to 19% (dose-dependent)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (60%) and biliary (40%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2D6- and CYP3A4-mediated)
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
  title: Darifenacin
  url: https://en.wikipedia.org/w/index.php?title=Darifenacin&oldid=1357376762
  revision: 1357376762
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1346
  pref-name: DARIFENACIN
  molecule-type: Small molecule
  first-approval: 2004
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - G04BD10
  targets: []
  properties:
    full-mwt: 426.56
    mw-freebase: 426.56
    alogp: 3.96
    psa: 55.56
    hba: 3
    hbd: 1
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.62
    full-molformula: C28H30N2O2
pk-verification:
  source: fda-label
  status: consistent
  set-id: e84f1ae3-b9a2-4a15-a299-c75373891cc1
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e84f1ae3-b9a2-4a15-a299-c75373891cc1
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Darifenacin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `darifenacin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1346](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1346/) · max phase 4 · id via Wikipedia infobox

## Source summary

Antagonises muscarinic receptors; peripheral selectivity determines how much dry mouth, constipation and central anticholinergic burden an agent carries; M3-selective.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2004
- **ATC G04BD10:** GENITO URINARY SYSTEM AND SEX HORMONES › UROLOGICALS › Drugs for urinary frequency and incontinence

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 426.56 | 3.96 | 55.56 | 1/3 | 0 | C28H30N2O2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Darifenacin*](https://en.wikipedia.org/w/index.php?title=Darifenacin&oldid=1357376762) (revision 1357376762, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 13–19 h | 13 to 19 hours |
| Protein binding | 98 % | 98% |
| Bioavailability | 15–19 % | 15 to 19% (dose-dependent) |
| Metabolism | hepatic | Liver (CYP2D6- and CYP3A4-mediated) |
| CYP (metabolised by) | CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney (60%) and biliary (40%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set e84f1ae3…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e84f1ae3-b9a2-4a15-a299-c75373891cc1), label version 20260210. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 13, 19)
> - protein-binding: consistent (label values: 98)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Fesoterodine]], [[Imidafenacin]], [[Oxybutynin]], [[Propiverine]], [[Solifenacin]], [[Tolterodine]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[Cholinergic Load]]
- [[CYP450 Metabolism]]
