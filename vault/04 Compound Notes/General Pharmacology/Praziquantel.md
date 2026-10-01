---
type: compound
schema-version: 2
compound-id: praziquantel-compound
name: Praziquantel
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Voltage-activated calcium channel beta 1 subunit blocker; Voltage-activated calcium channel beta 2 subunit blocker
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL976
chembl-max-phase: 4
half-life:
  value: 0.8
  value-max: 1.5
  unit: h
  notes: '0.8–1.5 hours (main metabolites: 4–5 hours)'
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: Relatively small
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (mainly)
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
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Praziquantel
  url: https://en.wikipedia.org/w/index.php?title=Praziquantel&oldid=1369381784
  revision: 1369381784
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL976
  pref-name: PRAZIQUANTEL
  molecule-type: Small molecule
  first-approval: 1982
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - P02BA01
  targets:
  - id: CHEMBL2363079
    name: Voltage-activated calcium channel beta 1 subunit
    action: BLOCKER
  - id: CHEMBL2363080
    name: Voltage-activated calcium channel beta 2 subunit
    action: BLOCKER
  properties:
    full-mwt: 312.41
    mw-freebase: 312.41
    alogp: 2.53
    psa: 40.62
    hba: 2
    hbd: 0
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.8
    full-molformula: C19H24N2O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 16f2b9c4-a260-4a31-bd52-e5945913246c
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=16f2b9c4-a260-4a31-bd52-e5945913246c
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Praziquantel

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `praziquantel-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL976](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL976/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

The single drug behind schistosomiasis control worldwide, acting on a calcium channel subunit unique to flatworms.

## Mechanism

Voltage-activated calcium channel beta 1 subunit blocker; Voltage-activated calcium channel beta 2 subunit blocker _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1982
- **ATC P02BA01:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › ANTITREMATODALS › Quinoline derivatives and related substances

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 312.41 | 2.53 | 40.62 | 0/2 | 0 | C19H24N2O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Voltage-activated calcium channel beta 1 subunit (CHEMBL2363079)|Voltage-activated calcium channel beta 1 subunit]] - blocker · SINGLE PROTEIN
- [[Voltage-activated calcium channel beta 2 subunit (CHEMBL2363080)|Voltage-activated calcium channel beta 2 subunit]] - blocker · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Praziquantel*](https://en.wikipedia.org/w/index.php?title=Praziquantel&oldid=1369381784) (revision 1369381784, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.8–1.5 h | 0.8–1.5 hours (main metabolites: 4–5 hours) |
| Bioavailability | - | Relatively small |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Kidney (mainly) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 16f2b9c4…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=16f2b9c4-a260-4a31-bd52-e5945913246c), label version 20260812. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.8, 1.5)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
