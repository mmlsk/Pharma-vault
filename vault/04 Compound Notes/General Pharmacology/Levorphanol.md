---
type: compound
schema-version: 2
compound-id: levorphanol-compound
name: Levorphanol
aliases: []
cluster: General Pharmacology
group: analgesia
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL592
chembl-max-phase: 4
half-life:
  value: 11.0
  value-max: 16.0
  unit: h
  notes: 11–16 hours
protein-binding:
  value: 40.0
  value-max: null
  unit: percent
  notes: 40%
bioavailability:
  value: 70.0
  value-max: null
  notes: 70% (oral); 100% (IV)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Levorphanol
  url: https://en.wikipedia.org/w/index.php?title=Levorphanol&oldid=1367552325
  revision: 1367552325
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL592
  pref-name: LEVORPHANOL
  molecule-type: Small molecule
  first-approval: 1991
  black-box-warning: true
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 257.38
    mw-freebase: 257.38
    alogp: 3.08
    psa: 23.47
    hba: 2
    hbd: 1
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.77
    full-molformula: C17H23NO
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Levorphanol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `levorphanol-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL592](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL592/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Long-acting morphinan opioid with NMDA antagonism and monoamine reuptake inhibition, sometimes described as an oral methadone alternative.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1991
- **Flags:** black-box warning

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 257.38 | 3.08 | 23.47 | 1/2 | 0 | C17H23NO |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Levorphanol*](https://en.wikipedia.org/w/index.php?title=Levorphanol&oldid=1367552325) (revision 1367552325, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 11–16 h | 11–16 hours |
| Protein binding | 40 % | 40% |
| Bioavailability | 70 % | 70% (oral); 100% (IV) |
| Metabolism | hepatic | Hepatic |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
