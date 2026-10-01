---
type: compound
schema-version: 2
compound-id: atovaquone-compound
name: Atovaquone
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Cytochrome b inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1450
chembl-max-phase: 4
half-life:
  value: 2.2
  value-max: 3.2
  unit: d
  notes: 2.2–3.2 days
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
- identity-formula-match
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Atovaquone
  url: https://en.wikipedia.org/w/index.php?title=Atovaquone&oldid=1360133178
  revision: 1360133178
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1450
  pref-name: ATOVAQUONE
  molecule-type: Small molecule
  first-approval: 1992
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - P01AX06
  targets:
  - id: CHEMBL1777
    name: Cytochrome b
    action: INHIBITOR
  properties:
    full-mwt: 366.84
    mw-freebase: 366.84
    alogp: 5.51
    psa: 54.37
    hba: 3
    hbd: 1
    rtb: 2
    num-ro5-violations: 1
    qed-weighted: 0.76
    full-molformula: C22H19ClO3
  identity-check: formula-match
pk-verification:
  source: fda-label
  status: consistent
  set-id: b31ff20a-c363-4be0-9bc0-3081c163b63c
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b31ff20a-c363-4be0-9bc0-3081c163b63c
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Atovaquone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `atovaquone-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1450](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1450/) · max phase 4 · id via Wikipedia infobox · structure check: ≈ same formula, different InChIKey (tautomer/representation)

## Source summary

Hydroxynaphthoquinone targeting the parasite mitochondrial electron transport chain, used for malaria, Pneumocystis and toxoplasmosis.

## Mechanism

Cytochrome b inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1992
- **ATC P01AX06:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › AGENTS AGAINST AMOEBIASIS AND OTHER PROTOZOAL DISEASES › Other agents against amoebiasis and other protozoal diseases

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 366.84 | 5.51 | 54.37 | 1/3 | 1 | C22H19ClO3 |

**Targets (ChEMBL curated mechanisms):**

- [[Cytochrome b (CHEMBL1777)|Cytochrome b]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Atovaquone*](https://en.wikipedia.org/w/index.php?title=Atovaquone&oldid=1360133178) (revision 1360133178, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.2–3.2 d | 2.2–3.2 days |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set b31ff20a…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b31ff20a-c363-4be0-9bc0-3081c163b63c), label version 20260616. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 50, 62.5, 67, 77.6, 82)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Nitazoxanide]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
