---
type: compound
schema-version: 2
compound-id: terbinafine-compound
name: Terbinafine (oral, Lamisil)
aliases:
- Terbinafine
- Lamisil
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Squalene monooxygenase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL822
chembl-max-phase: 4
half-life:
  value: null
  value-max: null
  unit: null
  notes: Highly variable
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
bioavailability:
  value: 70.0
  value-max: 90.0
  notes: 'Readily absorbed: 70–90%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
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
  title: Terbinafine
  url: https://en.wikipedia.org/w/index.php?title=Terbinafine&oldid=1337996088
  revision: 1337996088
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL822
  pref-name: TERBINAFINE
  molecule-type: Small molecule
  first-approval: 1992
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - D01AE15
  - D01BA02
  targets:
  - id: CHEMBL2364679
    name: Squalene monooxygenase
    action: INHIBITOR
  properties:
    full-mwt: 291.44
    mw-freebase: 291.44
    alogp: 4.88
    psa: 3.24
    hba: 1
    hbd: 0
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.73
    full-molformula: C21H25N
pk-verification:
  source: fda-label
  status: consistent
  set-id: 18b16aad-1877-4b07-b532-f0ef4843af91
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=18b16aad-1877-4b07-b532-f0ef4843af91
  checked: '2026-10-01'
  fields:
    protein-binding: consistent
---

# Terbinafine (oral, Lamisil)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `terbinafine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Terbinafine, Lamisil
- **ChEMBL:** [CHEMBL822](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL822/) · max phase 4 · id via Wikipedia infobox

## Source summary

Oral allylamine antifungal, the standard systemic treatment for dermatophyte onychomycosis.

## Mechanism

Squalene monooxygenase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1992
- **ATC D01AE15:** DERMATOLOGICALS › ANTIFUNGALS FOR TOPICAL USE › Other antifungals for topical use
- **ATC D01BA02:** DERMATOLOGICALS › ANTIFUNGALS FOR SYSTEMIC USE › Antifungals for systemic use

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 291.44 | 4.88 | 3.24 | 0/1 | 0 | C21H25N |

**Targets (ChEMBL curated mechanisms):**

- [[Squalene monooxygenase (CHEMBL2364679)|Squalene monooxygenase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Terbinafine*](https://en.wikipedia.org/w/index.php?title=Terbinafine&oldid=1337996088) (revision 1337996088, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | - | Highly variable |
| Protein binding | 99 % | >99% |
| Bioavailability | 70–90 % | Readily absorbed: 70–90% |
| Metabolism | hepatic | Liver |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 18b16aad…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=18b16aad-1877-4b07-b532-f0ef4843af91), label version 20250919. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - protein-binding: consistent (label values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Amorolfine]], [[Butenafine]], [[Flucytosine]], [[Griseofulvin]], [[Naftifine]], [[Salicylic Acid]], [[Tavaborole]], [[Undecylenic Acid]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
