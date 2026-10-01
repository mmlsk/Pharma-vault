---
type: compound
schema-version: 2
compound-id: metronidazole-compound
name: Metronidazole
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: DNA inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL137
chembl-max-phase: 4
half-life:
  value: 8.0
  value-max: null
  unit: h
  notes: 8 hours
protein-binding:
  value: 20.0
  value-max: null
  unit: percent
  notes: 20%
bioavailability:
  value: 80.0
  value-max: null
  notes: 80% (by mouth), 60–80% (rectal), 20–25% (vaginal)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (77%), faeces (14%)
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
- cyp-interactions
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Metronidazole
  url: https://en.wikipedia.org/w/index.php?title=Metronidazole&oldid=1374900844
  revision: 1374900844
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL137
  pref-name: METRONIDAZOLE
  molecule-type: Small molecule
  first-approval: 1963
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - A01AB17
  - D06BX01
  - G01AF01
  - J01XD01
  - P01AB01
  - P01AB51
  targets:
  - id: CHEMBL2364041
    name: DNA
    action: INHIBITOR
  properties:
    full-mwt: 171.16
    mw-freebase: 171.16
    alogp: 0.09
    psa: 81.19
    hba: 5
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.52
    full-molformula: C6H9N3O3
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 4040db14-750f-6d20-e054-00144ff8d46c
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4040db14-750f-6d20-e054-00144ff8d46c
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
---

# Metronidazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `metronidazole-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL137](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL137/) · max phase 4 · id via Wikipedia infobox

## Source summary

Nitroimidazole active only against organisms with an anaerobic reducing environment, covering anaerobic bacteria and several protozoa.

## Mechanism

DNA inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1963
- **Flags:** black-box warning
- **ATC A01AB17:** ALIMENTARY TRACT AND METABOLISM › STOMATOLOGICAL PREPARATIONS › Antiinfectives and antiseptics for local oral treatment
- **ATC D06BX01:** DERMATOLOGICALS › CHEMOTHERAPEUTICS FOR TOPICAL USE › Other chemotherapeutics
- **ATC G01AF01:** GENITO URINARY SYSTEM AND SEX HORMONES › ANTIINFECTIVES AND ANTISEPTICS, EXCL. COMBINATIONS WITH CORTICOSTEROIDS › Imidazole derivatives
- **ATC J01XD01:** ANTIINFECTIVES FOR SYSTEMIC USE › OTHER ANTIBACTERIALS › Imidazole derivatives
- **ATC P01AB01:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › AGENTS AGAINST AMOEBIASIS AND OTHER PROTOZOAL DISEASES › Nitroimidazole derivatives
- **ATC P01AB51:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › AGENTS AGAINST AMOEBIASIS AND OTHER PROTOZOAL DISEASES › Nitroimidazole derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 171.16 | 0.09 | 81.19 | 1/5 | 0 | C6H9N3O3 |

**Targets (ChEMBL curated mechanisms):**

- [[DNA (CHEMBL2364041)|DNA]] - inhibitor · NUCLEIC-ACID

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Metronidazole*](https://en.wikipedia.org/w/index.php?title=Metronidazole&oldid=1374900844) (revision 1374900844, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8 h | 8 hours |
| Protein binding | 20 % | 20% |
| Bioavailability | 80 % | 80% (by mouth), 60–80% (rectal), 20–25% (vaginal) |
| Metabolism | hepatic | Liver |
| Metabolites | - | Hydroxymetronidazole |
| Excretion | mainly urinary | Urine (77%), faeces (14%) |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 4040db14…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4040db14-750f-6d20-e054-00144ff8d46c), label version 20260826. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 22.5, 72, 109)
> - protein-binding: consistent (label values: 20)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Nitrofurantoin]] (DNA)
- **Same ATC subgroup:** [[Amphotericin B]], [[Econazole]], [[Minocycline]], [[Sertaconazole]], [[Tetracycline]], [[Tioconazole]], [[Tirbanibulin]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
