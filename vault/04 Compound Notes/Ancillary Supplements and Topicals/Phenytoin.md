---
type: compound
schema-version: 2
compound-id: phenytoin-compound
name: Phenytoin
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
chembl-id: CHEMBL16
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: 22.0
  unit: h
  notes: 10–22 hours
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: 95%
bioavailability:
  value: 70.0
  value-max: 100.0
  notes: 70–100% (oral), 24.4% (rectal)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Urinary (23–70%), bile
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
  title: Phenytoin
  url: https://en.wikipedia.org/w/index.php?title=Phenytoin&oldid=1371791164
  revision: 1371791164
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL16
  pref-name: PHENYTOIN
  molecule-type: Small molecule
  first-approval: 1953
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N03AB02
  - N03AB52
  targets:
  - id: CHEMBL2331043
    name: Sodium channel alpha subunit
    action: BLOCKER
  properties:
    full-mwt: 252.27
    mw-freebase: 252.27
    alogp: 1.77
    psa: 58.2
    hba: 2
    hbd: 2
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.8
    full-molformula: C15H12N2O2
pk-verification:
  source: fda-label
  status: consistent
  set-id: 3580e6a8-f7c3-44a0-a1eb-2a84ae589d21
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3580e6a8-f7c3-44a0-a1eb-2a84ae589d21
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Phenytoin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `phenytoin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL16](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL16/) · max phase 4 · id via Wikipedia infobox

## Source summary

Reduces high-frequency neuronal firing through voltage-gated sodium-channel modulation.

## Mechanism

Sodium channel alpha subunit blocker _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1953
- **Flags:** black-box warning
- **ATC N03AB02:** NERVOUS SYSTEM › ANTIEPILEPTICS › Hydantoin derivatives
- **ATC N03AB52:** NERVOUS SYSTEM › ANTIEPILEPTICS › Hydantoin derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 252.27 | 1.77 | 58.2 | 2/2 | 0 | C15H12N2O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Sodium channel alpha subunit (CHEMBL2331043)|Sodium channel alpha subunit]] - blocker · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Phenytoin*](https://en.wikipedia.org/w/index.php?title=Phenytoin&oldid=1371791164) (revision 1371791164, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–22 h | 10–22 hours |
| Protein binding | 95 % | 95% |
| Bioavailability | 70–100 % | 70–100% (oral), 24.4% (rectal) |
| Metabolism | hepatic | Liver |
| Excretion | mainly non-renal | Urinary (23–70%), bile |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 3580e6a8…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3580e6a8-f7c3-44a0-a1eb-2a84ae589d21), label version 20260522. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 7, 14, 29, 168, 240)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Carbamazepine]] (Sodium channel alpha subunit), [[Cenobamate]] (Sodium channel alpha subunit), [[Eslicarbazepine Acetate]] (Sodium channel alpha subunit), [[Evenamide]] (Sodium channel alpha subunit), [[Lacosamide]] (Sodium channel alpha subunit), [[Lamotrigine]] (Sodium channel alpha subunit), [[Lidocaine]] (Sodium channel alpha subunit), [[Oxcarbazepine]] (Sodium channel alpha subunit), [[Prilocaine]] (Sodium channel alpha subunit), [[Primidone]] (Sodium channel alpha subunit), [[Ralfinamide]] (Sodium channel alpha subunit), [[Riluzole (Rilutek)]] (Sodium channel alpha subunit)
- **Same ATC subgroup:** [[Fosphenytoin]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
