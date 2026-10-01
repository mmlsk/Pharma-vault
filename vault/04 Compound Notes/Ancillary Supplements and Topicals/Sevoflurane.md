---
type: compound
schema-version: 2
compound-id: sevoflurane-compound
name: Sevoflurane
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
chembl-id: CHEMBL1200694
chembl-max-phase: 4
half-life:
  value: 15.0
  value-max: 23.0
  unit: h
  notes: 15–23 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver by CYP2E1
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2E1
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2E1 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Sevoflurane
  url: https://en.wikipedia.org/w/index.php?title=Sevoflurane&oldid=1374089495
  revision: 1374089495
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1200694
  pref-name: SEVOFLURANE
  molecule-type: Small molecule
  first-approval: 1995
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N01AB08
  targets:
  - id: CHEMBL2363052
    name: Glycine receptor (alpha-1/beta)
    action: POSITIVE MODULATOR
  - id: CHEMBL2093872
    name: GABA-A receptor; anion channel
    action: POSITIVE ALLOSTERIC MODULATOR
  - id: CHEMBL2331041
    name: Potassium channel subfamily K member 10
    action: OPENER
  - id: CHEMBL2331042
    name: Potassium channel subfamily K member 18
    action: OPENER
  - id: CHEMBL2321613
    name: Potassium channel subfamily K member 3
    action: OPENER
  - id: CHEMBL2321614
    name: Potassium channel subfamily K member 9
    action: OPENER
  - id: CHEMBL2321615
    name: Potassium channel subfamily K member 2
    action: OPENER
  properties:
    full-mwt: 200.05
    mw-freebase: 200.05
    alogp: 2.42
    psa: 9.23
    hba: 1
    hbd: 0
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.62
    full-molformula: C4H3F7O
pk-verification:
  source: fda-label
  status: consistent
  set-id: c808afe1-ebf1-44cf-9187-09656331bff5
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c808afe1-ebf1-44cf-9187-09656331bff5
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Sevoflurane

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sevoflurane-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1200694](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1200694/) · max phase 4 · id via source catalogue

## Source summary

GABA-A receptor; anion channel positive allosteric modulator; approved/marketed compound catalogued by ChEMBL (CHEMBL1200694).

## Mechanism

GABA-A receptor; anion channel positive allosteric modulator _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1995
- **ATC N01AB08:** NERVOUS SYSTEM › ANESTHETICS, GENERAL › Halogenated hydrocarbons

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 200.05 | 2.42 | 9.23 | 0/1 | 0 | C4H3F7O |

**Targets (ChEMBL curated mechanisms):**

- [[Glycine receptor (alpha-1-beta) (CHEMBL2363052)|Glycine receptor (alpha-1/beta)]] - positive modulator · PROTEIN COMPLEX
- [[GABA-A receptor; anion channel (CHEMBL2093872)|GABA-A receptor; anion channel]] - positive allosteric modulator · PROTEIN COMPLEX GROUP
- [[Potassium channel subfamily K member 10 (CHEMBL2331041)|Potassium channel subfamily K member 10]] - opener · SINGLE PROTEIN
- [[Potassium channel subfamily K member 18 (CHEMBL2331042)|Potassium channel subfamily K member 18]] - opener · SINGLE PROTEIN
- [[Potassium channel subfamily K member 3 (CHEMBL2321613)|Potassium channel subfamily K member 3]] - opener · SINGLE PROTEIN
- [[Potassium channel subfamily K member 9 (CHEMBL2321614)|Potassium channel subfamily K member 9]] - opener · SINGLE PROTEIN
- [[Potassium channel subfamily K member 2 (CHEMBL2321615)|Potassium channel subfamily K member 2]] - opener · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sevoflurane*](https://en.wikipedia.org/w/index.php?title=Sevoflurane&oldid=1374089495) (revision 1374089495, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 15–23 h | 15–23 hours |
| Metabolism | hepatic | Liver by CYP2E1 |
| CYP (metabolised by) | CYP2E1 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Hexafluoroisopropanol |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set c808afe1…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c808afe1-ebf1-44cf-9187-09656331bff5), label version 20260602. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 10, 15, 16, 18, 21, 23)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Desflurane]] (GABA-A receptor; anion channel; Glycine receptor (alpha-1/beta); Potassium channel subfamily K member 10), [[Enflurane]] (GABA-A receptor; anion channel; Glycine receptor (alpha-1/beta); Potassium channel subfamily K member 10), [[Halothane]] (GABA-A receptor; anion channel; Glycine receptor (alpha-1/beta); Potassium channel subfamily K member 10), [[Isoflurane]] (GABA-A receptor; anion channel; Glycine receptor (alpha-1/beta); Potassium channel subfamily K member 10), [[Methoxyflurane]] (GABA-A receptor; anion channel; Glycine receptor (alpha-1/beta)), [[Abp-700]] (GABA-A receptor; anion channel), [[Adipiplon]] (GABA-A receptor; anion channel), [[Alprazolam]] (GABA-A receptor; anion channel), [[Brexanolone]] (GABA-A receptor; anion channel), [[Butalbital]] (GABA-A receptor; anion channel), [[Cenobamate]] (GABA-A receptor; anion channel), [[Chlordiazepoxide]] (GABA-A receptor; anion channel)
- **Same ATC subgroup:** [[Desflurane]], [[Enflurane]], [[Halothane]], [[Isoflurane]]
- **Shared CYP substrate pool:** CYP2E1 (+8 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
