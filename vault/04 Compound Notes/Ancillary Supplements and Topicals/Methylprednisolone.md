---
type: compound
schema-version: 2
compound-id: methylprednisolone-compound
name: Methylprednisolone
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Glucocorticoid receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL650
chembl-max-phase: 4
half-life:
  value: 1.8
  value-max: 2.6
  unit: h
  notes: 1.8–2.6 hours
protein-binding:
  value: 78.0
  value-max: null
  unit: percent
  notes: 78%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver primarily, kidney, tissues; CYP3A4
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
  title: Methylprednisolone
  url: https://en.wikipedia.org/w/index.php?title=Methylprednisolone&oldid=1366837611
  revision: 1366837611
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL650
  pref-name: METHYLPREDNISOLONE
  molecule-type: Small molecule
  first-approval: 1957
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - D07AA01
  - D10AA02
  - H02AB04
  - H02BX01
  targets:
  - id: CHEMBL2034
    name: Glucocorticoid receptor
    action: AGONIST
  properties:
    full-mwt: 374.48
    mw-freebase: 374.48
    alogp: 1.8
    psa: 94.83
    hba: 5
    hbd: 3
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.69
    full-molformula: C22H30O5
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: d0d5fc54-69e1-4303-96be-3f97adec6074
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d0d5fc54-69e1-4303-96be-3f97adec6074
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Methylprednisolone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `methylprednisolone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL650](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL650/) · max phase 4 · id via source catalogue

## Source summary

Glucocorticoid receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL650).

## Mechanism

Glucocorticoid receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1957
- **ATC D07AA01:** DERMATOLOGICALS › CORTICOSTEROIDS, PLAIN › Corticosteroids, weak (group I)
- **ATC D10AA02:** DERMATOLOGICALS › ANTI-ACNE PREPARATIONS FOR TOPICAL USE › Corticosteroids, combinations for treatment of acne
- **ATC H02AB04:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › CORTICOSTEROIDS FOR SYSTEMIC USE, PLAIN › Glucocorticoids
- **ATC H02BX01:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › CORTICOSTEROIDS FOR SYSTEMIC USE, COMBINATIONS › Corticosteroids for systemic use, combinations

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 374.48 | 1.8 | 94.83 | 3/5 | 0 | C22H30O5 |

**Targets (ChEMBL curated mechanisms):**

- [[Glucocorticoid receptor (CHEMBL2034)|Glucocorticoid receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Methylprednisolone*](https://en.wikipedia.org/w/index.php?title=Methylprednisolone&oldid=1366837611) (revision 1366837611, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.8–2.6 h | 1.8–2.6 hours |
| Protein binding | 78 % | 78% |
| Metabolism | hepatic | Liver primarily, kidney, tissues; CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set d0d5fc54…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d0d5fc54-69e1-4303-96be-3f97adec6074), label version 20260703. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Alclometasone Dipropionate]] (Glucocorticoid receptor), [[Amcinonide]] (Glucocorticoid receptor), [[Azd-5423]] (Glucocorticoid receptor), [[Beclomethasone Dipropionate]] (Glucocorticoid receptor), [[Betamethasone]] (Glucocorticoid receptor), [[Betamethasone Acetate]] (Glucocorticoid receptor), [[Betamethasone Benzoate]] (Glucocorticoid receptor), [[Betamethasone Dipropionate]] (Glucocorticoid receptor), [[Betamethasone Valerate]] (Glucocorticoid receptor), [[Budesonide]] (Glucocorticoid receptor), [[Ciclesonide]] (Glucocorticoid receptor), [[Clobetasol Propionate]] (Glucocorticoid receptor)
- **Same ATC subgroup:** [[Betamethasone]], [[Cortisone Acetate]], [[Cortivazol]], [[Deflazacort]], [[Dexamethasone]], [[Fluorometholone]], [[Hydrocortisone (Cortef)]], [[Meprednisone]], [[Paramethasone Acetate]], [[Prednisolone]], [[Prednisone]], [[Rimexolone]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
