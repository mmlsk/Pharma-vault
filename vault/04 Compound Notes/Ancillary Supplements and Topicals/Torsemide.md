---
type: compound
schema-version: 2
compound-id: torsemide-compound
name: Torsemide
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Sodium-(potassium)-chloride cotransporter 2 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1148
chembl-max-phase: 4
half-life:
  value: 3.5
  value-max: null
  unit: h
  notes: '3.5 hours; Cirrhosis: 7-8 hours'
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: Highly bound (>99%).
bioavailability:
  value: 80.0
  value-max: 90.0
  notes: 80-90%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (80%)
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
  title: Torasemide
  url: https://en.wikipedia.org/w/index.php?title=Torasemide&oldid=1356287130
  revision: 1356287130
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1148
  pref-name: TORSEMIDE
  molecule-type: Small molecule
  first-approval: 1993
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C03CA04
  targets:
  - id: CHEMBL1874
    name: Solute carrier family 12 member 1
    action: INHIBITOR
  properties:
    full-mwt: 348.43
    mw-freebase: 348.43
    alogp: 2.53
    psa: 100.19
    hba: 5
    hbd: 3
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.77
    full-molformula: C16H20N4O3S
pk-verification:
  source: fda-label
  status: consistent
  set-id: 26a3af16-39fc-482d-8a8e-9473af4b0e3f
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=26a3af16-39fc-482d-8a8e-9473af4b0e3f
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Torsemide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `torsemide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1148](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1148/) · max phase 4 · id via Wikipedia infobox

## Source summary

Loop diuretic with more predictable oral absorption and a longer half-life than furosemide.

## Mechanism

Sodium-(potassium)-chloride cotransporter 2 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1993
- **ATC C03CA04:** CARDIOVASCULAR SYSTEM › HIGH-CEILING DIURETICS › Sulfonamides, plain

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 348.43 | 2.53 | 100.19 | 3/5 | 0 | C16H20N4O3S |

**Targets (ChEMBL curated mechanisms):**

- [[Solute carrier family 12 member 1 (CHEMBL1874)|Solute carrier family 12 member 1]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Torasemide*](https://en.wikipedia.org/w/index.php?title=Torasemide&oldid=1356287130) (revision 1356287130, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3.5 h | 3.5 hours; Cirrhosis: 7-8 hours |
| Protein binding | 99 % | Highly bound (>99%). |
| Bioavailability | 80–90 % | 80-90% |
| Metabolism | hepatic | Liver (80%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 26a3af16…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=26a3af16-39fc-482d-8a8e-9473af4b0e3f), label version 20260827. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 3.5)
> - protein-binding: consistent (label values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Bumetanide]] (Solute carrier family 12 member 1), [[Ethacrynic Acid]] (Solute carrier family 12 member 1), [[Furosemide]] (Solute carrier family 12 member 1)
- **Same ATC subgroup:** [[Bumetanide]], [[Furosemide]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
