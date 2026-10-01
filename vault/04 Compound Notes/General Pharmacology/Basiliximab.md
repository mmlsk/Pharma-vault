---
type: compound
schema-version: 2
compound-id: basiliximab-compound
name: Basiliximab
aliases: []
cluster: General Pharmacology
group: immunology
class: null
subclass: null
mechanism: Interleukin-2 receptor inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201439
chembl-max-phase: 4
half-life:
  value: 7.2
  value-max: null
  unit: d
  notes: 7.2 days
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
  title: Basiliximab
  url: https://en.wikipedia.org/w/index.php?title=Basiliximab&oldid=1301002462
  revision: 1301002462
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201439
  pref-name: BASILIXIMAB
  molecule-type: Antibody
  first-approval: 1998
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L04AC02
  targets:
  - id: CHEMBL2364167
    name: Interleukin-2 receptor
    action: INHIBITOR
  properties: {}
pk-verification:
  source: fda-label
  status: consistent
  set-id: 1af01887-b69d-444b-91ed-ebfe12784440
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1af01887-b69d-444b-91ed-ebfe12784440
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Basiliximab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `basiliximab-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1201439](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201439/) · max phase 4 · id via Wikipedia infobox

## Source summary

Anti-CD25 antibody for transplant induction, blocking the high-affinity IL-2 receptor on recently activated T cells only.

## Mechanism

Interleukin-2 receptor inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 1998
- **Flags:** black-box warning
- **ATC L04AC02:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Interleukin inhibitors

**Targets (ChEMBL curated mechanisms):**

- [[Interleukin-2 receptor (CHEMBL2364167)|Interleukin-2 receptor]] - inhibitor · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Basiliximab*](https://en.wikipedia.org/w/index.php?title=Basiliximab&oldid=1301002462) (revision 1301002462, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7.2 d | 7.2 days |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 1af01887…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1af01887-b69d-444b-91ed-ebfe12784440), label version 20251212. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 172.8, 218.4, 228)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aldesleukin]] (Interleukin-2 receptor)
- **Same ATC subgroup:** [[Anakinra]], [[Bimekizumab]], [[Briakinumab]], [[Brodalumab]], [[Canakinumab (Ilaris)]], [[Guselkumab]], [[Ixekizumab]], [[Mirikizumab]], [[Netakimab]], [[Olokizumab]], [[Rilonacept]], [[Risankizumab]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
