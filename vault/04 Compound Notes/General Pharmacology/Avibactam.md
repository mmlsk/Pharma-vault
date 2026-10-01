---
type: compound
schema-version: 2
compound-id: avibactam-compound
name: Avibactam
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1689063
chembl-max-phase: 4
half-life:
  value: null
  unit: null
  notes: null
protein-binding:
  value: 5.7
  value-max: 8.2
  unit: percent
  notes: 5.7–8.2%
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (intravenous)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (97%)
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
- cyp-interactions
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Avibactam
  url: https://en.wikipedia.org/w/index.php?title=Avibactam&oldid=1363446635
  revision: 1363446635
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1689063
  pref-name: AVIBACTAM
  molecule-type: Small molecule
  first-approval: 2015
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 265.25
    mw-freebase: 265.25
    alogp: -1.53
    psa: 130.24
    hba: 5
    hbd: 2
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.6
    full-molformula: C7H11N3O6S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Avibactam

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `avibactam-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1689063](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1689063/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Non-beta-lactam diazabicyclooctane inhibitor with a reversible covalent mechanism, extending ceftazidime to KPC and OXA-48 producers.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2015

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 265.25 | -1.53 | 130.24 | 2/5 | 0 | C7H11N3O6S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Avibactam*](https://en.wikipedia.org/w/index.php?title=Avibactam&oldid=1363446635) (revision 1363446635, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Protein binding | 5.7–8.2 % | 5.7–8.2% |
| Bioavailability | 100 % | 100% (intravenous) |
| Metabolism | - | Nil |
| Excretion | mainly urinary | Kidney (97%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
