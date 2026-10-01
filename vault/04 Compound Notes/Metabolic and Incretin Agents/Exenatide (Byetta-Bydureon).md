---
type: compound
schema-version: 2
compound-id: exenatide-compound
name: Exenatide (Byetta/Bydureon)
aliases:
- Exenatide
- Byetta
- Bydureon
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
chembl-id: CHEMBL414357
chembl-max-phase: 4
half-life:
  value: 2.4
  value-max: null
  unit: h
  notes: 2.4 h
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: N/A
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: proteolysis
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/glp1
- stub
- pk-auto
- chembl-profile
- chembl-name-match
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Exenatide
  url: https://en.wikipedia.org/w/index.php?title=Exenatide&oldid=1332060752
  revision: 1332060752
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL414357
  pref-name: EXENATIDE
  molecule-type: Protein
  first-approval: 2005
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - A10BJ01
  targets:
  - id: CHEMBL1784
    name: Glucagon-like peptide 1 receptor
    action: AGONIST
  properties:
    full-mwt: 4186.64
    mw-freebase: 4186.64
    full-molformula: C184H282N50O60S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: e6cb5c8f-e97f-4a6a-95a4-939fd2393949
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e6cb5c8f-e97f-4a6a-95a4-939fd2393949
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Byetta
  ema-number: EMEA/H/C/000698
  url: https://www.ema.europa.eu/en/documents/product-information/byetta-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/byetta-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Exenatide (Byetta/Bydureon)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `exenatide-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **Aliases:** Exenatide, Byetta, Bydureon
- **ChEMBL:** [CHEMBL414357](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL414357/) · max phase 4 · id via exact ChEMBL name match · structure check: ✅ InChIKey matches PubChem

## Source summary

First-in-class GLP-1 receptor agonist, originally derived from Gila monster venom peptide exendin-4; predecessor to semaglutide/tirzepatide.

## Mechanism

Glucagon-like peptide 1 receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 2005
- **Flags:** black-box warning
- **ATC A10BJ01:** ALIMENTARY TRACT AND METABOLISM › BLOOD GLUCOSE LOWERING DRUGS, EXCL. INSULINS › Glucagon-like peptide-1 (GLP-1) analogues

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 4186.64 | - | - | -/- | - | C184H282N50O60S |

**Targets (ChEMBL curated mechanisms):**

- [[Glucagon-like peptide 1 receptor (CHEMBL1784)|Glucagon-like peptide 1 receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Exenatide*](https://en.wikipedia.org/w/index.php?title=Exenatide&oldid=1332060752) (revision 1332060752, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.4 h | 2.4 h |
| Bioavailability | - | N/A |
| Metabolism | - | proteolysis |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set e6cb5c8f…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e6cb5c8f-e97f-4a6a-95a4-939fd2393949), label version 20260527. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2.4)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Byetta*](https://www.ema.europa.eu/en/documents/product-information/byetta-epar-product-information_en.pdf) (EMEA/H/C/000698) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/byetta-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 2.4)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Albiglutide (Tanzeum)]] (Glucagon-like peptide 1 receptor), [[Cotadutide]] (Glucagon-like peptide 1 receptor), [[Danuglipron]] (Glucagon-like peptide 1 receptor), [[Dulaglutide (Trulicity)]] (Glucagon-like peptide 1 receptor), [[Efinopegdutide]] (Glucagon-like peptide 1 receptor), [[Efpeglenatide]] (Glucagon-like peptide 1 receptor), [[Lixisenatide (Adlyxin)]] (Glucagon-like peptide 1 receptor), [[Mounjaro-Zepbound (Tirzepatide)|Mounjaro/Zepbound (Tirzepatide)]] (Glucagon-like peptide 1 receptor), [[Ozempic-Wegovy (Semaglutide)|Ozempic/Wegovy (Semaglutide)]] (Glucagon-like peptide 1 receptor), [[Retatrutide]] (Glucagon-like peptide 1 receptor), [[Saxenda-Victoza (Liraglutide)|Saxenda/Victoza (Liraglutide)]] (Glucagon-like peptide 1 receptor), [[Survodutide]] (Glucagon-like peptide 1 receptor)
- **Same ATC subgroup:** [[Albiglutide (Tanzeum)]], [[Dulaglutide (Trulicity)]], [[Lixisenatide (Adlyxin)]], [[Ozempic-Wegovy (Semaglutide)|Ozempic/Wegovy (Semaglutide)]], [[Saxenda-Victoza (Liraglutide)|Saxenda/Victoza (Liraglutide)]]

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[Glucose and Incretin Signaling]]
