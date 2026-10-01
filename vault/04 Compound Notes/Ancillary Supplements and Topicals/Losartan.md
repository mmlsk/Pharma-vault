---
type: compound
schema-version: 2
compound-id: losartan-compound
name: Losartan
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
chembl-id: CHEMBL191
chembl-max-phase: 4
half-life:
  value: 1.5
  value-max: 2.0
  unit: h
  notes: 1.5–2 hours
protein-binding:
  value: 99.7
  value-max: null
  unit: percent
  notes: 99.7% (primarily albumin)
bioavailability:
  value: 25.0
  value-max: 35.0
  notes: 25–35%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney 13–25%, bile duct 50–60%
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C9, CYP3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C9
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C9, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Losartan
  url: https://en.wikipedia.org/w/index.php?title=Losartan&oldid=1361505549
  revision: 1361505549
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL191
  pref-name: LOSARTAN
  molecule-type: Small molecule
  first-approval: 1995
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C09CA01
  targets: []
  properties:
    full-mwt: 422.92
    mw-freebase: 422.92
    alogp: 4.27
    psa: 92.51
    hba: 6
    hbd: 2
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.44
    full-molformula: C22H23ClN6O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 9501dfaa-c8cf-46d6-8bec-936c4fd8fe03
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=9501dfaa-c8cf-46d6-8bec-936c4fd8fe03
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: discrepant
---

# Losartan

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `losartan-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL191](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL191/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

The reference ARB, with the largest hypertension outcome dataset in the class (LIFE).

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1995
- **Flags:** black-box warning
- **ATC C09CA01:** CARDIOVASCULAR SYSTEM › ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), PLAIN › Angiotensin II receptor blockers (ARBs), plain

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 422.92 | 4.27 | 92.51 | 2/6 | 0 | C22H23ClN6O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Losartan*](https://en.wikipedia.org/w/index.php?title=Losartan&oldid=1361505549) (revision 1361505549, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.5–2 h | 1.5–2 hours |
| Protein binding | 99.7 % | 99.7% (primarily albumin) |
| Bioavailability | 25–35 % | 25–35% |
| Metabolism | hepatic | Liver (CYP2C9, CYP3A4) |
| CYP (metabolised by) | CYP2C9, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Kidney 13–25%, bile duct 50–60% |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 9501dfaa…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=9501dfaa-c8cf-46d6-8bec-936c4fd8fe03), label version 20260716. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2, 6, 9, 168)
> - protein-binding: discrepant (label values: 0.2, 1.3)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Azilsartan Medoxomil]], [[Candesartan (Atacand)]], [[Eprosartan]], [[Fimasartan]], [[Irbesartan (Avapro)]], [[Olmesartan (Benicar)]], [[Olmesartan Medoxomil]], [[Tasosartan]], [[Telmisartan]], [[Valsartan (Diovan)]]
- **Shared CYP substrate pool:** CYP2C9 (+40 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
