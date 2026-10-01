---
type: compound
schema-version: 2
compound-id: anakinra-compound
name: Anakinra
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Interleukin-1 receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201570
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: 6.0
  unit: h
  notes: 4-6 hrs
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 95.0
  value-max: null
  notes: 95%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: predominantly kidney
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
  title: Anakinra
  url: https://en.wikipedia.org/w/index.php?title=Anakinra&oldid=1368834184
  revision: 1368834184
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201570
  pref-name: ANAKINRA
  molecule-type: Protein
  first-approval: 2001
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L04AC03
  targets:
  - id: CHEMBL1959
    name: Interleukin-1 receptor type 1
    action: ANTAGONIST
  properties: {}
pk-verification:
  source: fda-label
  status: consistent
  set-id: d9d74915-6606-4570-9c52-c4001d3177de
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d9d74915-6606-4570-9c52-c4001d3177de
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Anakinra

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `anakinra-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1201570](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201570/) · max phase 4 · id via Wikipedia infobox

## Source summary

Recombinant IL-1 receptor antagonist with a very short half-life, requiring daily injection.

## Mechanism

Interleukin-1 receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 2001
- **ATC L04AC03:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Interleukin inhibitors

**Targets (ChEMBL curated mechanisms):**

- [[Interleukin-1 receptor type 1 (CHEMBL1959)|Interleukin-1 receptor type 1]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Anakinra*](https://en.wikipedia.org/w/index.php?title=Anakinra&oldid=1368834184) (revision 1368834184, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4–6 h | 4-6 hrs |
| Bioavailability | 95 % | 95% |
| Metabolism | - | predominantly kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set d9d74915…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d9d74915-6606-4570-9c52-c4001d3177de), label version 20260403. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 3, 4, 6, 7)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Basiliximab]], [[Bimekizumab]], [[Briakinumab]], [[Brodalumab]], [[Canakinumab (Ilaris)]], [[Guselkumab]], [[Ixekizumab]], [[Mirikizumab]], [[Netakimab]], [[Olokizumab]], [[Rilonacept]], [[Risankizumab]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
