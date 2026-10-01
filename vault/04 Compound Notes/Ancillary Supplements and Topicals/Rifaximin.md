---
type: compound
schema-version: 2
compound-id: rifaximin-compound
name: Rifaximin
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Bacterial DNA-directed RNA polymerase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1617
chembl-max-phase: 4
half-life:
  value: 6.0
  value-max: null
  unit: h
  notes: 6 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 0.4
  value-max: null
  notes: < 0.4%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Fecal (97%)
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
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Rifaximin
  url: https://en.wikipedia.org/w/index.php?title=Rifaximin&oldid=1368063117
  revision: 1368063117
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1617
  pref-name: RIFAXIMIN
  molecule-type: Small molecule
  first-approval: 2004
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A07AA11
  - D06AX11
  targets:
  - id: CHEMBL2364672
    name: Bacterial DNA-directed RNA polymerase
    action: INHIBITOR
  properties:
    full-mwt: 785.89
    mw-freebase: 785.89
    alogp: 6.16
    psa: 198.38
    hba: 13
    hbd: 5
    rtb: 2
    num-ro5-violations: 3
    qed-weighted: 0.11
    full-molformula: C43H51N3O11
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 7afafa63-3236-4212-9589-045db6b01c0b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7afafa63-3236-4212-9589-045db6b01c0b
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Rifaximin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rifaximin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1617](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1617/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Minimally absorbed antibiotic used to prevent recurrent hepatic encephalopathy; antimicrobial stewardship still matters.

## Mechanism

Bacterial DNA-directed RNA polymerase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2004
- **ATC A07AA11:** ALIMENTARY TRACT AND METABOLISM › INTESTINAL ANTIINFECTIVES › Antibiotics
- **ATC D06AX11:** DERMATOLOGICALS › ANTIBIOTICS FOR TOPICAL USE › Other antibiotics for topical use

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 785.89 | 6.16 | 198.38 | 5/13 | 3 | C43H51N3O11 |

**Targets (ChEMBL curated mechanisms):**

- [[Bacterial DNA-directed RNA polymerase (CHEMBL2364672)|Bacterial DNA-directed RNA polymerase]] - inhibitor · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rifaximin*](https://en.wikipedia.org/w/index.php?title=Rifaximin&oldid=1368063117) (revision 1368063117, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6 h | 6 hours |
| Bioavailability | 0.4 % | < 0.4% |
| Metabolism | hepatic | Liver |
| Excretion | mainly non-renal | Fecal (97%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 7afafa63…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7afafa63-3236-4212-9589-045db6b01c0b), label version 20250827. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.5, 0.75, 1.5, 5.6, 6)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Rifabutin]] (Bacterial DNA-directed RNA polymerase), [[Rifampicin]] (Bacterial DNA-directed RNA polymerase)
- **Same ATC subgroup:** [[Amikacin]], [[Amphotericin B]], [[Bacitracin]], [[Chloramphenicol]], [[Fidaxomicin]], [[Mupirocin]], [[Paromomycin]], [[Polymyxin B]], [[Vancomycin]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
