---
type: compound
schema-version: 2
compound-id: doxylamine-compound
name: Doxylamine
aliases: []
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
chembl-id: CHEMBL1004
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: 12.0
  unit: h
  notes: 10–12 hours (range 7–15 hours)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 24.7
  value-max: null
  notes: 'Oral: 24.7%; Intranasal: 70.8%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (60%), feces (40%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP2D6, CYP1A2, CYP2C9)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2C9
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2C9, CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Doxylamine
  url: https://en.wikipedia.org/w/index.php?title=Doxylamine&oldid=1374112637
  revision: 1374112637
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1004
  pref-name: DOXYLAMINE
  molecule-type: Small molecule
  first-approval: 1948
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - R06AA09
  - R06AA59
  targets: []
  properties:
    full-mwt: 270.38
    mw-freebase: 270.38
    alogp: 2.92
    psa: 25.36
    hba: 3
    hbd: 0
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.81
    full-molformula: C17H22N2O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Doxylamine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `doxylamine-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL1004](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1004/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Sedating first-generation antihistamine used OTC for short-term insomnia and in pregnancy nausea combinations; tolerance and anticholinergic effects limit repeated use.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1948
- **ATC R06AA09:** RESPIRATORY SYSTEM › ANTIHISTAMINES FOR SYSTEMIC USE › Aminoalkyl ethers
- **ATC R06AA59:** RESPIRATORY SYSTEM › ANTIHISTAMINES FOR SYSTEMIC USE › Aminoalkyl ethers

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 270.38 | 2.92 | 25.36 | 0/3 | 0 | C17H22N2O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Doxylamine*](https://en.wikipedia.org/w/index.php?title=Doxylamine&oldid=1374112637) (revision 1374112637, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–12 h | 10–12 hours (range 7–15 hours) |
| Bioavailability | 24.7 % | Oral: 24.7%; Intranasal: 70.8% |
| Metabolism | hepatic | Hepatic (CYP2D6, CYP1A2, CYP2C9) |
| CYP (metabolised by) | CYP1A2, CYP2C9, CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine (60%), feces (40%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Bromodiphenhydramine]], [[Carbinoxamine]], [[Chlorphenoxamine]], [[Clemastine]], [[Dimenhydrinate]], [[Diphenhydramine (Benadryl)]], [[Diphenylpyraline]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP2C9 (+40 others), CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[Cholinergic Load]]
- [[CYP450 Metabolism]]
