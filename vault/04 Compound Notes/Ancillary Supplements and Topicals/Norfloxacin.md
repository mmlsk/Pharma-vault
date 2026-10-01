---
type: compound
schema-version: 2
compound-id: norfloxacin-compound
name: Norfloxacin
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
chembl-id: CHEMBL9
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: 4.0
  unit: h
  notes: 3 to 4 hours
protein-binding:
  value: 10.0
  value-max: 15.0
  unit: percent
  notes: 10 to 15%
bioavailability:
  value: 30.0
  value-max: 40.0
  notes: 30 to 40%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Renal and fecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Norfloxacin
  url: https://en.wikipedia.org/w/index.php?title=Norfloxacin&oldid=1335561485
  revision: 1335561485
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL9
  pref-name: NORFLOXACIN
  molecule-type: Small molecule
  first-approval: 1986
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J01MA06
  - S01AE02
  targets:
  - id: CHEMBL2363076
    name: Topoisomerase IV
    action: INHIBITOR
  - id: CHEMBL2311224
    name: Bacterial DNA gyrase
    action: INHIBITOR
  properties:
    full-mwt: 319.34
    mw-freebase: 319.34
    alogp: 1.27
    psa: 74.57
    hba: 5
    hbd: 2
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.89
    full-molformula: C16H18FN3O3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Norfloxacin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `norfloxacin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL9](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL9/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits bacterial DNA gyrase or topoisomerase IV; tendon, neurologic, cardiac, and resistance risks limit indiscriminate use.

## Mechanism

Bacterial DNA gyrase inhibitor; Topoisomerase IV inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1986
- **Flags:** black-box warning
- **ATC J01MA06:** ANTIINFECTIVES FOR SYSTEMIC USE › QUINOLONE ANTIBACTERIALS › Fluoroquinolones
- **ATC S01AE02:** SENSORY ORGANS › ANTIINFECTIVES › Fluoroquinolones

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 319.34 | 1.27 | 74.57 | 2/5 | 0 | C16H18FN3O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Topoisomerase IV (CHEMBL2363076)|Topoisomerase IV]] - inhibitor · PROTEIN COMPLEX
- [[Bacterial DNA gyrase (CHEMBL2311224)|Bacterial DNA gyrase]] - inhibitor · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Norfloxacin*](https://en.wikipedia.org/w/index.php?title=Norfloxacin&oldid=1335561485) (revision 1335561485, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–4 h | 3 to 4 hours |
| Protein binding | 10–15 % | 10 to 15% |
| Bioavailability | 30–40 % | 30 to 40% |
| Metabolism | hepatic | Hepatic |
| Excretion | - | Renal and fecal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Ciprofloxacin]] (Bacterial DNA gyrase; Topoisomerase IV), [[Gepotidacin]] (Bacterial DNA gyrase; Topoisomerase IV), [[Prulifloxacin]] (Bacterial DNA gyrase; Topoisomerase IV), [[Ofloxacin]] (Bacterial DNA gyrase)
- **Same ATC subgroup:** [[Besifloxacin]], [[Ciprofloxacin]], [[Delafloxacin]], [[Gemifloxacin]], [[Lomefloxacin]], [[Moxifloxacin]], [[Ofloxacin]], [[Prulifloxacin]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
