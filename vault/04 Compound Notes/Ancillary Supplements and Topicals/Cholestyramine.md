---
type: compound
schema-version: 2
compound-id: cholestyramine-compound
name: Cholestyramine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Bile acids sequestering agent
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201625
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: null
  unit: h
  notes: 1 hour
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: unknown
bioavailability:
  value: null
  value-max: null
  notes: low
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Faecal
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: bile acids
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
  title: Colestyramine
  url: https://en.wikipedia.org/w/index.php?title=Colestyramine&oldid=1339777528
  revision: 1339777528
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201625
  pref-name: CHOLESTYRAMINE
  molecule-type: Unknown
  first-approval: 1973
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C10AC01
  targets:
  - id: CHEMBL2364175
    name: Bile acids
    action: SEQUESTERING AGENT
  properties: {}
  identity-check: no-chembl-structure
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 214ea05f-de81-4026-9df9-4ce3820668ee
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=214ea05f-de81-4026-9df9-4ce3820668ee
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Cholestyramine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cholestyramine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1201625](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201625/) · max phase 4 · id via Wikipedia infobox · structure check: no small-molecule structure in ChEMBL

## Source summary

Bile acid sequestrant; the oldest lipid drug class with hard outcome data behind it.

## Mechanism

Bile acids sequestering agent _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Unknown
- **First approval (ChEMBL):** 1973
- **ATC C10AC01:** CARDIOVASCULAR SYSTEM › LIPID MODIFYING AGENTS, PLAIN › Bile acid sequestrants

**Targets (ChEMBL curated mechanisms):**

- [[Bile acids (CHEMBL2364175)|Bile acids]] - sequestering agent · SMALL MOLECULE

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Colestyramine*](https://en.wikipedia.org/w/index.php?title=Colestyramine&oldid=1339777528) (revision 1339777528, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1 h | 1 hour |
| Protein binding | - | unknown |
| Bioavailability | - | low |
| Metabolism | - | bile acids |
| Excretion | mainly non-renal | Faecal |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 214ea05f…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=214ea05f-de81-4026-9df9-4ce3820668ee), label version 20260820. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
