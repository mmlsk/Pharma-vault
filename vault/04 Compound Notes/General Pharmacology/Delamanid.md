---
type: compound
schema-version: 2
compound-id: delamanid-compound
name: Delamanid
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Mycobacterium tuberculosis H37Rv inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL218650
chembl-max-phase: 4
half-life:
  value: 30.0
  value-max: 38.0
  unit: h
  notes: 30–38 hours
protein-binding:
  value: 99.5
  value-max: null
  unit: percent
  notes: ≥99.5%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: not excreted in urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: in plasma by albumin, in liver; by CYP3A4 (to a lesser extent)
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
  title: Delamanid
  url: https://en.wikipedia.org/w/index.php?title=Delamanid&oldid=1343219893
  revision: 1343219893
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL218650
  pref-name: DELAMANID
  molecule-type: Small molecule
  first-approval: 2014
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J04AK06
  targets:
  - id: CHEMBL2111188
    name: Mycobacterium tuberculosis H37Rv
    action: INHIBITOR
  properties:
    full-mwt: 534.49
    mw-freebase: 534.49
    alogp: 4.97
    psa: 101.12
    hba: 9
    hbd: 0
    rtb: 8
    num-ro5-violations: 1
    qed-weighted: 0.3
    full-molformula: C25H25F3N4O6
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
  product: Deltyba
  ema-number: EMEA/H/C/002552
  url: https://www.ema.europa.eu/en/documents/product-information/deltyba-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/deltyba-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Delamanid

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `delamanid-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL218650](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL218650/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Nitro-dihydro-imidazooxazole for multidrug-resistant tuberculosis, sharing pretomanid's activation route.

## Mechanism

Mycobacterium tuberculosis H37Rv inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2014
- **Flags:** prodrug
- **ATC J04AK06:** ANTIINFECTIVES FOR SYSTEMIC USE › DRUGS FOR TREATMENT OF TUBERCULOSIS › Other drugs for treatment of tuberculosis

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 534.49 | 4.97 | 101.12 | 0/9 | 1 | C25H25F3N4O6 |

**Targets (ChEMBL curated mechanisms):**

- [[Mycobacterium tuberculosis H37Rv (CHEMBL2111188)|Mycobacterium tuberculosis H37Rv]] - inhibitor · ORGANISM

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Delamanid*](https://en.wikipedia.org/w/index.php?title=Delamanid&oldid=1343219893) (revision 1343219893, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 30–38 h | 30–38 hours |
| Protein binding | 99.5 % | ≥99.5% |
| Metabolism | hepatic | in plasma by albumin, in liver; by CYP3A4 (to a lesser extent) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | not excreted in urine |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Deltyba*](https://www.ema.europa.eu/en/documents/product-information/deltyba-epar-product-information_en.pdf) (EMEA/H/C/002552) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/deltyba-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 30, 38)
> - protein-binding: consistent (SmPC values: 99.5)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Bedaquiline]], [[Ethambutol]], [[Pretomanid]], [[Pyrazinamide]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
