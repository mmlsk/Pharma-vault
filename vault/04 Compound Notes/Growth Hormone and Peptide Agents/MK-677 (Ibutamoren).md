---
type: compound
schema-version: 2
compound-id: ibutamoren-compound
name: MK-677 (Ibutamoren)
aliases:
- MK-677
- Ibutamoren
cluster: Growth Hormone and Peptide Agents
group: gh
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL13817
chembl-max-phase: 2
half-life:
  value: 4.0
  value-max: 6.0
  unit: h
  notes: 4–6 hours (in beagles); IGF-1 levels remain elevated in humans with a single oral dose for up to 24 hours
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
- endocrine-feedback-disruption
- glucose-metabolism
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/gh
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Ibutamoren
  url: https://en.wikipedia.org/w/index.php?title=Ibutamoren&oldid=1363882996
  revision: 1363882996
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL13817
  pref-name: IBUTAMOREN
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 528.68
    mw-freebase: 528.68
    alogp: 1.77
    psa: 122.04
    hba: 6
    hbd: 2
    rtb: 8
    num-ro5-violations: 1
    qed-weighted: 0.54
    full-molformula: C27H36N4O5S
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# MK-677 (Ibutamoren)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ibutamoren-compound`
- **Source group:** GH & Secretagogues (`gh`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **Aliases:** MK-677, Ibutamoren
- **ChEMBL:** [CHEMBL13817](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL13817/) · max phase 2 · id via Wikipedia infobox

## Source summary

Oral ghrelin-mimetic growth hormone secretagogue that raises GH and IGF-1 without injections.

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 528.68 | 1.77 | 122.04 | 2/6 | 1 | C27H36N4O5S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ibutamoren*](https://en.wikipedia.org/w/index.php?title=Ibutamoren&oldid=1363882996) (revision 1363882996, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4–6 h | 4–6 hours (in beagles); IGF-1 levels remain elevated in humans with a single oral dose for up to 24 hours |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `glucose-metabolism`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Glucose and Incretin Signaling]]
- [[HPG and GH-IGF-1 Axes]]
