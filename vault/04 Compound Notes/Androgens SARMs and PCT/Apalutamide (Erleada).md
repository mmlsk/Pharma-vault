---
type: compound
schema-version: 2
compound-id: apalutamide-compound
name: Apalutamide (Erleada)
aliases:
- Apalutamide
- Erleada
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
chembl-id: CHEMBL3183409
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: 4.0
  unit: d
  notes: 'Apalutamide: 3–4 days (at steady-state)'
protein-binding:
  value: 96.0
  value-max: null
  unit: percent
  notes: 'Apalutamide: 96%; NDMA: 95%'
bioavailability:
  value: 100.0
  value-max: null
  notes: 100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: 65%; Feces: 24%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C8, CYP3A4)
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
  title: Apalutamide
  url: https://en.wikipedia.org/w/index.php?title=Apalutamide&oldid=1370134765
  revision: 1370134765
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL3183409
  pref-name: APALUTAMIDE
  molecule-type: Small molecule
  first-approval: 2018
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L02BB05
  targets:
  - id: CHEMBL1871
    name: Androgen receptor
    action: ANTAGONIST
  properties:
    full-mwt: 477.44
    mw-freebase: 477.44
    alogp: 3.53
    psa: 89.33
    hba: 5
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.54
    full-molformula: C21H15F4N5O2S
pk-verification:
  source: fda-label
  status: consistent
  set-id: d1cda4f7-cb33-46ea-b9ac-431f6452b1a5
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d1cda4f7-cb33-46ea-b9ac-431f6452b1a5
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Apalutamide (Erleada)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `apalutamide-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Apalutamide, Erleada
- **ChEMBL:** [CHEMBL3183409](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3183409/) · max phase 4 · id via Wikipedia infobox

## Source summary

Second-generation androgen receptor antagonist; blocks nuclear translocation as well as binding.

## Mechanism

Androgen Receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2018
- **ATC L02BB05:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › HORMONE ANTAGONISTS AND RELATED AGENTS › Anti-androgens

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 477.44 | 3.53 | 89.33 | 1/5 | 0 | C21H15F4N5O2S |

**Targets (ChEMBL curated mechanisms):**

- [[Androgen receptor (CHEMBL1871)|Androgen receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Apalutamide*](https://en.wikipedia.org/w/index.php?title=Apalutamide&oldid=1370134765) (revision 1370134765, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–4 d | Apalutamide: 3–4 days (at steady-state) |
| Protein binding | 96 % | Apalutamide: 96%; NDMA: 95% |
| Bioavailability | 100 % | 100% |
| Metabolism | hepatic | Liver (CYP2C8, CYP3A4) |
| CYP (metabolised by) | CYP2C8, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • NDMA |
| Excretion | mainly urinary | Urine: 65%; Feces: 24% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set d1cda4f7…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d1cda4f7-cb33-46ea-b9ac-431f6452b1a5), label version 20260702. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 72)
> - protein-binding: consistent (label values: 95, 96)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Anadrol (Oxymetholone)]] (Androgen receptor), [[Anavar (Oxandrolone)]] (Androgen receptor), [[Apc-100]] (Androgen receptor), [[Bicalutamide (Casodex)]] (Androgen receptor), [[CB-03-01 (Clascoterone research formulation)]] (Androgen receptor), [[Clascoterone (Winlevi)]] (Androgen receptor), [[Cyproterone Acetate]] (Androgen receptor), [[Danazol]] (Androgen receptor), [[Darolutamide (Nubeqa)]] (Androgen receptor), [[Dianabol (Methandienone)]] (Androgen receptor), [[Dromostanolone Propionate]] (Androgen receptor), [[Enzalutamide]] (Androgen receptor)
- **Same ATC subgroup:** [[Bicalutamide (Casodex)]], [[Darolutamide (Nubeqa)]], [[Enzalutamide]], [[Flutamide]], [[Nilutamide (Nilandron)]]
- **Shared CYP substrate pool:** CYP2C8 (+15 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
