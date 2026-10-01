---
type: compound
schema-version: 2
compound-id: ostarine-compound
name: Ostarine (MK-2866)
aliases:
- Ostarine
- MK-2866
cluster: Androgens SARMs and PCT
group: sarms
class: null
subclass: null
mechanism: Androgen Receptor modulator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1738889
chembl-max-phase: 3
half-life:
  value: 14.0
  value-max: 24.0
  unit: h
  notes: 14–24 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: 100% (rats)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Feces (70%), urine (21–25%) (rats)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4, UGT1A1, UGT2B7
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- endocrine-feedback-disruption
- identity-contamination
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/sarms
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Enobosarm
  url: https://en.wikipedia.org/w/index.php?title=Enobosarm&oldid=1375979110
  revision: 1375979110
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1738889
  pref-name: ENOBOSARM
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL1871
    name: Androgen receptor
    action: MODULATOR
  properties:
    full-mwt: 389.33
    mw-freebase: 389.33
    alogp: 3.22
    psa: 106.14
    hba: 5
    hbd: 2
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.82
    full-molformula: C19H14F3N3O3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Ostarine (MK-2866)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ostarine-compound`
- **Source group:** SARMs (`sarms`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Ostarine, MK-2866
- **ChEMBL:** [CHEMBL1738889](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1738889/) · max phase 3 · id via Wikipedia infobox

## Source summary

Selective androgen receptor modulator (SARM) studied for muscle wasting, with milder side effects than steroids.

## Mechanism

Androgen Receptor modulator _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 389.33 | 3.22 | 106.14 | 2/5 | 0 | C19H14F3N3O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Androgen receptor (CHEMBL1871)|Androgen receptor]] - modulator · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Enobosarm*](https://en.wikipedia.org/w/index.php?title=Enobosarm&oldid=1375979110) (revision 1375979110, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 14–24 h | 14–24 hours |
| Bioavailability | - | 100% (rats) |
| Metabolism | hepatic | CYP3A4, UGT1A1, UGT2B7 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Enobosarm glucuronide |
| Excretion | mainly urinary | Feces (70%), urine (21–25%) (rats) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Anadrol (Oxymetholone)]] (Androgen receptor), [[Anavar (Oxandrolone)]] (Androgen receptor), [[Apalutamide (Erleada)]] (Androgen receptor), [[Apc-100]] (Androgen receptor), [[Bicalutamide (Casodex)]] (Androgen receptor), [[CB-03-01 (Clascoterone research formulation)]] (Androgen receptor), [[Clascoterone (Winlevi)]] (Androgen receptor), [[Cyproterone Acetate]] (Androgen receptor), [[Danazol]] (Androgen receptor), [[Darolutamide (Nubeqa)]] (Androgen receptor), [[Dianabol (Methandienone)]] (Androgen receptor), [[Dromostanolone Propionate]] (Androgen receptor)
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `identity-contamination`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
