---
type: compound
schema-version: 2
compound-id: enalapril-compound
name: Enalapril
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
chembl-id: CHEMBL578
chembl-max-phase: 4
half-life:
  value: 11.0
  value-max: null
  unit: h
  notes: 11 hours (enalaprilat)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 60.0
  value-max: null
  notes: 60% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (to enalaprilat)
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
  title: Enalapril
  url: https://en.wikipedia.org/w/index.php?title=Enalapril&oldid=1359481165
  revision: 1359481165
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL578
  pref-name: ENALAPRIL
  molecule-type: Small molecule
  first-approval: 1985
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C09AA02
  targets: []
  properties:
    full-mwt: 376.45
    mw-freebase: 376.45
    alogp: 1.6
    psa: 95.94
    hba: 5
    hbd: 2
    rtb: 9
    num-ro5-violations: 0
    qed-weighted: 0.64
    full-molformula: C20H28N2O5
pk-verification:
  source: fda-label
  status: consistent
  set-id: e81a8aca-0e7c-4a02-b596-09e4ac22c70e
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e81a8aca-0e7c-4a02-b596-09e4ac22c70e
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Enalapril

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `enalapril-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL578](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL578/) · max phase 4 · id via Wikipedia infobox

## Source summary

ACE inhibitor with the best-documented haematocrit-lowering effect of any drug in this graph.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1985
- **Flags:** black-box warning, prodrug
- **ATC C09AA02:** CARDIOVASCULAR SYSTEM › ACE INHIBITORS, PLAIN › ACE inhibitors, plain

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 376.45 | 1.6 | 95.94 | 2/5 | 0 | C20H28N2O5 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Enalapril*](https://en.wikipedia.org/w/index.php?title=Enalapril&oldid=1359481165) (revision 1359481165, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 11 h | 11 hours (enalaprilat) |
| Bioavailability | 60 % | 60% (by mouth) |
| Metabolism | hepatic | Liver (to enalaprilat) |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set e81a8aca…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e81a8aca-0e7c-4a02-b596-09e4ac22c70e), label version 20190329. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 11, 14, 24)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Benazepril (Lotensin)]], [[Captopril (Capoten)]], [[Cilazapril]], [[Delapril]], [[Fosinopril]], [[Imidapril]], [[Moexipril]], [[Perindopril (Aceon)]], [[Quinapril]], [[Ramipril (Altace)]], [[Spirapril]], [[Temocapril]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
