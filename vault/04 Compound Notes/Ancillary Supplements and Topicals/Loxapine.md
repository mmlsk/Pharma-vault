---
type: compound
schema-version: 2
compound-id: loxapine-compound
name: Loxapine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: D2-like dopamine receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL831
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: null
  unit: h
  notes: 4 hours (oral); 7.61 hours (inhalation)
protein-binding:
  value: 96.8
  value-max: null
  unit: percent
  notes: 96.8%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Majority are excreted within 24 hours, main route through urine (conjugated metabolites), small amounts through the feces (unconjugated metabolites)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Extensive Liver; active metabolites include amoxapine and 8-hydroxyloxapine. Inhibits P-gp and is a substrate of CYP1A2, CYP3A4 and CYP2D6
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- needs-compound-review
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Loxapine
  url: https://en.wikipedia.org/w/index.php?title=Loxapine&oldid=1368778041
  revision: 1368778041
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL831
  pref-name: LOXAPINE
  molecule-type: Small molecule
  first-approval: 1975
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N05AH01
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
    full-mwt: 327.81
    mw-freebase: 327.81
    alogp: 3.77
    psa: 28.07
    hba: 4
    hbd: 0
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.74
    full-molformula: C18H18ClN3O
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: ce8c5a31-7600-4525-a0c7-b3adc9ec2977
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ce8c5a31-7600-4525-a0c7-b3adc9ec2977
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Loxapine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `loxapine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL831](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL831/) · max phase 4 · id via source catalogue

## Source summary

D2-like dopamine receptor antagonist; approved/marketed compound catalogued by ChEMBL (CHEMBL831).

## Mechanism

D2-like dopamine receptor antagonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1975
- **Flags:** black-box warning
- **ATC N05AH01:** NERVOUS SYSTEM › ANTIPSYCHOTICS › Diazepines, oxazepines, thiazepines and oxepines

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 327.81 | 3.77 | 28.07 | 0/4 | 0 | C18H18ClN3O |

**Targets (ChEMBL curated mechanisms):**

- [[5-hydroxytryptamine receptor 2A (CHEMBL224)|5-hydroxytryptamine receptor 2A]] - antagonist · SINGLE PROTEIN
- [[5-hydroxytryptamine receptor 2C (CHEMBL225)|5-hydroxytryptamine receptor 2C]] - antagonist · SINGLE PROTEIN
- [[D2-like dopamine receptor (CHEMBL2331075)|D2-like dopamine receptor]] - antagonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Loxapine*](https://en.wikipedia.org/w/index.php?title=Loxapine&oldid=1368778041) (revision 1368778041, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4 h | 4 hours (oral); 7.61 hours (inhalation) |
| Protein binding | 96.8 % | 96.8% |
| Metabolism | hepatic | Extensive Liver; active metabolites include amoxapine and 8-hydroxyloxapine. Inhibits P-gp and is a substrate of CYP1A2, CYP3A4 and CYP2D6 |
| CYP (metabolised by) | CYP1A2, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Majority are excreted within 24 hours, main route through urine (conjugated metabolites), small amounts through the feces (unconjugated metabolites) |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set ce8c5a31…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ce8c5a31-7600-4525-a0c7-b3adc9ec2977), label version 20260903. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Olanzapine]] (5-hydroxytryptamine receptor 2A; 5-hydroxytryptamine receptor 2C; D2-like dopamine receptor), [[Thioridazine]] (5-hydroxytryptamine receptor 2A; 5-hydroxytryptamine receptor 2C; D2-like dopamine receptor), [[Chlorpromazine]] (5-hydroxytryptamine receptor 2A; D2-like dopamine receptor), [[Droperidol]] (5-hydroxytryptamine receptor 2A; D2-like dopamine receptor), [[Haloperidol]] (5-hydroxytryptamine receptor 2A; D2-like dopamine receptor), [[Haloperidol Decanoate]] (5-hydroxytryptamine receptor 2A; D2-like dopamine receptor), [[Mirtazapine]] (5-hydroxytryptamine receptor 2A; 5-hydroxytryptamine receptor 2C), [[Risperidone]] (5-hydroxytryptamine receptor 2A; 5-hydroxytryptamine receptor 2C), [[Agomelatine (Valdoxan)]] (5-hydroxytryptamine receptor 2C), [[Aripiprazole]] (5-hydroxytryptamine receptor 2A), [[Brexpiprazole]] (5-hydroxytryptamine receptor 2A), [[Clozapine]] (5-hydroxytryptamine receptor 2A)
- **Same ATC subgroup:** [[Clozapine]], [[Olanzapine]], [[Quetiapine]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
