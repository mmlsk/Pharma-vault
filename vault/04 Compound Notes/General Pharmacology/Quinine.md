---
type: compound
schema-version: 2
compound-id: quinine-compound
name: Quinine
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL170
chembl-max-phase: 4
half-life:
  value: 8.0
  value-max: 14.0
  unit: h
  notes: 8–14 hours (adults), 6–12 hours (children)
protein-binding:
  value: 70.0
  value-max: 95.0
  unit: percent
  notes: 70–95%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (20%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mostly CYP3A4 and CYP2C19-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- cyp-interactions
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- identity-stereo-check
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Quinine
  url: https://en.wikipedia.org/w/index.php?title=Quinine&oldid=1373786693
  revision: 1373786693
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL170
  pref-name: QUININE
  molecule-type: Small molecule
  first-approval: 2005
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - M09AA72
  - P01BC01
  targets: []
  properties:
    full-mwt: 324.42
    mw-freebase: 324.42
    alogp: 3.17
    psa: 45.59
    hba: 4
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.88
    full-molformula: C20H24N2O2
  identity-check: connectivity-match
pk-verification:
  source: fda-label
  status: consistent
  set-id: f567d5c7-ea5d-49a7-a035-b47208135f73
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f567d5c7-ea5d-49a7-a035-b47208135f73
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Quinine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `quinine-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL170](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL170/) · max phase 4 · id via Wikipedia infobox · structure check: ⚠️ same skeleton, stereo/isotope layer differs

## Source summary

The original antimalarial, still used for severe falciparum malaria and misused for leg cramps, with a well-characterised toxidrome.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2005
- **Flags:** black-box warning
- **ATC M09AA72:** MUSCULO-SKELETAL SYSTEM › OTHER DRUGS FOR DISORDERS OF THE MUSCULO-SKELETAL SYSTEM › Quinine and derivatives
- **ATC P01BC01:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › ANTIMALARIALS › Methanolquinolines

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 324.42 | 3.17 | 45.59 | 1/4 | 0 | C20H24N2O2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Quinine*](https://en.wikipedia.org/w/index.php?title=Quinine&oldid=1373786693) (revision 1373786693, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8–14 h | 8–14 hours (adults), 6–12 hours (children) |
| Protein binding | 70–95 % | 70–95% |
| Metabolism | hepatic | Liver (mostly CYP3A4 and CYP2C19-mediated) |
| CYP (metabolised by) | CYP2C19, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney (20%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set f567d5c7…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f567d5c7-ea5d-49a7-a035-b47208135f73), label version 20241209. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 4, 4.6, 7.5, 8, 8.1, 8.2)
> - protein-binding: consistent (label values: 69, 78, 92, 95)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Mefloquine]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
