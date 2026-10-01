---
type: compound
schema-version: 2
compound-id: infliximab-compound
name: Infliximab
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: TNF-alpha inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201581
chembl-max-phase: 4
half-life:
  value: 9.5
  value-max: null
  unit: d
  notes: 9.5 days
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 92.0
  value-max: null
  notes: 92% (IV, if 8% left in the syringe)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: reticuloendothelial system
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
- possible-duplicate
pk-source:
  type: wikipedia-infobox
  title: Infliximab
  url: https://en.wikipedia.org/w/index.php?title=Infliximab&oldid=1352862302
  revision: 1352862302
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201581
  pref-name: INFLIXIMAB
  molecule-type: Antibody
  first-approval: 1998
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L04AB02
  targets:
  - id: CHEMBL1825
    name: Tumor necrosis factor
    action: INHIBITOR
  properties: {}
pk-verification:
  source: fda-label
  status: consistent
  set-id: dbf738c4-3fac-4422-a9d8-51d9c83a8789
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=dbf738c4-3fac-4422-a9d8-51d9c83a8789
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Infliximab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `infliximab-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1201581](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201581/) · max phase 4 · id via Wikipedia infobox

## Source summary

Neutralizes TNF or its receptor signaling to suppress systemic inflammation, increasing susceptibility to selected infections.

## Mechanism

TNF-alpha inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 1998
- **Flags:** black-box warning
- **ATC L04AB02:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Tumor necrosis factor alpha (TNF-alpha) inhibitors

**Targets (ChEMBL curated mechanisms):**

- [[Tumor necrosis factor (CHEMBL1825)|Tumor necrosis factor]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Infliximab*](https://en.wikipedia.org/w/index.php?title=Infliximab&oldid=1352862302) (revision 1352862302, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9.5 d | 9.5 days |
| Bioavailability | 92 % | 92% (IV, if 8% left in the syringe) |
| Metabolism | - | reticuloendothelial system |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set dbf738c4…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=dbf738c4-3fac-4422-a9d8-51d9c83a8789), label version 20260828. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 184.8, 228)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- ⚠️ **Same molecule in ChEMBL (formulation variant or possible duplicate):** [[Infliximab-abda]]
- **Shared target:** [[Adalimumab]] (Tumor necrosis factor), [[Afelimomab]] (Tumor necrosis factor), [[Certolizumab Pegol]] (Tumor necrosis factor), [[Certolizumab Pegol]] (Tumor necrosis factor), [[Etanercept]] (Tumor necrosis factor), [[Golimumab]] (Tumor necrosis factor), [[Infliximab-abda]] (Tumor necrosis factor), [[Onercept]] (Tumor necrosis factor), [[Ozoralizumab]] (Tumor necrosis factor)
- **Same ATC subgroup:** [[Adalimumab]], [[Afelimomab]], [[Certolizumab Pegol]], [[Certolizumab Pegol]], [[Etanercept]], [[Golimumab]], [[Infliximab-abda]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
