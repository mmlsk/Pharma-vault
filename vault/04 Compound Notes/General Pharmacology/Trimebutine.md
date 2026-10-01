---
type: compound
schema-version: 2
compound-id: trimebutine-compound
name: Trimebutine
aliases: []
cluster: General Pharmacology
group: gi
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL190044
chembl-max-phase: 3
half-life:
  value: 2.77
  value-max: null
  unit: h
  notes: 2.77 h (for oral dose 200 mg)
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: renal, fecal
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/gi
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Trimebutine
  url: https://en.wikipedia.org/w/index.php?title=Trimebutine&oldid=1374092334
  revision: 1374092334
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL190044
  pref-name: TRIMEBUTINE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A03AA05
  targets: []
  properties:
    full-mwt: 387.48
    mw-freebase: 387.48
    alogp: 3.74
    psa: 57.23
    hba: 6
    hbd: 0
    rtb: 9
    num-ro5-violations: 0
    qed-weighted: 0.61
    full-molformula: C22H29NO5
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Trimebutine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `trimebutine-compound`
- **Source group:** Gastrointestinal & Hepatic (`gi`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL190044](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL190044/) · max phase 3 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Peripheral opioid receptor modulator used for irritable bowel syndrome, normalising motility in either direction.

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC A03AA05:** ALIMENTARY TRACT AND METABOLISM › DRUGS FOR FUNCTIONAL GASTROINTESTINAL DISORDERS › Synthetic anticholinergics, esters with tertiary amino group

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 387.48 | 3.74 | 57.23 | 0/6 | 0 | C22H29NO5 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Trimebutine*](https://en.wikipedia.org/w/index.php?title=Trimebutine&oldid=1374092334) (revision 1374092334, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.77 h | 2.77 h (for oral dose 200 mg) |
| Metabolites | - | nortrimebutine, N-didesmethyltrimebutine, 2-dimethylamino-2-phenylbutan-1-ol, 2-methylamino-2-phenylbutan-1-ol, 2-amino-2-phenylbutan-1-ol |
| Excretion | - | renal, fecal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
