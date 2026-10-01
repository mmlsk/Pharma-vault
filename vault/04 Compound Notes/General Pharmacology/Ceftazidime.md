---
type: compound
schema-version: 2
compound-id: ceftazidime-compound
name: Ceftazidime
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
chembl-id: CHEMBL44354
chembl-max-phase: 4
half-life:
  value: 1.6
  value-max: 2.0
  unit: h
  notes: 1.6–2 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 91.0
  value-max: null
  notes: 91% (IM)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 90–96% kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: negligible
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
source-status: partially-verified
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
pk-source:
  type: wikipedia-infobox
  title: Ceftazidime
  url: https://en.wikipedia.org/w/index.php?title=Ceftazidime&oldid=1338929532
  revision: 1338929532
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL44354
  pref-name: CEFTAZIDIME
  molecule-type: Small molecule
  first-approval: 1985
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J01DD02
  targets:
  - id: CHEMBL2354204
    name: Bacterial penicillin-binding protein
    action: INHIBITOR
  properties:
    full-mwt: 546.59
    mw-freebase: 546.59
    alogp: -1.3
    psa: 191.22
    hba: 11
    hbd: 3
    rtb: 9
    num-ro5-violations: 2
    qed-weighted: 0.15
    full-molformula: C22H22N6O7S2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 112c5457-8d71-49f5-b531-9761d7d38c93
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=112c5457-8d71-49f5-b531-9761d7d38c93
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Ceftazidime

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ceftazidime-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL44354](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL44354/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Third-generation cephalosporin with strong antipseudomonal activity but weak staphylococcal cover, a trade-off written into its side chain.

## Mechanism

Bacterial penicillin-binding protein inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1985
- **Flags:** black-box warning
- **ATC J01DD02:** ANTIINFECTIVES FOR SYSTEMIC USE › OTHER BETA-LACTAM ANTIBACTERIALS › Third-generation cephalosporins

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 546.59 | -1.3 | 191.22 | 3/11 | 2 | C22H22N6O7S2 |

**Targets (ChEMBL curated mechanisms):**

- [[Bacterial penicillin-binding protein (CHEMBL2354204)|Bacterial penicillin-binding protein]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ceftazidime*](https://en.wikipedia.org/w/index.php?title=Ceftazidime&oldid=1338929532) (revision 1338929532, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.6–2 h | 1.6–2 hours |
| Bioavailability | 91 % | 91% (IM) |
| Metabolism | - | negligible |
| Excretion | mainly urinary | 90–96% kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 112c5457…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=112c5457-8d71-49f5-b531-9761d7d38c93), label version 20260803. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1.9, 2)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Amoxicillin]] (Bacterial penicillin-binding protein), [[Ampicillin]] (Bacterial penicillin-binding protein), [[Aztreonam]] (Bacterial penicillin-binding protein), [[Cefiderocol]] (Bacterial penicillin-binding protein), [[Ceftaroline]] (Bacterial penicillin-binding protein), [[Ertapenem]] (Bacterial penicillin-binding protein), [[Meropenem]] (Bacterial penicillin-binding protein)
- **Same ATC subgroup:** [[Ceftriaxone]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
