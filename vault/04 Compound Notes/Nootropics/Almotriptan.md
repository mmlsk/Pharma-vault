---
type: compound
schema-version: 2
compound-id: almotriptan-compound
name: Almotriptan
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
chembl-id: CHEMBL1505
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: 4.0
  unit: h
  notes: 3–4 hours
protein-binding:
  value: 35.0
  value-max: null
  unit: percent
  notes: 35%
bioavailability:
  value: 70.0
  value-max: null
  notes: 70%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Almotriptan
  url: https://en.wikipedia.org/w/index.php?title=Almotriptan&oldid=1358390018
  revision: 1358390018
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1505
  pref-name: ALMOTRIPTAN
  molecule-type: Small molecule
  first-approval: 2001
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N02CC05
  targets: []
  properties:
    full-mwt: 335.47
    mw-freebase: 335.47
    alogp: 2.2
    psa: 56.41
    hba: 3
    hbd: 1
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.88
    full-molformula: C17H25N3O2S
pk-verification:
  source: fda-label
  status: consistent
  set-id: 6fa380c4-c885-4743-85bf-88819ae68645
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6fa380c4-c885-4743-85bf-88819ae68645
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Almotriptan

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `almotriptan-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL1505](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1505/) · max phase 4 · id via Wikipedia infobox

## Source summary

Triptan with a tolerability profile close to placebo in trials, licensed for adolescents in several countries.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2001
- **ATC N02CC05:** NERVOUS SYSTEM › ANTIMIGRAINE PREPARATIONS › Selective serotonin (5HT1) agonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 335.47 | 2.2 | 56.41 | 1/3 | 0 | C17H25N3O2S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Almotriptan*](https://en.wikipedia.org/w/index.php?title=Almotriptan&oldid=1358390018) (revision 1358390018, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–4 h | 3–4 hours |
| Protein binding | 35 % | 35% |
| Bioavailability | 70 % | 70% |
| Metabolism | hepatic | Liver |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 6fa380c4…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6fa380c4-c885-4743-85bf-88819ae68645), label version 20251231. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 3, 3.2, 3.7, 4)
> - protein-binding: consistent (label values: 35)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Eletriptan]], [[Frovatriptan]], [[Lasmiditan]], [[Naratriptan]], [[Rizatriptan]], [[Sumatriptan (Imitrex)]], [[Zolmitriptan]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
