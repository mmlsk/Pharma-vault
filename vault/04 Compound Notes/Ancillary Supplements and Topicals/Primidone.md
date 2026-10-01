---
type: compound
schema-version: 2
compound-id: primidone-compound
name: Primidone
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: GABA-A receptor; anion channel positive allosteric modulator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL856
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 18.0
  unit: h
  notes: 'Primidone: 5-18 h,; Phenobarbital: 75-120 h,; PEMA: 16 h; Time to reach steady state:; Primidone: 2-3 days,; Phenobarbital&PEMA 1-4weeks'
protein-binding:
  value: 25.0
  value-max: null
  unit: percent
  notes: 25%
bioavailability:
  value: 100.0
  value-max: null
  notes: ~100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
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
  title: Primidone
  url: https://en.wikipedia.org/w/index.php?title=Primidone&oldid=1314757574
  revision: 1314757574
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL856
  pref-name: PRIMIDONE
  molecule-type: Small molecule
  first-approval: 1954
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N03AA03
  targets:
  - id: CHEMBL2093872
    name: GABA-A receptor; anion channel
    action: POSITIVE ALLOSTERIC MODULATOR
  - id: CHEMBL2331043
    name: Sodium channel alpha subunit
    action: BLOCKER
  properties:
    full-mwt: 218.26
    mw-freebase: 218.26
    alogp: 0.54
    psa: 58.2
    hba: 2
    hbd: 2
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.71
    full-molformula: C12H14N2O2
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 93b4b34c-6dba-4aec-b98e-b2b18feb86a9
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=93b4b34c-6dba-4aec-b98e-b2b18feb86a9
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Primidone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `primidone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL856](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL856/) · max phase 4 · id via source catalogue

## Source summary

GABA-A receptor; anion channel positive allosteric modulator; approved/marketed compound catalogued by ChEMBL (CHEMBL856).

## Mechanism

GABA-A receptor; anion channel positive allosteric modulator _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1954
- **ATC N03AA03:** NERVOUS SYSTEM › ANTIEPILEPTICS › Barbiturates and derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 218.26 | 0.54 | 58.2 | 2/2 | 0 | C12H14N2O2 |

**Targets (ChEMBL curated mechanisms):**

- [[GABA-A receptor; anion channel (CHEMBL2093872)|GABA-A receptor; anion channel]] - positive allosteric modulator · PROTEIN COMPLEX GROUP
- [[Sodium channel alpha subunit (CHEMBL2331043)|Sodium channel alpha subunit]] - blocker · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Primidone*](https://en.wikipedia.org/w/index.php?title=Primidone&oldid=1314757574) (revision 1314757574, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–18 h | Primidone: 5-18 h,; Phenobarbital: 75-120 h,; PEMA: 16 h; Time to reach steady state:; Primidone: 2-3 days,; Phenobarbital&PEMA 1-4weeks |
| Protein binding | 25 % | 25% |
| Bioavailability | 100 % | ~100% |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Kidney |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 93b4b34c…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=93b4b34c-6dba-4aec-b98e-b2b18feb86a9), label version 20260624. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Cenobamate]] (GABA-A receptor; anion channel; Sodium channel alpha subunit), [[Topiramate (Topamax)]] (GABA-A receptor; anion channel; Sodium channel alpha subunit), [[Abp-700]] (GABA-A receptor; anion channel), [[Adipiplon]] (GABA-A receptor; anion channel), [[Alprazolam]] (GABA-A receptor; anion channel), [[Brexanolone]] (GABA-A receptor; anion channel), [[Butalbital]] (GABA-A receptor; anion channel), [[Carbamazepine]] (Sodium channel alpha subunit), [[Chlordiazepoxide]] (GABA-A receptor; anion channel), [[Cipepofol]] (GABA-A receptor; anion channel), [[Clobazam]] (GABA-A receptor; anion channel), [[Clomethiazole]] (GABA-A receptor; anion channel)
- **Same ATC subgroup:** [[Metharbital]], [[Phenobarbital]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
