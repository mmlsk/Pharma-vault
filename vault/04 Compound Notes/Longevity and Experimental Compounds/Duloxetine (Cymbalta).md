---
type: compound
schema-version: 2
compound-id: duloxetine-compound
name: Duloxetine (Cymbalta)
aliases:
- Duloxetine
- Cymbalta
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
chembl-id: CHEMBL1175
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: 12.0
  unit: h
  notes: 10–12 hours
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: ~95%
bioavailability:
  value: 50.0
  value-max: null
  notes: ~50% (32–80%)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 70% in urine, 20% in feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, two P450 isozymes, CYP2D6 and CYP1A2
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Duloxetine
  url: https://en.wikipedia.org/w/index.php?title=Duloxetine&oldid=1371441880
  revision: 1371441880
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1175
  pref-name: DULOXETINE
  molecule-type: Small molecule
  first-approval: 2004
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06AX21
  targets: []
  properties:
    full-mwt: 297.42
    mw-freebase: 297.42
    alogp: 4.63
    psa: 21.26
    hba: 3
    hbd: 1
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.72
    full-molformula: C18H19NOS
pk-verification:
  source: fda-label
  status: consistent
  set-id: 79bfd6be-a1ff-4786-b4e2-abbd0a3e3932
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=79bfd6be-a1ff-4786-b4e2-abbd0a3e3932
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Duloxetine (Cymbalta)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `duloxetine-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Duloxetine, Cymbalta
- **ChEMBL:** [CHEMBL1175](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1175/) · max phase 4 · id via Wikipedia infobox

## Source summary

SNRI used for depression, anxiety, and neuropathic pain; withdrawal, liver, blood-pressure, and sexual effects matter.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2004
- **Flags:** black-box warning
- **ATC N06AX21:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Other antidepressants

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 297.42 | 4.63 | 21.26 | 1/3 | 0 | C18H19NOS |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Duloxetine*](https://en.wikipedia.org/w/index.php?title=Duloxetine&oldid=1371441880) (revision 1371441880, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–12 h | 10–12 hours |
| Protein binding | 95 % | ~95% |
| Bioavailability | 50 % | ~50% (32–80%) |
| Metabolism | hepatic | Liver, two P450 isozymes, CYP2D6 and CYP1A2 |
| CYP (metabolised by) | CYP1A2, CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | - | 70% in urine, 20% in feces |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 79bfd6be…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=79bfd6be-a1ff-4786-b4e2-abbd0a3e3932), label version 20260909. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 8, 12, 17)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Agomelatine (Valdoxan)]], [[Brexanolone]], [[Bupropion (Wellbutrin)]], [[Desvenlafaxine]], [[Esketamine (Spravato)]], [[Levomilnacipran]], [[Minaprine]], [[Mirtazapine]], [[Nefazodone]], [[Tianeptine]], [[Trazodone (Desyrel)]], [[Venlafaxine (Effexor)]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
