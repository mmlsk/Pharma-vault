---
type: compound
schema-version: 2
compound-id: tedizolid-compound
name: Tedizolid
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Bacterial 70S ribosome inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1257051
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: null
  unit: h
  notes: 12 hours
protein-binding:
  value: 70.0
  value-max: 90.0
  unit: percent
  notes: 70–90%
bioavailability:
  value: 91.0
  value-max: null
  notes: 91%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces
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
pk-source:
  type: wikipedia-infobox
  title: Tedizolid
  url: https://en.wikipedia.org/w/index.php?title=Tedizolid&oldid=1337980067
  revision: 1337980067
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1257051
  pref-name: TEDIZOLID
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01XX11
  targets:
  - id: CHEMBL2363135
    name: Bacterial 70S ribosome
    action: INHIBITOR
  properties:
    full-mwt: 370.34
    mw-freebase: 370.34
    alogp: 1.4
    psa: 106.26
    hba: 8
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.74
    full-molformula: C17H15FN6O3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Tedizolid

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tedizolid-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1257051](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1257051/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits bacterial protein synthesis at the ribosome; spectrum, resistance, and toxicity are agent-specific.

## Mechanism

Bacterial 70S ribosome inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC J01XX11:** ANTIINFECTIVES FOR SYSTEMIC USE › OTHER ANTIBACTERIALS › Other antibacterials

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 370.34 | 1.4 | 106.26 | 1/8 | 0 | C17H15FN6O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Bacterial 70S ribosome (CHEMBL2363135)|Bacterial 70S ribosome]] - inhibitor · PROTEIN NUCLEIC-ACID COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tedizolid*](https://en.wikipedia.org/w/index.php?title=Tedizolid&oldid=1337980067) (revision 1337980067, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12 h | 12 hours |
| Protein binding | 70–90 % | 70–90% |
| Bioavailability | 91 % | 91% |
| Excretion | mainly non-renal | Feces |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Azithromycin]] (Bacterial 70S ribosome), [[Chloramphenicol]] (Bacterial 70S ribosome), [[Clarithromycin]] (Bacterial 70S ribosome), [[Eravacycline]] (Bacterial 70S ribosome), [[Erythromycin]] (Bacterial 70S ribosome), [[Linezolid]] (Bacterial 70S ribosome), [[Tetracycline]] (Bacterial 70S ribosome), [[Tigecycline]] (Bacterial 70S ribosome)
- **Same ATC subgroup:** [[Bacitracin]], [[Fosfomycin]], [[Gepotidacin]], [[Lefamulin]], [[Linezolid]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
