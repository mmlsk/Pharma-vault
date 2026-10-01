---
type: compound
schema-version: 2
compound-id: tenatoprazole-compound
name: Tenatoprazole
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
chembl-id: CHEMBL1475252
chembl-max-phase: 2
half-life:
  value: 4.8
  value-max: 7.7
  unit: h
  notes: 4.8 to 7.7 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP2C19-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19 (from metabolism field); inhibitor/inducer roles not assessed
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
- chembl-name-match
pk-source:
  type: wikipedia-infobox
  title: Tenatoprazole
  url: https://en.wikipedia.org/w/index.php?title=Tenatoprazole&oldid=1332224692
  revision: 1332224692
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL1475252
  pref-name: TENATOPRAZOLE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 346.41
    mw-freebase: 346.41
    alogp: 2.29
    psa: 95.98
    hba: 6
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.71
    full-molformula: C16H18N4O3S
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Tenatoprazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tenatoprazole-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1475252](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1475252/) · max phase 2 · id via exact ChEMBL name match - confirm

## Source summary

Inhibits the gastric proton pump to suppress acid secretion; long-term use affects micronutrient and mineral absorption; investigational.

## ChEMBL profile

- **Molecule type:** Small molecule
- **Flags:** prodrug

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 346.41 | 2.29 | 95.98 | 1/6 | 0 | C16H18N4O3S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tenatoprazole*](https://en.wikipedia.org/w/index.php?title=Tenatoprazole&oldid=1332224692) (revision 1332224692, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4.8–7.7 h | 4.8 to 7.7 hours |
| Metabolism | hepatic | Hepatic (CYP2C19-mediated) |
| CYP (metabolised by) | CYP2C19 | roles as inhibitor/inducer not assessed |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared CYP substrate pool:** CYP2C19 (+43 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
