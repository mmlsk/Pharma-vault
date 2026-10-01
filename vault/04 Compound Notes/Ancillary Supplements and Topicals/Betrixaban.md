---
type: compound
schema-version: 2
compound-id: betrixaban-compound
name: Betrixaban
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Coagulation factor X inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL512351
chembl-max-phase: 4
half-life:
  value: 19.0
  value-max: 27.0
  unit: h
  notes: 19–27 hrs
protein-binding:
  value: 60.0
  value-max: null
  unit: percent
  notes: 60%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 85% feces, 11% urine
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
  title: Betrixaban
  url: https://en.wikipedia.org/w/index.php?title=Betrixaban&oldid=1329244165
  revision: 1329244165
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL512351
  pref-name: BETRIXABAN
  molecule-type: Small molecule
  first-approval: 2017
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - B01AF04
  targets:
  - id: CHEMBL244
    name: Coagulation factor X
    action: INHIBITOR
  properties:
    full-mwt: 451.91
    mw-freebase: 451.91
    alogp: 4.14
    psa: 107.41
    hba: 5
    hbd: 3
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.39
    full-molformula: C23H22ClN5O3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Betrixaban

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `betrixaban-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL512351](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL512351/) · max phase 4 · id via Wikipedia infobox

## Source summary

Directly inhibits factor Xa to reduce thrombin generation; renal clearance and reversal-agent availability differ by agent; marketing discontinued.

## Mechanism

Coagulation factor X inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2017
- **Flags:** black-box warning
- **ATC B01AF04:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Direct factor Xa inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 451.91 | 4.14 | 107.41 | 3/5 | 0 | C23H22ClN5O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Coagulation factor X (CHEMBL244)|Coagulation factor X]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Betrixaban*](https://en.wikipedia.org/w/index.php?title=Betrixaban&oldid=1329244165) (revision 1329244165, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 19–27 h | 19–27 hrs |
| Protein binding | 60 % | 60% |
| Excretion | - | 85% feces, 11% urine |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Antithrombin Alfa]] (Coagulation factor X), [[Apixaban (Eliquis)]] (Coagulation factor X), [[Darexaban]] (Coagulation factor X), [[Otamixaban]] (Coagulation factor X), [[Rivaroxaban (Xarelto)]] (Coagulation factor X)
- **Same ATC subgroup:** [[Apixaban (Eliquis)]], [[Edoxaban (Savaysa-Lixiana)|Edoxaban (Savaysa/Lixiana)]], [[Rivaroxaban (Xarelto)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
