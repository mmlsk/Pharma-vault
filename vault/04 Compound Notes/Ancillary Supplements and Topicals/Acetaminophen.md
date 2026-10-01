---
type: compound
schema-version: 2
compound-id: acetaminophen-compound
name: Acetaminophen
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Cyclooxygenase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL112
chembl-max-phase: 4
half-life:
  value: 1.9
  value-max: 2.5
  unit: h
  notes: 1.9–2.5 hours
protein-binding:
  value: 10.0
  value-max: 25.0
  unit: percent
  notes: negligible to 10–25% in overdose
bioavailability:
  value: 63.0
  value-max: 89.0
  notes: 63–89%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Predominantly in the liver
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
- needs-compound-review
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Paracetamol
  url: https://en.wikipedia.org/w/index.php?title=Paracetamol&oldid=1376620920
  revision: 1376620920
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL112
  pref-name: ACETAMINOPHEN
  molecule-type: Small molecule
  first-approval: 1968
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N02BE01
  - N02BE51
  - N02BE71
  targets:
  - id: CHEMBL2094253
    name: Cyclooxygenase
    action: INHIBITOR
  - id: CHEMBL2243
    name: Fatty-acid amide hydrolase 1
    action: INHIBITOR
  - id: CHEMBL4794
    name: Transient receptor potential cation channel subfamily V member 1
    action: OPENER
  properties:
    full-mwt: 151.16
    mw-freebase: 151.16
    alogp: 1.35
    psa: 49.33
    hba: 2
    hbd: 2
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.6
    full-molformula: C8H9NO2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Acetaminophen

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `acetaminophen-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL112](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL112/) · max phase 4 · id via source catalogue

## Source summary

Cyclooxygenase inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL112).

## Mechanism

Cyclooxygenase inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1968
- **Flags:** black-box warning
- **ATC N02BE01:** NERVOUS SYSTEM › OTHER ANALGESICS AND ANTIPYRETICS › Anilides
- **ATC N02BE51:** NERVOUS SYSTEM › OTHER ANALGESICS AND ANTIPYRETICS › Anilides
- **ATC N02BE71:** NERVOUS SYSTEM › OTHER ANALGESICS AND ANTIPYRETICS › Anilides

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 151.16 | 1.35 | 49.33 | 2/2 | 0 | C8H9NO2 |

**Targets (ChEMBL curated mechanisms):**

- [[Cyclooxygenase (CHEMBL2094253)|Cyclooxygenase]] - inhibitor · PROTEIN FAMILY
- [[Fatty-acid amide hydrolase 1 (CHEMBL2243)|Fatty-acid amide hydrolase 1]] - inhibitor · SINGLE PROTEIN
- [[Transient receptor potential cation channel subfamily V member 1 (CHEMBL4794)|Transient receptor potential cation channel subfamily V member 1]] - opener · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Paracetamol*](https://en.wikipedia.org/w/index.php?title=Paracetamol&oldid=1376620920) (revision 1376620920, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.9–2.5 h | 1.9–2.5 hours |
| Protein binding | 10–25 % | negligible to 10–25% in overdose |
| Bioavailability | 63–89 % | 63–89% |
| Metabolism | hepatic | Predominantly in the liver |
| Metabolites | - | APAP gluc, APAP sulfate, APAP GSH, APAP cys, AM404, NAPQI |
| Excretion | mainly urinary | Kidney |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acemetacin]] (Cyclooxygenase), [[Aloxiprin]] (Cyclooxygenase), [[Aspirin]] (Cyclooxygenase), [[Benzydamine]] (Cyclooxygenase), [[Bismuth Subsalicylate]] (Cyclooxygenase), [[Capsaicin]] (Transient receptor potential cation channel subfamily V member 1), [[Civamide]] (Transient receptor potential cation channel subfamily V member 1), [[Clometacin]] (Cyclooxygenase), [[Dexibuprofen]] (Cyclooxygenase), [[Dexketoprofen]] (Cyclooxygenase), [[Diclofenac]] (Cyclooxygenase), [[Diflunisal]] (Cyclooxygenase)
- **Same ATC subgroup:** [[Phenacetin]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
