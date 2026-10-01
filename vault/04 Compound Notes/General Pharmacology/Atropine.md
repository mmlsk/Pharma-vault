---
type: compound
schema-version: 2
compound-id: atropine-compound
name: Atropine
aliases: []
cluster: General Pharmacology
group: analgesia
class: null
subclass: null
mechanism: Muscarinic acetylcholine receptor M1 antagonist; Muscarinic acetylcholine receptor M2 antagonist; Muscarinic acetylcholine receptor M3 antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL517712
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: null
  unit: h
  notes: 2 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 25.0
  value-max: null
  notes: 25%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.5
  notes: 15–50% excreted unchanged in urine
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: ≥50% hydrolysed to tropine and tropic acid
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
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Atropine
  url: https://en.wikipedia.org/w/index.php?title=Atropine&oldid=1350610693
  revision: 1350610693
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL517712
  pref-name: ATROPINE
  molecule-type: Small molecule
  first-approval: 1960
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A03BA01
  - S01FA01
  targets:
  - id: CHEMBL245
    name: Muscarinic acetylcholine receptor M3
    action: ANTAGONIST
  - id: CHEMBL216
    name: Muscarinic acetylcholine receptor M1
    action: ANTAGONIST
  - id: CHEMBL211
    name: Muscarinic acetylcholine receptor M2
    action: ANTAGONIST
  properties:
    full-mwt: 289.38
    mw-freebase: 289.38
    alogp: 1.93
    psa: 49.77
    hba: 4
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.86
    full-molformula: C17H23NO3
pk-verification:
  source: fda-label
  status: discrepant
  set-id: e2d4307d-da8f-49f5-aac0-02355dd9ffb7
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e2d4307d-da8f-49f5-aac0-02355dd9ffb7
  checked: '2026-10-01'
  fields:
    half-life: discrepant
---

# Atropine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `atropine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL517712](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL517712/) · max phase 4 · id via Wikipedia infobox

## Source summary

The reference antimuscarinic, used for bradycardia, as an antisialagogue and as the antidote to organophosphate poisoning.

## Mechanism

Muscarinic acetylcholine receptor M1 antagonist; Muscarinic acetylcholine receptor M2 antagonist; Muscarinic acetylcholine receptor M3 antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1960
- **ATC A03BA01:** ALIMENTARY TRACT AND METABOLISM › BELLADONNA AND DERIVATIVES, PLAIN › Belladonna alkaloids, tertiary amines
- **ATC S01FA01:** SENSORY ORGANS › MYDRIATICS AND CYCLOPLEGICS › Anticholinergics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 289.38 | 1.93 | 49.77 | 1/4 | 0 | C17H23NO3 |

**Targets (ChEMBL curated mechanisms):**

- [[Muscarinic acetylcholine receptor M3 (CHEMBL245)|Muscarinic acetylcholine receptor M3]] - antagonist · SINGLE PROTEIN
- [[Muscarinic acetylcholine receptor M1 (CHEMBL216)|Muscarinic acetylcholine receptor M1]] - antagonist · SINGLE PROTEIN
- [[Muscarinic acetylcholine receptor M2 (CHEMBL211)|Muscarinic acetylcholine receptor M2]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Atropine*](https://en.wikipedia.org/w/index.php?title=Atropine&oldid=1350610693) (revision 1350610693, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 2 hours |
| Bioavailability | 25 % | 25% |
| Metabolism | - | ≥50% hydrolysed to tropine and tropic acid |
| Excretion | mainly urinary · fe 0.5 | 15–50% excreted unchanged in urine |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set e2d4307d…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e2d4307d-da8f-49f5-aac0-02355dd9ffb7), label version 20220915. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 0.333)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Talsaclidine]] (Muscarinic acetylcholine receptor M1; Muscarinic acetylcholine receptor M2; Muscarinic acetylcholine receptor M3), [[Oxybutynin]] (Muscarinic acetylcholine receptor M2; Muscarinic acetylcholine receptor M3), [[Pilocarpine]] (Muscarinic acetylcholine receptor M1; Muscarinic acetylcholine receptor M3), [[Hyoscine (Scopolamine)]] (Muscarinic acetylcholine receptor M1), [[Imidafenacin]] (Muscarinic acetylcholine receptor M3), [[Minaprine]] (Muscarinic acetylcholine receptor M1), [[Navafenterol]] (Muscarinic acetylcholine receptor M3), [[Tropicamide]] (Muscarinic acetylcholine receptor M3), [[Xanomeline]] (Muscarinic acetylcholine receptor M1)
- **Same ATC subgroup:** [[Cyclopentolate]], [[Hyoscine (Scopolamine)]], [[Tropicamide]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
- [[Cholinergic Load]]
