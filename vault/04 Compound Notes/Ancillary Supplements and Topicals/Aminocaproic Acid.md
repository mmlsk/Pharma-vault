---
type: compound
schema-version: 2
compound-id: aminocaproic-acid-compound
name: Aminocaproic Acid
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Plasminogen inhibitor; Tissue-type plasminogen activator inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1046
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: null
  unit: h
  notes: 2 hours
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
  notes: Kidney
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
  title: Aminocaproic acid
  url: https://en.wikipedia.org/w/index.php?title=Aminocaproic_acid&oldid=1332569940
  revision: 1332569940
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1046
  pref-name: AMINOCAPROIC ACID
  molecule-type: Small molecule
  first-approval: 1964
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - B02AA01
  targets:
  - id: CHEMBL1801
    name: Plasminogen
    action: INHIBITOR
  - id: CHEMBL1873
    name: Tissue-type plasminogen activator
    action: INHIBITOR
  properties:
    full-mwt: 131.18
    mw-freebase: 131.18
    alogp: 0.59
    psa: 63.32
    hba: 2
    hbd: 2
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.54
    full-molformula: C6H13NO2
pk-verification:
  source: fda-label
  status: consistent
  set-id: 2612ee97-1723-40f2-99e6-3a736f63200f
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2612ee97-1723-40f2-99e6-3a736f63200f
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Aminocaproic Acid

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `aminocaproic-acid-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1046](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1046/) · max phase 4 · id via Wikipedia infobox

## Source summary

Lysine analogue antifibrinolytic blocking plasminogen binding to fibrin.

## Mechanism

Plasminogen inhibitor; Tissue-type plasminogen activator inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1964
- **ATC B02AA01:** BLOOD AND BLOOD FORMING ORGANS › ANTIFIBRINOLYTICS › Amino acids

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 131.18 | 0.59 | 63.32 | 2/2 | 0 | C6H13NO2 |

**Targets (ChEMBL curated mechanisms):**

- [[Plasminogen (CHEMBL1801)|Plasminogen]] - inhibitor · SINGLE PROTEIN
- [[Tissue-type plasminogen activator (CHEMBL1873)|Tissue-type plasminogen activator]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Aminocaproic acid*](https://en.wikipedia.org/w/index.php?title=Aminocaproic_acid&oldid=1332569940) (revision 1332569940, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 2 hours |
| Metabolism | - | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 2612ee97…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2612ee97-1723-40f2-99e6-3a736f63200f), label version 20260804. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Alteplase]] (Tissue-type plasminogen activator), [[Reteplase]] (Tissue-type plasminogen activator), [[Streptokinase]] (Plasminogen), [[Tenecteplase]] (Tissue-type plasminogen activator), [[Tranexamic Acid]] (Plasminogen)
- **Same ATC subgroup:** [[Tranexamic Acid]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
