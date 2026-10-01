---
type: compound
schema-version: 2
compound-id: albendazole-compound
name: Albendazole
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Tubulin inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1483
chembl-max-phase: 4
half-life:
  value: 8.0
  value-max: 12.0
  unit: h
  notes: 8–12 hours
protein-binding:
  value: 70.0
  value-max: null
  unit: percent
  notes: 70%
bioavailability:
  value: 5.0
  value-max: null
  notes: <5%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Bile duct (humans); Kidney (ruminants)
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
  title: Albendazole
  url: https://en.wikipedia.org/w/index.php?title=Albendazole&oldid=1335702995
  revision: 1335702995
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1483
  pref-name: ALBENDAZOLE
  molecule-type: Small molecule
  first-approval: 1996
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - P02CA03
  targets:
  - id: CHEMBL2364704
    name: Tubulin
    action: INHIBITOR
  - id: CHEMBL2364705
    name: Tubulin
    action: INHIBITOR
  properties:
    full-mwt: 265.34
    mw-freebase: 265.34
    alogp: 3.24
    psa: 67.01
    hba: 4
    hbd: 2
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.83
    full-molformula: C12H15N3O2S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 8de337eb-92e1-15b5-e053-2a95a90ac4f1
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8de337eb-92e1-15b5-e053-2a95a90ac4f1
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Albendazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `albendazole-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1483](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1483/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Benzimidazole with the broadest anthelmintic spectrum, and the drug of choice for neurocysticercosis and hydatid disease.

## Mechanism

Tubulin inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1996
- **Flags:** prodrug
- **ATC P02CA03:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › ANTINEMATODAL AGENTS › Benzimidazole derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 265.34 | 3.24 | 67.01 | 2/4 | 0 | C12H15N3O2S |

**Targets (ChEMBL curated mechanisms):**

- [[Tubulin (CHEMBL2364704)|Tubulin]] - inhibitor · PROTEIN COMPLEX GROUP
- [[Tubulin (CHEMBL2364705)|Tubulin]] - inhibitor · PROTEIN COMPLEX GROUP

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Albendazole*](https://en.wikipedia.org/w/index.php?title=Albendazole&oldid=1335702995) (revision 1335702995, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8–12 h | 8–12 hours |
| Protein binding | 70 % | 70% |
| Bioavailability | 5 % | <5% |
| Metabolism | hepatic | Liver |
| Excretion | mainly non-renal | Bile duct (humans); Kidney (ruminants) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 8de337eb…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8de337eb-92e1-15b5-e053-2a95a90ac4f1), label version 20260727. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 8, 12)
> - protein-binding: consistent (label values: 70)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Mebendazole]] (Tubulin)
- **Same ATC subgroup:** [[Mebendazole]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
