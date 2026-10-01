---
type: compound
schema-version: 2
compound-id: aztreonam-compound
name: Aztreonam
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Bacterial penicillin-binding protein inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL158
chembl-max-phase: 4
half-life:
  value: 1.7
  value-max: null
  unit: h
  notes: 1.7 hours
protein-binding:
  value: 56.0
  value-max: null
  unit: percent
  notes: 56%
bioavailability:
  value: null
  value-max: null
  notes: 100% (IM) 0.1% (by mouth in rats) Unknown (by mouth in humans)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (minor %)
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
- identity-confirmed
- pk-fda-consistent
- pk-ema-discrepant
- pk-sources-disagree
pk-source:
  type: wikipedia-infobox
  title: Aztreonam
  url: https://en.wikipedia.org/w/index.php?title=Aztreonam&oldid=1349491989
  revision: 1349491989
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL158
  pref-name: AZTREONAM
  molecule-type: Small molecule
  first-approval: 1986
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01DF01
  targets:
  - id: CHEMBL2354204
    name: Bacterial penicillin-binding protein
    action: INHIBITOR
  properties:
    full-mwt: 435.44
    mw-freebase: 435.44
    alogp: -1.17
    psa: 201.58
    hba: 10
    hbd: 4
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.17
    full-molformula: C13H17N5O8S2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 9a105eaf-ee77-4016-beeb-d425a5565db2
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=9a105eaf-ee77-4016-beeb-d425a5565db2
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: discrepant
  product: Cayston
  ema-number: EMEA/H/C/000996
  url: https://www.ema.europa.eu/en/documents/product-information/cayston-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/cayston-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: discrepant
---

# Aztreonam

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `aztreonam-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL158](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL158/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Monobactam active only against aerobic gram-negative organisms, with essentially no cross-reactivity to penicillin allergy, which is its main clinical niche.

## Mechanism

Bacterial penicillin-binding protein inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1986
- **ATC J01DF01:** ANTIINFECTIVES FOR SYSTEMIC USE › OTHER BETA-LACTAM ANTIBACTERIALS › Monobactams

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 435.44 | -1.17 | 201.58 | 4/10 | 0 | C13H17N5O8S2 |

**Targets (ChEMBL curated mechanisms):**

- [[Bacterial penicillin-binding protein (CHEMBL2354204)|Bacterial penicillin-binding protein]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Aztreonam*](https://en.wikipedia.org/w/index.php?title=Aztreonam&oldid=1349491989) (revision 1349491989, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.7 h | 1.7 hours |
| Protein binding | 56 % | 56% |
| Bioavailability | - | 100% (IM) 0.1% (by mouth in rats) Unknown (by mouth in humans) |
| Metabolism | hepatic | Liver (minor %) |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 9a105eaf…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=9a105eaf-ee77-4016-beeb-d425a5565db2), label version 20251215. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1.7, 26)
> - protein-binding: consistent (label values: 56)

> [!danger] EU SmPC cross-check: **discrepant**
> Automated comparison with section 5.2 of the [EU SmPC of *Cayston*](https://www.ema.europa.eu/en/documents/product-information/cayston-epar-product-information_en.pdf) (EMEA/H/C/000996) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/cayston-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 1.7, 2.1)
> - protein-binding: discrepant (SmPC values: 77)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Amoxicillin]] (Bacterial penicillin-binding protein), [[Ampicillin]] (Bacterial penicillin-binding protein), [[Cefiderocol]] (Bacterial penicillin-binding protein), [[Ceftaroline]] (Bacterial penicillin-binding protein), [[Ceftazidime]] (Bacterial penicillin-binding protein), [[Ertapenem]] (Bacterial penicillin-binding protein), [[Meropenem]] (Bacterial penicillin-binding protein)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
