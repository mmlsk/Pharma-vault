---
type: compound
schema-version: 2
compound-id: baclofen-compound
name: Baclofen
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: GABA-B receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL701
chembl-max-phase: 4
half-life:
  value: 2.5
  value-max: 7.0
  unit: h
  notes: 2.5–7 hours
protein-binding:
  value: 30.0
  value-max: null
  unit: percent
  notes: 30%
bioavailability:
  value: null
  value-max: null
  notes: Well-absorbed
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (70–80%)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: 85% excreted in urine/faeces unchanged. 15% metabolised by deamination
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
- group/ancillary
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Baclofen
  url: https://en.wikipedia.org/w/index.php?title=Baclofen&oldid=1374816189
  revision: 1374816189
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL701
  pref-name: BACLOFEN
  molecule-type: Small molecule
  first-approval: 1977
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - M03BX01
  targets:
  - id: CHEMBL2111463
    name: GABA-B receptor
    action: AGONIST
  properties:
    full-mwt: 213.66
    mw-freebase: 213.66
    alogp: 1.86
    psa: 63.32
    hba: 2
    hbd: 2
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.8
    full-molformula: C10H12ClNO2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: ab3760cd-a84b-49ba-88e3-b9ea73c55f82
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ab3760cd-a84b-49ba-88e3-b9ea73c55f82
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Baclofen

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `baclofen-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL701](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL701/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

GABA-B agonist for spasticity; abrupt withdrawal from intrathecal delivery is life-threatening.

## Mechanism

GABA-B receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1977
- **Flags:** black-box warning
- **ATC M03BX01:** MUSCULO-SKELETAL SYSTEM › MUSCLE RELAXANTS, CENTRALLY ACTING AGENTS › Other centrally acting agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 213.66 | 1.86 | 63.32 | 2/2 | 0 | C10H12ClNO2 |

**Targets (ChEMBL curated mechanisms):**

- [[GABA-B receptor (CHEMBL2111463)|GABA-B receptor]] - agonist · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Baclofen*](https://en.wikipedia.org/w/index.php?title=Baclofen&oldid=1374816189) (revision 1374816189, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5–7 h | 2.5–7 hours |
| Protein binding | 30 % | 30% |
| Bioavailability | - | Well-absorbed |
| Metabolism | - | 85% excreted in urine/faeces unchanged. 15% metabolised by deamination |
| Metabolites | - | β-(p-chlorophenyl)-4-hydroxybutyric acid (γ-hydroxybaclofen) |
| Excretion | mainly urinary | Kidney (70–80%) |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set ab3760cd…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ab3760cd-a84b-49ba-88e3-b9ea73c55f82), label version 20260909. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Tetrazepam]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
