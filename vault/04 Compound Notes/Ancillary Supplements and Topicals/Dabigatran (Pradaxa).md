---
type: compound
schema-version: 2
compound-id: dabigatran-compound
name: Dabigatran (Pradaxa)
aliases:
- Dabigatran
- Pradaxa
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
chembl-id: CHEMBL48361
chembl-max-phase: 3
half-life:
  value: 12.0
  value-max: 17.0
  unit: h
  notes: 12–17 hours
protein-binding:
  value: 35.0
  value-max: null
  unit: percent
  notes: 35%
bioavailability:
  value: 3.0
  value-max: 7.0
  notes: 3–7%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
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
  title: Dabigatran
  url: https://en.wikipedia.org/w/index.php?title=Dabigatran&oldid=1355427429
  revision: 1355427429
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL48361
  pref-name: DABIGATRAN
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL204
    name: Prothrombin
    action: INHIBITOR
  properties:
    full-mwt: 471.52
    mw-freebase: 471.52
    alogp: 2.99
    psa: 150.22
    hba: 7
    hbd: 4
    rtb: 9
    num-ro5-violations: 0
    qed-weighted: 0.22
    full-molformula: C25H25N7O3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Dabigatran (Pradaxa)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dabigatran-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Dabigatran, Pradaxa
- **ChEMBL:** [CHEMBL48361](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL48361/) · max phase 3 · id via Wikipedia infobox

## Source summary

Direct thrombin inhibitor used for atrial fibrillation and venous thromboembolism; renal clearance and bleeding interactions are central.

## Mechanism

Thrombin inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 471.52 | 2.99 | 150.22 | 4/7 | 0 | C25H25N7O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Prothrombin (CHEMBL204)|Prothrombin]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dabigatran*](https://en.wikipedia.org/w/index.php?title=Dabigatran&oldid=1355427429) (revision 1355427429, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12–17 h | 12–17 hours |
| Protein binding | 35 % | 35% |
| Bioavailability | 3–7 % | 3–7% |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Antithrombin Alfa]] (Prothrombin), [[Argatroban]] (Prothrombin), [[Desirudin]] (Prothrombin), [[Ichorcumab]] (Prothrombin), [[Lepirudin]] (Prothrombin), [[Ximelagatran]] (Prothrombin)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
