---
type: compound
schema-version: 2
compound-id: fondaparinux-compound
name: Fondaparinux
aliases: []
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
chembl-id: CHEMBL1201202
chembl-max-phase: 4
half-life:
  value: 17.0
  value-max: 21.0
  unit: h
  notes: 17-21 hours
protein-binding:
  value: 94.0
  value-max: null
  unit: percent
  notes: 94%
bioavailability:
  value: null
  value-max: null
  notes: N/A
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: renally excreted unchanged
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
  title: Fondaparinux
  url: https://en.wikipedia.org/w/index.php?title=Fondaparinux&oldid=1332349072
  revision: 1332349072
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201202
  pref-name: FONDAPARINUX
  molecule-type: Oligosaccharide
  first-approval: 2001
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - B01AX05
  targets: []
  properties:
    full-mwt: 1508.27
    mw-freebase: 1508.27
    full-molformula: C31H53N3O49S8
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Fondaparinux

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fondaparinux-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1201202](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201202/) · max phase 4 · id via Wikipedia infobox

## Source summary

Synthetic factor Xa inhibitor given by injection; bleeding risk rises sharply with other anticoagulants.

## ChEMBL profile

- **Molecule type:** Oligosaccharide
- **First approval (ChEMBL):** 2001
- **Flags:** black-box warning
- **ATC B01AX05:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Other antithrombotic agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1508.27 | - | - | -/- | - | C31H53N3O49S8 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fondaparinux*](https://en.wikipedia.org/w/index.php?title=Fondaparinux&oldid=1332349072) (revision 1332349072, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 17–21 h | 17-21 hours |
| Protein binding | 94 % | 94% |
| Bioavailability | - | N/A |
| Metabolism | - | renally excreted unchanged |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
