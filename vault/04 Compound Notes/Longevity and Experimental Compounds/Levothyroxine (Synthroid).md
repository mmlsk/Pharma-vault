---
type: compound
schema-version: 2
compound-id: levothyroxine-compound
name: Levothyroxine (Synthroid)
aliases:
- Levothyroxine
- Synthroid
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1624
chembl-max-phase: 4
half-life:
  value: 7.0
  value-max: null
  unit: d
  notes: ca. 7 days (in hyperthyroidism 3–4 days, in hypothyroidism 9–10 days)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 40.0
  value-max: 80.0
  notes: 40-80%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Feces and urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Mainly in the liver, kidneys, brain, and muscles
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
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Levothyroxine
  url: https://en.wikipedia.org/w/index.php?title=Levothyroxine&oldid=1368685201
  revision: 1368685201
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1624
  pref-name: LEVOTHYROXINE
  molecule-type: Small molecule
  first-approval: 1982
  black-box-warning: true
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 776.87
    mw-freebase: 776.87
    alogp: 4.56
    psa: 92.78
    hba: 4
    hbd: 3
    rtb: 5
    num-ro5-violations: 1
    qed-weighted: 0.39
    full-molformula: C15H11I4NO4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Levothyroxine (Synthroid)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `levothyroxine-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Levothyroxine, Synthroid
- **ChEMBL:** [CHEMBL1624](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1624/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Synthetic T4 thyroid hormone, the standard hypothyroidism replacement therapy and a component of some fat-loss protocols.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1982
- **Flags:** black-box warning

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 776.87 | 4.56 | 92.78 | 3/4 | 1 | C15H11I4NO4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Levothyroxine*](https://en.wikipedia.org/w/index.php?title=Levothyroxine&oldid=1368685201) (revision 1368685201, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7 d | ca. 7 days (in hyperthyroidism 3–4 days, in hypothyroidism 9–10 days) |
| Bioavailability | 40–80 % | 40-80% |
| Metabolism | hepatic | Mainly in the liver, kidneys, brain, and muscles |
| Excretion | - | Feces and urine |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
