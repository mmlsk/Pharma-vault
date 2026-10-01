---
type: compound
schema-version: 2
compound-id: nicorandil-compound
name: Nicorandil
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
chembl-id: CHEMBL284906
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: null
  unit: h
  notes: 1 hour
protein-binding:
  value: 25.0
  value-max: null
  unit: percent
  notes: 25%
bioavailability:
  value: 75.0
  value-max: 80.0
  notes: 75 to 80%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (21%)
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
  title: Nicorandil
  url: https://en.wikipedia.org/w/index.php?title=Nicorandil&oldid=1356983302
  revision: 1356983302
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL284906
  pref-name: NICORANDIL
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C01DX16
  targets: []
  properties:
    full-mwt: 211.18
    mw-freebase: 211.18
    alogp: 0.02
    psa: 94.36
    hba: 5
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.42
    full-molformula: C8H9N3O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Nicorandil

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nicorandil-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL284906](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL284906/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Potassium-channel opener and nitrate-like antianginal; hypotension and serious mucosal ulceration are recognized risks.

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC C01DX16:** CARDIOVASCULAR SYSTEM › VASODILATORS USED IN CARDIAC DISEASES › Other vasodilators used in cardiac diseases

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 211.18 | 0.02 | 94.36 | 1/5 | 0 | C8H9N3O4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nicorandil*](https://en.wikipedia.org/w/index.php?title=Nicorandil&oldid=1356983302) (revision 1356983302, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1 h | 1 hour |
| Protein binding | 25 % | 25% |
| Bioavailability | 75–80 % | 75 to 80% |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Kidney (21%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Linsidomine (SIN-1)]], [[Nesiritide]], [[Vericiguat (Verquvo)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
