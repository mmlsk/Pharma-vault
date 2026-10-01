---
type: compound
schema-version: 2
compound-id: obinutuzumab-compound
name: Obinutuzumab
aliases: []
cluster: General Pharmacology
group: immunology
class: null
subclass: null
mechanism: B-lymphocyte antigen CD20 binding agent
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1743048
chembl-max-phase: 4
half-life:
  value: 28.4
  value-max: null
  unit: d
  notes: 28.4 days
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/immunology
- stub
- pk-auto
- chembl-profile
- chembl-name-match
- identity-inn-ema
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Obinutuzumab
  url: https://en.wikipedia.org/w/index.php?title=Obinutuzumab&oldid=1339774020
  revision: 1339774020
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL1743048
  pref-name: OBINUTUZUMAB
  molecule-type: Antibody
  first-approval: 2013
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L01FA03
  targets:
  - id: CHEMBL2058
    name: B-lymphocyte antigen CD20
    action: BINDING AGENT
  properties: {}
  identity-check: inn-match-ema
pk-verification:
  source: fda-label
  status: consistent
  set-id: df12ceb2-5b4b-4ab5-a317-2a36bf2a3cda
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=df12ceb2-5b4b-4ab5-a317-2a36bf2a3cda
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Gazyvaro
  ema-number: EMEA/H/C/002799
  url: https://www.ema.europa.eu/en/documents/product-information/gazyvaro-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/gazyvaro-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Obinutuzumab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `obinutuzumab-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1743048](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1743048/) · max phase 4 · id via exact ChEMBL name match · structure check: INN matches an EU-authorised product (no comparable structure)

## Source summary

Glycoengineered type II anti-CD20 with enhanced direct cell death and antibody-dependent killing, used in follicular lymphoma and lupus nephritis.

## Mechanism

B-lymphocyte antigen CD20 binding agent _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 2013
- **Flags:** black-box warning
- **ATC L01FA03:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › MONOCLONAL ANTIBODIES AND ANTIBODY DRUG CONJUGATES › CD20 (Clusters of Differentiation 20) inhibitors

**Targets (ChEMBL curated mechanisms):**

- [[B-lymphocyte antigen CD20 (CHEMBL2058)|B-lymphocyte antigen CD20]] - binding agent · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Obinutuzumab*](https://en.wikipedia.org/w/index.php?title=Obinutuzumab&oldid=1339774020) (revision 1339774020, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 28.4 d | 28.4 days |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set df12ceb2…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=df12ceb2-5b4b-4ab5-a317-2a36bf2a3cda), label version 20251219. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 537.6)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Gazyvaro*](https://www.ema.europa.eu/en/documents/product-information/gazyvaro-epar-product-information_en.pdf) (EMEA/H/C/002799) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/gazyvaro-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 537.6, 633.6, 883.2)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Ocrelizumab]] (B-lymphocyte antigen CD20), [[Ofatumumab]] (B-lymphocyte antigen CD20), [[Rituximab]] (B-lymphocyte antigen CD20)
- **Same ATC subgroup:** [[Ofatumumab]], [[Rituximab]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
