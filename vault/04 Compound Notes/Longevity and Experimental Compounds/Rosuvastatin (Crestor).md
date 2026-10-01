---
type: compound
schema-version: 2
compound-id: rosuvastatin-compound
name: Rosuvastatin (Crestor)
aliases:
- Rosuvastatin
- Crestor
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
chembl-id: CHEMBL1496
chembl-max-phase: 4
half-life:
  value: 19.0
  value-max: null
  unit: h
  notes: 19 hours
protein-binding:
  value: 88.0
  value-max: null
  unit: percent
  notes: 88%
bioavailability:
  value: 20.0
  value-max: null
  notes: 20%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (90%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver: CYP2C9 (major) and CYP2C19-mediated; ~10% metabolized'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP2C9
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP2C9 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- evidence-limited
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Rosuvastatin
  url: https://en.wikipedia.org/w/index.php?title=Rosuvastatin&oldid=1365389534
  revision: 1365389534
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1496
  pref-name: ROSUVASTATIN
  molecule-type: Small molecule
  first-approval: 2003
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C10AA07
  targets: []
  properties:
    full-mwt: 481.55
    mw-freebase: 481.55
    alogp: 2.4
    psa: 140.92
    hba: 7
    hbd: 3
    rtb: 10
    num-ro5-violations: 0
    qed-weighted: 0.47
    full-molformula: C22H28FN3O6S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: a370a6c2-b5cd-4aa0-b072-a5a8017a2d5b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a370a6c2-b5cd-4aa0-b072-a5a8017a2d5b
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Rosuvastatin (Crestor)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rosuvastatin-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Rosuvastatin, Crestor
- **ChEMBL:** [CHEMBL1496](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1496/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

High-potency statin, effective at lowering LDL cholesterol and cardiovascular event risk even at low starting LDL levels.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2003
- **ATC C10AA07:** CARDIOVASCULAR SYSTEM › LIPID MODIFYING AGENTS, PLAIN › HMG CoA reductase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 481.55 | 2.4 | 140.92 | 3/7 | 0 | C22H28FN3O6S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rosuvastatin*](https://en.wikipedia.org/w/index.php?title=Rosuvastatin&oldid=1365389534) (revision 1365389534, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 19 h | 19 hours |
| Protein binding | 88 % | 88% |
| Bioavailability | 20 % | 20% |
| Metabolism | hepatic | Liver: CYP2C9 (major) and CYP2C19-mediated; ~10% metabolized |
| CYP (metabolised by) | CYP2C19, CYP2C9 | roles as inhibitor/inducer not assessed |
| Metabolites | - | N-desmethyl rosuvastatin (major; 1/6–1/9 of rosuvastatin activity) |
| Excretion | mainly non-renal | Feces (90%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set a370a6c2…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a370a6c2-b5cd-4aa0-b072-a5a8017a2d5b), label version 20260904. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 19)
> - protein-binding: consistent (label values: 88)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Atorvastatin (Lipitor)]], [[Cerivastatin]], [[Fluvastatin]], [[Lovastatin (Mevacor)]], [[Pitavastatin (Livalo)]], [[Pravastatin (Pravachol)]], [[Simvastatin (Zocor)]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others), CYP2C9 (+40 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
