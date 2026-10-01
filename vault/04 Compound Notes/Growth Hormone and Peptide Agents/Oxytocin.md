---
type: compound
schema-version: 2
compound-id: oxytocin-compound
name: Oxytocin
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
chembl-id: CHEMBL395429
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: 6.0
  unit: min
  notes: 1–6 min (IV); ~2 h (intranasal)
protein-binding:
  value: 30.0
  value-max: null
  unit: percent
  notes: 30%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Biliary and kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver and other oxytocinases
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
  title: Oxytocin
  url: https://en.wikipedia.org/w/index.php?title=Oxytocin&oldid=1375895379
  revision: 1375895379
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL395429
  pref-name: OXYTOCIN
  molecule-type: Protein
  first-approval: 1980
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - H01BB02
  targets:
  - id: CHEMBL2049
    name: Oxytocin receptor
    action: AGONIST
  properties:
    full-mwt: 1007.21
    mw-freebase: 1007.21
    full-molformula: C43H66N12O12S2
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: b6f20a2c-3609-4b09-b8f7-8d8eaeb5c242
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b6f20a2c-3609-4b09-b8f7-8d8eaeb5c242
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Oxytocin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `oxytocin-compound`
- **Source group:** Peptides (`peptides`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **ChEMBL:** [CHEMBL395429](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL395429/) · max phase 4 · id via Wikipedia infobox

## Source summary

Neuropeptide hormone increasingly studied for a direct role in muscle stem cell regeneration alongside its social/reproductive functions.

## Mechanism

Oxytocin receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 1980
- **Flags:** black-box warning
- **ATC H01BB02:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › POSTERIOR PITUITARY LOBE HORMONES › Oxytocin and analogues

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1007.21 | - | - | -/- | - | C43H66N12O12S2 |

**Targets (ChEMBL curated mechanisms):**

- [[Oxytocin receptor (CHEMBL2049)|Oxytocin receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Oxytocin*](https://en.wikipedia.org/w/index.php?title=Oxytocin&oldid=1375895379) (revision 1375895379, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–6 min | 1–6 min (IV); ~2 h (intranasal) |
| Protein binding | 30 % | 30% |
| Metabolism | hepatic | Liver and other oxytocinases |
| Excretion | mainly non-renal | Biliary and kidney |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set b6f20a2c…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b6f20a2c-3609-4b09-b8f7-8d8eaeb5c242), label version 20260901. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Barusiban]] (Oxytocin receptor), [[Carbetocin]] (Oxytocin receptor), [[Epelsiban]] (Oxytocin receptor), [[Relcovaptan]] (Oxytocin receptor), [[Retosiban]] (Oxytocin receptor)
- **Same ATC subgroup:** [[Carbetocin]], [[Demoxytocin]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`, `identity-contamination`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
