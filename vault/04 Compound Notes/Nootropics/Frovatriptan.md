---
type: compound
schema-version: 2
compound-id: frovatriptan-compound
name: Frovatriptan
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
chembl-id: CHEMBL1279
chembl-max-phase: 4
half-life:
  value: 26.0
  value-max: 30.0
  unit: h
  notes: 26–30 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 20.0
  value-max: 30.0
  notes: 20–30%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/neuropsych
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Frovatriptan
  url: https://en.wikipedia.org/w/index.php?title=Frovatriptan&oldid=1324491611
  revision: 1324491611
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1279
  pref-name: FROVATRIPTAN
  molecule-type: Small molecule
  first-approval: 2001
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N02CC07
  targets: []
  properties:
    full-mwt: 243.31
    mw-freebase: 243.31
    alogp: 1.34
    psa: 70.91
    hba: 2
    hbd: 3
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.74
    full-molformula: C14H17N3O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Frovatriptan

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `frovatriptan-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL1279](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1279/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

The longest-acting triptan, with a 26-hour half-life that makes it usable for short-term menstrual migraine prophylaxis.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2001
- **ATC N02CC07:** NERVOUS SYSTEM › ANTIMIGRAINE PREPARATIONS › Selective serotonin (5HT1) agonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 243.31 | 1.34 | 70.91 | 3/2 | 0 | C14H17N3O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Frovatriptan*](https://en.wikipedia.org/w/index.php?title=Frovatriptan&oldid=1324491611) (revision 1324491611, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 26–30 h | 26–30 hours |
| Bioavailability | 20–30 % | 20–30% |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Kidney |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Almotriptan]], [[Eletriptan]], [[Lasmiditan]], [[Naratriptan]], [[Rizatriptan]], [[Sumatriptan (Imitrex)]], [[Zolmitriptan]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
