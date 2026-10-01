---
type: compound
schema-version: 2
compound-id: ethoxzolamide-compound
name: Ethoxzolamide
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Carbonic anhydrase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL18
chembl-max-phase: 4
half-life:
  value: 2.5
  value-max: 5.5
  unit: h
  notes: 2.5–5.5 hours
protein-binding:
  value: 89.0
  value-max: null
  unit: percent
  notes: ~89%
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
  title: Ethoxzolamide
  url: https://en.wikipedia.org/w/index.php?title=Ethoxzolamide&oldid=1330816894
  revision: 1330816894
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL18
  pref-name: ETHOXZOLAMIDE
  molecule-type: Small molecule
  first-approval: 1982
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL2095180
    name: Carbonic anhydrase
    action: INHIBITOR
  properties:
    full-mwt: 258.32
    mw-freebase: 258.32
    alogp: 1.34
    psa: 82.28
    hba: 5
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.9
    full-molformula: C9H10N2O3S2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Ethoxzolamide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ethoxzolamide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL18](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL18/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits carbonic anhydrase, lowering bicarbonate-dependent fluid secretion; metabolic acidosis and paraesthesia are the usual class effects; largely superseded.

## Mechanism

Carbonic anhydrase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1982

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 258.32 | 1.34 | 82.28 | 1/5 | 0 | C9H10N2O3S2 |

**Targets (ChEMBL curated mechanisms):**

- [[Carbonic anhydrase (CHEMBL2095180)|Carbonic anhydrase]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ethoxzolamide*](https://en.wikipedia.org/w/index.php?title=Ethoxzolamide&oldid=1330816894) (revision 1330816894, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5–5.5 h | 2.5–5.5 hours |
| Protein binding | 89 % | ~89% |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Sultiame]] (Carbonic anhydrase)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
