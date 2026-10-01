---
type: compound
schema-version: 2
compound-id: topiramate-compound
name: Topiramate (Topamax)
aliases:
- Topiramate
- Topamax
cluster: Metabolic and Incretin Agents
group: glp1
class: null
subclass: null
mechanism: Carbonic anhydrase II inhibitor; Carbonic anhydrase IV inhibitor; GABA-A receptor; anion channel positive modulator; Glutamate receptor ionotropic AMPA antagonist; Glutamate receptor ionotropic kainate antagonist; Sodium channel alpha subunit blocker
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL220492
chembl-max-phase: 4
half-life:
  value: 21.0
  value-max: null
  unit: h
  notes: 21 hours
protein-binding:
  value: 13.0
  value-max: 17.0
  unit: percent
  notes: 13–17%; 15–41%
bioavailability:
  value: 80.0
  value-max: null
  notes: 80%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (70–80%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (20–30%)
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
- glucose-metabolism
- gastrointestinal
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/glp1
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Topiramate
  url: https://en.wikipedia.org/w/index.php?title=Topiramate&oldid=1356289493
  revision: 1356289493
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL220492
  pref-name: TOPIRAMATE
  molecule-type: Small molecule
  first-approval: 1996
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N03AX11
  targets:
  - id: CHEMBL205
    name: Carbonic anhydrase 2
    action: INHIBITOR
  - id: CHEMBL3729
    name: Carbonic anhydrase 4
    action: INHIBITOR
  - id: CHEMBL2096670
    name: Glutamate receptor ionotropic AMPA
    action: ANTAGONIST
  - id: CHEMBL2109241
    name: Glutamate receptor ionotropic kainate
    action: ANTAGONIST
  - id: CHEMBL2093872
    name: GABA-A receptor; anion channel
    action: POSITIVE MODULATOR
  - id: CHEMBL2331043
    name: Sodium channel alpha subunit
    action: BLOCKER
  properties:
    full-mwt: 339.37
    mw-freebase: 339.37
    alogp: -0.4
    psa: 115.54
    hba: 8
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.74
    full-molformula: C12H21NO8S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 3f99b26b-79b9-4efb-aa2c-2868e1e126c8
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3f99b26b-79b9-4efb-aa2c-2868e1e126c8
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Topiramate (Topamax)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `topiramate-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **Aliases:** Topiramate, Topamax
- **ChEMBL:** [CHEMBL220492](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL220492/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Antiseizure drug that reduces appetite and weight, used alone off-label or with phentermine; cognitive slowing, kidney stones, and teratogenicity are key risks.

## Mechanism

Carbonic anhydrase II inhibitor; Carbonic anhydrase IV inhibitor; GABA-A receptor; anion channel positive modulator; Glutamate receptor ionotropic AMPA antagonist; Glutamate receptor ionotropic kainate antagonist; Sodium channel alpha subunit blocker _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1996
- **ATC N03AX11:** NERVOUS SYSTEM › ANTIEPILEPTICS › Other antiepileptics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 339.37 | -0.4 | 115.54 | 1/8 | 0 | C12H21NO8S |

**Targets (ChEMBL curated mechanisms):**

- [[Carbonic anhydrase 2 (CHEMBL205)|Carbonic anhydrase 2]] - inhibitor · SINGLE PROTEIN
- [[Carbonic anhydrase 4 (CHEMBL3729)|Carbonic anhydrase 4]] - inhibitor · SINGLE PROTEIN
- [[Glutamate receptor ionotropic AMPA (CHEMBL2096670)|Glutamate receptor ionotropic AMPA]] - antagonist · PROTEIN COMPLEX GROUP
- [[Glutamate receptor ionotropic kainate (CHEMBL2109241)|Glutamate receptor ionotropic kainate]] - antagonist · PROTEIN COMPLEX GROUP
- [[GABA-A receptor; anion channel (CHEMBL2093872)|GABA-A receptor; anion channel]] - positive modulator · PROTEIN COMPLEX GROUP
- [[Sodium channel alpha subunit (CHEMBL2331043)|Sodium channel alpha subunit]] - blocker · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Topiramate*](https://en.wikipedia.org/w/index.php?title=Topiramate&oldid=1356289493) (revision 1356289493, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 21 h | 21 hours |
| Protein binding | 13–17 % | 13–17%; 15–41% |
| Bioavailability | 80 % | 80% |
| Metabolism | hepatic | Liver (20–30%) |
| Excretion | mainly urinary | Urine (70–80%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 3f99b26b…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3f99b26b-79b9-4efb-aa2c-2868e1e126c8), label version 20260904. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 21)
> - protein-binding: consistent (label values: 13, 15, 23, 41)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acetazolamide]] (Carbonic anhydrase 2; Carbonic anhydrase 4), [[Cenobamate]] (GABA-A receptor; anion channel; Sodium channel alpha subunit), [[Dichlorphenamide]] (Carbonic anhydrase 2; Carbonic anhydrase 4), [[Methazolamide]] (Carbonic anhydrase 2; Carbonic anhydrase 4), [[Primidone]] (GABA-A receptor; anion channel; Sodium channel alpha subunit), [[Abp-700]] (GABA-A receptor; anion channel), [[Adipiplon]] (GABA-A receptor; anion channel), [[Alprazolam]] (GABA-A receptor; anion channel), [[BIIB104]] (Glutamate receptor ionotropic AMPA), [[Brexanolone]] (GABA-A receptor; anion channel), [[Brinzolamide]] (Carbonic anhydrase 2), [[Butalbital]] (GABA-A receptor; anion channel)
- **Same ATC subgroup:** [[Brivaracetam]], [[Cannabidiol (Epidiolex)]], [[Cenobamate]], [[Felbamate]], [[Fenfluramine]], [[Ganaxolone]], [[Lacosamide]], [[Lamotrigine]], [[Levetiracetam]], [[Perampanel]], [[Pheneturide]], [[Retigabine (Ezogabine)]]

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[Glucose and Incretin Signaling]]
