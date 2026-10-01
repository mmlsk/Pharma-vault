---
type: compound
schema-version: 2
compound-id: rolipram-compound
name: Rolipram
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Phosphodiesterase 4 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL63
chembl-max-phase: 2
half-life:
  value: 3.0
  value-max: null
  unit: h
  notes: 3 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 75.0
  value-max: null
  notes: 75%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (80%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver via CYP2C8, CYP2C9, CYP2C19 and CYP2D6
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP2C8
  - CYP2C9
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP2C8, CYP2C9, CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Rolipram
  url: https://en.wikipedia.org/w/index.php?title=Rolipram&oldid=1329367371
  revision: 1329367371
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL63
  pref-name: ROLIPRAM
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL2093863
    name: Phosphodiesterase 4
    action: INHIBITOR
  properties:
    full-mwt: 275.35
    mw-freebase: 275.35
    alogp: 2.62
    psa: 47.56
    hba: 3
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.92
    full-molformula: C16H21NO3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Rolipram

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rolipram-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL63](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL63/) · max phase 2 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits PDE4 to raise intracellular cAMP and dampen inflammatory cytokine production; emesis and weight loss are class-limiting; research tool compound, never marketed.

## Mechanism

Phosphodiesterase 4 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 275.35 | 2.62 | 47.56 | 1/3 | 0 | C16H21NO3 |

**Targets (ChEMBL curated mechanisms):**

- [[Phosphodiesterase 4 (CHEMBL2093863)|Phosphodiesterase 4]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rolipram*](https://en.wikipedia.org/w/index.php?title=Rolipram&oldid=1329367371) (revision 1329367371, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3 h | 3 hours |
| Bioavailability | 75 % | 75% |
| Metabolism | hepatic | Liver via CYP2C8, CYP2C9, CYP2C19 and CYP2D6 |
| CYP (metabolised by) | CYP2C19, CYP2C8, CYP2C9, CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine (80%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Apremilast]] (Phosphodiesterase 4), [[Cilomilast]] (Phosphodiesterase 4), [[Crisaborole (topical 2% ointment, Eucrisa)]] (Phosphodiesterase 4), [[Difamilast]] (Phosphodiesterase 4), [[Ensifentrine (Ohtuvayre)]] (Phosphodiesterase 4), [[Ibudilast]] (Phosphodiesterase 4), [[Oglemilast]] (Phosphodiesterase 4), [[Roflumilast]] (Phosphodiesterase 4), [[Roflumilast (topical)]] (Phosphodiesterase 4), [[Roflumilast Foam (Zoryve)]] (Phosphodiesterase 4), [[Tanimilast (CHF6001)]] (Phosphodiesterase 4), [[Tetomilast]] (Phosphodiesterase 4)
- **Shared CYP substrate pool:** CYP2C19 (+43 others), CYP2C8 (+15 others), CYP2C9 (+40 others), CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
