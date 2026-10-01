---
type: compound
schema-version: 2
compound-id: aminoglutethimide-compound
name: Aminoglutethimide
aliases: []
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: Cytochrome P450 11A1 inhibitor; Cytochrome P450 19A1 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL488
chembl-max-phase: 4
half-life:
  value: 12.5
  value-max: null
  unit: h
  notes: 12.5 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: Rapid, complete
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.54
  notes: Urine (34–54%, unchanged)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (minimal; acetylation)
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
- endocrine-feedback-disruption
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/pct
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Aminoglutethimide
  url: https://en.wikipedia.org/w/index.php?title=Aminoglutethimide&oldid=1367636433
  revision: 1367636433
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL488
  pref-name: AMINOGLUTETHIMIDE
  molecule-type: Small molecule
  first-approval: 1980
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L02BG01
  targets:
  - id: CHEMBL1978
    name: Aromatase
    action: INHIBITOR
  - id: CHEMBL2033
    name: Cholesterol side-chain cleavage enzyme, mitochondrial
    action: INHIBITOR
  properties:
    full-mwt: 232.28
    mw-freebase: 232.28
    alogp: 1.35
    psa: 72.19
    hba: 3
    hbd: 2
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.6
    full-molformula: C13H16N2O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Aminoglutethimide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `aminoglutethimide-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL488](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL488/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

The original aromatase inhibitor -- and a demonstration of why non-selectivity was a problem.

## Mechanism

Cytochrome P450 11A1 inhibitor; Cytochrome P450 19A1 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1980
- **ATC L02BG01:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › HORMONE ANTAGONISTS AND RELATED AGENTS › Aromatase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 232.28 | 1.35 | 72.19 | 2/3 | 0 | C13H16N2O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Aromatase (CHEMBL1978)|Aromatase]] - inhibitor · SINGLE PROTEIN
- [[Cholesterol side-chain cleavage enzyme, mitochondrial (CHEMBL2033)|Cholesterol side-chain cleavage enzyme, mitochondrial]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Aminoglutethimide*](https://en.wikipedia.org/w/index.php?title=Aminoglutethimide&oldid=1367636433) (revision 1367636433, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12.5 h | 12.5 hours |
| Bioavailability | - | Rapid, complete |
| Metabolism | hepatic | Liver (minimal; acetylation) |
| Excretion | mainly urinary · fe 0.54 | Urine (34–54%, unchanged) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Arimidex (Anastrozole)]] (Aromatase), [[Aromasin (Exemestane)]] (Aromatase), [[Femara (Letrozole)]] (Aromatase), [[Levoketoconazole]] (Cholesterol side-chain cleavage enzyme, mitochondrial), [[Mitotane]] (Cholesterol side-chain cleavage enzyme, mitochondrial), [[Testolactone]] (Aromatase)
- **Same ATC subgroup:** [[Arimidex (Anastrozole)]], [[Aromasin (Exemestane)]], [[Femara (Letrozole)]], [[Formestane]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
