---
type: compound
schema-version: 2
compound-id: argatroban-compound
name: Argatroban
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Thrombin inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1166
chembl-max-phase: 4
half-life:
  value: 51.0
  value-max: null
  unit: min
  notes: 39 and 51 minutes
protein-binding:
  value: 54.0
  value-max: null
  unit: percent
  notes: 54%
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (intravenous)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: hepatic
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Argatroban
  url: https://en.wikipedia.org/w/index.php?title=Argatroban&oldid=1329241737
  revision: 1329241737
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1166
  pref-name: ARGATROBAN
  molecule-type: Small molecule
  first-approval: 2000
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - B01AE03
  targets:
  - id: CHEMBL204
    name: Prothrombin
    action: INHIBITOR
  properties:
    full-mwt: 508.65
    mw-freebase: 508.65
    alogp: 0.91
    psa: 177.71
    hba: 6
    hbd: 6
    rtb: 9
    num-ro5-violations: 2
    qed-weighted: 0.16
    full-molformula: C23H36N6O5S
pk-verification:
  source: fda-label
  status: consistent
  set-id: 1a67a87d-59cb-414c-a11e-ab8f0a9bb778
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1a67a87d-59cb-414c-a11e-ab8f0a9bb778
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Argatroban

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `argatroban-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1166](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1166/) · max phase 4 · id via Wikipedia infobox

## Source summary

Intravenous direct thrombin inhibitor used especially in heparin-induced thrombocytopenia.

## Mechanism

Thrombin inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2000
- **ATC B01AE03:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Direct thrombin inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 508.65 | 0.91 | 177.71 | 6/6 | 2 | C23H36N6O5S |

**Targets (ChEMBL curated mechanisms):**

- [[Prothrombin (CHEMBL204)|Prothrombin]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Argatroban*](https://en.wikipedia.org/w/index.php?title=Argatroban&oldid=1329241737) (revision 1329241737, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 51 min | 39 and 51 minutes |
| Protein binding | 54 % | 54% |
| Bioavailability | 100 % | 100% (intravenous) |
| Metabolism | hepatic | hepatic |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 1a67a87d…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1a67a87d-59cb-414c-a11e-ab8f0a9bb778), label version 20260820. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.65, 0.85, 3.017)
> - protein-binding: consistent (label values: 20, 34, 54)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Antithrombin Alfa]] (Prothrombin), [[Dabigatran (Pradaxa)]] (Prothrombin), [[Desirudin]] (Prothrombin), [[Ichorcumab]] (Prothrombin), [[Lepirudin]] (Prothrombin), [[Ximelagatran]] (Prothrombin)
- **Same ATC subgroup:** [[Dabigatran Etexilate]], [[Desirudin]], [[Lepirudin]], [[Ximelagatran]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
