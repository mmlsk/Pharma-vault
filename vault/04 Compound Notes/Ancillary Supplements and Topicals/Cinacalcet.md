---
type: compound
schema-version: 2
compound-id: cinacalcet-compound
name: Cinacalcet
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
chembl-id: CHEMBL1201284
chembl-max-phase: 4
half-life:
  value: 30.0
  value-max: 40.0
  unit: h
  notes: 30 to 40 hours
protein-binding:
  value: 93.0
  value-max: 97.0
  unit: percent
  notes: 93 to 97%
bioavailability:
  value: 20.0
  value-max: 25.0
  notes: 20 to 25%; increases if taken with food
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal (80%) and fecal (15%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP3A4-, CYP2D6- and CYP1A2-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Cinacalcet
  url: https://en.wikipedia.org/w/index.php?title=Cinacalcet&oldid=1333584314
  revision: 1333584314
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201284
  pref-name: CINACALCET
  molecule-type: Small molecule
  first-approval: 2004
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - H05BX01
  targets: []
  properties:
    full-mwt: 357.42
    mw-freebase: 357.42
    alogp: 6.14
    psa: 12.03
    hba: 1
    hbd: 1
    rtb: 6
    num-ro5-violations: 1
    qed-weighted: 0.52
    full-molformula: C22H22F3N
pk-verification:
  source: fda-label
  status: consistent
  set-id: 44b548ef-1679-4d15-86ad-0d9636b48a45
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=44b548ef-1679-4d15-86ad-0d9636b48a45
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Cinacalcet

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cinacalcet-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1201284](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201284/) · max phase 4 · id via Wikipedia infobox

## Source summary

Acts on the PTH axis: intermittent PTH1R agonism is anabolic for bone, while calcimimetics suppress PTH secretion through the calcium-sensing receptor; calcimimetic, suppresses PTH.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2004
- **ATC H05BX01:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › ANTI-PARATHYROID AGENTS › Other anti-parathyroid agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 357.42 | 6.14 | 12.03 | 1/1 | 1 | C22H22F3N |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cinacalcet*](https://en.wikipedia.org/w/index.php?title=Cinacalcet&oldid=1333584314) (revision 1333584314, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 30–40 h | 30 to 40 hours |
| Protein binding | 93–97 % | 93 to 97% |
| Bioavailability | 20–25 % | 20 to 25%; increases if taken with food |
| Metabolism | hepatic | Hepatic (CYP3A4-, CYP2D6- and CYP1A2-mediated) |
| CYP (metabolised by) | CYP1A2, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Renal (80%) and fecal (15%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 44b548ef…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=44b548ef-1679-4d15-86ad-0d9636b48a45), label version 20260828. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 6, 30, 40, 49, 65, 84)
> - protein-binding: consistent (label values: 93, 97)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Calcifediol (25-hydroxyvitamin D3)]], [[Doxercalciferol]], [[Etelcalcetide]], [[Evocalcet]], [[Paricalcitol (Zemplar)]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
