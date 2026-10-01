---
type: compound
schema-version: 2
compound-id: istradefylline-compound
name: Istradefylline
aliases: []
cluster: Nootropics
group: nootropic
class: null
subclass: null
mechanism: Adenosine A2a receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL431770
chembl-max-phase: 4
half-life:
  value: 64.0
  value-max: 69.0
  unit: h
  notes: 64–69 hrs
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 68% faeces, 18% urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Mainly CYP1A1, CYP3A4, and CYP3A5
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A1
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A1, CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- cns-activity
- evidence-limited
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/nootropic
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Istradefylline
  url: https://en.wikipedia.org/w/index.php?title=Istradefylline&oldid=1370506490
  revision: 1370506490
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL431770
  pref-name: ISTRADEFYLLINE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N04CX01
  targets:
  - id: CHEMBL251
    name: Adenosine receptor A2a
    action: ANTAGONIST
  properties:
    full-mwt: 384.44
    mw-freebase: 384.44
    alogp: 2.12
    psa: 80.28
    hba: 8
    hbd: 0
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.65
    full-molformula: C20H24N4O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: a7d008cb-b273-4049-a5d2-9c6902910d58
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a7d008cb-b273-4049-a5d2-9c6902910d58
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Istradefylline

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `istradefylline-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL431770](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL431770/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Selective adenosine A2A antagonist approved as adjunct therapy for Parkinson's OFF episodes — the only marketed drug in its class.

## Mechanism

Adenosine A2a receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC N04CX01:** NERVOUS SYSTEM › OTHER ANTIPARKINSON DRUGS › Other antiparkinson drugs

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 384.44 | 2.12 | 80.28 | 0/8 | 0 | C20H24N4O4 |

**Targets (ChEMBL curated mechanisms):**

- [[Adenosine receptor A2a (CHEMBL251)|Adenosine receptor A2a]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Istradefylline*](https://en.wikipedia.org/w/index.php?title=Istradefylline&oldid=1370506490) (revision 1370506490, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 64–69 h | 64–69 hrs |
| Protein binding | 98 % | 98% |
| Metabolism | hepatic | Mainly CYP1A1, CYP3A4, and CYP3A5 |
| CYP (metabolised by) | CYP1A1, CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Excretion | - | 68% faeces, 18% urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set a7d008cb…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a7d008cb-b273-4049-a5d2-9c6902910d58), label version 20250520. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 83)
> - protein-binding: consistent (label values: 98)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared CYP substrate pool:** CYP1A1 (+2 others), CYP3A4 (+204 others), CYP3A5 (+13 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
