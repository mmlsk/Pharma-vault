---
type: compound
schema-version: 2
compound-id: levomilnacipran-compound
name: Levomilnacipran
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
chembl-id: CHEMBL99946
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: null
  unit: h
  notes: 12 hours
protein-binding:
  value: 22.0
  value-max: null
  unit: percent
  notes: 22%
bioavailability:
  value: 92.0
  value-max: null
  notes: 92%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (primarily by CYP3A4)
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
- chembl-name-match
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Levomilnacipran
  url: https://en.wikipedia.org/w/index.php?title=Levomilnacipran&oldid=1373241809
  revision: 1373241809
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL99946
  pref-name: LEVOMILNACIPRAN
  molecule-type: Small molecule
  first-approval: 2013
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06AX28
  targets: []
  properties:
    full-mwt: 246.35
    mw-freebase: 246.35
    alogp: 1.77
    psa: 46.33
    hba: 2
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.86
    full-molformula: C15H22N2O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Levomilnacipran

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `levomilnacipran-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL99946](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL99946/) · max phase 4 · id via exact ChEMBL name match · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits norepinephrine reuptake, often alongside serotonin effects; blood pressure and discontinuation effects require attention.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2013
- **Flags:** black-box warning
- **ATC N06AX28:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Other antidepressants

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 246.35 | 1.77 | 46.33 | 1/2 | 0 | C15H22N2O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Levomilnacipran*](https://en.wikipedia.org/w/index.php?title=Levomilnacipran&oldid=1373241809) (revision 1373241809, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12 h | 12 hours |
| Protein binding | 22 % | 22% |
| Bioavailability | 92 % | 92% |
| Metabolism | hepatic | Liver (primarily by CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Agomelatine (Valdoxan)]], [[Brexanolone]], [[Bupropion (Wellbutrin)]], [[Desvenlafaxine]], [[Duloxetine (Cymbalta)]], [[Esketamine (Spravato)]], [[Minaprine]], [[Mirtazapine]], [[Nefazodone]], [[Tianeptine]], [[Trazodone (Desyrel)]], [[Venlafaxine (Effexor)]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
