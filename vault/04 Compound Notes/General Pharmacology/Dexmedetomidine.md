---
type: compound
schema-version: 2
compound-id: dexmedetomidine-compound
name: Dexmedetomidine
aliases: []
cluster: General Pharmacology
group: analgesia
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL778
chembl-max-phase: 4
half-life:
  value: 1.8
  value-max: 3.7
  unit: h
  notes: 1.8–3.7 hours
protein-binding:
  value: 94.0
  value-max: null
  unit: percent
  notes: 94% (mostly albumin)
bioavailability:
  value: 16.0
  value-max: null
  notes: 'Oral: 16%; Sublingual: 72%; Buccal: 82%; Transdermal: 88%; Intramuscular: 73–104%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (95%), feces (4%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Near-complete hepatic metabolism to inactive metabolites
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
- sedation-respiratory-depression
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/analgesia
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Dexmedetomidine
  url: https://en.wikipedia.org/w/index.php?title=Dexmedetomidine&oldid=1374736005
  revision: 1374736005
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL778
  pref-name: DEXMEDETOMIDINE
  molecule-type: Small molecule
  first-approval: 1999
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N05CM18
  targets: []
  properties:
    full-mwt: 200.28
    mw-freebase: 200.28
    alogp: 3.18
    psa: 28.68
    hba: 1
    hbd: 1
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.79
    full-molformula: C13H16N2
pk-verification:
  source: fda-label
  status: consistent
  set-id: eee6145b-d83f-4596-92d3-733934d8a3a4
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=eee6145b-d83f-4596-92d3-733934d8a3a4
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Dexmedetomidine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dexmedetomidine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL778](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL778/) · max phase 4 · id via Wikipedia infobox

## Source summary

Highly selective alpha-2 agonist producing sedation that resembles natural sleep, with analgesia and no respiratory depression.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1999
- **ATC N05CM18:** NERVOUS SYSTEM › HYPNOTICS AND SEDATIVES › Other hypnotics and sedatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 200.28 | 3.18 | 28.68 | 1/1 | 0 | C13H16N2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dexmedetomidine*](https://en.wikipedia.org/w/index.php?title=Dexmedetomidine&oldid=1374736005) (revision 1374736005, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.8–3.7 h | 1.8–3.7 hours |
| Protein binding | 94 % | 94% (mostly albumin) |
| Bioavailability | 16 % | Oral: 16%; Sublingual: 72%; Buccal: 82%; Transdermal: 88%; Intramuscular: 73–104% |
| Metabolism | hepatic | Near-complete hepatic metabolism to inactive metabolites |
| Metabolites | - | Various |
| Excretion | mainly urinary | Urine (95%), feces (4%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set eee6145b…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=eee6145b-d83f-4596-92d3-733934d8a3a4), label version 20260805. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.1, 0.167, 0.583, 2, 2.67, 12)
> - protein-binding: consistent (label values: 94)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Clomethiazole]], [[Ethchlorvynol]], [[Hyoscine (Scopolamine)]], [[Methaqualone]], [[Propiomazine]], [[Triclofos]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
