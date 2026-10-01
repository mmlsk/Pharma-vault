---
type: compound
schema-version: 2
compound-id: sarilumab-compound
name: Sarilumab
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Interleukin-6 receptor alpha subunit antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2108730
chembl-max-phase: 4
half-life:
  value: 21.0
  value-max: null
  unit: d
  notes: 21 days (steady-state, estimated)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 80.0
  value-max: null
  notes: 80%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: likely proteases
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- chembl-name-match
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Sarilumab
  url: https://en.wikipedia.org/w/index.php?title=Sarilumab&oldid=1347461148
  revision: 1347461148
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL2108730
  pref-name: SARILUMAB
  molecule-type: Antibody
  first-approval: 2017
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L04AC14
  targets:
  - id: CHEMBL2364155
    name: Interleukin-6 receptor subunit alpha
    action: ANTAGONIST
  properties: {}
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 827bc01c-d379-4266-a18c-c7f904b76af3
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=827bc01c-d379-4266-a18c-c7f904b76af3
  checked: '2026-10-01'
  fields:
    half-life: discrepant
---

# Sarilumab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sarilumab-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL2108730](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2108730/) · max phase 4 · id via exact ChEMBL name match - confirm

## Source summary

IL-6 receptor antibody for rheumatoid arthritis.

## Mechanism

Interleukin-6 receptor alpha subunit antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 2017
- **Flags:** black-box warning
- **ATC L04AC14:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Interleukin inhibitors

**Targets (ChEMBL curated mechanisms):**

- [[Interleukin-6 receptor subunit alpha (CHEMBL2364155)|Interleukin-6 receptor subunit alpha]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sarilumab*](https://en.wikipedia.org/w/index.php?title=Sarilumab&oldid=1347461148) (revision 1347461148, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 21 d | 21 days (steady-state, estimated) |
| Bioavailability | 80 % | 80% |
| Metabolism | - | likely proteases |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 827bc01c…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=827bc01c-d379-4266-a18c-c7f904b76af3), label version 20260227. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 192, 240)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Tocilizumab]] (Interleukin-6 receptor subunit alpha)
- **Same ATC subgroup:** [[Anakinra]], [[Basiliximab]], [[Bimekizumab]], [[Briakinumab]], [[Brodalumab]], [[Canakinumab (Ilaris)]], [[Guselkumab]], [[Ixekizumab]], [[Mirikizumab]], [[Netakimab]], [[Olokizumab]], [[Rilonacept]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
