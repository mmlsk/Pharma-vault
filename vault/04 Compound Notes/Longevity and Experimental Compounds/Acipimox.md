---
type: compound
schema-version: 2
compound-id: acipimox-compound
name: Acipimox
aliases:
- Olbetam
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: Unknown
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL345714
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: null
  unit: h
  notes: 'Phase 1: 2 hrs; Phase 2: 12–14 hrs'
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: None
bioavailability:
  value: 100.0
  value-max: null
  notes: 100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: None
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Acipimox
  url: https://en.wikipedia.org/w/index.php?title=Acipimox&oldid=1329963383
  revision: 1329963383
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL345714
  pref-name: ACIPIMOX
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C10AD06
  targets: []
  properties:
    full-mwt: 154.12
    mw-freebase: 154.12
    alogp: -0.28
    psa: 77.13
    hba: 3
    hbd: 1
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.45
    full-molformula: C6H6N2O3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Acipimox

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `acipimox-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Olbetam
- **ChEMBL:** [CHEMBL345714](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL345714/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Nicotinic-acid analogue and anti-lipolytic drug used for hypertriglyceridaemia in some countries. Controlled human studies show lower free fatty acids and triglycerides; flushing and metabolic tradeoffs still matter.

## Mechanism

Unknown _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC C10AD06:** CARDIOVASCULAR SYSTEM › LIPID MODIFYING AGENTS, PLAIN › Nicotinic acid and derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 154.12 | -0.28 | 77.13 | 1/3 | 0 | C6H6N2O3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Acipimox*](https://en.wikipedia.org/w/index.php?title=Acipimox&oldid=1329963383) (revision 1329963383, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | Phase 1: 2 hrs; Phase 2: 12–14 hrs |
| Protein binding | - | None |
| Bioavailability | 100 % | 100% |
| Metabolism | - | None |
| Excretion | mainly urinary | Renal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Niacin (extended-release)]], [[Niacin (Nicotinic Acid)]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[Cholinergic Load]]
