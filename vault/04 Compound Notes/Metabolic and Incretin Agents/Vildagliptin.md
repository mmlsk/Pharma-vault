---
type: compound
schema-version: 2
compound-id: vildagliptin-compound
name: Vildagliptin
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
chembl-id: CHEMBL142703
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 3.0
  unit: h
  notes: 2 to 3 hours
protein-binding:
  value: 9.3
  value-max: null
  unit: percent
  notes: 9.3%
bioavailability:
  value: 85.0
  value-max: null
  notes: 85%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Mainly hydrolysis to inactive metabolite; CYP450 not appreciably involved
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
pk-source:
  type: wikipedia-infobox
  title: Vildagliptin
  url: https://en.wikipedia.org/w/index.php?title=Vildagliptin&oldid=1367270801
  revision: 1367270801
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL142703
  pref-name: VILDAGLIPTIN
  molecule-type: Small molecule
  first-approval: 2007
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A10BH02
  targets:
  - id: CHEMBL284
    name: Dipeptidyl peptidase 4
    action: INHIBITOR
  properties:
    full-mwt: 303.41
    mw-freebase: 303.41
    alogp: 1.17
    psa: 76.36
    hba: 4
    hbd: 2
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.82
    full-molformula: C17H25N3O2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Vildagliptin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `vildagliptin-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **ChEMBL:** [CHEMBL142703](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL142703/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits DPP-4 to prolong endogenous incretin signaling and glucose-dependent insulin release.

## Mechanism

Dipeptidyl peptidase IV inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2007
- **ATC A10BH02:** ALIMENTARY TRACT AND METABOLISM › BLOOD GLUCOSE LOWERING DRUGS, EXCL. INSULINS › Dipeptidyl peptidase 4 (DPP-4) inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 303.41 | 1.17 | 76.36 | 2/4 | 0 | C17H25N3O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Dipeptidyl peptidase 4 (CHEMBL284)|Dipeptidyl peptidase 4]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Vildagliptin*](https://en.wikipedia.org/w/index.php?title=Vildagliptin&oldid=1367270801) (revision 1367270801, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–3 h | 2 to 3 hours |
| Protein binding | 9.3 % | 9.3% |
| Bioavailability | 85 % | 85% |
| Metabolism | hepatic | Mainly hydrolysis to inactive metabolite; CYP450 not appreciably involved |
| Excretion | mainly urinary | Kidney |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Anagliptin]] (Dipeptidyl peptidase 4), [[Bisegliptin]] (Dipeptidyl peptidase 4), [[Dutogliptin]] (Dipeptidyl peptidase 4), [[Evogliptin]] (Dipeptidyl peptidase 4), [[Gemigliptin]] (Dipeptidyl peptidase 4), [[Gosogliptin]] (Dipeptidyl peptidase 4), [[Linagliptin (Tradjenta)]] (Dipeptidyl peptidase 4), [[Omarigliptin]] (Dipeptidyl peptidase 4), [[Teneligliptin]] (Dipeptidyl peptidase 4)
- **Same ATC subgroup:** [[Alogliptin]], [[Evogliptin]], [[Gemigliptin]], [[Linagliptin (Tradjenta)]], [[Sitagliptin (Januvia)]], [[Teneligliptin]]

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[Glucose and Incretin Signaling]]
