---
type: compound
schema-version: 2
compound-id: sitagliptin-compound
name: Sitagliptin (Januvia)
aliases:
- Sitagliptin
- Januvia
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
chembl-id: CHEMBL1422
chembl-max-phase: 4
half-life:
  value: 8.0
  value-max: 14.0
  unit: h
  notes: 8 to 14 h
protein-binding:
  value: 38.0
  value-max: null
  unit: percent
  notes: 38%
bioavailability:
  value: 87.0
  value-max: null
  notes: 87%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (80%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4- and CYP2C8-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C8
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C8, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Sitagliptin
  url: https://en.wikipedia.org/w/index.php?title=Sitagliptin&oldid=1371791385
  revision: 1371791385
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1422
  pref-name: SITAGLIPTIN
  molecule-type: Small molecule
  first-approval: 2006
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A10BH01
  targets: []
  properties:
    full-mwt: 407.32
    mw-freebase: 407.32
    alogp: 2.02
    psa: 77.04
    hba: 5
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.62
    full-molformula: C16H15F6N5O
pk-verification:
  source: fda-label
  status: consistent
  set-id: 58e23b30-451c-f451-e063-6394a90a35a7
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=58e23b30-451c-f451-e063-6394a90a35a7
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Sitagliptin (Januvia)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sitagliptin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Sitagliptin, Januvia
- **ChEMBL:** [CHEMBL1422](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1422/) · max phase 4 · id via Wikipedia infobox

## Source summary

The first DPP-4 inhibitor, a weight-neutral oral glucose-lowering drug with a large neutral outcomes trial behind it.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2006
- **ATC A10BH01:** ALIMENTARY TRACT AND METABOLISM › BLOOD GLUCOSE LOWERING DRUGS, EXCL. INSULINS › Dipeptidyl peptidase 4 (DPP-4) inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 407.32 | 2.02 | 77.04 | 1/5 | 0 | C16H15F6N5O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sitagliptin*](https://en.wikipedia.org/w/index.php?title=Sitagliptin&oldid=1371791385) (revision 1371791385, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8–14 h | 8 to 14 h |
| Protein binding | 38 % | 38% |
| Bioavailability | 87 % | 87% |
| Metabolism | hepatic | Liver (CYP3A4- and CYP2C8-mediated) |
| CYP (metabolised by) | CYP2C8, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney (80%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 58e23b30…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=58e23b30-451c-f451-e063-6394a90a35a7), label version 20260812. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 12.4)
> - protein-binding: consistent (label values: 38)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Alogliptin]], [[Evogliptin]], [[Gemigliptin]], [[Linagliptin (Tradjenta)]], [[Teneligliptin]], [[Vildagliptin]]
- **Shared CYP substrate pool:** CYP2C8 (+15 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
