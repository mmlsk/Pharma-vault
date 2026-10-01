---
type: compound
schema-version: 2
compound-id: sertraline-compound
name: Sertraline (Zoloft)
aliases:
- Sertraline
- Zoloft
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
chembl-id: CHEMBL809
chembl-max-phase: 4
half-life:
  value: 26.0
  value-max: null
  unit: h
  notes: 'Sertraline: 26 hours (32 hours in females, 22 hours in males; range 13–45 hours); Desmethylsertraline: 62–104 hours'
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 40.0
  value-max: 45.0
  notes: ~40–45%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (primarily N-demethylation mainly by CYP2B6; also metabolism by CYP2C19, others)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2B6
  - CYP2C19
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2B6, CYP2C19 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Sertraline
  url: https://en.wikipedia.org/w/index.php?title=Sertraline&oldid=1375702628
  revision: 1375702628
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL809
  pref-name: SERTRALINE
  molecule-type: Small molecule
  first-approval: 1991
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06AB06
  targets: []
  properties:
    full-mwt: 306.24
    mw-freebase: 306.24
    alogp: 5.18
    psa: 12.03
    hba: 1
    hbd: 1
    rtb: 2
    num-ro5-violations: 1
    qed-weighted: 0.81
    full-molformula: C17H17Cl2N
pk-verification:
  source: fda-label
  status: consistent
  set-id: 957ba196-0b9b-4cda-bd15-28357ced8d2f
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=957ba196-0b9b-4cda-bd15-28357ced8d2f
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Sertraline (Zoloft)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sertraline-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Sertraline, Zoloft
- **ChEMBL:** [CHEMBL809](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL809/) · max phase 4 · id via Wikipedia infobox

## Source summary

SSRI widely used for depression, anxiety, PTSD, and OCD; gastrointestinal and sexual adverse effects are common.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1991
- **Flags:** black-box warning
- **ATC N06AB06:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Selective serotonin reuptake inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 306.24 | 5.18 | 12.03 | 1/1 | 1 | C17H17Cl2N |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sertraline*](https://en.wikipedia.org/w/index.php?title=Sertraline&oldid=1375702628) (revision 1375702628, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 26 h | Sertraline: 26 hours (32 hours in females, 22 hours in males; range 13–45 hours); Desmethylsertraline: 62–104 hours |
| Bioavailability | 40–45 % | ~40–45% |
| Metabolism | hepatic | Liver (primarily N-demethylation mainly by CYP2B6; also metabolism by CYP2C19, others) |
| CYP (metabolised by) | CYP2B6, CYP2C19 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Desmethylsertraline; Others (e.g., hydroxylated metabolites, glucuronide conjugates) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 957ba196…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=957ba196-0b9b-4cda-bd15-28357ced8d2f), label version 20260820. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 26, 62, 104, 192, 504)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Alaproclate]], [[Citalopram]], [[Escitalopram (Lexapro)]], [[Fluoxetine (Prozac)]], [[Fluvoxamine]], [[Paroxetine]], [[Zimelidine]]
- **Shared CYP substrate pool:** CYP2B6 (+12 others), CYP2C19 (+43 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
