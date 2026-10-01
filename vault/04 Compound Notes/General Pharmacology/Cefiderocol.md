---
type: compound
schema-version: 2
compound-id: cefiderocol-compound
name: Cefiderocol
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Bacterial penicillin-binding protein inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3989974
chembl-max-phase: 4
half-life:
  value: 2.8
  value-max: null
  unit: h
  notes: 2.8 hours
protein-binding:
  value: 56.0
  value-max: 58.0
  unit: percent
  notes: 56–58%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.7
  notes: mainly kidney (60–70% unchanged)
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
- identity-confirmed
- pk-ema-consistent
pk-source:
  type: wikipedia-infobox
  title: Cefiderocol
  url: https://en.wikipedia.org/w/index.php?title=Cefiderocol&oldid=1366709885
  revision: 1366709885
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL3989974
  pref-name: CEFIDEROCOL
  molecule-type: Small molecule
  first-approval: 2019
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01DI04
  targets:
  - id: CHEMBL2354204
    name: Bacterial penicillin-binding protein
    action: INHIBITOR
  properties:
    full-mwt: 752.23
    mw-freebase: 752.23
    alogp: -0.18
    psa: 256.9
    hba: 14
    hbd: 6
    rtb: 13
    num-ro5-violations: 3
    qed-weighted: 0.05
    full-molformula: C30H34ClN7O10S2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Fetcroja
  ema-number: EMEA/H/C/004829
  url: https://www.ema.europa.eu/en/documents/product-information/fetcroja-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/fetcroja-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Cefiderocol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cefiderocol-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL3989974](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3989974/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Siderophore cephalosporin that hijacks bacterial iron transport to cross the outer membrane, reserved for carbapenem-resistant gram-negative infection.

## Mechanism

Bacterial penicillin-binding protein inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2019
- **ATC J01DI04:** ANTIINFECTIVES FOR SYSTEMIC USE › OTHER BETA-LACTAM ANTIBACTERIALS › Other cephalosporins and penems

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 752.23 | -0.18 | 256.9 | 6/14 | 3 | C30H34ClN7O10S2 |

**Targets (ChEMBL curated mechanisms):**

- [[Bacterial penicillin-binding protein (CHEMBL2354204)|Bacterial penicillin-binding protein]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cefiderocol*](https://en.wikipedia.org/w/index.php?title=Cefiderocol&oldid=1366709885) (revision 1366709885, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.8 h | 2.8 hours |
| Protein binding | 56–58 % | 56–58% |
| Excretion | - · fe 0.7 | mainly kidney (60–70% unchanged) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Fetcroja*](https://www.ema.europa.eu/en/documents/product-information/fetcroja-epar-product-information_en.pdf) (EMEA/H/C/004829) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/fetcroja-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 2, 3)
> - protein-binding: consistent (SmPC values: 18.1, 40, 60)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Amoxicillin]] (Bacterial penicillin-binding protein), [[Ampicillin]] (Bacterial penicillin-binding protein), [[Aztreonam]] (Bacterial penicillin-binding protein), [[Ceftaroline]] (Bacterial penicillin-binding protein), [[Ceftazidime]] (Bacterial penicillin-binding protein), [[Ertapenem]] (Bacterial penicillin-binding protein), [[Meropenem]] (Bacterial penicillin-binding protein)
- **Same ATC subgroup:** [[Ceftaroline]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
