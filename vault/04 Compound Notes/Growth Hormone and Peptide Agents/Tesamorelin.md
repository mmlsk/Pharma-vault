---
type: compound
schema-version: 2
compound-id: tesamorelin-compound
name: Tesamorelin
aliases: []
cluster: Growth Hormone and Peptide Agents
group: gh
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1237026
chembl-max-phase: 4
half-life:
  value: 26.0
  value-max: 38.0
  unit: min
  notes: 26–38 min
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 4.0
  value-max: null
  notes: ≤4%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal/proteolysis
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Proteolysis
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
- endocrine-feedback-disruption
- glucose-metabolism
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/gh
- stub
- pk-auto
- chembl-profile
- chembl-name-match
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Tesamorelin
  url: https://en.wikipedia.org/w/index.php?title=Tesamorelin&oldid=1373828962
  revision: 1373828962
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL1237026
  pref-name: TESAMORELIN
  molecule-type: Protein
  first-approval: 2010
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - H01AC06
  targets: []
  properties: {}
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 3d783378-b02d-4f19-99dd-0fc91a042224
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3d783378-b02d-4f19-99dd-0fc91a042224
  checked: '2026-10-01'
  fields:
    half-life: discrepant
---

# Tesamorelin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tesamorelin-compound`
- **Source group:** GH & Secretagogues (`gh`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **ChEMBL:** [CHEMBL1237026](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1237026/) · max phase 4 · id via exact ChEMBL name match - confirm

## Source summary

GHRH analog peptide, FDA-approved for reducing visceral fat, notably in HIV-associated lipodystrophy.

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 2010
- **ATC H01AC06:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › ANTERIOR PITUITARY LOBE HORMONES AND ANALOGUES › Somatropin and somatropin agonists

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tesamorelin*](https://en.wikipedia.org/w/index.php?title=Tesamorelin&oldid=1373828962) (revision 1373828962, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 26–38 min | 26–38 min |
| Bioavailability | 4 % | ≤4% |
| Metabolism | - | Proteolysis |
| Excretion | mainly urinary | Renal/proteolysis |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 3d783378…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3d783378-b02d-4f19-99dd-0fc91a042224), label version 20260729. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 0.133)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Lonapegsomatropin]], [[Mecasermin (Increlex)]], [[Mecasermin Rinfabate]], [[MGF (Mechano Growth Factor)]], [[Sermorelin]], [[Somapacitan]], [[Somatrem]], [[Somatrogon]], [[Somatropin (Human Growth Hormone)]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `glucose-metabolism`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Glucose and Incretin Signaling]]
- [[HPG and GH-IGF-1 Axes]]
