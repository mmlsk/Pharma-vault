---
type: compound
schema-version: 2
compound-id: ustekinumab-compound
name: Ustekinumab
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Interleukin-12 inhibitor; Interleukin-23 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201835
chembl-max-phase: 4
half-life:
  value: 15.0
  value-max: 32.0
  unit: d
  notes: 15–32 days (average 3 weeks)
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: unknown
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
  title: Ustekinumab
  url: https://en.wikipedia.org/w/index.php?title=Ustekinumab&oldid=1373343438
  revision: 1373343438
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201835
  pref-name: USTEKINUMAB
  molecule-type: Antibody
  first-approval: 2009
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L04AC05
  targets:
  - id: CHEMBL2364153
    name: Interleukin-12
    action: INHIBITOR
  - id: CHEMBL2364154
    name: Interleukin-23
    action: INHIBITOR
  properties: {}
pk-verification:
  source: fda-label
  status: consistent
  set-id: c77a9664-e3bb-4023-b400-127aa53bca2b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c77a9664-e3bb-4023-b400-127aa53bca2b
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Ustekinumab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ustekinumab-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1201835](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201835/) · max phase 4 · id via Wikipedia infobox

## Source summary

Neutralizes IL-23 signaling to suppress pathogenic Th17 maintenance in immune-mediated disease.

## Mechanism

Interleukin-12 inhibitor; Interleukin-23 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 2009
- **ATC L04AC05:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Interleukin inhibitors

**Targets (ChEMBL curated mechanisms):**

- [[Interleukin-12 (CHEMBL2364153)|Interleukin-12]] - inhibitor · PROTEIN COMPLEX
- [[Interleukin-23 (CHEMBL2364154)|Interleukin-23]] - inhibitor · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ustekinumab*](https://en.wikipedia.org/w/index.php?title=Ustekinumab&oldid=1373343438) (revision 1373343438, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 15–32 d | 15–32 days (average 3 weeks) |
| Metabolism | - | unknown |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set c77a9664…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c77a9664-e3bb-4023-b400-127aa53bca2b), label version 20260908. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 357.6, 456, 1094.4)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Briakinumab]] (Interleukin-12; Interleukin-23), [[Brazikumab]] (Interleukin-23), [[Guselkumab]] (Interleukin-23), [[Mirikizumab]] (Interleukin-23), [[Risankizumab]] (Interleukin-23), [[Tildrakizumab]] (Interleukin-23)
- **Same ATC subgroup:** [[Anakinra]], [[Basiliximab]], [[Bimekizumab]], [[Briakinumab]], [[Brodalumab]], [[Canakinumab (Ilaris)]], [[Guselkumab]], [[Ixekizumab]], [[Mirikizumab]], [[Netakimab]], [[Olokizumab]], [[Rilonacept]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
