---
type: compound
schema-version: 2
compound-id: perphenazine-compound
name: Perphenazine
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Dopamine D2 receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL567
chembl-max-phase: 4
half-life:
  value: null
  value-max: null
  unit: null
  notes: 8–12 (up to 20) hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 40.0
  value-max: null
  notes: 40%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: hepatic
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
  title: Perphenazine
  url: https://en.wikipedia.org/w/index.php?title=Perphenazine&oldid=1315044627
  revision: 1315044627
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL567
  pref-name: PERPHENAZINE
  molecule-type: Small molecule
  first-approval: 1957
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N05AB03
  targets:
  - id: CHEMBL217
    name: D(2) dopamine receptor
    action: ANTAGONIST
  properties:
    full-mwt: 403.98
    mw-freebase: 403.98
    alogp: 3.94
    psa: 29.95
    hba: 5
    hbd: 1
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.79
    full-molformula: C21H26ClN3OS
---

# Perphenazine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `perphenazine-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL567](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL567/) · max phase 4 · id via Wikipedia infobox

## Source summary

Mid-potency phenothiazine that performed as well as the second-generation drugs in the CATIE effectiveness trial.

## Mechanism

Dopamine D2 receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1957
- **Flags:** black-box warning
- **ATC N05AB03:** NERVOUS SYSTEM › ANTIPSYCHOTICS › Phenothiazines with piperazine structure

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 403.98 | 3.94 | 29.95 | 1/5 | 0 | C21H26ClN3OS |

**Targets (ChEMBL curated mechanisms):**

- [[D(2) dopamine receptor (CHEMBL217)|D(2) dopamine receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Perphenazine*](https://en.wikipedia.org/w/index.php?title=Perphenazine&oldid=1315044627) (revision 1315044627, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | - | 8–12 (up to 20) hours |
| Bioavailability | 40 % | 40% |
| Metabolism | hepatic | hepatic |

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aripiprazole]] (D(2) dopamine receptor), [[Benperidol]] (D(2) dopamine receptor), [[Brexpiprazole]] (D(2) dopamine receptor), [[Cabergoline (Dostinex)]] (D(2) dopamine receptor), [[Clozapine]] (D(2) dopamine receptor), [[Domperidone]] (D(2) dopamine receptor), [[Iloperidone]] (D(2) dopamine receptor), [[Itopride]] (D(2) dopamine receptor), [[Lumateperone]] (D(2) dopamine receptor), [[Paliperidone]] (D(2) dopamine receptor), [[Pridopidine]] (D(2) dopamine receptor), [[Remoxipride]] (D(2) dopamine receptor)
- **Same ATC subgroup:** [[Fluphenazine]], [[Trifluoperazine]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
