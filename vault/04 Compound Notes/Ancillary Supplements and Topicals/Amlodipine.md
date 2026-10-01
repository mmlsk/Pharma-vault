---
type: compound
schema-version: 2
compound-id: amlodipine-compound
name: Amlodipine
aliases: []
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
chembl-id: CHEMBL1491
chembl-max-phase: 4
half-life:
  value: 30.0
  value-max: 50.0
  unit: h
  notes: 30–50 hours
protein-binding:
  value: 93.0
  value-max: null
  unit: percent
  notes: 93%
bioavailability:
  value: 64.0
  value-max: 90.0
  notes: 64–90%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine
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
  title: Amlodipine
  url: https://en.wikipedia.org/w/index.php?title=Amlodipine&oldid=1368611723
  revision: 1368611723
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1491
  pref-name: AMLODIPINE
  molecule-type: Small molecule
  first-approval: 1992
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C08CA01
  targets: []
  properties:
    full-mwt: 408.88
    mw-freebase: 408.88
    alogp: 2.27
    psa: 99.88
    hba: 7
    hbd: 2
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.5
    full-molformula: C20H25ClN2O5
pk-verification:
  source: fda-label
  status: consistent
  set-id: 614d974f-51c7-4b18-8171-39eb6e8d4c03
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=614d974f-51c7-4b18-8171-39eb6e8d4c03
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Amlodipine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `amlodipine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1491](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1491/) · max phase 4 · id via Wikipedia infobox

## Source summary

Dihydropyridine calcium channel blocker and ALLHAT first-line arm; ankle oedema is the dose-limiting complaint.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1992
- **ATC C08CA01:** CARDIOVASCULAR SYSTEM › SELECTIVE CALCIUM CHANNEL BLOCKERS WITH MAINLY VASCULAR EFFECTS › Dihydropyridine derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 408.88 | 2.27 | 99.88 | 2/7 | 0 | C20H25ClN2O5 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Amlodipine*](https://en.wikipedia.org/w/index.php?title=Amlodipine&oldid=1368611723) (revision 1368611723, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 30–50 h | 30–50 hours |
| Protein binding | 93 % | 93% |
| Bioavailability | 64–90 % | 64–90% |
| Metabolism | hepatic | Liver |
| Metabolites | - | Various inactive pyrimidine metabolites |
| Excretion | mainly urinary | Urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 614d974f…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=614d974f-51c7-4b18-8171-39eb6e8d4c03), label version 20260216. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 52)
> - protein-binding: consistent (label values: 93)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Clevidipine]], [[Felodipine]], [[Lercanidipine]], [[Nicardipine]], [[Nifedipine]], [[Nimodipine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
