---
type: compound
schema-version: 2
compound-id: diphenhydramine-compound
name: Diphenhydramine (Benadryl)
aliases:
- Diphenhydramine
- Benadryl
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
chembl-id: CHEMBL657
chembl-max-phase: 4
half-life:
  value: 2.4
  value-max: 13.5
  unit: h
  notes: 'Range: 2.4–13.5 hours'
protein-binding:
  value: 78.0
  value-max: 85.0
  unit: percent
  notes: 78-85%
bioavailability:
  value: 40.0
  value-max: 60.0
  notes: 40–60%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: 94%; Feces: 6%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2D6, others)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Diphenhydramine
  url: https://en.wikipedia.org/w/index.php?title=Diphenhydramine&oldid=1369453675
  revision: 1369453675
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL657
  pref-name: DIPHENHYDRAMINE
  molecule-type: Small molecule
  first-approval: 1946
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - D04AA32
  - R06AA02
  - R06AA52
  targets: []
  properties:
    full-mwt: 255.36
    mw-freebase: 255.36
    alogp: 3.35
    psa: 12.47
    hba: 2
    hbd: 0
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.78
    full-molformula: C17H21NO
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Diphenhydramine (Benadryl)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `diphenhydramine-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Diphenhydramine, Benadryl
- **ChEMBL:** [CHEMBL657](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL657/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

First-generation antihistamine widely used as an OTC sleep aid despite rapid tolerance, next-day impairment, and anticholinergic burden.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1946
- **ATC D04AA32:** DERMATOLOGICALS › ANTIPRURITICS, INCL. ANTIHISTAMINES, ANESTHETICS, ETC. › Antihistamines for topical use
- **ATC R06AA02:** RESPIRATORY SYSTEM › ANTIHISTAMINES FOR SYSTEMIC USE › Aminoalkyl ethers
- **ATC R06AA52:** RESPIRATORY SYSTEM › ANTIHISTAMINES FOR SYSTEMIC USE › Aminoalkyl ethers

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 255.36 | 3.35 | 12.47 | 0/2 | 0 | C17H21NO |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Diphenhydramine*](https://en.wikipedia.org/w/index.php?title=Diphenhydramine&oldid=1369453675) (revision 1369453675, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.4–13.5 h | Range: 2.4–13.5 hours |
| Protein binding | 78–85 % | 78-85% |
| Bioavailability | 40–60 % | 40–60% |
| Metabolism | hepatic | Liver (CYP2D6, others) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | N-Desmethyldiphenhydramine, N,N-Didesmethyldiphenhydramine, others |
| Excretion | mainly urinary | Urine: 94%; Feces: 6% |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Bromodiphenhydramine]], [[Carbinoxamine]], [[Chlorphenoxamine]], [[Clemastine]], [[Dimenhydrinate]], [[Dimethindene]], [[Diphenylpyraline]], [[Doxylamine]], [[Pheniramine]], [[Promethazine]], [[Pyrilamine]], [[Thenalidine]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[Cholinergic Load]]
- [[CYP450 Metabolism]]
