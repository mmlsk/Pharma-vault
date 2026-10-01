---
type: compound
schema-version: 2
compound-id: rituximab-compound
name: Rituximab
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
chembl-id: CHEMBL1201576
chembl-max-phase: 4
half-life:
  value: 30.0
  value-max: 400.0
  unit: h
  notes: 30 to 400 hours (varies by dose and length of treatment)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (IV)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 'Uncertain: may undergo phagocytosis and catabolism in RES'
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
- identity-inn-ema
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Rituximab
  url: https://en.wikipedia.org/w/index.php?title=Rituximab&oldid=1372311002
  revision: 1372311002
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201576
  pref-name: RITUXIMAB
  molecule-type: Antibody
  first-approval: 1997
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L01FA01
  targets:
  - id: CHEMBL2058
    name: B-lymphocyte antigen CD20
    action: BINDING AGENT
  properties: {}
  identity-check: inn-match-ema
pk-verification:
  source: fda-label
  status: consistent
  set-id: b172773b-3905-4a1c-ad95-bab4b6126563
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b172773b-3905-4a1c-ad95-bab4b6126563
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: MabThera
  ema-number: EMEA/H/C/000165
  url: https://www.ema.europa.eu/en/documents/product-information/mabthera-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Rituximab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rituximab-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1201576](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201576/) · max phase 4 · id via Wikipedia infobox · structure check: INN matches an EU-authorised product (no comparable structure)

## Source summary

The first therapeutic monoclonal antibody approved for cancer, now used far more widely in autoimmune disease. Depletes B cells for six to twelve months per cycle.

## Mechanism

B-lymphocyte antigen CD20 binding agent _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 1997
- **Flags:** black-box warning
- **ATC L01FA01:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › MONOCLONAL ANTIBODIES AND ANTIBODY DRUG CONJUGATES › CD20 (Clusters of Differentiation 20) inhibitors

**Targets (ChEMBL curated mechanisms):**

- [[B-lymphocyte antigen CD20 (CHEMBL2058)|B-lymphocyte antigen CD20]] - binding agent · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rituximab*](https://en.wikipedia.org/w/index.php?title=Rituximab&oldid=1372311002) (revision 1372311002, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 30–400 h | 30 to 400 hours (varies by dose and length of treatment) |
| Bioavailability | 100 % | 100% (IV) |
| Excretion | - | Uncertain: may undergo phagocytosis and catabolism in RES |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set b172773b…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b172773b-3905-4a1c-ad95-bab4b6126563), label version 20250106. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 124.08, 146.4, 336, 432, 528, 768)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *MabThera*](https://www.ema.europa.eu/en/documents/product-information/mabthera-epar-product-information_en.pdf) (EMEA/H/C/000165). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 146.4, 205.92, 216, 264, 336, 360)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Obinutuzumab]] (B-lymphocyte antigen CD20), [[Ocrelizumab]] (B-lymphocyte antigen CD20), [[Ofatumumab]] (B-lymphocyte antigen CD20)
- **Same ATC subgroup:** [[Obinutuzumab]], [[Ofatumumab]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
