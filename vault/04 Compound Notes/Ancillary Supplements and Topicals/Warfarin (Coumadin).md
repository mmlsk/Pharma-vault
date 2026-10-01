---
type: compound
schema-version: 2
compound-id: warfarin-compound
name: Warfarin (Coumadin)
aliases:
- Warfarin
- Coumadin
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
chembl-id: CHEMBL1464
chembl-max-phase: 4
half-life:
  value: 7.0
  value-max: null
  unit: d
  notes: 7 days (active half-life is 20-60 hours)
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99%
bioavailability:
  value: 79.0
  value-max: 100.0
  notes: 79–100% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (92%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver: CYP2C9, 2C19, 2C8, 2C18, 1A2 and 3A4'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C9
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C9 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Warfarin
  url: https://en.wikipedia.org/w/index.php?title=Warfarin&oldid=1368670593
  revision: 1368670593
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1464
  pref-name: WARFARIN
  molecule-type: Small molecule
  first-approval: 1954
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - B01AA03
  targets: []
  properties:
    full-mwt: 308.33
    mw-freebase: 308.33
    alogp: 3.61
    psa: 67.51
    hba: 4
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.75
    full-molformula: C19H16O4
pk-verification:
  source: fda-label
  status: consistent
  set-id: 5a5b5e3a-6556-a542-e063-6294a90a6d3f
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5a5b5e3a-6556-a542-e063-6294a90a6d3f
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Warfarin (Coumadin)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `warfarin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Warfarin, Coumadin
- **ChEMBL:** [CHEMBL1464](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1464/) · max phase 4 · id via Wikipedia infobox

## Source summary

Vitamin K antagonist anticoagulant with a narrow therapeutic window, extensive food/drug interactions, and INR monitoring requirements.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1954
- **Flags:** black-box warning
- **ATC B01AA03:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Vitamin K antagonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 308.33 | 3.61 | 67.51 | 1/4 | 0 | C19H16O4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Warfarin*](https://en.wikipedia.org/w/index.php?title=Warfarin&oldid=1368670593) (revision 1368670593, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7 d | 7 days (active half-life is 20-60 hours) |
| Protein binding | 99 % | 99% |
| Bioavailability | 79–100 % | 79–100% (by mouth) |
| Metabolism | hepatic | Liver: CYP2C9, 2C19, 2C8, 2C18, 1A2 and 3A4 |
| CYP (metabolised by) | CYP2C9 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney (92%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 5a5b5e3a…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5a5b5e3a-6556-a542-e063-6294a90a6d3f), label version 20260831. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 4, 6, 8, 20, 21, 24)
> - protein-binding: consistent (label values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Acenocoumarol]], [[Clorindione]], [[Dicoumarol]], [[Fluindione]], [[Phenindione]], [[Phenprocoumon]], [[Tioclomarol]]
- **Shared CYP substrate pool:** CYP2C9 (+40 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
