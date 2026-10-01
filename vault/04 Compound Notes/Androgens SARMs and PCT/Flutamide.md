---
type: compound
schema-version: 2
compound-id: flutamide-compound
name: Flutamide
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
chembl-id: CHEMBL806
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 6.0
  unit: h
  notes: 'Flutamide: 5–6 hours; Hydroxyflutamide: 8–10 hours'
protein-binding:
  value: 94.0
  value-max: 96.0
  unit: percent
  notes: 'Flutamide: 94–96%; Hydroxyflutamide: 92–94%'
bioavailability:
  value: 90.0
  value-max: null
  notes: Complete (>90%)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine (mainly); Feces (4.2%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP1A2)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Flutamide
  url: https://en.wikipedia.org/w/index.php?title=Flutamide&oldid=1358397623
  revision: 1358397623
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL806
  pref-name: FLUTAMIDE
  molecule-type: Small molecule
  first-approval: 1989
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L02BB01
  targets:
  - id: CHEMBL1871
    name: Androgen receptor
    action: ANTAGONIST
  properties:
    full-mwt: 276.21
    mw-freebase: 276.21
    alogp: 3.21
    psa: 72.24
    hba: 3
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.68
    full-molformula: C11H11F3N2O3
pk-verification:
  source: fda-label
  status: consistent
  set-id: 0a905e25-42b6-4937-a689-f01a8f22e644
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0a905e25-42b6-4937-a689-f01a8f22e644
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Flutamide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `flutamide-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL806](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL806/) · max phase 4 · id via Wikipedia infobox

## Source summary

Early nonsteroidal antiandrogen that blocks androgen receptor function; largely superseded by bicalutamide and enzalutamide due to hepatotoxicity risk.

## Mechanism

Androgen Receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1989
- **Flags:** black-box warning, prodrug
- **ATC L02BB01:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › HORMONE ANTAGONISTS AND RELATED AGENTS › Anti-androgens

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 276.21 | 3.21 | 72.24 | 1/3 | 0 | C11H11F3N2O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Androgen receptor (CHEMBL1871)|Androgen receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Flutamide*](https://en.wikipedia.org/w/index.php?title=Flutamide&oldid=1358397623) (revision 1358397623, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–6 h | Flutamide: 5–6 hours; Hydroxyflutamide: 8–10 hours |
| Protein binding | 94–96 % | Flutamide: 94–96%; Hydroxyflutamide: 92–94% |
| Bioavailability | 90 % | Complete (>90%) |
| Metabolism | hepatic | Liver (CYP1A2) |
| CYP (metabolised by) | CYP1A2 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Hydroxyflutamide |
| Excretion | - | Urine (mainly); Feces (4.2%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 0a905e25…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0a905e25-42b6-4937-a689-f01a8f22e644), label version 20250204. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 6, 8, 9.6)
> - protein-binding: consistent (label values: 92, 94, 96)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Anadrol (Oxymetholone)]] (Androgen receptor), [[Anavar (Oxandrolone)]] (Androgen receptor), [[Apalutamide (Erleada)]] (Androgen receptor), [[Apc-100]] (Androgen receptor), [[Bicalutamide (Casodex)]] (Androgen receptor), [[CB-03-01 (Clascoterone research formulation)]] (Androgen receptor), [[Clascoterone (Winlevi)]] (Androgen receptor), [[Cyproterone Acetate]] (Androgen receptor), [[Danazol]] (Androgen receptor), [[Darolutamide (Nubeqa)]] (Androgen receptor), [[Dianabol (Methandienone)]] (Androgen receptor), [[Dromostanolone Propionate]] (Androgen receptor)
- **Same ATC subgroup:** [[Apalutamide (Erleada)]], [[Bicalutamide (Casodex)]], [[Darolutamide (Nubeqa)]], [[Enzalutamide]], [[Nilutamide (Nilandron)]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
