---
type: compound
schema-version: 2
compound-id: ledipasvir-compound
name: Ledipasvir
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Nonstructural protein 5A inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2374220
chembl-max-phase: 4
half-life:
  value: 47.0
  value-max: null
  unit: h
  notes: 47 hrs
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
bioavailability:
  value: 76.0
  value-max: null
  notes: 76%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: No cytochrome metabolism
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
  title: Ledipasvir
  url: https://en.wikipedia.org/w/index.php?title=Ledipasvir&oldid=1369492597
  revision: 1369492597
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL2374220
  pref-name: LEDIPASVIR
  molecule-type: Small molecule
  first-approval: 2014
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL3307224
    name: Nonstructural protein 5A
    action: INHIBITOR
  properties:
    full-mwt: 889.02
    mw-freebase: 889.02
    alogp: 8.61
    psa: 174.64
    hba: 8
    hbd: 4
    rtb: 10
    num-ro5-violations: 2
    qed-weighted: 0.11
    full-molformula: C49H54F2N8O6
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Ledipasvir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ledipasvir-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL2374220](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2374220/) · max phase 4 · id via exact ChEMBL name match - confirm

## Source summary

Blocks an HCV replication target and is combined with complementary direct-acting antivirals to prevent resistance.

## Mechanism

Nonstructural protein 5A inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2014

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 889.02 | 8.61 | 174.64 | 4/8 | 2 | C49H54F2N8O6 |

**Targets (ChEMBL curated mechanisms):**

- [[Nonstructural protein 5A (CHEMBL3307224)|Nonstructural protein 5A]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ledipasvir*](https://en.wikipedia.org/w/index.php?title=Ledipasvir&oldid=1369492597) (revision 1369492597, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 47 h | 47 hrs |
| Protein binding | 99 % | >99% |
| Bioavailability | 76 % | 76% |
| Metabolism | - | No cytochrome metabolism |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Elbasvir]] (Nonstructural protein 5A), [[Ombitasvir]] (Nonstructural protein 5A), [[Pibrentasvir]] (Nonstructural protein 5A), [[Velpatasvir]] (Nonstructural protein 5A)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
