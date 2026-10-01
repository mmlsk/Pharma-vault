---
type: compound
schema-version: 2
compound-id: sultiame-compound
name: Sultiame
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
chembl-id: CHEMBL328560
chembl-max-phase: 4
half-life:
  value: 24.0
  value-max: null
  unit: h
  notes: 24 hours
protein-binding:
  value: 29.0
  value-max: null
  unit: percent
  notes: 29%
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (oral)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Fecal (10%) and renal (90%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic secretion
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
pk-source:
  type: wikipedia-infobox
  title: Sultiame
  url: https://en.wikipedia.org/w/index.php?title=Sultiame&oldid=1371756606
  revision: 1371756606
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL328560
  pref-name: SULTHIAME
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N03AX03
  targets:
  - id: CHEMBL2095180
    name: Carbonic anhydrase
    action: INHIBITOR
  properties:
    full-mwt: 290.37
    mw-freebase: 290.37
    alogp: 0.26
    psa: 97.54
    hba: 4
    hbd: 1
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.84
    full-molformula: C10H14N2O4S2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Sultiame

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sultiame-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL328560](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL328560/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits carbonic anhydrase, lowering bicarbonate-dependent fluid secretion; metabolic acidosis and paraesthesia are the usual class effects; antiseizure use, Europe.

## Mechanism

Carbonic anhydrase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC N03AX03:** NERVOUS SYSTEM › ANTIEPILEPTICS › Other antiepileptics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 290.37 | 0.26 | 97.54 | 1/4 | 0 | C10H14N2O4S2 |

**Targets (ChEMBL curated mechanisms):**

- [[Carbonic anhydrase (CHEMBL2095180)|Carbonic anhydrase]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sultiame*](https://en.wikipedia.org/w/index.php?title=Sultiame&oldid=1371756606) (revision 1371756606, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 24 h | 24 hours |
| Protein binding | 29 % | 29% |
| Bioavailability | 100 % | 100% (oral) |
| Metabolism | hepatic | Hepatic secretion |
| Excretion | mainly urinary | Fecal (10%) and renal (90%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Ethoxzolamide]] (Carbonic anhydrase)
- **Same ATC subgroup:** [[Brivaracetam]], [[Cannabidiol (Epidiolex)]], [[Cenobamate]], [[Felbamate]], [[Fenfluramine]], [[Ganaxolone]], [[Lacosamide]], [[Lamotrigine]], [[Levetiracetam]], [[Perampanel]], [[Pheneturide]], [[Retigabine (Ezogabine)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
