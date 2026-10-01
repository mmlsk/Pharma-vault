---
type: compound
schema-version: 2
compound-id: dronedarone-compound
name: Dronedarone
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
chembl-id: CHEMBL184412
chembl-max-phase: 4
half-life:
  value: 13.0
  value-max: 19.0
  unit: h
  notes: 13–19 hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: '>98%'
bioavailability:
  value: 15.0
  value-max: null
  notes: 15% (with a high-fat meal)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (84%), urine (~6%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mainly by CYP3A)
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
  title: Dronedarone
  url: https://en.wikipedia.org/w/index.php?title=Dronedarone&oldid=1330075111
  revision: 1330075111
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL184412
  pref-name: DRONEDARONE
  molecule-type: Small molecule
  first-approval: 2009
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C01BD07
  targets: []
  properties:
    full-mwt: 556.77
    mw-freebase: 556.77
    alogp: 7.05
    psa: 88.85
    hba: 6
    hbd: 1
    rtb: 18
    num-ro5-violations: 2
    qed-weighted: 0.13
    full-molformula: C31H44N2O5S
pk-verification:
  source: fda-label
  status: consistent
  set-id: 3bd4006a-8bad-4909-ac6d-b6d84390155c
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3bd4006a-8bad-4909-ac6d-b6d84390155c
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Dronedarone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dronedarone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL184412](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL184412/) · max phase 4 · id via Wikipedia infobox

## Source summary

Alters cardiac repolarization through potassium-channel effects; QT prolongation and torsades risk vary by agent.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2009
- **Flags:** black-box warning
- **ATC C01BD07:** CARDIOVASCULAR SYSTEM › ANTIARRHYTHMICS, CLASS I AND III › Antiarrhythmics, class III

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 556.77 | 7.05 | 88.85 | 1/6 | 2 | C31H44N2O5S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dronedarone*](https://en.wikipedia.org/w/index.php?title=Dronedarone&oldid=1330075111) (revision 1330075111, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 13–19 h | 13–19 hours |
| Protein binding | 98 % | >98% |
| Bioavailability | 15 % | 15% (with a high-fat meal) |
| Metabolism | hepatic | Liver (mainly by CYP3A) |
| Excretion | mainly non-renal | Feces (84%), urine (~6%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 3bd4006a…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3bd4006a-8bad-4909-ac6d-b6d84390155c), label version 20260127. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 13, 19)
> - protein-binding: consistent (label values: 98)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Amiodarone]], [[Dofetilide]], [[Ibutilide]], [[Tedisamil]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
