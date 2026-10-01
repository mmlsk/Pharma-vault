---
type: compound
schema-version: 2
compound-id: cisapride-compound
name: Cisapride
aliases: []
cluster: General Pharmacology
group: gi
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1729
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: null
  unit: h
  notes: 10 hours
protein-binding:
  value: 97.5
  value-max: null
  unit: percent
  notes: 97.5%
bioavailability:
  value: 30.0
  value-max: 40.0
  notes: 30-40%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: kidney, bile duct
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: liver CYP3A4, intestinal
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
- group/gi
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Cisapride
  url: https://en.wikipedia.org/w/index.php?title=Cisapride&oldid=1357376753
  revision: 1357376753
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1729
  pref-name: CISAPRIDE
  molecule-type: Small molecule
  first-approval: 1993
  black-box-warning: false
  withdrawn: true
  atc-codes:
  - A03FA02
  targets: []
  properties:
    full-mwt: 465.95
    mw-freebase: 465.95
    alogp: 3.36
    psa: 86.05
    hba: 6
    hbd: 2
    rtb: 9
    num-ro5-violations: 0
    qed-weighted: 0.44
    full-molformula: C23H29ClFN3O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Cisapride

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cisapride-compound`
- **Source group:** Gastrointestinal & Hepatic (`gi`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1729](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1729/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Withdrawn 5-HT4 agonist prokinetic, the drug whose torsades deaths established hERG screening as a regulatory requirement.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1993
- **Flags:** withdrawn
- **ATC A03FA02:** ALIMENTARY TRACT AND METABOLISM › PROPULSIVES › Propulsives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 465.95 | 3.36 | 86.05 | 2/6 | 0 | C23H29ClFN3O4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cisapride*](https://en.wikipedia.org/w/index.php?title=Cisapride&oldid=1357376753) (revision 1357376753, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10 h | 10 hours |
| Protein binding | 97.5 % | 97.5% |
| Bioavailability | 30–40 % | 30-40% |
| Metabolism | hepatic | liver CYP3A4, intestinal |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | kidney, bile duct |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Acotiamide]], [[Domperidone]], [[Itopride]], [[Metoclopramide]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
