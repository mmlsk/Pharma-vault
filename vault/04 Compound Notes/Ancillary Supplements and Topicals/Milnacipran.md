---
type: compound
schema-version: 2
compound-id: milnacipran-compound
name: Milnacipran
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
chembl-id: CHEMBL252923
chembl-max-phase: null
half-life:
  value: 6.0
  value-max: 8.0
  unit: h
  notes: 6–8 hours
protein-binding:
  value: 13.0
  value-max: null
  unit: percent
  notes: 13%
bioavailability:
  value: 85.0
  value-max: null
  notes: 85%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic
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
  title: Milnacipran
  url: https://en.wikipedia.org/w/index.php?title=Milnacipran&oldid=1368194075
  revision: 1368194075
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL252923
  pref-name: 1R,2S-MILNACIPRAN
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 246.35
    mw-freebase: 246.35
    alogp: 1.77
    psa: 46.33
    hba: 2
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.86
    full-molformula: C15H22N2O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Milnacipran

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `milnacipran-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL252923](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL252923/) · max phase n/a · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits norepinephrine reuptake, often alongside serotonin effects; blood pressure and discontinuation effects require attention.

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 246.35 | 1.77 | 46.33 | 1/2 | 0 | C15H22N2O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Milnacipran*](https://en.wikipedia.org/w/index.php?title=Milnacipran&oldid=1368194075) (revision 1368194075, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6–8 h | 6–8 hours |
| Protein binding | 13 % | 13% |
| Bioavailability | 85 % | 85% |
| Metabolism | hepatic | Hepatic |
| Excretion | mainly urinary | Renal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
