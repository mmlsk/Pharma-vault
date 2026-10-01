---
type: compound
schema-version: 2
compound-id: pitavastatin-compound
name: Pitavastatin (Livalo)
aliases:
- Pitavastatin
- Livalo
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
chembl-id: CHEMBL1201753
chembl-max-phase: 4
half-life:
  value: 11.0
  value-max: null
  unit: h
  notes: 11 hours
protein-binding:
  value: 96.0
  value-max: null
  unit: percent
  notes: 96%
bioavailability:
  value: 60.0
  value-max: null
  notes: 60%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Faeces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C9, minimally)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C9
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C9 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Pitavastatin
  url: https://en.wikipedia.org/w/index.php?title=Pitavastatin&oldid=1334235016
  revision: 1334235016
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201753
  pref-name: PITAVASTATIN
  molecule-type: Small molecule
  first-approval: 2009
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C10AA08
  targets: []
  properties:
    full-mwt: 421.47
    mw-freebase: 421.47
    alogp: 4.52
    psa: 90.65
    hba: 4
    hbd: 3
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.5
    full-molformula: C25H24FNO4
pk-verification:
  source: fda-label
  status: consistent
  set-id: 26b5e5e8-45cd-4a98-9af4-2d04c1130881
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=26b5e5e8-45cd-4a98-9af4-2d04c1130881
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Pitavastatin (Livalo)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pitavastatin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Pitavastatin, Livalo
- **ChEMBL:** [CHEMBL1201753](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201753/) · max phase 4 · id via Wikipedia infobox

## Source summary

Statin with minimal cytochrome P450 metabolism, dosed at 1 to 4 mg.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2009
- **ATC C10AA08:** CARDIOVASCULAR SYSTEM › LIPID MODIFYING AGENTS, PLAIN › HMG CoA reductase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 421.47 | 4.52 | 90.65 | 3/4 | 0 | C25H24FNO4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pitavastatin*](https://en.wikipedia.org/w/index.php?title=Pitavastatin&oldid=1334235016) (revision 1334235016, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 11 h | 11 hours |
| Protein binding | 96 % | 96% |
| Bioavailability | 60 % | 60% |
| Metabolism | hepatic | Liver (CYP2C9, minimally) |
| CYP (metabolised by) | CYP2C9 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Faeces |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 26b5e5e8…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=26b5e5e8-45cd-4a98-9af4-2d04c1130881), label version 20240815. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 8, 12)
> - protein-binding: consistent (label values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Atorvastatin (Lipitor)]], [[Cerivastatin]], [[Fluvastatin]], [[Lovastatin (Mevacor)]], [[Pravastatin (Pravachol)]], [[Rosuvastatin (Crestor)]], [[Simvastatin (Zocor)]]
- **Shared CYP substrate pool:** CYP2C9 (+40 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
