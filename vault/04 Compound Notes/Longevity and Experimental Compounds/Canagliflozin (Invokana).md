---
type: compound
schema-version: 2
compound-id: canagliflozin-compound
name: Canagliflozin (Invokana)
aliases:
- Canagliflozin
- Invokana
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2103841
chembl-max-phase: 4
half-life:
  value: null
  value-max: null
  unit: null
  notes: 11.8 (10–13) hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99%
bioavailability:
  value: 65.0
  value-max: null
  notes: 65%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 53% faecal and 33% kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver glucuronidation
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Canagliflozin
  url: https://en.wikipedia.org/w/index.php?title=Canagliflozin&oldid=1369651076
  revision: 1369651076
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL2048484
  pref-name: CANAGLIFLOZIN ANHYDROUS
  molecule-type: Small molecule
  first-approval: 2011
  black-box-warning: true
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 444.52
    mw-freebase: 444.52
    alogp: 2.97
    psa: 90.15
    hba: 6
    hbd: 4
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.49
    full-molformula: C24H25FO5S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: b9057d3b-b104-4f09-8a61-c61ef9d4a3f3
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b9057d3b-b104-4f09-8a61-c61ef9d4a3f3
  checked: '2026-10-01'
  fields:
    protein-binding: no-label-value
pk-verification-ema:
  source: ema-smpc
  status: no-smpc-value
  product: Invokana
  ema-number: EMEA/H/C/002649
  url: https://www.ema.europa.eu/en/documents/product-information/invokana-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/invokana-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    protein-binding: no-label-value
---

# Canagliflozin (Invokana)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `canagliflozin-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Canagliflozin, Invokana
- **ChEMBL:** [CHEMBL2103841](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2103841/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

SGLT2 inhibitor studied in the large CANVAS Program, which found real cardiovascular and renal benefit beyond blood sugar control -- alongside empagliflozin and dapagliflozin, one of the three major drugs in this class.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2011
- **Flags:** black-box warning

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 444.52 | 2.97 | 90.15 | 4/6 | 0 | C24H25FO5S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Canagliflozin*](https://en.wikipedia.org/w/index.php?title=Canagliflozin&oldid=1369651076) (revision 1369651076, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | - | 11.8 (10–13) hours |
| Protein binding | 99 % | 99% |
| Bioavailability | 65 % | 65% |
| Metabolism | hepatic | Liver glucuronidation |
| Excretion | - | 53% faecal and 33% kidney |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set b9057d3b…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b9057d3b-b104-4f09-8a61-c61ef9d4a3f3), label version 20260611. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - protein-binding: no-label-value (label values: -)

> [!note] EU SmPC cross-check: **no-smpc-value**
> Automated comparison with section 5.2 of the [EU SmPC of *Invokana*](https://www.ema.europa.eu/en/documents/product-information/invokana-epar-product-information_en.pdf) (EMEA/H/C/002649) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/invokana-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - protein-binding: no-label-value (SmPC values: -)

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
