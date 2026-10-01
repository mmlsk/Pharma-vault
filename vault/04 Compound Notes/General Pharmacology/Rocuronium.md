---
type: compound
schema-version: 2
compound-id: rocuronium-compound
name: Rocuronium
aliases: []
cluster: General Pharmacology
group: analgesia
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201244
chembl-max-phase: 4
half-life:
  value: 66.0
  value-max: 80.0
  unit: min
  notes: 66–80 minutes
protein-binding:
  value: 30.0
  value-max: null
  unit: percent
  notes: ~30%
bioavailability:
  value: null
  value-max: null
  notes: NA
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Unchanged, in bile and urine
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: some de-acetylation
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
- sedation-respiratory-depression
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/analgesia
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Rocuronium bromide
  url: https://en.wikipedia.org/w/index.php?title=Rocuronium_bromide&oldid=1329367204
  revision: 1329367204
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201244
  pref-name: ROCURONIUM
  molecule-type: Small molecule
  first-approval: 1994
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 529.79
    mw-freebase: 529.79
    alogp: 4.41
    psa: 59.0
    hba: 5
    hbd: 1
    rtb: 5
    num-ro5-violations: 1
    qed-weighted: 0.32
    full-molformula: C32H53N2O4+
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 58ce3f40-cbb9-db9e-e063-6394a90ae611
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=58ce3f40-cbb9-db9e-e063-6394a90ae611
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Rocuronium

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rocuronium-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1201244](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201244/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Non-depolarising relaxant with an onset fast enough to replace suxamethonium for rapid sequence induction, especially now that sugammadex exists.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1994

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 529.79 | 4.41 | 59.0 | 1/5 | 1 | C32H53N2O4+ |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rocuronium bromide*](https://en.wikipedia.org/w/index.php?title=Rocuronium_bromide&oldid=1329367204) (revision 1329367204, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 66–80 min | 66–80 minutes |
| Protein binding | 30 % | ~30% |
| Bioavailability | - | NA |
| Metabolism | - | some de-acetylation |
| Excretion | - | Unchanged, in bile and urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 58ce3f40…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=58ce3f40-cbb9-db9e-e063-6394a90ae611), label version 20260811. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.017, 0.033, 0.233, 0.3, 0.7, 0.8)
> - protein-binding: consistent (label values: 30)

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
