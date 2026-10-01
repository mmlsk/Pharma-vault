---
type: compound
schema-version: 2
compound-id: brivaracetam-compound
name: Brivaracetam
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Synaptic vesicle glycoprotein 2A modulator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL607400
chembl-max-phase: 4
half-life:
  value: 9.0
  value-max: null
  unit: h
  notes: ≈9 hours
protein-binding:
  value: 20.0
  value-max: null
  unit: percent
  notes: ≤20%
bioavailability:
  value: 100.0
  value-max: null
  notes: Nearly 100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidneys (>95%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hydrolysis by amidase, CYP2C19-mediated hydroxylation
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Brivaracetam
  url: https://en.wikipedia.org/w/index.php?title=Brivaracetam&oldid=1370095828
  revision: 1370095828
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL607400
  pref-name: BRIVARACETAM
  molecule-type: Small molecule
  first-approval: 2016
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N03AX23
  targets:
  - id: CHEMBL1998
    name: Synaptic vesicle glycoprotein 2A
    action: MODULATOR
  properties:
    full-mwt: 212.29
    mw-freebase: 212.29
    alogp: 0.9
    psa: 63.4
    hba: 2
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.74
    full-molformula: C11H20N2O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 3cf2f439-0e97-443e-8e33-25ecef616f6c
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3cf2f439-0e97-443e-8e33-25ecef616f6c
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: no-smpc-text
  product: 'Briviact (in Italy: Nubriveo)'
  ema-number: EMEA/H/C/003898
  url: null
  chpl-url: null
  checked: '2026-10-01'
  fields: {}
---

# Brivaracetam

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `brivaracetam-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL607400](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL607400/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Higher-affinity SV2A ligand developed from levetiracetam, with a better behavioural tolerability profile.

## Mechanism

Synaptic vesicle glycoprotein 2A modulator _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2016
- **ATC N03AX23:** NERVOUS SYSTEM › ANTIEPILEPTICS › Other antiepileptics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 212.29 | 0.9 | 63.4 | 1/2 | 0 | C11H20N2O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Synaptic vesicle glycoprotein 2A (CHEMBL1998)|Synaptic vesicle glycoprotein 2A]] - modulator · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Brivaracetam*](https://en.wikipedia.org/w/index.php?title=Brivaracetam&oldid=1370095828) (revision 1370095828, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9 h | ≈9 hours |
| Protein binding | 20 % | ≤20% |
| Bioavailability | 100 % | Nearly 100% |
| Metabolism | hepatic | Hydrolysis by amidase, CYP2C19-mediated hydroxylation |
| CYP (metabolised by) | CYP2C19 | roles as inhibitor/inducer not assessed |
| Metabolites | - | 3 inactive metabolites |
| Excretion | mainly urinary | Kidneys (>95%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 3cf2f439…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3cf2f439-0e97-443e-8e33-25ecef616f6c), label version 20260820. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 7.9, 9, 9.3)
> - protein-binding: consistent (label values: 20)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Levetiracetam]] (Synaptic vesicle glycoprotein 2A)
- **Same ATC subgroup:** [[Cannabidiol (Epidiolex)]], [[Cenobamate]], [[Felbamate]], [[Fenfluramine]], [[Ganaxolone]], [[Lacosamide]], [[Lamotrigine]], [[Levetiracetam]], [[Perampanel]], [[Pheneturide]], [[Retigabine (Ezogabine)]], [[Stiripentol]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
