---
type: compound
schema-version: 2
compound-id: moclobemide-compound
name: Moclobemide
aliases: []
cluster: Nootropics
group: nootropic
class: null
subclass: null
mechanism: Monoamine oxidase A inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL86304
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: 2.0
  unit: h
  notes: 1–2 hours, 4 hours (elderly)
protein-binding:
  value: 50.0
  value-max: null
  unit: percent
  notes: 50%
bioavailability:
  value: 55.0
  value-max: 95.0
  notes: 55–95% (increases with repeat administration)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney, Faecal (<5%)
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
- cns-activity
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/nootropic
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Moclobemide
  url: https://en.wikipedia.org/w/index.php?title=Moclobemide&oldid=1371051334
  revision: 1371051334
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL86304
  pref-name: MOCLOBEMIDE
  molecule-type: Small molecule
  first-approval: 1990
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N06AG02
  targets:
  - id: CHEMBL1951
    name: Amine oxidase [flavin-containing] A
    action: INHIBITOR
  properties:
    full-mwt: 268.74
    mw-freebase: 268.74
    alogp: 1.4
    psa: 41.57
    hba: 3
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.9
    full-molformula: C13H17ClN2O2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Moclobemide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `moclobemide-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL86304](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL86304/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits monoamine oxidase to raise synaptic monoamines; selectivity and reversibility determine tyramine and serotonin-syndrome risk; reversible MAO-A inhibitor.

## Mechanism

Monoamine oxidase A inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1990
- **ATC N06AG02:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Monoamine oxidase A inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 268.74 | 1.4 | 41.57 | 1/3 | 0 | C13H17ClN2O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Amine oxidase -flavin-containing- A (CHEMBL1951)|Amine oxidase [flavin-containing] A]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Moclobemide*](https://en.wikipedia.org/w/index.php?title=Moclobemide&oldid=1371051334) (revision 1371051334, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–2 h | 1–2 hours, 4 hours (elderly) |
| Protein binding | 50 % | 50% |
| Bioavailability | 55–95 % | 55–95% (increases with repeat administration) |
| Metabolism | hepatic | Liver |
| Excretion | - | Kidney, Faecal (<5%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Minaprine]] (Amine oxidase [flavin-containing] A), [[Toloxatone]] (Amine oxidase [flavin-containing] A)
- **Same ATC subgroup:** [[Toloxatone]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
