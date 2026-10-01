---
type: compound
schema-version: 2
compound-id: desmopressin-compound
name: Desmopressin
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
chembl-id: CHEMBL1429
chembl-max-phase: 4
half-life:
  value: 1.5
  value-max: 2.5
  unit: h
  notes: 1.5–2.5 hours
protein-binding:
  value: 50.0
  value-max: null
  unit: percent
  notes: 50%
bioavailability:
  value: 0.08
  value-max: 0.16
  notes: Variable; 0.08–0.16% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
  title: Desmopressin
  url: https://en.wikipedia.org/w/index.php?title=Desmopressin&oldid=1366087514
  revision: 1366087514
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1429
  pref-name: DESMOPRESSIN
  molecule-type: Protein
  first-approval: 1978
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - H01BA02
  targets: []
  properties:
    full-mwt: 1069.24
    mw-freebase: 1069.24
    full-molformula: C46H64N14O12S2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Desmopressin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `desmopressin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1429](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1429/) · max phase 4 · id via Wikipedia infobox

## Source summary

Acts on vasopressin receptors to alter free-water handling or vascular tone; sodium shifts require monitoring; V2-selective agonist.

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 1978
- **Flags:** black-box warning
- **ATC H01BA02:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › POSTERIOR PITUITARY LOBE HORMONES › Vasopressin and analogues

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1069.24 | - | - | -/- | - | C46H64N14O12S2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Desmopressin*](https://en.wikipedia.org/w/index.php?title=Desmopressin&oldid=1366087514) (revision 1366087514, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.5–2.5 h | 1.5–2.5 hours |
| Protein binding | 50 % | 50% |
| Bioavailability | 0.08–0.16 % | Variable; 0.08–0.16% (by mouth) |
| Excretion | mainly urinary | Kidney |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Terlipressin]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
