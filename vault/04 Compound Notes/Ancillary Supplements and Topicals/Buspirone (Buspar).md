---
type: compound
schema-version: 2
compound-id: buspirone-compound
name: Buspirone (Buspar)
aliases:
- Buspirone
- Buspar
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
chembl-id: CHEMBL49
chembl-max-phase: 4
half-life:
  value: 2.5
  value-max: null
  unit: h
  notes: 2.5 hours
protein-binding:
  value: 86.0
  value-max: 95.0
  unit: percent
  notes: 86–95%
bioavailability:
  value: 3.9
  value-max: null
  notes: 3.9%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 'Urine: 29–63%; Feces: 18–38%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (via CYP3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- possible-duplicate
pk-source:
  type: wikipedia-infobox
  title: Buspirone
  url: https://en.wikipedia.org/w/index.php?title=Buspirone&oldid=1365708327
  revision: 1365708327
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL49
  pref-name: BUSPIRONE
  molecule-type: Small molecule
  first-approval: 1986
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N05BE01
  targets: []
  properties:
    full-mwt: 385.51
    mw-freebase: 385.51
    alogp: 2.09
    psa: 69.64
    hba: 6
    hbd: 0
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.55
    full-molformula: C21H31N5O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 18e90d65-4a3a-864e-e063-6294a90ae99d
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=18e90d65-4a3a-864e-e063-6294a90ae99d
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Buspirone (Buspar)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `buspirone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Buspirone, Buspar
- **ChEMBL:** [CHEMBL49](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL49/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Azapirone 5-HT1A partial agonist for generalised anxiety; non-sedating, non-addictive, and slow to take effect.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1986
- **ATC N05BE01:** NERVOUS SYSTEM › ANXIOLYTICS › Azaspirodecanedione derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 385.51 | 2.09 | 69.64 | 0/6 | 0 | C21H31N5O2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Buspirone*](https://en.wikipedia.org/w/index.php?title=Buspirone&oldid=1365708327) (revision 1365708327, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5 h | 2.5 hours |
| Protein binding | 86–95 % | 86–95% |
| Bioavailability | 3.9 % | 3.9% |
| Metabolism | hepatic | Liver (via CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | 5-OH-Buspirone;; 6-OH-Buspirone;; 8-OH-Buspirone;; 1-PP |
| Excretion | - | Urine: 29–63%; Feces: 18–38% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 18e90d65…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=18e90d65-4a3a-864e-e063-6294a90ae99d), label version 20240515. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2, 3)
> - protein-binding: consistent (label values: 86)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- ⚠️ **Same molecule in ChEMBL (formulation variant or possible duplicate):** [[Buspirone]]
- **Same ATC subgroup:** [[Buspirone]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
