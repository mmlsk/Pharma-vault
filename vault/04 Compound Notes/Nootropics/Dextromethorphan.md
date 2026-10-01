---
type: compound
schema-version: 2
compound-id: dextromethorphan-compound
name: Dextromethorphan
aliases: []
cluster: Nootropics
group: nootropic
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL52440
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 4.0
  unit: h
  notes: 2–4 hours (extensive metabolizers); 24 hours (poor metabolizers)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 11.0
  value-max: null
  notes: 11%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver enzymes: major CYP2D6, minor CYP3A4, and minor CYP3A5'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6, CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- cns-activity
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/nootropic
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Dextromethorphan
  url: https://en.wikipedia.org/w/index.php?title=Dextromethorphan&oldid=1374989705
  revision: 1374989705
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL52440
  pref-name: DEXTROMETHORPHAN
  molecule-type: Small molecule
  first-approval: 1982
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N07XX59
  - R05DA09
  targets: []
  properties:
    full-mwt: 271.4
    mw-freebase: 271.4
    alogp: 3.38
    psa: 12.47
    hba: 2
    hbd: 0
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.78
    full-molformula: C18H25NO
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Dextromethorphan

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dextromethorphan-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL52440](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL52440/) · max phase 4 · id via Wikipedia infobox

## Source summary

Engages the sigma-1 chaperone at the ER-mitochondrial interface, modulating calcium handling and ER stress responses; sigma-1 agonist and NMDA antagonist.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1982
- **ATC N07XX59:** NERVOUS SYSTEM › OTHER NERVOUS SYSTEM DRUGS › Other nervous system drugs
- **ATC R05DA09:** RESPIRATORY SYSTEM › COUGH SUPPRESSANTS, EXCL. COMBINATIONS WITH EXPECTORANTS › Opium alkaloids and derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 271.4 | 3.38 | 12.47 | 0/2 | 0 | C18H25NO |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dextromethorphan*](https://en.wikipedia.org/w/index.php?title=Dextromethorphan&oldid=1374989705) (revision 1374989705, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–4 h | 2–4 hours (extensive metabolizers); 24 hours (poor metabolizers) |
| Bioavailability | 11 % | 11% |
| Metabolism | hepatic | Liver enzymes: major CYP2D6, minor CYP3A4, and minor CYP3A5 |
| CYP (metabolised by) | CYP2D6, CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Dextrorphan; 3-methoxymorphinan |
| Excretion | mainly urinary | Kidney |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Amifampridine (3,4-Diaminopyridine)]], [[Codeine]], [[Deutetrabenazine]], [[Edaravone]], [[Inotersen (Tegsedi)]], [[Patisiran (Onpattro)]], [[Pitolisant (Wakix)]], [[Riluzole (Rilutek)]], [[Tafamidis (Vyndaqel)]], [[Tetrabenazine]], [[Troriluzole]], [[Valbenazine]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others), CYP3A4 (+204 others), CYP3A5 (+13 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
