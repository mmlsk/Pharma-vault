---
type: compound
schema-version: 2
compound-id: hydroxyzine-compound
name: Hydroxyzine
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL896
chembl-max-phase: 4
half-life:
  value: 20.0
  value-max: null
  unit: h
  notes: 'Adults: 20.0 hours; Elderly: 29.3 hours; Children: 7.1 hours'
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: Not known
bioavailability:
  value: null
  value-max: null
  notes: Not known
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine, feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver by CYP3A4 and CYP3A5
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Hydroxyzine
  url: https://en.wikipedia.org/w/index.php?title=Hydroxyzine&oldid=1373263093
  revision: 1373263093
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL896
  pref-name: HYDROXYZINE
  molecule-type: Small molecule
  first-approval: 1956
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N05BB01
  - N05BB51
  targets: []
  properties:
    full-mwt: 374.91
    mw-freebase: 374.91
    alogp: 3.06
    psa: 35.94
    hba: 4
    hbd: 1
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.72
    full-molformula: C21H27ClN2O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 851e7439-bb0a-4a09-9279-e3c33bff8965
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=851e7439-bb0a-4a09-9279-e3c33bff8965
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Hydroxyzine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `hydroxyzine-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL896](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL896/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Sedating first-generation antihistamine used for anxiety and pruritus; anticholinergic burden and QT prolongation make chronic sleep use unattractive.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1956
- **ATC N05BB01:** NERVOUS SYSTEM › ANXIOLYTICS › Diphenylmethane derivatives
- **ATC N05BB51:** NERVOUS SYSTEM › ANXIOLYTICS › Diphenylmethane derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 374.91 | 3.06 | 35.94 | 1/4 | 0 | C21H27ClN2O2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Hydroxyzine*](https://en.wikipedia.org/w/index.php?title=Hydroxyzine&oldid=1373263093) (revision 1373263093, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20 h | Adults: 20.0 hours; Elderly: 29.3 hours; Children: 7.1 hours |
| Protein binding | - | Not known |
| Bioavailability | - | Not known |
| Metabolism | hepatic | Liver by CYP3A4 and CYP3A5 |
| CYP (metabolised by) | CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Cetirizine, others |
| Excretion | - | Urine, feces |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 851e7439…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=851e7439-bb0a-4a09-9279-e3c33bff8965), label version 20251031. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared CYP substrate pool:** CYP3A4 (+204 others), CYP3A5 (+13 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[Cholinergic Load]]
- [[CYP450 Metabolism]]
