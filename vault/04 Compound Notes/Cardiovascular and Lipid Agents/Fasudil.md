---
type: compound
schema-version: 2
compound-id: fasudil-compound
name: Fasudil
aliases: []
cluster: Cardiovascular and Lipid Agents
group: cardio
class: null
subclass: null
mechanism: Rho-associated protein kinase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL38380
chembl-max-phase: 3
half-life:
  value: 0.76
  value-max: null
  unit: h
  notes: 0.76 hours. Active metabolite (hydroxyfasudil) 4.66 hours.
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
  title: Fasudil
  url: https://en.wikipedia.org/w/index.php?title=Fasudil&oldid=1336138545
  revision: 1336138545
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL38380
  pref-name: FASUDIL
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C04AX32
  targets:
  - id: CHEMBL2111459
    name: Rho-associated protein kinase
    action: INHIBITOR
  properties:
    full-mwt: 291.38
    mw-freebase: 291.38
    alogp: 1.22
    psa: 62.3
    hba: 4
    hbd: 1
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.9
    full-molformula: C14H17N3O2S
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Fasudil

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fasudil-compound`
- **Source group:** Cardiovascular (`cardio`)
- **Cluster:** [[Cardiovascular and Lipid Agents]]
- **ChEMBL:** [CHEMBL38380](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL38380/) · max phase 3 · id via Wikipedia infobox

## Source summary

Rho kinase inhibitor licensed in Japan and China for cerebral vasospasm after subarachnoid haemorrhage.

## Mechanism

Rho-associated protein kinase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC C04AX32:** CARDIOVASCULAR SYSTEM › PERIPHERAL VASODILATORS › Other peripheral vasodilators

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 291.38 | 1.22 | 62.3 | 1/4 | 0 | C14H17N3O2S |

**Targets (ChEMBL curated mechanisms):**

- [[Rho-associated protein kinase (CHEMBL2111459)|Rho-associated protein kinase]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fasudil*](https://en.wikipedia.org/w/index.php?title=Fasudil&oldid=1336138545) (revision 1336138545, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.76 h | 0.76 hours. Active metabolite (hydroxyfasudil) 4.66 hours. |
| Metabolites | - | Hydroxyfasudil |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Clazosentan]], [[Naftidrofuryl (Naftidrofuryl Oxalate)]], [[Phenoxybenzamine]]

## Safety routing

Group-level triage (not compound-specific): `cardiovascular-load`

- [[Stacking and Interaction Risks]]
- [[Stimulant and Cardiovascular Load]]
