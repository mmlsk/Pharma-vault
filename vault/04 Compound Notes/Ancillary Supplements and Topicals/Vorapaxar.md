---
type: compound
schema-version: 2
compound-id: vorapaxar-compound
name: Vorapaxar
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
chembl-id: CHEMBL493982
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 13.0
  unit: d
  notes: 5–13 days
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: ≥99%
bioavailability:
  value: 100.0
  value-max: null
  notes: ~100%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: feces (58%), urine (25%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: hepatic (CYP3A4 and CYP2J2)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2J2
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2J2, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Vorapaxar
  url: https://en.wikipedia.org/w/index.php?title=Vorapaxar&oldid=1328756248
  revision: 1328756248
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL493982
  pref-name: VORAPAXAR
  molecule-type: Small molecule
  first-approval: 2014
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - B01AC26
  targets: []
  properties:
    full-mwt: 492.59
    mw-freebase: 492.59
    alogp: 5.63
    psa: 77.52
    hba: 5
    hbd: 1
    rtb: 5
    num-ro5-violations: 1
    qed-weighted: 0.55
    full-molformula: C29H33FN2O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Vorapaxar

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `vorapaxar-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL493982](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL493982/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

PAR-1 antiplatelet drug with a very long effect; contraindicated after stroke because of intracranial bleeding risk.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2014
- **Flags:** black-box warning
- **ATC B01AC26:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Platelet aggregation inhibitors excl. heparin

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 492.59 | 5.63 | 77.52 | 1/5 | 1 | C29H33FN2O4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Vorapaxar*](https://en.wikipedia.org/w/index.php?title=Vorapaxar&oldid=1328756248) (revision 1328756248, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–13 d | 5–13 days |
| Protein binding | 99 % | ≥99% |
| Bioavailability | 100 % | ~100% |
| Metabolism | hepatic | hepatic (CYP3A4 and CYP2J2) |
| CYP (metabolised by) | CYP2J2, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | feces (58%), urine (25%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Abciximab]], [[Aloxiprin]], [[Aspirin]], [[Beraprost]], [[Cangrelor]], [[Cilostazol]], [[Clopidogrel (Plavix)]], [[Dipyridamole]], [[Epoprostenol]], [[Eptifibatide]], [[Prasugrel (Effient)]], [[Selexipag]]
- **Shared CYP substrate pool:** CYP2J2 (+3 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
