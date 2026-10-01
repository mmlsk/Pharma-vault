---
type: compound
schema-version: 2
compound-id: ozanimod-compound
name: Ozanimod
aliases: []
cluster: General Pharmacology
group: immunology
class: null
subclass: null
mechanism: Sphingosine 1-phosphate receptor 5 modulator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3707247
chembl-max-phase: 4
half-life:
  value: 19.0
  value-max: null
  unit: h
  notes: 19 hours
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
pk-source:
  type: wikipedia-infobox
  title: Ozanimod
  url: https://en.wikipedia.org/w/index.php?title=Ozanimod&oldid=1329068113
  revision: 1329068113
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL3707247
  pref-name: OZANIMOD
  molecule-type: Small molecule
  first-approval: 2020
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L04AE02
  targets:
  - id: CHEMBL2274
    name: Sphingosine 1-phosphate receptor 5
    action: MODULATOR
  properties:
    full-mwt: 404.47
    mw-freebase: 404.47
    alogp: 3.63
    psa: 104.2
    hba: 7
    hbd: 2
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.62
    full-molformula: C23H24N4O3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Ozanimod

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ozanimod-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL3707247](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3707247/) · max phase 4 · id via Wikipedia infobox

## Source summary

Selective S1P1 and S1P5 modulator for multiple sclerosis and ulcerative colitis, designed to avoid the S1P3-mediated cardiac effects of fingolimod.

## Mechanism

Sphingosine 1-phosphate receptor 5 modulator _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2020
- **ATC L04AE02:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Sphingosine-1-phosphate (S1P) receptor modulators

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 404.47 | 3.63 | 104.2 | 2/7 | 0 | C23H24N4O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Sphingosine 1-phosphate receptor 5 (CHEMBL2274)|Sphingosine 1-phosphate receptor 5]] - modulator · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ozanimod*](https://en.wikipedia.org/w/index.php?title=Ozanimod&oldid=1329068113) (revision 1329068113, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 19 h | 19 hours |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Fingolimod]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
