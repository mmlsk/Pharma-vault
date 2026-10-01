---
type: compound
schema-version: 2
compound-id: quetiapine-compound
name: Quetiapine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL716
chembl-max-phase: 4
half-life:
  value: 7.0
  value-max: null
  unit: h
  notes: 7 hours (parent compound); 9–12 hours (active metabolite, norquetiapine)
protein-binding:
  value: 83.0
  value-max: null
  unit: percent
  notes: 83%
bioavailability:
  value: 100.0
  value-max: null
  notes: 100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (73%), feces (20%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver via CYP3A4-catalysed sulfoxidation to its active metabolite norquetiapine (N-desalkylquetiapine)
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
  title: Quetiapine
  url: https://en.wikipedia.org/w/index.php?title=Quetiapine&oldid=1372676814
  revision: 1372676814
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL716
  pref-name: QUETIAPINE
  molecule-type: Small molecule
  first-approval: 1997
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N05AH04
  targets: []
  properties:
    full-mwt: 383.52
    mw-freebase: 383.52
    alogp: 2.86
    psa: 48.3
    hba: 6
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.8
    full-molformula: C21H25N3O2S
pk-verification:
  source: fda-label
  status: consistent
  set-id: 3112a006-1c61-47f2-84f5-9a7670d09c9b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3112a006-1c61-47f2-84f5-9a7670d09c9b
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Quetiapine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `quetiapine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL716](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL716/) · max phase 4 · id via Wikipedia infobox

## Source summary

Antagonizes or partially agonizes dopamine D2 receptors; movement, metabolic, and prolactin effects depend on receptor profile.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1997
- **Flags:** black-box warning
- **ATC N05AH04:** NERVOUS SYSTEM › ANTIPSYCHOTICS › Diazepines, oxazepines, thiazepines and oxepines

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 383.52 | 2.86 | 48.3 | 1/6 | 0 | C21H25N3O2S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Quetiapine*](https://en.wikipedia.org/w/index.php?title=Quetiapine&oldid=1372676814) (revision 1372676814, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7 h | 7 hours (parent compound); 9–12 hours (active metabolite, norquetiapine) |
| Protein binding | 83 % | 83% |
| Bioavailability | 100 % | 100% |
| Metabolism | hepatic | Liver via CYP3A4-catalysed sulfoxidation to its active metabolite norquetiapine (N-desalkylquetiapine) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney (73%), feces (20%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 3112a006…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3112a006-1c61-47f2-84f5-9a7670d09c9b), label version 20260806. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 6)
> - protein-binding: consistent (label values: 83)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Clozapine]], [[Loxapine]], [[Olanzapine]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
