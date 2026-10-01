---
type: compound
schema-version: 2
compound-id: ethionamide-compound
name: Ethionamide
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Enoyl-[acyl-carrier-protein] reductase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1441
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 3.0
  unit: h
  notes: 2 to 3 hours
protein-binding:
  value: 30.0
  value-max: null
  unit: percent
  notes: ~30%
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
- cyp-interactions
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Ethionamide
  url: https://en.wikipedia.org/w/index.php?title=Ethionamide&oldid=1372674176
  revision: 1372674176
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1441
  pref-name: ETHIONAMIDE
  molecule-type: Small molecule
  first-approval: 1965
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J04AD03
  targets:
  - id: CHEMBL1849
    name: Enoyl-[acyl-carrier-protein] reductase [NADH]
    action: INHIBITOR
  properties:
    full-mwt: 166.25
    mw-freebase: 166.25
    alogp: 1.28
    psa: 38.91
    hba: 2
    hbd: 1
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.67
    full-molformula: C8H10N2S
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Ethionamide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ethionamide-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1441](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1441/) · max phase 4 · id via Wikipedia infobox

## Source summary

Structural analogue of isoniazid activated by a different mycobacterial enzyme, used in resistant tuberculosis and limited by gastrointestinal intolerance.

## Mechanism

Enoyl-[acyl-carrier-protein] reductase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1965
- **Flags:** prodrug
- **ATC J04AD03:** ANTIINFECTIVES FOR SYSTEMIC USE › DRUGS FOR TREATMENT OF TUBERCULOSIS › Thiocarbamide derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 166.25 | 1.28 | 38.91 | 1/2 | 0 | C8H10N2S |

**Targets (ChEMBL curated mechanisms):**

- [[Enoyl--acyl-carrier-protein- reductase -NADH- (CHEMBL1849)|Enoyl-[acyl-carrier-protein] reductase [NADH]]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ethionamide*](https://en.wikipedia.org/w/index.php?title=Ethionamide&oldid=1372674176) (revision 1372674176, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–3 h | 2 to 3 hours |
| Protein binding | 30 % | ~30% |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Isoniazid]] (Enoyl-[acyl-carrier-protein] reductase [NADH])

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
