---
type: compound
schema-version: 2
compound-id: fosamprenavir-compound
name: Fosamprenavir
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1664
chembl-max-phase: 4
half-life:
  value: 7.7
  value-max: null
  unit: h
  notes: 7.7 hours
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: 90%
bioavailability:
  value: null
  value-max: null
  notes: Unknown
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Fecal (as metabolites of amprenavir)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Hydrolysed to amprenavir and phosphate in GI tract epithelium
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Fosamprenavir
  url: https://en.wikipedia.org/w/index.php?title=Fosamprenavir&oldid=1368554406
  revision: 1368554406
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1664
  pref-name: FOSAMPRENAVIR
  molecule-type: Small molecule
  first-approval: 2003
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J05AE07
  targets: []
  properties:
    full-mwt: 585.62
    mw-freebase: 585.62
    alogp: 2.52
    psa: 177.72
    hba: 8
    hbd: 4
    rtb: 13
    num-ro5-violations: 1
    qed-weighted: 0.2
    full-molformula: C25H36N3O9PS
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Fosamprenavir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fosamprenavir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1664](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1664/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Phosphate ester prodrug of amprenavir, developed to reduce the enormous pill burden of the parent drug.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2003
- **Flags:** prodrug
- **ATC J05AE07:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Protease inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 585.62 | 2.52 | 177.72 | 4/8 | 1 | C25H36N3O9PS |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fosamprenavir*](https://en.wikipedia.org/w/index.php?title=Fosamprenavir&oldid=1368554406) (revision 1368554406, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7.7 h | 7.7 hours |
| Protein binding | 90 % | 90% |
| Bioavailability | - | Unknown |
| Metabolism | - | Hydrolysed to amprenavir and phosphate in GI tract epithelium |
| Excretion | mainly non-renal | Fecal (as metabolites of amprenavir) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Atazanavir]], [[Darunavir]], [[Ensitrelvir]], [[Ritonavir]], [[Saquinavir]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
