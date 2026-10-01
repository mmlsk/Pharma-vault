---
type: compound
schema-version: 2
compound-id: oxcarbazepine-compound
name: Oxcarbazepine
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
chembl-id: CHEMBL1068
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: 5.0
  unit: h
  notes: 1–5 hours (healthy adults)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 95.0
  value-max: null
  notes: '>95%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (<1%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (cytosolic enzymes and glucuronic acid)
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
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Oxcarbazepine
  url: https://en.wikipedia.org/w/index.php?title=Oxcarbazepine&oldid=1356507495
  revision: 1356507495
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1068
  pref-name: OXCARBAZEPINE
  molecule-type: Small molecule
  first-approval: 2000
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N03AF02
  targets:
  - id: CHEMBL2331043
    name: Sodium channel alpha subunit
    action: BLOCKER
  properties:
    full-mwt: 252.27
    mw-freebase: 252.27
    alogp: 2.64
    psa: 63.4
    hba: 2
    hbd: 1
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.78
    full-molformula: C15H12N2O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 8841174a-9f4b-424f-a50d-01478f2aeb29
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8841174a-9f4b-424f-a50d-01478f2aeb29
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Oxcarbazepine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `oxcarbazepine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1068](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1068/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Reduces high-frequency neuronal firing through voltage-gated sodium-channel modulation.

## Mechanism

Sodium channel alpha subunit blocker _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2000
- **Flags:** black-box warning, prodrug
- **ATC N03AF02:** NERVOUS SYSTEM › ANTIEPILEPTICS › Carboxamide derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 252.27 | 2.64 | 63.4 | 1/2 | 0 | C15H12N2O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Sodium channel alpha subunit (CHEMBL2331043)|Sodium channel alpha subunit]] - blocker · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Oxcarbazepine*](https://en.wikipedia.org/w/index.php?title=Oxcarbazepine&oldid=1356507495) (revision 1356507495, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–5 h | 1–5 hours (healthy adults) |
| Bioavailability | 95 % | >95% |
| Metabolism | hepatic | Liver (cytosolic enzymes and glucuronic acid) |
| Excretion | mainly urinary | Kidney (<1%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 8841174a…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8841174a-9f4b-424f-a50d-01478f2aeb29), label version 20260826. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2, 9, 19)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Carbamazepine]] (Sodium channel alpha subunit), [[Cenobamate]] (Sodium channel alpha subunit), [[Eslicarbazepine Acetate]] (Sodium channel alpha subunit), [[Evenamide]] (Sodium channel alpha subunit), [[Lacosamide]] (Sodium channel alpha subunit), [[Lamotrigine]] (Sodium channel alpha subunit), [[Lidocaine]] (Sodium channel alpha subunit), [[Phenytoin]] (Sodium channel alpha subunit), [[Prilocaine]] (Sodium channel alpha subunit), [[Primidone]] (Sodium channel alpha subunit), [[Ralfinamide]] (Sodium channel alpha subunit), [[Riluzole (Rilutek)]] (Sodium channel alpha subunit)
- **Same ATC subgroup:** [[Carbamazepine]], [[Rufinamide]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
