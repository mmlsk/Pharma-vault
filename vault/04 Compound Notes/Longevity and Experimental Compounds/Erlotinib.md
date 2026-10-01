---
type: compound
schema-version: 2
compound-id: erlotinib-compound
name: Erlotinib
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL553
chembl-max-phase: 4
half-life:
  value: 36.2
  value-max: null
  unit: h
  notes: 36.2 hrs (median)
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: 95%
bioavailability:
  value: 59.0
  value-max: null
  notes: 59%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: '>98% as metabolites, of which >90% via feces, 9% via urine'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mainly CYP3A4, less CYP1A2)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- evidence-limited
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Erlotinib
  url: https://en.wikipedia.org/w/index.php?title=Erlotinib&oldid=1364243315
  revision: 1364243315
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL553
  pref-name: ERLOTINIB
  molecule-type: Small molecule
  first-approval: 2004
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01EB02
  targets: []
  properties:
    full-mwt: 393.44
    mw-freebase: 393.44
    alogp: 3.41
    psa: 74.73
    hba: 7
    hbd: 1
    rtb: 10
    num-ro5-violations: 0
    qed-weighted: 0.42
    full-molformula: C22H23N3O4
pk-verification:
  source: fda-label
  status: consistent
  set-id: a3b2d622-b4d5-4819-862b-f8fd3adcec6f
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a3b2d622-b4d5-4819-862b-f8fd3adcec6f
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Erlotinib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `erlotinib-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL553](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL553/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits oncogenic EGFR-family signaling; activity depends on tumor genotype and acquired resistance.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2004
- **ATC L01EB02:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › PROTEIN KINASE INHIBITORS › Epidermal growth factor receptor (EGFR) tyrosine kinase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 393.44 | 3.41 | 74.73 | 1/7 | 0 | C22H23N3O4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Erlotinib*](https://en.wikipedia.org/w/index.php?title=Erlotinib&oldid=1364243315) (revision 1364243315, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 36.2 h | 36.2 hrs (median) |
| Protein binding | 95 % | 95% |
| Bioavailability | 59 % | 59% |
| Metabolism | hepatic | Liver (mainly CYP3A4, less CYP1A2) |
| CYP (metabolised by) | CYP1A2, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | >98% as metabolites, of which >90% via feces, 9% via urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set a3b2d622…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a3b2d622-b4d5-4819-862b-f8fd3adcec6f), label version 20240626. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 36.2)
> - protein-binding: consistent (label values: 93)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Afatinib]], [[Dacomitinib]], [[Gefitinib]], [[Osimertinib]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
