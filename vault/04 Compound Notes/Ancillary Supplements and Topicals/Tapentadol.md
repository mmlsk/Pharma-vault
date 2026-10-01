---
type: compound
schema-version: 2
compound-id: tapentadol-compound
name: Tapentadol
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Norepinephrine transporter inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201776
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: null
  unit: h
  notes: 4 hours
protein-binding:
  value: 20.0
  value-max: null
  unit: percent
  notes: 20%
bioavailability:
  value: 32.0
  value-max: null
  notes: 32% (oral)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine and faeces (1%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (mostly via glucuronidation but also by CYP2C9, CYP2C19, CYP2D6)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP2C9
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP2C9, CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Tapentadol
  url: https://en.wikipedia.org/w/index.php?title=Tapentadol&oldid=1373295674
  revision: 1373295674
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1201776
  pref-name: TAPENTADOL
  molecule-type: Small molecule
  first-approval: 2008
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N02AX06
  targets: []
  properties:
    full-mwt: 221.34
    mw-freebase: 221.34
    alogp: 3.08
    psa: 23.47
    hba: 2
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.83
    full-molformula: C14H23NO
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Tapentadol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tapentadol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1201776](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201776/) · max phase 4 · id via source catalogue

## Source summary

Norepinephrine transporter inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL1201776).

## Mechanism

Norepinephrine transporter inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2008
- **Flags:** black-box warning
- **ATC N02AX06:** NERVOUS SYSTEM › OPIOIDS › Other opioids

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 221.34 | 3.08 | 23.47 | 1/2 | 0 | C14H23NO |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tapentadol*](https://en.wikipedia.org/w/index.php?title=Tapentadol&oldid=1373295674) (revision 1373295674, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4 h | 4 hours |
| Protein binding | 20 % | 20% |
| Bioavailability | 32 % | 32% (oral) |
| Metabolism | hepatic | Hepatic (mostly via glucuronidation but also by CYP2C9, CYP2C19, CYP2D6) |
| CYP (metabolised by) | CYP2C19, CYP2C9, CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | - | Urine and faeces (1%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Dezocine]], [[Oliceridine]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others), CYP2C9 (+40 others), CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
