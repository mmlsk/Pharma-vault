---
type: compound
schema-version: 2
compound-id: lanreotide-compound
name: Lanreotide
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
chembl-id: CHEMBL1201185
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: null
  unit: h
  notes: 2 hours (immediate release); 5 days (sustained release)
protein-binding:
  value: 78.0
  value-max: null
  unit: percent
  notes: 78%
bioavailability:
  value: 80.0
  value-max: null
  notes: Approximately 80%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Mostly bile duct
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: In GI tract
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/gh
- stub
- pk-auto
- chembl-profile
- identity-stereo-check
pk-source:
  type: wikipedia-infobox
  title: Lanreotide
  url: https://en.wikipedia.org/w/index.php?title=Lanreotide&oldid=1330106317
  revision: 1330106317
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201185
  pref-name: LANREOTIDE
  molecule-type: Protein
  first-approval: 2007
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - H01CB03
  targets: []
  properties:
    full-mwt: 1096.35
    mw-freebase: 1096.35
    full-molformula: C54H69N11O10S2
  identity-check: connectivity-match
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Lanreotide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lanreotide-compound`
- **Source group:** GH & Secretagogues (`gh`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **ChEMBL:** [CHEMBL1201185](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201185/) · max phase 4 · id via Wikipedia infobox · structure check: ⚠️ same skeleton, stereo/isotope layer differs

## Source summary

Long-acting somatostatin analog used to suppress excess growth hormone secretion.

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 2007
- **ATC H01CB03:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › HYPOTHALAMIC HORMONES › Somatostatin and analogues

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1096.35 | - | - | -/- | - | C54H69N11O10S2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lanreotide*](https://en.wikipedia.org/w/index.php?title=Lanreotide&oldid=1330106317) (revision 1330106317, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 2 hours (immediate release); 5 days (sustained release) |
| Protein binding | 78 % | 78% |
| Bioavailability | 80 % | Approximately 80% |
| Metabolism | - | In GI tract |
| Excretion | - | Mostly bile duct |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Octreotide]], [[Pasireotide]], [[Somatostatin]], [[Vapreotide]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `glucose-metabolism`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Glucose and Incretin Signaling]]
- [[HPG and GH-IGF-1 Axes]]
