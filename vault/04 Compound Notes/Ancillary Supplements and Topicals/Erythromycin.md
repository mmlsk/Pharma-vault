---
type: compound
schema-version: 2
compound-id: erythromycin-compound
name: Erythromycin
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
chembl-id: CHEMBL532
chembl-max-phase: 4
half-life:
  value: 1.5
  value-max: null
  unit: h
  notes: 1.5 hours
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: 90%
bioavailability:
  value: 30.0
  value-max: null
  notes: Depends on the ester type; between 30% and 65%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Bile
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (under 5% excreted unchanged)
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
  title: Erythromycin
  url: https://en.wikipedia.org/w/index.php?title=Erythromycin&oldid=1375637318
  revision: 1375637318
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL532
  pref-name: ERYTHROMYCIN
  molecule-type: Small molecule
  first-approval: 1964
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - D10AF02
  - D10AF52
  - J01FA01
  - S01AA17
  targets:
  - id: CHEMBL2363135
    name: Bacterial 70S ribosome
    action: INHIBITOR
  properties:
    full-mwt: 733.94
    mw-freebase: 733.94
    alogp: 1.79
    psa: 193.91
    hba: 14
    hbd: 5
    rtb: 7
    num-ro5-violations: 2
    qed-weighted: 0.24
    full-molformula: C37H67NO13
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 061ddd20-94a6-4e3c-ba84-1ebd8529eea6
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=061ddd20-94a6-4e3c-ba84-1ebd8529eea6
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Erythromycin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `erythromycin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL532](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL532/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits bacterial protein synthesis at the ribosome; spectrum, resistance, and toxicity are agent-specific.

## Mechanism

Bacterial 70S ribosome inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1964
- **ATC D10AF02:** DERMATOLOGICALS › ANTI-ACNE PREPARATIONS FOR TOPICAL USE › Antiinfectives for treatment of acne
- **ATC D10AF52:** DERMATOLOGICALS › ANTI-ACNE PREPARATIONS FOR TOPICAL USE › Antiinfectives for treatment of acne
- **ATC J01FA01:** ANTIINFECTIVES FOR SYSTEMIC USE › MACROLIDES, LINCOSAMIDES AND STREPTOGRAMINS › Macrolides
- **ATC S01AA17:** SENSORY ORGANS › ANTIINFECTIVES › Antibiotics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 733.94 | 1.79 | 193.91 | 5/14 | 2 | C37H67NO13 |

**Targets (ChEMBL curated mechanisms):**

- [[Bacterial 70S ribosome (CHEMBL2363135)|Bacterial 70S ribosome]] - inhibitor · PROTEIN NUCLEIC-ACID COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Erythromycin*](https://en.wikipedia.org/w/index.php?title=Erythromycin&oldid=1375637318) (revision 1375637318, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.5 h | 1.5 hours |
| Protein binding | 90 % | 90% |
| Bioavailability | 30 % | Depends on the ester type; between 30% and 65% |
| Metabolism | hepatic | Liver (under 5% excreted unchanged) |
| Excretion | mainly non-renal | Bile |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 061ddd20…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=061ddd20-94a6-4e3c-ba84-1ebd8529eea6), label version 20260828. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Azithromycin]] (Bacterial 70S ribosome), [[Chloramphenicol]] (Bacterial 70S ribosome), [[Clarithromycin]] (Bacterial 70S ribosome), [[Eravacycline]] (Bacterial 70S ribosome), [[Linezolid]] (Bacterial 70S ribosome), [[Tedizolid]] (Bacterial 70S ribosome), [[Tetracycline]] (Bacterial 70S ribosome), [[Tigecycline]] (Bacterial 70S ribosome)
- **Same ATC subgroup:** [[Amikacin]], [[Ampicillin]], [[Azithromycin]], [[Bacitracin]], [[Chloramphenicol]], [[Clarithromycin]], [[Clindamycin]], [[Clindamycin (topical, 1% solution-gel)|Clindamycin (topical, 1% solution/gel)]], [[Minocycline]], [[Polymyxin B]], [[Tetracycline]], [[Tobramycin]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
