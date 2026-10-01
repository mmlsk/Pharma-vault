---
type: compound
schema-version: 2
compound-id: ponatinib-compound
name: Ponatinib
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1171837
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: 66.0
  unit: h
  notes: 12–66 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99% (in vitro)'
bioavailability:
  value: null
  value-max: null
  notes: Unknown
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (87%), urine (5%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4, 2C8, 2D6, 3A5)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Ponatinib
  url: https://en.wikipedia.org/w/index.php?title=Ponatinib&oldid=1371079761
  revision: 1371079761
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1171837
  pref-name: PONATINIB
  molecule-type: Small molecule
  first-approval: 2012
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L01EA05
  targets: []
  properties:
    full-mwt: 532.57
    mw-freebase: 532.57
    alogp: 4.46
    psa: 65.77
    hba: 6
    hbd: 1
    rtb: 4
    num-ro5-violations: 1
    qed-weighted: 0.39
    full-molformula: C29H27F3N6O
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Ponatinib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ponatinib-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL1171837](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1171837/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits BCR–ABL-family kinase signaling; mutation coverage and off-target cardiovascular risks differ by agent.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2012
- **Flags:** black-box warning
- **ATC L01EA05:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › PROTEIN KINASE INHIBITORS › BCR-ABL tyrosine kinase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 532.57 | 4.46 | 65.77 | 1/6 | 1 | C29H27F3N6O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ponatinib*](https://en.wikipedia.org/w/index.php?title=Ponatinib&oldid=1371079761) (revision 1371079761, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12–66 h | 12–66 hours |
| Protein binding | 99 % | >99% (in vitro) |
| Bioavailability | - | Unknown |
| Metabolism | hepatic | Liver (CYP3A4, 2C8, 2D6, 3A5) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Feces (87%), urine (5%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Asciminib]], [[Bosutinib]], [[Dasatinib (Sprycel)]], [[Imatinib]], [[Nilotinib]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
