---
type: compound
schema-version: 2
compound-id: finasteride-compound
name: Finasteride
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Steroid 5-alpha-reductase 2 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL710
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 6.0
  unit: h
  notes: 'Adults: 5–6 hours; Elderly: >8 hours'
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: 90%
bioavailability:
  value: 65.0
  value-max: null
  notes: 65%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 'Feces: 57%; Urine: 40%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4, ALDH)
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
- possible-duplicate
pk-source:
  type: wikipedia-infobox
  title: Finasteride
  url: https://en.wikipedia.org/w/index.php?title=Finasteride&oldid=1374991546
  revision: 1374991546
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL710
  pref-name: FINASTERIDE
  molecule-type: Small molecule
  first-approval: 1992
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - D11AX10
  - G04CB01
  targets:
  - id: CHEMBL1856
    name: 3-oxo-5-alpha-steroid 4-dehydrogenase 2
    action: INHIBITOR
  properties:
    full-mwt: 372.55
    mw-freebase: 372.55
    alogp: 3.81
    psa: 58.2
    hba: 2
    hbd: 2
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.74
    full-molformula: C23H36N2O2
pk-verification:
  source: fda-label
  status: consistent
  set-id: c9a3cb34-9a8e-4538-ab90-32e08d8acc3a
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c9a3cb34-9a8e-4538-ab90-32e08d8acc3a
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Finasteride

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `finasteride-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL710](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL710/) · max phase 4 · id via Wikipedia infobox

## Source summary

Oral type 2 5-alpha-reductase inhibitor used for androgenetic alopecia and benign prostatic hyperplasia.

## Mechanism

Steroid 5-alpha-reductase 2 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1992
- **ATC D11AX10:** DERMATOLOGICALS › OTHER DERMATOLOGICAL PREPARATIONS › Other dermatologicals
- **ATC G04CB01:** GENITO URINARY SYSTEM AND SEX HORMONES › DRUGS USED IN BENIGN PROSTATIC HYPERTROPHY › Testosterone-5-alpha reductase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 372.55 | 3.81 | 58.2 | 2/2 | 0 | C23H36N2O2 |

**Targets (ChEMBL curated mechanisms):**

- [[3-oxo-5-alpha-steroid 4-dehydrogenase 2 (CHEMBL1856)|3-oxo-5-alpha-steroid 4-dehydrogenase 2]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Finasteride*](https://en.wikipedia.org/w/index.php?title=Finasteride&oldid=1374991546) (revision 1374991546, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–6 h | Adults: 5–6 hours; Elderly: >8 hours |
| Protein binding | 90 % | 90% |
| Bioavailability | 65 % | 65% |
| Metabolism | hepatic | Liver (CYP3A4, ALDH) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Feces: 57%; Urine: 40% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set c9a3cb34…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c9a3cb34-9a8e-4538-ab90-32e08d8acc3a), label version 20260909. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 3, 4, 6, 8, 12, 15)
> - protein-binding: consistent (label values: 90)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- ⚠️ **Same molecule in ChEMBL (formulation variant or possible duplicate):** [[Finasteride (topical spray solution)]]
- **Shared target:** [[Finasteride (topical spray solution)]] (3-oxo-5-alpha-steroid 4-dehydrogenase 2)
- **Same ATC subgroup:** [[Brimonidine]], [[Caffeine]], [[Diclofenac]], [[Dutasteride (Avodart)]], [[Finasteride (topical spray solution)]], [[Hydroquinone]], [[Mequinol]], [[Minoxidil]], [[Minoxidil (oral, low dose)]], [[Monobenzone]], [[Tiratricol (TRIAC)]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
