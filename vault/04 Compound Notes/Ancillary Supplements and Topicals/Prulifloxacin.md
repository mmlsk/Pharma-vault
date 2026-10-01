---
type: compound
schema-version: 2
compound-id: prulifloxacin-compound
name: Prulifloxacin
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Bacterial DNA gyrase inhibitor; Topoisomerase IV inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL422648
chembl-max-phase: 3
half-life:
  value: 7.7
  value-max: 8.9
  unit: h
  notes: 7.7 to 8.9 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Renal and fecal
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: By esterases, to ulifloxacin
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
  title: Prulifloxacin
  url: https://en.wikipedia.org/w/index.php?title=Prulifloxacin&oldid=1335561946
  revision: 1335561946
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL422648
  pref-name: PRULIFLOXACIN
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01MA17
  targets:
  - id: CHEMBL2311224
    name: Bacterial DNA gyrase
    action: INHIBITOR
  - id: CHEMBL2363076
    name: Topoisomerase IV
    action: INHIBITOR
  properties:
    full-mwt: 461.47
    mw-freebase: 461.47
    alogp: 2.64
    psa: 109.13
    hba: 9
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.63
    full-molformula: C21H20FN3O6S
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Prulifloxacin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `prulifloxacin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL422648](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL422648/) · max phase 3 · id via Wikipedia infobox

## Source summary

Inhibits bacterial DNA gyrase or topoisomerase IV; tendon, neurologic, cardiac, and resistance risks limit indiscriminate use.

## Mechanism

Bacterial DNA gyrase inhibitor; Topoisomerase IV inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **Flags:** prodrug
- **ATC J01MA17:** ANTIINFECTIVES FOR SYSTEMIC USE › QUINOLONE ANTIBACTERIALS › Fluoroquinolones

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 461.47 | 2.64 | 109.13 | 1/9 | 0 | C21H20FN3O6S |

**Targets (ChEMBL curated mechanisms):**

- [[Bacterial DNA gyrase (CHEMBL2311224)|Bacterial DNA gyrase]] - inhibitor · PROTEIN COMPLEX
- [[Topoisomerase IV (CHEMBL2363076)|Topoisomerase IV]] - inhibitor · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Prulifloxacin*](https://en.wikipedia.org/w/index.php?title=Prulifloxacin&oldid=1335561946) (revision 1335561946, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7.7–8.9 h | 7.7 to 8.9 hours |
| Metabolism | - | By esterases, to ulifloxacin |
| Excretion | - | Renal and fecal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Ciprofloxacin]] (Bacterial DNA gyrase; Topoisomerase IV), [[Gepotidacin]] (Bacterial DNA gyrase; Topoisomerase IV), [[Norfloxacin]] (Bacterial DNA gyrase; Topoisomerase IV), [[Ofloxacin]] (Bacterial DNA gyrase)
- **Same ATC subgroup:** [[Ciprofloxacin]], [[Delafloxacin]], [[Gemifloxacin]], [[Lomefloxacin]], [[Moxifloxacin]], [[Norfloxacin]], [[Ofloxacin]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
