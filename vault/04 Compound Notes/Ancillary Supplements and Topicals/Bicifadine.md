---
type: compound
schema-version: 2
compound-id: bicifadine-compound
name: Bicifadine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Monoamine transporter inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL511099
chembl-max-phase: 3
half-life:
  value: 1.6
  value-max: null
  unit: h
  notes: 1.6 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: renal
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
  title: Bicifadine
  url: https://en.wikipedia.org/w/index.php?title=Bicifadine&oldid=1338426412
  revision: 1338426412
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL511099
  pref-name: BICIFADINE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL2363064
    name: Monoamine transporter
    action: INHIBITOR
  properties:
    full-mwt: 173.26
    mw-freebase: 173.26
    alogp: 1.86
    psa: 12.03
    hba: 1
    hbd: 1
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.68
    full-molformula: C12H15N
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Bicifadine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `bicifadine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL511099](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL511099/) · max phase 3 · id via Wikipedia infobox

## Source summary

Inhibits norepinephrine reuptake, often alongside serotonin effects; blood pressure and discontinuation effects require attention.

## Mechanism

Monoamine transporter inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 173.26 | 1.86 | 12.03 | 1/1 | 0 | C12H15N |

**Targets (ChEMBL curated mechanisms):**

- [[Monoamine transporter (CHEMBL2363064)|Monoamine transporter]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Bicifadine*](https://en.wikipedia.org/w/index.php?title=Bicifadine&oldid=1338426412) (revision 1338426412, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.6 h | 1.6 hours |
| Excretion | mainly urinary | renal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Mazindol]] (Monoamine transporter), [[Tesofensine]] (Monoamine transporter)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
