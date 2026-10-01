---
type: compound
schema-version: 2
compound-id: tiagabine-compound
name: Tiagabine
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1027
chembl-max-phase: 4
half-life:
  value: 4.5
  value-max: 9.0
  unit: h
  notes: '4.5–9.0 hours; Enzyme-induced patients: 2–3 hours'
protein-binding:
  value: 96.0
  value-max: null
  unit: percent
  notes: 96%
bioavailability:
  value: 90.0
  value-max: null
  notes: 90%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: 0.03
  notes: 'Feces: 63%; Urine: 25% (<3% unchanged)'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4, possibly other CYP450 enzymes, glucuronidation
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
- cns-activity
- serotonergic-or-dopaminergic-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/neuropsych
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Tiagabine
  url: https://en.wikipedia.org/w/index.php?title=Tiagabine&oldid=1368825659
  revision: 1368825659
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1027
  pref-name: TIAGABINE
  molecule-type: Small molecule
  first-approval: 1997
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N03AG06
  targets: []
  properties:
    full-mwt: 375.56
    mw-freebase: 375.56
    alogp: 5.04
    psa: 40.54
    hba: 4
    hbd: 1
    rtb: 6
    num-ro5-violations: 1
    qed-weighted: 0.77
    full-molformula: C20H25NO2S2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Tiagabine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tiagabine-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL1027](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1027/) · max phase 4 · id via Wikipedia infobox

## Source summary

GABA reuptake inhibitor for focal epilepsy, notable for provoking non-convulsive status in patients without epilepsy.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1997
- **ATC N03AG06:** NERVOUS SYSTEM › ANTIEPILEPTICS › Fatty acid derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 375.56 | 5.04 | 40.54 | 1/4 | 1 | C20H25NO2S2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tiagabine*](https://en.wikipedia.org/w/index.php?title=Tiagabine&oldid=1368825659) (revision 1368825659, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4.5–9 h | 4.5–9.0 hours; Enzyme-induced patients: 2–3 hours |
| Protein binding | 96 % | 96% |
| Bioavailability | 90 % | 90% |
| Metabolism | hepatic | CYP3A4, possibly other CYP450 enzymes, glucuronidation |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | 5-Oxotiagabine, others |
| Excretion | mainly non-renal · fe 0.03 | Feces: 63%; Urine: 25% (<3% unchanged) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Sodium Valproate]], [[Vigabatrin]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
