---
type: compound
schema-version: 2
compound-id: zidovudine-compound
name: Zidovudine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Human immunodeficiency virus type 1 reverse transcriptase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL129
chembl-max-phase: 4
half-life:
  value: 0.5
  value-max: 3.0
  unit: h
  notes: 0.5 to 3 hours
protein-binding:
  value: 30.0
  value-max: 38.0
  unit: percent
  notes: 30 to 38%
bioavailability:
  value: 75.0
  value-max: null
  notes: Complete absorption, following first-pass metabolism systemic availability 75% (range 52 to 75%)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney and Bile duct
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Zidovudine
  url: https://en.wikipedia.org/w/index.php?title=Zidovudine&oldid=1366106723
  revision: 1366106723
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL129
  pref-name: ZIDOVUDINE
  molecule-type: Small molecule
  first-approval: 1987
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J05AF01
  targets:
  - id: CHEMBL247
    name: Human immunodeficiency virus type 1 reverse transcriptase
    action: INHIBITOR
  properties:
    full-mwt: 267.24
    mw-freebase: 267.24
    alogp: -0.2
    psa: 133.08
    hba: 6
    hbd: 2
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.45
    full-molformula: C10H13N5O4
pk-verification:
  source: fda-label
  status: consistent
  set-id: 437f55b2-f6d9-0065-e063-6294a90ab929
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=437f55b2-f6d9-0065-e063-6294a90ab929
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Zidovudine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `zidovudine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL129](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL129/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits HIV reverse transcriptase and is used only as part of a resistance-aware antiretroviral regimen.

## Mechanism

Human immunodeficiency virus type 1 reverse transcriptase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1987
- **Flags:** black-box warning, prodrug
- **ATC J05AF01:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Nucleoside and nucleotide reverse transcriptase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 267.24 | -0.2 | 133.08 | 2/6 | 0 | C10H13N5O4 |

**Targets (ChEMBL curated mechanisms):**

- [[Human immunodeficiency virus type 1 reverse transcriptase (CHEMBL247)|Human immunodeficiency virus type 1 reverse transcriptase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Zidovudine*](https://en.wikipedia.org/w/index.php?title=Zidovudine&oldid=1366106723) (revision 1366106723, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.5–3 h | 0.5 to 3 hours |
| Protein binding | 30–38 % | 30 to 38% |
| Bioavailability | 75 % | Complete absorption, following first-pass metabolism systemic availability 75% (range 52 to 75%) |
| Metabolism | hepatic | Liver |
| Excretion | - | Kidney and Bile duct |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 437f55b2…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=437f55b2-f6d9-0065-e063-6294a90ab929), label version 20260119. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1, 8, 13, 336)
> - protein-binding: consistent (label values: 38)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Doravirine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Efavirenz]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Emtricitabine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Etravirine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Islatravir]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Lamivudine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Nevirapine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Rilpivirine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Tenofovir Alafenamide]] (Human immunodeficiency virus type 1 reverse transcriptase)
- **Same ATC subgroup:** [[Abacavir]], [[Emtricitabine]], [[Lamivudine]], [[Telbivudine]], [[Tenofovir]], [[Tenofovir Alafenamide]], [[Tenofovir Disoproxil]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
