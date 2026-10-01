---
type: compound
schema-version: 2
compound-id: gabapentin-compound
name: Gabapentin
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Voltage-gated calcium channel modulator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL940
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 7.0
  unit: h
  notes: 5 to 7 hours
protein-binding:
  value: 3.0
  value-max: null
  unit: percent
  notes: Less than 3%
bioavailability:
  value: 27.0
  value-max: 60.0
  notes: 27–60% (inversely proportional to dose; a high-fat meal also increases bioavailability)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Not significantly metabolized
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
- cns-activity
- serotonergic-or-dopaminergic-load
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/neuropsych
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Gabapentin
  url: https://en.wikipedia.org/w/index.php?title=Gabapentin&oldid=1375500408
  revision: 1375500408
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL940
  pref-name: GABAPENTIN
  molecule-type: Small molecule
  first-approval: 1993
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N02BF01
  targets:
  - id: CHEMBL2363032
    name: Voltage-gated calcium channel
    action: MODULATOR
  properties:
    full-mwt: 171.24
    mw-freebase: 171.24
    alogp: 1.37
    psa: 63.32
    hba: 2
    hbd: 2
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.67
    full-molformula: C9H17NO2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 4a975ebe-ae0a-446a-8a3d-2ca325e28f93
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4a975ebe-ae0a-446a-8a3d-2ca325e28f93
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Gabapentin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `gabapentin-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL940](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL940/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Alpha-2-delta ligand used far more for neuropathic pain than for epilepsy, with saturable absorption that caps its dose-response.

## Mechanism

Voltage-gated calcium channel modulator _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1993
- **ATC N02BF01:** NERVOUS SYSTEM › OTHER ANALGESICS AND ANTIPYRETICS › Gabapentinoids

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 171.24 | 1.37 | 63.32 | 2/2 | 0 | C9H17NO2 |

**Targets (ChEMBL curated mechanisms):**

- [[Voltage-gated calcium channel (CHEMBL2363032)|Voltage-gated calcium channel]] - modulator · PROTEIN COMPLEX GROUP

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Gabapentin*](https://en.wikipedia.org/w/index.php?title=Gabapentin&oldid=1375500408) (revision 1375500408, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–7 h | 5 to 7 hours |
| Protein binding | 3 % | Less than 3% |
| Bioavailability | 27–60 % | 27–60% (inversely proportional to dose; a high-fat meal also increases bioavailability) |
| Metabolism | - | Not significantly metabolized |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 4a975ebe…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4a975ebe-ae0a-446a-8a3d-2ca325e28f93), label version 20260911. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 3.8, 4.7, 5, 6.5, 7, 52)
> - protein-binding: consistent (label values: 3)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Pregabalin]] (Voltage-gated calcium channel)
- **Same ATC subgroup:** [[Pregabalin]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
