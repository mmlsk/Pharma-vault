---
type: compound
schema-version: 2
compound-id: bosutinib-compound
name: Bosutinib
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: Tyrosine-protein kinase ABL inhibitor; Tyrosine-protein kinase HCK inhibitor; Tyrosine-protein kinase Lyn inhibitor; Tyrosine-protein kinase SRC inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL288441
chembl-max-phase: 4
half-life:
  value: 22.5
  value-max: null
  unit: h
  notes: 22.5±1.7 hours
protein-binding:
  value: 94.0
  value-max: 96.0
  unit: percent
  notes: 94–96%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Fecal (91.3%) and kidney (3%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: By CYP3A4, to inactive metabolites
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
  title: Bosutinib
  url: https://en.wikipedia.org/w/index.php?title=Bosutinib&oldid=1372313951
  revision: 1372313951
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL288441
  pref-name: BOSUTINIB
  molecule-type: Small molecule
  first-approval: 2012
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01EA04
  targets:
  - id: CHEMBL1862
    name: Tyrosine-protein kinase ABL1
    action: INHIBITOR
  - id: CHEMBL267
    name: Proto-oncogene tyrosine-protein kinase Src
    action: INHIBITOR
  - id: CHEMBL3234
    name: Tyrosine-protein kinase HCK
    action: INHIBITOR
  - id: CHEMBL3905
    name: Tyrosine-protein kinase Lyn
    action: INHIBITOR
  properties:
    full-mwt: 530.46
    mw-freebase: 530.46
    alogp: 5.19
    psa: 82.88
    hba: 8
    hbd: 1
    rtb: 9
    num-ro5-violations: 2
    qed-weighted: 0.38
    full-molformula: C26H29Cl2N5O3
pk-verification:
  source: fda-label
  status: consistent
  set-id: d5929f91-6496-4c0e-97e8-0bd524e15763
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d5929f91-6496-4c0e-97e8-0bd524e15763
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: consistent
---

# Bosutinib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `bosutinib-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL288441](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL288441/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits BCR–ABL-family kinase signaling; mutation coverage and off-target cardiovascular risks differ by agent.

## Mechanism

Tyrosine-protein kinase ABL inhibitor; Tyrosine-protein kinase HCK inhibitor; Tyrosine-protein kinase Lyn inhibitor; Tyrosine-protein kinase SRC inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2012
- **ATC L01EA04:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › PROTEIN KINASE INHIBITORS › BCR-ABL tyrosine kinase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 530.46 | 5.19 | 82.88 | 1/8 | 2 | C26H29Cl2N5O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Tyrosine-protein kinase ABL1 (CHEMBL1862)|Tyrosine-protein kinase ABL1]] - inhibitor · SINGLE PROTEIN
- [[Proto-oncogene tyrosine-protein kinase Src (CHEMBL267)|Proto-oncogene tyrosine-protein kinase Src]] - inhibitor · SINGLE PROTEIN
- [[Tyrosine-protein kinase HCK (CHEMBL3234)|Tyrosine-protein kinase HCK]] - inhibitor · SINGLE PROTEIN
- [[Tyrosine-protein kinase Lyn (CHEMBL3905)|Tyrosine-protein kinase Lyn]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Bosutinib*](https://en.wikipedia.org/w/index.php?title=Bosutinib&oldid=1372313951) (revision 1372313951, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 22.5 h | 22.5±1.7 hours |
| Protein binding | 94–96 % | 94–96% |
| Metabolism | hepatic | By CYP3A4, to inactive metabolites |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Fecal (91.3%) and kidney (3%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set d5929f91…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d5929f91-6496-4c0e-97e8-0bd524e15763), label version 20260528. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: consistent (label values: 94, 96)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Bafetinib]] (Tyrosine-protein kinase ABL1; Tyrosine-protein kinase Lyn), [[Asciminib]] (Tyrosine-protein kinase ABL1), [[Dasatinib (Sprycel)]] (Tyrosine-protein kinase ABL1), [[Rebastinib]] (Tyrosine-protein kinase ABL1), [[Tirbanibulin]] (Proto-oncogene tyrosine-protein kinase Src), [[Vodobatinib]] (Tyrosine-protein kinase ABL1)
- **Same ATC subgroup:** [[Asciminib]], [[Dasatinib (Sprycel)]], [[Imatinib]], [[Nilotinib]], [[Ponatinib]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
