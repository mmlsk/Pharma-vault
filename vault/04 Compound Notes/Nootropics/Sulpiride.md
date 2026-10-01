---
type: compound
schema-version: 2
compound-id: sulpiride-compound
name: Sulpiride
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
chembl-id: CHEMBL26
chembl-max-phase: 4
half-life:
  value: 6.0
  value-max: 8.0
  unit: h
  notes: 6–8 hours
protein-binding:
  value: 40.0
  value-max: null
  unit: percent
  notes: <40%
bioavailability:
  value: 25.0
  value-max: 40.0
  notes: 25–40%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine (70–90%),; Feces.
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Not metabolized; 95% is exerted as the unchanged drug
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
  title: Sulpiride
  url: https://en.wikipedia.org/w/index.php?title=Sulpiride&oldid=1374838272
  revision: 1374838272
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL26
  pref-name: SULPIRIDE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N05AL01
  targets:
  - id: CHEMBL217
    name: D(2) dopamine receptor
    action: ANTAGONIST
  properties:
    full-mwt: 341.43
    mw-freebase: 341.43
    alogp: 0.56
    psa: 101.73
    hba: 5
    hbd: 2
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.79
    full-molformula: C15H23N3O4S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Sulpiride

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sulpiride-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL26](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL26/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Substituted benzamide with selective D2 and D3 antagonism, used as an antipsychotic at high dose and an antidepressant at low dose.

## Mechanism

Dopamine D2 receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC N05AL01:** NERVOUS SYSTEM › ANTIPSYCHOTICS › Benzamides

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 341.43 | 0.56 | 101.73 | 2/5 | 0 | C15H23N3O4S |

**Targets (ChEMBL curated mechanisms):**

- [[D(2) dopamine receptor (CHEMBL217)|D(2) dopamine receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sulpiride*](https://en.wikipedia.org/w/index.php?title=Sulpiride&oldid=1374838272) (revision 1374838272, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6–8 h | 6–8 hours |
| Protein binding | 40 % | <40% |
| Bioavailability | 25–40 % | 25–40% |
| Metabolism | - | Not metabolized; 95% is exerted as the unchanged drug |
| Excretion | - | Urine (70–90%),; Feces. |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aripiprazole]] (D(2) dopamine receptor), [[Benperidol]] (D(2) dopamine receptor), [[Brexpiprazole]] (D(2) dopamine receptor), [[Cabergoline (Dostinex)]] (D(2) dopamine receptor), [[Clozapine]] (D(2) dopamine receptor), [[Domperidone]] (D(2) dopamine receptor), [[Iloperidone]] (D(2) dopamine receptor), [[Itopride]] (D(2) dopamine receptor), [[Lumateperone]] (D(2) dopamine receptor), [[Paliperidone]] (D(2) dopamine receptor), [[Perphenazine]] (D(2) dopamine receptor), [[Pridopidine]] (D(2) dopamine receptor)
- **Same ATC subgroup:** [[Amisulpride]], [[Remoxipride]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
