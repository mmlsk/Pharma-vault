---
type: compound
schema-version: 2
compound-id: neostigmine-compound
name: Neostigmine
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: Acetylcholinesterase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL278020
chembl-max-phase: 4
half-life:
  value: 50.0
  value-max: 90.0
  unit: min
  notes: 50–90 minutes
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 5.0
  value-max: null
  notes: Unclear, probably less than 5%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.7
  notes: Unchanged drug (up to 70%) and alcoholic metabolite (30%) are excreted in the urine
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Slow hydrolysis by acetylcholinesterase and also by plasma esterases
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
- evidence-limited
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Neostigmine
  url: https://en.wikipedia.org/w/index.php?title=Neostigmine&oldid=1369821151
  revision: 1369821151
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL278020
  pref-name: NEOSTIGMINE
  molecule-type: Small molecule
  first-approval: 2013
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N07AA01
  - N07AA51
  - S01EB06
  targets: []
  properties:
    full-mwt: 223.3
    mw-freebase: 223.3
    alogp: 1.94
    psa: 29.54
    hba: 2
    hbd: 0
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.72
    full-molformula: C12H19N2O2+
pk-verification:
  source: fda-label
  status: consistent
  set-id: 95fb1b3d-be9a-fdb4-e053-2a95a90a5e90
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=95fb1b3d-be9a-fdb4-e053-2a95a90a5e90
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Neostigmine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `neostigmine-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL278020](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL278020/) · max phase 4 · id via source catalogue

## Source summary

Acetylcholinesterase inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL278020).

## Mechanism

Acetylcholinesterase inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2013
- **ATC N07AA01:** NERVOUS SYSTEM › PARASYMPATHOMIMETICS › Anticholinesterases
- **ATC N07AA51:** NERVOUS SYSTEM › PARASYMPATHOMIMETICS › Anticholinesterases
- **ATC S01EB06:** SENSORY ORGANS › ANTIGLAUCOMA PREPARATIONS AND MIOTICS › Parasympathomimetics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 223.3 | 1.94 | 29.54 | 0/2 | 0 | C12H19N2O2+ |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Neostigmine*](https://en.wikipedia.org/w/index.php?title=Neostigmine&oldid=1369821151) (revision 1369821151, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 50–90 min | 50–90 minutes |
| Bioavailability | 5 % | Unclear, probably less than 5% |
| Metabolism | - | Slow hydrolysis by acetylcholinesterase and also by plasma esterases |
| Excretion | - · fe 0.7 | Unchanged drug (up to 70%) and alcoholic metabolite (30%) are excreted in the urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 95fb1b3d…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=95fb1b3d-be9a-fdb4-e053-2a95a90a5e90), label version 20230515. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.4, 0.65, 0.8, 1.117, 1.745, 1.883)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Ambenonium]], [[Demecarium]], [[Distigmine]], [[Echothiophate]], [[Isoflurophate]], [[Physostigmine]], [[Pilocarpine]], [[Pyridostigmine (Mestinon)]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[Cholinergic Load]]
