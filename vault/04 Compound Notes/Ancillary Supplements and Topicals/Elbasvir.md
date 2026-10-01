---
type: compound
schema-version: 2
compound-id: elbasvir-compound
name: Elbasvir
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
chembl-id: CHEMBL3039514
chembl-max-phase: 4
half-life:
  value: 24.0
  value-max: null
  unit: h
  notes: 24 hours
protein-binding:
  value: 99.9
  value-max: null
  unit: percent
  notes: '>99.9%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: '>90% via faeces, <1% via urine'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Elbasvir
  url: https://en.wikipedia.org/w/index.php?title=Elbasvir&oldid=1342170146
  revision: 1342170146
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL3039514
  pref-name: ELBASVIR
  molecule-type: Small molecule
  first-approval: 2016
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J05AP10
  targets:
  - id: CHEMBL3307224
    name: Nonstructural protein 5A
    action: INHIBITOR
  properties:
    full-mwt: 882.03
    mw-freebase: 882.03
    alogp: 8.12
    psa: 188.8
    hba: 10
    hbd: 4
    rtb: 11
    num-ro5-violations: 2
    qed-weighted: 0.1
    full-molformula: C49H55N9O7
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Elbasvir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `elbasvir-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL3039514](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3039514/) · max phase 4 · id via exact ChEMBL name match - confirm

## Source summary

Blocks an HCV replication target and is combined with complementary direct-acting antivirals to prevent resistance.

## Mechanism

Nonstructural protein 5A inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2016
- **ATC J05AP10:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Antivirals for treatment of HCV infections

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 882.03 | 8.12 | 188.8 | 4/10 | 2 | C49H55N9O7 |

**Targets (ChEMBL curated mechanisms):**

- [[Nonstructural protein 5A (CHEMBL3307224)|Nonstructural protein 5A]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Elbasvir*](https://en.wikipedia.org/w/index.php?title=Elbasvir&oldid=1342170146) (revision 1342170146, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 24 h | 24 hours |
| Protein binding | 99.9 % | >99.9% |
| Metabolism | hepatic | CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | >90% via faeces, <1% via urine |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Ledipasvir]] (Nonstructural protein 5A), [[Ombitasvir]] (Nonstructural protein 5A), [[Pibrentasvir]] (Nonstructural protein 5A), [[Velpatasvir]] (Nonstructural protein 5A)
- **Same ATC subgroup:** [[Boceprevir]], [[Daclatasvir]], [[Grazoprevir]], [[Ribavirin]], [[Simeprevir]], [[Sofosbuvir]], [[Telaprevir]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
