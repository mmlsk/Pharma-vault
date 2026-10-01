---
type: compound
schema-version: 2
compound-id: enzalutamide-compound
name: Enzalutamide
aliases: []
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: Androgen Receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1082407
chembl-max-phase: 4
half-life:
  value: 5.8
  value-max: null
  unit: d
  notes: 'Enzalutamide: 5.8 days (range 2.8–10.2 days); NDME: 7.8–8.6 days'
protein-binding:
  value: 97.0
  value-max: 98.0
  unit: percent
  notes: 'Enzalutamide: 97–98% (primarily to albumin); NDME: 95%'
bioavailability:
  value: null
  value-max: null
  notes: 'Rats: 89.7%; Humans: unknown (but at least 84.6% based on recovery from excretion)'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: 71.0%; Bile: 13.6%; Feces: 0.39%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (primarily CYP2C8 and CYP3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C8
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C8, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Enzalutamide
  url: https://en.wikipedia.org/w/index.php?title=Enzalutamide&oldid=1370575250
  revision: 1370575250
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1082407
  pref-name: ENZALUTAMIDE
  molecule-type: Small molecule
  first-approval: 2012
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L02BB04
  targets:
  - id: CHEMBL1871
    name: Androgen receptor
    action: ANTAGONIST
  properties:
    full-mwt: 464.44
    mw-freebase: 464.44
    alogp: 3.99
    psa: 76.44
    hba: 4
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.55
    full-molformula: C21H16F4N4O2S
pk-verification:
  source: fda-label
  status: consistent
  set-id: b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Enzalutamide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `enzalutamide-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1082407](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1082407/) · max phase 4 · id via Wikipedia infobox

## Source summary

Nonsteroidal androgen receptor antagonist approved for prostate cancer; blocks androgen binding, nuclear translocation, and DNA binding at the receptor.

## Mechanism

Androgen Receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2012
- **ATC L02BB04:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › HORMONE ANTAGONISTS AND RELATED AGENTS › Anti-androgens

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 464.44 | 3.99 | 76.44 | 1/4 | 0 | C21H16F4N4O2S |

**Targets (ChEMBL curated mechanisms):**

- [[Androgen receptor (CHEMBL1871)|Androgen receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Enzalutamide*](https://en.wikipedia.org/w/index.php?title=Enzalutamide&oldid=1370575250) (revision 1370575250, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5.8 d | Enzalutamide: 5.8 days (range 2.8–10.2 days); NDME: 7.8–8.6 days |
| Protein binding | 97–98 % | Enzalutamide: 97–98% (primarily to albumin); NDME: 95% |
| Bioavailability | - | Rats: 89.7%; Humans: unknown (but at least 84.6% based on recovery from excretion) |
| Metabolism | hepatic | Liver (primarily CYP2C8 and CYP3A4) |
| CYP (metabolised by) | CYP2C8, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • NDME (active); • Carboxylic acid derivative metabolite (inactive) |
| Excretion | mainly urinary | Urine: 71.0%; Bile: 13.6%; Feces: 0.39% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set b129fdc9…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf), label version 20260728. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 67.2, 139.2, 187.2, 206.4, 244.8)
> - protein-binding: consistent (label values: 95, 97, 98)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Anadrol (Oxymetholone)]] (Androgen receptor), [[Anavar (Oxandrolone)]] (Androgen receptor), [[Apalutamide (Erleada)]] (Androgen receptor), [[Apc-100]] (Androgen receptor), [[Bicalutamide (Casodex)]] (Androgen receptor), [[CB-03-01 (Clascoterone research formulation)]] (Androgen receptor), [[Clascoterone (Winlevi)]] (Androgen receptor), [[Cyproterone Acetate]] (Androgen receptor), [[Danazol]] (Androgen receptor), [[Darolutamide (Nubeqa)]] (Androgen receptor), [[Dianabol (Methandienone)]] (Androgen receptor), [[Dromostanolone Propionate]] (Androgen receptor)
- **Same ATC subgroup:** [[Apalutamide (Erleada)]], [[Bicalutamide (Casodex)]], [[Darolutamide (Nubeqa)]], [[Flutamide]], [[Nilutamide (Nilandron)]]
- **Shared CYP substrate pool:** CYP2C8 (+15 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
