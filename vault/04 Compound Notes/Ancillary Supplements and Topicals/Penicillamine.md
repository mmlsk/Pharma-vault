---
type: compound
schema-version: 2
compound-id: penicillamine-compound
name: Penicillamine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Copper chelating agent
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1430
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: null
  unit: h
  notes: 1 hour
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: Variable
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Penicillamine
  url: https://en.wikipedia.org/w/index.php?title=Penicillamine&oldid=1374815367
  revision: 1374815367
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1430
  pref-name: PENICILLAMINE
  molecule-type: Small molecule
  first-approval: 1970
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - M01CC01
  targets:
  - id: CHEMBL2363057
    name: Copper
    action: CHELATING AGENT
  properties:
    full-mwt: 149.21
    mw-freebase: 149.21
    alogp: 0.11
    psa: 63.32
    hba: 3
    hbd: 3
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.49
    full-molformula: C5H11NO2S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 1320f46b-e243-4e93-b9c9-ad8eb7828de5
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1320f46b-e243-4e93-b9c9-ad8eb7828de5
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Penicillamine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `penicillamine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1430](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1430/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Chelator for Wilson disease and cystinuria, also used historically in rheumatoid arthritis, with a long list of autoimmune adverse effects.

## Mechanism

Copper chelating agent _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1970
- **Flags:** black-box warning
- **ATC M01CC01:** MUSCULO-SKELETAL SYSTEM › SPECIFIC ANTIRHEUMATIC AGENTS › Penicillamine and similar agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 149.21 | 0.11 | 63.32 | 3/3 | 0 | C5H11NO2S |

**Targets (ChEMBL curated mechanisms):**

- [[Copper (CHEMBL2363057)|Copper]] - chelating agent · METAL

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Penicillamine*](https://en.wikipedia.org/w/index.php?title=Penicillamine&oldid=1374815367) (revision 1374815367, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1 h | 1 hour |
| Bioavailability | - | Variable |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Kidney |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 1320f46b…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1320f46b-e243-4e93-b9c9-ad8eb7828de5), label version 20260814. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
