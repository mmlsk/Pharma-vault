---
type: compound
schema-version: 2
compound-id: deucravacitinib-compound
name: Deucravacitinib (Sotyktu)
aliases:
- Deucravacitinib
- Sotyktu
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL435170
chembl-max-phase: 2
half-life:
  value: 10.0
  value-max: null
  unit: h
  notes: 10 hours
protein-binding:
  value: 82.0
  value-max: 90.0
  unit: percent
  notes: 82–90%
bioavailability:
  value: 99.0
  value-max: null
  notes: 99%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Feces, urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (primarily CYP1A2)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- needs-compound-review
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Deucravacitinib
  url: https://en.wikipedia.org/w/index.php?title=Deucravacitinib&oldid=1358949490
  revision: 1358949490
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL435170
  pref-name: ADAPROLOL
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 429.6
    mw-freebase: 429.6
    alogp: 4.12
    psa: 67.79
    hba: 5
    hbd: 2
    rtb: 11
    num-ro5-violations: 0
    qed-weighted: 0.52
    full-molformula: C26H39NO4
pk-verification:
  source: fda-label
  status: consistent
  set-id: ff4d7258-5068-4cdf-9692-8cae04c3198e
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ff4d7258-5068-4cdf-9692-8cae04c3198e
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Deucravacitinib (Sotyktu)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `deucravacitinib-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Deucravacitinib, Sotyktu
- **ChEMBL:** [CHEMBL435170](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL435170/) · max phase 2 · id via Wikipedia infobox

## Source summary

Allosteric TYK2 inhibitor for plaque psoriasis with greater kinase selectivity than broad JAK inhibitors.

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 429.6 | 4.12 | 67.79 | 2/5 | 0 | C26H39NO4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Deucravacitinib*](https://en.wikipedia.org/w/index.php?title=Deucravacitinib&oldid=1358949490) (revision 1358949490, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10 h | 10 hours |
| Protein binding | 82–90 % | 82–90% |
| Bioavailability | 99 % | 99% |
| Metabolism | hepatic | Liver (primarily CYP1A2) |
| CYP (metabolised by) | CYP1A2 | roles as inhibitor/inducer not assessed |
| Metabolites | - | BMT-153261 (active) |
| Excretion | - | Feces, urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set ff4d7258…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ff4d7258-5068-4cdf-9692-8cae04c3198e), label version 20260630. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 10)
> - protein-binding: consistent (label values: 82, 90)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared CYP substrate pool:** CYP1A2 (+42 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
