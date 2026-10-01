---
type: compound
schema-version: 2
compound-id: vecuronium-compound
name: Vecuronium
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
chembl-id: CHEMBL1201219
chembl-max-phase: 4
half-life:
  value: 51.0
  value-max: 80.0
  unit: min
  notes: 51–80 minutes (longer with kidney failure)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (IV)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: 0.3
  notes: Fecal (40–75%) and kidney (30% as unchanged drug and metabolites)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: liver 30%
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
- sedation-respiratory-depression
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/analgesia
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Vecuronium bromide
  url: https://en.wikipedia.org/w/index.php?title=Vecuronium_bromide&oldid=1338335222
  revision: 1338335222
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201219
  pref-name: VECURONIUM
  molecule-type: Small molecule
  first-approval: 1984
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - M03AC03
  targets: []
  properties:
    full-mwt: 557.84
    mw-freebase: 557.84
    alogp: 5.97
    psa: 55.84
    hba: 5
    hbd: 0
    rtb: 4
    num-ro5-violations: 2
    qed-weighted: 0.32
    full-molformula: C34H57N2O4+
pk-verification:
  source: fda-label
  status: consistent
  set-id: 582c7f44-b614-18df-e063-6294a90a74b6
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=582c7f44-b614-18df-e063-6294a90a74b6
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Vecuronium

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `vecuronium-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1201219](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201219/) · max phase 4 · id via Wikipedia infobox

## Source summary

Intermediate-acting steroidal relaxant with minimal cardiovascular effect, whose active metabolite accumulates in renal failure.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1984
- **Flags:** black-box warning
- **ATC M03AC03:** MUSCULO-SKELETAL SYSTEM › MUSCLE RELAXANTS, PERIPHERALLY ACTING AGENTS › Other quaternary ammonium compounds

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 557.84 | 5.97 | 55.84 | 0/5 | 2 | C34H57N2O4+ |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Vecuronium bromide*](https://en.wikipedia.org/w/index.php?title=Vecuronium_bromide&oldid=1338335222) (revision 1338335222, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 51–80 min | 51–80 minutes (longer with kidney failure) |
| Bioavailability | 100 % | 100% (IV) |
| Metabolism | hepatic | liver 30% |
| Excretion | mainly non-renal · fe 0.3 | Fecal (40–75%) and kidney (30% as unchanged drug and metabolites) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 582c7f44…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=582c7f44-b614-18df-e063-6294a90a74b6), label version 20260803. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.067, 0.583, 0.667, 1.083, 1.25)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Atracurium]], [[Cisatracurium]], [[Hexafluorenium]], [[Pancuronium]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
