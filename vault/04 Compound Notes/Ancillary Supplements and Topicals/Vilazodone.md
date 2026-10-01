---
type: compound
schema-version: 2
compound-id: vilazodone-compound
name: Vilazodone
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL439849
chembl-max-phase: 4
half-life:
  value: 25.0
  value-max: null
  unit: h
  notes: 25 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 72.0
  value-max: null
  notes: 72% (oral, with food)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Faecal and renal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver via CYP3A4
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Vilazodone
  url: https://en.wikipedia.org/w/index.php?title=Vilazodone&oldid=1356260930
  revision: 1356260930
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL439849
  pref-name: VILAZODONE
  molecule-type: Small molecule
  first-approval: 2011
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06AX24
  targets: []
  properties:
    full-mwt: 441.54
    mw-freebase: 441.54
    alogp: 4.03
    psa: 102.29
    hba: 5
    hbd: 2
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.42
    full-molformula: C26H27N5O2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Vilazodone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `vilazodone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL439849](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL439849/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits serotonin reuptake through SERT; benefits, activation, sexual effects, and withdrawal profiles differ by agent.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2011
- **Flags:** black-box warning
- **ATC N06AX24:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Other antidepressants

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 441.54 | 4.03 | 102.29 | 2/5 | 0 | C26H27N5O2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Vilazodone*](https://en.wikipedia.org/w/index.php?title=Vilazodone&oldid=1356260930) (revision 1356260930, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 25 h | 25 hours |
| Bioavailability | 72 % | 72% (oral, with food) |
| Metabolism | hepatic | Liver via CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Faecal and renal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Agomelatine (Valdoxan)]], [[Brexanolone]], [[Bupropion (Wellbutrin)]], [[Desvenlafaxine]], [[Duloxetine (Cymbalta)]], [[Esketamine (Spravato)]], [[Levomilnacipran]], [[Minaprine]], [[Mirtazapine]], [[Nefazodone]], [[Tianeptine]], [[Trazodone (Desyrel)]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
