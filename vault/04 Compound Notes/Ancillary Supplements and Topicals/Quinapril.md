---
type: compound
schema-version: 2
compound-id: quinapril-compound
name: Quinapril
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1592
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: null
  unit: h
  notes: 2 hours
protein-binding:
  value: 97.0
  value-max: null
  unit: percent
  notes: 97%
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
  title: Quinapril
  url: https://en.wikipedia.org/w/index.php?title=Quinapril&oldid=1360853596
  revision: 1360853596
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1592
  pref-name: QUINAPRIL
  molecule-type: Small molecule
  first-approval: 1991
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C09AA06
  targets: []
  properties:
    full-mwt: 438.52
    mw-freebase: 438.52
    alogp: 2.57
    psa: 95.94
    hba: 5
    hbd: 2
    rtb: 9
    num-ro5-violations: 0
    qed-weighted: 0.58
    full-molformula: C25H30N2O5
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: da562e3b-4411-e750-e053-2a95a90ad7e5
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=da562e3b-4411-e750-e053-2a95a90ad7e5
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Quinapril

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `quinapril-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1592](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1592/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

ACE inhibitor formerly used for hypertension and heart failure; monitor potassium and renal function.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1991
- **Flags:** black-box warning, prodrug
- **ATC C09AA06:** CARDIOVASCULAR SYSTEM › ACE INHIBITORS, PLAIN › ACE inhibitors, plain

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 438.52 | 2.57 | 95.94 | 2/5 | 0 | C25H30N2O5 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Quinapril*](https://en.wikipedia.org/w/index.php?title=Quinapril&oldid=1360853596) (revision 1360853596, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 2 hours |
| Protein binding | 97 % | 97% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set da562e3b…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=da562e3b-4411-e750-e053-2a95a90ad7e5), label version 20260101. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2, 3, 25)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Benazepril (Lotensin)]], [[Captopril (Capoten)]], [[Cilazapril]], [[Delapril]], [[Enalapril]], [[Fosinopril]], [[Imidapril]], [[Moexipril]], [[Perindopril (Aceon)]], [[Ramipril (Altace)]], [[Spirapril]], [[Temocapril]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
