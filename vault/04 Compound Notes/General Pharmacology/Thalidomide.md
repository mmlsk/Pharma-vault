---
type: compound
schema-version: 2
compound-id: thalidomide-compound
name: Thalidomide
aliases: []
cluster: General Pharmacology
group: immunology
class: null
subclass: null
mechanism: CRL4(CRBN) E3 ubiquitin ligase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL468
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 7.5
  unit: h
  notes: 5–7.5 hours (dose-dependent)
protein-binding:
  value: 55.0
  value-max: null
  unit: percent
  notes: 55% and 66% for the (R)-(+)- and (S)-(−)-enantiomers, respectively
bioavailability:
  value: 90.0
  value-max: null
  notes: 90%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine, feces and semen
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (minimally via CYP2C19-mediated 5-hydroxylation; mostly via non-enzymatic hydrolysis at the four amide sites)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- immunosuppression-infection
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/immunology
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Thalidomide
  url: https://en.wikipedia.org/w/index.php?title=Thalidomide&oldid=1376197756
  revision: 1376197756
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL468
  pref-name: THALIDOMIDE
  molecule-type: Small molecule
  first-approval: 1956
  black-box-warning: true
  withdrawn: true
  atc-codes:
  - L04AX02
  targets:
  - id: CHEMBL3833061
    name: CRL4(CRBN) E3 ubiquitin ligase
    action: INHIBITOR
  properties:
    full-mwt: 258.23
    mw-freebase: 258.23
    alogp: 0.09
    psa: 83.55
    hba: 4
    hbd: 1
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.72
    full-molformula: C13H10N2O4
pk-verification:
  source: fda-label
  status: consistent
  set-id: 2eda833b-1357-4ed4-a093-194524fcb061
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2eda833b-1357-4ed4-a093-194524fcb061
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Thalidomide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `thalidomide-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL468](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL468/) · max phase 4 · id via Wikipedia infobox

## Source summary

The drug whose teratogenicity created modern drug regulation, later rehabilitated for erythema nodosum leprosum and myeloma.

## Mechanism

CRL4(CRBN) E3 ubiquitin ligase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1956
- **Flags:** black-box warning, withdrawn
- **ATC L04AX02:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Other immunosuppressants

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 258.23 | 0.09 | 83.55 | 1/4 | 0 | C13H10N2O4 |

**Targets (ChEMBL curated mechanisms):**

- [[CRL4(CRBN) E3 ubiquitin ligase (CHEMBL3833061)|CRL4(CRBN) E3 ubiquitin ligase]] - inhibitor · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Thalidomide*](https://en.wikipedia.org/w/index.php?title=Thalidomide&oldid=1376197756) (revision 1376197756, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–7.5 h | 5–7.5 hours (dose-dependent) |
| Protein binding | 55 % | 55% and 66% for the (R)-(+)- and (S)-(−)-enantiomers, respectively |
| Bioavailability | 90 % | 90% |
| Metabolism | hepatic | Liver (minimally via CYP2C19-mediated 5-hydroxylation; mostly via non-enzymatic hydrolysis at the four amide sites) |
| CYP (metabolised by) | CYP2C19 | roles as inhibitor/inducer not assessed |
| Excretion | - | Urine, feces and semen |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 2eda833b…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2eda833b-1357-4ed4-a093-194524fcb061), label version 20230324. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 5.5, 6, 7.3)
> - protein-binding: consistent (label values: 55, 66)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Lenalidomide]] (CRL4(CRBN) E3 ubiquitin ligase), [[Pomalidomide]] (CRL4(CRBN) E3 ubiquitin ligase)
- **Same ATC subgroup:** [[Azathioprine]], [[Lenalidomide]], [[Methotrexate]], [[Pomalidomide]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
