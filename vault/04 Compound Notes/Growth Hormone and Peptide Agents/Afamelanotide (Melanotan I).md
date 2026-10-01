---
type: compound
schema-version: 2
compound-id: afamelanotide-compound
name: Afamelanotide (Melanotan I)
aliases:
- Afamelanotide
- Melanotan I
cluster: Growth Hormone and Peptide Agents
group: peptides
class: null
subclass: null
mechanism: Melanocortin receptor 1 agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL441738
chembl-max-phase: 4
half-life:
  value: 30.0
  value-max: null
  unit: min
  notes: 30 minutes
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
- evidence-limited
- identity-contamination
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/peptides
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-discrepant
- pk-ema-consistent
- pk-sources-disagree
pk-source:
  type: wikipedia-infobox
  title: Afamelanotide
  url: https://en.wikipedia.org/w/index.php?title=Afamelanotide&oldid=1373558678
  revision: 1373558678
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL441738
  pref-name: AFAMELANOTIDE
  molecule-type: Protein
  first-approval: 2014
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - D02BB02
  targets:
  - id: CHEMBL3795
    name: Melanocyte-stimulating hormone receptor
    action: AGONIST
  properties:
    full-mwt: 1646.87
    mw-freebase: 1646.87
    full-molformula: C78H111N21O19
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 94f53286-11dd-7fbb-e053-2a95a90a7c48
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=94f53286-11dd-7fbb-e053-2a95a90a7c48
  checked: '2026-10-01'
  fields:
    half-life: discrepant
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Scenesse
  ema-number: EMEA/H/C/002548
  url: https://www.ema.europa.eu/en/documents/product-information/scenesse-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/scenesse-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Afamelanotide (Melanotan I)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `afamelanotide-compound`
- **Source group:** Peptides (`peptides`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **Aliases:** Afamelanotide, Melanotan I
- **ChEMBL:** [CHEMBL441738](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL441738/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Approved alpha-MSH analog that stimulates melanin production, distinct from the unapproved Melanotan II.

## Mechanism

Melanocortin receptor 1 agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 2014
- **ATC D02BB02:** DERMATOLOGICALS › PROTECTIVES AGAINST UV-RADIATION › Protectives against UV-radiation for systemic use

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1646.87 | - | - | -/- | - | C78H111N21O19 |

**Targets (ChEMBL curated mechanisms):**

- [[Melanocyte-stimulating hormone receptor (CHEMBL3795)|Melanocyte-stimulating hormone receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Afamelanotide*](https://en.wikipedia.org/w/index.php?title=Afamelanotide&oldid=1373558678) (revision 1373558678, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 30 min | 30 minutes |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 94f53286…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=94f53286-11dd-7fbb-e053-2a95a90a7c48), label version 20260511. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 15)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Scenesse*](https://www.ema.europa.eu/en/documents/product-information/scenesse-epar-product-information_en.pdf) (EMEA/H/C/002548) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/scenesse-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 0.5)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Dersimelagon]] (Melanocyte-stimulating hormone receptor)

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`, `identity-contamination`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
