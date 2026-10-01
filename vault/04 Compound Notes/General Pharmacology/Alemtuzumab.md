---
type: compound
schema-version: 2
compound-id: alemtuzumab-compound
name: Alemtuzumab
aliases: []
cluster: General Pharmacology
group: immunology
class: null
subclass: null
mechanism: CAMPATH-1 antigen inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201587
chembl-max-phase: 4
half-life:
  value: 288.0
  value-max: null
  unit: h
  notes: ~288 hrs
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
- immunosuppression-infection
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/immunology
- stub
- pk-auto
- chembl-profile
- identity-inn-ema
- pk-fda-consistent
- pk-ema-discrepant
- pk-sources-disagree
pk-source:
  type: wikipedia-infobox
  title: Alemtuzumab
  url: https://en.wikipedia.org/w/index.php?title=Alemtuzumab&oldid=1375447530
  revision: 1375447530
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201587
  pref-name: ALEMTUZUMAB
  molecule-type: Antibody
  first-approval: 2001
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L04AG06
  targets:
  - id: CHEMBL1912
    name: CAMPATH-1 antigen
    action: INHIBITOR
  properties: {}
  identity-check: inn-match-ema
pk-verification:
  source: fda-label
  status: consistent
  set-id: 4f5f7255-7abc-4328-bd1a-ceaf139ef3e0
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4f5f7255-7abc-4328-bd1a-ceaf139ef3e0
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: discrepant
  product: Lemtrada
  ema-number: EMEA/H/C/003718
  url: https://www.ema.europa.eu/en/documents/product-information/lemtrada-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/lemtrada-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: discrepant
---

# Alemtuzumab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `alemtuzumab-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1201587](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201587/) · max phase 4 · id via Wikipedia infobox · structure check: INN matches an EU-authorised product (no comparable structure)

## Source summary

Anti-CD52 antibody producing profound, prolonged lymphocyte depletion, highly effective in multiple sclerosis and followed by a high rate of secondary autoimmunity.

## Mechanism

CAMPATH-1 antigen inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 2001
- **Flags:** black-box warning
- **ATC L04AG06:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Monoclonal antibodies

**Targets (ChEMBL curated mechanisms):**

- [[CAMPATH-1 antigen (CHEMBL1912)|CAMPATH-1 antigen]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Alemtuzumab*](https://en.wikipedia.org/w/index.php?title=Alemtuzumab&oldid=1375447530) (revision 1375447530, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 288 h | ~288 hrs |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 4f5f7255…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4f5f7255-7abc-4328-bd1a-ceaf139ef3e0), label version 20251105. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2, 11, 24, 32, 144, 336)

> [!danger] EU SmPC cross-check: **discrepant**
> Automated comparison with section 5.2 of the [EU SmPC of *Lemtrada*](https://www.ema.europa.eu/en/documents/product-information/lemtrada-epar-product-information_en.pdf) (EMEA/H/C/003718) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/lemtrada-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (SmPC values: 96, 120, 720)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Anifrolumab]], [[Belimumab]], [[Inebilizumab]], [[Natalizumab]], [[Ocrelizumab]], [[Ofatumumab]], [[Teprotumumab]], [[Vedolizumab]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
