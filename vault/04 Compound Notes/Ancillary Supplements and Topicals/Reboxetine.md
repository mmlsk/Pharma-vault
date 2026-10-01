---
type: compound
schema-version: 2
compound-id: reboxetine-compound
name: Reboxetine
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
chembl-id: CHEMBL383921
chembl-max-phase: null
half-life:
  value: 12.0
  value-max: 12.5
  unit: h
  notes: 12–12.5 hours
protein-binding:
  value: 97.0
  value-max: 98.0
  unit: percent
  notes: 97–98%
bioavailability:
  value: 94.0
  value-max: null
  notes: ≥94%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.1
  notes: Urine (78%; 9–10% unchanged)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4-mediated)
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
  title: Reboxetine
  url: https://en.wikipedia.org/w/index.php?title=Reboxetine&oldid=1356037234
  revision: 1356037234
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL383921
  pref-name: null
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 313.4
    mw-freebase: 313.4
    alogp: 3.19
    psa: 39.72
    hba: 4
    hbd: 1
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.89
    full-molformula: C19H23NO3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Reboxetine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `reboxetine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL383921](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL383921/) · max phase n/a · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits norepinephrine reuptake, often alongside serotonin effects; blood pressure and discontinuation effects require attention.

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 313.4 | 3.19 | 39.72 | 1/4 | 0 | C19H23NO3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Reboxetine*](https://en.wikipedia.org/w/index.php?title=Reboxetine&oldid=1356037234) (revision 1356037234, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12–12.5 h | 12–12.5 hours |
| Protein binding | 97–98 % | 97–98% |
| Bioavailability | 94 % | ≥94% |
| Metabolism | hepatic | Liver (CYP3A4-mediated) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - · fe 0.1 | Urine (78%; 9–10% unchanged) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
