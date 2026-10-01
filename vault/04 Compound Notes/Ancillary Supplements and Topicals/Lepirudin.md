---
type: compound
schema-version: 2
compound-id: lepirudin-compound
name: Lepirudin
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Thrombin inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201666
chembl-max-phase: 4
half-life:
  value: 1.3
  value-max: null
  unit: h
  notes: ~1.3 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: '100'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
pk-source:
  type: wikipedia-infobox
  title: Lepirudin
  url: https://en.wikipedia.org/w/index.php?title=Lepirudin&oldid=1329259409
  revision: 1329259409
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1201666
  pref-name: LEPIRUDIN
  molecule-type: Protein
  first-approval: 1997
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - B01AE02
  targets:
  - id: CHEMBL204
    name: Prothrombin
    action: INHIBITOR
  properties: {}
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Lepirudin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lepirudin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1201666](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201666/) · max phase 4 · id via source catalogue

## Source summary

Thrombin inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL1201666).

## Mechanism

Thrombin inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 1997
- **ATC B01AE02:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Direct thrombin inhibitors

**Targets (ChEMBL curated mechanisms):**

- [[Prothrombin (CHEMBL204)|Prothrombin]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lepirudin*](https://en.wikipedia.org/w/index.php?title=Lepirudin&oldid=1329259409) (revision 1329259409, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.3 h | ~1.3 hours |
| Bioavailability | - | 100 |
| Excretion | mainly urinary | Renal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Antithrombin Alfa]] (Prothrombin), [[Argatroban]] (Prothrombin), [[Dabigatran (Pradaxa)]] (Prothrombin), [[Desirudin]] (Prothrombin), [[Ichorcumab]] (Prothrombin), [[Ximelagatran]] (Prothrombin)
- **Same ATC subgroup:** [[Argatroban]], [[Dabigatran Etexilate]], [[Desirudin]], [[Ximelagatran]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
