---
type: compound
schema-version: 2
compound-id: cabozantinib-compound
name: Cabozantinib
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
chembl-id: CHEMBL2105717
chembl-max-phase: 4
half-life:
  value: 110.0
  value-max: null
  unit: h
  notes: 110 hours
protein-binding:
  value: 99.7
  value-max: null
  unit: percent
  notes: ≥99.7%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (54%), urine (27%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4-mediated)
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
  title: Cabozantinib
  url: https://en.wikipedia.org/w/index.php?title=Cabozantinib&oldid=1371079635
  revision: 1371079635
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL2105717
  pref-name: CABOZANTINIB
  molecule-type: Small molecule
  first-approval: 2012
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L01EX07
  targets: []
  properties:
    full-mwt: 501.51
    mw-freebase: 501.51
    alogp: 5.54
    psa: 98.78
    hba: 6
    hbd: 2
    rtb: 8
    num-ro5-violations: 2
    qed-weighted: 0.31
    full-molformula: C28H24FN3O5
pk-verification:
  source: fda-label
  status: consistent
  set-id: 3850cce2-6137-42e5-a792-d318c4a4b3b5
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3850cce2-6137-42e5-a792-d318c4a4b3b5
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Cabozantinib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cabozantinib-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL2105717](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2105717/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits VEGF-receptor angiogenic signaling; hypertension, bleeding, thrombosis, and wound-healing effects require monitoring.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2012
- **Flags:** black-box warning
- **ATC L01EX07:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › PROTEIN KINASE INHIBITORS › Other protein kinase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 501.51 | 5.54 | 98.78 | 2/6 | 2 | C28H24FN3O5 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cabozantinib*](https://en.wikipedia.org/w/index.php?title=Cabozantinib&oldid=1371079635) (revision 1371079635, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 110 h | 110 hours |
| Protein binding | 99.7 % | ≥99.7% |
| Metabolism | hepatic | Liver (CYP3A4-mediated) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Feces (54%), urine (27%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 3850cce2…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3850cce2-6137-42e5-a792-d318c4a4b3b5), label version 20251019. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 99)
> - protein-binding: consistent (label values: 99.7)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Lenvatinib]], [[Pazopanib]], [[Sorafenib]], [[Sunitinib]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
