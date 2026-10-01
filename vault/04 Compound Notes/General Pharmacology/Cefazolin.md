---
type: compound
schema-version: 2
compound-id: cefazolin-compound
name: Cefazolin
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
chembl-id: CHEMBL1435
chembl-max-phase: 4
half-life:
  value: 1.8
  value-max: null
  unit: h
  notes: 1.8 hours (given IV); 2 hours (given IM)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: NA
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: kidney, unchanged
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: '?'
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Cefazolin
  url: https://en.wikipedia.org/w/index.php?title=Cefazolin&oldid=1327396474
  revision: 1327396474
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1435
  pref-name: CEFAZOLIN
  molecule-type: Small molecule
  first-approval: 1973
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01DB04
  targets: []
  properties:
    full-mwt: 454.52
    mw-freebase: 454.52
    alogp: -0.64
    psa: 156.09
    hba: 12
    hbd: 2
    rtb: 7
    num-ro5-violations: 1
    qed-weighted: 0.41
    full-molformula: C14H14N8O4S3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 1dc9de56-e259-4546-a1db-23119a8a088e
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1dc9de56-e259-4546-a1db-23119a8a088e
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Cefazolin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cefazolin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1435](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1435/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

First-generation cephalosporin and the standard agent for surgical prophylaxis and for methicillin-sensitive Staphylococcus aureus bacteraemia, where it outperforms vancomycin.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1973
- **ATC J01DB04:** ANTIINFECTIVES FOR SYSTEMIC USE › OTHER BETA-LACTAM ANTIBACTERIALS › First-generation cephalosporins

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 454.52 | -0.64 | 156.09 | 2/12 | 1 | C14H14N8O4S3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cefazolin*](https://en.wikipedia.org/w/index.php?title=Cefazolin&oldid=1327396474) (revision 1327396474, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.8 h | 1.8 hours (given IV); 2 hours (given IM) |
| Bioavailability | - | NA |
| Metabolism | - | ? |
| Excretion | mainly urinary | kidney, unchanged |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 1dc9de56…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1dc9de56-e259-4546-a1db-23119a8a088e), label version 20260514. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1.8, 2)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
