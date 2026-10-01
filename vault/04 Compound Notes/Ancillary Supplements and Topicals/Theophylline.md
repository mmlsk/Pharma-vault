---
type: compound
schema-version: 2
compound-id: theophylline-compound
name: Theophylline
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
chembl-id: CHEMBL190
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 8.0
  unit: h
  notes: 5–8 hours
protein-binding:
  value: 40.0
  value-max: null
  unit: percent
  notes: 40% (primarily to albumin)
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (oral)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Hepatic: CYP1A2, CYP2E1, CYP3A4'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2E1
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2E1, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Theophylline
  url: https://en.wikipedia.org/w/index.php?title=Theophylline&oldid=1367811625
  revision: 1367811625
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL190
  pref-name: THEOPHYLLINE ANHYDROUS
  molecule-type: Protein
  first-approval: 1940
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 180.17
    mw-freebase: 180.17
    alogp: -1.04
    psa: 72.68
    hba: 5
    hbd: 1
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.56
    full-molformula: C7H8N4O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 5e64036a-ee3e-42e7-9e59-881f88a4e298
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5e64036a-ee3e-42e7-9e59-881f88a4e298
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Theophylline

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `theophylline-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL190](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL190/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Methylxanthine acting as a non-selective PDE inhibitor and adenosine-receptor antagonist. Narrow therapeutic window — the reason it lost ground to inhaled therapy.

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 1940

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 180.17 | -1.04 | 72.68 | 1/5 | 0 | C7H8N4O2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Theophylline*](https://en.wikipedia.org/w/index.php?title=Theophylline&oldid=1367811625) (revision 1367811625, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–8 h | 5–8 hours |
| Protein binding | 40 % | 40% (primarily to albumin) |
| Bioavailability | 100 % | 100% (oral) |
| Metabolism | hepatic | Hepatic: CYP1A2, CYP2E1, CYP3A4 |
| CYP (metabolised by) | CYP1A2, CYP2E1, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • 1,3-Dimethyluric acid ; • 1-Methylxanthine; • 3-Methylxanthine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 5e64036a…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5e64036a-ee3e-42e7-9e59-881f88a4e298), label version 20260729. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 4, 5, 7.9, 8, 8.3, 24)
> - protein-binding: consistent (label values: 40)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP2E1 (+8 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
