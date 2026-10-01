---
type: compound
schema-version: 2
compound-id: dacomitinib-compound
name: Dacomitinib
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: Epidermal growth factor receptor erbB1 inhibitor; Receptor protein-tyrosine kinase erbB-2 inhibitor; Receptor protein-tyrosine kinase erbB-4 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2105719
chembl-max-phase: 4
half-life:
  value: 70.0
  value-max: null
  unit: h
  notes: 70 hrs
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98%
bioavailability:
  value: 80.0
  value-max: null
  notes: 80%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 79% faeces, 3% urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP2D6, CYP3A4
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- evidence-limited
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Dacomitinib
  url: https://en.wikipedia.org/w/index.php?title=Dacomitinib&oldid=1364644463
  revision: 1364644463
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL2110732
  pref-name: DACOMITINIB
  molecule-type: Small molecule
  first-approval: 2018
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01EB07
  targets:
  - id: CHEMBL203
    name: Epidermal growth factor receptor
    action: INHIBITOR
  - id: CHEMBL1824
    name: Receptor tyrosine-protein kinase erbB-2
    action: INHIBITOR
  - id: CHEMBL3009
    name: Receptor tyrosine-protein kinase erbB-4
    action: INHIBITOR
  properties:
    full-mwt: 469.95
    mw-freebase: 469.95
    alogp: 5.16
    psa: 79.38
    hba: 6
    hbd: 2
    rtb: 7
    num-ro5-violations: 1
    qed-weighted: 0.47
    full-molformula: C24H25ClFN5O2
pk-verification:
  source: fda-label
  status: consistent
  set-id: 4ab27d2f-e385-4e9c-b324-fa69c10b855a
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4ab27d2f-e385-4e9c-b324-fa69c10b855a
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Dacomitinib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dacomitinib-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL2105719](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2105719/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits oncogenic EGFR-family signaling; activity depends on tumor genotype and acquired resistance.

## Mechanism

Epidermal growth factor receptor erbB1 inhibitor; Receptor protein-tyrosine kinase erbB-2 inhibitor; Receptor protein-tyrosine kinase erbB-4 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2018
- **ATC L01EB07:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › PROTEIN KINASE INHIBITORS › Epidermal growth factor receptor (EGFR) tyrosine kinase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 469.95 | 5.16 | 79.38 | 2/6 | 1 | C24H25ClFN5O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Epidermal growth factor receptor (CHEMBL203)|Epidermal growth factor receptor]] - inhibitor · SINGLE PROTEIN
- [[Receptor tyrosine-protein kinase erbB-2 (CHEMBL1824)|Receptor tyrosine-protein kinase erbB-2]] - inhibitor · SINGLE PROTEIN
- [[Receptor tyrosine-protein kinase erbB-4 (CHEMBL3009)|Receptor tyrosine-protein kinase erbB-4]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dacomitinib*](https://en.wikipedia.org/w/index.php?title=Dacomitinib&oldid=1364644463) (revision 1364644463, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 70 h | 70 hrs |
| Protein binding | 98 % | 98% |
| Bioavailability | 80 % | 80% |
| Metabolism | hepatic | CYP2D6, CYP3A4 |
| CYP (metabolised by) | CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | O-desmethyl-dacomitinib |
| Excretion | - | 79% faeces, 3% urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 4ab27d2f…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4ab27d2f-e385-4e9c-b324-fa69c10b855a), label version 20260623. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 70)
> - protein-binding: consistent (label values: 98)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Cudc-101]] (Epidermal growth factor receptor; Receptor tyrosine-protein kinase erbB-2), [[Gefitinib]] (Epidermal growth factor receptor), [[Masoprocol]] (Receptor tyrosine-protein kinase erbB-2), [[Osimertinib]] (Epidermal growth factor receptor)
- **Same ATC subgroup:** [[Afatinib]], [[Erlotinib]], [[Gefitinib]], [[Osimertinib]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
