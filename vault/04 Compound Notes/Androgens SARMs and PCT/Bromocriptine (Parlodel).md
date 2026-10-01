---
type: compound
schema-version: 2
compound-id: bromocriptine-compound
name: Bromocriptine (Parlodel)
aliases:
- Bromocriptine
- Parlodel
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL493
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: 14.0
  unit: h
  notes: 12–14 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 28.0
  value-max: null
  notes: 28% of oral dose absorbed
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 85% bile (feces), 2.5–5.5% urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Extensively liver-mediated
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/pct
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Bromocriptine
  url: https://en.wikipedia.org/w/index.php?title=Bromocriptine&oldid=1363856092
  revision: 1363856092
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL493
  pref-name: BROMOCRIPTINE
  molecule-type: Small molecule
  first-approval: 1978
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - G02CB01
  - N04BC01
  targets: []
  properties:
    full-mwt: 654.61
    mw-freebase: 654.61
    alogp: 3.19
    psa: 118.21
    hba: 6
    hbd: 3
    rtb: 5
    num-ro5-violations: 1
    qed-weighted: 0.46
    full-molformula: C32H40BrN5O5
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Bromocriptine (Parlodel)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `bromocriptine-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Bromocriptine, Parlodel
- **ChEMBL:** [CHEMBL493](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL493/) · max phase 4 · id via Wikipedia infobox

## Source summary

Older dopamine agonist used to suppress prolactin, shorter-acting and less well-tolerated than cabergoline for the same purpose.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1978
- **ATC G02CB01:** GENITO URINARY SYSTEM AND SEX HORMONES › OTHER GYNECOLOGICALS › Prolactine inhibitors
- **ATC N04BC01:** NERVOUS SYSTEM › DOPAMINERGIC AGENTS › Dopamine agonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 654.61 | 3.19 | 118.21 | 3/6 | 1 | C32H40BrN5O5 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Bromocriptine*](https://en.wikipedia.org/w/index.php?title=Bromocriptine&oldid=1363856092) (revision 1363856092, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12–14 h | 12–14 hours |
| Bioavailability | 28 % | 28% of oral dose absorbed |
| Metabolism | hepatic | Extensively liver-mediated |
| Excretion | mainly non-renal | 85% bile (feces), 2.5–5.5% urine |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Apomorphine]], [[Cabergoline (Dostinex)]], [[Lisuride]], [[Pergolide]], [[Pramipexole (Mirapex)]], [[Ropinirole]], [[Rotigotine]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
