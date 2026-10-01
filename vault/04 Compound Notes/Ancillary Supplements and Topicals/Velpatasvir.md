---
type: compound
schema-version: 2
compound-id: velpatasvir-compound
name: Velpatasvir
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
chembl-id: CHEMBL3545062
chembl-max-phase: 4
half-life:
  value: 15.0
  value-max: null
  unit: h
  notes: 15 hours
protein-binding:
  value: 99.5
  value-max: null
  unit: percent
  notes: '>99.5%'
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (94%), urine (0.4%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2B6, 2C8, 3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2B6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2B6 (from metabolism field); inhibitor/inducer roles not assessed
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Velpatasvir
  url: https://en.wikipedia.org/w/index.php?title=Velpatasvir&oldid=1269008786
  revision: 1269008786
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL3545062
  pref-name: VELPATASVIR
  molecule-type: Small molecule
  first-approval: 2016
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL3307224
    name: Nonstructural protein 5A
    action: INHIBITOR
  properties:
    full-mwt: 883.02
    mw-freebase: 883.02
    alogp: 7.73
    psa: 193.1
    hba: 10
    hbd: 4
    rtb: 11
    num-ro5-violations: 2
    qed-weighted: 0.1
    full-molformula: C49H54N8O8
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Velpatasvir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `velpatasvir-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL3545062](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3545062/) · max phase 4 · id via exact ChEMBL name match · structure check: ✅ InChIKey matches PubChem

## Source summary

Blocks an HCV replication target and is combined with complementary direct-acting antivirals to prevent resistance.

## Mechanism

Nonstructural protein 5A inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2016

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 883.02 | 7.73 | 193.1 | 4/10 | 2 | C49H54N8O8 |

**Targets (ChEMBL curated mechanisms):**

- [[Nonstructural protein 5A (CHEMBL3307224)|Nonstructural protein 5A]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Velpatasvir*](https://en.wikipedia.org/w/index.php?title=Velpatasvir&oldid=1269008786) (revision 1269008786, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 15 h | 15 hours |
| Protein binding | 99.5 % | >99.5% |
| Metabolism | hepatic | Liver (CYP2B6, 2C8, 3A4) |
| CYP (metabolised by) | CYP2B6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Feces (94%), urine (0.4%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Elbasvir]] (Nonstructural protein 5A), [[Ledipasvir]] (Nonstructural protein 5A), [[Ombitasvir]] (Nonstructural protein 5A), [[Pibrentasvir]] (Nonstructural protein 5A)
- **Shared CYP substrate pool:** CYP2B6 (+12 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
