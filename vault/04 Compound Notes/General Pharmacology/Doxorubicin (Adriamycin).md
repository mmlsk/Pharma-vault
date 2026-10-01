---
type: compound
schema-version: 2
compound-id: doxorubicin-compound
name: Doxorubicin (Adriamycin)
aliases:
- Doxorubicin
- Adriamycin
cluster: General Pharmacology
group: oncology
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL53463
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: null
  unit: min
  notes: 'Triphasic; 12 minutes, 3.3 hours, 30 hours. Mean: 1–3 hours'
protein-binding:
  value: 75.0
  value-max: null
  unit: percent
  notes: 75%
bioavailability:
  value: 5.0
  value-max: null
  notes: 5% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine (5–12%), faeces (40–50%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
- cytotoxicity
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/oncology
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-discrepant
- pk-ema-discrepant
pk-source:
  type: wikipedia-infobox
  title: Doxorubicin
  url: https://en.wikipedia.org/w/index.php?title=Doxorubicin&oldid=1369613446
  revision: 1369613446
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL53463
  pref-name: DOXORUBICIN
  molecule-type: Small molecule
  first-approval: 1974
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L01DB01
  targets: []
  properties:
    full-mwt: 543.53
    mw-freebase: 543.53
    alogp: 0.0
    psa: 206.07
    hba: 12
    hbd: 6
    rtb: 5
    num-ro5-violations: 3
    qed-weighted: 0.24
    full-molformula: C27H29NO11
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: discrepant
  set-id: d928625e-c1ef-4f25-8d25-764c8c6aab67
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d928625e-c1ef-4f25-8d25-764c8c6aab67
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: discrepant
  product: Caelyx pegylated liposomal
  ema-number: EMEA/H/C/000089
  url: https://www.ema.europa.eu/en/documents/product-information/caelyx-pegylated-liposomal-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/caelyx-pegylated-liposomal-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: no-label-value
---

# Doxorubicin (Adriamycin)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `doxorubicin-compound`
- **Source group:** Oncology & Cytotoxics (`oncology`)
- **Cluster:** [[General Pharmacology]]
- **Aliases:** Doxorubicin, Adriamycin
- **ChEMBL:** [CHEMBL53463](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL53463/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

An anthracycline that intercalates DNA, poisons topoisomerase II and generates iron-dependent free radicals. The last of those is why its cardiotoxicity is cumulative and dose-limited rather than reversible.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1974
- **Flags:** black-box warning
- **ATC L01DB01:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › CYTOTOXIC ANTIBIOTICS AND RELATED SUBSTANCES › Anthracyclines and related substances

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 543.53 | 0.0 | 206.07 | 6/12 | 3 | C27H29NO11 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Doxorubicin*](https://en.wikipedia.org/w/index.php?title=Doxorubicin&oldid=1369613446) (revision 1369613446, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12 min | Triphasic; 12 minutes, 3.3 hours, 30 hours. Mean: 1–3 hours |
| Protein binding | 75 % | 75% |
| Bioavailability | 5 % | 5% (by mouth) |
| Metabolism | hepatic | Liver |
| Excretion | - | Urine (5–12%), faeces (40–50%) |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set d928625e…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d928625e-c1ef-4f25-8d25-764c8c6aab67), label version 20240529. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 0.083, 20, 35, 48)
> - protein-binding: consistent (label values: 75)

> [!danger] EU SmPC cross-check: **discrepant**
> Automated comparison with section 5.2 of the [EU SmPC of *Caelyx pegylated liposomal*](https://www.ema.europa.eu/en/documents/product-information/caelyx-pegylated-liposomal-epar-product-information_en.pdf) (EMEA/H/C/000089) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/caelyx-pegylated-liposomal-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (SmPC values: 24, 36.1, 45.2, 71.5, 73.9, 75)
> - protein-binding: no-label-value (SmPC values: -)

## Safety routing

Group-level triage (not compound-specific): `cytotoxicity`

- [[Stacking and Interaction Risks]]
