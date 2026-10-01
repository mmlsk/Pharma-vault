---
type: compound
schema-version: 2
compound-id: griseofulvin-compound
name: Griseofulvin
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
chembl-id: CHEMBL562
chembl-max-phase: 4
half-life:
  value: 9.0
  value-max: 21.0
  unit: h
  notes: 9–21 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 25.0
  value-max: 70.0
  notes: Highly variable (25 to 70%)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (demethylation and glucuronidation)
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
  title: Griseofulvin
  url: https://en.wikipedia.org/w/index.php?title=Griseofulvin&oldid=1338049828
  revision: 1338049828
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL562
  pref-name: GRISEOFULVIN
  molecule-type: Small molecule
  first-approval: 1962
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - D01AA08
  - D01BA01
  targets:
  - id: CHEMBL2364703
    name: Tubulin
    action: INHIBITOR
  properties:
    full-mwt: 352.77
    mw-freebase: 352.77
    alogp: 2.81
    psa: 71.06
    hba: 6
    hbd: 0
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.83
    full-molformula: C17H17ClO6
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: efb8a660-802c-4ca6-bbff-ad7b48b91aef
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=efb8a660-802c-4ca6-bbff-ad7b48b91aef
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Griseofulvin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `griseofulvin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL562](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL562/) · max phase 4 · id via Wikipedia infobox

## Source summary

The original oral antifungal for dermatophytosis, concentrating in keratin so treatment lasts as long as the nail or hair takes to grow out.

## Mechanism

Tubulin inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1962
- **ATC D01AA08:** DERMATOLOGICALS › ANTIFUNGALS FOR TOPICAL USE › Antibiotics
- **ATC D01BA01:** DERMATOLOGICALS › ANTIFUNGALS FOR SYSTEMIC USE › Antifungals for systemic use

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 352.77 | 2.81 | 71.06 | 0/6 | 0 | C17H17ClO6 |

**Targets (ChEMBL curated mechanisms):**

- [[Tubulin (CHEMBL2364703)|Tubulin]] - inhibitor · PROTEIN COMPLEX GROUP

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Griseofulvin*](https://en.wikipedia.org/w/index.php?title=Griseofulvin&oldid=1338049828) (revision 1338049828, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9–21 h | 9–21 hours |
| Bioavailability | 25–70 % | Highly variable (25 to 70%) |
| Metabolism | hepatic | Liver (demethylation and glucuronidation) |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set efb8a660…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=efb8a660-802c-4ca6-bbff-ad7b48b91aef), label version 20251210. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Terbinafine (oral, Lamisil)]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
