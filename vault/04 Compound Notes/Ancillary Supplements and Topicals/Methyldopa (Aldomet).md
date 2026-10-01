---
type: compound
schema-version: 2
compound-id: methyldopa-compound
name: Methyldopa (Aldomet)
aliases:
- Methyldopa
- Aldomet
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Adrenergic receptor alpha-2 agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL459
chembl-max-phase: 4
half-life:
  value: 105.0
  value-max: null
  unit: min
  notes: 105 minutes
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 50.0
  value-max: null
  notes: ~50%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney for metabolites
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
  title: Methyldopa
  url: https://en.wikipedia.org/w/index.php?title=Methyldopa&oldid=1360767011
  revision: 1360767011
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL459
  pref-name: METHYLDOPA
  molecule-type: Small molecule
  first-approval: 1962
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C02AB01
  targets:
  - id: CHEMBL2095158
    name: Adrenergic receptor alpha-2
    action: AGONIST
  properties:
    full-mwt: 211.22
    mw-freebase: 211.22
    alogp: 0.44
    psa: 103.78
    hba: 4
    hbd: 4
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.54
    full-molformula: C10H13NO4
pk-verification:
  source: fda-label
  status: consistent
  set-id: 9e22e1d8-04ec-4b67-92ea-b09c706f2703
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=9e22e1d8-04ec-4b67-92ea-b09c706f2703
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Methyldopa (Aldomet)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `methyldopa-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Methyldopa, Aldomet
- **ChEMBL:** [CHEMBL459](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL459/) · max phase 4 · id via Wikipedia infobox

## Source summary

Centrally acting alpha-2 agonist prodrug from the 1960s, kept in use almost entirely for its pregnancy safety record.

## Mechanism

Adrenergic receptor alpha-2 agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1962
- **ATC C02AB01:** CARDIOVASCULAR SYSTEM › ANTIADRENERGIC AGENTS, CENTRALLY ACTING › Methyldopa

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 211.22 | 0.44 | 103.78 | 4/4 | 0 | C10H13NO4 |

**Targets (ChEMBL curated mechanisms):**

- [[Adrenergic receptor alpha-2 (CHEMBL2095158)|Adrenergic receptor alpha-2]] - agonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Methyldopa*](https://en.wikipedia.org/w/index.php?title=Methyldopa&oldid=1360767011) (revision 1360767011, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 105 min | 105 minutes |
| Bioavailability | 50 % | ~50% |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Kidney for metabolites |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 9e22e1d8…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=9e22e1d8-04ec-4b67-92ea-b09c706f2703), label version 20250328. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1.75)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Celiprolol]] (Adrenergic receptor alpha-2), [[Clonidine]] (Adrenergic receptor alpha-2), [[Idazoxan]] (Adrenergic receptor alpha-2), [[Mirtazapine]] (Adrenergic receptor alpha-2)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
