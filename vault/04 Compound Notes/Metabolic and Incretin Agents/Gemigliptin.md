---
type: compound
schema-version: 2
compound-id: gemigliptin-compound
name: Gemigliptin
aliases: []
cluster: Metabolic and Incretin Agents
group: glp1
class: null
subclass: null
mechanism: Dipeptidyl peptidase IV inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3707235
chembl-max-phase: 3
half-life:
  value: null
  value-max: null
  unit: null
  notes: '3.6 h (rat), 5.2 h (dog), 5.4 h (monkey) [not stored as a number: non-human or sub-minute data]'
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: 94% (rat), 73% (dog), 26% (monkey)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
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
- glucose-metabolism
- gastrointestinal
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/glp1
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Gemigliptin
  url: https://en.wikipedia.org/w/index.php?title=Gemigliptin&oldid=1371811053
  revision: 1371811053
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL3707235
  pref-name: GEMIGLIPTIN
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A10BH06
  targets:
  - id: CHEMBL284
    name: Dipeptidyl peptidase 4
    action: INHIBITOR
  properties:
    full-mwt: 489.37
    mw-freebase: 489.37
    alogp: 2.37
    psa: 92.42
    hba: 5
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.66
    full-molformula: C18H19F8N5O2
  identity-check: structure-confirmed
---

# Gemigliptin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `gemigliptin-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **ChEMBL:** [CHEMBL3707235](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3707235/) · max phase 3 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits DPP-4 to prolong endogenous incretin signaling and glucose-dependent insulin release.

## Mechanism

Dipeptidyl peptidase IV inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC A10BH06:** ALIMENTARY TRACT AND METABOLISM › BLOOD GLUCOSE LOWERING DRUGS, EXCL. INSULINS › Dipeptidyl peptidase 4 (DPP-4) inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 489.37 | 2.37 | 92.42 | 1/5 | 0 | C18H19F8N5O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Dipeptidyl peptidase 4 (CHEMBL284)|Dipeptidyl peptidase 4]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Gemigliptin*](https://en.wikipedia.org/w/index.php?title=Gemigliptin&oldid=1371811053) (revision 1371811053, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | - | 3.6 h (rat), 5.2 h (dog), 5.4 h (monkey) [not stored as a number: non-human or sub-minute data] |
| Bioavailability | - | 94% (rat), 73% (dog), 26% (monkey) |

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Anagliptin]] (Dipeptidyl peptidase 4), [[Bisegliptin]] (Dipeptidyl peptidase 4), [[Dutogliptin]] (Dipeptidyl peptidase 4), [[Evogliptin]] (Dipeptidyl peptidase 4), [[Gosogliptin]] (Dipeptidyl peptidase 4), [[Linagliptin (Tradjenta)]] (Dipeptidyl peptidase 4), [[Omarigliptin]] (Dipeptidyl peptidase 4), [[Teneligliptin]] (Dipeptidyl peptidase 4), [[Vildagliptin]] (Dipeptidyl peptidase 4)
- **Same ATC subgroup:** [[Alogliptin]], [[Evogliptin]], [[Linagliptin (Tradjenta)]], [[Sitagliptin (Januvia)]], [[Teneligliptin]], [[Vildagliptin]]

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[Glucose and Incretin Signaling]]
