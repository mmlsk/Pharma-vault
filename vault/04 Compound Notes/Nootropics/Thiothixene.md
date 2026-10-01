---
type: compound
schema-version: 2
compound-id: thiothixene-compound
name: Thiothixene
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Dopamine D2 receptor antagonist; Serotonin 2a (5-HT2a) receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: 20.0
  unit: h
  notes: 10–20 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 100.0
  value-max: null
  notes: ~100%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Gastrointernal tract, faeces
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/neuropsych
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Tiotixene
  url: https://en.wikipedia.org/w/index.php?title=Tiotixene&oldid=1338566826
  revision: 1338566826
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201
  pref-name: THIOTHIXENE
  molecule-type: Small molecule
  first-approval: 1967
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N05AF04
  targets:
  - id: CHEMBL217
    name: D(2) dopamine receptor
    action: ANTAGONIST
  - id: CHEMBL224
    name: 5-hydroxytryptamine receptor 2A
    action: ANTAGONIST
  properties:
    full-mwt: 443.64
    mw-freebase: 443.64
    alogp: 3.47
    psa: 43.86
    hba: 5
    hbd: 0
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.6
    full-molformula: C23H29N3O2S2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Thiothixene

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `thiothixene-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL1201](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201/) · max phase 4 · id via Wikipedia infobox

## Source summary

High-potency thioxanthene antipsychotic, pharmacologically close to the high-potency phenothiazines.

## Mechanism

Dopamine D2 receptor antagonist; Serotonin 2a (5-HT2a) receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1967
- **Flags:** black-box warning
- **ATC N05AF04:** NERVOUS SYSTEM › ANTIPSYCHOTICS › Thioxanthene derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 443.64 | 3.47 | 43.86 | 0/5 | 0 | C23H29N3O2S2 |

**Targets (ChEMBL curated mechanisms):**

- [[D(2) dopamine receptor (CHEMBL217)|D(2) dopamine receptor]] - antagonist · SINGLE PROTEIN
- [[5-hydroxytryptamine receptor 2A (CHEMBL224)|5-hydroxytryptamine receptor 2A]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tiotixene*](https://en.wikipedia.org/w/index.php?title=Tiotixene&oldid=1338566826) (revision 1338566826, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–20 h | 10–20 hours |
| Bioavailability | 100 % | ~100% |
| Metabolism | hepatic | Hepatic |
| Excretion | - | Gastrointernal tract, faeces |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aripiprazole]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Brexpiprazole]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Clozapine]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Iloperidone]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Lumateperone]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Paliperidone]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Risperidone]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Benperidol]] (D(2) dopamine receptor), [[Cabergoline (Dostinex)]] (D(2) dopamine receptor), [[Chlorpromazine]] (5-hydroxytryptamine receptor 2A), [[Domperidone]] (D(2) dopamine receptor), [[Droperidol]] (5-hydroxytryptamine receptor 2A)
- **Same ATC subgroup:** [[Zuclopenthixol]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
