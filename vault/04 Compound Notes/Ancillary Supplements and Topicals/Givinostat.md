---
type: compound
schema-version: 2
compound-id: givinostat-compound
name: Givinostat
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1213492
chembl-max-phase: 4
half-life:
  value: 6.0
  value-max: null
  unit: h
  notes: ~6 hours
protein-binding:
  value: 96.0
  value-max: null
  unit: percent
  notes: 96%
bioavailability:
  value: null
  value-max: null
  notes: Unknown
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.03
  notes: 'Urine: <3% unchanged'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Extensive (not CYP450 or UGT)
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
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Givinostat
  url: https://en.wikipedia.org/w/index.php?title=Givinostat&oldid=1370187447
  revision: 1370187447
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1213492
  pref-name: GIVINOSTAT
  molecule-type: Small molecule
  first-approval: 2024
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - M09AX14
  targets: []
  properties:
    full-mwt: 421.5
    mw-freebase: 421.5
    alogp: 4.55
    psa: 90.9
    hba: 5
    hbd: 3
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.37
    full-molformula: C24H27N3O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 1a28a3db-7880-4ac2-a2f2-2b4e362aafb6
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1a28a3db-7880-4ac2-a2f2-2b4e362aafb6
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Duvyzat
  ema-number: EMEA/H/C/006079
  url: https://www.ema.europa.eu/en/documents/product-information/duvyzat-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/duvyzat-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Givinostat

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `givinostat-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1213492](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1213492/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

HDAC inhibitor approved for Duchenne muscular dystrophy — an unusual non-oncology indication for this class.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2024
- **ATC M09AX14:** MUSCULO-SKELETAL SYSTEM › OTHER DRUGS FOR DISORDERS OF THE MUSCULO-SKELETAL SYSTEM › Other drugs for disorders of the musculo-skeletal system

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 421.5 | 4.55 | 90.9 | 3/5 | 0 | C24H27N3O4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Givinostat*](https://en.wikipedia.org/w/index.php?title=Givinostat&oldid=1370187447) (revision 1370187447, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6 h | ~6 hours |
| Protein binding | 96 % | 96% |
| Bioavailability | - | Unknown |
| Metabolism | hepatic | Extensive (not CYP450 or UGT) |
| Excretion | - · fe 0.03 | Urine: <3% unchanged |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 1a28a3db…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1a28a3db-7880-4ac2-a2f2-2b4e362aafb6), label version 20241121. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 6)
> - protein-binding: consistent (label values: 96)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Duvyzat*](https://www.ema.europa.eu/en/documents/product-information/duvyzat-epar-product-information_en.pdf) (EMEA/H/C/006079) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/duvyzat-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 6)
> - protein-binding: consistent (SmPC values: 96)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Nusinersen (Spinraza)]], [[Palovarotene]], [[Risdiplam (Evrysdi)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
