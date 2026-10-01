---
type: compound
schema-version: 2
compound-id: mirtazapine-compound
name: Mirtazapine
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Adrenergic receptor alpha-2 antagonist; Serotonin 2a (5-HT2a) receptor antagonist; Serotonin 2c (5-HT2c) receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL654
chembl-max-phase: 4
half-life:
  value: 20.0
  value-max: 40.0
  unit: h
  notes: 20–40 hours
protein-binding:
  value: 85.0
  value-max: null
  unit: percent
  notes: 85%
bioavailability:
  value: 50.0
  value-max: null
  notes: 50%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: 75%; Feces: 15%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP1A2, CYP2D6, CYP3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Mirtazapine
  url: https://en.wikipedia.org/w/index.php?title=Mirtazapine&oldid=1373834311
  revision: 1373834311
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL654
  pref-name: MIRTAZAPINE
  molecule-type: Small molecule
  first-approval: 1996
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06AX11
  targets:
  - id: CHEMBL224
    name: 5-hydroxytryptamine receptor 2A
    action: ANTAGONIST
  - id: CHEMBL225
    name: 5-hydroxytryptamine receptor 2C
    action: ANTAGONIST
  - id: CHEMBL2095158
    name: Adrenergic receptor alpha-2
    action: ANTAGONIST
  properties:
    full-mwt: 265.36
    mw-freebase: 265.36
    alogp: 2.48
    psa: 19.37
    hba: 3
    hbd: 0
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.73
    full-molformula: C17H19N3
pk-verification:
  source: fda-label
  status: consistent
  set-id: 412abf0e-1f96-4d4d-bb56-a23d4699b14c
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=412abf0e-1f96-4d4d-bb56-a23d4699b14c
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Mirtazapine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `mirtazapine-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL654](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL654/) · max phase 4 · id via Wikipedia infobox

## Source summary

Noradrenergic and specific serotonergic antidepressant that works by blocking autoreceptors rather than by inhibiting reuptake.

## Mechanism

Adrenergic receptor alpha-2 antagonist; Serotonin 2a (5-HT2a) receptor antagonist; Serotonin 2c (5-HT2c) receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1996
- **Flags:** black-box warning
- **ATC N06AX11:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Other antidepressants

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 265.36 | 2.48 | 19.37 | 0/3 | 0 | C17H19N3 |

**Targets (ChEMBL curated mechanisms):**

- [[5-hydroxytryptamine receptor 2A (CHEMBL224)|5-hydroxytryptamine receptor 2A]] - antagonist · SINGLE PROTEIN
- [[5-hydroxytryptamine receptor 2C (CHEMBL225)|5-hydroxytryptamine receptor 2C]] - antagonist · SINGLE PROTEIN
- [[Adrenergic receptor alpha-2 (CHEMBL2095158)|Adrenergic receptor alpha-2]] - antagonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Mirtazapine*](https://en.wikipedia.org/w/index.php?title=Mirtazapine&oldid=1373834311) (revision 1373834311, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20–40 h | 20–40 hours |
| Protein binding | 85 % | 85% |
| Bioavailability | 50 % | 50% |
| Metabolism | hepatic | Liver (CYP1A2, CYP2D6, CYP3A4) |
| CYP (metabolised by) | CYP1A2, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Desmethylmirtazapine (contributes 3–10% of activity) |
| Excretion | mainly urinary | Urine: 75%; Feces: 15% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 412abf0e…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=412abf0e-1f96-4d4d-bb56-a23d4699b14c), label version 20260904. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 20, 26, 37, 40)
> - protein-binding: consistent (label values: 85)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Loxapine]] (5-hydroxytryptamine receptor 2A; 5-hydroxytryptamine receptor 2C), [[Olanzapine]] (5-hydroxytryptamine receptor 2A; 5-hydroxytryptamine receptor 2C), [[Risperidone]] (5-hydroxytryptamine receptor 2A; 5-hydroxytryptamine receptor 2C), [[Thioridazine]] (5-hydroxytryptamine receptor 2A; 5-hydroxytryptamine receptor 2C), [[Agomelatine (Valdoxan)]] (5-hydroxytryptamine receptor 2C), [[Aripiprazole]] (5-hydroxytryptamine receptor 2A), [[Brexpiprazole]] (5-hydroxytryptamine receptor 2A), [[Celiprolol]] (Adrenergic receptor alpha-2), [[Chlorpromazine]] (5-hydroxytryptamine receptor 2A), [[Clonidine]] (Adrenergic receptor alpha-2), [[Clozapine]] (5-hydroxytryptamine receptor 2A), [[Droperidol]] (5-hydroxytryptamine receptor 2A)
- **Same ATC subgroup:** [[Agomelatine (Valdoxan)]], [[Brexanolone]], [[Bupropion (Wellbutrin)]], [[Desvenlafaxine]], [[Duloxetine (Cymbalta)]], [[Esketamine (Spravato)]], [[Levomilnacipran]], [[Minaprine]], [[Nefazodone]], [[Tianeptine]], [[Trazodone (Desyrel)]], [[Venlafaxine (Effexor)]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
