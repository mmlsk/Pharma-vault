---
type: compound
schema-version: 2
compound-id: omeprazole-compound
name: Omeprazole
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Potassium-transporting ATPase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1503
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: 1.2
  unit: h
  notes: 1–1.2 hours
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: 95%
bioavailability:
  value: 35.0
  value-max: 76.0
  notes: 35–76%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 80% (urine); 20% (bile via feces)
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
  title: Omeprazole
  url: https://en.wikipedia.org/w/index.php?title=Omeprazole&oldid=1362259565
  revision: 1362259565
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1503
  pref-name: OMEPRAZOLE
  molecule-type: Small molecule
  first-approval: 1989
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A02BC01
  targets:
  - id: CHEMBL2095173
    name: Potassium-transporting ATPase
    action: INHIBITOR
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
  status: consistent
  set-id: 63b3982a-b541-4b0d-99d4-93a673e57d46
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=63b3982a-b541-4b0d-99d4-93a673e57d46
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Omeprazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `omeprazole-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1503](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1503/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits the gastric proton pump to suppress acid secretion; long-term use affects micronutrient and mineral absorption.

## Mechanism

Potassium-transporting ATPase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1989
- **Flags:** prodrug
- **ATC A02BC01:** ALIMENTARY TRACT AND METABOLISM › DRUGS FOR PEPTIC ULCER AND GASTRO-OESOPHAGEAL REFLUX DISEASE (GORD) › Proton pump inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 345.42 | 2.9 | 83.09 | 1/5 | 0 | C17H19N3O3S |

**Targets (ChEMBL curated mechanisms):**

- [[Potassium-transporting ATPase (CHEMBL2095173)|Potassium-transporting ATPase]] - inhibitor · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Omeprazole*](https://en.wikipedia.org/w/index.php?title=Omeprazole&oldid=1362259565) (revision 1362259565, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–1.2 h | 1–1.2 hours |
| Protein binding | 95 % | 95% |
| Bioavailability | 35–76 % | 35–76% |
| Metabolism | hepatic | Liver (CYP2C19, CYP3A4) |
| CYP (metabolised by) | CYP2C19, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | 80% (urine); 20% (bile via feces) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 63b3982a…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=63b3982a-b541-4b0d-99d4-93a673e57d46), label version 20260828. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.5, 1, 3)
> - protein-binding: consistent (label values: 95)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Dexlansoprazole]] (Potassium-transporting ATPase), [[Ilaprazole]] (Potassium-transporting ATPase), [[Lansoprazole]] (Potassium-transporting ATPase)
- **Same ATC subgroup:** [[Dexlansoprazole]], [[Esomeprazole]], [[Ilaprazole]], [[Lansoprazole]], [[Pantoprazole]], [[Rabeprazole]], [[Vonoprazan]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
