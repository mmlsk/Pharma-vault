---
type: compound
schema-version: 2
compound-id: bupropion-compound
name: Bupropion (Wellbutrin)
aliases:
- Bupropion
- Wellbutrin
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
chembl-id: CHEMBL894
chembl-max-phase: 4
half-life:
  value: 11.0
  value-max: null
  unit: h
  notes: 'Bupropion:; *alpha: 0.5–1.04; *beta: 11 h; Hydroxybupropion: 20 h; Threohydrobupropion: 37 h; Erythrohydrobupropion: 33 h'
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: Unknown
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, intestines (CYP2B6, others)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2B6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2B6 (from metabolism field); inhibitor/inducer roles not assessed
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
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Bupropion
  url: https://en.wikipedia.org/w/index.php?title=Bupropion&oldid=1375206575
  revision: 1375206575
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL894
  pref-name: BUPROPION
  molecule-type: Small molecule
  first-approval: 1985
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06AX12
  targets: []
  properties:
    full-mwt: 239.75
    mw-freebase: 239.75
    alogp: 3.3
    psa: 29.1
    hba: 2
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.82
    full-molformula: C13H18ClNO
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 8d937ca3-3351-40f1-8192-348ba0c68162
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8d937ca3-3351-40f1-8192-348ba0c68162
  checked: '2026-10-01'
  fields:
    half-life: discrepant
---

# Bupropion (Wellbutrin)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `bupropion-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **Aliases:** Bupropion, Wellbutrin
- **ChEMBL:** [CHEMBL894](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL894/) · max phase 4 · id via Wikipedia infobox

## Source summary

Norepinephrine/dopamine reuptake inhibitor used for depression and smoking cessation and combined with naltrexone for obesity; can raise blood pressure and seizure risk.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1985
- **Flags:** black-box warning
- **ATC N06AX12:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Other antidepressants

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 239.75 | 3.3 | 29.1 | 1/2 | 0 | C13H18ClNO |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Bupropion*](https://en.wikipedia.org/w/index.php?title=Bupropion&oldid=1375206575) (revision 1375206575, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 11 h | Bupropion:; *alpha: 0.5–1.04; *beta: 11 h; Hydroxybupropion: 20 h; Threohydrobupropion: 37 h; Erythrohydrobupropion: 33 h |
| Bioavailability | - | Unknown |
| Metabolism | hepatic | Liver, intestines (CYP2B6, others) |
| CYP (metabolised by) | CYP2B6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Hydroxybupropion; Threohydrobupropion; Erythrohydrobupropion; Others |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 8d937ca3…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8d937ca3-3351-40f1-8192-348ba0c68162), label version 20240521. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 19, 21, 29, 32)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Agomelatine (Valdoxan)]], [[Brexanolone]], [[Desvenlafaxine]], [[Duloxetine (Cymbalta)]], [[Esketamine (Spravato)]], [[Levomilnacipran]], [[Minaprine]], [[Mirtazapine]], [[Nefazodone]], [[Tianeptine]], [[Trazodone (Desyrel)]], [[Venlafaxine (Effexor)]]
- **Shared CYP substrate pool:** CYP2B6 (+12 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
- [[Glucose and Incretin Signaling]]
