---
type: compound
schema-version: 2
compound-id: testosterone-propionate-compound
name: Testosterone Propionate
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
chembl-id: CHEMBL1170
chembl-max-phase: 4
half-life:
  value: 0.8
  value-max: null
  unit: d
  notes: 'Intramuscular: 0.8 days (~20 hours)'
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: 'Oral: very low; Intramuscular: very high'
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
pk-source:
  type: wikipedia-infobox
  title: Testosterone propionate
  url: https://en.wikipedia.org/w/index.php?title=Testosterone_propionate&oldid=1373737638
  revision: 1373737638
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1170
  pref-name: TESTOSTERONE PROPIONATE
  molecule-type: Small molecule
  first-approval: 1974
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL1871
    name: Androgen receptor
    action: AGONIST
  properties:
    full-mwt: 344.5
    mw-freebase: 344.5
    alogp: 4.84
    psa: 43.37
    hba: 3
    hbd: 0
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.67
    full-molformula: C22H32O3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Testosterone Propionate

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `testosterone-propionate-compound`
- **Source group:** Anabolic Steroids (`steroids`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1170](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1170/) · max phase 4 · id via source catalogue

## Source summary

Androgen Receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1170).

## Mechanism

Androgen Receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1974
- **Flags:** prodrug

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 344.5 | 4.84 | 43.37 | 0/3 | 0 | C22H32O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Androgen receptor (CHEMBL1871)|Androgen receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Testosterone propionate*](https://en.wikipedia.org/w/index.php?title=Testosterone_propionate&oldid=1373737638) (revision 1373737638, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.8 d | Intramuscular: 0.8 days (~20 hours) |
| Bioavailability | - | Oral: very low; Intramuscular: very high |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Urine |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Anadrol (Oxymetholone)]] (Androgen receptor), [[Anavar (Oxandrolone)]] (Androgen receptor), [[Apalutamide (Erleada)]] (Androgen receptor), [[Apc-100]] (Androgen receptor), [[Bicalutamide (Casodex)]] (Androgen receptor), [[CB-03-01 (Clascoterone research formulation)]] (Androgen receptor), [[Clascoterone (Winlevi)]] (Androgen receptor), [[Cyproterone Acetate]] (Androgen receptor), [[Danazol]] (Androgen receptor), [[Darolutamide (Nubeqa)]] (Androgen receptor), [[Dianabol (Methandienone)]] (Androgen receptor), [[Dromostanolone Propionate]] (Androgen receptor)

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `cardiovascular-load`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Stimulant and Cardiovascular Load]]
- [[HPG and GH-IGF-1 Axes]]
