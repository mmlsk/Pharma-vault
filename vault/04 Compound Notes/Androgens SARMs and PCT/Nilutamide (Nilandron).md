---
type: compound
schema-version: 2
compound-id: nilutamide-compound
name: Nilutamide (Nilandron)
aliases:
- Nilutamide
- Nilandron
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
chembl-id: CHEMBL1274
chembl-max-phase: 4
half-life:
  value: 56.0
  value-max: null
  unit: h
  notes: 'Mean: 56 hours (~2 days); Range: 23–87 hours'
protein-binding:
  value: 80.0
  value-max: 84.0
  unit: percent
  notes: 80–84%
bioavailability:
  value: null
  value-max: null
  notes: Good
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: 62%; Feces: <10%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C19, FMO)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Nilutamide
  url: https://en.wikipedia.org/w/index.php?title=Nilutamide&oldid=1353660792
  revision: 1353660792
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1274
  pref-name: NILUTAMIDE
  molecule-type: Small molecule
  first-approval: 1996
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L02BB02
  targets:
  - id: CHEMBL1871
    name: Androgen receptor
    action: ANTAGONIST
  properties:
    full-mwt: 317.22
    mw-freebase: 317.22
    alogp: 2.45
    psa: 92.55
    hba: 4
    hbd: 1
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.51
    full-molformula: C12H10F3N3O4
pk-verification:
  source: fda-label
  status: consistent
  set-id: d5740b8f-fbb3-4023-9133-9e359a9ab980
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d5740b8f-fbb3-4023-9133-9e359a9ab980
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Nilutamide (Nilandron)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nilutamide-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Nilutamide, Nilandron
- **ChEMBL:** [CHEMBL1274](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1274/) · max phase 4 · id via Wikipedia infobox

## Source summary

First-generation androgen receptor antagonist with two side effects unique in its class.

## Mechanism

Androgen Receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1996
- **Flags:** black-box warning
- **ATC L02BB02:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › HORMONE ANTAGONISTS AND RELATED AGENTS › Anti-androgens

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 317.22 | 2.45 | 92.55 | 1/4 | 0 | C12H10F3N3O4 |

**Targets (ChEMBL curated mechanisms):**

- [[Androgen receptor (CHEMBL1871)|Androgen receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nilutamide*](https://en.wikipedia.org/w/index.php?title=Nilutamide&oldid=1353660792) (revision 1353660792, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 56 h | Mean: 56 hours (~2 days); Range: 23–87 hours |
| Protein binding | 80–84 % | 80–84% |
| Bioavailability | - | Good |
| Metabolism | hepatic | Liver (CYP2C19, FMO) |
| CYP (metabolised by) | CYP2C19 | roles as inhibitor/inducer not assessed |
| Metabolites | - | At least 5, some active |
| Excretion | mainly urinary | Urine: 62%; Feces: <10% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set d5740b8f…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d5740b8f-fbb3-4023-9133-9e359a9ab980), label version 20260626. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 38, 41, 49, 59.1)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Anadrol (Oxymetholone)]] (Androgen receptor), [[Anavar (Oxandrolone)]] (Androgen receptor), [[Apalutamide (Erleada)]] (Androgen receptor), [[Apc-100]] (Androgen receptor), [[Bicalutamide (Casodex)]] (Androgen receptor), [[CB-03-01 (Clascoterone research formulation)]] (Androgen receptor), [[Clascoterone (Winlevi)]] (Androgen receptor), [[Cyproterone Acetate]] (Androgen receptor), [[Danazol]] (Androgen receptor), [[Darolutamide (Nubeqa)]] (Androgen receptor), [[Dianabol (Methandienone)]] (Androgen receptor), [[Dromostanolone Propionate]] (Androgen receptor)
- **Same ATC subgroup:** [[Apalutamide (Erleada)]], [[Bicalutamide (Casodex)]], [[Darolutamide (Nubeqa)]], [[Enzalutamide]], [[Flutamide]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
