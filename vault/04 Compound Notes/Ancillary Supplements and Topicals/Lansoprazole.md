---
type: compound
schema-version: 2
compound-id: lansoprazole-compound
name: Lansoprazole
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
chembl-id: CHEMBL480
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: 1.5
  unit: h
  notes: 1.0–1.5 hours
protein-binding:
  value: 97.0
  value-max: null
  unit: percent
  notes: 97%
bioavailability:
  value: 80.0
  value-max: null
  notes: 80% or more
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney and fecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4- and CYP2C19-mediated)
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
  title: Lansoprazole
  url: https://en.wikipedia.org/w/index.php?title=Lansoprazole&oldid=1370309730
  revision: 1370309730
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL480
  pref-name: LANSOPRAZOLE
  molecule-type: Small molecule
  first-approval: 1995
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A02BC03
  - A02BC53
  targets:
  - id: CHEMBL2095173
    name: Potassium-transporting ATPase
    action: INHIBITOR
  properties:
    full-mwt: 369.37
    mw-freebase: 369.37
    alogp: 3.52
    psa: 73.86
    hba: 4
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.7
    full-molformula: C16H14F3N3O2S
pk-verification:
  source: fda-label
  status: consistent
  set-id: 7daa1721-f92b-4096-b19e-4d27fc8acb51
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7daa1721-f92b-4096-b19e-4d27fc8acb51
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Lansoprazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lansoprazole-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL480](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL480/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits the gastric proton pump to suppress acid secretion; long-term use affects micronutrient and mineral absorption.

## Mechanism

Potassium-transporting ATPase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1995
- **ATC A02BC03:** ALIMENTARY TRACT AND METABOLISM › DRUGS FOR PEPTIC ULCER AND GASTRO-OESOPHAGEAL REFLUX DISEASE (GORD) › Proton pump inhibitors
- **ATC A02BC53:** ALIMENTARY TRACT AND METABOLISM › DRUGS FOR PEPTIC ULCER AND GASTRO-OESOPHAGEAL REFLUX DISEASE (GORD) › Proton pump inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 369.37 | 3.52 | 73.86 | 1/4 | 0 | C16H14F3N3O2S |

**Targets (ChEMBL curated mechanisms):**

- [[Potassium-transporting ATPase (CHEMBL2095173)|Potassium-transporting ATPase]] - inhibitor · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lansoprazole*](https://en.wikipedia.org/w/index.php?title=Lansoprazole&oldid=1370309730) (revision 1370309730, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–1.5 h | 1.0–1.5 hours |
| Protein binding | 97 % | 97% |
| Bioavailability | 80 % | 80% or more |
| Metabolism | hepatic | Liver (CYP3A4- and CYP2C19-mediated) |
| CYP (metabolised by) | CYP2C19, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Kidney and fecal |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 7daa1721…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7daa1721-f92b-4096-b19e-4d27fc8acb51), label version 20260824. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1.9, 2.9, 24)
> - protein-binding: consistent (label values: 1, 1.5, 97)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Dexlansoprazole]] (Potassium-transporting ATPase), [[Ilaprazole]] (Potassium-transporting ATPase), [[Omeprazole]] (Potassium-transporting ATPase)
- **Same ATC subgroup:** [[Dexlansoprazole]], [[Esomeprazole]], [[Ilaprazole]], [[Omeprazole]], [[Pantoprazole]], [[Rabeprazole]], [[Vonoprazan]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
