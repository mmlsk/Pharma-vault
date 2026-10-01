---
type: compound
schema-version: 2
compound-id: telbivudine-compound
name: Telbivudine
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: DNA polymerase/reverse transcriptase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL374731
chembl-max-phase: 4
half-life:
  value: 40.0
  value-max: 49.0
  unit: h
  notes: 40 to 49 hours (terminal phase)
protein-binding:
  value: 3.3
  value-max: null
  unit: percent
  notes: Low (3.3% in vitro)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Nil
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
  title: Telbivudine
  url: https://en.wikipedia.org/w/index.php?title=Telbivudine&oldid=1346950187
  revision: 1346950187
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL374731
  pref-name: TELBIVUDINE
  molecule-type: Small molecule
  first-approval: 2006
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J05AF11
  targets:
  - id: CHEMBL2362994
    name: DNA polymerase/reverse transcriptase
    action: INHIBITOR
  properties:
    full-mwt: 242.23
    mw-freebase: 242.23
    alogp: -1.51
    psa: 104.55
    hba: 6
    hbd: 3
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.58
    full-molformula: C10H14N2O5
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Telbivudine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `telbivudine-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL374731](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL374731/) · max phase 4 · id via Wikipedia infobox

## Source summary

Thymidine analogue for hepatitis B, withdrawn in many markets after myopathy and neuropathy signals and a low resistance barrier.

## Mechanism

DNA polymerase/reverse transcriptase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2006
- **Flags:** black-box warning, prodrug
- **ATC J05AF11:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Nucleoside and nucleotide reverse transcriptase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 242.23 | -1.51 | 104.55 | 3/6 | 0 | C10H14N2O5 |

**Targets (ChEMBL curated mechanisms):**

- [[DNA polymerase-reverse transcriptase (CHEMBL2362994)|DNA polymerase/reverse transcriptase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Telbivudine*](https://en.wikipedia.org/w/index.php?title=Telbivudine&oldid=1346950187) (revision 1346950187, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 40–49 h | 40 to 49 hours (terminal phase) |
| Protein binding | 3.3 % | Low (3.3% in vitro) |
| Metabolism | - | Nil |
| Excretion | mainly urinary | Kidney |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Adefovir]] (DNA polymerase/reverse transcriptase), [[Lamivudine]] (DNA polymerase/reverse transcriptase)
- **Same ATC subgroup:** [[Abacavir]], [[Emtricitabine]], [[Lamivudine]], [[Tenofovir]], [[Tenofovir Alafenamide]], [[Tenofovir Disoproxil]], [[Zidovudine]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
