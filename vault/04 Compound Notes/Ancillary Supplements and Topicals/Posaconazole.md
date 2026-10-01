---
type: compound
schema-version: 2
compound-id: posaconazole-compound
name: Posaconazole
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Cytochrome P450 51 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1397
chembl-max-phase: 4
half-life:
  value: 16.0
  value-max: 31.0
  unit: h
  notes: 16 to 31 hours
protein-binding:
  value: 98.0
  value-max: 99.0
  unit: percent
  notes: 98 to 99%
bioavailability:
  value: 8.0
  value-max: 47.0
  notes: Low (8 to 47% Oral)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Fecal (71–77%) and Kidney (13–14%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (glucuronidation)
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
- identity-stereo-check
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Posaconazole
  url: https://en.wikipedia.org/w/index.php?title=Posaconazole&oldid=1370055331
  revision: 1370055331
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1397
  pref-name: POSACONAZOLE
  molecule-type: Small molecule
  first-approval: 2005
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J02AC04
  targets:
  - id: CHEMBL1780
    name: Lanosterol 14-alpha demethylase
    action: INHIBITOR
  properties:
    full-mwt: 700.79
    mw-freebase: 700.79
    alogp: 4.57
    psa: 115.7
    hba: 12
    hbd: 1
    rtb: 12
    num-ro5-violations: 2
    qed-weighted: 0.2
    full-molformula: C37H42F2N8O4
  identity-check: connectivity-match
pk-verification:
  source: fda-label
  status: consistent
  set-id: f8a26673-261c-4e8e-b1e1-9e23aaf7f285
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f8a26673-261c-4e8e-b1e1-9e23aaf7f285
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Noxafil
  ema-number: EMEA/H/C/000610
  url: https://www.ema.europa.eu/en/documents/product-information/noxafil-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Posaconazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `posaconazole-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1397](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1397/) · max phase 4 · id via Wikipedia infobox · structure check: ⚠️ same skeleton, stereo/isotope layer differs

## Source summary

Disrupts fungal ergosterol synthesis or membrane function; interaction and organ-toxicity profiles differ substantially.

## Mechanism

Cytochrome P450 51 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2005
- **ATC J02AC04:** ANTIINFECTIVES FOR SYSTEMIC USE › ANTIMYCOTICS FOR SYSTEMIC USE › Triazole and tetrazole derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 700.79 | 4.57 | 115.7 | 1/12 | 2 | C37H42F2N8O4 |

**Targets (ChEMBL curated mechanisms):**

- [[Lanosterol 14-alpha demethylase (CHEMBL1780)|Lanosterol 14-alpha demethylase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Posaconazole*](https://en.wikipedia.org/w/index.php?title=Posaconazole&oldid=1370055331) (revision 1370055331, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 16–31 h | 16 to 31 hours |
| Protein binding | 98–99 % | 98 to 99% |
| Bioavailability | 8–47 % | Low (8 to 47% Oral) |
| Metabolism | hepatic | Liver (glucuronidation) |
| Excretion | mainly urinary | Fecal (71–77%) and Kidney (13–14%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set f8a26673…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f8a26673-261c-4e8e-b1e1-9e23aaf7f285), label version 20260803. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0, 3, 7, 11, 24, 26)
> - protein-binding: consistent (label values: 98)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Noxafil*](https://www.ema.europa.eu/en/documents/product-information/noxafil-epar-product-information_en.pdf) (EMEA/H/C/000610). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 20, 27, 35, 43, 66)
> - protein-binding: consistent (SmPC values: 98)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Fluconazole]] (Lanosterol 14-alpha demethylase), [[Tioconazole]] (Lanosterol 14-alpha demethylase), [[Voriconazole]] (Lanosterol 14-alpha demethylase)
- **Same ATC subgroup:** [[Fluconazole]], [[Oteseconazole]], [[Voriconazole]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
