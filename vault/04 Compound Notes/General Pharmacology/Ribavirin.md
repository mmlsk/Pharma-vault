---
type: compound
schema-version: 2
compound-id: ribavirin-compound
name: Ribavirin
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Inosine-5'-monophosphate dehydrogenase 1 inhibitor; RNA inhibitor; RNA-directed RNA polymerase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1643
chembl-max-phase: 4
half-life:
  value: 298.0
  value-max: null
  unit: h
  notes: 298 hours (multiple dose); 43.6 hours (single dose)
protein-binding:
  value: 0.0
  value-max: null
  unit: percent
  notes: 0%
bioavailability:
  value: 64.0
  value-max: null
  notes: 64%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (61%), faeces (12%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: liver and intracellularly
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
- cyp-interactions
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Ribavirin
  url: https://en.wikipedia.org/w/index.php?title=Ribavirin&oldid=1359690341
  revision: 1359690341
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1643
  pref-name: RIBAVIRIN
  molecule-type: Small molecule
  first-approval: 1985
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J05AP01
  targets:
  - id: CHEMBL1822
    name: Inosine-5'-monophosphate dehydrogenase 1
    action: INHIBITOR
  - id: CHEMBL4296320
    name: RNA-directed RNA polymerase
    action: INHIBITOR
  - id: CHEMBL2363073
    name: RNA
    action: INHIBITOR
  properties:
    full-mwt: 244.21
    mw-freebase: 244.21
    alogp: -3.01
    psa: 143.72
    hba: 8
    hbd: 4
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.44
    full-molformula: C8H12N4O5
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 35f99f76-f2ef-4a81-91ff-285419664be3
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=35f99f76-f2ef-4a81-91ff-285419664be3
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Ribavirin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ribavirin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1643](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1643/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Old broad-spectrum nucleoside with several proposed mechanisms, now mainly a hepatitis C adjunct and a treatment for viral haemorrhagic fever.

## Mechanism

Inosine-5'-monophosphate dehydrogenase 1 inhibitor; RNA inhibitor; RNA-directed RNA polymerase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1985
- **Flags:** black-box warning, prodrug
- **ATC J05AP01:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Antivirals for treatment of HCV infections

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 244.21 | -3.01 | 143.72 | 4/8 | 0 | C8H12N4O5 |

**Targets (ChEMBL curated mechanisms):**

- [[Inosine-5'-monophosphate dehydrogenase 1 (CHEMBL1822)|Inosine-5'-monophosphate dehydrogenase 1]] - inhibitor · SINGLE PROTEIN
- [[RNA-directed RNA polymerase (CHEMBL4296320)|RNA-directed RNA polymerase]] - inhibitor · SINGLE PROTEIN
- [[RNA (CHEMBL2363073)|RNA]] - inhibitor · NUCLEIC-ACID

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ribavirin*](https://en.wikipedia.org/w/index.php?title=Ribavirin&oldid=1359690341) (revision 1359690341, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 298 h | 298 hours (multiple dose); 43.6 hours (single dose) |
| Protein binding | 0 % | 0% |
| Bioavailability | 64 % | 64% |
| Metabolism | hepatic | liver and intracellularly |
| Excretion | mainly urinary | Urine (61%), faeces (12%) |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 35f99f76…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=35f99f76-f2ef-4a81-91ff-285419664be3), label version 20240206. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Sofosbuvir]] (RNA-directed RNA polymerase)
- **Same ATC subgroup:** [[Boceprevir]], [[Daclatasvir]], [[Elbasvir]], [[Grazoprevir]], [[Simeprevir]], [[Sofosbuvir]], [[Telaprevir]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
