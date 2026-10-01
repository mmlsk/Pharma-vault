---
type: compound
schema-version: 2
compound-id: difelikefalin-compound
name: Difelikefalin
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Kappa opioid receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3989915
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: null
  unit: h
  notes: 2 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (IV)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Excreted as unchanged; drug via bile and urine
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Not metabolized
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
- identity-confirmed
- pk-fda-discrepant
- pk-ema-consistent
- pk-sources-disagree
pk-source:
  type: wikipedia-infobox
  title: Difelikefalin
  url: https://en.wikipedia.org/w/index.php?title=Difelikefalin&oldid=1362480627
  revision: 1362480627
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL3989915
  pref-name: DIFELIKEFALIN
  molecule-type: Protein
  first-approval: 2021
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - V03AX04
  targets:
  - id: CHEMBL237
    name: Kappa-type opioid receptor
    action: AGONIST
  properties:
    full-mwt: 679.86
    mw-freebase: 679.86
    alogp: 0.83
    psa: 222.97
    hba: 8
    hbd: 7
    rtb: 18
    num-ro5-violations: 2
    qed-weighted: 0.11
    full-molformula: C36H53N7O6
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 0c7b81f2-0fd3-47cb-8b0f-185e07f19c87
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0c7b81f2-0fd3-47cb-8b0f-185e07f19c87
  checked: '2026-10-01'
  fields:
    half-life: discrepant
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Kapruvia
  ema-number: EMEA/H/C/005612
  url: https://www.ema.europa.eu/en/documents/product-information/kapruvia-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/kapruvia-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Difelikefalin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `difelikefalin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL3989915](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3989915/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Peripherally restricted kappa agonist for uraemic pruritus — analgesia and antipruritus without CNS dysphoria because it does not cross the blood-brain barrier.

## Mechanism

Kappa opioid receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 2021
- **ATC V03AX04:** VARIOUS › ALL OTHER THERAPEUTIC PRODUCTS › Other therapeutic products

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 679.86 | 0.83 | 222.97 | 7/8 | 2 | C36H53N7O6 |

**Targets (ChEMBL curated mechanisms):**

- [[Kappa-type opioid receptor (CHEMBL237)|Kappa-type opioid receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Difelikefalin*](https://en.wikipedia.org/w/index.php?title=Difelikefalin&oldid=1362480627) (revision 1362480627, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 2 hours |
| Bioavailability | 100 % | 100% (IV) |
| Metabolism | - | Not metabolized |
| Excretion | - | Excreted as unchanged; drug via bile and urine |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 0c7b81f2…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0c7b81f2-0fd3-47cb-8b0f-185e07f19c87), label version 20250826. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 23, 31)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Kapruvia*](https://www.ema.europa.eu/en/documents/product-information/kapruvia-epar-product-information_en.pdf) (EMEA/H/C/005612) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/kapruvia-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 2, 3, 23, 31)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aticaprant]] (Kappa-type opioid receptor), [[Buprenorphine]] (Kappa-type opioid receptor), [[Dezocine]] (Kappa-type opioid receptor)
- **Same ATC subgroup:** [[Nalfurafine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
