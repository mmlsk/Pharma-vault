---
type: compound
schema-version: 2
compound-id: clozapine-compound
name: Clozapine
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
chembl-id: CHEMBL42
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: 26.0
  unit: h
  notes: 4–26 hours (mean value 14.2 hours in steady state conditions)
protein-binding:
  value: 97.0
  value-max: null
  unit: percent
  notes: 97%
bioavailability:
  value: 60.0
  value-max: 70.0
  notes: 60–70%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: '80% in metabolized state: 30% biliary and 50% kidney'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, by several CYP isozymes mainly via CYP2D6
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
- identity-formula-match
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Clozapine
  url: https://en.wikipedia.org/w/index.php?title=Clozapine&oldid=1374837470
  revision: 1374837470
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL42
  pref-name: CLOZAPINE
  molecule-type: Small molecule
  first-approval: 1989
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N05AH02
  targets:
  - id: CHEMBL224
    name: 5-hydroxytryptamine receptor 2A
    action: ANTAGONIST
  - id: CHEMBL217
    name: D(2) dopamine receptor
    action: ANTAGONIST
  properties:
    full-mwt: 326.83
    mw-freebase: 326.83
    alogp: 3.72
    psa: 30.87
    hba: 4
    hbd: 1
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.8
    full-molformula: C18H19ClN4
  identity-check: formula-match
pk-verification:
  source: fda-label
  status: consistent
  set-id: 2592c9a8-fd74-4e0d-a895-b07b014cf355
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2592c9a8-fd74-4e0d-a895-b07b014cf355
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Clozapine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `clozapine-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL42](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL42/) · max phase 4 · id via Wikipedia infobox · structure check: ≈ same formula, different InChIKey (tautomer/representation)

## Source summary

The only antipsychotic with proven superiority in treatment-resistant schizophrenia, requiring mandatory blood monitoring for agranulocytosis.

## Mechanism

Dopamine D2 receptor antagonist; Serotonin 2a (5-HT2a) receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1989
- **Flags:** black-box warning
- **ATC N05AH02:** NERVOUS SYSTEM › ANTIPSYCHOTICS › Diazepines, oxazepines, thiazepines and oxepines

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 326.83 | 3.72 | 30.87 | 1/4 | 0 | C18H19ClN4 |

**Targets (ChEMBL curated mechanisms):**

- [[5-hydroxytryptamine receptor 2A (CHEMBL224)|5-hydroxytryptamine receptor 2A]] - antagonist · SINGLE PROTEIN
- [[D(2) dopamine receptor (CHEMBL217)|D(2) dopamine receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Clozapine*](https://en.wikipedia.org/w/index.php?title=Clozapine&oldid=1374837470) (revision 1374837470, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4–26 h | 4–26 hours (mean value 14.2 hours in steady state conditions) |
| Protein binding | 97 % | 97% |
| Bioavailability | 60–70 % | 60–70% |
| Metabolism | hepatic | Liver, by several CYP isozymes mainly via CYP2D6 |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | 80% in metabolized state: 30% biliary and 50% kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 2592c9a8…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2592c9a8-fd74-4e0d-a895-b07b014cf355), label version 20260906. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 4, 8, 12, 66)
> - protein-binding: consistent (label values: 97)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aripiprazole]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Brexpiprazole]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Iloperidone]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Lumateperone]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Paliperidone]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Risperidone]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Thiothixene]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Benperidol]] (D(2) dopamine receptor), [[Cabergoline (Dostinex)]] (D(2) dopamine receptor), [[Chlorpromazine]] (5-hydroxytryptamine receptor 2A), [[Domperidone]] (D(2) dopamine receptor), [[Droperidol]] (5-hydroxytryptamine receptor 2A)
- **Same ATC subgroup:** [[Loxapine]], [[Olanzapine]], [[Quetiapine]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
