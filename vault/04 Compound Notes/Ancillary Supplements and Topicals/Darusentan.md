---
type: compound
schema-version: 2
compound-id: darusentan-compound
name: Darusentan
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: endothelin receptor ET-A antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL23261
chembl-max-phase: 3
half-life:
  value: 12.5
  value-max: null
  unit: h
  notes: 12.5 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Darusentan
  url: https://en.wikipedia.org/w/index.php?title=Darusentan&oldid=1330795221
  revision: 1330795221
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL23261
  pref-name: DARUSENTAN
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL252
    name: Endothelin-1 receptor
    action: ANTAGONIST
  - id: CHEMBL1785
    name: Endothelin receptor type B
    action: ANTAGONIST
  properties:
    full-mwt: 410.43
    mw-freebase: 410.43
    alogp: 2.92
    psa: 100.0
    hba: 7
    hbd: 1
    rtb: 9
    num-ro5-violations: 0
    qed-weighted: 0.57
    full-molformula: C22H22N2O6
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Darusentan

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `darusentan-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL23261](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL23261/) · max phase 3 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Darusentan is a phase 3 compound catalogued by ChEMBL. Its curated mechanism is endothelin receptor ET-A antagonist; the pathway link is mechanistic and does not by itself establish benefit, safety, or an appropriate use.

## Mechanism

endothelin receptor ET-A antagonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 410.43 | 2.92 | 100.0 | 1/7 | 0 | C22H22N2O6 |

**Targets (ChEMBL curated mechanisms):**

- [[Endothelin-1 receptor (CHEMBL252)|Endothelin-1 receptor]] - antagonist · SINGLE PROTEIN
- [[Endothelin receptor type B (CHEMBL1785)|Endothelin receptor type B]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Darusentan*](https://en.wikipedia.org/w/index.php?title=Darusentan&oldid=1330795221) (revision 1330795221, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12.5 h | 12.5 hours |
| Metabolism | hepatic | Hepatic |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Clazosentan]] (Endothelin-1 receptor), [[Sparsentan]] (Endothelin-1 receptor), [[Zibotentan]] (Endothelin-1 receptor)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
