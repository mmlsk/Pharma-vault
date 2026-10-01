---
type: compound
schema-version: 2
compound-id: etelcalcetide-compound
name: Etelcalcetide
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Calcium sensing receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3545184
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: 5.0
  unit: d
  notes: 3–5 days in dialysis patients
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 60% in dialysate, 7% in urine and faeces
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
- chembl-name-match
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Etelcalcetide
  url: https://en.wikipedia.org/w/index.php?title=Etelcalcetide&oldid=1341010388
  revision: 1341010388
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL3545184
  pref-name: ETELCALCETIDE
  molecule-type: Protein
  first-approval: 2016
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - H05BX04
  targets:
  - id: CHEMBL1878
    name: Extracellular calcium-sensing receptor
    action: AGONIST
  properties:
    full-mwt: 1048.27
    mw-freebase: 1048.27
    full-molformula: C38H73N21O10S2
pk-verification:
  source: fda-label
  status: consistent
  set-id: cd270093-c6a8-4596-a4ab-e6aa0a2c8a0c
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=cd270093-c6a8-4596-a4ab-e6aa0a2c8a0c
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Etelcalcetide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `etelcalcetide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL3545184](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3545184/) · max phase 4 · id via exact ChEMBL name match - confirm

## Source summary

Acts on the PTH axis: intermittent PTH1R agonism is anabolic for bone, while calcimimetics suppress PTH secretion through the calcium-sensing receptor; intravenous calcimimetic.

## Mechanism

Calcium sensing receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 2016
- **Flags:** black-box warning
- **ATC H05BX04:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › ANTI-PARATHYROID AGENTS › Other anti-parathyroid agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1048.27 | - | - | -/- | - | C38H73N21O10S2 |

**Targets (ChEMBL curated mechanisms):**

- [[Extracellular calcium-sensing receptor (CHEMBL1878)|Extracellular calcium-sensing receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Etelcalcetide*](https://en.wikipedia.org/w/index.php?title=Etelcalcetide&oldid=1341010388) (revision 1341010388, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–5 d | 3–5 days in dialysis patients |
| Excretion | - | 60% in dialysate, 7% in urine and faeces |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set cd270093…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=cd270093-c6a8-4596-a4ab-e6aa0a2c8a0c), label version 20260308. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 72, 96)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Evocalcet]] (Extracellular calcium-sensing receptor)
- **Same ATC subgroup:** [[Calcifediol (25-hydroxyvitamin D3)]], [[Cinacalcet]], [[Doxercalciferol]], [[Evocalcet]], [[Paricalcitol (Zemplar)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
