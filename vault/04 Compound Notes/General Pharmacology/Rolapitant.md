---
type: compound
schema-version: 2
compound-id: rolapitant-compound
name: Rolapitant
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
chembl-id: CHEMBL3707331
chembl-max-phase: 4
half-life:
  value: 169.0
  value-max: 183.0
  unit: h
  notes: 169–183 hours
protein-binding:
  value: 99.8
  value-max: null
  unit: percent
  notes: 99.8%
bioavailability:
  value: 100.0
  value-max: null
  notes: nearly 100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Feces (52–89%), urine (9–20%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- group/gi
- stub
- pk-auto
- chembl-profile
- chembl-name-match
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Rolapitant
  url: https://en.wikipedia.org/w/index.php?title=Rolapitant&oldid=1368522467
  revision: 1368522467
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL3707331
  pref-name: ROLAPITANT
  molecule-type: Small molecule
  first-approval: 2015
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A04AD14
  targets: []
  properties:
    full-mwt: 500.48
    mw-freebase: 500.48
    alogp: 5.73
    psa: 50.36
    hba: 3
    hbd: 2
    rtb: 5
    num-ro5-violations: 2
    qed-weighted: 0.52
    full-molformula: C25H26F6N2O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 8670c3cf-82d9-466d-be49-de33d8c8742b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8670c3cf-82d9-466d-be49-de33d8c8742b
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Rolapitant

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rolapitant-compound`
- **Source group:** Gastrointestinal & Hepatic (`gi`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL3707331](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3707331/) · max phase 4 · id via exact ChEMBL name match · structure check: ✅ InChIKey matches PubChem

## Source summary

Long-acting NK-1 antagonist with a half-life of about seven days, covering the whole delayed emesis window from one dose.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2015
- **ATC A04AD14:** ALIMENTARY TRACT AND METABOLISM › ANTIEMETICS AND ANTINAUSEANTS › Other antiemetics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 500.48 | 5.73 | 50.36 | 2/3 | 2 | C25H26F6N2O2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rolapitant*](https://en.wikipedia.org/w/index.php?title=Rolapitant&oldid=1368522467) (revision 1368522467, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 169–183 h | 169–183 hours |
| Protein binding | 99.8 % | 99.8% |
| Bioavailability | 100 % | nearly 100% |
| Metabolism | hepatic | CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | C4-pyrrolidine-hydroxylated rolapitant (major) |
| Excretion | mainly urinary | Feces (52–89%), urine (9–20%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 8670c3cf…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8670c3cf-82d9-466d-be49-de33d8c8742b), label version 20260908. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 41, 158, 168, 169, 176, 183)
> - protein-binding: consistent (label values: 99.8)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Aprepitant]], [[Dronabinol]], [[Hyoscine (Scopolamine)]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
