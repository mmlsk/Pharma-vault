---
type: compound
schema-version: 2
compound-id: aliskiren-compound
name: Aliskiren (Tekturna)
aliases:
- Aliskiren
- Tekturna
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
chembl-id: CHEMBL1639
chembl-max-phase: 4
half-life:
  value: 24.0
  value-max: null
  unit: h
  notes: 24 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 2.5
  value-max: null
  notes: Low (approximately 2.5%)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic, CYP3A4-mediated
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
pk-source:
  type: wikipedia-infobox
  title: Aliskiren
  url: https://en.wikipedia.org/w/index.php?title=Aliskiren&oldid=1328952892
  revision: 1328952892
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1639
  pref-name: ALISKIREN
  molecule-type: Small molecule
  first-approval: 2007
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C09XA02
  targets: []
  properties:
    full-mwt: 551.77
    mw-freebase: 551.77
    alogp: 3.29
    psa: 146.13
    hba: 7
    hbd: 4
    rtb: 19
    num-ro5-violations: 1
    qed-weighted: 0.19
    full-molformula: C30H53N3O6
pk-verification:
  source: fda-label
  status: consistent
  set-id: f3fd2503-25ef-4660-a29a-f62c491e28fb
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f3fd2503-25ef-4660-a29a-f62c491e28fb
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Aliskiren (Tekturna)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `aliskiren-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Aliskiren, Tekturna
- **ChEMBL:** [CHEMBL1639](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1639/) · max phase 4 · id via Wikipedia infobox

## Source summary

The only direct renin inhibitor ever marketed; blocks the renin-angiotensin cascade at its first step.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2007
- **Flags:** black-box warning
- **ATC C09XA02:** CARDIOVASCULAR SYSTEM › OTHER AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM › Renin-inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 551.77 | 3.29 | 146.13 | 4/7 | 1 | C30H53N3O6 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Aliskiren*](https://en.wikipedia.org/w/index.php?title=Aliskiren&oldid=1328952892) (revision 1328952892, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 24 h | 24 hours |
| Bioavailability | 2.5 % | Low (approximately 2.5%) |
| Metabolism | hepatic | Hepatic, CYP3A4-mediated |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Renal |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set f3fd2503…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f3fd2503-25ef-4660-a29a-f62c491e28fb), label version 20221230. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 24)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
