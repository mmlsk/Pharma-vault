---
type: compound
schema-version: 2
compound-id: terlipressin-compound
name: Terlipressin
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Vasopressin V1 receptor binding agent; Vasopressin V2 receptor binding agent
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2135460
chembl-max-phase: 4
half-life:
  value: null
  unit: null
  notes: null
protein-binding:
  value: 30.0
  value-max: null
  unit: percent
  notes: ~30%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
- chembl-name-match
pk-source:
  type: wikipedia-infobox
  title: Terlipressin
  url: https://en.wikipedia.org/w/index.php?title=Terlipressin&oldid=1359655991
  revision: 1359655991
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL2135460
  pref-name: TERLIPRESSIN
  molecule-type: Protein
  first-approval: 2022
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - H01BA04
  targets:
  - id: CHEMBL2111456
    name: Vasopressin V1 receptor
    action: BINDING AGENT
  - id: CHEMBL1790
    name: Vasopressin V2 receptor
    action: BINDING AGENT
  properties:
    full-mwt: 1227.4
    mw-freebase: 1227.4
    full-molformula: C52H74N16O15S2
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 3a35b86c-f451-4fac-8499-43019e4da354
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3a35b86c-f451-4fac-8499-43019e4da354
  checked: '2026-10-01'
  fields:
    protein-binding: no-label-value
---

# Terlipressin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `terlipressin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL2135460](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2135460/) · max phase 4 · id via exact ChEMBL name match - confirm

## Source summary

Acts on vasopressin receptors to alter free-water handling or vascular tone; sodium shifts require monitoring; V1-preferring agonist.

## Mechanism

Vasopressin V1 receptor binding agent; Vasopressin V2 receptor binding agent _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 2022
- **Flags:** black-box warning, prodrug
- **ATC H01BA04:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › POSTERIOR PITUITARY LOBE HORMONES › Vasopressin and analogues

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1227.4 | - | - | -/- | - | C52H74N16O15S2 |

**Targets (ChEMBL curated mechanisms):**

- [[Vasopressin V1 receptor (CHEMBL2111456)|Vasopressin V1 receptor]] - binding agent · PROTEIN FAMILY
- [[Vasopressin V2 receptor (CHEMBL1790)|Vasopressin V2 receptor]] - binding agent · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Terlipressin*](https://en.wikipedia.org/w/index.php?title=Terlipressin&oldid=1359655991) (revision 1359655991, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Protein binding | 30 % | ~30% |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 3a35b86c…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3a35b86c-f451-4fac-8499-43019e4da354), label version 20260619. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Lixivaptan]] (Vasopressin V2 receptor), [[Mozavaptan]] (Vasopressin V2 receptor), [[Satavaptan]] (Vasopressin V2 receptor), [[Tolvaptan]] (Vasopressin V2 receptor)
- **Same ATC subgroup:** [[Desmopressin]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
