---
type: compound
schema-version: 2
compound-id: distigmine-compound
name: Distigmine
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
chembl-id: CHEMBL1199307
chembl-max-phase: 4
half-life:
  value: 65.0
  value-max: null
  unit: h
  notes: 65 h
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 4.65
  value-max: null
  notes: 4.65%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: renal
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
pk-source:
  type: wikipedia-infobox
  title: Distigmine
  url: https://en.wikipedia.org/w/index.php?title=Distigmine&oldid=1357565674
  revision: 1357565674
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1199307
  pref-name: DISTIGMINE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N07AA03
  targets:
  - id: CHEMBL220
    name: Acetylcholinesterase
    action: INHIBITOR
  properties:
    full-mwt: 416.52
    mw-freebase: 416.52
    alogp: 2.46
    psa: 66.84
    hba: 4
    hbd: 0
    rtb: 9
    num-ro5-violations: 0
    qed-weighted: 0.47
    full-molformula: C22H32N4O4+2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Distigmine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `distigmine-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL1199307](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1199307/) · max phase 4 · id via source catalogue

## Source summary

Acetylcholinesterase inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL1199307).

## Mechanism

Acetylcholinesterase inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC N07AA03:** NERVOUS SYSTEM › PARASYMPATHOMIMETICS › Anticholinesterases

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 416.52 | 2.46 | 66.84 | 0/4 | 0 | C22H32N4O4+2 |

**Targets (ChEMBL curated mechanisms):**

- [[Acetylcholinesterase (CHEMBL220)|Acetylcholinesterase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Distigmine*](https://en.wikipedia.org/w/index.php?title=Distigmine&oldid=1357565674) (revision 1357565674, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 65 h | 65 h |
| Bioavailability | 4.65 % | 4.65% |
| Excretion | mainly urinary | renal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Echothiophate]] (Acetylcholinesterase), [[Huperzine A]] (Acetylcholinesterase), [[Isoflurophate]] (Acetylcholinesterase), [[Itopride]] (Acetylcholinesterase), [[Minaprine]] (Acetylcholinesterase), [[Propanidid]] (Acetylcholinesterase)
- **Same ATC subgroup:** [[Ambenonium]], [[Neostigmine]], [[Pyridostigmine (Mestinon)]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[Cholinergic Load]]
