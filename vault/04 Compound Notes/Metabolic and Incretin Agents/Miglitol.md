---
type: compound
schema-version: 2
compound-id: miglitol-compound
name: Miglitol
aliases: []
cluster: Metabolic and Incretin Agents
group: glp1
class: null
subclass: null
mechanism: Lysosomal alpha-glucosidase inhibitor; Maltase-glucoamylase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1561
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: null
  unit: h
  notes: 2 hours
protein-binding:
  value: 4.0
  value-max: null
  unit: percent
  notes: Negligible (<4.0%)
bioavailability:
  value: null
  value-max: null
  notes: Dose-dependent
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal (95%)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Nil
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
- glucose-metabolism
- gastrointestinal
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/glp1
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Miglitol
  url: https://en.wikipedia.org/w/index.php?title=Miglitol&oldid=1357728290
  revision: 1357728290
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1561
  pref-name: MIGLITOL
  molecule-type: Small molecule
  first-approval: 1996
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A10BF02
  targets:
  - id: CHEMBL2074
    name: Maltase-glucoamylase
    action: INHIBITOR
  - id: CHEMBL2608
    name: Lysosomal alpha-glucosidase
    action: INHIBITOR
  properties:
    full-mwt: 207.23
    mw-freebase: 207.23
    alogp: -3.26
    psa: 104.39
    hba: 6
    hbd: 5
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.33
    full-molformula: C8H17NO5
pk-verification:
  source: fda-label
  status: consistent
  set-id: f16ecb50-e54e-43e1-8789-eaf5bc94f332
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f16ecb50-e54e-43e1-8789-eaf5bc94f332
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Miglitol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `miglitol-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **ChEMBL:** [CHEMBL1561](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1561/) · max phase 4 · id via Wikipedia infobox

## Source summary

An alpha-glucosidase inhibitor that, unlike acarbose, is systemically absorbed but excreted unchanged by the kidney. Same intestinal mechanism, different disposition and a slightly different tolerability profile.

## Mechanism

Lysosomal alpha-glucosidase inhibitor; Maltase-glucoamylase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1996
- **ATC A10BF02:** ALIMENTARY TRACT AND METABOLISM › BLOOD GLUCOSE LOWERING DRUGS, EXCL. INSULINS › Alpha glucosidase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 207.23 | -3.26 | 104.39 | 5/6 | 0 | C8H17NO5 |

**Targets (ChEMBL curated mechanisms):**

- [[Maltase-glucoamylase (CHEMBL2074)|Maltase-glucoamylase]] - inhibitor · SINGLE PROTEIN
- [[Lysosomal alpha-glucosidase (CHEMBL2608)|Lysosomal alpha-glucosidase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Miglitol*](https://en.wikipedia.org/w/index.php?title=Miglitol&oldid=1357728290) (revision 1357728290, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 2 hours |
| Protein binding | 4 % | Negligible (<4.0%) |
| Bioavailability | - | Dose-dependent |
| Metabolism | - | Nil |
| Excretion | mainly urinary | Renal (95%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set f16ecb50…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f16ecb50-e54e-43e1-8789-eaf5bc94f332), label version 20220401. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2)
> - protein-binding: consistent (label values: 4)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Voglibose]]

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[Glucose and Incretin Signaling]]
