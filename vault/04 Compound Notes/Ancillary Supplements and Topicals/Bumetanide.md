---
type: compound
schema-version: 2
compound-id: bumetanide-compound
name: Bumetanide
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
chembl-id: CHEMBL1072
chembl-max-phase: 4
half-life:
  value: 0.8
  value-max: null
  unit: h
  notes: ~0.8 hours
protein-binding:
  value: 97.0
  value-max: null
  unit: percent
  notes: 97%
bioavailability:
  value: 80.0
  value-max: null
  notes: Almost complete (~80%)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
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
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Bumetanide
  url: https://en.wikipedia.org/w/index.php?title=Bumetanide&oldid=1341349960
  revision: 1341349960
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1072
  pref-name: BUMETANIDE
  molecule-type: Small molecule
  first-approval: 1983
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C03CA02
  targets:
  - id: CHEMBL1874
    name: Solute carrier family 12 member 1
    action: INHIBITOR
  properties:
    full-mwt: 364.42
    mw-freebase: 364.42
    alogp: 3.04
    psa: 118.72
    hba: 5
    hbd: 3
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.62
    full-molformula: C17H20N2O5S
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 0fb78afc-d8bc-4ae8-8c0a-6d9c6f7a22c5
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0fb78afc-d8bc-4ae8-8c0a-6d9c6f7a22c5
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
---

# Bumetanide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `bumetanide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1072](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1072/) · max phase 4 · id via Wikipedia infobox

## Source summary

Potent loop diuretic used for fluid overload; can cause dehydration, hypokalemia, and renal stress.

## Mechanism

Sodium-(potassium)-chloride cotransporter 2 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1983
- **Flags:** black-box warning
- **ATC C03CA02:** CARDIOVASCULAR SYSTEM › HIGH-CEILING DIURETICS › Sulfonamides, plain

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 364.42 | 3.04 | 118.72 | 3/5 | 0 | C17H20N2O5S |

**Targets (ChEMBL curated mechanisms):**

- [[Solute carrier family 12 member 1 (CHEMBL1874)|Solute carrier family 12 member 1]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Bumetanide*](https://en.wikipedia.org/w/index.php?title=Bumetanide&oldid=1341349960) (revision 1341349960, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.8 h | ~0.8 hours |
| Protein binding | 97 % | 97% |
| Bioavailability | 80 % | Almost complete (~80%) |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Kidney |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 0fb78afc…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0fb78afc-d8bc-4ae8-8c0a-6d9c6f7a22c5), label version 20260909. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 1.5, 2.4, 2.5, 6, 15)
> - protein-binding: consistent (label values: 94, 96, 97)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Ethacrynic Acid]] (Solute carrier family 12 member 1), [[Furosemide]] (Solute carrier family 12 member 1), [[Torsemide]] (Solute carrier family 12 member 1)
- **Same ATC subgroup:** [[Furosemide]], [[Torsemide]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
