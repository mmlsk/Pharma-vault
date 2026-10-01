---
type: compound
schema-version: 2
compound-id: lemborexant-compound
name: Lemborexant (Dayvigo)
aliases:
- Lemborexant
- Dayvigo
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: Orexin receptor 1 antagonist; Orexin receptor 2 antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3545367
chembl-max-phase: 4
half-life:
  value: 17.0
  value-max: 19.0
  unit: h
  notes: 17–19 hours or 55 hours
protein-binding:
  value: 94.0
  value-max: null
  unit: percent
  notes: 94%
bioavailability:
  value: 87.0
  value-max: null
  notes: Good (≥87%)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 'Feces: 57.4%; Urine: 29.1%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver (major: CYP3A4, minor: CYP3A5)'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- evidence-limited
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Lemborexant
  url: https://en.wikipedia.org/w/index.php?title=Lemborexant&oldid=1372968166
  revision: 1372968166
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL3545367
  pref-name: LEMBOREXANT
  molecule-type: Small molecule
  first-approval: 2020
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N05CJ02
  targets:
  - id: CHEMBL5113
    name: Orexin/Hypocretin receptor type 1
    action: ANTAGONIST
  - id: CHEMBL4792
    name: Orexin receptor type 2
    action: ANTAGONIST
  properties:
    full-mwt: 410.42
    mw-freebase: 410.42
    alogp: 3.74
    psa: 77.0
    hba: 5
    hbd: 1
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.67
    full-molformula: C22H20F2N4O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 7074cb65-77b3-45d2-8e8d-da8dc0f70bfd
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7074cb65-77b3-45d2-8e8d-da8dc0f70bfd
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Lemborexant (Dayvigo)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lemborexant-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Lemborexant, Dayvigo
- **ChEMBL:** [CHEMBL3545367](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3545367/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Dual orexin-receptor antagonist for sleep-onset and maintenance insomnia, with next-day impairment and CNS-depressant interaction concerns.

## Mechanism

Orexin receptor 1 antagonist; Orexin receptor 2 antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2020
- **ATC N05CJ02:** NERVOUS SYSTEM › HYPNOTICS AND SEDATIVES › Orexin receptor antagonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 410.42 | 3.74 | 77.0 | 1/5 | 0 | C22H20F2N4O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Orexin-Hypocretin receptor type 1 (CHEMBL5113)|Orexin/Hypocretin receptor type 1]] - antagonist · SINGLE PROTEIN
- [[Orexin receptor type 2 (CHEMBL4792)|Orexin receptor type 2]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lemborexant*](https://en.wikipedia.org/w/index.php?title=Lemborexant&oldid=1372968166) (revision 1372968166, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 17–19 h | 17–19 hours or 55 hours |
| Protein binding | 94 % | 94% |
| Bioavailability | 87 % | Good (≥87%) |
| Metabolism | hepatic | Liver (major: CYP3A4, minor: CYP3A5) |
| CYP (metabolised by) | CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Metabolites | - | M10 |
| Excretion | mainly non-renal | Feces: 57.4%; Urine: 29.1% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 7074cb65…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7074cb65-77b3-45d2-8e8d-da8dc0f70bfd), label version 20250224. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 17, 19)
> - protein-binding: consistent (label values: 88, 94)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Seltorexant]] (Orexin receptor type 2)
- **Same ATC subgroup:** [[Daridorexant (Quviviq)]], [[Suvorexant (Belsomra)]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others), CYP3A5 (+13 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
