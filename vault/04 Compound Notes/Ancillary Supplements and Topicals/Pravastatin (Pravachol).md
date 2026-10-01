---
type: compound
schema-version: 2
compound-id: pravastatin-compound
name: Pravastatin (Pravachol)
aliases:
- Pravastatin
- Pravachol
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
chembl-id: CHEMBL1144
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: 3.0
  unit: h
  notes: 1-3 hours
protein-binding:
  value: 50.0
  value-max: null
  unit: percent
  notes: 50%
bioavailability:
  value: 18.0
  value-max: null
  notes: 18%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (minimal)
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
  title: Pravastatin
  url: https://en.wikipedia.org/w/index.php?title=Pravastatin&oldid=1369273013
  revision: 1369273013
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1144
  pref-name: PRAVASTATIN
  molecule-type: Small molecule
  first-approval: 1991
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C10AA03
  targets: []
  properties:
    full-mwt: 424.53
    mw-freebase: 424.53
    alogp: 2.44
    psa: 124.29
    hba: 6
    hbd: 4
    rtb: 10
    num-ro5-violations: 0
    qed-weighted: 0.4
    full-molformula: C23H36O7
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Pravastatin (Pravachol)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pravastatin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Pravastatin, Pravachol
- **ChEMBL:** [CHEMBL1144](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1144/) · max phase 4 · id via Wikipedia infobox

## Source summary

Hydrophilic statin, given in the active acid form and largely spared from CYP3A4 interactions.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1991
- **ATC C10AA03:** CARDIOVASCULAR SYSTEM › LIPID MODIFYING AGENTS, PLAIN › HMG CoA reductase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 424.53 | 2.44 | 124.29 | 4/6 | 0 | C23H36O7 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pravastatin*](https://en.wikipedia.org/w/index.php?title=Pravastatin&oldid=1369273013) (revision 1369273013, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–3 h | 1-3 hours |
| Protein binding | 50 % | 50% |
| Bioavailability | 18 % | 18% |
| Metabolism | hepatic | Liver (minimal) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Atorvastatin (Lipitor)]], [[Cerivastatin]], [[Fluvastatin]], [[Lovastatin (Mevacor)]], [[Pitavastatin (Livalo)]], [[Rosuvastatin (Crestor)]], [[Simvastatin (Zocor)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
