---
type: compound
schema-version: 2
compound-id: phenobarbital-compound
name: Phenobarbital
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
chembl-id: CHEMBL40
chembl-max-phase: 4
half-life:
  value: 53.0
  value-max: 118.0
  unit: h
  notes: 53–118 hours
protein-binding:
  value: 20.0
  value-max: 45.0
  unit: percent
  notes: 20 to 45%
bioavailability:
  value: 95.0
  value-max: null
  notes: '>95%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney and fecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mostly CYP2C19)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- cns-activity
- serotonergic-or-dopaminergic-load
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/neuropsych
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Phenobarbital
  url: https://en.wikipedia.org/w/index.php?title=Phenobarbital&oldid=1376696621
  revision: 1376696621
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL40
  pref-name: PHENOBARBITAL
  molecule-type: Small molecule
  first-approval: 2022
  black-box-warning: true
  withdrawn: true
  atc-codes:
  - N03AA02
  targets: []
  properties:
    full-mwt: 232.24
    mw-freebase: 232.24
    alogp: 0.7
    psa: 75.27
    hba: 3
    hbd: 2
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.74
    full-molformula: C12H12N2O3
pk-verification:
  source: fda-label
  status: consistent
  set-id: 4e2910f2-173d-4b5c-aad3-44f4ab40d8cb
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4e2910f2-173d-4b5c-aad3-44f4ab40d8cb
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Phenobarbital

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `phenobarbital-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL40](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL40/) · max phase 4 · id via Wikipedia infobox

## Source summary

The oldest anticonvulsant still in use, a barbiturate that remains first-line for neonatal seizures and in low-resource settings.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2022
- **Flags:** black-box warning, withdrawn
- **ATC N03AA02:** NERVOUS SYSTEM › ANTIEPILEPTICS › Barbiturates and derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 232.24 | 0.7 | 75.27 | 2/3 | 0 | C12H12N2O3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Phenobarbital*](https://en.wikipedia.org/w/index.php?title=Phenobarbital&oldid=1376696621) (revision 1376696621, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 53–118 h | 53–118 hours |
| Protein binding | 20–45 % | 20 to 45% |
| Bioavailability | 95 % | >95% |
| Metabolism | hepatic | Liver (mostly CYP2C19) |
| CYP (metabolised by) | CYP2C19 | roles as inhibitor/inducer not assessed |
| Excretion | - | Kidney and fecal |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 4e2910f2…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4e2910f2-173d-4b5c-aad3-44f4ab40d8cb), label version 20260902. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 48, 53, 60, 79, 110, 118)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Metharbital]], [[Primidone]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
