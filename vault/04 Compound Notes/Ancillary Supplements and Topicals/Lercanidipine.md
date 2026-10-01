---
type: compound
schema-version: 2
compound-id: lercanidipine-compound
name: Lercanidipine
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
chembl-id: CHEMBL250270
chembl-max-phase: 3
half-life:
  value: 8.0
  value-max: 10.0
  unit: h
  notes: 8–10 hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: '>98%'
bioavailability:
  value: 10.0
  value-max: null
  notes: ~10% (due to first-pass effect)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (50%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Mainly CYP3A4
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
- needs-compound-review
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Lercanidipine
  url: https://en.wikipedia.org/w/index.php?title=Lercanidipine&oldid=1334409442
  revision: 1334409442
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL250270
  pref-name: LERCANIDIPINE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C08CA13
  targets: []
  properties:
    full-mwt: 611.74
    mw-freebase: 611.74
    alogp: 6.48
    psa: 111.01
    hba: 8
    hbd: 1
    rtb: 12
    num-ro5-violations: 2
    qed-weighted: 0.14
    full-molformula: C36H41N3O6
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Lercanidipine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lercanidipine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL250270](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL250270/) · max phase 3 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Third-generation lipophilic dihydropyridine marketed on a lower rate of ankle oedema than amlodipine.

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC C08CA13:** CARDIOVASCULAR SYSTEM › SELECTIVE CALCIUM CHANNEL BLOCKERS WITH MAINLY VASCULAR EFFECTS › Dihydropyridine derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 611.74 | 6.48 | 111.01 | 1/8 | 2 | C36H41N3O6 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lercanidipine*](https://en.wikipedia.org/w/index.php?title=Lercanidipine&oldid=1334409442) (revision 1334409442, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8–10 h | 8–10 hours |
| Protein binding | 98 % | >98% |
| Bioavailability | 10 % | ~10% (due to first-pass effect) |
| Metabolism | hepatic | Mainly CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine (50%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Amlodipine]], [[Clevidipine]], [[Felodipine]], [[Nicardipine]], [[Nifedipine]], [[Nimodipine]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
