---
type: compound
schema-version: 2
compound-id: fluoxymesterone-compound
name: Halotestin (Fluoxymesterone)
aliases:
- Halotestin
- Fluoxymesterone
cluster: Androgens SARMs and PCT
group: steroids
class: null
subclass: null
mechanism: Androgen Receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1445
chembl-max-phase: 4
half-life:
  value: 9.2
  value-max: null
  unit: h
  notes: 9.2 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 80.0
  value-max: null
  notes: 'Oral: 80%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.05
  notes: Urine (<5% unchanged)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (6β-hydroxylation, 5α- and 5β-reduction, 3α- and 3β-keto-oxidation, 11β-hydroxy-oxidation)
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
- cardiovascular-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/steroids
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Fluoxymesterone
  url: https://en.wikipedia.org/w/index.php?title=Fluoxymesterone&oldid=1303035595
  revision: 1303035595
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1445
  pref-name: FLUOXYMESTERONE
  molecule-type: Small molecule
  first-approval: 1956
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - G03BA01
  targets:
  - id: CHEMBL1871
    name: Androgen receptor
    action: AGONIST
  properties:
    full-mwt: 336.45
    mw-freebase: 336.45
    alogp: 3.33
    psa: 57.53
    hba: 3
    hbd: 2
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.71
    full-molformula: C20H29FO3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Halotestin (Fluoxymesterone)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fluoxymesterone-compound`
- **Source group:** Anabolic Steroids (`steroids`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Halotestin, Fluoxymesterone
- **ChEMBL:** [CHEMBL1445](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1445/) · max phase 4 · id via Wikipedia infobox

## Source summary

Highly androgenic oral steroid used for strength/aggression, minimal mass gain, significant liver strain.

## Mechanism

Androgen Receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1956
- **ATC G03BA01:** GENITO URINARY SYSTEM AND SEX HORMONES › ANDROGENS › 3-oxoandrosten (4) derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 336.45 | 3.33 | 57.53 | 2/3 | 0 | C20H29FO3 |

**Targets (ChEMBL curated mechanisms):**

- [[Androgen receptor (CHEMBL1871)|Androgen receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fluoxymesterone*](https://en.wikipedia.org/w/index.php?title=Fluoxymesterone&oldid=1303035595) (revision 1303035595, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9.2 h | 9.2 hours |
| Bioavailability | 80 % | Oral: 80% |
| Metabolism | hepatic | Liver (6β-hydroxylation, 5α- and 5β-reduction, 3α- and 3β-keto-oxidation, 11β-hydroxy-oxidation) |
| Metabolites | - | • 5α-Dihydrofluoxymesterone; • 11-Oxofluoxymesterone |
| Excretion | - · fe 0.05 | Urine (<5% unchanged) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Anadrol (Oxymetholone)]] (Androgen receptor), [[Anavar (Oxandrolone)]] (Androgen receptor), [[Apalutamide (Erleada)]] (Androgen receptor), [[Apc-100]] (Androgen receptor), [[Bicalutamide (Casodex)]] (Androgen receptor), [[CB-03-01 (Clascoterone research formulation)]] (Androgen receptor), [[Clascoterone (Winlevi)]] (Androgen receptor), [[Cyproterone Acetate]] (Androgen receptor), [[Danazol]] (Androgen receptor), [[Darolutamide (Nubeqa)]] (Androgen receptor), [[Dianabol (Methandienone)]] (Androgen receptor), [[Dromostanolone Propionate]] (Androgen receptor)
- **Same ATC subgroup:** [[Methyltestosterone]], [[Testosterone]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `cardiovascular-load`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Stimulant and Cardiovascular Load]]
- [[HPG and GH-IGF-1 Axes]]
