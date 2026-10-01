---
type: compound
schema-version: 2
compound-id: pentamidine-compound
name: Pentamidine
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL55
chembl-max-phase: 4
half-life:
  value: 6.4
  value-max: 9.4
  unit: h
  notes: 6.4-9.4 hours
protein-binding:
  value: 69.0
  value-max: null
  unit: percent
  notes: 69%
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
- cyp-interactions
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Pentamidine
  url: https://en.wikipedia.org/w/index.php?title=Pentamidine&oldid=1315092083
  revision: 1315092083
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL55
  pref-name: PENTAMIDINE
  molecule-type: Small molecule
  first-approval: 1984
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 340.43
    mw-freebase: 340.43
    alogp: 2.88
    psa: 118.2
    hba: 4
    hbd: 4
    rtb: 10
    num-ro5-violations: 0
    qed-weighted: 0.3
    full-molformula: C19H24N4O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Pentamidine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pentamidine-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL55](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL55/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Aromatic diamidine for Pneumocystis and trypanosomiasis, with a striking dual effect on the pancreatic beta cell.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1984

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 340.43 | 2.88 | 118.2 | 4/4 | 0 | C19H24N4O2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pentamidine*](https://en.wikipedia.org/w/index.php?title=Pentamidine&oldid=1315092083) (revision 1315092083, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6.4–9.4 h | 6.4-9.4 hours |
| Protein binding | 69 % | 69% |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
