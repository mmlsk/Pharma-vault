---
type: compound
schema-version: 2
compound-id: clofazimine-compound
name: Clofazimine
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: DNA inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1292
chembl-max-phase: 4
half-life:
  value: 70.0
  value-max: null
  unit: d
  notes: 70 days
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
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Clofazimine
  url: https://en.wikipedia.org/w/index.php?title=Clofazimine&oldid=1371686832
  revision: 1371686832
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1292
  pref-name: CLOFAZIMINE
  molecule-type: Small molecule
  first-approval: 1986
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J04BA01
  targets:
  - id: CHEMBL2366041
    name: DNA
    action: INHIBITOR
  properties:
    full-mwt: 473.41
    mw-freebase: 473.41
    alogp: 7.49
    psa: 42.21
    hba: 4
    hbd: 1
    rtb: 4
    num-ro5-violations: 1
    qed-weighted: 0.27
    full-molformula: C27H22Cl2N4
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 2e07448f-f888-4747-80ab-570c1b621250
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2e07448f-f888-4747-80ab-570c1b621250
  checked: '2026-10-01'
  fields:
    half-life: discrepant
---

# Clofazimine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `clofazimine-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1292](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1292/) · max phase 4 · id via Wikipedia infobox

## Source summary

Riminophenazine used in leprosy and resistant tuberculosis, notorious for the reversible red-brown skin discoloration it causes in everyone.

## Mechanism

DNA inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1986
- **ATC J04BA01:** ANTIINFECTIVES FOR SYSTEMIC USE › DRUGS FOR TREATMENT OF LEPRA › Drugs for treatment of lepra

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 473.41 | 7.49 | 42.21 | 1/4 | 1 | C27H22Cl2N4 |

**Targets (ChEMBL curated mechanisms):**

- [[DNA (CHEMBL2366041)|DNA]] - inhibitor · NUCLEIC-ACID

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Clofazimine*](https://en.wikipedia.org/w/index.php?title=Clofazimine&oldid=1371686832) (revision 1371686832, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 70 d | 70 days |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 2e07448f…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2e07448f-f888-4747-80ab-570c1b621250), label version 20260817. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 156, 600, 3840)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Dapsone]], [[Dapsone (topical gel 5% - 7.5%, Aczone)|Dapsone (topical gel 5% / 7.5%, Aczone)]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
