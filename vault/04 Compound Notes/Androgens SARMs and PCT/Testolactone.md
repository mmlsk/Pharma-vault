---
type: compound
schema-version: 2
compound-id: testolactone-compound
name: Testolactone
aliases: []
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: Cytochrome P450 19A1 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1571
chembl-max-phase: 4
half-life:
  value: null
  unit: null
  notes: null
protein-binding:
  value: 85.0
  value-max: null
  unit: percent
  notes: ~85%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine
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
- endocrine-feedback-disruption
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/pct
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Testolactone
  url: https://en.wikipedia.org/w/index.php?title=Testolactone&oldid=1329012865
  revision: 1329012865
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1571
  pref-name: TESTOLACTONE
  molecule-type: Small molecule
  first-approval: 1969
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL1978
    name: Aromatase
    action: INHIBITOR
  properties:
    full-mwt: 300.4
    mw-freebase: 300.4
    alogp: 3.59
    psa: 43.37
    hba: 3
    hbd: 0
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.64
    full-molformula: C19H24O3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Testolactone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `testolactone-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1571](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1571/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

One of the first clinically used steroidal aromatase inhibitors for estrogen control.

## Mechanism

Cytochrome P450 19A1 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1969

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 300.4 | 3.59 | 43.37 | 0/3 | 0 | C19H24O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Aromatase (CHEMBL1978)|Aromatase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Testolactone*](https://en.wikipedia.org/w/index.php?title=Testolactone&oldid=1329012865) (revision 1329012865, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Protein binding | 85 % | ~85% |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Urine |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aminoglutethimide]] (Aromatase), [[Arimidex (Anastrozole)]] (Aromatase), [[Aromasin (Exemestane)]] (Aromatase), [[Femara (Letrozole)]] (Aromatase)

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
