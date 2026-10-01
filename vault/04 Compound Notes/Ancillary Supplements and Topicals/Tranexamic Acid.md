---
type: compound
schema-version: 2
compound-id: tranexamic-acid-compound
name: Tranexamic Acid
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Plasminogen inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL877
chembl-max-phase: 4
half-life:
  value: 3.1
  value-max: null
  unit: h
  notes: 3.1 h
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 34.0
  value-max: null
  notes: 34%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
- identity-stereo-check
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Tranexamic acid
  url: https://en.wikipedia.org/w/index.php?title=Tranexamic_acid&oldid=1346731021
  revision: 1346731021
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL877
  pref-name: TRANEXAMIC ACID
  molecule-type: Small molecule
  first-approval: 1986
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - B02AA02
  targets:
  - id: CHEMBL1801
    name: Plasminogen
    action: INHIBITOR
  properties:
    full-mwt: 157.21
    mw-freebase: 157.21
    alogp: 0.84
    psa: 63.32
    hba: 2
    hbd: 2
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.62
    full-molformula: C8H15NO2
  identity-check: connectivity-match
pk-verification:
  source: fda-label
  status: consistent
  set-id: fb2fcae9-6aa0-4708-b250-b0e40beb147e
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=fb2fcae9-6aa0-4708-b250-b0e40beb147e
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Tranexamic Acid

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tranexamic-acid-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL877](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL877/) · max phase 4 · id via Wikipedia infobox · structure check: ⚠️ same skeleton, stereo/isotope layer differs

## Source summary

Originally an anti-bleeding medication, found to also treat melasma (oral or topical) through a distinct mechanism -- blocking plasmin-mediated melanocyte stimulation upstream of tyrosinase itself.

## Mechanism

Plasminogen inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1986
- **ATC B02AA02:** BLOOD AND BLOOD FORMING ORGANS › ANTIFIBRINOLYTICS › Amino acids

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 157.21 | 0.84 | 63.32 | 2/2 | 0 | C8H15NO2 |

**Targets (ChEMBL curated mechanisms):**

- [[Plasminogen (CHEMBL1801)|Plasminogen]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tranexamic acid*](https://en.wikipedia.org/w/index.php?title=Tranexamic_acid&oldid=1346731021) (revision 1346731021, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3.1 h | 3.1 h |
| Bioavailability | 34 % | 34% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set fb2fcae9…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=fb2fcae9-6aa0-4708-b250-b0e40beb147e), label version 20260829. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aminocaproic Acid]] (Plasminogen), [[Streptokinase]] (Plasminogen)
- **Same ATC subgroup:** [[Aminocaproic Acid]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
