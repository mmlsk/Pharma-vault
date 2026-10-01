---
type: compound
schema-version: 2
compound-id: methotrexate-compound
name: Methotrexate
aliases: []
cluster: General Pharmacology
group: immunology
class: null
subclass: null
mechanism: Dihydrofolate reductase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL34259
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: 10.0
  unit: h
  notes: 3–10 hours (lower doses), 8–15 hours (higher doses)
protein-binding:
  value: 35.0
  value-max: 50.0
  unit: percent
  notes: 35–50% (parent drug), 91–93% (7-hydroxymethotrexate)
bioavailability:
  value: 60.0
  value-max: null
  notes: 60% at lower doses, less at higher doses.
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Urine (80–100%), feces (small amounts)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic and intracellular
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
  title: Methotrexate
  url: https://en.wikipedia.org/w/index.php?title=Methotrexate&oldid=1375176283
  revision: 1375176283
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL34259
  pref-name: METHOTREXATE
  molecule-type: Small molecule
  first-approval: 1953
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L01BA01
  - L04AX03
  targets:
  - id: CHEMBL202
    name: Dihydrofolate reductase
    action: INHIBITOR
  properties:
    full-mwt: 454.45
    mw-freebase: 454.45
    alogp: 0.27
    psa: 210.54
    hba: 10
    hbd: 5
    rtb: 9
    num-ro5-violations: 0
    qed-weighted: 0.29
    full-molformula: C20H22N8O5
pk-verification:
  source: fda-label
  status: consistent
  set-id: dd035a9f-cd40-4314-b9d8-2294b8a924e2
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=dd035a9f-cd40-4314-b9d8-2294b8a924e2
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Methotrexate

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `methotrexate-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL34259](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL34259/) · max phase 4 · id via Wikipedia infobox

## Source summary

Antifolate used at cytotoxic doses in oncology and at a fraction of that weekly in rheumatology, where the mechanism is different.

## Mechanism

Dihydrofolate reductase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1953
- **Flags:** black-box warning
- **ATC L01BA01:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › ANTIMETABOLITES › Folic acid analogues
- **ATC L04AX03:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Other immunosuppressants

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 454.45 | 0.27 | 210.54 | 5/10 | 0 | C20H22N8O5 |

**Targets (ChEMBL curated mechanisms):**

- [[Dihydrofolate reductase (CHEMBL202)|Dihydrofolate reductase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Methotrexate*](https://en.wikipedia.org/w/index.php?title=Methotrexate&oldid=1375176283) (revision 1375176283, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–10 h | 3–10 hours (lower doses), 8–15 hours (higher doses) |
| Protein binding | 35–50 % | 35–50% (parent drug), 91–93% (7-hydroxymethotrexate) |
| Bioavailability | 60 % | 60% at lower doses, less at higher doses. |
| Metabolism | hepatic | Hepatic and intracellular |
| Excretion | mainly non-renal | Urine (80–100%), feces (small amounts) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set dd035a9f…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=dd035a9f-cd40-4314-b9d8-2294b8a924e2), label version 20260904. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.7, 0.9, 2.3, 3, 5.8, 8)
> - protein-binding: consistent (label values: 50)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Pemetrexed (Alimta)]] (Dihydrofolate reductase)
- **Same ATC subgroup:** [[Azathioprine]], [[Lenalidomide]], [[Pemetrexed (Alimta)]], [[Pomalidomide]], [[Thalidomide]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
