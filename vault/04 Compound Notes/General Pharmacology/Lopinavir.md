---
type: compound
schema-version: 2
compound-id: lopinavir-compound
name: Lopinavir
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Human immunodeficiency virus type 1 protease inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL729
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 6.0
  unit: h
  notes: 5 to 6 hours
protein-binding:
  value: 98.0
  value-max: 99.0
  unit: percent
  notes: 98-99%
bioavailability:
  value: null
  value-max: null
  notes: Unknown
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Mostly fecal
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
- cyp-interactions
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Lopinavir
  url: https://en.wikipedia.org/w/index.php?title=Lopinavir&oldid=1359319611
  revision: 1359319611
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL729
  pref-name: LOPINAVIR
  molecule-type: Small molecule
  first-approval: 2000
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL243
    name: Human immunodeficiency virus type 1 protease
    action: INHIBITOR
  properties:
    full-mwt: 628.81
    mw-freebase: 628.81
    alogp: 4.33
    psa: 120.0
    hba: 5
    hbd: 4
    rtb: 15
    num-ro5-violations: 1
    qed-weighted: 0.2
    full-molformula: C37H48N4O5
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Lopinavir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lopinavir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL729](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL729/) · max phase 4 · id via Wikipedia infobox

## Source summary

HIV protease inhibitor available only co-formulated with ritonavir, which is why the combination product is dosed as one drug.

## Mechanism

Human immunodeficiency virus type 1 protease inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2000

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 628.81 | 4.33 | 120.0 | 4/5 | 1 | C37H48N4O5 |

**Targets (ChEMBL curated mechanisms):**

- [[Human immunodeficiency virus type 1 protease (CHEMBL243)|Human immunodeficiency virus type 1 protease]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lopinavir*](https://en.wikipedia.org/w/index.php?title=Lopinavir&oldid=1359319611) (revision 1359319611, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–6 h | 5 to 6 hours |
| Protein binding | 98–99 % | 98-99% |
| Bioavailability | - | Unknown |
| Metabolism | hepatic | Liver |
| Excretion | - | Mostly fecal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Darunavir]] (Human immunodeficiency virus type 1 protease), [[Ritonavir]] (Human immunodeficiency virus type 1 protease), [[Saquinavir]] (Human immunodeficiency virus type 1 protease)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
