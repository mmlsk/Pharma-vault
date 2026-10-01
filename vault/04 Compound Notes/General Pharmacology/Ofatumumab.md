---
type: compound
schema-version: 2
compound-id: ofatumumab-compound
name: Ofatumumab
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
chembl-id: CHEMBL1201836
chembl-max-phase: 4
half-life:
  value: 14.0
  value-max: null
  unit: d
  notes: 14 days
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Ofatumumab
  url: https://en.wikipedia.org/w/index.php?title=Ofatumumab&oldid=1350544500
  revision: 1350544500
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201836
  pref-name: OFATUMUMAB
  molecule-type: Antibody
  first-approval: 2009
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L01FA02
  - L04AG12
  targets:
  - id: CHEMBL2058
    name: B-lymphocyte antigen CD20
    action: BINDING AGENT
  properties: {}
pk-verification:
  source: fda-label
  status: consistent
  set-id: 6a8a3f53-2062-48ff-9dbe-b939df133ca3
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6a8a3f53-2062-48ff-9dbe-b939df133ca3
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Ofatumumab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ofatumumab-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1201836](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201836/) · max phase 4 · id via Wikipedia infobox

## Source summary

Fully human anti-CD20 given as a monthly subcutaneous injection in multiple sclerosis, binding a membrane-proximal epitope.

## Mechanism

B-lymphocyte antigen CD20 binding agent _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 2009
- **Flags:** black-box warning
- **ATC L01FA02:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › MONOCLONAL ANTIBODIES AND ANTIBODY DRUG CONJUGATES › CD20 (Clusters of Differentiation 20) inhibitors
- **ATC L04AG12:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Monoclonal antibodies

**Targets (ChEMBL curated mechanisms):**

- [[B-lymphocyte antigen CD20 (CHEMBL2058)|B-lymphocyte antigen CD20]] - binding agent · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ofatumumab*](https://en.wikipedia.org/w/index.php?title=Ofatumumab&oldid=1350544500) (revision 1350544500, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 14 d | 14 days |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 6a8a3f53…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6a8a3f53-2062-48ff-9dbe-b939df133ca3), label version 20260401. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 384)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Obinutuzumab]] (B-lymphocyte antigen CD20), [[Ocrelizumab]] (B-lymphocyte antigen CD20), [[Rituximab]] (B-lymphocyte antigen CD20)
- **Same ATC subgroup:** [[Alemtuzumab]], [[Anifrolumab]], [[Belimumab]], [[Inebilizumab]], [[Natalizumab]], [[Obinutuzumab]], [[Ocrelizumab]], [[Rituximab]], [[Teprotumumab]], [[Vedolizumab]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
