---
type: compound
schema-version: 2
compound-id: glycopyrrolate-compound
name: Glycopyrrolate
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201027
chembl-max-phase: 4
half-life:
  value: 0.6
  value-max: 1.2
  unit: h
  notes: 0.6–1.2 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 85% Kidney, unknown amount in the bile
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Glycopyrronium bromide
  url: https://en.wikipedia.org/w/index.php?title=Glycopyrronium_bromide&oldid=1362581134
  revision: 1362581134
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201335
  pref-name: GLYCOPYRRONIUM BROMIDE
  molecule-type: Small molecule
  first-approval: 1961
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A03AB02
  - D11AA01
  - R03BB06
  targets: []
  properties:
    full-mwt: 318.44
    mw-freebase: 318.44
    alogp: 2.46
    psa: 46.53
    hba: 3
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.69
    full-molformula: C19H28NO3+
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 62e1ba35-bc84-4818-be54-8b534a1bf93c
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=62e1ba35-bc84-4818-be54-8b534a1bf93c
  checked: '2026-10-01'
  fields:
    half-life: discrepant
---

# Glycopyrrolate

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `glycopyrrolate-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1201027](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201027/) · max phase 4 · id via Wikipedia infobox

## Source summary

Antagonises muscarinic receptors; peripheral selectivity determines how much dry mouth, constipation and central anticholinergic burden an agent carries; quaternary, antisecretory.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1961
- **ATC A03AB02:** ALIMENTARY TRACT AND METABOLISM › DRUGS FOR FUNCTIONAL GASTROINTESTINAL DISORDERS › Synthetic anticholinergics, quaternary ammonium compounds
- **ATC D11AA01:** DERMATOLOGICALS › OTHER DERMATOLOGICAL PREPARATIONS › Antihidrotics
- **ATC R03BB06:** RESPIRATORY SYSTEM › OTHER DRUGS FOR OBSTRUCTIVE AIRWAY DISEASES, INHALANTS › Anticholinergics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 318.44 | 2.46 | 46.53 | 1/3 | 0 | C19H28NO3+ |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Glycopyrronium bromide*](https://en.wikipedia.org/w/index.php?title=Glycopyrronium_bromide&oldid=1362581134) (revision 1362581134, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.6–1.2 h | 0.6–1.2 hours |
| Excretion | mainly urinary | 85% Kidney, unknown amount in the bile |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 62e1ba35…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=62e1ba35-bc84-4818-be54-8b534a1bf93c), label version 20260910. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 3, 3.1)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Ipratropium]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[Cholinergic Load]]
