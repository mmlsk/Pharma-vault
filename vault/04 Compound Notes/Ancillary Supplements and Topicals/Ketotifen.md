---
type: compound
schema-version: 2
compound-id: ketotifen-compound
name: Ketotifen
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
chembl-id: CHEMBL534
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: 22.0
  unit: h
  notes: 3–22 hours (average in different studies)
protein-binding:
  value: 75.0
  value-max: null
  unit: percent
  notes: 75%
bioavailability:
  value: 50.0
  value-max: null
  notes: ~50%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.01
  notes: 'Urine: >60% (<1% unchanged)'
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
  title: Ketotifen
  url: https://en.wikipedia.org/w/index.php?title=Ketotifen&oldid=1374301102
  revision: 1374301102
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL534
  pref-name: KETOTIFEN
  molecule-type: Small molecule
  first-approval: 1999
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - R06AX17
  - S01GX08
  targets: []
  properties:
    full-mwt: 309.43
    mw-freebase: 309.43
    alogp: 4.01
    psa: 20.31
    hba: 3
    hbd: 0
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.73
    full-molformula: C19H19NOS
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Ketotifen

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ketotifen-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL534](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL534/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

H1 antihistamine and mast-cell stabilizer used for allergic disease; sometimes misused in beta-agonist stacks despite sedation and limited evidence for that purpose.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1999
- **Flags:** prodrug
- **ATC R06AX17:** RESPIRATORY SYSTEM › ANTIHISTAMINES FOR SYSTEMIC USE › Other antihistamines for systemic use
- **ATC S01GX08:** SENSORY ORGANS › DECONGESTANTS AND ANTIALLERGICS › Other antiallergics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 309.43 | 4.01 | 20.31 | 0/3 | 0 | C19H19NOS |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ketotifen*](https://en.wikipedia.org/w/index.php?title=Ketotifen&oldid=1374301102) (revision 1374301102, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–22 h | 3–22 hours (average in different studies) |
| Protein binding | 75 % | 75% |
| Bioavailability | 50 % | ~50% |
| Metabolism | hepatic | Liver |
| Metabolites | - | Norketotifen |
| Excretion | - · fe 0.01 | Urine: >60% (<1% unchanged) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Acrivastine]], [[Alcaftadine]], [[Antazoline]], [[Astemizole]], [[Azatadine]], [[Azelastine]], [[Bilastine]], [[Cetirizine]], [[Cyproheptadine]], [[Desloratadine]], [[Ebastine]], [[Emedastine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
