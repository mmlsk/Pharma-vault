---
type: compound
schema-version: 2
compound-id: triamterene-compound
name: Triamterene
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Amiloride-sensitive sodium channel, ENaC blocker
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL585
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: 2.0
  unit: h
  notes: 1-2 hours, active metabolite 3 hours
protein-binding:
  value: 67.0
  value-max: null
  unit: percent
  notes: 67%
bioavailability:
  value: 30.0
  value-max: 70.0
  notes: 30-70%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.21
  notes: renal <50%, 21% unchanged
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: hydroxylation to para-hydroxytriamterene
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
  title: Triamterene
  url: https://en.wikipedia.org/w/index.php?title=Triamterene&oldid=1352633925
  revision: 1352633925
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL585
  pref-name: TRIAMTERENE
  molecule-type: Small molecule
  first-approval: 1964
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C03DB02
  targets:
  - id: CHEMBL2107836
    name: Amiloride-sensitive sodium channel, ENaC
    action: BLOCKER
  properties:
    full-mwt: 253.27
    mw-freebase: 253.27
    alogp: 0.83
    psa: 129.62
    hba: 7
    hbd: 3
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.59
    full-molformula: C12H11N7
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: ebb177c0-d45d-4443-a85a-e76bd9931a42
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ebb177c0-d45d-4443-a85a-e76bd9931a42
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Triamterene

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `triamterene-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL585](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL585/) · max phase 4 · id via Wikipedia infobox

## Source summary

Potassium-sparing ENaC blocker used with thiazides; hyperkalemia is the central interaction risk.

## Mechanism

Amiloride-sensitive sodium channel, ENaC blocker _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1964
- **Flags:** black-box warning
- **ATC C03DB02:** CARDIOVASCULAR SYSTEM › ALDOSTERONE ANTAGONISTS AND OTHER POTASSIUM-SPARING AGENTS › Other potassium-sparing agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 253.27 | 0.83 | 129.62 | 3/7 | 0 | C12H11N7 |

**Targets (ChEMBL curated mechanisms):**

- [[Amiloride-sensitive sodium channel, ENaC (CHEMBL2107836)|Amiloride-sensitive sodium channel, ENaC]] - blocker · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Triamterene*](https://en.wikipedia.org/w/index.php?title=Triamterene&oldid=1352633925) (revision 1352633925, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–2 h | 1-2 hours, active metabolite 3 hours |
| Protein binding | 67 % | 67% |
| Bioavailability | 30–70 % | 30-70% |
| Metabolism | hepatic | hydroxylation to para-hydroxytriamterene |
| Excretion | mainly urinary · fe 0.21 | renal <50%, 21% unchanged |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set ebb177c0…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ebb177c0-d45d-4443-a85a-e76bd9931a42), label version 20241205. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Amiloride]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
