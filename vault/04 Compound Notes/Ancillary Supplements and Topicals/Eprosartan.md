---
type: compound
schema-version: 2
compound-id: eprosartan-compound
name: Eprosartan
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
chembl-id: CHEMBL813
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 9.0
  unit: h
  notes: 5 to 9 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 15.0
  value-max: null
  notes: 15% (Eprosartan mesylate)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Kidney 10%, bile duct 90%
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: not metabolized
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Eprosartan
  url: https://en.wikipedia.org/w/index.php?title=Eprosartan&oldid=1330816283
  revision: 1330816283
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL813
  pref-name: EPROSARTAN
  molecule-type: Small molecule
  first-approval: 1997
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C09CA02
  targets: []
  properties:
    full-mwt: 424.52
    mw-freebase: 424.52
    alogp: 4.74
    psa: 92.42
    hba: 5
    hbd: 2
    rtb: 10
    num-ro5-violations: 0
    qed-weighted: 0.46
    full-molformula: C23H24N2O4S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Eprosartan

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `eprosartan-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL813](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL813/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Angiotensin II receptor blocker for hypertension with class risks of hyperkalemia and fetal toxicity.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1997
- **Flags:** black-box warning
- **ATC C09CA02:** CARDIOVASCULAR SYSTEM › ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), PLAIN › Angiotensin II receptor blockers (ARBs), plain

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 424.52 | 4.74 | 92.42 | 2/5 | 0 | C23H24N2O4S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Eprosartan*](https://en.wikipedia.org/w/index.php?title=Eprosartan&oldid=1330816283) (revision 1330816283, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–9 h | 5 to 9 hours |
| Bioavailability | 15 % | 15% (Eprosartan mesylate) |
| Metabolism | - | not metabolized |
| Excretion | mainly non-renal | Kidney 10%, bile duct 90% |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Azilsartan Medoxomil]], [[Candesartan (Atacand)]], [[Fimasartan]], [[Irbesartan (Avapro)]], [[Losartan]], [[Olmesartan (Benicar)]], [[Olmesartan Medoxomil]], [[Tasosartan]], [[Telmisartan]], [[Valsartan (Diovan)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
