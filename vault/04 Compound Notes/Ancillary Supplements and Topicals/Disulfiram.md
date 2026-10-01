---
type: compound
schema-version: 2
compound-id: disulfiram-compound
name: Disulfiram
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Aldehyde dehydrogenase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL964
chembl-max-phase: 4
half-life:
  value: 7.3
  value-max: null
  unit: h
  notes: 7.3 +/-1.5 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: In Liver to diethylthiocarbamate
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
- group/ancillary
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Disulfiram
  url: https://en.wikipedia.org/w/index.php?title=Disulfiram&oldid=1369701892
  revision: 1369701892
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL964
  pref-name: DISULFIRAM
  molecule-type: Small molecule
  first-approval: 1951
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N07BB01
  - P03AA04
  - P03AA54
  targets:
  - id: CHEMBL1935
    name: Aldehyde dehydrogenase, mitochondrial
    action: INHIBITOR
  properties:
    full-mwt: 296.55
    mw-freebase: 296.55
    alogp: 3.62
    psa: 6.48
    hba: 4
    hbd: 0
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.57
    full-molformula: C10H20N2S4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: d3832a1a-a140-49c1-a7df-134fa81341e3
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d3832a1a-a140-49c1-a7df-134fa81341e3
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Disulfiram

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `disulfiram-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL964](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL964/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Alcohol deterrent that works by making drinking acutely unpleasant rather than by reducing craving.

## Mechanism

Aldehyde dehydrogenase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1951
- **Flags:** black-box warning
- **ATC N07BB01:** NERVOUS SYSTEM › DRUGS USED IN ADDICTIVE DISORDERS › Drugs used in alcohol dependence
- **ATC P03AA04:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › ECTOPARASITICIDES, INCL. SCABICIDES › Sulfur containing products
- **ATC P03AA54:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › ECTOPARASITICIDES, INCL. SCABICIDES › Sulfur containing products

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 296.55 | 3.62 | 6.48 | 0/4 | 0 | C10H20N2S4 |

**Targets (ChEMBL curated mechanisms):**

- [[Aldehyde dehydrogenase, mitochondrial (CHEMBL1935)|Aldehyde dehydrogenase, mitochondrial]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Disulfiram*](https://en.wikipedia.org/w/index.php?title=Disulfiram&oldid=1369701892) (revision 1369701892, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7.3 h | 7.3 +/-1.5 hours |
| Metabolism | hepatic | In Liver to diethylthiocarbamate |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set d3832a1a…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d3832a1a-a140-49c1-a7df-134fa81341e3), label version 20260527. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Acamprosate]], [[Nalmefene]], [[Naltrexone]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
