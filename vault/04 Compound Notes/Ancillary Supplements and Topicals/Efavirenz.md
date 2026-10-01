---
type: compound
schema-version: 2
compound-id: efavirenz-compound
name: Efavirenz
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Human immunodeficiency virus type 1 reverse transcriptase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL223228
chembl-max-phase: 4
half-life:
  value: 52.0
  value-max: 76.0
  unit: h
  notes: 'Single-dose: 52–76 h; Multi-dose: 40–55 h'
protein-binding:
  value: 99.5
  value-max: 99.75
  unit: percent
  notes: 99.5–99.75%
bioavailability:
  value: 40.0
  value-max: 45.0
  notes: 40–45% (under fasting conditions)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney (14–34%) and feces (16–61%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2A6 and CYP2B6-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2A6
  - CYP2B6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2A6, CYP2B6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Efavirenz
  url: https://en.wikipedia.org/w/index.php?title=Efavirenz&oldid=1373477952
  revision: 1373477952
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL223228
  pref-name: EFAVIRENZ
  molecule-type: Small molecule
  first-approval: 1998
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J05AG03
  targets:
  - id: CHEMBL247
    name: Human immunodeficiency virus type 1 reverse transcriptase
    action: INHIBITOR
  properties:
    full-mwt: 315.68
    mw-freebase: 315.68
    alogp: 4.07
    psa: 38.33
    hba: 2
    hbd: 1
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.73
    full-molformula: C14H9ClF3NO2
pk-verification:
  source: fda-label
  status: consistent
  set-id: 13ca3456-e5bf-4bb1-af95-b1378658a358
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=13ca3456-e5bf-4bb1-af95-b1378658a358
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Efavirenz

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `efavirenz-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL223228](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL223228/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits HIV reverse transcriptase and is used only as part of a resistance-aware antiretroviral regimen.

## Mechanism

Human immunodeficiency virus type 1 reverse transcriptase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1998
- **ATC J05AG03:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Non-nucleoside reverse transcriptase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 315.68 | 4.07 | 38.33 | 1/2 | 0 | C14H9ClF3NO2 |

**Targets (ChEMBL curated mechanisms):**

- [[Human immunodeficiency virus type 1 reverse transcriptase (CHEMBL247)|Human immunodeficiency virus type 1 reverse transcriptase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Efavirenz*](https://en.wikipedia.org/w/index.php?title=Efavirenz&oldid=1373477952) (revision 1373477952, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 52–76 h | Single-dose: 52–76 h; Multi-dose: 40–55 h |
| Protein binding | 99.5–99.75 % | 99.5–99.75% |
| Bioavailability | 40–45 % | 40–45% (under fasting conditions) |
| Metabolism | hepatic | Liver (CYP2A6 and CYP2B6-mediated) |
| CYP (metabolised by) | CYP2A6, CYP2B6 | roles as inhibitor/inducer not assessed |
| Excretion | - | Kidney (14–34%) and feces (16–61%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 13ca3456…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=13ca3456-e5bf-4bb1-af95-b1378658a358), label version 20240628. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 40, 52, 55, 76, 240)
> - protein-binding: consistent (label values: 99.5, 99.75)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Doravirine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Emtricitabine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Etravirine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Islatravir]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Lamivudine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Nevirapine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Rilpivirine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Tenofovir Alafenamide]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Zidovudine]] (Human immunodeficiency virus type 1 reverse transcriptase)
- **Same ATC subgroup:** [[Doravirine]], [[Etravirine]], [[Nevirapine]], [[Rilpivirine]]
- **Shared CYP substrate pool:** CYP2A6 (+4 others), CYP2B6 (+12 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
