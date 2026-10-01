---
type: compound
schema-version: 2
compound-id: elotuzumab-compound
name: Elotuzumab
aliases: []
cluster: General Pharmacology
group: immunology
class: null
subclass: null
mechanism: SLAM family member 7 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1743010
chembl-max-phase: 4
half-life:
  value: null
  unit: null
  notes: null
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (IV)
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
- immunosuppression-infection
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/immunology
- stub
- pk-auto
- chembl-profile
- chembl-name-match
- identity-inn-ema
pk-source:
  type: wikipedia-infobox
  title: Elotuzumab
  url: https://en.wikipedia.org/w/index.php?title=Elotuzumab&oldid=1347865846
  revision: 1347865846
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL1743010
  pref-name: ELOTUZUMAB
  molecule-type: Antibody
  first-approval: 2015
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01FX08
  targets:
  - id: CHEMBL3559386
    name: SLAM family member 7
    action: INHIBITOR
  properties: {}
  identity-check: inn-match-ema
---

# Elotuzumab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `elotuzumab-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1743010](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1743010/) · max phase 4 · id via exact ChEMBL name match · structure check: INN matches an EU-authorised product (no comparable structure)

## Source summary

Anti-SLAMF7 antibody for myeloma that works partly by activating natural killer cells rather than only by tagging the tumour.

## Mechanism

SLAM family member 7 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 2015
- **ATC L01FX08:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › MONOCLONAL ANTIBODIES AND ANTIBODY DRUG CONJUGATES › Other monoclonal antibodies and antibody drug conjugates

**Targets (ChEMBL curated mechanisms):**

- [[SLAM family member 7 (CHEMBL3559386)|SLAM family member 7]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Elotuzumab*](https://en.wikipedia.org/w/index.php?title=Elotuzumab&oldid=1347865846) (revision 1347865846, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Bioavailability | 100 % | 100% (IV) |

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Belantamab Mafodotin]], [[Blinatumomab]], [[Brentuximab Vedotin]], [[Elranatamab]], [[Ipilimumab]], [[Teclistamab]], [[Tremelimumab]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
