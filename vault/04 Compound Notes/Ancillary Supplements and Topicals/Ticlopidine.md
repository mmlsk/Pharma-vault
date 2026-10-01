---
type: compound
schema-version: 2
compound-id: ticlopidine-compound
name: Ticlopidine
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
chembl-id: CHEMBL833
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: null
  unit: h
  notes: 12 hours (single dose); 4–5 days (repeated dosing)
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98%
bioavailability:
  value: 80.0
  value-max: null
  notes: '>80%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney and fecal
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
pk-source:
  type: wikipedia-infobox
  title: Ticlopidine
  url: https://en.wikipedia.org/w/index.php?title=Ticlopidine&oldid=1353661243
  revision: 1353661243
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL833
  pref-name: TICLOPIDINE
  molecule-type: Small molecule
  first-approval: 1991
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - B01AC05
  targets: []
  properties:
    full-mwt: 263.79
    mw-freebase: 263.79
    alogp: 3.96
    psa: 3.24
    hba: 2
    hbd: 0
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.79
    full-molformula: C14H14ClNS
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Ticlopidine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ticlopidine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL833](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL833/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits platelet P2Y12 ADP signalling to reduce aggregation, at the cost of bleeding risk; largely superseded over neutropenia.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1991
- **Flags:** black-box warning, prodrug
- **ATC B01AC05:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Platelet aggregation inhibitors excl. heparin

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 263.79 | 3.96 | 3.24 | 0/2 | 0 | C14H14ClNS |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ticlopidine*](https://en.wikipedia.org/w/index.php?title=Ticlopidine&oldid=1353661243) (revision 1353661243, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12 h | 12 hours (single dose); 4–5 days (repeated dosing) |
| Protein binding | 98 % | 98% |
| Bioavailability | 80 % | >80% |
| Metabolism | hepatic | Liver |
| Excretion | - | Kidney and fecal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Abciximab]], [[Aloxiprin]], [[Aspirin]], [[Beraprost]], [[Cangrelor]], [[Cilostazol]], [[Clopidogrel (Plavix)]], [[Dipyridamole]], [[Epoprostenol]], [[Eptifibatide]], [[Prasugrel (Effient)]], [[Selexipag]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
