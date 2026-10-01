---
type: compound
schema-version: 2
compound-id: naratriptan-compound
name: Naratriptan
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
chembl-id: CHEMBL1278
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 8.0
  unit: h
  notes: 5–8 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 74.0
  value-max: null
  notes: 74%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic
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
  title: Naratriptan
  url: https://en.wikipedia.org/w/index.php?title=Naratriptan&oldid=1338398722
  revision: 1338398722
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1278
  pref-name: NARATRIPTAN
  molecule-type: Small molecule
  first-approval: 1998
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N02CC02
  targets: []
  properties:
    full-mwt: 335.47
    mw-freebase: 335.47
    alogp: 2.07
    psa: 65.2
    hba: 3
    hbd: 2
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.88
    full-molformula: C17H25N3O2S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 63ea356f-0895-4540-b242-8e611eacd938
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=63ea356f-0895-4540-b242-8e611eacd938
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Naratriptan

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `naratriptan-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL1278](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1278/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Slow-onset, long-half-life triptan with the lowest adverse effect burden, useful for slowly evolving or recurring attacks.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1998
- **ATC N02CC02:** NERVOUS SYSTEM › ANTIMIGRAINE PREPARATIONS › Selective serotonin (5HT1) agonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 335.47 | 2.07 | 65.2 | 2/3 | 0 | C17H25N3O2S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Naratriptan*](https://en.wikipedia.org/w/index.php?title=Naratriptan&oldid=1338398722) (revision 1338398722, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–8 h | 5–8 hours |
| Bioavailability | 74 % | 74% |
| Metabolism | hepatic | Hepatic |
| Excretion | mainly urinary | Renal |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 63ea356f…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=63ea356f-0895-4540-b242-8e611eacd938), label version 20260807. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 6, 7, 8, 11, 16, 20)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Almotriptan]], [[Eletriptan]], [[Frovatriptan]], [[Lasmiditan]], [[Rizatriptan]], [[Sumatriptan (Imitrex)]], [[Zolmitriptan]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
