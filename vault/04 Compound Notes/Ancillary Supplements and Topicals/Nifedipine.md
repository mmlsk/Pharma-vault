---
type: compound
schema-version: 2
compound-id: nifedipine-compound
name: Nifedipine
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
chembl-id: CHEMBL193
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: null
  unit: h
  notes: 2 hours
protein-binding:
  value: 92.0
  value-max: 98.0
  unit: percent
  notes: 92-98%
bioavailability:
  value: 45.0
  value-max: 56.0
  notes: 45-56%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Kidneys: >50%, bile duct: 5-15%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Gastrointestinal, Liver
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
  title: Nifedipine
  url: https://en.wikipedia.org/w/index.php?title=Nifedipine&oldid=1364311559
  revision: 1364311559
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL193
  pref-name: NIFEDIPINE
  molecule-type: Small molecule
  first-approval: 1981
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C08CA05
  - C08CA55
  targets:
  - id: CHEMBL2095229
    name: Voltage-gated L-type calcium channel
    action: BLOCKER
  properties:
    full-mwt: 346.34
    mw-freebase: 346.34
    alogp: 2.18
    psa: 107.77
    hba: 7
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.51
    full-molformula: C17H18N2O6
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 4ee466dc-5a4e-4c77-8e94-8b510cafd61b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4ee466dc-5a4e-4c77-8e94-8b510cafd61b
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: consistent
---

# Nifedipine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nifedipine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL193](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL193/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

The prototype dihydropyridine calcium channel blocker; the modern extended-release form is a different drug in practice from the old capsules.

## Mechanism

Voltage-gated L-type calcium channel blocker _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1981
- **ATC C08CA05:** CARDIOVASCULAR SYSTEM › SELECTIVE CALCIUM CHANNEL BLOCKERS WITH MAINLY VASCULAR EFFECTS › Dihydropyridine derivatives
- **ATC C08CA55:** CARDIOVASCULAR SYSTEM › SELECTIVE CALCIUM CHANNEL BLOCKERS WITH MAINLY VASCULAR EFFECTS › Dihydropyridine derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 346.34 | 2.18 | 107.77 | 1/7 | 0 | C17H18N2O6 |

**Targets (ChEMBL curated mechanisms):**

- [[Voltage-gated L-type calcium channel (CHEMBL2095229)|Voltage-gated L-type calcium channel]] - blocker · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nifedipine*](https://en.wikipedia.org/w/index.php?title=Nifedipine&oldid=1364311559) (revision 1364311559, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 2 hours |
| Protein binding | 92–98 % | 92-98% |
| Bioavailability | 45–56 % | 45-56% |
| Metabolism | hepatic | Gastrointestinal, Liver |
| Excretion | mainly urinary | Kidneys: >50%, bile duct: 5-15% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 4ee466dc…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4ee466dc-5a4e-4c77-8e94-8b510cafd61b), label version 20260804. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: consistent (label values: 92, 98)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Cinnarizine]] (Voltage-gated L-type calcium channel), [[Clevidipine]] (Voltage-gated L-type calcium channel), [[Felodipine]] (Voltage-gated L-type calcium channel), [[Nimodipine]] (Voltage-gated L-type calcium channel)
- **Same ATC subgroup:** [[Amlodipine]], [[Clevidipine]], [[Felodipine]], [[Lercanidipine]], [[Nicardipine]], [[Nimodipine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
