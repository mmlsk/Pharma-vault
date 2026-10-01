---
type: compound
schema-version: 2
compound-id: lacosamide-compound
name: Lacosamide
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Sodium channel alpha subunit blocker
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL58323
chembl-max-phase: 4
half-life:
  value: 13.0
  value-max: null
  unit: h
  notes: 13 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: High
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Lacosamide
  url: https://en.wikipedia.org/w/index.php?title=Lacosamide&oldid=1370264923
  revision: 1370264923
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL58323
  pref-name: LACOSAMIDE
  molecule-type: Small molecule
  first-approval: 2008
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N03AX18
  targets:
  - id: CHEMBL2331043
    name: Sodium channel alpha subunit
    action: BLOCKER
  properties:
    full-mwt: 250.3
    mw-freebase: 250.3
    alogp: 0.45
    psa: 67.43
    hba: 3
    hbd: 2
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.77
    full-molformula: C13H18N2O3
pk-verification:
  source: fda-label
  status: consistent
  set-id: 5b10986e-0809-b6d1-e063-6394a90a5738
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5b10986e-0809-b6d1-e063-6394a90a5738
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Lacosamide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lacosamide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL58323](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL58323/) · max phase 4 · id via Wikipedia infobox

## Source summary

Reduces high-frequency neuronal firing through voltage-gated sodium-channel modulation.

## Mechanism

Sodium channel alpha subunit blocker _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2008
- **ATC N03AX18:** NERVOUS SYSTEM › ANTIEPILEPTICS › Other antiepileptics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 250.3 | 0.45 | 67.43 | 2/3 | 0 | C13H18N2O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Sodium channel alpha subunit (CHEMBL2331043)|Sodium channel alpha subunit]] - blocker · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lacosamide*](https://en.wikipedia.org/w/index.php?title=Lacosamide&oldid=1370264923) (revision 1370264923, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 13 h | 13 hours |
| Bioavailability | - | High |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 5b10986e…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5b10986e-0809-b6d1-e063-6394a90a5738), label version 20260909. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.5, 7.2, 10.6, 12, 13, 14.8)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Carbamazepine]] (Sodium channel alpha subunit), [[Cenobamate]] (Sodium channel alpha subunit), [[Eslicarbazepine Acetate]] (Sodium channel alpha subunit), [[Evenamide]] (Sodium channel alpha subunit), [[Lamotrigine]] (Sodium channel alpha subunit), [[Lidocaine]] (Sodium channel alpha subunit), [[Oxcarbazepine]] (Sodium channel alpha subunit), [[Phenytoin]] (Sodium channel alpha subunit), [[Prilocaine]] (Sodium channel alpha subunit), [[Primidone]] (Sodium channel alpha subunit), [[Ralfinamide]] (Sodium channel alpha subunit), [[Riluzole (Rilutek)]] (Sodium channel alpha subunit)
- **Same ATC subgroup:** [[Brivaracetam]], [[Cannabidiol (Epidiolex)]], [[Cenobamate]], [[Felbamate]], [[Fenfluramine]], [[Ganaxolone]], [[Lamotrigine]], [[Levetiracetam]], [[Perampanel]], [[Pheneturide]], [[Retigabine (Ezogabine)]], [[Stiripentol]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
