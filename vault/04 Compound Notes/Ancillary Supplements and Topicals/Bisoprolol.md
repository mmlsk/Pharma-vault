---
type: compound
schema-version: 2
compound-id: bisoprolol-compound
name: Bisoprolol
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
chembl-id: CHEMBL645
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: 12.0
  unit: h
  notes: 10–12 hours
protein-binding:
  value: 30.0
  value-max: null
  unit: percent
  notes: 30%
bioavailability:
  value: 90.0
  value-max: null
  notes: '>90%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney, fecal (<2%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 50% liver, CYP2D6, CYP3A4
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Bisoprolol
  url: https://en.wikipedia.org/w/index.php?title=Bisoprolol&oldid=1356470142
  revision: 1356470142
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL645
  pref-name: BISOPROLOL
  molecule-type: Small molecule
  first-approval: 1992
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C07AB07
  targets: []
  properties:
    full-mwt: 325.45
    mw-freebase: 325.45
    alogp: 2.37
    psa: 59.95
    hba: 5
    hbd: 2
    rtb: 12
    num-ro5-violations: 0
    qed-weighted: 0.58
    full-molformula: C18H31NO4
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Bisoprolol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `bisoprolol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL645](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL645/) · max phase 4 · id via Wikipedia infobox

## Source summary

One of the most beta-1 selective blockers available; a heart failure mainstay.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1992
- **ATC C07AB07:** CARDIOVASCULAR SYSTEM › BETA BLOCKING AGENTS › Beta blocking agents, selective

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 325.45 | 2.37 | 59.95 | 2/5 | 0 | C18H31NO4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Bisoprolol*](https://en.wikipedia.org/w/index.php?title=Bisoprolol&oldid=1356470142) (revision 1356470142, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–12 h | 10–12 hours |
| Protein binding | 30 % | 30% |
| Bioavailability | 90 % | >90% |
| Metabolism | hepatic | 50% liver, CYP2D6, CYP3A4 |
| CYP (metabolised by) | CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Kidney, fecal (<2%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Atenolol (Tenormin)]], [[Betaxolol]], [[Celiprolol]], [[Esmolol]], [[Metoprolol]], [[Nebivolol]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
