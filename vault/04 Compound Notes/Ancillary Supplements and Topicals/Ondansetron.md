---
type: compound
schema-version: 2
compound-id: ondansetron-compound
name: Ondansetron
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Serotonin 3a (5-HT3a) receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL46
chembl-max-phase: 4
half-life:
  value: 5.7
  value-max: null
  unit: h
  notes: 5.7 hours
protein-binding:
  value: 70.0
  value-max: 76.0
  unit: percent
  notes: 70–76%
bioavailability:
  value: 60.0
  value-max: null
  notes: ~60%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4, CYP1A2, CYP2D6)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Ondansetron
  url: https://en.wikipedia.org/w/index.php?title=Ondansetron&oldid=1370221139
  revision: 1370221139
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL46
  pref-name: ONDANSETRON
  molecule-type: Small molecule
  first-approval: 1991
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A04AA01
  targets:
  - id: CHEMBL1899
    name: 5-hydroxytryptamine receptor 3A
    action: ANTAGONIST
  properties:
    full-mwt: 293.37
    mw-freebase: 293.37
    alogp: 3.13
    psa: 39.82
    hba: 4
    hbd: 0
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.73
    full-molformula: C18H19N3O
pk-verification:
  source: fda-label
  status: consistent
  set-id: 416be720-82e8-4a6d-8531-c1a29869daae
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=416be720-82e8-4a6d-8531-c1a29869daae
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Ondansetron

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ondansetron-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL46](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL46/) · max phase 4 · id via Wikipedia infobox

## Source summary

Antagonises 5-HT3 receptors on vagal afferents and in the area postrema; QT effects vary by agent.

## Mechanism

Serotonin 3a (5-HT3a) receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1991
- **ATC A04AA01:** ALIMENTARY TRACT AND METABOLISM › ANTIEMETICS AND ANTINAUSEANTS › Serotonin (5HT3) antagonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 293.37 | 3.13 | 39.82 | 0/4 | 0 | C18H19N3O |

**Targets (ChEMBL curated mechanisms):**

- [[5-hydroxytryptamine receptor 3A (CHEMBL1899)|5-hydroxytryptamine receptor 3A]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ondansetron*](https://en.wikipedia.org/w/index.php?title=Ondansetron&oldid=1370221139) (revision 1370221139, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5.7 h | 5.7 hours |
| Protein binding | 70–76 % | 70–76% |
| Bioavailability | 60 % | ~60% |
| Metabolism | hepatic | Liver (CYP3A4, CYP1A2, CYP2D6) |
| CYP (metabolised by) | CYP1A2, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 416be720…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=416be720-82e8-4a6d-8531-c1a29869daae), label version 20260901. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 5.7, 11.6, 20)
> - protein-binding: consistent (label values: 70, 76)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Palonosetron]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
