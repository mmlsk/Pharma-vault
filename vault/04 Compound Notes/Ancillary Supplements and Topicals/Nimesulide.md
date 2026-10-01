---
type: compound
schema-version: 2
compound-id: nimesulide-compound
name: Nimesulide
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
chembl-id: CHEMBL56367
chembl-max-phase: 4
half-life:
  value: 1.8
  value-max: 4.7
  unit: h
  notes: 1.8–4.7h
protein-binding:
  value: 97.5
  value-max: null
  unit: percent
  notes: '>97.5%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal (50%), fecal (29%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (via CYP2C9)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C9
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C9 (from metabolism field); inhibitor/inducer roles not assessed
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
pk-source:
  type: wikipedia-infobox
  title: Nimesulide
  url: https://en.wikipedia.org/w/index.php?title=Nimesulide&oldid=1364936004
  revision: 1364936004
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL56367
  pref-name: NIMESULIDE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: true
  atc-codes:
  - M01AX17
  - M02AA26
  targets: []
  properties:
    full-mwt: 308.31
    mw-freebase: 308.31
    alogp: 2.76
    psa: 98.54
    hba: 5
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.68
    full-molformula: C13H12N2O5S
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Nimesulide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nimesulide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL56367](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL56367/) · max phase 4 · id via Wikipedia infobox

## Source summary

COX-2-preferential NSAID withdrawn in several countries over hepatotoxicity.

## ChEMBL profile

- **Molecule type:** Small molecule
- **Flags:** withdrawn
- **ATC M01AX17:** MUSCULO-SKELETAL SYSTEM › ANTIINFLAMMATORY AND ANTIRHEUMATIC PRODUCTS, NON-STEROIDS › Other antiinflammatory and antirheumatic agents, non-steroids
- **ATC M02AA26:** MUSCULO-SKELETAL SYSTEM › TOPICAL PRODUCTS FOR JOINT AND MUSCULAR PAIN › Antiinflammatory preparations, non-steroids for topical use

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 308.31 | 2.76 | 98.54 | 1/5 | 0 | C13H12N2O5S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nimesulide*](https://en.wikipedia.org/w/index.php?title=Nimesulide&oldid=1364936004) (revision 1364936004, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.8–4.7 h | 1.8–4.7h |
| Protein binding | 97.5 % | >97.5% |
| Metabolism | hepatic | Hepatic (via CYP2C9) |
| CYP (metabolised by) | CYP2C9 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Renal (50%), fecal (29%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Aceclofenac]], [[Benzydamine]], [[Dexketoprofen]], [[Diclofenac]], [[Esflurbiprofen]], [[Flurbiprofen]], [[Glucosamine]], [[Ibuprofen]], [[Indomethacin]], [[Ketoprofen]], [[Loxoprofen]], [[Meclofenamic Acid]]
- **Shared CYP substrate pool:** CYP2C9 (+40 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
