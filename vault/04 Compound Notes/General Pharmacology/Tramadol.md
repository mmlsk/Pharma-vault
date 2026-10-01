---
type: compound
schema-version: 2
compound-id: tramadol-compound
name: Tramadol
aliases: []
cluster: General Pharmacology
group: analgesia
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1066
chembl-max-phase: null
half-life:
  value: 6.3
  value-max: null
  unit: h
  notes: 6.3 ± 1.4 h
protein-binding:
  value: 20.0
  value-max: null
  unit: percent
  notes: 20%
bioavailability:
  value: 68.0
  value-max: null
  notes: 68% (by mouth), 77% (rectal), 100% (IM)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (95%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver-mediated demethylation and glucuronidation via CYP2D6 & CYP3A4
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- sedation-respiratory-depression
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/analgesia
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Tramadol
  url: https://en.wikipedia.org/w/index.php?title=Tramadol&oldid=1376793549
  revision: 1376793549
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1066
  pref-name: (R,R)-TRAMADOL
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 263.38
    mw-freebase: 263.38
    alogp: 2.63
    psa: 32.7
    hba: 3
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.91
    full-molformula: C16H25NO2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Tramadol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tramadol-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1066](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1066/) · max phase n/a · id via Wikipedia infobox

## Source summary

Weak opioid with substantial monoaminergic activity, marketed as low-risk and responsible for a great deal of serotonin syndrome and seizure.

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 263.38 | 2.63 | 32.7 | 1/3 | 0 | C16H25NO2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tramadol*](https://en.wikipedia.org/w/index.php?title=Tramadol&oldid=1376793549) (revision 1376793549, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6.3 h | 6.3 ± 1.4 h |
| Protein binding | 20 % | 20% |
| Bioavailability | 68 % | 68% (by mouth), 77% (rectal), 100% (IM) |
| Metabolism | hepatic | Liver-mediated demethylation and glucuronidation via CYP2D6 & CYP3A4 |
| CYP (metabolised by) | CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | O-desmethyltramadol; N-desmethyltramadol |
| Excretion | mainly urinary | Urine (95%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared CYP substrate pool:** CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
- [[CYP450 Metabolism]]
