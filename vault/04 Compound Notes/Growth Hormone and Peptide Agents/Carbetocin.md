---
type: compound
schema-version: 2
compound-id: carbetocin-compound
name: Carbetocin
aliases: []
cluster: Growth Hormone and Peptide Agents
group: peptides
class: null
subclass: null
mechanism: Oxytocin receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3301668
chembl-max-phase: 4
half-life:
  value: 40.0
  value-max: 100.0
  unit: min
  notes: 40–100 min (0.7–1.7 h)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 80.0
  value-max: null
  notes: 80% (IM)
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
- evidence-limited
- identity-contamination
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/peptides
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Carbetocin
  url: https://en.wikipedia.org/w/index.php?title=Carbetocin&oldid=1365375725
  revision: 1365375725
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL3301668
  pref-name: CARBETOCIN
  molecule-type: Protein
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - H01BB03
  targets:
  - id: CHEMBL2049
    name: Oxytocin receptor
    action: AGONIST
  properties:
    full-mwt: 988.18
    mw-freebase: 988.18
    alogp: -2.5
    psa: 362.51
    hba: 13
    hbd: 10
    rtb: 18
    num-ro5-violations: 3
    qed-weighted: 0.07
    full-molformula: C45H69N11O12S
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Carbetocin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `carbetocin-compound`
- **Source group:** Peptides (`peptides`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **ChEMBL:** [CHEMBL3301668](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3301668/) · max phase 4 · id via Wikipedia infobox

## Source summary

Acts at the oxytocin receptor to drive uterine contraction and milk ejection, or blocks it to suppress preterm labour; long-acting analogue.

## Mechanism

Oxytocin receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Protein
- **ATC H01BB03:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › POSTERIOR PITUITARY LOBE HORMONES › Oxytocin and analogues

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 988.18 | -2.5 | 362.51 | 10/13 | 3 | C45H69N11O12S |

**Targets (ChEMBL curated mechanisms):**

- [[Oxytocin receptor (CHEMBL2049)|Oxytocin receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Carbetocin*](https://en.wikipedia.org/w/index.php?title=Carbetocin&oldid=1365375725) (revision 1365375725, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 40–100 min | 40–100 min (0.7–1.7 h) |
| Bioavailability | 80 % | 80% (IM) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Barusiban]] (Oxytocin receptor), [[Epelsiban]] (Oxytocin receptor), [[Oxytocin]] (Oxytocin receptor), [[Relcovaptan]] (Oxytocin receptor), [[Retosiban]] (Oxytocin receptor)
- **Same ATC subgroup:** [[Demoxytocin]], [[Oxytocin]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`, `identity-contamination`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
