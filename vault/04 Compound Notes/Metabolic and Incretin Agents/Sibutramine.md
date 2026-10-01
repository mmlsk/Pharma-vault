---
type: compound
schema-version: 2
compound-id: sibutramine-compound
name: Sibutramine
aliases: []
cluster: Metabolic and Incretin Agents
group: glp1
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1419
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: null
  unit: h
  notes: 1 hour (sibutramine), 14 hours (M1) & 16 hours (M2)
protein-binding:
  value: 97.0
  value-max: null
  unit: percent
  notes: 97%, (94% for its desmethyl metabolites, M1 & M2)
bioavailability:
  value: 77.0
  value-max: null
  notes: Absorption 77%, considerable first-pass metabolism
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (77%), feces (8%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP3A4-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- glucose-metabolism
- gastrointestinal
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/glp1
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Sibutramine
  url: https://en.wikipedia.org/w/index.php?title=Sibutramine&oldid=1374492573
  revision: 1374492573
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1419
  pref-name: SIBUTRAMINE
  molecule-type: Small molecule
  first-approval: 1997
  black-box-warning: false
  withdrawn: true
  atc-codes:
  - A08AA10
  targets: []
  properties:
    full-mwt: 279.86
    mw-freebase: 279.86
    alogp: 4.74
    psa: 3.24
    hba: 1
    hbd: 0
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.75
    full-molformula: C17H26ClN
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Sibutramine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sibutramine-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **ChEMBL:** [CHEMBL1419](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1419/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Withdrawn monoamine-reuptake appetite suppressant; cardiovascular-event risk makes it especially important to recognize in adulterated weight-loss products.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1997
- **Flags:** withdrawn
- **ATC A08AA10:** ALIMENTARY TRACT AND METABOLISM › ANTIOBESITY PREPARATIONS, EXCL. DIET PRODUCTS › Centrally acting antiobesity products

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 279.86 | 4.74 | 3.24 | 0/1 | 0 | C17H26ClN |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sibutramine*](https://en.wikipedia.org/w/index.php?title=Sibutramine&oldid=1374492573) (revision 1374492573, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1 h | 1 hour (sibutramine), 14 hours (M1) & 16 hours (M2) |
| Protein binding | 97 % | 97%, (94% for its desmethyl metabolites, M1 & M2) |
| Bioavailability | 77 % | Absorption 77%, considerable first-pass metabolism |
| Metabolism | hepatic | Hepatic (CYP3A4-mediated) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine (77%), feces (8%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Diethylpropion]], [[Ephedrine]], [[Fenfluramine]], [[Mazindol]], [[Phentermine]], [[Setmelanotide (Imcivree)]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
- [[Glucose and Incretin Signaling]]
