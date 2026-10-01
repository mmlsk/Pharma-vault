---
type: compound
schema-version: 2
compound-id: indapamide-compound
name: Indapamide
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Thiazide-sensitive sodium-chloride cotransporter inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL406
chembl-max-phase: 4
half-life:
  value: 14.0
  value-max: 18.0
  unit: h
  notes: 'standard release: 14–18 hours, slow release: 14–24 hours (mean 18)'
protein-binding:
  value: 71.0
  value-max: 79.0
  unit: percent
  notes: 71–79%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
  title: Indapamide
  url: https://en.wikipedia.org/w/index.php?title=Indapamide&oldid=1335553440
  revision: 1335553440
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL406
  pref-name: INDAPAMIDE
  molecule-type: Small molecule
  first-approval: 1983
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C03BA11
  targets:
  - id: CHEMBL1876
    name: Solute carrier family 12 member 3
    action: INHIBITOR
  properties:
    full-mwt: 365.84
    mw-freebase: 365.84
    alogp: 2.08
    psa: 92.5
    hba: 4
    hbd: 2
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.87
    full-molformula: C16H16ClN3O3S
pk-verification:
  source: fda-label
  status: consistent
  set-id: 59cd3331-7afe-432a-8b50-39533fd5f392
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=59cd3331-7afe-432a-8b50-39533fd5f392
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Indapamide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `indapamide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL406](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL406/) · max phase 4 · id via Wikipedia infobox

## Source summary

Thiazide-like diuretic with less metabolic disturbance than the classic thiazides.

## Mechanism

Thiazide-sensitive sodium-chloride cotransporter inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1983
- **ATC C03BA11:** CARDIOVASCULAR SYSTEM › LOW-CEILING DIURETICS, EXCL. THIAZIDES › Sulfonamides, plain

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 365.84 | 2.08 | 92.5 | 2/4 | 0 | C16H16ClN3O3S |

**Targets (ChEMBL curated mechanisms):**

- [[Solute carrier family 12 member 3 (CHEMBL1876)|Solute carrier family 12 member 3]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Indapamide*](https://en.wikipedia.org/w/index.php?title=Indapamide&oldid=1335553440) (revision 1335553440, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 14–18 h | standard release: 14–18 hours, slow release: 14–24 hours (mean 18) |
| Protein binding | 71–79 % | 71–79% |
| Metabolism | hepatic | Liver |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 59cd3331…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=59cd3331-7afe-432a-8b50-39533fd5f392), label version 20260513. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 14, 26)
> - protein-binding: consistent (label values: 71, 79)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Chlorthalidone]] (Solute carrier family 12 member 3), [[Hydrochlorothiazide (HCTZ)]] (Solute carrier family 12 member 3), [[Metolazone]] (Solute carrier family 12 member 3)
- **Same ATC subgroup:** [[Chlorthalidone]], [[Metolazone]], [[Xipamide]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
