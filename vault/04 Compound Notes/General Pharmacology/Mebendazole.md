---
type: compound
schema-version: 2
compound-id: mebendazole-compound
name: Mebendazole
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
chembl-id: CHEMBL685
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: 6.0
  unit: h
  notes: 3–6 hours
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: 95%
bioavailability:
  value: 2.0
  value-max: 10.0
  notes: 2–10%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Feces, urine (5–10%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Extensive liver
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
  title: Mebendazole
  url: https://en.wikipedia.org/w/index.php?title=Mebendazole&oldid=1372981267
  revision: 1372981267
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL685
  pref-name: MEBENDAZOLE
  molecule-type: Small molecule
  first-approval: 1974
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - P02CA01
  - P02CA51
  targets:
  - id: CHEMBL2364704
    name: Tubulin
    action: INHIBITOR
  - id: CHEMBL2364705
    name: Tubulin
    action: INHIBITOR
  properties:
    full-mwt: 295.3
    mw-freebase: 295.3
    alogp: 2.97
    psa: 84.08
    hba: 4
    hbd: 2
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.73
    full-molformula: C16H13N3O3
pk-verification:
  source: fda-label
  status: consistent
  set-id: a720c424-517a-461b-8e13-6c37caf8aa3f
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a720c424-517a-461b-8e13-6c37caf8aa3f
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Mebendazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `mebendazole-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL685](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL685/) · max phase 4 · id via Wikipedia infobox

## Source summary

Benzimidazole for intestinal nematodes, poorly absorbed by design so it acts luminally with almost no systemic exposure.

## Mechanism

Tubulin inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1974
- **ATC P02CA01:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › ANTINEMATODAL AGENTS › Benzimidazole derivatives
- **ATC P02CA51:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › ANTINEMATODAL AGENTS › Benzimidazole derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 295.3 | 2.97 | 84.08 | 2/4 | 0 | C16H13N3O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Tubulin (CHEMBL2364704)|Tubulin]] - inhibitor · PROTEIN COMPLEX GROUP
- [[Tubulin (CHEMBL2364705)|Tubulin]] - inhibitor · PROTEIN COMPLEX GROUP

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Mebendazole*](https://en.wikipedia.org/w/index.php?title=Mebendazole&oldid=1372981267) (revision 1372981267, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–6 h | 3–6 hours |
| Protein binding | 95 % | 95% |
| Bioavailability | 2–10 % | 2–10% |
| Metabolism | hepatic | Extensive liver |
| Excretion | - | Feces, urine (5–10%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set a720c424…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a720c424-517a-461b-8e13-6c37caf8aa3f), label version 20211005. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 3, 6)
> - protein-binding: consistent (label values: 90, 95)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Albendazole]] (Tubulin)
- **Same ATC subgroup:** [[Albendazole]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
