---
type: compound
schema-version: 2
compound-id: clevidipine-compound
name: Clevidipine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Voltage-gated L-type calcium channel blocker
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1237132
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: null
  unit: min
  notes: 1 minute
protein-binding:
  value: 99.5
  value-max: null
  unit: percent
  notes: '>99.5%'
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (used only IV)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Urine (63–74%), feces (7–22%)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Blood and tissue esterases
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
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Clevidipine
  url: https://en.wikipedia.org/w/index.php?title=Clevidipine&oldid=1370368883
  revision: 1370368883
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1237132
  pref-name: CLEVIDIPINE
  molecule-type: Small molecule
  first-approval: 2008
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C08CA16
  targets:
  - id: CHEMBL2095229
    name: Voltage-gated L-type calcium channel
    action: BLOCKER
  properties:
    full-mwt: 456.32
    mw-freebase: 456.32
    alogp: 4.25
    psa: 90.93
    hba: 7
    hbd: 1
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.48
    full-molformula: C21H23Cl2NO6
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: a6826aa3-fabb-4ff1-a7a3-cd4c34e3a330
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a6826aa3-fabb-4ff1-a7a3-cd4c34e3a330
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Clevidipine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `clevidipine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1237132](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1237132/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Ultra-short intravenous calcium-channel blocker for closely titrated acute hypertension; not an at-home intervention.

## Mechanism

Voltage-gated L-type calcium channel blocker _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2008
- **ATC C08CA16:** CARDIOVASCULAR SYSTEM › SELECTIVE CALCIUM CHANNEL BLOCKERS WITH MAINLY VASCULAR EFFECTS › Dihydropyridine derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 456.32 | 4.25 | 90.93 | 1/7 | 0 | C21H23Cl2NO6 |

**Targets (ChEMBL curated mechanisms):**

- [[Voltage-gated L-type calcium channel (CHEMBL2095229)|Voltage-gated L-type calcium channel]] - blocker · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Clevidipine*](https://en.wikipedia.org/w/index.php?title=Clevidipine&oldid=1370368883) (revision 1370368883, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1 min | 1 minute |
| Protein binding | 99.5 % | >99.5% |
| Bioavailability | 100 % | 100% (used only IV) |
| Metabolism | - | Blood and tissue esterases |
| Excretion | mainly non-renal | Urine (63–74%), feces (7–22%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set a6826aa3…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a6826aa3-fabb-4ff1-a7a3-cd4c34e3a330), label version 20221109. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.017, 0.25, 9)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Cinnarizine]] (Voltage-gated L-type calcium channel), [[Felodipine]] (Voltage-gated L-type calcium channel), [[Nifedipine]] (Voltage-gated L-type calcium channel), [[Nimodipine]] (Voltage-gated L-type calcium channel)
- **Same ATC subgroup:** [[Amlodipine]], [[Felodipine]], [[Lercanidipine]], [[Nicardipine]], [[Nifedipine]], [[Nimodipine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
