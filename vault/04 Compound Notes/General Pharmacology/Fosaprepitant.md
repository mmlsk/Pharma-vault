---
type: compound
schema-version: 2
compound-id: fosaprepitant-compound
name: Fosaprepitant
aliases: []
cluster: General Pharmacology
group: gi
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1199324
chembl-max-phase: 4
half-life:
  value: 9.0
  value-max: 13.0
  unit: h
  notes: 9 to 13 hours (aprepitant)
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: '>95% (aprepitant)'
bioavailability:
  value: null
  value-max: null
  notes: n/a
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: To aprepitant
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
- group/gi
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Fosaprepitant
  url: https://en.wikipedia.org/w/index.php?title=Fosaprepitant&oldid=1368521640
  revision: 1368521640
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1199324
  pref-name: FOSAPREPITANT
  molecule-type: Small molecule
  first-approval: 2008
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 614.41
    mw-freebase: 614.41
    alogp: 4.37
    psa: 129.91
    hba: 7
    hbd: 3
    rtb: 7
    num-ro5-violations: 1
    qed-weighted: 0.26
    full-molformula: C23H22F7N4O6P
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 9b6d5ea3-2f7a-4501-9a4a-6fa1a7c2d50a
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=9b6d5ea3-2f7a-4501-9a4a-6fa1a7c2d50a
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: no-smpc-text
  product: Ivemend
  ema-number: EMEA/H/C/000743
  url: https://www.ema.europa.eu/en/documents/product-information/ivemend-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields: {}
---

# Fosaprepitant

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fosaprepitant-compound`
- **Source group:** Gastrointestinal & Hepatic (`gi`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1199324](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1199324/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Water-soluble phosphorylated prodrug of aprepitant for single-dose intravenous administration.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2008
- **Flags:** prodrug

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 614.41 | 4.37 | 129.91 | 3/7 | 1 | C23H22F7N4O6P |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fosaprepitant*](https://en.wikipedia.org/w/index.php?title=Fosaprepitant&oldid=1368521640) (revision 1368521640, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9–13 h | 9 to 13 hours (aprepitant) |
| Protein binding | 95 % | >95% (aprepitant) |
| Bioavailability | - | n/a |
| Metabolism | - | To aprepitant |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 9b6d5ea3…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=9b6d5ea3-2f7a-4501-9a4a-6fa1a7c2d50a), label version 20260815. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 9, 13)
> - protein-binding: consistent (label values: 21, 32, 95)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
