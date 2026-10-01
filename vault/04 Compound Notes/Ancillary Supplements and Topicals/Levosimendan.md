---
type: compound
schema-version: 2
compound-id: levosimendan-compound
name: Levosimendan
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
chembl-id: CHEMBL313136
chembl-max-phase: 2
half-life:
  value: 1.0
  value-max: null
  unit: h
  notes: ~1 hour (levosimendan), 75–80 hours (metabolites)
protein-binding:
  value: 97.0
  value-max: 98.0
  unit: percent
  notes: 97–98%
bioavailability:
  value: 85.0
  value-max: null
  notes: 85% (oral)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: urine (54%), feces (44%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Extensive hepatic
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Levosimendan
  url: https://en.wikipedia.org/w/index.php?title=Levosimendan&oldid=1365937324
  revision: 1365937324
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL313136
  pref-name: SIMENDAN
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 280.29
    mw-freebase: 280.29
    alogp: 1.36
    psa: 113.43
    hba: 6
    hbd: 2
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.64
    full-molformula: C14H12N6O
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Levosimendan

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `levosimendan-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL313136](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL313136/) · max phase 2 · id via Wikipedia infobox

## Source summary

Calcium-sensitizing inodilator used for acute heart failure in some countries; hypotension and arrhythmia risk require monitored infusion.

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 280.29 | 1.36 | 113.43 | 2/6 | 0 | C14H12N6O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Levosimendan*](https://en.wikipedia.org/w/index.php?title=Levosimendan&oldid=1365937324) (revision 1365937324, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1 h | ~1 hour (levosimendan), 75–80 hours (metabolites) |
| Protein binding | 97–98 % | 97–98% |
| Bioavailability | 85 % | 85% (oral) |
| Metabolism | hepatic | Extensive hepatic |
| Excretion | mainly urinary | urine (54%), feces (44%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
