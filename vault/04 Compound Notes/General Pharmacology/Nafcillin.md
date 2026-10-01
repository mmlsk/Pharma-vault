---
type: compound
schema-version: 2
compound-id: nafcillin-compound
name: Nafcillin
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1443
chembl-max-phase: 4
half-life:
  value: 0.5
  value-max: null
  unit: h
  notes: 0.5 hours
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: 90%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Biliary and renal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: <30% hepatic
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
- cyp-interactions
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Nafcillin
  url: https://en.wikipedia.org/w/index.php?title=Nafcillin&oldid=1320208042
  revision: 1320208042
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1443
  pref-name: NAFCILLIN
  molecule-type: Small molecule
  first-approval: 1965
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01CF06
  targets: []
  properties:
    full-mwt: 414.48
    mw-freebase: 414.48
    alogp: 2.48
    psa: 95.94
    hba: 5
    hbd: 2
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.73
    full-molformula: C21H22N2O5S
pk-verification:
  source: fda-label
  status: consistent
  set-id: 4d3b0076-3780-413f-9052-b23be5f18f01
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4d3b0076-3780-413f-9052-b23be5f18f01
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: consistent
---

# Nafcillin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nafcillin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1443](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1443/) · max phase 4 · id via Wikipedia infobox

## Source summary

Antistaphylococcal penicillin resistant to staphylococcal penicillinase, hepatically cleared so usable in renal failure.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1965
- **ATC J01CF06:** ANTIINFECTIVES FOR SYSTEMIC USE › BETA-LACTAM ANTIBACTERIALS, PENICILLINS › Beta-lactamase resistant penicillins

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 414.48 | 2.48 | 95.94 | 2/5 | 0 | C21H22N2O5S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nafcillin*](https://en.wikipedia.org/w/index.php?title=Nafcillin&oldid=1320208042) (revision 1320208042, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.5 h | 0.5 hours |
| Protein binding | 90 % | 90% |
| Metabolism | hepatic | <30% hepatic |
| Excretion | - | Biliary and renal |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 4d3b0076…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4d3b0076-3780-413f-9052-b23be5f18f01), label version 20260825. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: consistent (label values: 89.9)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
