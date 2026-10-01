---
type: compound
schema-version: 2
compound-id: azithromycin-compound
name: Azithromycin
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Bacterial 70S ribosome inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL529
chembl-max-phase: 4
half-life:
  value: 68.0
  value-max: null
  unit: h
  notes: 68 h
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 38.0
  value-max: null
  notes: 38% for 250 mg capsules
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Bile duct
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
- needs-compound-review
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Azithromycin
  url: https://en.wikipedia.org/w/index.php?title=Azithromycin&oldid=1367373742
  revision: 1367373742
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL529
  pref-name: AZITHROMYCIN
  molecule-type: Small molecule
  first-approval: 1991
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01FA10
  - S01AA26
  targets:
  - id: CHEMBL2363135
    name: Bacterial 70S ribosome
    action: INHIBITOR
  properties:
    full-mwt: 749.0
    mw-freebase: 749.0
    alogp: 1.9
    psa: 180.08
    hba: 14
    hbd: 5
    rtb: 7
    num-ro5-violations: 2
    qed-weighted: 0.24
    full-molformula: C38H72N2O12
pk-verification:
  source: fda-label
  status: consistent
  set-id: 94e17ae5-0871-67a0-e053-2995a90ae0ae
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=94e17ae5-0871-67a0-e053-2995a90ae0ae
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Azithromycin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `azithromycin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL529](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL529/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits bacterial protein synthesis at the ribosome; spectrum, resistance, and toxicity are agent-specific.

## Mechanism

Bacterial 70S ribosome inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1991
- **ATC J01FA10:** ANTIINFECTIVES FOR SYSTEMIC USE › MACROLIDES, LINCOSAMIDES AND STREPTOGRAMINS › Macrolides
- **ATC S01AA26:** SENSORY ORGANS › ANTIINFECTIVES › Antibiotics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 749.0 | 1.9 | 180.08 | 5/14 | 2 | C38H72N2O12 |

**Targets (ChEMBL curated mechanisms):**

- [[Bacterial 70S ribosome (CHEMBL2363135)|Bacterial 70S ribosome]] - inhibitor · PROTEIN NUCLEIC-ACID COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Azithromycin*](https://en.wikipedia.org/w/index.php?title=Azithromycin&oldid=1367373742) (revision 1367373742, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 68 h | 68 h |
| Bioavailability | 38 % | 38% for 250 mg capsules |
| Metabolism | hepatic | Liver |
| Excretion | mainly non-renal | Bile duct |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 94e17ae5…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=94e17ae5-0871-67a0-e053-2995a90ae0ae), label version 20260909. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 24, 68, 68.9, 71.8, 72)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Chloramphenicol]] (Bacterial 70S ribosome), [[Clarithromycin]] (Bacterial 70S ribosome), [[Eravacycline]] (Bacterial 70S ribosome), [[Erythromycin]] (Bacterial 70S ribosome), [[Linezolid]] (Bacterial 70S ribosome), [[Tedizolid]] (Bacterial 70S ribosome), [[Tetracycline]] (Bacterial 70S ribosome), [[Tigecycline]] (Bacterial 70S ribosome)
- **Same ATC subgroup:** [[Amikacin]], [[Ampicillin]], [[Bacitracin]], [[Chloramphenicol]], [[Clarithromycin]], [[Erythromycin]], [[Polymyxin B]], [[Tetracycline]], [[Tobramycin]], [[Vancomycin]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
