---
type: compound
schema-version: 2
compound-id: carbamazepine-compound
name: Carbamazepine
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
chembl-id: CHEMBL108
chembl-max-phase: 4
half-life:
  value: 36.0
  value-max: null
  unit: h
  notes: 36 hours (single dose), 16–24 hours (repeated dosing)
protein-binding:
  value: 70.0
  value-max: 80.0
  unit: percent
  notes: 70–80%
bioavailability:
  value: 100.0
  value-max: null
  notes: ~100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (72%), feces (28%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Carbamazepine
  url: https://en.wikipedia.org/w/index.php?title=Carbamazepine&oldid=1369634918
  revision: 1369634918
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL108
  pref-name: CARBAMAZEPINE
  molecule-type: Small molecule
  first-approval: 1968
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N03AF01
  targets:
  - id: CHEMBL2331043
    name: Sodium channel alpha subunit
    action: BLOCKER
  properties:
    full-mwt: 236.27
    mw-freebase: 236.27
    alogp: 3.39
    psa: 46.33
    hba: 1
    hbd: 1
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.75
    full-molformula: C15H12N2O
pk-verification:
  source: fda-label
  status: consistent
  set-id: e91f9de3-3fdd-0a6b-71ce-53a2cc142816
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e91f9de3-3fdd-0a6b-71ce-53a2cc142816
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Carbamazepine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `carbamazepine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL108](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL108/) · max phase 4 · id via Wikipedia infobox

## Source summary

Reduces high-frequency neuronal firing through voltage-gated sodium-channel modulation.

## Mechanism

Sodium channel alpha subunit blocker _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1968
- **Flags:** black-box warning
- **ATC N03AF01:** NERVOUS SYSTEM › ANTIEPILEPTICS › Carboxamide derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 236.27 | 3.39 | 46.33 | 1/1 | 0 | C15H12N2O |

**Targets (ChEMBL curated mechanisms):**

- [[Sodium channel alpha subunit (CHEMBL2331043)|Sodium channel alpha subunit]] - blocker · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Carbamazepine*](https://en.wikipedia.org/w/index.php?title=Carbamazepine&oldid=1369634918) (revision 1369634918, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 36 h | 36 hours (single dose), 16–24 hours (repeated dosing) |
| Protein binding | 70–80 % | 70–80% |
| Bioavailability | 100 % | ~100% |
| Metabolism | hepatic | Liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Active epoxide form (carbamazepine-10,11 epoxide) |
| Excretion | mainly urinary | Urine (72%), feces (28%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set e91f9de3…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e91f9de3-3fdd-0a6b-71ce-53a2cc142816), label version 20260910. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 12, 17, 34, 35, 40)
> - protein-binding: consistent (label values: 50, 76)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Cenobamate]] (Sodium channel alpha subunit), [[Eslicarbazepine Acetate]] (Sodium channel alpha subunit), [[Evenamide]] (Sodium channel alpha subunit), [[Lacosamide]] (Sodium channel alpha subunit), [[Lamotrigine]] (Sodium channel alpha subunit), [[Lidocaine]] (Sodium channel alpha subunit), [[Oxcarbazepine]] (Sodium channel alpha subunit), [[Phenytoin]] (Sodium channel alpha subunit), [[Prilocaine]] (Sodium channel alpha subunit), [[Primidone]] (Sodium channel alpha subunit), [[Ralfinamide]] (Sodium channel alpha subunit), [[Riluzole (Rilutek)]] (Sodium channel alpha subunit)
- **Same ATC subgroup:** [[Oxcarbazepine]], [[Rufinamide]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
