---
type: compound
schema-version: 2
compound-id: dutasteride-compound
name: Dutasteride (Avodart)
aliases:
- Dutasteride
- Avodart
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Steroid 5-alpha-reductase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1200969
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: 5.0
  unit: wk
  notes: 4–5 weeks
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99%
bioavailability:
  value: 60.0
  value-max: null
  notes: 60%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.05
  notes: 'Feces: 40% (metabolites); Urine: 5% (unchanged)'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4)
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Dutasteride
  url: https://en.wikipedia.org/w/index.php?title=Dutasteride&oldid=1375820985
  revision: 1375820985
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1200969
  pref-name: DUTASTERIDE
  molecule-type: Small molecule
  first-approval: 2001
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - G04CB02
  targets:
  - id: CHEMBL2363075
    name: Steroid 5-alpha-reductase
    action: INHIBITOR
  properties:
    full-mwt: 528.54
    mw-freebase: 528.54
    alogp: 6.58
    psa: 58.2
    hba: 2
    hbd: 2
    rtb: 2
    num-ro5-violations: 2
    qed-weighted: 0.43
    full-molformula: C27H30F6N2O2
pk-verification:
  source: fda-label
  status: discrepant
  set-id: c78d18cf-05df-4154-b2f9-39cc374ca9e3
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c78d18cf-05df-4154-b2f9-39cc374ca9e3
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
---

# Dutasteride (Avodart)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dutasteride-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Dutasteride, Avodart
- **ChEMBL:** [CHEMBL1200969](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1200969/) · max phase 4 · id via Wikipedia infobox

## Source summary

Dual type-1/type-2 5-alpha-reductase inhibitor, more complete DHT suppression than finasteride (which mainly hits type 2), sometimes used off-label for hair loss.

## Mechanism

Steroid 5-alpha-reductase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2001
- **ATC G04CB02:** GENITO URINARY SYSTEM AND SEX HORMONES › DRUGS USED IN BENIGN PROSTATIC HYPERTROPHY › Testosterone-5-alpha reductase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 528.54 | 6.58 | 58.2 | 2/2 | 2 | C27H30F6N2O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Steroid 5-alpha-reductase (CHEMBL2363075)|Steroid 5-alpha-reductase]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dutasteride*](https://en.wikipedia.org/w/index.php?title=Dutasteride&oldid=1375820985) (revision 1375820985, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4–5 wk | 4–5 weeks |
| Protein binding | 99 % | 99% |
| Bioavailability | 60 % | 60% |
| Metabolism | hepatic | Liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • 4'-Hydroxydutasteride; • 6'-Hydroxydutasteride; • 1,2-Dihydrodutasteride; (All three active) |
| Excretion | - · fe 0.05 | Feces: 40% (metabolites); Urine: 5% (unchanged) |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set c78d18cf…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c78d18cf-05df-4154-b2f9-39cc374ca9e3), label version 20260827. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 170, 260, 300)
> - protein-binding: consistent (label values: 96.6, 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Finasteride]], [[Finasteride (topical spray solution)]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
