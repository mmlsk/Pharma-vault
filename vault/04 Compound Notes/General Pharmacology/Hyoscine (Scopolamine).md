---
type: compound
schema-version: 2
compound-id: scopolamine-compound
name: Hyoscine (Scopolamine)
aliases:
- Hyoscine
- Scopolamine
cluster: General Pharmacology
group: analgesia
class: null
subclass: null
mechanism: Muscarinic acetylcholine receptor M1 antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL569713
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: null
  unit: h
  notes: 5 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 20.0
  value-max: 40.0
  notes: 20-40%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4)
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
- sedation-respiratory-depression
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/analgesia
- stub
- pk-auto
- chembl-profile
- identity-stereo-check
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Scopolamine
  url: https://en.wikipedia.org/w/index.php?title=Scopolamine&oldid=1369150808
  revision: 1369150808
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL569713
  pref-name: SCOPOLAMINE
  molecule-type: Small molecule
  first-approval: 1979
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A04AD01
  - A04AD51
  - N05CM05
  - S01FA02
  targets:
  - id: CHEMBL216
    name: Muscarinic acetylcholine receptor M1
    action: ANTAGONIST
  properties:
    full-mwt: 303.36
    mw-freebase: 303.36
    alogp: 0.92
    psa: 62.3
    hba: 5
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.66
    full-molformula: C17H21NO4
  identity-check: connectivity-match
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 2a6f9aaf-a70a-481f-a82b-1dcaaadc185b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2a6f9aaf-a70a-481f-a82b-1dcaaadc185b
  checked: '2026-10-01'
  fields:
    half-life: discrepant
---

# Hyoscine (Scopolamine)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `scopolamine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **Aliases:** Hyoscine, Scopolamine
- **ChEMBL:** [CHEMBL569713](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL569713/) · max phase 4 · id via Wikipedia infobox · structure check: ⚠️ same skeleton, stereo/isotope layer differs

## Source summary

Tertiary antimuscarinic that crosses into the brain, used transdermally for motion sickness and historically as the standard amnesic model drug.

## Mechanism

Muscarinic acetylcholine receptor M1 antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1979
- **ATC A04AD01:** ALIMENTARY TRACT AND METABOLISM › ANTIEMETICS AND ANTINAUSEANTS › Other antiemetics
- **ATC A04AD51:** ALIMENTARY TRACT AND METABOLISM › ANTIEMETICS AND ANTINAUSEANTS › Other antiemetics
- **ATC N05CM05:** NERVOUS SYSTEM › HYPNOTICS AND SEDATIVES › Other hypnotics and sedatives
- **ATC S01FA02:** SENSORY ORGANS › MYDRIATICS AND CYCLOPLEGICS › Anticholinergics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 303.36 | 0.92 | 62.3 | 1/5 | 0 | C17H21NO4 |

**Targets (ChEMBL curated mechanisms):**

- [[Muscarinic acetylcholine receptor M1 (CHEMBL216)|Muscarinic acetylcholine receptor M1]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Scopolamine*](https://en.wikipedia.org/w/index.php?title=Scopolamine&oldid=1369150808) (revision 1369150808, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5 h | 5 hours |
| Bioavailability | 20–40 % | 20-40% |
| Metabolism | hepatic | Liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 2a6f9aaf…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2a6f9aaf-a70a-481f-a82b-1dcaaadc185b), label version 20260909. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 9.5)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Atropine]] (Muscarinic acetylcholine receptor M1), [[Minaprine]] (Muscarinic acetylcholine receptor M1), [[Pilocarpine]] (Muscarinic acetylcholine receptor M1), [[Talsaclidine]] (Muscarinic acetylcholine receptor M1), [[Xanomeline]] (Muscarinic acetylcholine receptor M1)
- **Same ATC subgroup:** [[Aprepitant]], [[Atropine]], [[Clomethiazole]], [[Cyclopentolate]], [[Dexmedetomidine]], [[Dronabinol]], [[Ethchlorvynol]], [[Methaqualone]], [[Propiomazine]], [[Rolapitant]], [[Triclofos]], [[Tropicamide]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
- [[Cholinergic Load]]
- [[CYP450 Metabolism]]
