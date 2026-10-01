---
type: compound
schema-version: 2
compound-id: rizatriptan-compound
name: Rizatriptan
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL905
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 3.0
  unit: h
  notes: 2–3 hours
protein-binding:
  value: 14.0
  value-max: null
  unit: percent
  notes: 14%
bioavailability:
  value: 45.0
  value-max: null
  notes: 45%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 82% urine; 12% feces
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: By monoamine oxidase
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
- cns-activity
- serotonergic-or-dopaminergic-load
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/neuropsych
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Rizatriptan
  url: https://en.wikipedia.org/w/index.php?title=Rizatriptan&oldid=1356473769
  revision: 1356473769
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL905
  pref-name: RIZATRIPTAN
  molecule-type: Small molecule
  first-approval: 1998
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N02CC04
  targets: []
  properties:
    full-mwt: 269.35
    mw-freebase: 269.35
    alogp: 1.91
    psa: 49.74
    hba: 4
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.77
    full-molformula: C15H19N5
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: f000d96c-42a0-4aac-96ca-8cef289979ce
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f000d96c-42a0-4aac-96ca-8cef289979ce
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Rizatriptan

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rizatriptan-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL905](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL905/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Fast-onset oral triptan available as an orally disintegrating wafer, with the shortest time to peak of the oral agents.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1998
- **Flags:** black-box warning
- **ATC N02CC04:** NERVOUS SYSTEM › ANTIMIGRAINE PREPARATIONS › Selective serotonin (5HT1) agonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 269.35 | 1.91 | 49.74 | 1/4 | 0 | C15H19N5 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rizatriptan*](https://en.wikipedia.org/w/index.php?title=Rizatriptan&oldid=1356473769) (revision 1356473769, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–3 h | 2–3 hours |
| Protein binding | 14 % | 14% |
| Bioavailability | 45 % | 45% |
| Metabolism | - | By monoamine oxidase |
| Excretion | mainly urinary | 82% urine; 12% feces |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set f000d96c…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f000d96c-42a0-4aac-96ca-8cef289979ce), label version 20251126. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2, 3)
> - protein-binding: consistent (label values: 14)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Almotriptan]], [[Eletriptan]], [[Frovatriptan]], [[Lasmiditan]], [[Naratriptan]], [[Sumatriptan (Imitrex)]], [[Zolmitriptan]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
