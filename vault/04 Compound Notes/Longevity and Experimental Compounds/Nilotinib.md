---
type: compound
schema-version: 2
compound-id: nilotinib-compound
name: Nilotinib
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
chembl-id: CHEMBL255863
chembl-max-phase: 4
half-life:
  value: 15.0
  value-max: 17.0
  unit: h
  notes: 15-17 hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98%
bioavailability:
  value: 30.0
  value-max: null
  notes: 30%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Faeces (93%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mostly CYP3A4-mediated)
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
  title: Nilotinib
  url: https://en.wikipedia.org/w/index.php?title=Nilotinib&oldid=1362647876
  revision: 1362647876
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL255863
  pref-name: NILOTINIB
  molecule-type: Small molecule
  first-approval: 2007
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L01EA03
  targets: []
  properties:
    full-mwt: 529.53
    mw-freebase: 529.53
    alogp: 6.36
    psa: 97.62
    hba: 7
    hbd: 2
    rtb: 6
    num-ro5-violations: 2
    qed-weighted: 0.27
    full-molformula: C28H22F3N7O
pk-verification:
  source: fda-label
  status: consistent
  set-id: b34e7fd4-53c5-46d8-bf8a-1fcbe7a16504
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b34e7fd4-53c5-46d8-bf8a-1fcbe7a16504
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Nilotinib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nilotinib-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL255863](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL255863/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits BCR–ABL-family kinase signaling; mutation coverage and off-target cardiovascular risks differ by agent.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2007
- **Flags:** black-box warning
- **ATC L01EA03:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › PROTEIN KINASE INHIBITORS › BCR-ABL tyrosine kinase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 529.53 | 6.36 | 97.62 | 2/7 | 2 | C28H22F3N7O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nilotinib*](https://en.wikipedia.org/w/index.php?title=Nilotinib&oldid=1362647876) (revision 1362647876, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 15–17 h | 15-17 hours |
| Protein binding | 98 % | 98% |
| Bioavailability | 30 % | 30% |
| Metabolism | hepatic | Liver (mostly CYP3A4-mediated) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Faeces (93%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set b34e7fd4…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b34e7fd4-53c5-46d8-bf8a-1fcbe7a16504), label version 20260831. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 17)
> - protein-binding: consistent (label values: 98)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Asciminib]], [[Bosutinib]], [[Dasatinib (Sprycel)]], [[Imatinib]], [[Ponatinib]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
