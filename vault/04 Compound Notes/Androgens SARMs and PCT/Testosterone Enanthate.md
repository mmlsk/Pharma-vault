---
type: compound
schema-version: 2
compound-id: testosterone-enanthate-compound
name: Testosterone Enanthate
aliases: []
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
chembl-id: CHEMBL1200335
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: 5.0
  unit: d
  notes: 'Intramuscular: 4–5 days'
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: 'Oral: very low; Intramuscular: high'
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
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Testosterone enanthate
  url: https://en.wikipedia.org/w/index.php?title=Testosterone_enanthate&oldid=1375428688
  revision: 1375428688
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1200335
  pref-name: TESTOSTERONE ENANTHATE
  molecule-type: Small molecule
  first-approval: 1953
  black-box-warning: true
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL1871
    name: Androgen receptor
    action: AGONIST
  properties:
    full-mwt: 400.6
    mw-freebase: 400.6
    alogp: 6.4
    psa: 43.37
    hba: 3
    hbd: 0
    rtb: 6
    num-ro5-violations: 1
    qed-weighted: 0.38
    full-molformula: C26H40O3
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 82a98132-9d5f-40a5-8c4f-f52f2a5de60e
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=82a98132-9d5f-40a5-8c4f-f52f2a5de60e
  checked: '2026-10-01'
  fields:
    half-life: discrepant
---

# Testosterone Enanthate

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `testosterone-enanthate-compound`
- **Source group:** Anabolic Steroids (`steroids`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1200335](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1200335/) · max phase 4 · id via source catalogue

## Source summary

Androgen Receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1200335).

## Mechanism

Androgen Receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1953
- **Flags:** black-box warning, prodrug

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 400.6 | 6.4 | 43.37 | 0/3 | 1 | C26H40O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Androgen receptor (CHEMBL1871)|Androgen receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Testosterone enanthate*](https://en.wikipedia.org/w/index.php?title=Testosterone_enanthate&oldid=1375428688) (revision 1375428688, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4–5 d | Intramuscular: 4–5 days |
| Bioavailability | - | Oral: very low; Intramuscular: high |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Urine |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 82a98132…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=82a98132-9d5f-40a5-8c4f-f52f2a5de60e), label version 20260612. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 0.167, 1.667)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Anadrol (Oxymetholone)]] (Androgen receptor), [[Anavar (Oxandrolone)]] (Androgen receptor), [[Apalutamide (Erleada)]] (Androgen receptor), [[Apc-100]] (Androgen receptor), [[Bicalutamide (Casodex)]] (Androgen receptor), [[CB-03-01 (Clascoterone research formulation)]] (Androgen receptor), [[Clascoterone (Winlevi)]] (Androgen receptor), [[Cyproterone Acetate]] (Androgen receptor), [[Danazol]] (Androgen receptor), [[Darolutamide (Nubeqa)]] (Androgen receptor), [[Dianabol (Methandienone)]] (Androgen receptor), [[Dromostanolone Propionate]] (Androgen receptor)

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `cardiovascular-load`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Stimulant and Cardiovascular Load]]
- [[HPG and GH-IGF-1 Axes]]
