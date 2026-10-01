---
type: compound
schema-version: 2
compound-id: nabumetone-compound
name: Nabumetone
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Cyclooxygenase-2 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1070
chembl-max-phase: 4
half-life:
  value: 23.0
  value-max: null
  unit: h
  notes: 23 hours (active metabolite)
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '> 99% (active metabolite)'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, to active metabolite 6-methoxy-2-naphthylacetic acid; 6-MNA
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Nabumetone
  url: https://en.wikipedia.org/w/index.php?title=Nabumetone&oldid=1316039460
  revision: 1316039460
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1070
  pref-name: NABUMETONE
  molecule-type: Small molecule
  first-approval: 1991
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - M01AX01
  targets:
  - id: CHEMBL230
    name: Prostaglandin G/H synthase 2
    action: INHIBITOR
  properties:
    full-mwt: 228.29
    mw-freebase: 228.29
    alogp: 3.37
    psa: 26.3
    hba: 2
    hbd: 0
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.8
    full-molformula: C15H16O2
pk-verification:
  source: fda-label
  status: consistent
  set-id: 55e733f0-7633-4412-b5a3-07d9363bbd71
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=55e733f0-7633-4412-b5a3-07d9363bbd71
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Nabumetone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nabumetone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1070](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1070/) · max phase 4 · id via source catalogue

## Source summary

Cyclooxygenase-2 inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL1070).

## Mechanism

Cyclooxygenase-2 inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1991
- **Flags:** black-box warning, prodrug
- **ATC M01AX01:** MUSCULO-SKELETAL SYSTEM › ANTIINFLAMMATORY AND ANTIRHEUMATIC PRODUCTS, NON-STEROIDS › Other antiinflammatory and antirheumatic agents, non-steroids

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 228.29 | 3.37 | 26.3 | 0/2 | 0 | C15H16O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Prostaglandin G-H synthase 2 (CHEMBL230)|Prostaglandin G/H synthase 2]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nabumetone*](https://en.wikipedia.org/w/index.php?title=Nabumetone&oldid=1316039460) (revision 1316039460, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 23 h | 23 hours (active metabolite) |
| Protein binding | 99 % | > 99% (active metabolite) |
| Metabolism | hepatic | Liver, to active metabolite 6-methoxy-2-naphthylacetic acid; 6-MNA |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 55e733f0…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=55e733f0-7633-4412-b5a3-07d9363bbd71), label version 20260819. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 24, 26.9, 39.2, 48)
> - protein-binding: consistent (label values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aceclofenac]] (Prostaglandin G/H synthase 2), [[Carprofen]] (Prostaglandin G/H synthase 2), [[Celecoxib]] (Prostaglandin G/H synthase 2), [[Cimicoxib]] (Prostaglandin G/H synthase 2), [[Etodolac]] (Prostaglandin G/H synthase 2), [[Etoricoxib]] (Prostaglandin G/H synthase 2), [[Gw-406381]] (Prostaglandin G/H synthase 2), [[Iguratimod]] (Prostaglandin G/H synthase 2), [[Lumiracoxib]] (Prostaglandin G/H synthase 2), [[Meloxicam]] (Prostaglandin G/H synthase 2), [[Parecoxib]] (Prostaglandin G/H synthase 2), [[Rofecoxib]] (Prostaglandin G/H synthase 2)
- **Same ATC subgroup:** [[Benzydamine]], [[Glucosamine]], [[Nimesulide]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
