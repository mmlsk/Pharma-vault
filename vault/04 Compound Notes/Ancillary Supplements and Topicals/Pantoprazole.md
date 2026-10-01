---
type: compound
schema-version: 2
compound-id: pantoprazole-compound
name: Pantoprazole
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
chembl-id: CHEMBL1502
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: 2.0
  unit: h
  notes: 1–2 hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98%
bioavailability:
  value: 77.0
  value-max: null
  notes: 77%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine, feces
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
- identity-confirmed
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Pantoprazole
  url: https://en.wikipedia.org/w/index.php?title=Pantoprazole&oldid=1371018706
  revision: 1371018706
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1502
  pref-name: PANTOPRAZOLE
  molecule-type: Small molecule
  first-approval: 2000
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A02BC02
  targets: []
  properties:
    full-mwt: 383.38
    mw-freebase: 383.38
    alogp: 2.88
    psa: 92.32
    hba: 6
    hbd: 1
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.63
    full-molformula: C16H15F2N3O4S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 59f50bcb-85e5-e3f6-e063-6294a90a11ae
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=59f50bcb-85e5-e3f6-e063-6294a90a11ae
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: no-smpc-text
  product: Pantozol Control
  ema-number: EMEA/H/C/001013
  url: null
  chpl-url: null
  checked: '2026-10-01'
  fields: {}
---

# Pantoprazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pantoprazole-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1502](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1502/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits the gastric proton pump to suppress acid secretion; long-term use affects micronutrient and mineral absorption.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2000
- **ATC A02BC02:** ALIMENTARY TRACT AND METABOLISM › DRUGS FOR PEPTIC ULCER AND GASTRO-OESOPHAGEAL REFLUX DISEASE (GORD) › Proton pump inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 383.38 | 2.88 | 92.32 | 1/6 | 0 | C16H15F2N3O4S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pantoprazole*](https://en.wikipedia.org/w/index.php?title=Pantoprazole&oldid=1371018706) (revision 1371018706, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–2 h | 1–2 hours |
| Protein binding | 98 % | 98% |
| Bioavailability | 77 % | 77% |
| Metabolism | hepatic | Liver (CYP2C19, CYP3A4) |
| CYP (metabolised by) | CYP2C19, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Urine, feces |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 59f50bcb…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=59f50bcb-85e5-e3f6-e063-6294a90a11ae), label version 20260826. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 7, 9)
> - protein-binding: consistent (label values: 98)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Dexlansoprazole]], [[Esomeprazole]], [[Ilaprazole]], [[Lansoprazole]], [[Omeprazole]], [[Rabeprazole]], [[Vonoprazan]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
