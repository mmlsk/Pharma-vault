---
type: compound
schema-version: 2
compound-id: dantrolene-compound
name: Dantrolene
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
chembl-id: CHEMBL1201288
chembl-max-phase: 4
half-life:
  value: null
  unit: null
  notes: null
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 70.0
  value-max: null
  notes: 70%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Bile duct, kidney
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
  title: Dantrolene
  url: https://en.wikipedia.org/w/index.php?title=Dantrolene&oldid=1337101387
  revision: 1337101387
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201288
  pref-name: DANTROLENE
  molecule-type: Small molecule
  first-approval: 1974
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - M03CA01
  targets: []
  properties:
    full-mwt: 314.26
    mw-freebase: 314.26
    alogp: 1.74
    psa: 118.05
    hba: 6
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.4
    full-molformula: C14H10N4O5
---

# Dantrolene

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dantrolene-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1201288](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201288/) · max phase 4 · id via Wikipedia infobox

## Source summary

Ryanodine receptor antagonist and the only effective treatment for malignant hyperthermia.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1974
- **Flags:** black-box warning
- **ATC M03CA01:** MUSCULO-SKELETAL SYSTEM › MUSCLE RELAXANTS, DIRECTLY ACTING AGENTS › Dantrolene and derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 314.26 | 1.74 | 118.05 | 1/6 | 0 | C14H10N4O5 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dantrolene*](https://en.wikipedia.org/w/index.php?title=Dantrolene&oldid=1337101387) (revision 1337101387, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Bioavailability | 70 % | 70% |
| Metabolism | hepatic | Liver |
| Excretion | mainly non-renal | Bile duct, kidney |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
