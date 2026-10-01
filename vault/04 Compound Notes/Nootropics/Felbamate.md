---
type: compound
schema-version: 2
compound-id: felbamate-compound
name: Felbamate
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Glutamate [NMDA] receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1094
chembl-max-phase: 4
half-life:
  value: 20.0
  value-max: 23.0
  unit: h
  notes: 20–23 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 90.0
  value-max: null
  notes: '>90%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Felbamate
  url: https://en.wikipedia.org/w/index.php?title=Felbamate&oldid=1360858248
  revision: 1360858248
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1094
  pref-name: FELBAMATE
  molecule-type: Small molecule
  first-approval: 1993
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N03AX10
  targets:
  - id: CHEMBL2094124
    name: Glutamate [NMDA] receptor
    action: ANTAGONIST
  properties:
    full-mwt: 238.24
    mw-freebase: 238.24
    alogp: 0.96
    psa: 104.64
    hba: 4
    hbd: 2
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.8
    full-molformula: C11H14N2O4
pk-verification:
  source: fda-label
  status: consistent
  set-id: 0afffb17-e6ac-4bea-a90e-7ef3c8150290
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0afffb17-e6ac-4bea-a90e-7ef3c8150290
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Felbamate

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `felbamate-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL1094](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1094/) · max phase 4 · id via Wikipedia infobox

## Source summary

Broad-spectrum anticonvulsant restricted to refractory epilepsy after aplastic anaemia and hepatic failure emerged post-marketing.

## Mechanism

Glutamate [NMDA] receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1993
- **Flags:** black-box warning
- **ATC N03AX10:** NERVOUS SYSTEM › ANTIEPILEPTICS › Other antiepileptics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 238.24 | 0.96 | 104.64 | 2/4 | 0 | C11H14N2O4 |

**Targets (ChEMBL curated mechanisms):**

- [[Glutamate -NMDA- receptor (CHEMBL2094124)|Glutamate [NMDA] receptor]] - antagonist · PROTEIN COMPLEX GROUP

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Felbamate*](https://en.wikipedia.org/w/index.php?title=Felbamate&oldid=1360858248) (revision 1360858248, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20–23 h | 20–23 hours |
| Bioavailability | 90 % | >90% |
| Metabolism | hepatic | Hepatic |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 0afffb17…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0afffb17-e6ac-4bea-a90e-7ef3c8150290), label version 20260714. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 20, 23)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Apimostinel]] (Glutamate [NMDA] receptor), [[Esketamine (Spravato)]] (Glutamate [NMDA] receptor), [[Neboglamine]] (Glutamate [NMDA] receptor), [[Ralfinamide]] (Glutamate [NMDA] receptor), [[Rapastinel]] (Glutamate [NMDA] receptor)
- **Same ATC subgroup:** [[Brivaracetam]], [[Cannabidiol (Epidiolex)]], [[Cenobamate]], [[Fenfluramine]], [[Ganaxolone]], [[Lacosamide]], [[Lamotrigine]], [[Levetiracetam]], [[Perampanel]], [[Pheneturide]], [[Retigabine (Ezogabine)]], [[Stiripentol]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
