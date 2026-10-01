---
type: compound
schema-version: 2
compound-id: ceftaroline-compound
name: Ceftaroline
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Bacterial penicillin-binding protein inhibitor; Penicillin-binding protein 2a inhibitor; Penicillin-binding protein 2x inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL501122
chembl-max-phase: 4
half-life:
  value: 2.5
  value-max: null
  unit: h
  notes: 2.5 hours
protein-binding:
  value: 20.0
  value-max: null
  unit: percent
  notes: 20%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (88%), faeces (6%)
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
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Ceftaroline fosamil
  url: https://en.wikipedia.org/w/index.php?title=Ceftaroline_fosamil&oldid=1366709727
  revision: 1366709727
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL501122
  pref-name: CEFTAROLINE FOSAMIL
  molecule-type: Small molecule
  first-approval: 2010
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01DI02
  targets:
  - id: CHEMBL3512
    name: Penicillin-binding protein 2a
    action: INHIBITOR
  - id: CHEMBL6188
    name: Penicillin-binding protein 2x
    action: INHIBITOR
  - id: CHEMBL2354204
    name: Bacterial penicillin-binding protein
    action: INHIBITOR
  properties:
    full-mwt: 684.7
    mw-freebase: 684.7
    alogp: -0.11
    psa: 223.24
    hba: 14
    hbd: 4
    rtb: 11
    num-ro5-violations: 2
    qed-weighted: 0.07
    full-molformula: C22H21N8O8PS4
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 3cee3c08-ed60-06c5-ac49-103b7ad2ef5f
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3cee3c08-ed60-06c5-ac49-103b7ad2ef5f
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
---

# Ceftaroline

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ceftaroline-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL501122](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL501122/) · max phase 4 · id via Wikipedia infobox

## Source summary

The cephalosporin with meaningful MRSA activity, achieved by binding the altered PBP2a that confers methicillin resistance.

## Mechanism

Bacterial penicillin-binding protein inhibitor; Penicillin-binding protein 2a inhibitor; Penicillin-binding protein 2x inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2010
- **Flags:** prodrug
- **ATC J01DI02:** ANTIINFECTIVES FOR SYSTEMIC USE › OTHER BETA-LACTAM ANTIBACTERIALS › Other cephalosporins and penems

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 684.7 | -0.11 | 223.24 | 4/14 | 2 | C22H21N8O8PS4 |

**Targets (ChEMBL curated mechanisms):**

- [[Penicillin-binding protein 2a (CHEMBL3512)|Penicillin-binding protein 2a]] - inhibitor · SINGLE PROTEIN
- [[Penicillin-binding protein 2x (CHEMBL6188)|Penicillin-binding protein 2x]] - inhibitor · SINGLE PROTEIN
- [[Bacterial penicillin-binding protein (CHEMBL2354204)|Bacterial penicillin-binding protein]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ceftaroline fosamil*](https://en.wikipedia.org/w/index.php?title=Ceftaroline_fosamil&oldid=1366709727) (revision 1366709727, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5 h | 2.5 hours |
| Protein binding | 20 % | 20% |
| Excretion | mainly urinary | Urine (88%), faeces (6%) |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 3cee3c08…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3cee3c08-ed60-06c5-ac49-103b7ad2ef5f), label version 20260529. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 0.083, 8, 12, 120, 336)
> - protein-binding: consistent (label values: 14.5, 20, 28)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Amoxicillin]] (Bacterial penicillin-binding protein), [[Ampicillin]] (Bacterial penicillin-binding protein), [[Aztreonam]] (Bacterial penicillin-binding protein), [[Cefiderocol]] (Bacterial penicillin-binding protein), [[Ceftazidime]] (Bacterial penicillin-binding protein), [[Ertapenem]] (Bacterial penicillin-binding protein), [[Meropenem]] (Bacterial penicillin-binding protein)
- **Same ATC subgroup:** [[Cefiderocol]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
