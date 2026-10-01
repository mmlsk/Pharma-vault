---
type: compound
schema-version: 2
compound-id: valbenazine-compound
name: Valbenazine
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Synaptic vesicular amine transporter inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2364639
chembl-max-phase: 4
half-life:
  value: 15.0
  value-max: 22.0
  unit: h
  notes: 15–22 hrs
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 60% urine, 30% faeces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Activation by hydrolysis, deactivation by CYP3A, CYP2D6
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
- cns-activity
- serotonergic-or-dopaminergic-load
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/neuropsych
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Valbenazine
  url: https://en.wikipedia.org/w/index.php?title=Valbenazine&oldid=1357688439
  revision: 1357688439
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL2364639
  pref-name: VALBENAZINE
  molecule-type: Small molecule
  first-approval: 2017
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N07XX13
  targets:
  - id: CHEMBL1893
    name: Synaptic vesicular amine transporter
    action: INHIBITOR
  properties:
    full-mwt: 418.58
    mw-freebase: 418.58
    alogp: 3.56
    psa: 74.02
    hba: 6
    hbd: 1
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.68
    full-molformula: C24H38N2O4
pk-verification:
  source: fda-label
  status: consistent
  set-id: 4c970164-cafb-421f-9eb5-c226ef0a3417
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4c970164-cafb-421f-9eb5-c226ef0a3417
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Valbenazine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `valbenazine-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL2364639](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2364639/) · max phase 4 · id via Wikipedia infobox

## Source summary

Selective VMAT2 inhibitor developed specifically for tardive dyskinesia, dosed once daily with less off-target activity.

## Mechanism

Synaptic vesicular amine transporter inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2017
- **Flags:** black-box warning, prodrug
- **ATC N07XX13:** NERVOUS SYSTEM › OTHER NERVOUS SYSTEM DRUGS › Other nervous system drugs

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 418.58 | 3.56 | 74.02 | 1/6 | 0 | C24H38N2O4 |

**Targets (ChEMBL curated mechanisms):**

- [[Synaptic vesicular amine transporter (CHEMBL1893)|Synaptic vesicular amine transporter]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Valbenazine*](https://en.wikipedia.org/w/index.php?title=Valbenazine&oldid=1357688439) (revision 1357688439, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 15–22 h | 15–22 hrs |
| Protein binding | 99 % | >99% |
| Metabolism | hepatic | Activation by hydrolysis, deactivation by CYP3A, CYP2D6 |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | [+]-α-Dihydrotetrabenazine (active metabolite) |
| Excretion | - | 60% urine, 30% faeces |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 4c970164…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4c970164-cafb-421f-9eb5-c226ef0a3417), label version 20260417. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 15, 22)
> - protein-binding: consistent (label values: 64, 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Deutetrabenazine]] (Synaptic vesicular amine transporter), [[Dextroamphetamine]] (Synaptic vesicular amine transporter), [[Reserpine]] (Synaptic vesicular amine transporter), [[Tetrabenazine]] (Synaptic vesicular amine transporter)
- **Same ATC subgroup:** [[Amifampridine (3,4-Diaminopyridine)]], [[Deutetrabenazine]], [[Dextromethorphan]], [[Edaravone]], [[Inotersen (Tegsedi)]], [[Patisiran (Onpattro)]], [[Pitolisant (Wakix)]], [[Riluzole (Rilutek)]], [[Tafamidis (Vyndaqel)]], [[Tetrabenazine]], [[Troriluzole]], [[Vutrisiran (Amvuttra)]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
