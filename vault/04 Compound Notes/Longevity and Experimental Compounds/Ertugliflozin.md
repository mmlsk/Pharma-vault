---
type: compound
schema-version: 2
compound-id: ertugliflozin-compound
name: Ertugliflozin
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: Sodium/glucose cotransporter 2 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1770248
chembl-max-phase: 4
half-life:
  value: 17.0
  value-max: null
  unit: h
  notes: ~17 hours
protein-binding:
  value: 93.6
  value-max: null
  unit: percent
  notes: 93.6%
bioavailability:
  value: 100.0
  value-max: null
  notes: ~100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 41% faeces, 50% urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: UGT1A9, UGT2B7
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
- evidence-limited
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Ertugliflozin
  url: https://en.wikipedia.org/w/index.php?title=Ertugliflozin&oldid=1369665388
  revision: 1369665388
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1770248
  pref-name: ERTUGLIFLOZIN
  molecule-type: Small molecule
  first-approval: 2017
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A10BK04
  targets:
  - id: CHEMBL3884
    name: Sodium/glucose cotransporter 2
    action: INHIBITOR
  properties:
    full-mwt: 436.89
    mw-freebase: 436.89
    alogp: 1.36
    psa: 108.61
    hba: 7
    hbd: 4
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.54
    full-molformula: C22H25ClO7
pk-verification:
  source: fda-label
  status: consistent
  set-id: e6f3e718-bb99-48f1-ab94-b9f0af05fed6
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e6f3e718-bb99-48f1-ab94-b9f0af05fed6
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Steglatro
  ema-number: EMEA/H/C/004315
  url: https://www.ema.europa.eu/en/documents/product-information/steglatro-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Ertugliflozin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ertugliflozin-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL1770248](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1770248/) · max phase 4 · id via source catalogue

## Source summary

Sodium/glucose cotransporter 2 inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL1770248).

## Mechanism

Sodium/glucose cotransporter 2 inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2017
- **ATC A10BK04:** ALIMENTARY TRACT AND METABOLISM › BLOOD GLUCOSE LOWERING DRUGS, EXCL. INSULINS › Sodium-glucose co-transporter 2 (SGLT2) inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 436.89 | 1.36 | 108.61 | 4/7 | 0 | C22H25ClO7 |

**Targets (ChEMBL curated mechanisms):**

- [[Sodium-glucose cotransporter 2 (CHEMBL3884)|Sodium/glucose cotransporter 2]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ertugliflozin*](https://en.wikipedia.org/w/index.php?title=Ertugliflozin&oldid=1369665388) (revision 1369665388, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 17 h | ~17 hours |
| Protein binding | 93.6 % | 93.6% |
| Bioavailability | 100 % | ~100% |
| Metabolism | hepatic | UGT1A9, UGT2B7 |
| Metabolites | - | Glucuronides |
| Excretion | mainly urinary | 41% faeces, 50% urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set e6f3e718…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e6f3e718-bb99-48f1-ab94-b9f0af05fed6), label version 20260603. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 16.6)
> - protein-binding: consistent (label values: 93.6)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Steglatro*](https://www.ema.europa.eu/en/documents/product-information/steglatro-epar-product-information_en.pdf) (EMEA/H/C/004315). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 17)
> - protein-binding: consistent (SmPC values: 93.6)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Bexagliflozin]] (Sodium/glucose cotransporter 2), [[Dapagliflozin (Farxiga)]] (Sodium/glucose cotransporter 2), [[Empagliflozin (Jardiance)]] (Sodium/glucose cotransporter 2), [[Henagliflozin]] (Sodium/glucose cotransporter 2), [[Ipragliflozin]] (Sodium/glucose cotransporter 2), [[Ipragliflozin L-Proline]] (Sodium/glucose cotransporter 2), [[Licogliflozin]] (Sodium/glucose cotransporter 2), [[Sergliflozin Etabonate]] (Sodium/glucose cotransporter 2), [[Sotagliflozin (Inpefa)]] (Sodium/glucose cotransporter 2)
- **Same ATC subgroup:** [[Bexagliflozin]], [[Dapagliflozin (Farxiga)]], [[Empagliflozin (Jardiance)]], [[Ipragliflozin]], [[Sotagliflozin (Inpefa)]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
