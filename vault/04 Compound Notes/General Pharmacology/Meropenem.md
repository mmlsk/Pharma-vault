---
type: compound
schema-version: 2
compound-id: meropenem-compound
name: Meropenem
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Bacterial penicillin-binding protein inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL127
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: null
  unit: h
  notes: 1 hour
protein-binding:
  value: 2.0
  value-max: null
  unit: percent
  notes: Approximately 2%
bioavailability:
  value: 100.0
  value-max: null
  notes: 100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Meropenem
  url: https://en.wikipedia.org/w/index.php?title=Meropenem&oldid=1368846109
  revision: 1368846109
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL127
  pref-name: MEROPENEM
  molecule-type: Small molecule
  first-approval: 1996
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01DH02
  targets:
  - id: CHEMBL2354204
    name: Bacterial penicillin-binding protein
    action: INHIBITOR
  properties:
    full-mwt: 383.47
    mw-freebase: 383.47
    alogp: -0.31
    psa: 110.18
    hba: 6
    hbd: 3
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.56
    full-molformula: C17H25N3O5S
pk-verification:
  source: fda-label
  status: consistent
  set-id: 8a2a545e-b336-416a-be73-9e0a7ccf6177
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8a2a545e-b336-416a-be73-9e0a7ccf6177
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Meropenem

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `meropenem-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL127](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL127/) · max phase 4 · id via Wikipedia infobox

## Source summary

Carbapenem with the broadest reliable gram-negative spectrum and good tolerability, and less epileptogenic than imipenem.

## Mechanism

Bacterial penicillin-binding protein inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1996
- **ATC J01DH02:** ANTIINFECTIVES FOR SYSTEMIC USE › OTHER BETA-LACTAM ANTIBACTERIALS › Carbapenems

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 383.47 | -0.31 | 110.18 | 3/6 | 0 | C17H25N3O5S |

**Targets (ChEMBL curated mechanisms):**

- [[Bacterial penicillin-binding protein (CHEMBL2354204)|Bacterial penicillin-binding protein]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Meropenem*](https://en.wikipedia.org/w/index.php?title=Meropenem&oldid=1368846109) (revision 1368846109, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1 h | 1 hour |
| Protein binding | 2 % | Approximately 2% |
| Bioavailability | 100 % | 100% |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 8a2a545e…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8a2a545e-b336-416a-be73-9e0a7ccf6177), label version 20260826. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1, 1.5, 2, 3, 8, 12)
> - protein-binding: consistent (label values: 2)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Amoxicillin]] (Bacterial penicillin-binding protein), [[Ampicillin]] (Bacterial penicillin-binding protein), [[Aztreonam]] (Bacterial penicillin-binding protein), [[Cefiderocol]] (Bacterial penicillin-binding protein), [[Ceftaroline]] (Bacterial penicillin-binding protein), [[Ceftazidime]] (Bacterial penicillin-binding protein), [[Ertapenem]] (Bacterial penicillin-binding protein)
- **Same ATC subgroup:** [[Ertapenem]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
