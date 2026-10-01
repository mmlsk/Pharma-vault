---
type: compound
schema-version: 2
compound-id: loperamide-compound
name: Loperamide
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
chembl-id: CHEMBL841
chembl-max-phase: 4
half-life:
  value: 9.0
  value-max: 14.0
  unit: h
  notes: 9–14 hours
protein-binding:
  value: 95.0
  value-max: 97.0
  unit: percent
  notes: ~95-97%
bioavailability:
  value: 1.0
  value-max: null
  notes: <1%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Feces (30–40%), urine (1%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (extensive)
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
  title: Loperamide
  url: https://en.wikipedia.org/w/index.php?title=Loperamide&oldid=1373298035
  revision: 1373298035
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL841
  pref-name: LOPERAMIDE
  molecule-type: Small molecule
  first-approval: 1976
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - A07DA03
  - A07DA53
  targets: []
  properties:
    full-mwt: 477.05
    mw-freebase: 477.05
    alogp: 5.09
    psa: 43.78
    hba: 3
    hbd: 1
    rtb: 7
    num-ro5-violations: 1
    qed-weighted: 0.52
    full-molformula: C29H33ClN2O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Loperamide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `loperamide-compound`
- **Source group:** Gastrointestinal & Hepatic (`gi`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL841](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL841/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Over-the-counter antidiarrhoeal that is a potent mu agonist kept out of the brain by P-glycoprotein, and cardiotoxic when that is defeated.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1976
- **Flags:** black-box warning
- **ATC A07DA03:** ALIMENTARY TRACT AND METABOLISM › ANTIPROPULSIVES › Antipropulsives
- **ATC A07DA53:** ALIMENTARY TRACT AND METABOLISM › ANTIPROPULSIVES › Antipropulsives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 477.05 | 5.09 | 43.78 | 1/3 | 1 | C29H33ClN2O2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Loperamide*](https://en.wikipedia.org/w/index.php?title=Loperamide&oldid=1373298035) (revision 1373298035, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9–14 h | 9–14 hours |
| Protein binding | 95–97 % | ~95-97% |
| Bioavailability | 1 % | <1% |
| Metabolism | hepatic | Liver (extensive) |
| Metabolites | - | N-Desmethyloperamide, Loperamide-N-oxide, Loperamide carbinolamide metabolite |
| Excretion | - | Feces (30–40%), urine (1%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Eluxadoline]], [[Morphine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
