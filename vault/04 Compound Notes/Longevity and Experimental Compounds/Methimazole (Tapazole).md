---
type: compound
schema-version: 2
compound-id: methimazole-compound
name: Methimazole (Tapazole)
aliases:
- Methimazole
- Tapazole
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: Thyroid peroxidase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1515
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 6.0
  unit: h
  notes: 5–6 hours
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: None
bioavailability:
  value: 93.0
  value-max: null
  notes: 93%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
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
  title: Thiamazole
  url: https://en.wikipedia.org/w/index.php?title=Thiamazole&oldid=1366300968
  revision: 1366300968
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1515
  pref-name: METHIMAZOLE
  molecule-type: Small molecule
  first-approval: 1950
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - H03BB02
  - H03BB52
  targets:
  - id: CHEMBL1839
    name: Thyroid peroxidase
    action: INHIBITOR
  properties:
    full-mwt: 114.17
    mw-freebase: 114.17
    alogp: 0.71
    psa: 17.82
    hba: 3
    hbd: 1
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.49
    full-molformula: C4H6N2S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: f69edfa9-0efb-4fe8-aeab-50f7baeebb6a
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f69edfa9-0efb-4fe8-aeab-50f7baeebb6a
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Methimazole (Tapazole)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `methimazole-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Methimazole, Tapazole
- **ChEMBL:** [CHEMBL1515](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1515/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

First-line thionamide antithyroid drug; blocks thyroid peroxidase and so blocks hormone synthesis.

## Mechanism

Thyroid peroxidase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1950
- **ATC H03BB02:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › ANTITHYROID PREPARATIONS › Sulfur-containing imidazole derivatives
- **ATC H03BB52:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › ANTITHYROID PREPARATIONS › Sulfur-containing imidazole derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 114.17 | 0.71 | 17.82 | 1/3 | 0 | C4H6N2S |

**Targets (ChEMBL curated mechanisms):**

- [[Thyroid peroxidase (CHEMBL1839)|Thyroid peroxidase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Thiamazole*](https://en.wikipedia.org/w/index.php?title=Thiamazole&oldid=1366300968) (revision 1366300968, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–6 h | 5–6 hours |
| Protein binding | - | None |
| Bioavailability | 93 % | 93% |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Kidney |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set f69edfa9…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f69edfa9-0efb-4fe8-aeab-50f7baeebb6a), label version 20260909. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Propylthiouracil (PTU)]] (Thyroid peroxidase)

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
