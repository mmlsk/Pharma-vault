---
type: compound
schema-version: 2
compound-id: vortioxetine-compound
name: Vortioxetine
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
chembl-id: CHEMBL2204360
chembl-max-phase: 4
half-life:
  value: 66.0
  value-max: null
  unit: h
  notes: 66 hours
protein-binding:
  value: 98.0
  value-max: 99.0
  unit: percent
  notes: 98–99%
bioavailability:
  value: 75.0
  value-max: null
  notes: 75% (peak at 7–11 hours)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 59% in urine, 26% in feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, primarily CYP2D6-mediated oxidation
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
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Vortioxetine
  url: https://en.wikipedia.org/w/index.php?title=Vortioxetine&oldid=1365717923
  revision: 1365717923
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL2104993
  pref-name: VORTIOXETINE
  molecule-type: Small molecule
  first-approval: 2013
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06AX26
  targets: []
  properties:
    full-mwt: 298.46
    mw-freebase: 298.46
    alogp: 3.86
    psa: 15.27
    hba: 3
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.93
    full-molformula: C18H22N2S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 239215eb-be32-4286-9677-1e5556c6cccf
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=239215eb-be32-4286-9677-1e5556c6cccf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Brintellix
  ema-number: EMEA/H/C/002717
  url: https://www.ema.europa.eu/en/documents/product-information/brintellix-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Vortioxetine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `vortioxetine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL2204360](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2204360/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits serotonin reuptake through SERT; benefits, activation, sexual effects, and withdrawal profiles differ by agent.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2013
- **Flags:** black-box warning
- **ATC N06AX26:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Other antidepressants

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 298.46 | 3.86 | 15.27 | 1/3 | 0 | C18H22N2S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Vortioxetine*](https://en.wikipedia.org/w/index.php?title=Vortioxetine&oldid=1365717923) (revision 1365717923, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 66 h | 66 hours |
| Protein binding | 98–99 % | 98–99% |
| Bioavailability | 75 % | 75% (peak at 7–11 hours) |
| Metabolism | hepatic | Liver, primarily CYP2D6-mediated oxidation |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | - | 59% in urine, 26% in feces |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 239215eb…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=239215eb-be32-4286-9677-1e5556c6cccf), label version 20260423. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 66)
> - protein-binding: consistent (label values: 98)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Brintellix*](https://www.ema.europa.eu/en/documents/product-information/brintellix-epar-product-information_en.pdf) (EMEA/H/C/002717). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 0, 24, 66)
> - protein-binding: consistent (SmPC values: 98, 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Agomelatine (Valdoxan)]], [[Brexanolone]], [[Bupropion (Wellbutrin)]], [[Desvenlafaxine]], [[Duloxetine (Cymbalta)]], [[Esketamine (Spravato)]], [[Levomilnacipran]], [[Minaprine]], [[Mirtazapine]], [[Nefazodone]], [[Tianeptine]], [[Trazodone (Desyrel)]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
