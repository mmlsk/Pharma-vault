---
type: compound
schema-version: 2
compound-id: vonoprazan-compound
name: Vonoprazan
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2079130
chembl-max-phase: 4
half-life:
  value: 7.7
  value-max: null
  unit: h
  notes: 7.7 h
protein-binding:
  value: 80.0
  value-max: null
  unit: percent
  notes: 80%
bioavailability:
  value: null
  value-max: null
  notes: Unknown
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, by cytochrome P450 (3A4, 2B6, 2C19, 2D6)
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
  title: Vonoprazan
  url: https://en.wikipedia.org/w/index.php?title=Vonoprazan&oldid=1337697053
  revision: 1337697053
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL2079130
  pref-name: VONOPRAZAN
  molecule-type: Small molecule
  first-approval: 2022
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A02BC08
  targets: []
  properties:
    full-mwt: 345.4
    mw-freebase: 345.4
    alogp: 2.65
    psa: 63.99
    hba: 5
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.77
    full-molformula: C17H16FN3O2S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Vonoprazan

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `vonoprazan-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL2079130](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2079130/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits the gastric proton pump to suppress acid secretion; long-term use affects micronutrient and mineral absorption; potassium-competitive acid blocker.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2022
- **ATC A02BC08:** ALIMENTARY TRACT AND METABOLISM › DRUGS FOR PEPTIC ULCER AND GASTRO-OESOPHAGEAL REFLUX DISEASE (GORD) › Proton pump inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 345.4 | 2.65 | 63.99 | 1/5 | 0 | C17H16FN3O2S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Vonoprazan*](https://en.wikipedia.org/w/index.php?title=Vonoprazan&oldid=1337697053) (revision 1337697053, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7.7 h | 7.7 h |
| Protein binding | 80 % | 80% |
| Bioavailability | - | Unknown |
| Metabolism | hepatic | Liver, by cytochrome P450 (3A4, 2B6, 2C19, 2D6) |
| Excretion | mainly urinary | Kidney |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Dexlansoprazole]], [[Esomeprazole]], [[Ilaprazole]], [[Lansoprazole]], [[Omeprazole]], [[Pantoprazole]], [[Rabeprazole]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
