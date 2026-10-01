---
type: compound
schema-version: 2
compound-id: daclatasvir-compound
name: Daclatasvir
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2023898
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: 15.0
  unit: h
  notes: 12–15 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99%
bioavailability:
  value: 67.0
  value-max: null
  notes: 67%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.53
  notes: Fecal (53% as unchanged drug), kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Daclatasvir
  url: https://en.wikipedia.org/w/index.php?title=Daclatasvir&oldid=1322611182
  revision: 1322611182
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL2023898
  pref-name: DACLATASVIR
  molecule-type: Small molecule
  first-approval: 2014
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J05AP07
  targets: []
  properties:
    full-mwt: 738.89
    mw-freebase: 738.89
    alogp: 6.22
    psa: 174.64
    hba: 8
    hbd: 4
    rtb: 11
    num-ro5-violations: 2
    qed-weighted: 0.14
    full-molformula: C40H50N8O6
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Daclatasvir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `daclatasvir-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL2023898](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2023898/) · max phase 4 · id via exact ChEMBL name match · structure check: ✅ InChIKey matches PubChem

## Source summary

Blocks an HCV replication target and is combined with complementary direct-acting antivirals to prevent resistance.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2014
- **Flags:** black-box warning
- **ATC J05AP07:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Antivirals for treatment of HCV infections

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 738.89 | 6.22 | 174.64 | 4/8 | 2 | C40H50N8O6 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Daclatasvir*](https://en.wikipedia.org/w/index.php?title=Daclatasvir&oldid=1322611182) (revision 1322611182, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12–15 h | 12–15 hours |
| Protein binding | 99 % | 99% |
| Bioavailability | 67 % | 67% |
| Metabolism | hepatic | CYP3A |
| Excretion | mainly urinary · fe 0.53 | Fecal (53% as unchanged drug), kidney |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Boceprevir]], [[Elbasvir]], [[Grazoprevir]], [[Ribavirin]], [[Simeprevir]], [[Sofosbuvir]], [[Telaprevir]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
