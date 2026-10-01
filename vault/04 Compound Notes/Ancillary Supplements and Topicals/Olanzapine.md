---
type: compound
schema-version: 2
compound-id: olanzapine-compound
name: Olanzapine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: D2-like dopamine receptor antagonist; Serotonin 2a (5-HT2a) receptor antagonist; Serotonin 2c (5-HT2c) receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL715
chembl-max-phase: 4
half-life:
  value: 33.0
  value-max: null
  unit: h
  notes: 33 hours, 51.8 hours (elderly)
protein-binding:
  value: 93.0
  value-max: null
  unit: percent
  notes: 93%
bioavailability:
  value: 60.0
  value-max: 65.0
  notes: 60–65%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.07
  notes: Urine (57%; 7% as unchanged drug), faeces (30%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (direct glucuronidation and CYP1A2 mediated oxidation)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- needs-compound-review
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Olanzapine
  url: https://en.wikipedia.org/w/index.php?title=Olanzapine&oldid=1375958074
  revision: 1375958074
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL715
  pref-name: OLANZAPINE
  molecule-type: Small molecule
  first-approval: 1996
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N05AH03
  targets:
  - id: CHEMBL224
    name: 5-hydroxytryptamine receptor 2A
    action: ANTAGONIST
  - id: CHEMBL225
    name: 5-hydroxytryptamine receptor 2C
    action: ANTAGONIST
  - id: CHEMBL2331075
    name: D2-like dopamine receptor
    action: ANTAGONIST
  properties:
    full-mwt: 312.44
    mw-freebase: 312.44
    alogp: 3.44
    psa: 30.87
    hba: 5
    hbd: 1
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.81
    full-molformula: C17H20N4S
pk-verification:
  source: fda-label
  status: consistent
  set-id: 5af81f87-5582-aa23-e063-6294a90a1ee8
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5af81f87-5582-aa23-e063-6294a90a1ee8
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Olanzapine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `olanzapine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL715](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL715/) · max phase 4 · id via Wikipedia infobox

## Source summary

Antagonizes or partially agonizes dopamine D2 receptors; movement, metabolic, and prolactin effects depend on receptor profile.

## Mechanism

D2-like dopamine receptor antagonist; Serotonin 2a (5-HT2a) receptor antagonist; Serotonin 2c (5-HT2c) receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1996
- **Flags:** black-box warning
- **ATC N05AH03:** NERVOUS SYSTEM › ANTIPSYCHOTICS › Diazepines, oxazepines, thiazepines and oxepines

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 312.44 | 3.44 | 30.87 | 1/5 | 0 | C17H20N4S |

**Targets (ChEMBL curated mechanisms):**

- [[5-hydroxytryptamine receptor 2A (CHEMBL224)|5-hydroxytryptamine receptor 2A]] - antagonist · SINGLE PROTEIN
- [[5-hydroxytryptamine receptor 2C (CHEMBL225)|5-hydroxytryptamine receptor 2C]] - antagonist · SINGLE PROTEIN
- [[D2-like dopamine receptor (CHEMBL2331075)|D2-like dopamine receptor]] - antagonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Olanzapine*](https://en.wikipedia.org/w/index.php?title=Olanzapine&oldid=1375958074) (revision 1375958074, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 33 h | 33 hours, 51.8 hours (elderly) |
| Protein binding | 93 % | 93% |
| Bioavailability | 60–65 % | 60–65% |
| Metabolism | hepatic | Liver (direct glucuronidation and CYP1A2 mediated oxidation) |
| CYP (metabolised by) | CYP1A2 | roles as inhibitor/inducer not assessed |
| Excretion | - · fe 0.07 | Urine (57%; 7% as unchanged drug), faeces (30%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 5af81f87…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5af81f87-5582-aa23-e063-6294a90a1ee8), label version 20260908. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 21, 30, 54)
> - protein-binding: consistent (label values: 93)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Loxapine]] (5-hydroxytryptamine receptor 2A; 5-hydroxytryptamine receptor 2C; D2-like dopamine receptor), [[Thioridazine]] (5-hydroxytryptamine receptor 2A; 5-hydroxytryptamine receptor 2C; D2-like dopamine receptor), [[Chlorpromazine]] (5-hydroxytryptamine receptor 2A; D2-like dopamine receptor), [[Droperidol]] (5-hydroxytryptamine receptor 2A; D2-like dopamine receptor), [[Haloperidol]] (5-hydroxytryptamine receptor 2A; D2-like dopamine receptor), [[Haloperidol Decanoate]] (5-hydroxytryptamine receptor 2A; D2-like dopamine receptor), [[Mirtazapine]] (5-hydroxytryptamine receptor 2A; 5-hydroxytryptamine receptor 2C), [[Risperidone]] (5-hydroxytryptamine receptor 2A; 5-hydroxytryptamine receptor 2C), [[Agomelatine (Valdoxan)]] (5-hydroxytryptamine receptor 2C), [[Aripiprazole]] (5-hydroxytryptamine receptor 2A), [[Brexpiprazole]] (5-hydroxytryptamine receptor 2A), [[Clozapine]] (5-hydroxytryptamine receptor 2A)
- **Same ATC subgroup:** [[Clozapine]], [[Loxapine]], [[Quetiapine]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
