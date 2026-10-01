---
type: compound
schema-version: 2
compound-id: semaglutide-compound
name: Ozempic/Wegovy (Semaglutide)
aliases:
- Ozempic/Wegovy
- Semaglutide
cluster: Metabolic and Incretin Agents
group: glp1
class: null
subclass: null
mechanism: Glucagon-like peptide 1 receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2108724
chembl-max-phase: 4
half-life:
  value: 7.0
  value-max: null
  unit: d
  notes: 7 days
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 89.0
  value-max: null
  notes: 89% (Subcutaneous), 1–2% (Oral)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine and feces
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
- chembl-name-match
- identity-inn-ema
pk-source:
  type: wikipedia-infobox
  title: Semaglutide
  url: https://en.wikipedia.org/w/index.php?title=Semaglutide&oldid=1373913203
  revision: 1373913203
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL2108724
  pref-name: SEMAGLUTIDE
  molecule-type: Protein
  first-approval: 2017
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - A10BJ06
  targets:
  - id: CHEMBL1784
    name: Glucagon-like peptide 1 receptor
    action: AGONIST
  properties: {}
  identity-check: inn-match-ema
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 42bdd912-2393-44c4-b7e0-47672ca28991
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=42bdd912-2393-44c4-b7e0-47672ca28991
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
pk-verification-ema:
  source: ema-smpc
  status: no-smpc-value
  product: Ozempic
  ema-number: EMEA/H/C/004174
  url: https://www.ema.europa.eu/en/documents/product-information/ozempic-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/ozempic-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Ozempic/Wegovy (Semaglutide)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `semaglutide-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **Aliases:** Ozempic/Wegovy, Semaglutide
- **ChEMBL:** [CHEMBL2108724](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2108724/) · max phase 4 · id via exact ChEMBL name match · structure check: INN matches an EU-authorised product (no comparable structure)

## Source summary

GLP-1 receptor agonist driving appetite suppression and substantial body fat loss.

## Mechanism

Glucagon-like peptide 1 receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 2017
- **Flags:** black-box warning
- **ATC A10BJ06:** ALIMENTARY TRACT AND METABOLISM › BLOOD GLUCOSE LOWERING DRUGS, EXCL. INSULINS › Glucagon-like peptide-1 (GLP-1) analogues

**Targets (ChEMBL curated mechanisms):**

- [[Glucagon-like peptide 1 receptor (CHEMBL1784)|Glucagon-like peptide 1 receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Semaglutide*](https://en.wikipedia.org/w/index.php?title=Semaglutide&oldid=1373913203) (revision 1373913203, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7 d | 7 days |
| Bioavailability | 89 % | 89% (Subcutaneous), 1–2% (Oral) |
| Metabolism | - | Proteolysis |
| Excretion | - | Urine and feces |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 42bdd912…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=42bdd912-2393-44c4-b7e0-47672ca28991), label version 20260730. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)

> [!note] EU SmPC cross-check: **no-smpc-value**
> Automated comparison with section 5.2 of the [EU SmPC of *Ozempic*](https://www.ema.europa.eu/en/documents/product-information/ozempic-epar-product-information_en.pdf) (EMEA/H/C/004174) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/ozempic-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (SmPC values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Albiglutide (Tanzeum)]] (Glucagon-like peptide 1 receptor), [[Cotadutide]] (Glucagon-like peptide 1 receptor), [[Danuglipron]] (Glucagon-like peptide 1 receptor), [[Dulaglutide (Trulicity)]] (Glucagon-like peptide 1 receptor), [[Efinopegdutide]] (Glucagon-like peptide 1 receptor), [[Efpeglenatide]] (Glucagon-like peptide 1 receptor), [[Exenatide (Byetta-Bydureon)|Exenatide (Byetta/Bydureon)]] (Glucagon-like peptide 1 receptor), [[Lixisenatide (Adlyxin)]] (Glucagon-like peptide 1 receptor), [[Mounjaro-Zepbound (Tirzepatide)|Mounjaro/Zepbound (Tirzepatide)]] (Glucagon-like peptide 1 receptor), [[Retatrutide]] (Glucagon-like peptide 1 receptor), [[Saxenda-Victoza (Liraglutide)|Saxenda/Victoza (Liraglutide)]] (Glucagon-like peptide 1 receptor), [[Survodutide]] (Glucagon-like peptide 1 receptor)
- **Same ATC subgroup:** [[Albiglutide (Tanzeum)]], [[Dulaglutide (Trulicity)]], [[Exenatide (Byetta-Bydureon)|Exenatide (Byetta/Bydureon)]], [[Lixisenatide (Adlyxin)]], [[Saxenda-Victoza (Liraglutide)|Saxenda/Victoza (Liraglutide)]]

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[Glucose and Incretin Signaling]]
