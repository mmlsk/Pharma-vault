---
type: compound
schema-version: 2
compound-id: phenelzine-compound
name: Phenelzine
aliases: []
cluster: Nootropics
group: nootropic
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1089
chembl-max-phase: 4
half-life:
  value: 11.6
  value-max: null
  unit: h
  notes: 11.6 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
- cns-activity
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/nootropic
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Phenelzine
  url: https://en.wikipedia.org/w/index.php?title=Phenelzine&oldid=1369799230
  revision: 1369799230
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1089
  pref-name: PHENELZINE
  molecule-type: Small molecule
  first-approval: 1961
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06AF03
  targets: []
  properties:
    full-mwt: 136.2
    mw-freebase: 136.2
    alogp: 0.69
    psa: 38.05
    hba: 2
    hbd: 2
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.47
    full-molformula: C8H12N2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Phenelzine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `phenelzine-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL1089](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1089/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits monoamine oxidase to raise synaptic monoamines; selectivity and reversibility determine tyramine and serotonin-syndrome risk; irreversible non-selective, requires tyramine restriction.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1961
- **Flags:** black-box warning
- **ATC N06AF03:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Monoamine oxidase inhibitors, non-selective

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 136.2 | 0.69 | 38.05 | 2/2 | 0 | C8H12N2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Phenelzine*](https://en.wikipedia.org/w/index.php?title=Phenelzine&oldid=1369799230) (revision 1369799230, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 11.6 h | 11.6 hours |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Urine |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Isocarboxazid]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
