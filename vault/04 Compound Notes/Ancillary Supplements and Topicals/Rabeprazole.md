---
type: compound
schema-version: 2
compound-id: rabeprazole-compound
name: Rabeprazole
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
chembl-id: CHEMBL1219
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: null
  unit: h
  notes: ~1 hour
protein-binding:
  value: 96.3
  value-max: null
  unit: percent
  notes: 96.3%
bioavailability:
  value: 52.0
  value-max: null
  notes: 52%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 90% via kidney as metabolites
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP2C19 and CYP3A4 in the liver
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Rabeprazole
  url: https://en.wikipedia.org/w/index.php?title=Rabeprazole&oldid=1328910438
  revision: 1328910438
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1219
  pref-name: RABEPRAZOLE
  molecule-type: Small molecule
  first-approval: 1999
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A02BC04
  - A02BC54
  targets: []
  properties:
    full-mwt: 359.45
    mw-freebase: 359.45
    alogp: 2.99
    psa: 83.09
    hba: 5
    hbd: 1
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.49
    full-molformula: C18H21N3O3S
pk-verification:
  source: fda-label
  status: consistent
  set-id: 951caefe-6e18-48ff-9567-beb545b09c25
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=951caefe-6e18-48ff-9567-beb545b09c25
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Rabeprazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rabeprazole-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1219](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1219/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits the gastric proton pump to suppress acid secretion; long-term use affects micronutrient and mineral absorption.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1999
- **ATC A02BC04:** ALIMENTARY TRACT AND METABOLISM › DRUGS FOR PEPTIC ULCER AND GASTRO-OESOPHAGEAL REFLUX DISEASE (GORD) › Proton pump inhibitors
- **ATC A02BC54:** ALIMENTARY TRACT AND METABOLISM › DRUGS FOR PEPTIC ULCER AND GASTRO-OESOPHAGEAL REFLUX DISEASE (GORD) › Proton pump inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 359.45 | 2.99 | 83.09 | 1/5 | 0 | C18H21N3O3S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rabeprazole*](https://en.wikipedia.org/w/index.php?title=Rabeprazole&oldid=1328910438) (revision 1328910438, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1 h | ~1 hour |
| Protein binding | 96.3 % | 96.3% |
| Bioavailability | 52 % | 52% |
| Metabolism | hepatic | CYP2C19 and CYP3A4 in the liver |
| CYP (metabolised by) | CYP2C19, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | thioether carboyxlic acid metabolite, thioether glucuronide metabolite, sulfone metabolite |
| Excretion | mainly urinary | 90% via kidney as metabolites |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 951caefe…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=951caefe-6e18-48ff-9567-beb545b09c25), label version 20231130. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1, 2)
> - protein-binding: consistent (label values: 96.3)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Dexlansoprazole]], [[Esomeprazole]], [[Ilaprazole]], [[Lansoprazole]], [[Omeprazole]], [[Pantoprazole]], [[Vonoprazan]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
