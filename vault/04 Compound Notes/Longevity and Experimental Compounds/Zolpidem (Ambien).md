---
type: compound
schema-version: 2
compound-id: zolpidem-compound
name: Zolpidem (Ambien)
aliases:
- Zolpidem
- Ambien
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
chembl-id: CHEMBL911
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 3.0
  unit: h
  notes: 2–3 hours
protein-binding:
  value: 92.0
  value-max: null
  unit: percent
  notes: 92%
bioavailability:
  value: 70.0
  value-max: null
  notes: 70% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (56%); fecal (34%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver through CYP3A4 (~60%), CYP2C9 (~20%), and CYP1A2 (~14%)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2C9
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2C9, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Zolpidem
  url: https://en.wikipedia.org/w/index.php?title=Zolpidem&oldid=1369645518
  revision: 1369645518
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL911
  pref-name: ZOLPIDEM
  molecule-type: Small molecule
  first-approval: 1992
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N05CF02
  targets: []
  properties:
    full-mwt: 307.4
    mw-freebase: 307.4
    alogp: 3.25
    psa: 37.61
    hba: 3
    hbd: 0
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.74
    full-molformula: C19H21N3O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Zolpidem (Ambien)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `zolpidem-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Zolpidem, Ambien
- **ChEMBL:** [CHEMBL911](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL911/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Nonbenzodiazepine GABA-A hypnotic with next-day impairment, dependence, and boxed-warning complex sleep behaviors.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1992
- **Flags:** black-box warning
- **ATC N05CF02:** NERVOUS SYSTEM › HYPNOTICS AND SEDATIVES › Benzodiazepine related drugs

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 307.4 | 3.25 | 37.61 | 0/3 | 0 | C19H21N3O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Zolpidem*](https://en.wikipedia.org/w/index.php?title=Zolpidem&oldid=1369645518) (revision 1369645518, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–3 h | 2–3 hours |
| Protein binding | 92 % | 92% |
| Bioavailability | 70 % | 70% (by mouth) |
| Metabolism | hepatic | Liver through CYP3A4 (~60%), CYP2C9 (~20%), and CYP1A2 (~14%) |
| CYP (metabolised by) | CYP1A2, CYP2C9, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | (ZCA) zolpidem 6-carboxylic acid; (ZPCA) zolpidem phenyl-4-carboxylic acid |
| Excretion | mainly urinary | Kidney (56%); fecal (34%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Eszopiclone (Lunesta)]], [[Zaleplon (Sonata)]], [[Zopiclone]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP2C9 (+40 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
