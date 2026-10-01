---
type: compound
schema-version: 2
compound-id: glecaprevir-compound
name: Glecaprevir
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
chembl-id: CHEMBL3545363
chembl-max-phase: 4
half-life:
  value: 6.0
  value-max: null
  unit: h
  notes: 6 hours
protein-binding:
  value: 97.5
  value-max: null
  unit: percent
  notes: 97.5%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Faeces (92.1%), urine (0.7%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A
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
- group/ancillary
- stub
- pk-auto
- chembl-profile
- chembl-name-match
pk-source:
  type: wikipedia-infobox
  title: Glecaprevir
  url: https://en.wikipedia.org/w/index.php?title=Glecaprevir&oldid=1370553172
  revision: 1370553172
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL3545363
  pref-name: GLECAPREVIR
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
    full-mwt: 838.88
    mw-freebase: 838.88
    alogp: 3.86
    psa: 195.22
    hba: 11
    hbd: 3
    rtb: 6
    num-ro5-violations: 2
    qed-weighted: 0.28
    full-molformula: C38H46F4N6O9S
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Glecaprevir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `glecaprevir-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL3545363](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3545363/) · max phase 4 · id via exact ChEMBL name match - confirm

## Source summary

Blocks an HCV replication target and is combined with complementary direct-acting antivirals to prevent resistance.

## Mechanism

Hepatitis C virus serine protease, NS3/NS4A inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2017

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 838.88 | 3.86 | 195.22 | 3/11 | 2 | C38H46F4N6O9S |

**Targets (ChEMBL curated mechanisms):**

- [[Hepatitis C virus serine protease, NS3-NS4A (CHEMBL2095231)|Hepatitis C virus serine protease, NS3/NS4A]] - inhibitor · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Glecaprevir*](https://en.wikipedia.org/w/index.php?title=Glecaprevir&oldid=1370553172) (revision 1370553172, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6 h | 6 hours |
| Protein binding | 97.5 % | 97.5% |
| Metabolism | hepatic | CYP3A |
| Excretion | mainly non-renal | Faeces (92.1%), urine (0.7%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Boceprevir]] (Hepatitis C virus serine protease, NS3/NS4A), [[Grazoprevir]] (Hepatitis C virus serine protease, NS3/NS4A), [[Telaprevir]] (Hepatitis C virus serine protease, NS3/NS4A), [[Voxilaprevir]] (Hepatitis C virus serine protease, NS3/NS4A)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
