---
type: compound
schema-version: 2
compound-id: naltrexone-compound
name: Naltrexone
aliases: []
cluster: Metabolic and Incretin Agents
group: glp1
class: null
subclass: null
mechanism: Opioid receptors; mu/kappa/delta antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL19019
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: null
  unit: h
  notes: 'Oral (Revia):; • Naltrexone: 4 hours; • 6β-Naltrexol: 13 hours; Oral (Contrave):; • Naltrexone: 5 hours; IM (Vivitrol):; • Naltrexone: 5–10 days; • 6β-Naltrexol: 5–10 days'
protein-binding:
  value: 20.0
  value-max: null
  unit: percent
  notes: 20%
bioavailability:
  value: 5.0
  value-max: 60.0
  notes: 5–60%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (non-CYP450)
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
- glucose-metabolism
- gastrointestinal
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/glp1
- stub
- pk-auto
- chembl-profile
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Naltrexone
  url: https://en.wikipedia.org/w/index.php?title=Naltrexone&oldid=1370715111
  revision: 1370715111
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL19019
  pref-name: NALTREXONE
  molecule-type: Small molecule
  first-approval: 1984
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N07BB04
  targets:
  - id: CHEMBL2095181
    name: Opioid receptors; mu/kappa/delta
    action: ANTAGONIST
  properties:
    full-mwt: 341.41
    mw-freebase: 341.41
    alogp: 1.53
    psa: 70.0
    hba: 5
    hbd: 2
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.85
    full-molformula: C20H23NO4
pk-verification:
  source: fda-label
  status: discrepant
  set-id: cd11c435-b0f0-4bb9-ae78-60f101f3703f
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=cd11c435-b0f0-4bb9-ae78-60f101f3703f
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
---

# Naltrexone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `naltrexone-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **ChEMBL:** [CHEMBL19019](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL19019/) · max phase 4 · id via Wikipedia infobox

## Source summary

Opioid-receptor antagonist used for alcohol and opioid-use disorders and paired with bupropion for weight management; blocks opioid analgesia.

## Mechanism

Opioid receptors; mu/kappa/delta antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1984
- **Flags:** black-box warning
- **ATC N07BB04:** NERVOUS SYSTEM › DRUGS USED IN ADDICTIVE DISORDERS › Drugs used in alcohol dependence

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 341.41 | 1.53 | 70.0 | 2/5 | 0 | C20H23NO4 |

**Targets (ChEMBL curated mechanisms):**

- [[Opioid receptors; mu-kappa-delta (CHEMBL2095181)|Opioid receptors; mu/kappa/delta]] - antagonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Naltrexone*](https://en.wikipedia.org/w/index.php?title=Naltrexone&oldid=1370715111) (revision 1370715111, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4 h | Oral (Revia):; • Naltrexone: 4 hours; • 6β-Naltrexol: 13 hours; Oral (Contrave):; • Naltrexone: 5 hours; IM (Vivitrol):; • Naltrexone: 5–10 days; • 6β-Naltrexol: 5–10 days |
| Protein binding | 20 % | 20% |
| Bioavailability | 5–60 % | 5–60% |
| Metabolism | hepatic | Liver (non-CYP450) |
| Metabolites | - | 6β-Naltrexol, others |
| Excretion | mainly urinary | Urine |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set cd11c435…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=cd11c435-b0f0-4bb9-ae78-60f101f3703f), label version 20260531. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 120, 240)
> - protein-binding: consistent (label values: 21)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Acamprosate]], [[Disulfiram]], [[Nalmefene]]

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[Glucose and Incretin Signaling]]
