---
type: compound
schema-version: 2
compound-id: tropicamide-compound
name: Tropicamide
aliases: []
cluster: Ancillary Supplements and Topicals
group: derm
class: null
subclass: null
mechanism: Muscarinic acetylcholine receptor M3 antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1200604
chembl-max-phase: 4
half-life:
  value: null
  unit: null
  notes: null
protein-binding:
  value: 45.0
  value-max: null
  unit: percent
  notes: 45%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
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
- needs-compound-review
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/derm
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Tropicamide
  url: https://en.wikipedia.org/w/index.php?title=Tropicamide&oldid=1363790199
  revision: 1363790199
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1200604
  pref-name: TROPICAMIDE
  molecule-type: Small molecule
  first-approval: 1960
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - S01FA06
  - S01FA56
  targets:
  - id: CHEMBL245
    name: Muscarinic acetylcholine receptor M3
    action: ANTAGONIST
  properties:
    full-mwt: 284.36
    mw-freebase: 284.36
    alogp: 2.21
    psa: 53.43
    hba: 3
    hbd: 1
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.88
    full-molformula: C17H20N2O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 378b5fe2-4b5d-4c87-a7d6-fd0caa6402af
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=378b5fe2-4b5d-4c87-a7d6-fd0caa6402af
  checked: '2026-10-01'
  fields:
    protein-binding: no-label-value
---

# Tropicamide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tropicamide-compound`
- **Source group:** Dermatology & Topicals (`derm`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1200604](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1200604/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

The shortest-acting antimuscarinic mydriatic, standard for fundus examination.

## Mechanism

Muscarinic acetylcholine receptor M3 antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1960
- **ATC S01FA06:** SENSORY ORGANS › MYDRIATICS AND CYCLOPLEGICS › Anticholinergics
- **ATC S01FA56:** SENSORY ORGANS › MYDRIATICS AND CYCLOPLEGICS › Anticholinergics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 284.36 | 2.21 | 53.43 | 1/3 | 0 | C17H20N2O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Muscarinic acetylcholine receptor M3 (CHEMBL245)|Muscarinic acetylcholine receptor M3]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tropicamide*](https://en.wikipedia.org/w/index.php?title=Tropicamide&oldid=1363790199) (revision 1363790199, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Protein binding | 45 % | 45% |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 378b5fe2…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=378b5fe2-4b5d-4c87-a7d6-fd0caa6402af), label version 20260410. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Atropine]] (Muscarinic acetylcholine receptor M3), [[Imidafenacin]] (Muscarinic acetylcholine receptor M3), [[Navafenterol]] (Muscarinic acetylcholine receptor M3), [[Oxybutynin]] (Muscarinic acetylcholine receptor M3), [[Pilocarpine]] (Muscarinic acetylcholine receptor M3), [[Talsaclidine]] (Muscarinic acetylcholine receptor M3)
- **Same ATC subgroup:** [[Atropine]], [[Cyclopentolate]], [[Hyoscine (Scopolamine)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[Cholinergic Load]]
