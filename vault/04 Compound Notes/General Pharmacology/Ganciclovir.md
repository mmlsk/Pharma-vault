---
type: compound
schema-version: 2
compound-id: ganciclovir-compound
name: Ganciclovir
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Human herpesvirus 1 DNA polymerase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL182
chembl-max-phase: 4
half-life:
  value: 2.5
  value-max: 5.0
  unit: h
  notes: 2.5–5 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 5.0
  value-max: null
  notes: 5% (oral)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: guanylate kinase (CMV UL97 gene product)
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
pk-source:
  type: wikipedia-infobox
  title: Ganciclovir
  url: https://en.wikipedia.org/w/index.php?title=Ganciclovir&oldid=1363895918
  revision: 1363895918
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL182
  pref-name: GANCICLOVIR
  molecule-type: Small molecule
  first-approval: 1989
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J05AB06
  - S01AD09
  targets:
  - id: CHEMBL1872
    name: DNA polymerase catalytic subunit
    action: INHIBITOR
  properties:
    full-mwt: 255.23
    mw-freebase: 255.23
    alogp: -1.97
    psa: 139.28
    hba: 8
    hbd: 4
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.49
    full-molformula: C9H13N5O4
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: ea25e7ac-7a93-4ec8-975b-2cec197e1c27
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ea25e7ac-7a93-4ec8-975b-2cec197e1c27
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Ganciclovir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ganciclovir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL182](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL182/) · max phase 4 · id via Wikipedia infobox

## Source summary

Cytomegalovirus antiviral whose activation depends on the viral UL97 kinase, and whose marrow toxicity is the price of its lower selectivity.

## Mechanism

Human herpesvirus 1 DNA polymerase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1989
- **Flags:** black-box warning, prodrug
- **ATC J05AB06:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Nucleosides and nucleotides excl. reverse transcriptase inhibitors
- **ATC S01AD09:** SENSORY ORGANS › ANTIINFECTIVES › Antivirals

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 255.23 | -1.97 | 139.28 | 4/8 | 0 | C9H13N5O4 |

**Targets (ChEMBL curated mechanisms):**

- [[DNA polymerase catalytic subunit (CHEMBL1872)|DNA polymerase catalytic subunit]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ganciclovir*](https://en.wikipedia.org/w/index.php?title=Ganciclovir&oldid=1363895918) (revision 1363895918, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5–5 h | 2.5–5 hours |
| Bioavailability | 5 % | 5% (oral) |
| Metabolism | - | guanylate kinase (CMV UL97 gene product) |
| Excretion | mainly urinary | Kidney |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set ea25e7ac…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ea25e7ac-7a93-4ec8-975b-2cec197e1c27), label version 20260518. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aciclovir]] (DNA polymerase catalytic subunit)
- **Same ATC subgroup:** [[Aciclovir]], [[Molnupiravir]], [[Remdesivir]], [[Valaciclovir]], [[Valganciclovir]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
