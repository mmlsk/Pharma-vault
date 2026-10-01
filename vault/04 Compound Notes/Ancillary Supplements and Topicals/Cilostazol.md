---
type: compound
schema-version: 2
compound-id: cilostazol-compound
name: Cilostazol
aliases:
- Pletal
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Phosphodiesterase 3A inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL799
chembl-max-phase: 4
half-life:
  value: 11.0
  value-max: 13.0
  unit: h
  notes: 11–13 hours
protein-binding:
  value: 95.0
  value-max: 98.0
  unit: percent
  notes: 95–98%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4- and CYP2C19-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Cilostazol
  url: https://en.wikipedia.org/w/index.php?title=Cilostazol&oldid=1360305550
  revision: 1360305550
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL799
  pref-name: CILOSTAZOL
  molecule-type: Small molecule
  first-approval: 1999
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - B01AC23
  targets:
  - id: CHEMBL241
    name: cGMP-inhibited 3',5'-cyclic phosphodiesterase 3A
    action: INHIBITOR
  properties:
    full-mwt: 369.47
    mw-freebase: 369.47
    alogp: 3.46
    psa: 81.93
    hba: 6
    hbd: 1
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.76
    full-molformula: C20H27N5O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: ceac1ae3-c343-28ca-c083-b748d21a15e6
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ceac1ae3-c343-28ca-c083-b748d21a15e6
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Cilostazol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cilostazol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Pletal
- **ChEMBL:** [CHEMBL799](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL799/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

PDE3 inhibitor and antiplatelet vasodilator approved for intermittent claudication. It can cause headache, palpitations and tachycardia and is contraindicated in heart failure.

## Mechanism

Phosphodiesterase 3A inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1999
- **Flags:** black-box warning
- **ATC B01AC23:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Platelet aggregation inhibitors excl. heparin

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 369.47 | 3.46 | 81.93 | 1/6 | 0 | C20H27N5O2 |

**Targets (ChEMBL curated mechanisms):**

- [[cGMP-inhibited 3',5'-cyclic phosphodiesterase 3A (CHEMBL241)|cGMP-inhibited 3',5'-cyclic phosphodiesterase 3A]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cilostazol*](https://en.wikipedia.org/w/index.php?title=Cilostazol&oldid=1360305550) (revision 1360305550, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 11–13 h | 11–13 hours |
| Protein binding | 95–98 % | 95–98% |
| Metabolism | hepatic | Liver (CYP3A4- and CYP2C19-mediated) |
| CYP (metabolised by) | CYP2C19, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set ceac1ae3…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ceac1ae3-c343-28ca-c083-b748d21a15e6), label version 20260910. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 11, 13)
> - protein-binding: consistent (label values: 95, 98)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Ibudilast]] (cGMP-inhibited 3',5'-cyclic phosphodiesterase 3A)
- **Same ATC subgroup:** [[Abciximab]], [[Aloxiprin]], [[Aspirin]], [[Beraprost]], [[Cangrelor]], [[Clopidogrel (Plavix)]], [[Dipyridamole]], [[Epoprostenol]], [[Eptifibatide]], [[Prasugrel (Effient)]], [[Selexipag]], [[Ticagrelor (Brilinta)]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
