---
type: compound
schema-version: 2
compound-id: acyclovir-compound
name: Aciclovir
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
chembl-id: CHEMBL184
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 4.0
  unit: h
  notes: 2–4 hours
protein-binding:
  value: 9.0
  value-max: 33.0
  unit: percent
  notes: 9–33%
bioavailability:
  value: 15.0
  value-max: 20.0
  notes: 15–20% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.9
  notes: Kidney (62–90% as unchanged drug)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
  title: Aciclovir
  url: https://en.wikipedia.org/w/index.php?title=Aciclovir&oldid=1376498922
  revision: 1376498922
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL184
  pref-name: ACYCLOVIR
  molecule-type: Small molecule
  first-approval: 1982
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - D06BB03
  - D06BB53
  - J05AB01
  - S01AD03
  targets:
  - id: CHEMBL1872
    name: DNA polymerase catalytic subunit
    action: INHIBITOR
  properties:
    full-mwt: 225.21
    mw-freebase: 225.21
    alogp: -1.33
    psa: 119.05
    hba: 7
    hbd: 3
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.55
    full-molformula: C8H11N5O3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Aciclovir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `acyclovir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL184](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL184/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

The drug that made herpes treatable, and the classic example of selective activation: it is only phosphorylated in virus-infected cells.

## Mechanism

Human herpesvirus 1 DNA polymerase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1982
- **Flags:** prodrug
- **ATC D06BB03:** DERMATOLOGICALS › CHEMOTHERAPEUTICS FOR TOPICAL USE › Antivirals
- **ATC D06BB53:** DERMATOLOGICALS › CHEMOTHERAPEUTICS FOR TOPICAL USE › Antivirals
- **ATC J05AB01:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Nucleosides and nucleotides excl. reverse transcriptase inhibitors
- **ATC S01AD03:** SENSORY ORGANS › ANTIINFECTIVES › Antivirals

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 225.21 | -1.33 | 119.05 | 3/7 | 0 | C8H11N5O3 |

**Targets (ChEMBL curated mechanisms):**

- [[DNA polymerase catalytic subunit (CHEMBL1872)|DNA polymerase catalytic subunit]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Aciclovir*](https://en.wikipedia.org/w/index.php?title=Aciclovir&oldid=1376498922) (revision 1376498922, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–4 h | 2–4 hours |
| Protein binding | 9–33 % | 9–33% |
| Bioavailability | 15–20 % | 15–20% (by mouth) |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary · fe 0.9 | Kidney (62–90% as unchanged drug) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Ganciclovir]] (DNA polymerase catalytic subunit)
- **Same ATC subgroup:** [[Ganciclovir]], [[Molnupiravir]], [[Remdesivir]], [[Valaciclovir]], [[Valganciclovir]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
