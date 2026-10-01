---
type: compound
schema-version: 2
compound-id: enoximone-compound
name: Enoximone
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Phosphodiesterase 3 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL249856
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: 10.0
  unit: h
  notes: 4 to 10 hours
protein-binding:
  value: 85.0
  value-max: null
  unit: percent
  notes: 85%
bioavailability:
  value: 50.0
  value-max: null
  notes: 50% (oral)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal (60 to 70%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (oxidation)
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
  title: Enoximone
  url: https://en.wikipedia.org/w/index.php?title=Enoximone&oldid=1369030482
  revision: 1369030482
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL249856
  pref-name: ENOXIMONE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C01CE03
  targets:
  - id: CHEMBL2094125
    name: Phosphodiesterase 3
    action: INHIBITOR
  properties:
    full-mwt: 248.31
    mw-freebase: 248.31
    alogp: 1.96
    psa: 65.72
    hba: 3
    hbd: 2
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.64
    full-molformula: C12H12N2O2S
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Enoximone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `enoximone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL249856](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL249856/) · max phase 4 · id via Wikipedia infobox

## Source summary

PDE3 inhibitor inodilator, used mainly in Europe. Same class effects as milrinone with an oral formulation history.

## Mechanism

Phosphodiesterase 3 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC C01CE03:** CARDIOVASCULAR SYSTEM › CARDIAC STIMULANTS EXCL. CARDIAC GLYCOSIDES › Phosphodiesterase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 248.31 | 1.96 | 65.72 | 2/3 | 0 | C12H12N2O2S |

**Targets (ChEMBL curated mechanisms):**

- [[Phosphodiesterase 3 (CHEMBL2094125)|Phosphodiesterase 3]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Enoximone*](https://en.wikipedia.org/w/index.php?title=Enoximone&oldid=1369030482) (revision 1369030482, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4–10 h | 4 to 10 hours |
| Protein binding | 85 % | 85% |
| Bioavailability | 50 % | 50% (oral) |
| Metabolism | hepatic | Liver (oxidation) |
| Excretion | mainly urinary | Renal (60 to 70%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Ensifentrine (Ohtuvayre)]] (Phosphodiesterase 3)
- **Same ATC subgroup:** [[Bucladesine (Dibutyryl-cAMP)]], [[Milrinone]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
