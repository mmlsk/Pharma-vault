---
type: compound
schema-version: 2
compound-id: vernakalant-compound
name: Vernakalant
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
chembl-id: CHEMBL2111112
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: 5.5
  unit: h
  notes: 3–5.5 hours
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: low
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP2D6, glucuronidation
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
- chembl-name-match
- identity-confirmed
- pk-ema-consistent
pk-source:
  type: wikipedia-infobox
  title: Vernakalant
  url: https://en.wikipedia.org/w/index.php?title=Vernakalant&oldid=1365682995
  revision: 1365682995
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL2111112
  pref-name: VERNAKALANT
  molecule-type: Small molecule
  first-approval: 2010
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C01BG11
  targets: []
  properties:
    full-mwt: 349.47
    mw-freebase: 349.47
    alogp: 2.64
    psa: 51.16
    hba: 5
    hbd: 1
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.82
    full-molformula: C20H31NO4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Brinavess
  ema-number: EMEA/H/C/001215
  url: https://www.ema.europa.eu/en/documents/product-information/brinavess-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Vernakalant

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `vernakalant-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL2111112](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2111112/) · max phase 4 · id via exact ChEMBL name match · structure check: ✅ InChIKey matches PubChem

## Source summary

Alters cardiac repolarization through potassium-channel effects; QT prolongation and torsades risk vary by agent.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2010
- **ATC C01BG11:** CARDIOVASCULAR SYSTEM › ANTIARRHYTHMICS, CLASS I AND III › Other antiarrhythmics, class I and III

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 349.47 | 2.64 | 51.16 | 1/5 | 0 | C20H31NO4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Vernakalant*](https://en.wikipedia.org/w/index.php?title=Vernakalant&oldid=1365682995) (revision 1365682995, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–5.5 h | 3–5.5 hours |
| Protein binding | - | low |
| Metabolism | hepatic | CYP2D6, glucuronidation |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Brinavess*](https://www.ema.europa.eu/en/documents/product-information/brinavess-epar-product-information_en.pdf) (EMEA/H/C/001215). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 3, 5.5)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Cibenzoline]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
