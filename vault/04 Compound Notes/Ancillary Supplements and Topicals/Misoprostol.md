---
type: compound
schema-version: 2
compound-id: misoprostol-compound
name: Misoprostol
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Prostanoid EP3 receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL606
chembl-max-phase: 4
half-life:
  value: 20.0
  value-max: 40.0
  unit: min
  notes: 20–40 minutes
protein-binding:
  value: 80.0
  value-max: 90.0
  unit: percent
  notes: 80–90% (active metabolite, misoprostol acid)
bioavailability:
  value: null
  value-max: null
  notes: extensively absorbed
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (80%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (extensive to misoprostic acid)
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
  title: Misoprostol
  url: https://en.wikipedia.org/w/index.php?title=Misoprostol&oldid=1371674112
  revision: 1371674112
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL606
  pref-name: MISOPROSTOL
  molecule-type: Small molecule
  first-approval: 1988
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - A02BB01
  - G02AD06
  targets:
  - id: CHEMBL3710
    name: Prostaglandin E2 receptor EP3 subtype
    action: AGONIST
  properties:
    full-mwt: 382.54
    mw-freebase: 382.54
    alogp: 3.95
    psa: 83.83
    hba: 5
    hbd: 2
    rtb: 13
    num-ro5-violations: 0
    qed-weighted: 0.29
    full-molformula: C22H38O5
pk-verification:
  source: fda-label
  status: consistent
  set-id: c4fe14fb-0a43-4c31-9cd6-29eb0d156705
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c4fe14fb-0a43-4c31-9cd6-29eb0d156705
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Misoprostol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `misoprostol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL606](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL606/) · max phase 4 · id via Wikipedia infobox

## Source summary

PGE1 analogue used for NSAID ulcer prophylaxis and in obstetrics; uterotonic effect is the reason for its pregnancy contraindication.

## Mechanism

Prostanoid EP3 receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1988
- **Flags:** black-box warning, prodrug
- **ATC A02BB01:** ALIMENTARY TRACT AND METABOLISM › DRUGS FOR PEPTIC ULCER AND GASTRO-OESOPHAGEAL REFLUX DISEASE (GORD) › Prostaglandins
- **ATC G02AD06:** GENITO URINARY SYSTEM AND SEX HORMONES › UTEROTONICS › Prostaglandins

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 382.54 | 3.95 | 83.83 | 2/5 | 0 | C22H38O5 |

**Targets (ChEMBL curated mechanisms):**

- [[Prostaglandin E2 receptor EP3 subtype (CHEMBL3710)|Prostaglandin E2 receptor EP3 subtype]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Misoprostol*](https://en.wikipedia.org/w/index.php?title=Misoprostol&oldid=1371674112) (revision 1371674112, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20–40 min | 20–40 minutes |
| Protein binding | 80–90 % | 80–90% (active metabolite, misoprostol acid) |
| Bioavailability | - | extensively absorbed |
| Metabolism | hepatic | Liver (extensive to misoprostic acid) |
| Excretion | mainly urinary | Urine (80%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set c4fe14fb…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c4fe14fb-0a43-4c31-9cd6-29eb0d156705), label version 20260825. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.2, 0.333, 0.667)
> - protein-binding: consistent (label values: 90)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Carboprost]], [[Dinoprostone]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
