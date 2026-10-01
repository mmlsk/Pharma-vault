---
type: compound
schema-version: 2
compound-id: lumefantrine-compound
name: Lumefantrine
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Ferriprotoporphyrin IX inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL38827
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: 6.0
  unit: d
  notes: 3-6 days
protein-binding:
  value: 99.7
  value-max: null
  unit: percent
  notes: 99.7%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
pk-source:
  type: wikipedia-infobox
  title: Lumefantrine
  url: https://en.wikipedia.org/w/index.php?title=Lumefantrine&oldid=1343037699
  revision: 1343037699
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL38827
  pref-name: LUMEFANTRINE
  molecule-type: Small molecule
  first-approval: 2009
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL613897
    name: Ferriprotoporphyrin IX
    action: INHIBITOR
  properties:
    full-mwt: 528.95
    mw-freebase: 528.95
    alogp: 9.15
    psa: 23.47
    hba: 2
    hbd: 1
    rtb: 10
    num-ro5-violations: 2
    qed-weighted: 0.22
    full-molformula: C30H32Cl3NO
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Lumefantrine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lumefantrine-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL38827](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL38827/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Long-acting partner drug to artemether, clearing residual parasites after the artemisinin has cleared the bulk.

## Mechanism

Ferriprotoporphyrin IX inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2009

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 528.95 | 9.15 | 23.47 | 1/2 | 2 | C30H32Cl3NO |

**Targets (ChEMBL curated mechanisms):**

- [[Ferriprotoporphyrin IX (CHEMBL613897)|Ferriprotoporphyrin IX]] - inhibitor · SMALL MOLECULE

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lumefantrine*](https://en.wikipedia.org/w/index.php?title=Lumefantrine&oldid=1343037699) (revision 1343037699, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–6 d | 3-6 days |
| Protein binding | 99.7 % | 99.7% |
| Metabolites | - | desbutyl-lumefantrine |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Artemether]] (Ferriprotoporphyrin IX), [[Piperaquine]] (Ferriprotoporphyrin IX)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
