---
type: compound
schema-version: 2
compound-id: tetracycline-compound
name: Tetracycline
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Bacterial 70S ribosome inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1440
chembl-max-phase: 4
half-life:
  value: 8.0
  value-max: 11.0
  unit: h
  notes: 8–11 hours, 57–108 hours (kidney impairment)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 80.0
  value-max: null
  notes: 80%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (>60%), feces
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Not metabolized
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
- identity-formula-match
pk-source:
  type: wikipedia-infobox
  title: Tetracycline
  url: https://en.wikipedia.org/w/index.php?title=Tetracycline&oldid=1372368010
  revision: 1372368010
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1440
  pref-name: TETRACYCLINE
  molecule-type: Small molecule
  first-approval: 1953
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A01AB13
  - D06AA04
  - J01AA07
  - S01AA09
  - S02AA08
  - S03AA02
  targets:
  - id: CHEMBL2363135
    name: Bacterial 70S ribosome
    action: INHIBITOR
  properties:
    full-mwt: 444.44
    mw-freebase: 444.44
    alogp: -0.21
    psa: 181.62
    hba: 9
    hbd: 6
    rtb: 2
    num-ro5-violations: 1
    qed-weighted: 0.34
    full-molformula: C22H24N2O8
  identity-check: formula-match
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Tetracycline

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tetracycline-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1440](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1440/) · max phase 4 · id via Wikipedia infobox · structure check: ≈ same formula, different InChIKey (tautomer/representation)

## Source summary

The parent tetracycline, now largely displaced by doxycycline but still the model for the class and for its non-antibiotic matrix effects.

## Mechanism

Bacterial 70S ribosome inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1953
- **ATC A01AB13:** ALIMENTARY TRACT AND METABOLISM › STOMATOLOGICAL PREPARATIONS › Antiinfectives and antiseptics for local oral treatment
- **ATC D06AA04:** DERMATOLOGICALS › ANTIBIOTICS FOR TOPICAL USE › Tetracycline and derivatives
- **ATC J01AA07:** ANTIINFECTIVES FOR SYSTEMIC USE › TETRACYCLINES › Tetracyclines
- **ATC S01AA09:** SENSORY ORGANS › ANTIINFECTIVES › Antibiotics
- **ATC S02AA08:** SENSORY ORGANS › ANTIINFECTIVES › Antiinfectives
- **ATC S03AA02:** SENSORY ORGANS › ANTIINFECTIVES › Antiinfectives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 444.44 | -0.21 | 181.62 | 6/9 | 1 | C22H24N2O8 |

**Targets (ChEMBL curated mechanisms):**

- [[Bacterial 70S ribosome (CHEMBL2363135)|Bacterial 70S ribosome]] - inhibitor · PROTEIN NUCLEIC-ACID COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tetracycline*](https://en.wikipedia.org/w/index.php?title=Tetracycline&oldid=1372368010) (revision 1372368010, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8–11 h | 8–11 hours, 57–108 hours (kidney impairment) |
| Bioavailability | 80 % | 80% |
| Metabolism | - | Not metabolized |
| Excretion | mainly urinary | Urine (>60%), feces |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Azithromycin]] (Bacterial 70S ribosome), [[Chloramphenicol]] (Bacterial 70S ribosome), [[Clarithromycin]] (Bacterial 70S ribosome), [[Eravacycline]] (Bacterial 70S ribosome), [[Erythromycin]] (Bacterial 70S ribosome), [[Linezolid]] (Bacterial 70S ribosome), [[Tedizolid]] (Bacterial 70S ribosome), [[Tigecycline]] (Bacterial 70S ribosome)
- **Same ATC subgroup:** [[Amikacin]], [[Amphotericin B]], [[Ampicillin]], [[Azithromycin]], [[Bacitracin]], [[Chloramphenicol]], [[Ciprofloxacin]], [[Eravacycline]], [[Erythromycin]], [[Fosfomycin]], [[Metronidazole]], [[Minocycline]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
