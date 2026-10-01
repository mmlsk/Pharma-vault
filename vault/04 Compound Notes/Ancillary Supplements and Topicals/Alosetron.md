---
type: compound
schema-version: 2
compound-id: alosetron-compound
name: Alosetron
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1110
chembl-max-phase: 4
half-life:
  value: 1.5
  value-max: 1.7
  unit: h
  notes: 1.5–1.7 hours
protein-binding:
  value: 82.0
  value-max: null
  unit: percent
  notes: 82%
bioavailability:
  value: 50.0
  value-max: 60.0
  notes: 50–60%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney 73%, feces 24%
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (including CYP2C9, CYP3A4 and CYP1A2)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2C9
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2C9, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Alosetron
  url: https://en.wikipedia.org/w/index.php?title=Alosetron&oldid=1325952564
  revision: 1325952564
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1110
  pref-name: ALOSETRON
  molecule-type: Small molecule
  first-approval: 2000
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - A03AE01
  targets: []
  properties:
    full-mwt: 294.36
    mw-freebase: 294.36
    alogp: 2.41
    psa: 53.92
    hba: 3
    hbd: 1
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.79
    full-molformula: C17H18N4O
pk-verification:
  source: fda-label
  status: consistent
  set-id: 38f5341f-5ae3-46bf-8bfc-30dff2068477
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=38f5341f-5ae3-46bf-8bfc-30dff2068477
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Alosetron

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `alosetron-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1110](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1110/) · max phase 4 · id via Wikipedia infobox

## Source summary

Antagonises 5-HT3 receptors on vagal afferents and in the area postrema; QT effects vary by agent; restricted prescribing for IBS-D.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2000
- **Flags:** black-box warning
- **ATC A03AE01:** ALIMENTARY TRACT AND METABOLISM › DRUGS FOR FUNCTIONAL GASTROINTESTINAL DISORDERS › Serotonin receptor antagonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 294.36 | 2.41 | 53.92 | 1/3 | 0 | C17H18N4O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Alosetron*](https://en.wikipedia.org/w/index.php?title=Alosetron&oldid=1325952564) (revision 1325952564, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.5–1.7 h | 1.5–1.7 hours |
| Protein binding | 82 % | 82% |
| Bioavailability | 50–60 % | 50–60% |
| Metabolism | hepatic | Liver (including CYP2C9, CYP3A4 and CYP1A2) |
| CYP (metabolised by) | CYP1A2, CYP2C9, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney 73%, feces 24% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 38f5341f…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=38f5341f-5ae3-46bf-8bfc-30dff2068477), label version 20260401. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1.5)
> - protein-binding: consistent (label values: 82)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP2C9 (+40 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
