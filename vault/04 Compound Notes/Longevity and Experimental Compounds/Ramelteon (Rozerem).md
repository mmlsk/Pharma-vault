---
type: compound
schema-version: 2
compound-id: ramelteon-compound
name: Ramelteon (Rozerem)
aliases:
- Ramelteon
- Rozerem
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
chembl-id: CHEMBL133775
chembl-max-phase: null
half-life:
  value: 1.0
  value-max: 2.6
  unit: h
  notes: 'Ramelteon: 1–2.6 hours; M-II: 2–5 hours'
protein-binding:
  value: 82.0
  value-max: null
  unit: percent
  notes: 82% (mainly albumin)
bioavailability:
  value: 1.8
  value-max: null
  notes: 1.8%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Kidney: 84%; Feces: 4%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP1A2 major, CYP2C and CYP3A4 minor)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- identity-stereo-check
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Ramelteon
  url: https://en.wikipedia.org/w/index.php?title=Ramelteon&oldid=1362641733
  revision: 1362641733
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL133775
  pref-name: (R)-RAMELTEON
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 259.35
    mw-freebase: 259.35
    alogp: 2.57
    psa: 38.33
    hba: 2
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.9
    full-molformula: C16H21NO2
  identity-check: connectivity-match
pk-verification:
  source: fda-label
  status: consistent
  set-id: 5a3cf917-3569-4fc1-8b81-ffecfd2de005
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5a3cf917-3569-4fc1-8b81-ffecfd2de005
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Ramelteon (Rozerem)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ramelteon-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Ramelteon, Rozerem
- **ChEMBL:** [CHEMBL133775](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL133775/) · max phase n/a · id via Wikipedia infobox · structure check: ⚠️ same skeleton, stereo/isotope layer differs

## Source summary

MT1/MT2 melatonin-receptor agonist approved for sleep-onset insomnia, non-controlled and generally less impairing than GABAergic hypnotics.

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 259.35 | 2.57 | 38.33 | 1/2 | 0 | C16H21NO2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ramelteon*](https://en.wikipedia.org/w/index.php?title=Ramelteon&oldid=1362641733) (revision 1362641733, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–2.6 h | Ramelteon: 1–2.6 hours; M-II: 2–5 hours |
| Protein binding | 82 % | 82% (mainly albumin) |
| Bioavailability | 1.8 % | 1.8% |
| Metabolism | hepatic | Liver (CYP1A2 major, CYP2C and CYP3A4 minor) |
| CYP (metabolised by) | CYP1A2, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | M-II (active metabolite) |
| Excretion | mainly urinary | Kidney: 84%; Feces: 4% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 5a3cf917…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5a3cf917-3569-4fc1-8b81-ffecfd2de005), label version 20260901. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2.6)
> - protein-binding: consistent (label values: 82)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
