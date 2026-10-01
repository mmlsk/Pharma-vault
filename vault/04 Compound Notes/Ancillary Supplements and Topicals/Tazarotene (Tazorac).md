---
type: compound
schema-version: 2
compound-id: tazarotene-compound
name: Tazarotene (Tazorac)
aliases:
- Tazarotene
- Tazorac
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Retinoic acid receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1657
chembl-max-phase: 4
half-life:
  value: 19.0
  value-max: null
  unit: h
  notes: 19 Hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
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
  title: Tazarotene
  url: https://en.wikipedia.org/w/index.php?title=Tazarotene&oldid=1354947664
  revision: 1354947664
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1657
  pref-name: TAZAROTENE
  molecule-type: Small molecule
  first-approval: 1997
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - D05AX05
  targets:
  - id: CHEMBL2363069
    name: Retinoic acid receptor
    action: AGONIST
  properties:
    full-mwt: 351.47
    mw-freebase: 351.47
    alogp: 4.43
    psa: 39.19
    hba: 4
    hbd: 0
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.59
    full-molformula: C21H21NO2S
pk-verification:
  source: fda-label
  status: consistent
  set-id: 1cf1faef-73b8-4ab2-a4c8-521f0bd3fc10
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1cf1faef-73b8-4ab2-a4c8-521f0bd3fc10
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Tazarotene (Tazorac)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tazarotene-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Tazarotene, Tazorac
- **ChEMBL:** [CHEMBL1657](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1657/) · max phase 4 · id via Wikipedia infobox

## Source summary

Fourth-generation topical retinoid, a selective RAR agonist used for acne and psoriasis.

## Mechanism

Retinoic acid receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1997
- **Flags:** prodrug
- **ATC D05AX05:** DERMATOLOGICALS › ANTIPSORIATICS FOR TOPICAL USE › Other antipsoriatics for topical use

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 351.47 | 4.43 | 39.19 | 0/4 | 0 | C21H21NO2S |

**Targets (ChEMBL curated mechanisms):**

- [[Retinoic acid receptor (CHEMBL2363069)|Retinoic acid receptor]] - agonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tazarotene*](https://en.wikipedia.org/w/index.php?title=Tazarotene&oldid=1354947664) (revision 1354947664, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 19 h | 19 Hours |
| Protein binding | 99 % | >99% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 1cf1faef…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1cf1faef-73b8-4ab2-a4c8-521f0bd3fc10), label version 20260518. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 18)
> - protein-binding: consistent (label values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Adapalene (Differin)]] (Retinoic acid receptor), [[Isotretinoin, 13-cis-retinoic acid (oral, Accutane)]] (Retinoic acid receptor), [[Oral Tretinoin (ATRA)]] (Retinoic acid receptor), [[Tretinoin]] (Retinoic acid receptor)
- **Same ATC subgroup:** [[Calcipotriene]], [[Calcitriol (1,25-dihydroxyvitamin D3)]], [[Roflumilast]], [[Roflumilast (topical)]], [[Roflumilast Foam (Zoryve)]], [[Tapinarof]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
