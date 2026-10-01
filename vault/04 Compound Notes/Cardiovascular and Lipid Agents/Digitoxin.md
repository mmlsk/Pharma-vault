---
type: compound
schema-version: 2
compound-id: digitoxin-compound
name: Digitoxin
aliases: []
cluster: Cardiovascular and Lipid Agents
group: cardio
class: null
subclass: null
mechanism: Sodium/potassium-transporting ATPase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL254219
chembl-max-phase: 4
half-life:
  value: 7.0
  value-max: 8.0
  unit: d
  notes: 7–8 days
protein-binding:
  value: 90.0
  value-max: 97.0
  unit: percent
  notes: 90–97%
bioavailability:
  value: 98.0
  value-max: 100.0
  notes: 98–100% (oral)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 60% via urine, 40% via faeces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- cardiovascular-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/cardio
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Digitoxin
  url: https://en.wikipedia.org/w/index.php?title=Digitoxin&oldid=1328962211
  revision: 1328962211
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL254219
  pref-name: DIGITOXIN
  molecule-type: Small molecule
  first-approval: 1982
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C01AA04
  targets:
  - id: CHEMBL2095186
    name: Sodium/potassium-transporting ATPase
    action: INHIBITOR
  properties:
    full-mwt: 764.95
    mw-freebase: 764.95
    alogp: 3.25
    psa: 182.83
    hba: 13
    hbd: 5
    rtb: 7
    num-ro5-violations: 2
    qed-weighted: 0.19
    full-molformula: C41H64O13
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Digitoxin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `digitoxin-compound`
- **Source group:** Cardiovascular (`cardio`)
- **Cluster:** [[Cardiovascular and Lipid Agents]]
- **ChEMBL:** [CHEMBL254219](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL254219/) · max phase 4 · id via Wikipedia infobox

## Source summary

The hepatically cleared cardiac glycoside, unlike renally cleared digoxin. Same Na+/K+-ATPase mechanism but a much longer half-life and no dose adjustment in renal failure.

## Mechanism

Sodium/potassium-transporting ATPase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1982
- **ATC C01AA04:** CARDIOVASCULAR SYSTEM › CARDIAC GLYCOSIDES › Digitalis glycosides

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 764.95 | 3.25 | 182.83 | 5/13 | 2 | C41H64O13 |

**Targets (ChEMBL curated mechanisms):**

- [[Sodium-potassium-transporting ATPase (CHEMBL2095186)|Sodium/potassium-transporting ATPase]] - inhibitor · PROTEIN COMPLEX GROUP

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Digitoxin*](https://en.wikipedia.org/w/index.php?title=Digitoxin&oldid=1328962211) (revision 1328962211, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7–8 d | 7–8 days |
| Protein binding | 90–97 % | 90–97% |
| Bioavailability | 98–100 % | 98–100% (oral) |
| Metabolism | hepatic | Liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | 60% via urine, 40% via faeces |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Digoxin]] (Sodium/potassium-transporting ATPase), [[Istaroxime]] (Sodium/potassium-transporting ATPase)
- **Same ATC subgroup:** [[Digoxin]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cardiovascular-load`

- [[Stacking and Interaction Risks]]
- [[Stimulant and Cardiovascular Load]]
- [[CYP450 Metabolism]]
