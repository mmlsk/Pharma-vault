---
type: compound
schema-version: 2
compound-id: eplerenone-compound
name: Eplerenone
aliases: []
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: Mineralocorticoid receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1095097
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: 6.0
  unit: h
  notes: 4–6 hours
protein-binding:
  value: 50.0
  value-max: null
  unit: percent
  notes: ~50% (33–60%) (primarily to α1-acid glycoprotein)
bioavailability:
  value: 70.0
  value-max: null
  notes: ~70%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (67%), feces (32%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4)
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
  title: Eplerenone
  url: https://en.wikipedia.org/w/index.php?title=Eplerenone&oldid=1375993454
  revision: 1375993454
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1095097
  pref-name: EPLERENONE
  molecule-type: Small molecule
  first-approval: 2002
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C03DA04
  targets:
  - id: CHEMBL1994
    name: Mineralocorticoid receptor
    action: ANTAGONIST
  properties:
    full-mwt: 414.5
    mw-freebase: 414.5
    alogp: 3.12
    psa: 82.2
    hba: 6
    hbd: 0
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.48
    full-molformula: C24H30O6
pk-verification:
  source: fda-label
  status: consistent
  set-id: 3a3047f2-0155-4a07-955f-839a312cf879
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3a3047f2-0155-4a07-955f-839a312cf879
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Eplerenone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `eplerenone-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1095097](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1095097/) · max phase 4 · id via Wikipedia infobox

## Source summary

More selective mineralocorticoid receptor antagonist than spironolactone, developed specifically to avoid spironolactone's antiandrogenic side effects (gynecomastia, menstrual disturbance) while retaining its blood-pressure/potassium-sparing benefits.

## Mechanism

Mineralocorticoid receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2002
- **ATC C03DA04:** CARDIOVASCULAR SYSTEM › ALDOSTERONE ANTAGONISTS AND OTHER POTASSIUM-SPARING AGENTS › Aldosterone antagonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 414.5 | 3.12 | 82.2 | 0/6 | 0 | C24H30O6 |

**Targets (ChEMBL curated mechanisms):**

- [[Mineralocorticoid receptor (CHEMBL1994)|Mineralocorticoid receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Eplerenone*](https://en.wikipedia.org/w/index.php?title=Eplerenone&oldid=1375993454) (revision 1375993454, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4–6 h | 4–6 hours |
| Protein binding | 50 % | ~50% (33–60%) (primarily to α1-acid glycoprotein) |
| Bioavailability | 70 % | ~70% |
| Metabolism | hepatic | Liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | 6β-OH-EPL, 6β,21-OH-EPL, 21-OH-EPL, 3α,6β-OH-EPL (All inactive) |
| Excretion | mainly urinary | Urine (67%), feces (32%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 3a3047f2…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3a3047f2-0155-4a07-955f-839a312cf879), label version 20260828. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 3, 6)
> - protein-binding: consistent (label values: 50)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Apararenone]] (Mineralocorticoid receptor), [[Balcinrenone]] (Mineralocorticoid receptor), [[Canrenone]] (Mineralocorticoid receptor), [[Desoxycorticosterone Acetate]] (Mineralocorticoid receptor), [[Desoxycorticosterone Pivalate]] (Mineralocorticoid receptor), [[Drospirenone]] (Mineralocorticoid receptor), [[Felodipine]] (Mineralocorticoid receptor), [[Finerenone (Kerendia)]] (Mineralocorticoid receptor), [[Fludrocortisone Acetate]] (Mineralocorticoid receptor), [[Nimodipine]] (Mineralocorticoid receptor), [[Spironolactone]] (Mineralocorticoid receptor), [[Vamorolone]] (Mineralocorticoid receptor)
- **Same ATC subgroup:** [[Canrenone]], [[Finerenone (Kerendia)]], [[Spironolactone]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
