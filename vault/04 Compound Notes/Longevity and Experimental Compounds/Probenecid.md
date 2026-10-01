---
type: compound
schema-version: 2
compound-id: probenecid-compound
name: Probenecid
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: Solute carrier family 22 member 11 inhibitor; Solute carrier family 22 member 6 inhibitor; Solute carrier family 22 member 8 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL897
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 6.0
  unit: h
  notes: '2-6 hours (dose: 0.5-1 g)'
protein-binding:
  value: 75.0
  value-max: 95.0
  unit: percent
  notes: 75-95%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: kidney (77-88%)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Probenecid
  url: https://en.wikipedia.org/w/index.php?title=Probenecid&oldid=1361384214
  revision: 1361384214
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL897
  pref-name: PROBENECID
  molecule-type: Small molecule
  first-approval: 1951
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - M04AB01
  targets:
  - id: CHEMBL1641347
    name: Solute carrier family 22 member 6
    action: INHIBITOR
  - id: CHEMBL1641348
    name: Organic anion transporter 3
    action: INHIBITOR
  - id: CHEMBL2073677
    name: Solute carrier family 22 member 11
    action: INHIBITOR
  properties:
    full-mwt: 285.37
    mw-freebase: 285.37
    alogp: 2.2
    psa: 74.68
    hba: 3
    hbd: 1
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.83
    full-molformula: C13H19NO4S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 65b4888c-d49a-433f-9bfd-17880ae40069
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=65b4888c-d49a-433f-9bfd-17880ae40069
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Probenecid

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `probenecid-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL897](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL897/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Blocks proximal-tubule urate reabsorption to raise fractional urate excretion; urine volume and stone risk need attention.

## Mechanism

Solute carrier family 22 member 11 inhibitor; Solute carrier family 22 member 6 inhibitor; Solute carrier family 22 member 8 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1951
- **ATC M04AB01:** MUSCULO-SKELETAL SYSTEM › ANTIGOUT PREPARATIONS › Preparations increasing uric acid excretion

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 285.37 | 2.2 | 74.68 | 1/3 | 0 | C13H19NO4S |

**Targets (ChEMBL curated mechanisms):**

- [[Solute carrier family 22 member 6 (CHEMBL1641347)|Solute carrier family 22 member 6]] - inhibitor · SINGLE PROTEIN
- [[Organic anion transporter 3 (CHEMBL1641348)|Organic anion transporter 3]] - inhibitor · SINGLE PROTEIN
- [[Solute carrier family 22 member 11 (CHEMBL2073677)|Solute carrier family 22 member 11]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Probenecid*](https://en.wikipedia.org/w/index.php?title=Probenecid&oldid=1361384214) (revision 1361384214, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–6 h | 2-6 hours (dose: 0.5-1 g) |
| Protein binding | 75–95 % | 75-95% |
| Excretion | mainly urinary | kidney (77-88%) |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 65b4888c…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=65b4888c-d49a-433f-9bfd-17880ae40069), label version 20260429. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Benzbromarone]], [[Lesinurad]], [[Sulfinpyrazone]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
