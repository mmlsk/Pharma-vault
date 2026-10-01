---
type: compound
schema-version: 2
compound-id: pilocarpine-compound
name: Pilocarpine
aliases: []
cluster: Ancillary Supplements and Topicals
group: derm
class: null
subclass: null
mechanism: Muscarinic acetylcholine receptor M1 agonist; Muscarinic acetylcholine receptor M3 agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL550
chembl-max-phase: 4
half-life:
  value: 0.76
  value-max: null
  unit: h
  notes: 0.76 hours (5 mg), 1.35 hours (10 mg)
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine
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
- needs-compound-review
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/derm
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Pilocarpine
  url: https://en.wikipedia.org/w/index.php?title=Pilocarpine&oldid=1363378330
  revision: 1363378330
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL550
  pref-name: PILOCARPINE
  molecule-type: Small molecule
  first-approval: 1974
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N07AX01
  - S01EB01
  - S01EB51
  targets:
  - id: CHEMBL245
    name: Muscarinic acetylcholine receptor M3
    action: AGONIST
  - id: CHEMBL216
    name: Muscarinic acetylcholine receptor M1
    action: AGONIST
  properties:
    full-mwt: 208.26
    mw-freebase: 208.26
    alogp: 1.16
    psa: 44.12
    hba: 4
    hbd: 0
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.7
    full-molformula: C11H16N2O2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Pilocarpine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pilocarpine-compound`
- **Source group:** Dermatology & Topicals (`derm`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL550](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL550/) · max phase 4 · id via Wikipedia infobox

## Source summary

Muscarinic agonist used as a miotic in glaucoma, as an oral treatment for xerostomia, and now topically for presbyopia.

## Mechanism

Muscarinic acetylcholine receptor M1 agonist; Muscarinic acetylcholine receptor M3 agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1974
- **ATC N07AX01:** NERVOUS SYSTEM › PARASYMPATHOMIMETICS › Other parasympathomimetics
- **ATC S01EB01:** SENSORY ORGANS › ANTIGLAUCOMA PREPARATIONS AND MIOTICS › Parasympathomimetics
- **ATC S01EB51:** SENSORY ORGANS › ANTIGLAUCOMA PREPARATIONS AND MIOTICS › Parasympathomimetics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 208.26 | 1.16 | 44.12 | 0/4 | 0 | C11H16N2O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Muscarinic acetylcholine receptor M3 (CHEMBL245)|Muscarinic acetylcholine receptor M3]] - agonist · SINGLE PROTEIN
- [[Muscarinic acetylcholine receptor M1 (CHEMBL216)|Muscarinic acetylcholine receptor M1]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pilocarpine*](https://en.wikipedia.org/w/index.php?title=Pilocarpine&oldid=1363378330) (revision 1363378330, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.76 h | 0.76 hours (5 mg), 1.35 hours (10 mg) |
| Excretion | mainly urinary | Urine |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Atropine]] (Muscarinic acetylcholine receptor M1; Muscarinic acetylcholine receptor M3), [[Talsaclidine]] (Muscarinic acetylcholine receptor M1; Muscarinic acetylcholine receptor M3), [[Hyoscine (Scopolamine)]] (Muscarinic acetylcholine receptor M1), [[Imidafenacin]] (Muscarinic acetylcholine receptor M3), [[Minaprine]] (Muscarinic acetylcholine receptor M1), [[Navafenterol]] (Muscarinic acetylcholine receptor M3), [[Oxybutynin]] (Muscarinic acetylcholine receptor M3), [[Tropicamide]] (Muscarinic acetylcholine receptor M3), [[Xanomeline]] (Muscarinic acetylcholine receptor M1)
- **Same ATC subgroup:** [[Demecarium]], [[Echothiophate]], [[Isoflurophate]], [[Neostigmine]], [[Physostigmine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[Cholinergic Load]]
