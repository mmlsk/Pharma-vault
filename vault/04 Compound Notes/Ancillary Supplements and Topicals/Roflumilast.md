---
type: compound
schema-version: 2
compound-id: roflumilast-compound
name: Roflumilast
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
chembl-id: CHEMBL193240
chembl-max-phase: 4
half-life:
  value: 17.0
  value-max: null
  unit: h
  notes: 17 hours (30 hours [active metabolite])
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99%
bioavailability:
  value: 79.0
  value-max: null
  notes: 79%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (70%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic via CYP1A2 & CYP3A4
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- pk-fda-discrepant
- possible-duplicate
pk-source:
  type: wikipedia-infobox
  title: Roflumilast
  url: https://en.wikipedia.org/w/index.php?title=Roflumilast&oldid=1367341055
  revision: 1367341055
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL193240
  pref-name: ROFLUMILAST
  molecule-type: Small molecule
  first-approval: 2010
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - D05AX06
  - R03DX07
  targets:
  - id: CHEMBL2093863
    name: Phosphodiesterase 4
    action: INHIBITOR
  properties:
    full-mwt: 403.21
    mw-freebase: 403.21
    alogp: 5.03
    psa: 60.45
    hba: 4
    hbd: 1
    rtb: 7
    num-ro5-violations: 1
    qed-weighted: 0.7
    full-molformula: C17H14Cl2F2N2O3
pk-verification:
  source: fda-label
  status: discrepant
  set-id: f9e0b4a9-a227-4947-b00c-41fb18d16589
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f9e0b4a9-a227-4947-b00c-41fb18d16589
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
---

# Roflumilast

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `roflumilast-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL193240](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL193240/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits PDE4 to raise intracellular cAMP and dampen inflammatory cytokine production; emesis and weight loss are class-limiting.

## Mechanism

Phosphodiesterase 4 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2010
- **ATC D05AX06:** DERMATOLOGICALS › ANTIPSORIATICS FOR TOPICAL USE › Other antipsoriatics for topical use
- **ATC R03DX07:** RESPIRATORY SYSTEM › OTHER SYSTEMIC DRUGS FOR OBSTRUCTIVE AIRWAY DISEASES › Other systemic drugs for obstructive airway diseases

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 403.21 | 5.03 | 60.45 | 1/4 | 1 | C17H14Cl2F2N2O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Phosphodiesterase 4 (CHEMBL2093863)|Phosphodiesterase 4]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Roflumilast*](https://en.wikipedia.org/w/index.php?title=Roflumilast&oldid=1367341055) (revision 1367341055, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 17 h | 17 hours (30 hours [active metabolite]) |
| Protein binding | 99 % | 99% |
| Bioavailability | 79 % | 79% |
| Metabolism | hepatic | Hepatic via CYP1A2 & CYP3A4 |
| CYP (metabolised by) | CYP1A2, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine (70%) |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set f9e0b4a9…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f9e0b4a9-a227-4947-b00c-41fb18d16589), label version 20260902. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 86.4, 120)
> - protein-binding: consistent (label values: 97, 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- ⚠️ **Same molecule in ChEMBL (formulation variant or possible duplicate):** [[Roflumilast Foam (Zoryve)]], [[Roflumilast (topical)]]
- **Shared target:** [[Apremilast]] (Phosphodiesterase 4), [[Cilomilast]] (Phosphodiesterase 4), [[Crisaborole (topical 2% ointment, Eucrisa)]] (Phosphodiesterase 4), [[Difamilast]] (Phosphodiesterase 4), [[Ensifentrine (Ohtuvayre)]] (Phosphodiesterase 4), [[Ibudilast]] (Phosphodiesterase 4), [[Oglemilast]] (Phosphodiesterase 4), [[Roflumilast (topical)]] (Phosphodiesterase 4), [[Roflumilast Foam (Zoryve)]] (Phosphodiesterase 4), [[Rolipram]] (Phosphodiesterase 4), [[Tanimilast (CHF6001)]] (Phosphodiesterase 4), [[Tetomilast]] (Phosphodiesterase 4)
- **Same ATC subgroup:** [[Benralizumab]], [[Calcipotriene]], [[Calcitriol (1,25-dihydroxyvitamin D3)]], [[Mepolizumab]], [[Omalizumab (Xolair)]], [[Reslizumab]], [[Roflumilast (topical)]], [[Roflumilast Foam (Zoryve)]], [[Tapinarof]], [[Tazarotene (Tazorac)]], [[Tezepelumab]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
