---
type: compound
schema-version: 2
compound-id: enclomiphene-compound
name: Enclomiphene
aliases: []
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: Estrogen receptor alpha modulator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL954
chembl-max-phase: 3
half-life:
  value: 10.0
  value-max: null
  unit: h
  notes: 10 hours
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
  primary-route: true
  extraction-ratio: null
  notes: liver, CYP2D6 and CYP3A4
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
pk-source:
  type: wikipedia-infobox
  title: Enclomifene
  url: https://en.wikipedia.org/w/index.php?title=Enclomifene&oldid=1368957410
  revision: 1368957410
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL954
  pref-name: ENCLOMIPHENE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL206
    name: Estrogen receptor
    action: MODULATOR
  properties:
    full-mwt: 405.97
    mw-freebase: 405.97
    alogp: 6.56
    psa: 12.47
    hba: 2
    hbd: 0
    rtb: 9
    num-ro5-violations: 1
    qed-weighted: 0.37
    full-molformula: C26H28ClNO
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Enclomiphene

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `enclomiphene-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL954](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL954/) · max phase 3 · id via Wikipedia infobox

## Source summary

One of the two isomers that make up clomiphene citrate; stimulates the body's own testosterone and sperm production by blocking estrogen feedback at the hypothalamus, unlike exogenous testosterone which shuts that down.

## Mechanism

Estrogen receptor alpha modulator _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **Flags:** prodrug

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 405.97 | 6.56 | 12.47 | 0/2 | 1 | C26H28ClNO |

**Targets (ChEMBL curated mechanisms):**

- [[Estrogen receptor (CHEMBL206)|Estrogen receptor]] - modulator · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Enclomifene*](https://en.wikipedia.org/w/index.php?title=Enclomifene&oldid=1368957410) (revision 1368957410, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10 h | 10 hours |
| Metabolism | hepatic | liver, CYP2D6 and CYP3A4 |
| CYP (metabolised by) | CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Dienestrol]] (Estrogen receptor), [[Diethylstilbestrol]] (Estrogen receptor), [[Elacestrant]] (Estrogen receptor), [[Estradiol]] (Estrogen receptor), [[Estradiol Acetate]] (Estrogen receptor), [[Estradiol Cypionate]] (Estrogen receptor), [[Estradiol Valerate]] (Estrogen receptor), [[Estrone]] (Estrogen receptor), [[Ethinyl Estradiol]] (Estrogen receptor), [[Fulvestrant (Faslodex)]] (Estrogen receptor), [[Giredestrant]] (Estrogen receptor), [[Mestranol]] (Estrogen receptor)
- **Shared CYP substrate pool:** CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
