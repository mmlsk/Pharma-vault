---
type: compound
schema-version: 2
compound-id: atazanavir-compound
name: Atazanavir
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1163
chembl-max-phase: 4
half-life:
  value: 6.5
  value-max: null
  unit: h
  notes: 6.5 hours
protein-binding:
  value: 86.0
  value-max: null
  unit: percent
  notes: 86%
bioavailability:
  value: 60.0
  value-max: 68.0
  notes: 60-68%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Fecal and kidney
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
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Atazanavir
  url: https://en.wikipedia.org/w/index.php?title=Atazanavir&oldid=1351543005
  revision: 1351543005
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1163
  pref-name: ATAZANAVIR
  molecule-type: Small molecule
  first-approval: 2003
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J05AE08
  targets: []
  properties:
    full-mwt: 704.87
    mw-freebase: 704.87
    alogp: 4.21
    psa: 171.22
    hba: 9
    hbd: 5
    rtb: 14
    num-ro5-violations: 1
    qed-weighted: 0.15
    full-molformula: C38H52N6O7
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 7fbea274-d6b5-4faa-bbf0-05fefab42114
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7fbea274-d6b5-4faa-bbf0-05fefab42114
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Reyataz
  ema-number: EMEA/H/C/000494
  url: https://www.ema.europa.eu/en/documents/product-information/reyataz-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/reyataz-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Atazanavir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `atazanavir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1163](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1163/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

HIV protease inhibitor with a relatively lipid-friendly profile, distinguished by the benign unconjugated hyperbilirubinaemia it causes.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2003
- **ATC J05AE08:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Protease inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 704.87 | 4.21 | 171.22 | 5/9 | 1 | C38H52N6O7 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Atazanavir*](https://en.wikipedia.org/w/index.php?title=Atazanavir&oldid=1351543005) (revision 1351543005, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6.5 h | 6.5 hours |
| Protein binding | 86 % | 86% |
| Bioavailability | 60–68 % | 60-68% |
| Metabolism | hepatic | Liver (CYP3A4-mediated) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Fecal and kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 7fbea274…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7fbea274-d6b5-4faa-bbf0-05fefab42114), label version 20250806. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 6.4, 7, 12.1)
> - protein-binding: consistent (label values: 86)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Reyataz*](https://www.ema.europa.eu/en/documents/product-information/reyataz-epar-product-information_en.pdf) (EMEA/H/C/000494) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/reyataz-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 6.4, 12, 12.1)
> - protein-binding: consistent (SmPC values: 86)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Darunavir]], [[Ensitrelvir]], [[Fosamprenavir]], [[Ritonavir]], [[Saquinavir]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
