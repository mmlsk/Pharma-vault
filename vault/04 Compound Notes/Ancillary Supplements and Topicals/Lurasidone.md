---
type: compound
schema-version: 2
compound-id: lurasidone-compound
name: Lurasidone
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
chembl-id: CHEMBL1237021
chembl-max-phase: 4
half-life:
  value: 18.0
  value-max: 40.0
  unit: h
  notes: 18–40 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: ~99%
bioavailability:
  value: 9.0
  value-max: 19.0
  notes: 9–19% (oral)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Faecal (67–80%),; renal (9–19%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4-mediated)
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
  title: Lurasidone
  url: https://en.wikipedia.org/w/index.php?title=Lurasidone&oldid=1372134771
  revision: 1372134771
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1237021
  pref-name: LURASIDONE
  molecule-type: Small molecule
  first-approval: 2010
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N05AE05
  targets: []
  properties:
    full-mwt: 492.69
    mw-freebase: 492.69
    alogp: 4.26
    psa: 56.75
    hba: 6
    hbd: 0
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.58
    full-molformula: C28H36N4O2S
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
  product: Latuda
  ema-number: EMEA/H/C/002713
  url: https://www.ema.europa.eu/en/documents/product-information/latuda-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/latuda-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Lurasidone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lurasidone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1237021](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1237021/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Antagonizes or partially agonizes dopamine D2 receptors; movement, metabolic, and prolactin effects depend on receptor profile.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2010
- **Flags:** black-box warning
- **ATC N05AE05:** NERVOUS SYSTEM › ANTIPSYCHOTICS › Indole derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 492.69 | 4.26 | 56.75 | 0/6 | 0 | C28H36N4O2S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lurasidone*](https://en.wikipedia.org/w/index.php?title=Lurasidone&oldid=1372134771) (revision 1372134771, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 18–40 h | 18–40 hours |
| Protein binding | 99 % | ~99% |
| Bioavailability | 9–19 % | 9–19% (oral) |
| Metabolism | hepatic | Liver (CYP3A4-mediated) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Faecal (67–80%),; renal (9–19%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Latuda*](https://www.ema.europa.eu/en/documents/product-information/latuda-epar-product-information_en.pdf) (EMEA/H/C/002713) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/latuda-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 20, 40)
> - protein-binding: no-label-value (SmPC values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Molindone]], [[Sertindole]], [[Ziprasidone]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
