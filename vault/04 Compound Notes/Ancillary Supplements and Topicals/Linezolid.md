---
type: compound
schema-version: 2
compound-id: linezolid-compound
name: Linezolid
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Bacterial 70S ribosome inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL126
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: 7.0
  unit: h
  notes: 3–7 hours; longer half-life in CSF than plasma
protein-binding:
  value: 31.0
  value-max: null
  unit: percent
  notes: Low (31%)
bioavailability:
  value: 100.0
  value-max: null
  notes: ~100% (oral)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: non-kidney, kidney, and fecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (50–70%, CYP not involved)
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
  title: Linezolid
  url: https://en.wikipedia.org/w/index.php?title=Linezolid&oldid=1350533375
  revision: 1350533375
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL126
  pref-name: LINEZOLID
  molecule-type: Small molecule
  first-approval: 2000
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01XX08
  targets:
  - id: CHEMBL2363135
    name: Bacterial 70S ribosome
    action: INHIBITOR
  properties:
    full-mwt: 337.35
    mw-freebase: 337.35
    alogp: 1.12
    psa: 71.11
    hba: 5
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.89
    full-molformula: C16H20FN3O4
pk-verification:
  source: fda-label
  status: consistent
  set-id: 3d630d3d-510d-43a4-8703-8b6234831564
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3d630d3d-510d-43a4-8703-8b6234831564
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Linezolid

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `linezolid-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL126](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL126/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits bacterial protein synthesis at the ribosome; spectrum, resistance, and toxicity are agent-specific.

## Mechanism

Bacterial 70S ribosome inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2000
- **ATC J01XX08:** ANTIINFECTIVES FOR SYSTEMIC USE › OTHER ANTIBACTERIALS › Other antibacterials

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 337.35 | 1.12 | 71.11 | 1/5 | 0 | C16H20FN3O4 |

**Targets (ChEMBL curated mechanisms):**

- [[Bacterial 70S ribosome (CHEMBL2363135)|Bacterial 70S ribosome]] - inhibitor · PROTEIN NUCLEIC-ACID COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Linezolid*](https://en.wikipedia.org/w/index.php?title=Linezolid&oldid=1350533375) (revision 1350533375, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–7 h | 3–7 hours; longer half-life in CSF than plasma |
| Protein binding | 31 % | Low (31%) |
| Bioavailability | 100 % | ~100% (oral) |
| Metabolism | hepatic | Liver (50–70%, CYP not involved) |
| Excretion | - | non-kidney, kidney, and fecal |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 3d630d3d…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3d630d3d-510d-43a4-8703-8b6234831564), label version 20260903. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2, 12, 348, 672)
> - protein-binding: consistent (label values: 31)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Azithromycin]] (Bacterial 70S ribosome), [[Chloramphenicol]] (Bacterial 70S ribosome), [[Clarithromycin]] (Bacterial 70S ribosome), [[Eravacycline]] (Bacterial 70S ribosome), [[Erythromycin]] (Bacterial 70S ribosome), [[Tedizolid]] (Bacterial 70S ribosome), [[Tetracycline]] (Bacterial 70S ribosome), [[Tigecycline]] (Bacterial 70S ribosome)
- **Same ATC subgroup:** [[Bacitracin]], [[Fosfomycin]], [[Gepotidacin]], [[Lefamulin]], [[Tedizolid]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
