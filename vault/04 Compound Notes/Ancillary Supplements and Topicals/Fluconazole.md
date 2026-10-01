---
type: compound
schema-version: 2
compound-id: fluconazole-compound
name: Fluconazole
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
chembl-id: CHEMBL106
chembl-max-phase: 4
half-life:
  value: 30.0
  value-max: null
  unit: h
  notes: 30 hours (range 20–50 hours)
protein-binding:
  value: 11.0
  value-max: 12.0
  unit: percent
  notes: 11–12%
bioavailability:
  value: 90.0
  value-max: null
  notes: '>90% (oral)'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney 61–88%
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver 11%
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
  title: Fluconazole
  url: https://en.wikipedia.org/w/index.php?title=Fluconazole&oldid=1370054243
  revision: 1370054243
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL106
  pref-name: FLUCONAZOLE
  molecule-type: Small molecule
  first-approval: 1990
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - D01AC15
  - J02AC01
  targets:
  - id: CHEMBL1780
    name: Lanosterol 14-alpha demethylase
    action: INHIBITOR
  properties:
    full-mwt: 306.28
    mw-freebase: 306.28
    alogp: 0.74
    psa: 81.65
    hba: 7
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.75
    full-molformula: C13H12F2N6O
pk-verification:
  source: fda-label
  status: consistent
  set-id: aaf9e5f8-048e-407c-bc11-ad4edff85c05
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=aaf9e5f8-048e-407c-bc11-ad4edff85c05
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Fluconazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fluconazole-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL106](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL106/) · max phase 4 · id via Wikipedia infobox

## Source summary

Disrupts fungal ergosterol synthesis or membrane function; interaction and organ-toxicity profiles differ substantially.

## Mechanism

Cytochrome P450 51 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1990
- **ATC D01AC15:** DERMATOLOGICALS › ANTIFUNGALS FOR TOPICAL USE › Imidazole and triazole derivatives
- **ATC J02AC01:** ANTIINFECTIVES FOR SYSTEMIC USE › ANTIMYCOTICS FOR SYSTEMIC USE › Triazole and tetrazole derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 306.28 | 0.74 | 81.65 | 1/7 | 0 | C13H12F2N6O |

**Targets (ChEMBL curated mechanisms):**

- [[Lanosterol 14-alpha demethylase (CHEMBL1780)|Lanosterol 14-alpha demethylase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fluconazole*](https://en.wikipedia.org/w/index.php?title=Fluconazole&oldid=1370054243) (revision 1370054243, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 30 h | 30 hours (range 20–50 hours) |
| Protein binding | 11–12 % | 11–12% |
| Bioavailability | 90 % | >90% (oral) |
| Metabolism | hepatic | Liver 11% |
| Excretion | mainly urinary | Kidney 61–88% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set aaf9e5f8…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=aaf9e5f8-048e-407c-bc11-ad4edff85c05), label version 20260910. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1, 2, 6.6, 7.9, 20, 26.8)
> - protein-binding: consistent (label values: 11, 12)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Posaconazole]] (Lanosterol 14-alpha demethylase), [[Tioconazole]] (Lanosterol 14-alpha demethylase), [[Voriconazole]] (Lanosterol 14-alpha demethylase)
- **Same ATC subgroup:** [[Bifonazole]], [[Econazole]], [[Oteseconazole]], [[Posaconazole]], [[Sertaconazole]], [[Tioconazole]], [[Voriconazole]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
