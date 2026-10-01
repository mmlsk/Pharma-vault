---
type: compound
schema-version: 2
compound-id: natalizumab-compound
name: Natalizumab
aliases: []
cluster: General Pharmacology
group: immunology
class: null
subclass: null
mechanism: Integrin alpha-4/beta-1 inhibitor; Integrin alpha-4/beta-7 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201607
chembl-max-phase: 4
half-life:
  value: 11.0
  value-max: null
  unit: d
  notes: 11 ± 4 days
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: n/a
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
- identity-inn-ema
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Natalizumab
  url: https://en.wikipedia.org/w/index.php?title=Natalizumab&oldid=1361797720
  revision: 1361797720
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201607
  pref-name: NATALIZUMAB
  molecule-type: Antibody
  first-approval: 2004
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L04AG03
  targets:
  - id: CHEMBL2095184
    name: Integrin alpha-4/beta-7
    action: INHIBITOR
  - id: CHEMBL1907599
    name: Integrin alpha-4/beta-1
    action: INHIBITOR
  properties: {}
  identity-check: inn-match-ema
pk-verification:
  source: fda-label
  status: consistent
  set-id: c5fdde91-1989-4dd2-9129-4f3323ea2962
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c5fdde91-1989-4dd2-9129-4f3323ea2962
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Tysabri
  ema-number: EMEA/H/C/000603
  url: https://www.ema.europa.eu/en/documents/product-information/tysabri-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/tysabri-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Natalizumab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `natalizumab-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1201607](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201607/) · max phase 4 · id via Wikipedia infobox · structure check: INN matches an EU-authorised product (no comparable structure)

## Source summary

Anti-alpha-4-integrin antibody, highly effective in multiple sclerosis and defined by the risk of progressive multifocal leukoencephalopathy.

## Mechanism

Integrin alpha-4/beta-1 inhibitor; Integrin alpha-4/beta-7 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 2004
- **Flags:** black-box warning
- **ATC L04AG03:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Monoclonal antibodies

**Targets (ChEMBL curated mechanisms):**

- [[Integrin alpha-4-beta-7 (CHEMBL2095184)|Integrin alpha-4/beta-7]] - inhibitor · PROTEIN COMPLEX
- [[Integrin alpha-4-beta-1 (CHEMBL1907599)|Integrin alpha-4/beta-1]] - inhibitor · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Natalizumab*](https://en.wikipedia.org/w/index.php?title=Natalizumab&oldid=1361797720) (revision 1361797720, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 11 d | 11 ± 4 days |
| Bioavailability | - | n/a |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set c5fdde91…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c5fdde91-1989-4dd2-9129-4f3323ea2962), label version 20250321. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 240, 264)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Tysabri*](https://www.ema.europa.eu/en/documents/product-information/tysabri-epar-product-information_en.pdf) (EMEA/H/C/000603) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/tysabri-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 278.4, 676.8, 1108.8)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Vedolizumab]] (Integrin alpha-4/beta-7)
- **Same ATC subgroup:** [[Alemtuzumab]], [[Anifrolumab]], [[Belimumab]], [[Inebilizumab]], [[Ocrelizumab]], [[Ofatumumab]], [[Teprotumumab]], [[Vedolizumab]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
