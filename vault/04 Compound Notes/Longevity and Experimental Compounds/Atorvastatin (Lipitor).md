---
type: compound
schema-version: 2
compound-id: atorvastatin-compound
name: Atorvastatin (Lipitor)
aliases:
- Atorvastatin
- Lipitor
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1487
chembl-max-phase: 4
half-life:
  value: 14.0
  value-max: null
  unit: h
  notes: 14 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 12.0
  value-max: null
  notes: 12%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Bile duct
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4)
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
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Atorvastatin
  url: https://en.wikipedia.org/w/index.php?title=Atorvastatin&oldid=1372019141
  revision: 1372019141
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1487
  pref-name: ATORVASTATIN
  molecule-type: Small molecule
  first-approval: 1996
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C10AA05
  targets: []
  properties:
    full-mwt: 558.65
    mw-freebase: 558.65
    alogp: 6.31
    psa: 111.79
    hba: 5
    hbd: 4
    rtb: 12
    num-ro5-violations: 2
    qed-weighted: 0.16
    full-molformula: C33H35FN2O5
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Atorvastatin (Lipitor)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `atorvastatin-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Atorvastatin, Lipitor
- **ChEMBL:** [CHEMBL1487](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1487/) · max phase 4 · id via Wikipedia infobox

## Source summary

Widely used statin (HMG-CoA reductase inhibitor) for LDL cholesterol reduction -- relevant to steroid users given AAS-associated dyslipidemia risk.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1996
- **ATC C10AA05:** CARDIOVASCULAR SYSTEM › LIPID MODIFYING AGENTS, PLAIN › HMG CoA reductase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 558.65 | 6.31 | 111.79 | 4/5 | 2 | C33H35FN2O5 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Atorvastatin*](https://en.wikipedia.org/w/index.php?title=Atorvastatin&oldid=1372019141) (revision 1372019141, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 14 h | 14 hours |
| Bioavailability | 12 % | 12% |
| Metabolism | hepatic | Liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Bile duct |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Cerivastatin]], [[Fluvastatin]], [[Lovastatin (Mevacor)]], [[Pitavastatin (Livalo)]], [[Pravastatin (Pravachol)]], [[Rosuvastatin (Crestor)]], [[Simvastatin (Zocor)]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
