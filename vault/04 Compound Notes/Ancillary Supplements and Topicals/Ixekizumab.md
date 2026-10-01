---
type: compound
schema-version: 2
compound-id: ixekizumab-compound
name: Ixekizumab
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Interleukin 17A inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1743034
chembl-max-phase: 4
half-life:
  value: 13.0
  value-max: null
  unit: d
  notes: 13 days
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 60.0
  value-max: 81.0
  notes: 60–81%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Presumably proteolysis
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
  title: Ixekizumab
  url: https://en.wikipedia.org/w/index.php?title=Ixekizumab&oldid=1295916304
  revision: 1295916304
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1743034
  pref-name: IXEKIZUMAB
  molecule-type: Antibody
  first-approval: 2016
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L04AC13
  targets:
  - id: CHEMBL3390822
    name: Interleukin-17A
    action: INHIBITOR
  properties: {}
pk-verification:
  source: fda-label
  status: consistent
  set-id: ac96658a-d7dc-4c7c-8928-2adcdf4318b2
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ac96658a-d7dc-4c7c-8928-2adcdf4318b2
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Ixekizumab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ixekizumab-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1743034](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1743034/) · max phase 4 · id via Wikipedia infobox

## Source summary

Blocks IL-17 ligand or receptor signaling to reduce neutrophil-dominant inflammation.

## Mechanism

Interleukin 17A inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 2016
- **ATC L04AC13:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Interleukin inhibitors

**Targets (ChEMBL curated mechanisms):**

- [[Interleukin-17A (CHEMBL3390822)|Interleukin-17A]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ixekizumab*](https://en.wikipedia.org/w/index.php?title=Ixekizumab&oldid=1295916304) (revision 1295916304, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 13 d | 13 days |
| Bioavailability | 60–81 % | 60–81% |
| Metabolism | - | Presumably proteolysis |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set ac96658a…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ac96658a-d7dc-4c7c-8928-2adcdf4318b2), label version 20260122. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 312)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Bimekizumab]] (Interleukin-17A), [[Izokibep]] (Interleukin-17A), [[Perakizumab]] (Interleukin-17A), [[Secukinumab]] (Interleukin-17A), [[Sonelokimab]] (Interleukin-17A), [[Vunakizumab]] (Interleukin-17A)
- **Same ATC subgroup:** [[Anakinra]], [[Basiliximab]], [[Bimekizumab]], [[Briakinumab]], [[Brodalumab]], [[Canakinumab (Ilaris)]], [[Guselkumab]], [[Mirikizumab]], [[Netakimab]], [[Olokizumab]], [[Rilonacept]], [[Risankizumab]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
