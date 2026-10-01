---
type: compound
schema-version: 2
compound-id: netupitant-compound
name: Netupitant
aliases: []
cluster: General Pharmacology
group: gi
class: null
subclass: null
mechanism: Neurokinin 1 receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL206253
chembl-max-phase: 4
half-life:
  value: 88.0
  value-max: null
  unit: h
  notes: 88 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
bioavailability:
  value: 60.0
  value-max: null
  notes: '>60% (estimated)'
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 71% (faeces)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: mainly CYP3A4; also CYP2D6 and CYP2C9
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C9
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C9, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- group/gi
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Netupitant
  url: https://en.wikipedia.org/w/index.php?title=Netupitant&oldid=1368522106
  revision: 1368522106
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL206253
  pref-name: NETUPITANT
  molecule-type: Small molecule
  first-approval: 2014
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL249
    name: Substance-P receptor
    action: ANTAGONIST
  properties:
    full-mwt: 578.6
    mw-freebase: 578.6
    alogp: 6.79
    psa: 39.68
    hba: 4
    hbd: 0
    rtb: 5
    num-ro5-violations: 2
    qed-weighted: 0.31
    full-molformula: C30H32F6N4O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Netupitant

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `netupitant-compound`
- **Source group:** Gastrointestinal & Hepatic (`gi`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL206253](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL206253/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

NK-1 antagonist co-formulated with palonosetron as a single oral capsule covering both emetic phases.

## Mechanism

Neurokinin 1 receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2014

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 578.6 | 6.79 | 39.68 | 0/4 | 2 | C30H32F6N4O |

**Targets (ChEMBL curated mechanisms):**

- [[Substance-P receptor (CHEMBL249)|Substance-P receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Netupitant*](https://en.wikipedia.org/w/index.php?title=Netupitant&oldid=1368522106) (revision 1368522106, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 88 h | 88 hours |
| Protein binding | 99 % | >99% |
| Bioavailability | 60 % | >60% (estimated) |
| Metabolism | hepatic | mainly CYP3A4; also CYP2D6 and CYP2C9 |
| CYP (metabolised by) | CYP2C9, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | 71% (faeces) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aprepitant]] (Substance-P receptor)
- **Shared CYP substrate pool:** CYP2C9 (+40 others), CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
