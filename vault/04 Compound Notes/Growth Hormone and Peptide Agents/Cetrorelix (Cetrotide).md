---
type: compound
schema-version: 2
compound-id: cetrorelix-compound
name: Cetrorelix (Cetrotide)
aliases:
- Cetrorelix
- Cetrotide
cluster: Growth Hormone and Peptide Agents
group: peptides
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1200490
chembl-max-phase: 4
half-life:
  value: 62.8
  value-max: null
  unit: h
  notes: 62.8 hours / 3 mg single dose; 5 hours / 0.25 mg single dose; 20.6 hours / 0.25 mg multiple doses
protein-binding:
  value: 86.0
  value-max: null
  unit: percent
  notes: 86%
bioavailability:
  value: 85.0
  value-max: null
  notes: 85%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.1
  notes: feces (5% to 10% as unchanged drug and metabolites); urine (2% to 4% as unchanged drug)
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
- evidence-limited
- identity-contamination
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/peptides
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-ema-discrepant
pk-source:
  type: wikipedia-infobox
  title: Cetrorelix
  url: https://en.wikipedia.org/w/index.php?title=Cetrorelix&oldid=1329009186
  revision: 1329009186
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1200490
  pref-name: CETRORELIX
  molecule-type: Protein
  first-approval: 1999
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - H01CC02
  targets: []
  properties:
    full-mwt: 1431.06
    mw-freebase: 1431.06
    full-molformula: C70H92ClN17O14
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
  status: discrepant
  product: Cetrotide
  ema-number: EMEA/H/C/000233
  url: https://www.ema.europa.eu/en/documents/product-information/cetrotide-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/cetrotide-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: no-label-value
---

# Cetrorelix (Cetrotide)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cetrorelix-compound`
- **Source group:** Peptides (`peptides`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **Aliases:** Cetrorelix, Cetrotide
- **ChEMBL:** [CHEMBL1200490](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1200490/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

GnRH antagonist used in IVF to stop a premature LH surge; immediate suppression, no flare.

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 1999
- **ATC H01CC02:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › HYPOTHALAMIC HORMONES › Anti-gonadotropin-releasing hormones

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1431.06 | - | - | -/- | - | C70H92ClN17O14 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cetrorelix*](https://en.wikipedia.org/w/index.php?title=Cetrorelix&oldid=1329009186) (revision 1329009186, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 62.8 h | 62.8 hours / 3 mg single dose; 5 hours / 0.25 mg single dose; 20.6 hours / 0.25 mg multiple doses |
| Protein binding | 86 % | 86% |
| Bioavailability | 85 % | 85% |
| Excretion | - · fe 0.1 | feces (5% to 10% as unchanged drug and metabolites); urine (2% to 4% as unchanged drug) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!danger] EU SmPC cross-check: **discrepant**
> Automated comparison with section 5.2 of the [EU SmPC of *Cetrotide*](https://www.ema.europa.eu/en/documents/product-information/cetrotide-epar-product-information_en.pdf) (EMEA/H/C/000233) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/cetrotide-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (SmPC values: 12, 30)
> - protein-binding: no-label-value (SmPC values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Elagolix]], [[Ganirelix (Fyremadel-Orgalutran)|Ganirelix (Fyremadel/Orgalutran)]], [[Linzagolix]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`, `identity-contamination`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
