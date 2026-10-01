---
type: compound
schema-version: 2
compound-id: octreotide-compound
name: Octreotide
aliases: []
cluster: Growth Hormone and Peptide Agents
group: gh
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1680
chembl-max-phase: 4
half-life:
  value: 1.7
  value-max: 1.9
  unit: h
  notes: 1.7–1.9 hours
protein-binding:
  value: 40.0
  value-max: 65.0
  unit: percent
  notes: 40–65%
bioavailability:
  value: 60.0
  value-max: null
  notes: 60% (IM), 100% (SC)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (32%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
- endocrine-feedback-disruption
- glucose-metabolism
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/gh
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Octreotide
  url: https://en.wikipedia.org/w/index.php?title=Octreotide&oldid=1330263762
  revision: 1330263762
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1680
  pref-name: OCTREOTIDE
  molecule-type: Protein
  first-approval: 1988
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - H01CB02
  targets: []
  properties:
    full-mwt: 1019.26
    mw-freebase: 1019.26
    full-molformula: C49H66N10O10S2
pk-verification:
  source: fda-label
  status: consistent
  set-id: 58d80bc6-bdfb-4908-93e7-aace447c8d1a
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=58d80bc6-bdfb-4908-93e7-aace447c8d1a
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Octreotide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `octreotide-compound`
- **Source group:** GH & Secretagogues (`gh`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **ChEMBL:** [CHEMBL1680](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1680/) · max phase 4 · id via Wikipedia infobox

## Source summary

Somatostatin analog that suppresses growth hormone (and other hormone) secretion, used to treat acromegaly and GH-secreting tumors -- the pharmacological opposite of a GH secretagogue.

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 1988
- **ATC H01CB02:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › HYPOTHALAMIC HORMONES › Somatostatin and analogues

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1019.26 | - | - | -/- | - | C49H66N10O10S2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Octreotide*](https://en.wikipedia.org/w/index.php?title=Octreotide&oldid=1330263762) (revision 1330263762, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.7–1.9 h | 1.7–1.9 hours |
| Protein binding | 40–65 % | 40–65% |
| Bioavailability | 60 % | 60% (IM), 100% (SC) |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Urine (32%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 58d80bc6…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=58d80bc6-bdfb-4908-93e7-aace447c8d1a), label version 20250724. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.2, 1.9, 2.3, 2.7, 3.2, 3.4)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Lanreotide]], [[Pasireotide]], [[Somatostatin]], [[Vapreotide]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `glucose-metabolism`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Glucose and Incretin Signaling]]
- [[HPG and GH-IGF-1 Axes]]
