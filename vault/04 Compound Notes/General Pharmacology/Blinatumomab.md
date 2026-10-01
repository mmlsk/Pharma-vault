---
type: compound
schema-version: 2
compound-id: blinatumomab-compound
name: Blinatumomab
aliases: []
cluster: General Pharmacology
group: immunology
class: null
subclass: null
mechanism: B-lymphocyte antigen CD19 cross-linking agent; T cell surface glycoprotein CD3 cross-linking agent
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1742992
chembl-max-phase: 4
half-life:
  value: 2.11
  value-max: null
  unit: h
  notes: 2.11 hours
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
  primary-route: true
  fraction-excreted-unchanged: null
  notes: urine (negligible)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: degradation into small peptides and amino acids
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
- chembl-name-match
pk-source:
  type: wikipedia-infobox
  title: Blinatumomab
  url: https://en.wikipedia.org/w/index.php?title=Blinatumomab&oldid=1349980293
  revision: 1349980293
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL1742992
  pref-name: BLINATUMOMAB
  molecule-type: Antibody
  first-approval: 2014
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L01FX07
  targets:
  - id: CHEMBL2364168
    name: T cell surface glycoprotein CD3
    action: CROSS-LINKING AGENT
  - id: CHEMBL3390821
    name: B-lymphocyte antigen CD19
    action: CROSS-LINKING AGENT
  properties: {}
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 38b482a8-960b-4591-9857-5031ecb830aa
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=38b482a8-960b-4591-9857-5031ecb830aa
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Blinatumomab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `blinatumomab-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1742992](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1742992/) · max phase 4 · id via exact ChEMBL name match - confirm

## Source summary

Bispecific T-cell engager linking CD19 on the leukaemic blast to CD3 on the T cell, forcing a cytotoxic synapse.

## Mechanism

B-lymphocyte antigen CD19 cross-linking agent; T cell surface glycoprotein CD3 cross-linking agent _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 2014
- **Flags:** black-box warning
- **ATC L01FX07:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › MONOCLONAL ANTIBODIES AND ANTIBODY DRUG CONJUGATES › Other monoclonal antibodies and antibody drug conjugates

**Targets (ChEMBL curated mechanisms):**

- [[T cell surface glycoprotein CD3 (CHEMBL2364168)|T cell surface glycoprotein CD3]] - cross-linking agent · PROTEIN COMPLEX
- [[B-lymphocyte antigen CD19 (CHEMBL3390821)|B-lymphocyte antigen CD19]] - cross-linking agent · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Blinatumomab*](https://en.wikipedia.org/w/index.php?title=Blinatumomab&oldid=1349980293) (revision 1349980293, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.11 h | 2.11 hours |
| Bioavailability | 100 % | 100% (IV) |
| Metabolism | - | degradation into small peptides and amino acids |
| Excretion | mainly urinary | urine (negligible) |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 38b482a8…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=38b482a8-960b-4591-9857-5031ecb830aa), label version 20260414. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Elranatamab]] (T cell surface glycoprotein CD3), [[Inebilizumab]] (B-lymphocyte antigen CD19), [[Teclistamab]] (T cell surface glycoprotein CD3)
- **Same ATC subgroup:** [[Belantamab Mafodotin]], [[Brentuximab Vedotin]], [[Elotuzumab]], [[Elranatamab]], [[Ipilimumab]], [[Teclistamab]], [[Tremelimumab]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
