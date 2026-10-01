---
type: compound
schema-version: 2
compound-id: ombitasvir-compound
name: Ombitasvir
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
chembl-id: CHEMBL3127326
chembl-max-phase: 4
half-life:
  value: 21.0
  value-max: 25.0
  unit: h
  notes: 21 to 25 hours
protein-binding:
  value: 99.9
  value-max: null
  unit: percent
  notes: ~99.9%
bioavailability:
  value: null
  value-max: null
  notes: Not determined
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Mostly with feces (90.2%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Amide hydrolysis followed by oxidation
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
  title: Ombitasvir
  url: https://en.wikipedia.org/w/index.php?title=Ombitasvir&oldid=1332195687
  revision: 1332195687
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL3127326
  pref-name: OMBITASVIR
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
    full-mwt: 894.13
    mw-freebase: 894.13
    alogp: 7.69
    psa: 178.72
    hba: 9
    hbd: 4
    rtb: 13
    num-ro5-violations: 2
    qed-weighted: 0.13
    full-molformula: C50H67N7O8
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Ombitasvir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ombitasvir-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL3127326](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3127326/) · max phase 4 · id via exact ChEMBL name match - confirm

## Source summary

Blocks an HCV replication target and is combined with complementary direct-acting antivirals to prevent resistance.

## Mechanism

Nonstructural protein 5A inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2014

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 894.13 | 7.69 | 178.72 | 4/9 | 2 | C50H67N7O8 |

**Targets (ChEMBL curated mechanisms):**

- [[Nonstructural protein 5A (CHEMBL3307224)|Nonstructural protein 5A]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ombitasvir*](https://en.wikipedia.org/w/index.php?title=Ombitasvir&oldid=1332195687) (revision 1332195687, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 21–25 h | 21 to 25 hours |
| Protein binding | 99.9 % | ~99.9% |
| Bioavailability | - | Not determined |
| Metabolism | hepatic | Amide hydrolysis followed by oxidation |
| Excretion | mainly non-renal | Mostly with feces (90.2%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Elbasvir]] (Nonstructural protein 5A), [[Ledipasvir]] (Nonstructural protein 5A), [[Pibrentasvir]] (Nonstructural protein 5A), [[Velpatasvir]] (Nonstructural protein 5A)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
