---
type: compound
schema-version: 2
compound-id: esomeprazole-compound
name: Esomeprazole
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
chembl-id: CHEMBL1201320
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: 1.5
  unit: h
  notes: 1–1.5 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 50.0
  value-max: 90.0
  notes: 50 to 90%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 80% Kidney; 20% Feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C19, CYP3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
pk-source:
  type: wikipedia-infobox
  title: Esomeprazole
  url: https://en.wikipedia.org/w/index.php?title=Esomeprazole&oldid=1363159768
  revision: 1363159768
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201320
  pref-name: ESOMEPRAZOLE
  molecule-type: Small molecule
  first-approval: 2001
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A02BC05
  targets: []
  properties:
    full-mwt: 345.42
    mw-freebase: 345.42
    alogp: 2.9
    psa: 83.09
    hba: 5
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.72
    full-molformula: C17H19N3O3S
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Esomeprazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `esomeprazole-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1201320](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201320/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits the gastric proton pump to suppress acid secretion; long-term use affects micronutrient and mineral absorption.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2001
- **Flags:** prodrug
- **ATC A02BC05:** ALIMENTARY TRACT AND METABOLISM › DRUGS FOR PEPTIC ULCER AND GASTRO-OESOPHAGEAL REFLUX DISEASE (GORD) › Proton pump inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 345.42 | 2.9 | 83.09 | 1/5 | 0 | C17H19N3O3S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Esomeprazole*](https://en.wikipedia.org/w/index.php?title=Esomeprazole&oldid=1363159768) (revision 1363159768, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–1.5 h | 1–1.5 hours |
| Bioavailability | 50–90 % | 50 to 90% |
| Metabolism | hepatic | Liver (CYP2C19, CYP3A4) |
| CYP (metabolised by) | CYP2C19, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | 80% Kidney; 20% Feces |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Dexlansoprazole]], [[Ilaprazole]], [[Lansoprazole]], [[Omeprazole]], [[Pantoprazole]], [[Rabeprazole]], [[Vonoprazan]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
