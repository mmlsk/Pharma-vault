---
type: compound
schema-version: 2
compound-id: methylene-blue-compound
name: Methylene Blue
aliases: []
cluster: Nootropics
group: nootropic
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL405110
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 24.0
  unit: h
  notes: 5–24 hours (IV)
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Renal; In rats: 18%(PO), 28% ()'
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
- cns-activity
- evidence-limited
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/nootropic
- merged-duplicate
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Methylene blue
  url: https://en.wikipedia.org/w/index.php?title=Methylene_blue&oldid=1371817588
  revision: 1371817588
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL191083
  pref-name: METHYLENE BLUE ANHYDROUS
  molecule-type: Small molecule
  first-approval: 2011
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - V03AB17
  - V04CG05
  targets: []
  properties:
    full-mwt: 284.41
    mw-freebase: 284.41
    alogp: 2.5
    psa: 19.14
    hba: 3
    hbd: 0
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.51
    full-molformula: C16H18N3S+
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 691a6872-bc2f-d492-11c6-c3eec25aa3d3
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=691a6872-bc2f-d492-11c6-c3eec25aa3d3
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Methylene Blue

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `methylene-blue-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL405110](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL405110/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Redox dye acting as an alternative electron carrier at low dose; also a MAO-A inhibitor, so serotonin syndrome with serotonergic drugs is a real risk. | Merged duplicate (methylene-blue-cation-compound): At low doses acts as an alternative mitochondrial electron carrier, bypassing damaged complexes. Genuinely interesting mechanism, essentially no controlled cognitive evidence, and a serotonin-syndrome risk with serotonergic drugs.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2011
- **Flags:** black-box warning, prodrug
- **ATC V03AB17:** VARIOUS › ALL OTHER THERAPEUTIC PRODUCTS › Antidotes
- **ATC V04CG05:** VARIOUS › OTHER DIAGNOSTIC AGENTS › Tests for gastric secretion

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 284.41 | 2.5 | 19.14 | 0/3 | 0 | C16H18N3S+ |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Methylene blue*](https://en.wikipedia.org/w/index.php?title=Methylene_blue&oldid=1371817588) (revision 1371817588, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–24 h | 5–24 hours (IV) |
| Excretion | mainly urinary | Renal; In rats: 18%(PO), 28% () |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 691a6872…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=691a6872-bc2f-d492-11c6-c3eec25aa3d3), label version 20260528. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 24)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Andexanet Alfa]], [[Flumazenil]], [[Fomepizole]], [[Glutathione]], [[Idarucizumab]], [[NAC (N-Acetylcysteine)]], [[Naloxone]], [[Phentolamine]], [[Physostigmine]], [[Potassium Iodide (SSKI-KI)|Potassium Iodide (SSKI/KI)]], [[Pralidoxime]], [[Protamine Sulfate]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
