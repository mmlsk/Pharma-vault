---
type: compound
schema-version: 2
compound-id: elinogrel-compound
name: Elinogrel
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Purinergic receptor P2Y12 antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2103828
chembl-max-phase: 2
half-life:
  value: null
  unit: null
  notes: null
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine, faeces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Mainly unchanged, ~15% N-demethylation
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
- chembl-name-match
pk-source:
  type: wikipedia-infobox
  title: Elinogrel
  url: https://en.wikipedia.org/w/index.php?title=Elinogrel&oldid=1371485863
  revision: 1371485863
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL2103828
  pref-name: ELINOGREL
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL2001
    name: P2Y purinoceptor 12
    action: ANTAGONIST
  properties:
    full-mwt: 523.96
    mw-freebase: 523.96
    alogp: 3.09
    psa: 142.16
    hba: 8
    hbd: 4
    rtb: 5
    num-ro5-violations: 1
    qed-weighted: 0.32
    full-molformula: C20H15ClFN5O5S2
---

# Elinogrel

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `elinogrel-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL2103828](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2103828/) · max phase 2 · id via exact ChEMBL name match - confirm

## Source summary

Inhibits platelet P2Y12 ADP signalling to reduce aggregation, at the cost of bleeding risk; investigational, development discontinued.

## Mechanism

Purinergic receptor P2Y12 antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 523.96 | 3.09 | 142.16 | 4/8 | 1 | C20H15ClFN5O5S2 |

**Targets (ChEMBL curated mechanisms):**

- [[P2Y purinoceptor 12 (CHEMBL2001)|P2Y purinoceptor 12]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Elinogrel*](https://en.wikipedia.org/w/index.php?title=Elinogrel&oldid=1371485863) (revision 1371485863, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Metabolism | hepatic | Mainly unchanged, ~15% N-demethylation |
| Excretion | - | Urine, faeces |

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Cangrelor]] (P2Y purinoceptor 12), [[Ticagrelor (Brilinta)]] (P2Y purinoceptor 12)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
