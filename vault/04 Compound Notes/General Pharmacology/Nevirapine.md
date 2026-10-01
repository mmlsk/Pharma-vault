---
type: compound
schema-version: 2
compound-id: nevirapine-compound
name: Nevirapine
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Human immunodeficiency virus type 1 reverse transcriptase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL57
chembl-max-phase: 4
half-life:
  value: 45.0
  value-max: null
  unit: h
  notes: 45 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 93.0
  value-max: null
  notes: 93% ± 9%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 'Kidney: <6% (Parent drug) ; Bile duct <5% (Parent drug)'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
  title: Nevirapine
  url: https://en.wikipedia.org/w/index.php?title=Nevirapine&oldid=1328920477
  revision: 1328920477
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL57
  pref-name: NEVIRAPINE
  molecule-type: Small molecule
  first-approval: 1996
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J05AG01
  targets:
  - id: CHEMBL247
    name: Human immunodeficiency virus type 1 reverse transcriptase
    action: INHIBITOR
  properties:
    full-mwt: 266.3
    mw-freebase: 266.3
    alogp: 2.65
    psa: 58.12
    hba: 4
    hbd: 1
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.86
    full-molformula: C15H14N4O
pk-verification:
  source: fda-label
  status: consistent
  set-id: c6e93829-7024-48f6-8023-da6ff27dfc0a
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c6e93829-7024-48f6-8023-da6ff27dfc0a
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Nevirapine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nevirapine-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL57](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL57/) · max phase 4 · id via Wikipedia infobox

## Source summary

First non-nucleoside reverse transcriptase inhibitor, now restricted by hypersensitivity and hepatotoxicity that track CD4 count at initiation.

## Mechanism

Human immunodeficiency virus type 1 reverse transcriptase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1996
- **Flags:** black-box warning
- **ATC J05AG01:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Non-nucleoside reverse transcriptase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 266.3 | 2.65 | 58.12 | 1/4 | 0 | C15H14N4O |

**Targets (ChEMBL curated mechanisms):**

- [[Human immunodeficiency virus type 1 reverse transcriptase (CHEMBL247)|Human immunodeficiency virus type 1 reverse transcriptase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nevirapine*](https://en.wikipedia.org/w/index.php?title=Nevirapine&oldid=1328920477) (revision 1328920477, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 45 h | 45 hours |
| Bioavailability | 93 % | 93% ± 9% |
| Metabolism | hepatic | Liver |
| Excretion | - | Kidney: <6% (Parent drug) ; Bile duct <5% (Parent drug) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set c6e93829…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c6e93829-7024-48f6-8023-da6ff27dfc0a), label version 20260715. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 25, 30, 45)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Doravirine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Efavirenz]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Emtricitabine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Etravirine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Islatravir]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Lamivudine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Rilpivirine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Tenofovir Alafenamide]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Zidovudine]] (Human immunodeficiency virus type 1 reverse transcriptase)
- **Same ATC subgroup:** [[Doravirine]], [[Efavirenz]], [[Etravirine]], [[Rilpivirine]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
