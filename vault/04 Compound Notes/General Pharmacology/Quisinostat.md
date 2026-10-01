---
type: compound
schema-version: 2
compound-id: quisinostat-compound
name: Quisinostat
aliases: []
cluster: General Pharmacology
group: oncology
class: null
subclass: null
mechanism: Histone deacetylase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2105763
chembl-max-phase: 2
half-life:
  value: null
  unit: null
  notes: null
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: oral
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
- cytotoxicity
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/oncology
- stub
- pk-auto
- chembl-profile
- chembl-name-match
pk-source:
  type: wikipedia-infobox
  title: Quisinostat
  url: https://en.wikipedia.org/w/index.php?title=Quisinostat&oldid=1329688884
  revision: 1329688884
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL2105763
  pref-name: QUISINOSTAT
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL2093865
    name: Histone deacetylase
    action: INHIBITOR
  properties:
    full-mwt: 394.48
    mw-freebase: 394.48
    alogp: 2.09
    psa: 95.31
    hba: 7
    hbd: 3
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.44
    full-molformula: C21H26N6O2
---

# Quisinostat

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `quisinostat-compound`
- **Source group:** Oncology & Cytotoxics (`oncology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL2105763](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2105763/) · max phase 2 · id via exact ChEMBL name match - confirm

## Source summary

A second-generation hydroxamate with unusually high potency against HDAC1, allowing weekly rather than daily dosing.

## Mechanism

Histone deacetylase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 394.48 | 2.09 | 95.31 | 3/7 | 0 | C21H26N6O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Histone deacetylase (CHEMBL2093865)|Histone deacetylase]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Quisinostat*](https://en.wikipedia.org/w/index.php?title=Quisinostat&oldid=1329688884) (revision 1329688884, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Bioavailability | - | oral |

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Abexinostat]] (Histone deacetylase), [[Belinostat]] (Histone deacetylase), [[Cudc-101]] (Histone deacetylase), [[Entinostat]] (Histone deacetylase), [[Fimepinostat]] (Histone deacetylase), [[Tacedinaline]] (Histone deacetylase)

## Safety routing

Group-level triage (not compound-specific): `cytotoxicity`

- [[Stacking and Interaction Risks]]
