---
type: compound
schema-version: 2
compound-id: tacrolimus-topical-compound
name: Tacrolimus ointment (0.03% / 0.1%, Protopic)
aliases:
- Tacrolimus ointment
- Protopic
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
chembl-id: CHEMBL269732
chembl-max-phase: 4
half-life:
  value: 11.3
  value-max: null
  unit: h
  notes: 11.3 h for transplant patients (range 3.5–40.6 h)
protein-binding:
  value: 98.8
  value-max: null
  unit: percent
  notes: ≥98.8%
bioavailability:
  value: 24.0
  value-max: null
  notes: 24% (5–67%), less after eating food rich in fat
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Mostly fecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver CYP3A4, CYP3A5
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- needs-compound-review
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
- possible-duplicate
pk-source:
  type: wikipedia-infobox
  title: Tacrolimus
  url: https://en.wikipedia.org/w/index.php?title=Tacrolimus&oldid=1359242183
  revision: 1359242183
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL269732
  pref-name: TACROLIMUS ANHYDROUS
  molecule-type: Small molecule
  first-approval: 1994
  black-box-warning: true
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 804.03
    mw-freebase: 804.03
    alogp: 4.64
    psa: 178.36
    hba: 12
    hbd: 3
    rtb: 7
    num-ro5-violations: 2
    qed-weighted: 0.18
    full-molformula: C44H69NO12
pk-verification:
  source: fda-label
  status: consistent
  set-id: 6b89e8a4-9f11-42e3-8e79-fe617e7c461f
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6b89e8a4-9f11-42e3-8e79-fe617e7c461f
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Tacrolimus ointment (0.03% / 0.1%, Protopic)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tacrolimus-topical-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Tacrolimus ointment, Protopic
- **ChEMBL:** [CHEMBL269732](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL269732/) · max phase 4 · id via Wikipedia infobox

## Source summary

Topical calcineurin inhibitor for eczema; the ointment, not the oral transplant immunosuppressant.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1994
- **Flags:** black-box warning

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 804.03 | 4.64 | 178.36 | 3/12 | 2 | C44H69NO12 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tacrolimus*](https://en.wikipedia.org/w/index.php?title=Tacrolimus&oldid=1359242183) (revision 1359242183, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 11.3 h | 11.3 h for transplant patients (range 3.5–40.6 h) |
| Protein binding | 98.8 % | ≥98.8% |
| Bioavailability | 24 % | 24% (5–67%), less after eating food rich in fat |
| Metabolism | hepatic | Liver CYP3A4, CYP3A5 |
| CYP (metabolised by) | CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Excretion | - | Mostly fecal |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 6b89e8a4…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6b89e8a4-9f11-42e3-8e79-fe617e7c461f), label version 20260717. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 4, 8, 10.2, 11.5, 12, 25)
> - protein-binding: consistent (label values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- ⚠️ **Same molecule in ChEMBL (formulation variant or possible duplicate):** [[Tacrolimus]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others), CYP3A5 (+13 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
