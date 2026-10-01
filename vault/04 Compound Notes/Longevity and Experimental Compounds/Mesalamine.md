---
type: compound
schema-version: 2
compound-id: mesalamine-compound
name: Mesalamine
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: Peroxisome proliferator-activated receptor gamma agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL704
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: null
  unit: h
  notes: 5 hours after initial dose.; At steady state 7 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 20.0
  value-max: 30.0
  notes: 'Oral: 20–30% ; Rectal: 10–35%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Rapidly and extensively metabolized intestinal mucosal wall and the liver
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
- pk-fda-discrepant
- possible-duplicate
pk-source:
  type: wikipedia-infobox
  title: Mesalazine
  url: https://en.wikipedia.org/w/index.php?title=Mesalazine&oldid=1369100049
  revision: 1369100049
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL704
  pref-name: MESALAMINE
  molecule-type: Small molecule
  first-approval: 1987
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A07EC02
  targets:
  - id: CHEMBL215
    name: Polyunsaturated fatty acid 5-lipoxygenase
    action: INHIBITOR
  - id: CHEMBL235
    name: Peroxisome proliferator-activated receptor gamma
    action: AGONIST
  - id: CHEMBL2094253
    name: Cyclooxygenase
    action: INHIBITOR
  properties:
    full-mwt: 153.14
    mw-freebase: 153.14
    alogp: 0.67
    psa: 83.55
    hba: 3
    hbd: 3
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.41
    full-molformula: C7H7NO3
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 7951139c-b271-45a4-b523-34b23800917b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7951139c-b271-45a4-b523-34b23800917b
  checked: '2026-10-01'
  fields:
    half-life: discrepant
---

# Mesalamine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `mesalamine-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL704](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL704/) · max phase 4 · id via source catalogue

## Source summary

Peroxisome proliferator-activated receptor gamma agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL704).

## Mechanism

Peroxisome proliferator-activated receptor gamma agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1987
- **ATC A07EC02:** ALIMENTARY TRACT AND METABOLISM › INTESTINAL ANTIINFLAMMATORY AGENTS › Aminosalicylic acid and similar agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 153.14 | 0.67 | 83.55 | 3/3 | 0 | C7H7NO3 |

**Targets (ChEMBL curated mechanisms):**

- [[Polyunsaturated fatty acid 5-lipoxygenase (CHEMBL215)|Polyunsaturated fatty acid 5-lipoxygenase]] - inhibitor · SINGLE PROTEIN
- [[Peroxisome proliferator-activated receptor gamma (CHEMBL235)|Peroxisome proliferator-activated receptor gamma]] - agonist · SINGLE PROTEIN
- [[Cyclooxygenase (CHEMBL2094253)|Cyclooxygenase]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Mesalazine*](https://en.wikipedia.org/w/index.php?title=Mesalazine&oldid=1369100049) (revision 1369100049, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5 h | 5 hours after initial dose.; At steady state 7 hours |
| Bioavailability | 20–30 % | Oral: 20–30% ; Rectal: 10–35% |
| Metabolism | hepatic | Rapidly and extensively metabolized intestinal mucosal wall and the liver |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 7951139c…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7951139c-b271-45a4-b523-34b23800917b), label version 20260827. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 9, 10, 12, 14, 96, 168)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- ⚠️ **Same molecule in ChEMBL (formulation variant or possible duplicate):** [[Mesalazine (5-ASA)]]
- **Shared target:** [[Mesalazine (5-ASA)]] (Cyclooxygenase; Peroxisome proliferator-activated receptor gamma; Polyunsaturated fatty acid 5-lipoxygenase), [[Sulfasalazine]] (Cyclooxygenase; Polyunsaturated fatty acid 5-lipoxygenase), [[Acemetacin]] (Cyclooxygenase), [[Acetaminophen]] (Cyclooxygenase), [[Aleglitazar]] (Peroxisome proliferator-activated receptor gamma), [[Aloxiprin]] (Cyclooxygenase), [[Aspirin]] (Cyclooxygenase), [[Balaglitazone]] (Peroxisome proliferator-activated receptor gamma), [[Bardoxolone Methyl]] (Peroxisome proliferator-activated receptor gamma), [[Benzydamine]] (Cyclooxygenase), [[Bismuth Subsalicylate]] (Cyclooxygenase), [[Clometacin]] (Cyclooxygenase)
- **Same ATC subgroup:** [[Balsalazide]], [[Mesalazine (5-ASA)]], [[Olsalazine]], [[Sulfasalazine]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
