---
type: compound
schema-version: 2
compound-id: captopril-compound
name: Captopril (Capoten)
aliases:
- Captopril
- Capoten
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Angiotensin-converting enzyme inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1560
chembl-max-phase: 4
half-life:
  value: 1.9
  value-max: null
  unit: h
  notes: 1.9 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 70.0
  value-max: 75.0
  notes: 70–75%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
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
  title: Captopril
  url: https://en.wikipedia.org/w/index.php?title=Captopril&oldid=1342731597
  revision: 1342731597
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1560
  pref-name: CAPTOPRIL
  molecule-type: Small molecule
  first-approval: 1981
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C09AA01
  targets:
  - id: CHEMBL1808
    name: Angiotensin-converting enzyme
    action: INHIBITOR
  properties:
    full-mwt: 217.29
    mw-freebase: 217.29
    alogp: 0.63
    psa: 57.61
    hba: 3
    hbd: 2
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.68
    full-molformula: C9H15NO3S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 1395ba5b-2fc9-41ff-9c43-e0740d781dee
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1395ba5b-2fc9-41ff-9c43-e0740d781dee
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Captopril (Capoten)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `captopril-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Captopril, Capoten
- **ChEMBL:** [CHEMBL1560](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1560/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

The first orally active ACE inhibitor, a sulfhydryl-containing short-acting agent that opened the whole drug class.

## Mechanism

Angiotensin-converting enzyme inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1981
- **Flags:** black-box warning
- **ATC C09AA01:** CARDIOVASCULAR SYSTEM › ACE INHIBITORS, PLAIN › ACE inhibitors, plain

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 217.29 | 0.63 | 57.61 | 2/3 | 0 | C9H15NO3S |

**Targets (ChEMBL curated mechanisms):**

- [[Angiotensin-converting enzyme (CHEMBL1808)|Angiotensin-converting enzyme]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Captopril*](https://en.wikipedia.org/w/index.php?title=Captopril&oldid=1342731597) (revision 1342731597, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.9 h | 1.9 hours |
| Bioavailability | 70–75 % | 70–75% |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 1395ba5b…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1395ba5b-2fc9-41ff-9c43-e0740d781dee), label version 20260914. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2, 3)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Cilazapril]] (Angiotensin-converting enzyme), [[Delapril]] (Angiotensin-converting enzyme), [[Ilepatril]] (Angiotensin-converting enzyme), [[Imidapril]] (Angiotensin-converting enzyme), [[Ramipril (Altace)]] (Angiotensin-converting enzyme), [[Trandolapril]] (Angiotensin-converting enzyme)
- **Same ATC subgroup:** [[Benazepril (Lotensin)]], [[Cilazapril]], [[Delapril]], [[Enalapril]], [[Fosinopril]], [[Imidapril]], [[Moexipril]], [[Perindopril (Aceon)]], [[Quinapril]], [[Ramipril (Altace)]], [[Spirapril]], [[Temocapril]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
