---
type: compound
schema-version: 2
compound-id: pitolisant-compound
name: Pitolisant (Wakix)
aliases:
- Pitolisant
- Wakix
cluster: Nootropics
group: nootropic
class: null
subclass: null
mechanism: Histamine H3 receptor inverse agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL462605
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: 12.0
  unit: h
  notes: 10–12 hours
protein-binding:
  value: 91.0
  value-max: 96.0
  unit: percent
  notes: 91-96 %
bioavailability:
  value: 90.0
  value-max: null
  notes: 90 %
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP2D6, CYP3A4
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Pitolisant
  url: https://en.wikipedia.org/w/index.php?title=Pitolisant&oldid=1367387265
  revision: 1367387265
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL462605
  pref-name: PITOLISANT
  molecule-type: Small molecule
  first-approval: 2016
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N07XX11
  targets:
  - id: CHEMBL264
    name: Histamine H3 receptor
    action: INVERSE AGONIST
  properties:
    full-mwt: 295.85
    mw-freebase: 295.85
    alogp: 4.17
    psa: 12.47
    hba: 2
    hbd: 0
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.67
    full-molformula: C17H26ClNO
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Pitolisant (Wakix)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pitolisant-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **Aliases:** Pitolisant, Wakix
- **ChEMBL:** [CHEMBL462605](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL462605/) · max phase 4 · id via Wikipedia infobox

## Source summary

Histamine H3 inverse agonist for narcolepsy. Promotes wakefulness by raising central histamine rather than through dopamine, so it is non-scheduled.

## Mechanism

Histamine H3 receptor inverse agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2016
- **ATC N07XX11:** NERVOUS SYSTEM › OTHER NERVOUS SYSTEM DRUGS › Other nervous system drugs

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 295.85 | 4.17 | 12.47 | 0/2 | 0 | C17H26ClNO |

**Targets (ChEMBL curated mechanisms):**

- [[Histamine H3 receptor (CHEMBL264)|Histamine H3 receptor]] - inverse agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pitolisant*](https://en.wikipedia.org/w/index.php?title=Pitolisant&oldid=1367387265) (revision 1367387265, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–12 h | 10–12 hours |
| Protein binding | 91–96 % | 91-96 % |
| Bioavailability | 90 % | 90 % |
| Metabolism | hepatic | CYP2D6, CYP3A4 |
| CYP (metabolised by) | CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Betahistine]] (Histamine H3 receptor), [[Samelisant]] (Histamine H3 receptor)
- **Same ATC subgroup:** [[Amifampridine (3,4-Diaminopyridine)]], [[Deutetrabenazine]], [[Dextromethorphan]], [[Edaravone]], [[Inotersen (Tegsedi)]], [[Patisiran (Onpattro)]], [[Riluzole (Rilutek)]], [[Tafamidis (Vyndaqel)]], [[Tetrabenazine]], [[Troriluzole]], [[Valbenazine]], [[Vutrisiran (Amvuttra)]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
