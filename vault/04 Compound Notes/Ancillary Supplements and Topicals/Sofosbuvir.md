---
type: compound
schema-version: 2
compound-id: sofosbuvir-compound
name: Sofosbuvir
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: RNA-directed RNA polymerase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1259059
chembl-max-phase: 4
half-life:
  value: 0.4
  value-max: null
  unit: h
  notes: 0.4 hrs (sofosbuvir); 27 hrs (inactive metabolite GS-331007)
protein-binding:
  value: 61.0
  value-max: 65.0
  unit: percent
  notes: 61–65%
bioavailability:
  value: 92.0
  value-max: null
  notes: 92%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 80% urine, 14% feces (mostly as GS-331007)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Quickly activated to triphosphate (CatA/CES1, HIST1, phosphorylation)
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
  title: Sofosbuvir
  url: https://en.wikipedia.org/w/index.php?title=Sofosbuvir&oldid=1346949376
  revision: 1346949376
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1259059
  pref-name: SOFOSBUVIR
  molecule-type: Small molecule
  first-approval: 2013
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J05AP08
  targets:
  - id: CHEMBL4296320
    name: RNA-directed RNA polymerase
    action: INHIBITOR
  properties:
    full-mwt: 529.46
    mw-freebase: 529.46
    alogp: 1.66
    psa: 158.18
    hba: 10
    hbd: 3
    rtb: 10
    num-ro5-violations: 1
    qed-weighted: 0.31
    full-molformula: C22H29FN3O9P
pk-verification:
  source: fda-label
  status: consistent
  set-id: 80beab2c-396e-4a37-a4dc-40fdb62859cf
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=80beab2c-396e-4a37-a4dc-40fdb62859cf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Sofosbuvir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sofosbuvir-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1259059](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1259059/) · max phase 4 · id via Wikipedia infobox

## Source summary

Blocks an HCV replication target and is combined with complementary direct-acting antivirals to prevent resistance.

## Mechanism

RNA-directed RNA polymerase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2013
- **Flags:** black-box warning, prodrug
- **ATC J05AP08:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Antivirals for treatment of HCV infections

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 529.46 | 1.66 | 158.18 | 3/10 | 1 | C22H29FN3O9P |

**Targets (ChEMBL curated mechanisms):**

- [[RNA-directed RNA polymerase (CHEMBL4296320)|RNA-directed RNA polymerase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sofosbuvir*](https://en.wikipedia.org/w/index.php?title=Sofosbuvir&oldid=1346949376) (revision 1346949376, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.4 h | 0.4 hrs (sofosbuvir); 27 hrs (inactive metabolite GS-331007) |
| Protein binding | 61–65 % | 61–65% |
| Bioavailability | 92 % | 92% |
| Metabolism | - | Quickly activated to triphosphate (CatA/CES1, HIST1, phosphorylation) |
| Excretion | - | 80% urine, 14% feces (mostly as GS-331007) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 80beab2c…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=80beab2c-396e-4a37-a4dc-40fdb62859cf), label version 20241226. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.4, 27)
> - protein-binding: consistent (label values: 61, 65)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Ribavirin]] (RNA-directed RNA polymerase)
- **Same ATC subgroup:** [[Boceprevir]], [[Daclatasvir]], [[Elbasvir]], [[Grazoprevir]], [[Ribavirin]], [[Simeprevir]], [[Telaprevir]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
