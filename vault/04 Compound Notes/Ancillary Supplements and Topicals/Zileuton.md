---
type: compound
schema-version: 2
compound-id: zileuton-compound
name: Zileuton
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Arachidonate 5-lipoxygenase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL93
chembl-max-phase: 4
half-life:
  value: 2.5
  value-max: null
  unit: h
  notes: 2.5 hours
protein-binding:
  value: 93.0
  value-max: null
  unit: percent
  notes: 93%
bioavailability:
  value: null
  value-max: null
  notes: Not yet established
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP1A2, CYP2C9 and CYP3A4-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2C9
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2C9, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Zileuton
  url: https://en.wikipedia.org/w/index.php?title=Zileuton&oldid=1336258545
  revision: 1336258545
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL93
  pref-name: ZILEUTON
  molecule-type: Small molecule
  first-approval: 1996
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL215
    name: Polyunsaturated fatty acid 5-lipoxygenase
    action: INHIBITOR
  properties:
    full-mwt: 236.3
    mw-freebase: 236.3
    alogp: 2.73
    psa: 66.56
    hba: 3
    hbd: 2
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.62
    full-molformula: C11H12N2O2S
pk-verification:
  source: fda-label
  status: consistent
  set-id: aee65202-fddb-497f-9f11-17cc727cb157
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=aee65202-fddb-497f-9f11-17cc727cb157
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Zileuton

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `zileuton-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL93](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL93/) · max phase 4 · id via source catalogue

## Source summary

Arachidonate 5-lipoxygenase inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL93).

## Mechanism

Arachidonate 5-lipoxygenase inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1996

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 236.3 | 2.73 | 66.56 | 2/3 | 0 | C11H12N2O2S |

**Targets (ChEMBL curated mechanisms):**

- [[Polyunsaturated fatty acid 5-lipoxygenase (CHEMBL215)|Polyunsaturated fatty acid 5-lipoxygenase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Zileuton*](https://en.wikipedia.org/w/index.php?title=Zileuton&oldid=1336258545) (revision 1336258545, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5 h | 2.5 hours |
| Protein binding | 93 % | 93% |
| Bioavailability | - | Not yet established |
| Metabolism | hepatic | Hepatic (CYP1A2, CYP2C9 and CYP3A4-mediated) |
| CYP (metabolised by) | CYP1A2, CYP2C9, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Renal |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set aee65202…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=aee65202-fddb-497f-9f11-17cc727cb157), label version 20251130. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2.5)
> - protein-binding: consistent (label values: 93)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Mesalamine]] (Polyunsaturated fatty acid 5-lipoxygenase), [[Mesalazine (5-ASA)]] (Polyunsaturated fatty acid 5-lipoxygenase), [[Pf-4191834]] (Polyunsaturated fatty acid 5-lipoxygenase), [[Sulfasalazine]] (Polyunsaturated fatty acid 5-lipoxygenase)
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP2C9 (+40 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
