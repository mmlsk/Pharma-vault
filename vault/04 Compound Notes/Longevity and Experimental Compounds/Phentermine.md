---
type: compound
schema-version: 2
compound-id: phentermine-compound
name: Phentermine
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: Norepinephrine transporter releasing agent
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1574
chembl-max-phase: 4
half-life:
  value: 20.0
  value-max: 25.0
  unit: h
  notes: 20–25 hours, urinary pH-dependent
protein-binding:
  value: 17.5
  value-max: null
  unit: percent
  notes: 17.5%
bioavailability:
  value: 100.0
  value-max: null
  notes: High (almost 100%)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.85
  notes: Urine (62–85% unchanged)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Minimal (6%)
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
  title: Phentermine
  url: https://en.wikipedia.org/w/index.php?title=Phentermine&oldid=1374263603
  revision: 1374263603
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1574
  pref-name: PHENTERMINE
  molecule-type: Small molecule
  first-approval: 1959
  black-box-warning: false
  withdrawn: true
  atc-codes:
  - A08AA01
  targets:
  - id: CHEMBL222
    name: Sodium-dependent noradrenaline transporter
    action: RELEASING AGENT
  properties:
    full-mwt: 149.24
    mw-freebase: 149.24
    alogp: 1.97
    psa: 26.02
    hba: 1
    hbd: 1
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.68
    full-molformula: C10H15N
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Phentermine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `phentermine-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL1574](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1574/) · max phase 4 · id via Wikipedia infobox

## Source summary

FDA-approved sympathomimetic appetite suppressant, most often prescribed combined with topiramate (Qsymia); the CONQUER trial found real, substantial weight loss and metabolic risk-factor improvement in a large randomized trial.

## Mechanism

Norepinephrine transporter releasing agent _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1959
- **Flags:** withdrawn
- **ATC A08AA01:** ALIMENTARY TRACT AND METABOLISM › ANTIOBESITY PREPARATIONS, EXCL. DIET PRODUCTS › Centrally acting antiobesity products

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 149.24 | 1.97 | 26.02 | 1/1 | 0 | C10H15N |

**Targets (ChEMBL curated mechanisms):**

- [[Sodium-dependent noradrenaline transporter (CHEMBL222)|Sodium-dependent noradrenaline transporter]] - releasing agent · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Phentermine*](https://en.wikipedia.org/w/index.php?title=Phentermine&oldid=1374263603) (revision 1374263603, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20–25 h | 20–25 hours, urinary pH-dependent |
| Protein binding | 17.5 % | 17.5% |
| Bioavailability | 100 % | High (almost 100%) |
| Metabolism | - | Minimal (6%) |
| Excretion | mainly urinary · fe 0.85 | Urine (62–85% unchanged) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Amoxapine]] (Sodium-dependent noradrenaline transporter), [[Amphetamine]] (Sodium-dependent noradrenaline transporter), [[Ampreloxetine]] (Sodium-dependent noradrenaline transporter), [[Debrisoquin]] (Sodium-dependent noradrenaline transporter), [[Desvenlafaxine]] (Sodium-dependent noradrenaline transporter), [[Dextroamphetamine]] (Sodium-dependent noradrenaline transporter), [[Dibenzepin]] (Sodium-dependent noradrenaline transporter), [[Dothiepin]] (Sodium-dependent noradrenaline transporter), [[MDMA]] (Sodium-dependent noradrenaline transporter), [[Methylphenidate (Ritalin - Concerta)|Methylphenidate (Ritalin / Concerta)]] (Sodium-dependent noradrenaline transporter), [[Serdexmethylphenidate]] (Sodium-dependent noradrenaline transporter)
- **Same ATC subgroup:** [[Diethylpropion]], [[Ephedrine]], [[Fenfluramine]], [[Mazindol]], [[Setmelanotide (Imcivree)]], [[Sibutramine]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
