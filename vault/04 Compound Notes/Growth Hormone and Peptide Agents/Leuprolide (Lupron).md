---
type: compound
schema-version: 2
compound-id: leuprolide-compound
name: Leuprolide (Lupron)
aliases:
- Leuprolide
- Lupron
cluster: Growth Hormone and Peptide Agents
group: peptides
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201199
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: null
  unit: h
  notes: 3 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/peptides
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Leuprorelin
  url: https://en.wikipedia.org/w/index.php?title=Leuprorelin&oldid=1368648199
  revision: 1368648199
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201199
  pref-name: LEUPROLIDE
  molecule-type: Protein
  first-approval: 1985
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L02AE02
  targets: []
  properties:
    full-mwt: 1209.42
    mw-freebase: 1209.42
    full-molformula: C59H84N16O12
pk-verification:
  source: fda-label
  status: consistent
  set-id: d7a8761a-d953-413a-e053-2a95a90a60ee
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d7a8761a-d953-413a-e053-2a95a90a60ee
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Leuprolide (Lupron)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `leuprolide-compound`
- **Source group:** Peptides (`peptides`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **Aliases:** Leuprolide, Lupron
- **ChEMBL:** [CHEMBL1201199](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201199/) · max phase 4 · id via Wikipedia infobox

## Source summary

The most widely used GnRH agonist; depot formulations suppress the axis for months at a time.

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 1985
- **ATC L02AE02:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › HORMONES AND RELATED AGENTS › Gonadotropin releasing hormone analogues

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1209.42 | - | - | -/- | - | C59H84N16O12 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Leuprorelin*](https://en.wikipedia.org/w/index.php?title=Leuprorelin&oldid=1368648199) (revision 1368648199, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3 h | 3 hours |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set d7a8761a…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d7a8761a-d953-413a-e053-2a95a90a60ee), label version 20260218. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 3)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Buserelin]], [[Goserelin]], [[Histrelin]], [[Triptorelin (Trelstar)]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`, `identity-contamination`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
