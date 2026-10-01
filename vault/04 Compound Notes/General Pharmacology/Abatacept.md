---
type: compound
schema-version: 2
compound-id: abatacept-compound
name: Abatacept
aliases: []
cluster: General Pharmacology
group: immunology
class: null
subclass: null
mechanism: T-lymphocyte activation antigen CD80 inhibitor; T-lymphocyte activation antigen CD86 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201823
chembl-max-phase: 4
half-life:
  value: 13.1
  value-max: null
  unit: d
  notes: 13.1 days
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
  title: Abatacept
  url: https://en.wikipedia.org/w/index.php?title=Abatacept&oldid=1300825558
  revision: 1300825558
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201823
  pref-name: ABATACEPT
  molecule-type: Protein
  first-approval: 2006
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L04AA24
  targets:
  - id: CHEMBL2364156
    name: T-lymphocyte activation antigen CD86
    action: INHIBITOR
  - id: CHEMBL2364157
    name: T-lymphocyte activation antigen CD80
    action: INHIBITOR
  properties: {}
pk-verification:
  source: fda-label
  status: consistent
  set-id: 0836c6ac-ee37-5640-2fed-a3185a0b16eb
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0836c6ac-ee37-5640-2fed-a3185a0b16eb
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Abatacept

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `abatacept-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1201823](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201823/) · max phase 4 · id via Wikipedia infobox

## Source summary

CTLA-4-Ig fusion protein that blocks T-cell costimulation, used in rheumatoid arthritis and psoriatic arthritis.

## Mechanism

T-lymphocyte activation antigen CD80 inhibitor; T-lymphocyte activation antigen CD86 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 2006
- **ATC L04AA24:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Selective immunosuppressants

**Targets (ChEMBL curated mechanisms):**

- [[T-lymphocyte activation antigen CD86 (CHEMBL2364156)|T-lymphocyte activation antigen CD86]] - inhibitor · SINGLE PROTEIN
- [[T-lymphocyte activation antigen CD80 (CHEMBL2364157)|T-lymphocyte activation antigen CD80]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Abatacept*](https://en.wikipedia.org/w/index.php?title=Abatacept&oldid=1300825558) (revision 1300825558, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 13.1 d | 13.1 days |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 0836c6ac…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0836c6ac-ee37-5640-2fed-a3185a0b16eb), label version 20251113. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 343.2)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Belatacept]] (T-lymphocyte activation antigen CD80; T-lymphocyte activation antigen CD86)
- **Same ATC subgroup:** [[Apremilast]], [[Belatacept]], [[Efgartigimod]], [[Remibrutinib]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
