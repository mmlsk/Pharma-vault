---
type: compound
schema-version: 2
compound-id: dofetilide-compound
name: Dofetilide
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: HERG blocker
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL473
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: null
  unit: h
  notes: 10 hours
protein-binding:
  value: 60.0
  value-max: null
  unit: percent
  notes: 60% -70%
bioavailability:
  value: 96.0
  value-max: null
  notes: 96% (oral)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Dofetilide
  url: https://en.wikipedia.org/w/index.php?title=Dofetilide&oldid=1338403869
  revision: 1338403869
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL473
  pref-name: DOFETILIDE
  molecule-type: Small molecule
  first-approval: 1999
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C01BD04
  targets:
  - id: CHEMBL240
    name: Voltage-gated inwardly rectifying potassium channel KCNH2
    action: BLOCKER
  properties:
    full-mwt: 441.58
    mw-freebase: 441.58
    alogp: 1.98
    psa: 104.81
    hba: 6
    hbd: 2
    rtb: 11
    num-ro5-violations: 0
    qed-weighted: 0.55
    full-molformula: C19H27N3O5S2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 26de5f8c-8cec-46f6-a468-69451758a278
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=26de5f8c-8cec-46f6-a468-69451758a278
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Dofetilide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dofetilide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL473](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL473/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Alters cardiac repolarization through potassium-channel effects; QT prolongation and torsades risk vary by agent.

## Mechanism

HERG blocker _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1999
- **Flags:** black-box warning
- **ATC C01BD04:** CARDIOVASCULAR SYSTEM › ANTIARRHYTHMICS, CLASS I AND III › Antiarrhythmics, class III

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 441.58 | 1.98 | 104.81 | 2/6 | 0 | C19H27N3O5S2 |

**Targets (ChEMBL curated mechanisms):**

- [[Voltage-gated inwardly rectifying potassium channel KCNH2 (CHEMBL240)|Voltage-gated inwardly rectifying potassium channel KCNH2]] - blocker · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dofetilide*](https://en.wikipedia.org/w/index.php?title=Dofetilide&oldid=1338403869) (revision 1338403869, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10 h | 10 hours |
| Protein binding | 60 % | 60% -70% |
| Bioavailability | 96 % | 96% (oral) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 26de5f8c…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=26de5f8c-8cec-46f6-a468-69451758a278), label version 20260831. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 10, 48, 72)
> - protein-binding: consistent (label values: 60, 70)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Amiodarone]], [[Dronedarone]], [[Ibutilide]], [[Tedisamil]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
