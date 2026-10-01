---
type: compound
schema-version: 2
compound-id: voxilaprevir-compound
name: Voxilaprevir
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Hepatitis C virus serine protease, NS3/NS4A inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3707372
chembl-max-phase: 4
half-life:
  value: null
  unit: null
  notes: null
protein-binding:
  value: null
  unit: percent
  notes: null
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
- needs-compound-review
source-status: source-summary-only
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- chembl-profile
- chembl-name-match
- identity-curated
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL3707372
  pref-name: VOXILAPREVIR
  molecule-type: Small molecule
  first-approval: 2017
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL2095231
    name: Hepatitis C virus serine protease, NS3/NS4A
    action: INHIBITOR
  properties:
    full-mwt: 861.02
    mw-freebase: 861.02
    alogp: 5.35
    psa: 195.22
    hba: 11
    hbd: 3
    rtb: 8
    num-ro5-violations: 3
    qed-weighted: 0.31
    full-molformula: C42H58F2N6O9S
  identity-check: conflict
  identity-decision:
    decision: confirm
    reviewer: agent-review 2026-10-01
    reason: INN pref_name matches; ChEMBL structure (C42H58F2N6O9S) differs from PubChem/INN formula C40H52F4N6O9S - identity kept, ChEMBL physicochemical properties flagged as unreliable
---

# Voxilaprevir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `voxilaprevir-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL3707372](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3707372/) · max phase 4 · id via exact ChEMBL name match · structure check: ❌ conflicts with PubChem - see Review Queue · decision: confirm (INN pref_name matches; ChEMBL structure (C42H58F2N6O9S) differs from PubChem/INN formula C40H52F4N6O9S - identity kept, ChEMBL physicochemical properties flagged as unreliable)

## Source summary

Blocks an HCV replication target and is combined with complementary direct-acting antivirals to prevent resistance.

## Mechanism

Hepatitis C virus serine protease, NS3/NS4A inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2017

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 861.02 | 5.35 | 195.22 | 3/11 | 3 | C42H58F2N6O9S |

**Targets (ChEMBL curated mechanisms):**

- [[Hepatitis C virus serine protease, NS3-NS4A (CHEMBL2095231)|Hepatitis C virus serine protease, NS3/NS4A]] - inhibitor · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Boceprevir]] (Hepatitis C virus serine protease, NS3/NS4A), [[Glecaprevir]] (Hepatitis C virus serine protease, NS3/NS4A), [[Grazoprevir]] (Hepatitis C virus serine protease, NS3/NS4A), [[Telaprevir]] (Hepatitis C virus serine protease, NS3/NS4A)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
