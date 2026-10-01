---
type: compound
schema-version: 2
compound-id: venlafaxine-compound
name: Venlafaxine (Effexor)
aliases:
- Venlafaxine
- Effexor
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
chembl-id: CHEMBL637
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: null
  unit: h
  notes: 5±2 h (parent compound for immediate release preparations), 15±6 h (parent compound for extended-release preparations), 11±2 h (active metabolite)
protein-binding:
  value: 27.0
  value-max: null
  unit: percent
  notes: 27±2% (parent compound), 30±12% (active metabolite, desvenlafaxine)
bioavailability:
  value: 42.0
  value-max: null
  notes: 42±15%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.05
  notes: Kidney (87%; 5% as unchanged drug; 29% as desvenlafaxine and 53% as other metabolites)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Extensively metabolised by the liver, primarily via CYP2D6
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Venlafaxine
  url: https://en.wikipedia.org/w/index.php?title=Venlafaxine&oldid=1371433947
  revision: 1371433947
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL637
  pref-name: VENLAFAXINE
  molecule-type: Small molecule
  first-approval: 1993
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06AX16
  targets: []
  properties:
    full-mwt: 277.41
    mw-freebase: 277.41
    alogp: 3.04
    psa: 32.7
    hba: 3
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.9
    full-molformula: C17H27NO2
pk-verification:
  source: fda-label
  status: consistent
  set-id: e14bfb9f-3bd2-4419-9294-9c286e79730a
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e14bfb9f-3bd2-4419-9294-9c286e79730a
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Venlafaxine (Effexor)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `venlafaxine-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Venlafaxine, Effexor
- **ChEMBL:** [CHEMBL637](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL637/) · max phase 4 · id via Wikipedia infobox

## Source summary

SNRI with dose-related blood-pressure effects and a prominent discontinuation syndrome.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1993
- **Flags:** black-box warning
- **ATC N06AX16:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Other antidepressants

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 277.41 | 3.04 | 32.7 | 1/3 | 0 | C17H27NO2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Venlafaxine*](https://en.wikipedia.org/w/index.php?title=Venlafaxine&oldid=1371433947) (revision 1371433947, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5 h | 5±2 h (parent compound for immediate release preparations), 15±6 h (parent compound for extended-release preparations), 11±2 h (active metabolite) |
| Protein binding | 27 % | 27±2% (parent compound), 30±12% (active metabolite, desvenlafaxine) |
| Bioavailability | 42 % | 42±15% |
| Metabolism | hepatic | Extensively metabolised by the liver, primarily via CYP2D6 |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | O-desmethylvenlafaxine (ODV), see desvenlafaxine |
| Excretion | - · fe 0.05 | Kidney (87%; 5% as unchanged drug; 29% as desvenlafaxine and 53% as other metabolites) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set e14bfb9f…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e14bfb9f-3bd2-4419-9294-9c286e79730a), label version 20260828. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 5, 11)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Agomelatine (Valdoxan)]], [[Brexanolone]], [[Bupropion (Wellbutrin)]], [[Desvenlafaxine]], [[Duloxetine (Cymbalta)]], [[Esketamine (Spravato)]], [[Levomilnacipran]], [[Minaprine]], [[Mirtazapine]], [[Nefazodone]], [[Tianeptine]], [[Trazodone (Desyrel)]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
