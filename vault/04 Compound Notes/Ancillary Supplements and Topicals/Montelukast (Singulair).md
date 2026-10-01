---
type: compound
schema-version: 2
compound-id: montelukast-compound
name: Montelukast (Singulair)
aliases:
- Montelukast
- Singulair
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
chembl-id: CHEMBL787
chembl-max-phase: 4
half-life:
  value: 2.7
  value-max: 5.5
  unit: h
  notes: 2.7–5.5 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99%
bioavailability:
  value: 63.0
  value-max: 73.0
  notes: 63–73%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Bile duct
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C8-major, CYP3A4 and CYP2C9-minor)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C8
  - CYP2C9
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C8, CYP2C9, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Montelukast
  url: https://en.wikipedia.org/w/index.php?title=Montelukast&oldid=1363159792
  revision: 1363159792
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL787
  pref-name: MONTELUKAST
  molecule-type: Small molecule
  first-approval: 1998
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - R03DC03
  - R03DC53
  targets: []
  properties:
    full-mwt: 586.2
    mw-freebase: 586.2
    alogp: 8.95
    psa: 70.42
    hba: 4
    hbd: 2
    rtb: 12
    num-ro5-violations: 2
    qed-weighted: 0.17
    full-molformula: C35H36ClNO3S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 583a9499-97f0-2ebf-e063-6394a90a35af
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=583a9499-97f0-2ebf-e063-6394a90a35af
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Montelukast (Singulair)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `montelukast-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Montelukast, Singulair
- **ChEMBL:** [CHEMBL787](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL787/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Leukotriene-receptor antagonist for asthma and allergic rhinitis carrying a boxed warning for serious neuropsychiatric effects.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1998
- **Flags:** black-box warning
- **ATC R03DC03:** RESPIRATORY SYSTEM › OTHER SYSTEMIC DRUGS FOR OBSTRUCTIVE AIRWAY DISEASES › Leukotriene receptor antagonists
- **ATC R03DC53:** RESPIRATORY SYSTEM › OTHER SYSTEMIC DRUGS FOR OBSTRUCTIVE AIRWAY DISEASES › Leukotriene receptor antagonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 586.2 | 8.95 | 70.42 | 2/4 | 2 | C35H36ClNO3S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Montelukast*](https://en.wikipedia.org/w/index.php?title=Montelukast&oldid=1363159792) (revision 1363159792, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.7–5.5 h | 2.7–5.5 hours |
| Protein binding | 99 % | 99% |
| Bioavailability | 63–73 % | 63–73% |
| Metabolism | hepatic | Liver (CYP2C8-major, CYP3A4 and CYP2C9-minor) |
| CYP (metabolised by) | CYP2C8, CYP2C9, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Bile duct |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 583a9499…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=583a9499-97f0-2ebf-e063-6394a90a35af), label version 20260804. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2.7, 5.5, 7.4)
> - protein-binding: consistent (label values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Ibudilast]], [[Pranlukast]], [[Zafirlukast]]
- **Shared CYP substrate pool:** CYP2C8 (+15 others), CYP2C9 (+40 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
