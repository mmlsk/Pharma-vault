---
type: compound
schema-version: 2
compound-id: alogliptin-compound
name: Alogliptin
aliases: []
cluster: Metabolic and Incretin Agents
group: glp1
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL376359
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: 21.0
  unit: h
  notes: 12–21 hours
protein-binding:
  value: 20.0
  value-max: null
  unit: percent
  notes: 20%
bioavailability:
  value: 100.0
  value-max: null
  notes: 100%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney (major) and fecal (minor)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Limited, liver (CYP2D6- and 3A4-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Alogliptin
  url: https://en.wikipedia.org/w/index.php?title=Alogliptin&oldid=1376668554
  revision: 1376668554
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL376359
  pref-name: ALOGLIPTIN
  molecule-type: Small molecule
  first-approval: 2013
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A10BH04
  targets: []
  properties:
    full-mwt: 339.4
    mw-freebase: 339.4
    alogp: 0.39
    psa: 97.05
    hba: 7
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.87
    full-molformula: C18H21N5O2
pk-verification:
  source: fda-label
  status: consistent
  set-id: b25f155a-1259-47c2-aa3b-7c1356e4c7f6
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b25f155a-1259-47c2-aa3b-7c1356e4c7f6
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Alogliptin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `alogliptin-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **ChEMBL:** [CHEMBL376359](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL376359/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits DPP-4 to prolong endogenous incretin signaling and glucose-dependent insulin release.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2013
- **ATC A10BH04:** ALIMENTARY TRACT AND METABOLISM › BLOOD GLUCOSE LOWERING DRUGS, EXCL. INSULINS › Dipeptidyl peptidase 4 (DPP-4) inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 339.4 | 0.39 | 97.05 | 1/7 | 0 | C18H21N5O2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Alogliptin*](https://en.wikipedia.org/w/index.php?title=Alogliptin&oldid=1376668554) (revision 1376668554, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12–21 h | 12–21 hours |
| Protein binding | 20 % | 20% |
| Bioavailability | 100 % | 100% |
| Metabolism | hepatic | Limited, liver (CYP2D6- and 3A4-mediated) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | - | Kidney (major) and fecal (minor) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set b25f155a…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b25f155a-1259-47c2-aa3b-7c1356e4c7f6), label version 20250411. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 21)
> - protein-binding: consistent (label values: 20)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Evogliptin]], [[Gemigliptin]], [[Linagliptin (Tradjenta)]], [[Sitagliptin (Januvia)]], [[Teneligliptin]], [[Vildagliptin]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
- [[Glucose and Incretin Signaling]]
