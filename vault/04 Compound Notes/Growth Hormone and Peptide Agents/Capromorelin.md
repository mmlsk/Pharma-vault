---
type: compound
schema-version: 2
compound-id: capromorelin-compound
name: Capromorelin
aliases: []
cluster: Growth Hormone and Peptide Agents
group: gh
class: null
subclass: null
mechanism: Ghrelin receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL113313
chembl-max-phase: 2
half-life:
  value: 2.4
  value-max: null
  unit: h
  notes: 2.4 hours
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
  title: Capromorelin
  url: https://en.wikipedia.org/w/index.php?title=Capromorelin&oldid=1369640765
  revision: 1369640765
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL113313
  pref-name: CAPROMORELIN
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL4616
    name: Growth hormone secretagogue receptor type 1
    action: AGONIST
  properties:
    full-mwt: 505.62
    mw-freebase: 505.62
    alogp: 1.71
    psa: 117.33
    hba: 6
    hbd: 2
    rtb: 9
    num-ro5-violations: 1
    qed-weighted: 0.54
    full-molformula: C28H35N5O4
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Capromorelin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `capromorelin-compound`
- **Source group:** GH & Secretagogues (`gh`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **ChEMBL:** [CHEMBL113313](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL113313/) · max phase 2 · id via Wikipedia infobox

## Source summary

Oral ghrelin-receptor agonist approved in veterinary medicine for appetite stimulation; not approved for human use.

## Mechanism

Ghrelin receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 505.62 | 1.71 | 117.33 | 2/6 | 1 | C28H35N5O4 |

**Targets (ChEMBL curated mechanisms):**

- [[Growth hormone secretagogue receptor type 1 (CHEMBL4616)|Growth hormone secretagogue receptor type 1]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Capromorelin*](https://en.wikipedia.org/w/index.php?title=Capromorelin&oldid=1369640765) (revision 1369640765, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.4 h | 2.4 hours |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Macimorelin (Macrilen)]] (Growth hormone secretagogue receptor type 1), [[Pf-5190457]] (Growth hormone secretagogue receptor type 1), [[Relamorelin]] (Growth hormone secretagogue receptor type 1), [[Tabimorelin]] (Growth hormone secretagogue receptor type 1), [[Tzp-102]] (Growth hormone secretagogue receptor type 1)

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `glucose-metabolism`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Glucose and Incretin Signaling]]
- [[HPG and GH-IGF-1 Axes]]
