---
type: compound
schema-version: 2
compound-id: rilpivirine-compound
name: Rilpivirine
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
chembl-id: CHEMBL175691
chembl-max-phase: 4
half-life:
  value: 45.0
  value-max: null
  unit: h
  notes: 'tablets: 45 hours; injection: 13–28 weeks'
protein-binding:
  value: 99.7
  value-max: null
  unit: percent
  notes: 99.7%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 85% via faeces, 6% via urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4
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
  title: Rilpivirine
  url: https://en.wikipedia.org/w/index.php?title=Rilpivirine&oldid=1367291504
  revision: 1367291504
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL175691
  pref-name: RILPIVIRINE
  molecule-type: Small molecule
  first-approval: 2011
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J05AG05
  targets:
  - id: CHEMBL247
    name: Human immunodeficiency virus type 1 reverse transcriptase
    action: INHIBITOR
  properties:
    full-mwt: 366.43
    mw-freebase: 366.43
    alogp: 4.99
    psa: 97.42
    hba: 6
    hbd: 2
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.62
    full-molformula: C22H18N6
pk-verification:
  source: fda-label
  status: consistent
  set-id: dadbf50d-6b7d-4fb5-bd9f-7769b048e764
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=dadbf50d-6b7d-4fb5-bd9f-7769b048e764
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Rilpivirine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rilpivirine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL175691](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL175691/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits HIV reverse transcriptase and is used only as part of a resistance-aware antiretroviral regimen.

## Mechanism

Human immunodeficiency virus type 1 reverse transcriptase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2011
- **ATC J05AG05:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Non-nucleoside reverse transcriptase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 366.43 | 4.99 | 97.42 | 2/6 | 0 | C22H18N6 |

**Targets (ChEMBL curated mechanisms):**

- [[Human immunodeficiency virus type 1 reverse transcriptase (CHEMBL247)|Human immunodeficiency virus type 1 reverse transcriptase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rilpivirine*](https://en.wikipedia.org/w/index.php?title=Rilpivirine&oldid=1367291504) (revision 1367291504, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 45 h | tablets: 45 hours; injection: 13–28 weeks |
| Protein binding | 99.7 % | 99.7% |
| Metabolism | hepatic | CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | 85% via faeces, 6% via urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set dadbf50d…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=dadbf50d-6b7d-4fb5-bd9f-7769b048e764), label version 20260715. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 50)
> - protein-binding: consistent (label values: 99, 99.7)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Doravirine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Efavirenz]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Emtricitabine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Etravirine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Islatravir]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Lamivudine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Nevirapine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Tenofovir Alafenamide]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Zidovudine]] (Human immunodeficiency virus type 1 reverse transcriptase)
- **Same ATC subgroup:** [[Doravirine]], [[Efavirenz]], [[Etravirine]], [[Nevirapine]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
