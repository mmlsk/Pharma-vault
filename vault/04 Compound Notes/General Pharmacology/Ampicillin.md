---
type: compound
schema-version: 2
compound-id: ampicillin-compound
name: Ampicillin
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Bacterial penicillin-binding protein inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL174
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: null
  unit: h
  notes: Approx. 1 hour
protein-binding:
  value: 15.0
  value-max: 25.0
  unit: percent
  notes: 15 to 25%
bioavailability:
  value: 62.0
  value-max: null
  notes: 62% ±17% (parenteral); < 30–55% (oral)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 75 to 85% kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: 12 to 50%
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
- cyp-interactions
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Ampicillin
  url: https://en.wikipedia.org/w/index.php?title=Ampicillin&oldid=1364413005
  revision: 1364413005
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL174
  pref-name: AMPICILLIN
  molecule-type: Small molecule
  first-approval: 1965
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01CA01
  - J01CA51
  - S01AA19
  targets:
  - id: CHEMBL2354204
    name: Bacterial penicillin-binding protein
    action: INHIBITOR
  properties:
    full-mwt: 349.41
    mw-freebase: 349.41
    alogp: 0.32
    psa: 112.73
    hba: 5
    hbd: 3
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.67
    full-molformula: C16H19N3O4S
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 4134cd79-c895-4e6e-b1d5-8e01c38bf2d1
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4134cd79-c895-4e6e-b1d5-8e01c38bf2d1
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Ampicillin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ampicillin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL174](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL174/) · max phase 4 · id via Wikipedia infobox

## Source summary

The parenteral aminopenicillin, retaining unique activity against Listeria and Enterococcus faecalis. Poor oral absorption is why amoxicillin displaced it outside hospital.

## Mechanism

Bacterial penicillin-binding protein inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1965
- **ATC J01CA01:** ANTIINFECTIVES FOR SYSTEMIC USE › BETA-LACTAM ANTIBACTERIALS, PENICILLINS › Penicillins with extended spectrum
- **ATC J01CA51:** ANTIINFECTIVES FOR SYSTEMIC USE › BETA-LACTAM ANTIBACTERIALS, PENICILLINS › Penicillins with extended spectrum
- **ATC S01AA19:** SENSORY ORGANS › ANTIINFECTIVES › Antibiotics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 349.41 | 0.32 | 112.73 | 3/5 | 0 | C16H19N3O4S |

**Targets (ChEMBL curated mechanisms):**

- [[Bacterial penicillin-binding protein (CHEMBL2354204)|Bacterial penicillin-binding protein]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ampicillin*](https://en.wikipedia.org/w/index.php?title=Ampicillin&oldid=1364413005) (revision 1364413005, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1 h | Approx. 1 hour |
| Protein binding | 15–25 % | 15 to 25% |
| Bioavailability | 62 % | 62% ±17% (parenteral); < 30–55% (oral) |
| Metabolism | - | 12 to 50% |
| Metabolites | - | Penicilloic acid |
| Excretion | mainly urinary | 75 to 85% kidney |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 4134cd79…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4134cd79-c895-4e6e-b1d5-8e01c38bf2d1), label version 20260727. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Amoxicillin]] (Bacterial penicillin-binding protein), [[Aztreonam]] (Bacterial penicillin-binding protein), [[Cefiderocol]] (Bacterial penicillin-binding protein), [[Ceftaroline]] (Bacterial penicillin-binding protein), [[Ceftazidime]] (Bacterial penicillin-binding protein), [[Ertapenem]] (Bacterial penicillin-binding protein), [[Meropenem]] (Bacterial penicillin-binding protein)
- **Same ATC subgroup:** [[Amikacin]], [[Amoxicillin]], [[Azithromycin]], [[Bacitracin]], [[Chloramphenicol]], [[Erythromycin]], [[Piperacillin]], [[Polymyxin B]], [[Tetracycline]], [[Tobramycin]], [[Vancomycin]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
