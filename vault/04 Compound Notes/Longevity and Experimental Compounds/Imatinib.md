---
type: compound
schema-version: 2
compound-id: imatinib-compound
name: Imatinib
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
chembl-id: CHEMBL941
chembl-max-phase: 4
half-life:
  value: 18.0
  value-max: null
  unit: h
  notes: 18 h (imatinib); 40 h (active metabolite)
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: 95%
bioavailability:
  value: 98.0
  value-max: null
  notes: 98%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Fecal (68%) and kidney (13%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mainly CYP3A4-mediated)
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
  title: Imatinib
  url: https://en.wikipedia.org/w/index.php?title=Imatinib&oldid=1369854920
  revision: 1369854920
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL941
  pref-name: IMATINIB
  molecule-type: Small molecule
  first-approval: 2001
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01EA01
  targets: []
  properties:
    full-mwt: 493.62
    mw-freebase: 493.62
    alogp: 4.59
    psa: 86.28
    hba: 7
    hbd: 2
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.39
    full-molformula: C29H31N7O
pk-verification:
  source: fda-label
  status: consistent
  set-id: a1787fad-3612-43e1-98fa-ce62361e0b3c
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a1787fad-3612-43e1-98fa-ce62361e0b3c
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Imatinib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `imatinib-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL941](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL941/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits BCR–ABL-family kinase signaling; mutation coverage and off-target cardiovascular risks differ by agent.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2001
- **ATC L01EA01:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › PROTEIN KINASE INHIBITORS › BCR-ABL tyrosine kinase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 493.62 | 4.59 | 86.28 | 2/7 | 0 | C29H31N7O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Imatinib*](https://en.wikipedia.org/w/index.php?title=Imatinib&oldid=1369854920) (revision 1369854920, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 18 h | 18 h (imatinib); 40 h (active metabolite) |
| Protein binding | 95 % | 95% |
| Bioavailability | 98 % | 98% |
| Metabolism | hepatic | Liver (mainly CYP3A4-mediated) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Fecal (68%) and kidney (13%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set a1787fad…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a1787fad-3612-43e1-98fa-ce62361e0b3c), label version 20260715. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 14.8, 17.1, 18, 40)
> - protein-binding: consistent (label values: 95)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Asciminib]], [[Bosutinib]], [[Dasatinib (Sprycel)]], [[Nilotinib]], [[Ponatinib]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
