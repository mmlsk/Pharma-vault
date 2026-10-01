---
type: compound
schema-version: 2
compound-id: gefitinib-compound
name: Gefitinib
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: Epidermal growth factor receptor erbB1 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL939
chembl-max-phase: 4
half-life:
  value: 6.0
  value-max: 49.0
  unit: h
  notes: 6–49 hours
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: 90%
bioavailability:
  value: 59.0
  value-max: null
  notes: 59% (oral)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mainly CYP3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Gefitinib
  url: https://en.wikipedia.org/w/index.php?title=Gefitinib&oldid=1372172128
  revision: 1372172128
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL939
  pref-name: GEFITINIB
  molecule-type: Small molecule
  first-approval: 2003
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01EB01
  targets:
  - id: CHEMBL203
    name: Epidermal growth factor receptor
    action: INHIBITOR
  properties:
    full-mwt: 446.91
    mw-freebase: 446.91
    alogp: 4.28
    psa: 68.74
    hba: 7
    hbd: 1
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.52
    full-molformula: C22H24ClFN4O3
pk-verification:
  source: fda-label
  status: consistent
  set-id: 1a3c0ce7-06a1-4e04-9106-14ddb2a866a5
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1a3c0ce7-06a1-4e04-9106-14ddb2a866a5
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Gefitinib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `gefitinib-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL939](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL939/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits oncogenic EGFR-family signaling; activity depends on tumor genotype and acquired resistance.

## Mechanism

Epidermal growth factor receptor erbB1 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2003
- **ATC L01EB01:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › PROTEIN KINASE INHIBITORS › Epidermal growth factor receptor (EGFR) tyrosine kinase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 446.91 | 4.28 | 68.74 | 1/7 | 0 | C22H24ClFN4O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Epidermal growth factor receptor (CHEMBL203)|Epidermal growth factor receptor]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Gefitinib*](https://en.wikipedia.org/w/index.php?title=Gefitinib&oldid=1372172128) (revision 1372172128, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6–49 h | 6–49 hours |
| Protein binding | 90 % | 90% |
| Bioavailability | 59 % | 59% (oral) |
| Metabolism | hepatic | Liver (mainly CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Feces |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 1a3c0ce7…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1a3c0ce7-06a1-4e04-9106-14ddb2a866a5), label version 20260310. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 48)
> - protein-binding: consistent (label values: 90)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Cudc-101]] (Epidermal growth factor receptor), [[Dacomitinib]] (Epidermal growth factor receptor), [[Osimertinib]] (Epidermal growth factor receptor)
- **Same ATC subgroup:** [[Afatinib]], [[Dacomitinib]], [[Erlotinib]], [[Osimertinib]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
