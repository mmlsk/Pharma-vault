---
type: compound
schema-version: 2
compound-id: mecasermin-compound
name: Mecasermin (Increlex)
aliases:
- Mecasermin
- Increlex
cluster: Growth Hormone and Peptide Agents
group: gh
class: null
subclass: null
mechanism: Insulin-like growth factor I receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201716
chembl-max-phase: 4
half-life:
  value: 5.8
  value-max: null
  unit: h
  notes: 5.8 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/gh
- stub
- pk-auto
- chembl-profile
- identity-inn-ema
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
- possible-duplicate
pk-source:
  type: wikipedia-infobox
  title: Mecasermin
  url: https://en.wikipedia.org/w/index.php?title=Mecasermin&oldid=1298592287
  revision: 1298592287
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201716
  pref-name: MECASERMIN
  molecule-type: Protein
  first-approval: 2005
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - H01AC03
  targets:
  - id: CHEMBL1957
    name: Insulin-like growth factor 1 receptor
    action: AGONIST
  properties: {}
  identity-check: inn-match-ema
pk-verification:
  source: fda-label
  status: consistent
  set-id: d5b2b0e1-c523-468d-9a0b-4ae4e4a8dbce
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d5b2b0e1-c523-468d-9a0b-4ae4e4a8dbce
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Increlex
  ema-number: EMEA/H/C/000704
  url: https://www.ema.europa.eu/en/documents/product-information/increlex-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Mecasermin (Increlex)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `mecasermin-compound`
- **Source group:** GH & Secretagogues (`gh`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **Aliases:** Mecasermin, Increlex
- **ChEMBL:** [CHEMBL1201716](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201716/) · max phase 4 · id via Wikipedia infobox · structure check: INN matches an EU-authorised product (no comparable structure)

## Source summary

Recombinant IGF-1, used when growth failure doesn't respond to GH itself (e.g. GH receptor insensitivity); acts one step downstream of GH in the same axis.

## Mechanism

Insulin-like growth factor I receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 2005
- **ATC H01AC03:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › ANTERIOR PITUITARY LOBE HORMONES AND ANALOGUES › Somatropin and somatropin agonists

**Targets (ChEMBL curated mechanisms):**

- [[Insulin-like growth factor 1 receptor (CHEMBL1957)|Insulin-like growth factor 1 receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Mecasermin*](https://en.wikipedia.org/w/index.php?title=Mecasermin&oldid=1298592287) (revision 1298592287, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5.8 h | 5.8 hours |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set d5b2b0e1…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d5b2b0e1-c523-468d-9a0b-4ae4e4a8dbce), label version 20260518. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 5.8)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Increlex*](https://www.ema.europa.eu/en/documents/product-information/increlex-epar-product-information_en.pdf) (EMEA/H/C/000704). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 5.8)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- ⚠️ **Same molecule in ChEMBL (formulation variant or possible duplicate):** [[MGF (Mechano Growth Factor)]]
- **Shared target:** [[Figitumumab]] (Insulin-like growth factor 1 receptor), [[Ganitumab]] (Insulin-like growth factor 1 receptor), [[Istiratumab]] (Insulin-like growth factor 1 receptor), [[Linsitinib]] (Insulin-like growth factor 1 receptor), [[Masoprocol]] (Insulin-like growth factor 1 receptor), [[Mecasermin Rinfabate]] (Insulin-like growth factor 1 receptor), [[MGF (Mechano Growth Factor)]] (Insulin-like growth factor 1 receptor), [[Robatumumab]] (Insulin-like growth factor 1 receptor), [[Teprotumumab]] (Insulin-like growth factor 1 receptor), [[Veligrotug]] (Insulin-like growth factor 1 receptor)
- **Same ATC subgroup:** [[Lonapegsomatropin]], [[Mecasermin Rinfabate]], [[MGF (Mechano Growth Factor)]], [[Sermorelin]], [[Somapacitan]], [[Somatrem]], [[Somatrogon]], [[Somatropin (Human Growth Hormone)]], [[Tesamorelin]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `glucose-metabolism`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Glucose and Incretin Signaling]]
- [[HPG and GH-IGF-1 Axes]]
