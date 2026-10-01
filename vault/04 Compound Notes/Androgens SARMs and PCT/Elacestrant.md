---
type: compound
schema-version: 2
compound-id: elacestrant-compound
name: Elacestrant
aliases: []
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: Estrogen receptor alpha degrader
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL4297509
chembl-max-phase: 4
half-life:
  value: 30.0
  value-max: 50.0
  unit: h
  notes: 30–50 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
bioavailability:
  value: 10.0
  value-max: null
  notes: ~10%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (82%), urine (7.5%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver (major: CYP3A4, minor: CYP2A6, CYP2C9)'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2A6
  - CYP2C9
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2A6, CYP2C9, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- endocrine-feedback-disruption
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/pct
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Elacestrant
  url: https://en.wikipedia.org/w/index.php?title=Elacestrant&oldid=1329034709
  revision: 1329034709
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL4297509
  pref-name: ELACESTRANT
  molecule-type: Small molecule
  first-approval: 2023
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L02BA04
  targets:
  - id: CHEMBL206
    name: Estrogen receptor
    action: DEGRADER
  properties:
    full-mwt: 458.65
    mw-freebase: 458.65
    alogp: 5.85
    psa: 44.73
    hba: 4
    hbd: 2
    rtb: 10
    num-ro5-violations: 1
    qed-weighted: 0.37
    full-molformula: C30H38N2O2
pk-verification:
  source: fda-label
  status: consistent
  set-id: aa66ae5c-2bd2-4444-8178-b55651e054ef
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=aa66ae5c-2bd2-4444-8178-b55651e054ef
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Elacestrant

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `elacestrant-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL4297509](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL4297509/) · max phase 4 · id via source catalogue

## Source summary

Estrogen receptor alpha degrader; approved/marketed compound catalogued by ChEMBL (CHEMBL4297509).

## Mechanism

Estrogen receptor alpha degrader _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2023
- **ATC L02BA04:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › HORMONE ANTAGONISTS AND RELATED AGENTS › Anti-estrogens

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 458.65 | 5.85 | 44.73 | 2/4 | 1 | C30H38N2O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Estrogen receptor (CHEMBL206)|Estrogen receptor]] - degrader · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Elacestrant*](https://en.wikipedia.org/w/index.php?title=Elacestrant&oldid=1329034709) (revision 1329034709, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 30–50 h | 30–50 hours |
| Protein binding | 99 % | >99% |
| Bioavailability | 10 % | ~10% |
| Metabolism | hepatic | Liver (major: CYP3A4, minor: CYP2A6, CYP2C9) |
| CYP (metabolised by) | CYP2A6, CYP2C9, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Feces (82%), urine (7.5%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set aa66ae5c…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=aa66ae5c-2bd2-4444-8178-b55651e054ef), label version 20260624. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 30, 50)
> - protein-binding: consistent (label values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Dienestrol]] (Estrogen receptor), [[Diethylstilbestrol]] (Estrogen receptor), [[Enclomiphene]] (Estrogen receptor), [[Estradiol]] (Estrogen receptor), [[Estradiol Acetate]] (Estrogen receptor), [[Estradiol Cypionate]] (Estrogen receptor), [[Estradiol Valerate]] (Estrogen receptor), [[Estrone]] (Estrogen receptor), [[Ethinyl Estradiol]] (Estrogen receptor), [[Fulvestrant (Faslodex)]] (Estrogen receptor), [[Giredestrant]] (Estrogen receptor), [[Mestranol]] (Estrogen receptor)
- **Same ATC subgroup:** [[Fulvestrant (Faslodex)]], [[Nolvadex (Tamoxifen)]], [[Toremifene (Fareston)]]
- **Shared CYP substrate pool:** CYP2A6 (+4 others), CYP2C9 (+40 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
