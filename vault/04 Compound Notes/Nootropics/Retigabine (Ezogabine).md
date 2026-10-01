---
type: compound
schema-version: 2
compound-id: retigabine-compound
name: Retigabine (Ezogabine)
aliases:
- Retigabine
- Ezogabine
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: KCNQ (Kv7) potassium channel opener
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL41355
chembl-max-phase: 4
half-life:
  value: 8.0
  value-max: null
  unit: h
  notes: '8 hours (mean), range: 7–11 hours'
protein-binding:
  value: 60.0
  value-max: 80.0
  unit: percent
  notes: 60–80%
bioavailability:
  value: 60.0
  value-max: null
  notes: 60%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (84%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver glucuronidation and acetylation. CYP not involved
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Retigabine
  url: https://en.wikipedia.org/w/index.php?title=Retigabine&oldid=1364201705
  revision: 1364201705
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL41355
  pref-name: EZOGABINE
  molecule-type: Small molecule
  first-approval: 2011
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N03AX21
  targets:
  - id: CHEMBL2363063
    name: KCNQ (Kv7) potassium channel
    action: OPENER
  properties:
    full-mwt: 303.34
    mw-freebase: 303.34
    alogp: 3.59
    psa: 76.38
    hba: 4
    hbd: 3
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.74
    full-molformula: C16H18FN3O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Retigabine (Ezogabine)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `retigabine-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **Aliases:** Retigabine, Ezogabine
- **ChEMBL:** [CHEMBL41355](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL41355/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Withdrawn Kv7 channel opener, the first anticonvulsant with that mechanism, retired for blue skin and retinal pigment deposits.

## Mechanism

KCNQ (Kv7) potassium channel opener _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2011
- **Flags:** black-box warning
- **ATC N03AX21:** NERVOUS SYSTEM › ANTIEPILEPTICS › Other antiepileptics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 303.34 | 3.59 | 76.38 | 3/4 | 0 | C16H18FN3O2 |

**Targets (ChEMBL curated mechanisms):**

- [[KCNQ (Kv7) potassium channel (CHEMBL2363063)|KCNQ (Kv7) potassium channel]] - opener · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Retigabine*](https://en.wikipedia.org/w/index.php?title=Retigabine&oldid=1364201705) (revision 1364201705, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8 h | 8 hours (mean), range: 7–11 hours |
| Protein binding | 60–80 % | 60–80% |
| Bioavailability | 60 % | 60% |
| Metabolism | hepatic | Liver glucuronidation and acetylation. CYP not involved |
| Excretion | mainly urinary | Kidney (84%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Brivaracetam]], [[Cannabidiol (Epidiolex)]], [[Cenobamate]], [[Felbamate]], [[Fenfluramine]], [[Ganaxolone]], [[Lacosamide]], [[Lamotrigine]], [[Levetiracetam]], [[Perampanel]], [[Pheneturide]], [[Stiripentol]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
