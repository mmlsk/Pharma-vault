---
type: compound
schema-version: 2
compound-id: radotinib-compound
name: Radotinib
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: Bcr/Abl fusion protein inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL4297524
chembl-max-phase: 3
half-life:
  value: 13.0
  value-max: 15.0
  unit: h
  notes: ~13–15 h
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Fecal and renal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic
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
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
- chembl-profile
- chembl-name-match
pk-source:
  type: wikipedia-infobox
  title: Radotinib
  url: https://en.wikipedia.org/w/index.php?title=Radotinib&oldid=1370533809
  revision: 1370533809
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL4297524
  pref-name: RADOTINIB
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL2096618
    name: Bcr/Abl fusion protein
    action: INHIBITOR
  properties:
    full-mwt: 530.51
    mw-freebase: 530.51
    alogp: 5.75
    psa: 110.51
    hba: 8
    hbd: 2
    rtb: 6
    num-ro5-violations: 2
    qed-weighted: 0.29
    full-molformula: C27H21F3N8O
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Radotinib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `radotinib-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL4297524](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL4297524/) · max phase 3 · id via exact ChEMBL name match - confirm

## Source summary

Inhibits BCR–ABL-family kinase signaling; mutation coverage and off-target cardiovascular risks differ by agent.

## Mechanism

Bcr/Abl fusion protein inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 530.51 | 5.75 | 110.51 | 2/8 | 2 | C27H21F3N8O |

**Targets (ChEMBL curated mechanisms):**

- [[Bcr-Abl fusion protein (CHEMBL2096618)|Bcr/Abl fusion protein]] - inhibitor · CHIMERIC PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Radotinib*](https://en.wikipedia.org/w/index.php?title=Radotinib&oldid=1370533809) (revision 1370533809, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 13–15 h | ~13–15 h |
| Metabolism | hepatic | Hepatic |
| Excretion | - | Fecal and renal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Dasatinib (Sprycel)]] (Bcr/Abl fusion protein), [[Olverembatinib]] (Bcr/Abl fusion protein), [[Vodobatinib]] (Bcr/Abl fusion protein)

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
