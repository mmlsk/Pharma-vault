---
type: compound
schema-version: 2
compound-id: mexiletine-compound
name: Mexiletine
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
chembl-id: CHEMBL558
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: 12.0
  unit: h
  notes: 10–12 hours
protein-binding:
  value: 50.0
  value-max: 60.0
  unit: percent
  notes: 50–60%
bioavailability:
  value: 90.0
  value-max: null
  notes: 90%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (10%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2D6 and 1A2-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
- pk-ema-consistent
pk-source:
  type: wikipedia-infobox
  title: Mexiletine
  url: https://en.wikipedia.org/w/index.php?title=Mexiletine&oldid=1359320312
  revision: 1359320312
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL558
  pref-name: MEXILETINE
  molecule-type: Small molecule
  first-approval: 1985
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C01BB02
  targets: []
  properties:
    full-mwt: 179.26
    mw-freebase: 179.26
    alogp: 2.03
    psa: 35.25
    hba: 2
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.77
    full-molformula: C11H17NO
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
  product: Namuscla
  ema-number: EMEA/H/C/004584
  url: https://www.ema.europa.eu/en/documents/product-information/namuscla-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/namuscla-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Mexiletine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `mexiletine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL558](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL558/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Modulates fast cardiac sodium channels to alter impulse conduction; proarrhythmia makes clinical supervision essential.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1985
- **Flags:** black-box warning
- **ATC C01BB02:** CARDIOVASCULAR SYSTEM › ANTIARRHYTHMICS, CLASS I AND III › Antiarrhythmics, class Ib

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 179.26 | 2.03 | 35.25 | 1/2 | 0 | C11H17NO |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Mexiletine*](https://en.wikipedia.org/w/index.php?title=Mexiletine&oldid=1359320312) (revision 1359320312, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–12 h | 10–12 hours |
| Protein binding | 50–60 % | 50–60% |
| Bioavailability | 90 % | 90% |
| Metabolism | hepatic | Liver (CYP2D6 and 1A2-mediated) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney (10%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Namuscla*](https://www.ema.europa.eu/en/documents/product-information/namuscla-epar-product-information_en.pdf) (EMEA/H/C/004584) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/namuscla-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 5, 10, 15)
> - protein-binding: consistent (SmPC values: 55)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Lidocaine]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
