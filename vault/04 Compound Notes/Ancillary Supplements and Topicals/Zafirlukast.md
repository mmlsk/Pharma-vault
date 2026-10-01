---
type: compound
schema-version: 2
compound-id: zafirlukast-compound
name: Zafirlukast
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Cysteinyl leukotriene receptor 1 antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL603
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: null
  unit: h
  notes: 10 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99% (albumin)'
bioavailability:
  value: null
  value-max: null
  notes: Unknown
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Fecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP2C9-mediated)
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
  title: Zafirlukast
  url: https://en.wikipedia.org/w/index.php?title=Zafirlukast&oldid=1345260498
  revision: 1345260498
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL603
  pref-name: ZAFIRLUKAST
  molecule-type: Small molecule
  first-approval: 1996
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - R03DC01
  targets:
  - id: CHEMBL1798
    name: Cysteinyl leukotriene receptor 1
    action: ANTAGONIST
  properties:
    full-mwt: 575.69
    mw-freebase: 575.69
    alogp: 5.7
    psa: 115.73
    hba: 7
    hbd: 2
    rtb: 8
    num-ro5-violations: 2
    qed-weighted: 0.28
    full-molformula: C31H33N3O6S
pk-verification:
  source: fda-label
  status: consistent
  set-id: baba507f-6557-4551-815c-9ab6606e4ee1
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=baba507f-6557-4551-815c-9ab6606e4ee1
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Zafirlukast

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `zafirlukast-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL603](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL603/) · max phase 4 · id via source catalogue

## Source summary

Cysteinyl leukotriene receptor 1 antagonist; approved/marketed compound catalogued by ChEMBL (CHEMBL603).

## Mechanism

Cysteinyl leukotriene receptor 1 antagonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1996
- **ATC R03DC01:** RESPIRATORY SYSTEM › OTHER SYSTEMIC DRUGS FOR OBSTRUCTIVE AIRWAY DISEASES › Leukotriene receptor antagonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 575.69 | 5.7 | 115.73 | 2/7 | 2 | C31H33N3O6S |

**Targets (ChEMBL curated mechanisms):**

- [[Cysteinyl leukotriene receptor 1 (CHEMBL1798)|Cysteinyl leukotriene receptor 1]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Zafirlukast*](https://en.wikipedia.org/w/index.php?title=Zafirlukast&oldid=1345260498) (revision 1345260498, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10 h | 10 hours |
| Protein binding | 99 % | >99% (albumin) |
| Bioavailability | - | Unknown |
| Metabolism | hepatic | Hepatic (CYP2C9-mediated) |
| CYP (metabolised by) | CYP2C9 | roles as inhibitor/inducer not assessed |
| Metabolites | - | hydroxylated metabolites |
| Excretion | mainly non-renal | Fecal |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set baba507f…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=baba507f-6557-4551-815c-9ab6606e4ee1), label version 20260316. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1, 2, 8, 10, 16)
> - protein-binding: consistent (label values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Pranlukast]] (Cysteinyl leukotriene receptor 1)
- **Same ATC subgroup:** [[Ibudilast]], [[Montelukast (Singulair)]], [[Pranlukast]]
- **Shared CYP substrate pool:** CYP2C9 (+40 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
