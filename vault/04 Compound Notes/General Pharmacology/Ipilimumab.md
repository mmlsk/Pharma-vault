---
type: compound
schema-version: 2
compound-id: ipilimumab-compound
name: Ipilimumab
aliases: []
cluster: General Pharmacology
group: immunology
class: null
subclass: null
mechanism: Cytotoxic T-lymphocyte protein 4 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1789844
chembl-max-phase: 4
half-life:
  value: 15.0
  value-max: null
  unit: d
  notes: 15 days
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
  title: Ipilimumab
  url: https://en.wikipedia.org/w/index.php?title=Ipilimumab&oldid=1347861520
  revision: 1347861520
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1789844
  pref-name: IPILIMUMAB
  molecule-type: Antibody
  first-approval: 2011
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01FX04
  targets:
  - id: CHEMBL2364164
    name: Cytotoxic T-lymphocyte protein 4
    action: INHIBITOR
  properties: {}
pk-verification:
  source: fda-label
  status: consistent
  set-id: 2265ef30-253e-11df-8a39-0800200c9a66
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2265ef30-253e-11df-8a39-0800200c9a66
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Ipilimumab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ipilimumab-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1789844](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1789844/) · max phase 4 · id via Wikipedia infobox

## Source summary

Anti-CTLA-4 antibody, the first agent to extend survival in metastatic melanoma, acting on priming in the lymph node rather than on effector function in tissue.

## Mechanism

Cytotoxic T-lymphocyte protein 4 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 2011
- **ATC L01FX04:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › MONOCLONAL ANTIBODIES AND ANTIBODY DRUG CONJUGATES › Other monoclonal antibodies and antibody drug conjugates

**Targets (ChEMBL curated mechanisms):**

- [[Cytotoxic T-lymphocyte protein 4 (CHEMBL2364164)|Cytotoxic T-lymphocyte protein 4]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ipilimumab*](https://en.wikipedia.org/w/index.php?title=Ipilimumab&oldid=1347861520) (revision 1347861520, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 15 d | 15 days |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 2265ef30…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2265ef30-253e-11df-8a39-0800200c9a66), label version 20260820. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 369.6)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Tremelimumab]] (Cytotoxic T-lymphocyte protein 4)
- **Same ATC subgroup:** [[Belantamab Mafodotin]], [[Blinatumomab]], [[Brentuximab Vedotin]], [[Elotuzumab]], [[Elranatamab]], [[Teclistamab]], [[Tremelimumab]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
