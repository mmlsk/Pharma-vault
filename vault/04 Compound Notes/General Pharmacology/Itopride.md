---
type: compound
schema-version: 2
compound-id: itopride-compound
name: Itopride
aliases: []
cluster: General Pharmacology
group: gi
class: null
subclass: null
mechanism: Acetylcholinesterase inhibitor; Dopamine D2 receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2107457
chembl-max-phase: 3
half-life:
  value: 5.7
  value-max: null
  unit: h
  notes: 5.7±0.3 hours
protein-binding:
  value: 96.0
  value-max: null
  unit: percent
  notes: 96%
bioavailability:
  value: 60.0
  value-max: null
  notes: ~60% (Tmax = 35±5 min)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.041
  notes: Renal (3.7–4.1% as unchanged itopride, 75.4–89.4% as itopride-N-oxide)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Extensive hepatic (FMO1 and FMO3), primarily N-oxidation
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
- group/gi
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Itopride
  url: https://en.wikipedia.org/w/index.php?title=Itopride&oldid=1370506520
  revision: 1370506520
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL2107457
  pref-name: ITOPRIDE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A03FA07
  targets:
  - id: CHEMBL217
    name: D(2) dopamine receptor
    action: ANTAGONIST
  - id: CHEMBL220
    name: Acetylcholinesterase
    action: INHIBITOR
  properties:
    full-mwt: 358.44
    mw-freebase: 358.44
    alogp: 2.57
    psa: 60.03
    hba: 5
    hbd: 1
    rtb: 9
    num-ro5-violations: 0
    qed-weighted: 0.75
    full-molformula: C20H26N2O4
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Itopride

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `itopride-compound`
- **Source group:** Gastrointestinal & Hepatic (`gi`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL2107457](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2107457/) · max phase 3 · id via Wikipedia infobox

## Source summary

Prokinetic combining D2 antagonism with acetylcholinesterase inhibition, used in functional dyspepsia mainly in Asia.

## Mechanism

Acetylcholinesterase inhibitor; Dopamine D2 receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC A03FA07:** ALIMENTARY TRACT AND METABOLISM › PROPULSIVES › Propulsives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 358.44 | 2.57 | 60.03 | 1/5 | 0 | C20H26N2O4 |

**Targets (ChEMBL curated mechanisms):**

- [[D(2) dopamine receptor (CHEMBL217)|D(2) dopamine receptor]] - antagonist · SINGLE PROTEIN
- [[Acetylcholinesterase (CHEMBL220)|Acetylcholinesterase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Itopride*](https://en.wikipedia.org/w/index.php?title=Itopride&oldid=1370506520) (revision 1370506520, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5.7 h | 5.7±0.3 hours |
| Protein binding | 96 % | 96% |
| Bioavailability | 60 % | ~60% (Tmax = 35±5 min) |
| Metabolism | hepatic | Extensive hepatic (FMO1 and FMO3), primarily N-oxidation |
| Excretion | - · fe 0.041 | Renal (3.7–4.1% as unchanged itopride, 75.4–89.4% as itopride-N-oxide) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aripiprazole]] (D(2) dopamine receptor), [[Benperidol]] (D(2) dopamine receptor), [[Brexpiprazole]] (D(2) dopamine receptor), [[Cabergoline (Dostinex)]] (D(2) dopamine receptor), [[Clozapine]] (D(2) dopamine receptor), [[Distigmine]] (Acetylcholinesterase), [[Domperidone]] (D(2) dopamine receptor), [[Echothiophate]] (Acetylcholinesterase), [[Huperzine A]] (Acetylcholinesterase), [[Iloperidone]] (D(2) dopamine receptor), [[Isoflurophate]] (Acetylcholinesterase), [[Lumateperone]] (D(2) dopamine receptor)
- **Same ATC subgroup:** [[Acotiamide]], [[Cisapride]], [[Domperidone]], [[Metoclopramide]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[Cholinergic Load]]
