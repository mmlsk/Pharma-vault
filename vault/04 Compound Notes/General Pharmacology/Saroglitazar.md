---
type: compound
schema-version: 2
compound-id: saroglitazar-compound
name: Saroglitazar
aliases: []
cluster: General Pharmacology
group: gi
class: null
subclass: null
mechanism: Peroxisome proliferator-activated receptor alpha agonist; Peroxisome proliferator-activated receptor gamma agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL4297530
chembl-max-phase: 3
half-life:
  value: 5.6
  value-max: null
  unit: h
  notes: 5.6 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Bile duct
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C8, CYP3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C8
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C8, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- group/gi
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Saroglitazar
  url: https://en.wikipedia.org/w/index.php?title=Saroglitazar&oldid=1369643786
  revision: 1369643786
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL4297530
  pref-name: SAROGLITAZAR
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL239
    name: Peroxisome proliferator-activated receptor alpha
    action: AGONIST
  - id: CHEMBL235
    name: Peroxisome proliferator-activated receptor gamma
    action: AGONIST
  properties:
    full-mwt: 439.58
    mw-freebase: 439.58
    alogp: 5.3
    psa: 60.69
    hba: 5
    hbd: 1
    rtb: 11
    num-ro5-violations: 1
    qed-weighted: 0.41
    full-molformula: C25H29NO4S
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Saroglitazar

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `saroglitazar-compound`
- **Source group:** Gastrointestinal & Hepatic (`gi`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL4297530](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL4297530/) · max phase 3 · id via Wikipedia infobox

## Source summary

Dual PPAR-alpha and PPAR-gamma agonist licensed in India for diabetic dyslipidaemia and metabolic liver disease.

## Mechanism

Peroxisome proliferator-activated receptor alpha agonist; Peroxisome proliferator-activated receptor gamma agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 439.58 | 5.3 | 60.69 | 1/5 | 1 | C25H29NO4S |

**Targets (ChEMBL curated mechanisms):**

- [[Peroxisome proliferator-activated receptor alpha (CHEMBL239)|Peroxisome proliferator-activated receptor alpha]] - agonist · SINGLE PROTEIN
- [[Peroxisome proliferator-activated receptor gamma (CHEMBL235)|Peroxisome proliferator-activated receptor gamma]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Saroglitazar*](https://en.wikipedia.org/w/index.php?title=Saroglitazar&oldid=1369643786) (revision 1369643786, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5.6 h | 5.6 hours |
| Protein binding | 99 % | 99% |
| Metabolism | hepatic | Liver (CYP2C8, CYP3A4) |
| CYP (metabolised by) | CYP2C8, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Bile duct |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aleglitazar]] (Peroxisome proliferator-activated receptor alpha; Peroxisome proliferator-activated receptor gamma), [[Imiglitazar]] (Peroxisome proliferator-activated receptor alpha; Peroxisome proliferator-activated receptor gamma), [[Mk-0767]] (Peroxisome proliferator-activated receptor alpha; Peroxisome proliferator-activated receptor gamma), [[Muraglitazar]] (Peroxisome proliferator-activated receptor alpha; Peroxisome proliferator-activated receptor gamma), [[Balaglitazone]] (Peroxisome proliferator-activated receptor gamma), [[Bardoxolone Methyl]] (Peroxisome proliferator-activated receptor gamma), [[Ciprofibrate]] (Peroxisome proliferator-activated receptor alpha), [[Clofibrate]] (Peroxisome proliferator-activated receptor alpha), [[Db959]] (Peroxisome proliferator-activated receptor gamma), [[Elafibranor]] (Peroxisome proliferator-activated receptor alpha), [[Fenofibrate]] (Peroxisome proliferator-activated receptor alpha), [[Fenofibric Acid]] (Peroxisome proliferator-activated receptor alpha)
- **Shared CYP substrate pool:** CYP2C8 (+15 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
