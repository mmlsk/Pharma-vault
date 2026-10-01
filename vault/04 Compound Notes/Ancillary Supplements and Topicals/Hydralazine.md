---
type: compound
schema-version: 2
compound-id: hydralazine-compound
name: Hydralazine
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
chembl-id: CHEMBL276832
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 8.0
  unit: h
  notes: 2–8 hours, 7–16 hours (renal impairment)
protein-binding:
  value: 85.0
  value-max: 90.0
  unit: percent
  notes: 85–90%
bioavailability:
  value: 26.0
  value-max: 50.0
  notes: 26–50%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine
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
  title: Hydralazine
  url: https://en.wikipedia.org/w/index.php?title=Hydralazine&oldid=1365125817
  revision: 1365125817
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL276832
  pref-name: HYDRALAZINE
  molecule-type: Small molecule
  first-approval: 1953
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C02DB02
  targets: []
  properties:
    full-mwt: 160.18
    mw-freebase: 160.18
    alogp: 0.92
    psa: 63.83
    hba: 4
    hbd: 2
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.48
    full-molformula: C8H8N4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Hydralazine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `hydralazine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL276832](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL276832/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Direct arterial vasodilator; causes reflex tachycardia and, at higher doses, a drug-induced lupus.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1953
- **ATC C02DB02:** CARDIOVASCULAR SYSTEM › ARTERIOLAR SMOOTH MUSCLE, AGENTS ACTING ON › Hydrazinophthalazine derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 160.18 | 0.92 | 63.83 | 2/4 | 0 | C8H8N4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Hydralazine*](https://en.wikipedia.org/w/index.php?title=Hydralazine&oldid=1365125817) (revision 1365125817, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–8 h | 2–8 hours, 7–16 hours (renal impairment) |
| Protein binding | 85–90 % | 85–90% |
| Bioavailability | 26–50 % | 26–50% |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Urine |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
