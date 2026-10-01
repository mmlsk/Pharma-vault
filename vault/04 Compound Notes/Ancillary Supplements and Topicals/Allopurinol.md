---
type: compound
schema-version: 2
compound-id: allopurinol-compound
name: Allopurinol
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Xanthine dehydrogenase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1467
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: null
  unit: h
  notes: 2 h (oxipurinol 18–30 h)
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: Negligible
bioavailability:
  value: 78.0
  value-max: null
  notes: 78±20%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (80% oxipurinol, 10% allopurinol ribosides)
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
  title: Allopurinol
  url: https://en.wikipedia.org/w/index.php?title=Allopurinol&oldid=1356288153
  revision: 1356288153
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1467
  pref-name: ALLOPURINOL
  molecule-type: Small molecule
  first-approval: 1966
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - M04AA01
  - M04AA51
  targets:
  - id: CHEMBL1929
    name: Xanthine dehydrogenase/oxidase
    action: INHIBITOR
  properties:
    full-mwt: 136.11
    mw-freebase: 136.11
    alogp: 0.06
    psa: 74.69
    hba: 4
    hbd: 2
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.54
    full-molformula: C5H4N4O
pk-verification:
  source: fda-label
  status: consistent
  set-id: 8f50e91e-66a7-4fd4-888a-9f1986aa661c
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8f50e91e-66a7-4fd4-888a-9f1986aa661c
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Allopurinol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `allopurinol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1467](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1467/) · max phase 4 · id via Wikipedia infobox

## Source summary

Xanthine oxidase inhibitor for gout; also a major interaction hazard with azathioprine.

## Mechanism

Xanthine dehydrogenase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1966
- **Flags:** black-box warning
- **ATC M04AA01:** MUSCULO-SKELETAL SYSTEM › ANTIGOUT PREPARATIONS › Preparations inhibiting uric acid production
- **ATC M04AA51:** MUSCULO-SKELETAL SYSTEM › ANTIGOUT PREPARATIONS › Preparations inhibiting uric acid production

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 136.11 | 0.06 | 74.69 | 2/4 | 0 | C5H4N4O |

**Targets (ChEMBL curated mechanisms):**

- [[Xanthine dehydrogenase-oxidase (CHEMBL1929)|Xanthine dehydrogenase/oxidase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Allopurinol*](https://en.wikipedia.org/w/index.php?title=Allopurinol&oldid=1356288153) (revision 1356288153, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 2 h (oxipurinol 18–30 h) |
| Protein binding | - | Negligible |
| Bioavailability | 78 % | 78±20% |
| Metabolism | hepatic | Liver (80% oxipurinol, 10% allopurinol ribosides) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 8f50e91e…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8f50e91e-66a7-4fd4-888a-9f1986aa661c), label version 20260910. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1, 2, 15)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Febuxostat (Uloric)]] (Xanthine dehydrogenase/oxidase), [[Oxypurinol]] (Xanthine dehydrogenase/oxidase), [[Topiroxostat]] (Xanthine dehydrogenase/oxidase)
- **Same ATC subgroup:** [[Febuxostat (Uloric)]], [[Tisopurine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
