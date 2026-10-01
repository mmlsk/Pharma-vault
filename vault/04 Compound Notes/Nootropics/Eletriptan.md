---
type: compound
schema-version: 2
compound-id: eletriptan-compound
name: Eletriptan
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
chembl-id: CHEMBL1510
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: null
  unit: h
  notes: 4 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 50.0
  value-max: null
  notes: 50%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Mainly CYP3A4
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
  title: Eletriptan
  url: https://en.wikipedia.org/w/index.php?title=Eletriptan&oldid=1338246348
  revision: 1338246348
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1510
  pref-name: ELETRIPTAN
  molecule-type: Small molecule
  first-approval: 2002
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N02CC06
  targets: []
  properties:
    full-mwt: 382.53
    mw-freebase: 382.53
    alogp: 3.82
    psa: 53.17
    hba: 3
    hbd: 1
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.71
    full-molformula: C22H26N2O2S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Eletriptan

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `eletriptan-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL1510](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1510/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Triptan with the highest oral efficacy in comparative meta-analyses, and a P-glycoprotein substrate.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2002
- **ATC N02CC06:** NERVOUS SYSTEM › ANTIMIGRAINE PREPARATIONS › Selective serotonin (5HT1) agonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 382.53 | 3.82 | 53.17 | 1/3 | 0 | C22H26N2O2S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Eletriptan*](https://en.wikipedia.org/w/index.php?title=Eletriptan&oldid=1338246348) (revision 1338246348, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4 h | 4 hours |
| Bioavailability | 50 % | 50% |
| Metabolism | hepatic | Mainly CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Almotriptan]], [[Frovatriptan]], [[Lasmiditan]], [[Naratriptan]], [[Rizatriptan]], [[Sumatriptan (Imitrex)]], [[Zolmitriptan]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
