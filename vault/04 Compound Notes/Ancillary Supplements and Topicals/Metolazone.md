---
type: compound
schema-version: 2
compound-id: metolazone-compound
name: Metolazone
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
chembl-id: CHEMBL878
chembl-max-phase: 4
half-life:
  value: 14.0
  value-max: null
  unit: h
  notes: 14 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 65.0
  value-max: null
  notes: ~65%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: primarily urine
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: kidney (minimal)
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Metolazone
  url: https://en.wikipedia.org/w/index.php?title=Metolazone&oldid=1375530392
  revision: 1375530392
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL878
  pref-name: METOLAZONE
  molecule-type: Small molecule
  first-approval: 1973
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C03BA08
  targets:
  - id: CHEMBL1876
    name: Solute carrier family 12 member 3
    action: INHIBITOR
  properties:
    full-mwt: 365.84
    mw-freebase: 365.84
    alogp: 2.71
    psa: 92.5
    hba: 4
    hbd: 2
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.86
    full-molformula: C16H16ClN3O3S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: efa8795e-2c89-4519-b49f-13146fb9ded1
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=efa8795e-2c89-4519-b49f-13146fb9ded1
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Metolazone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `metolazone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL878](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL878/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Thiazide-like diuretic used for resistant edema; electrolyte depletion and kidney injury are key monitoring concerns.

## Mechanism

Thiazide-sensitive sodium-chloride cotransporter inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1973
- **Flags:** black-box warning
- **ATC C03BA08:** CARDIOVASCULAR SYSTEM › LOW-CEILING DIURETICS, EXCL. THIAZIDES › Sulfonamides, plain

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 365.84 | 2.71 | 92.5 | 2/4 | 0 | C16H16ClN3O3S |

**Targets (ChEMBL curated mechanisms):**

- [[Solute carrier family 12 member 3 (CHEMBL1876)|Solute carrier family 12 member 3]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Metolazone*](https://en.wikipedia.org/w/index.php?title=Metolazone&oldid=1375530392) (revision 1375530392, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 14 h | 14 hours |
| Bioavailability | 65 % | ~65% |
| Metabolism | - | kidney (minimal) |
| Excretion | - | primarily urine |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set efa8795e…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=efa8795e-2c89-4519-b49f-13146fb9ded1), label version 20260812. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Chlorthalidone]] (Solute carrier family 12 member 3), [[Hydrochlorothiazide (HCTZ)]] (Solute carrier family 12 member 3), [[Indapamide]] (Solute carrier family 12 member 3)
- **Same ATC subgroup:** [[Chlorthalidone]], [[Indapamide]], [[Xipamide]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
