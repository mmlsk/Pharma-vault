---
type: compound
schema-version: 2
compound-id: palonosetron-compound
name: Palonosetron
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
chembl-id: CHEMBL1189679
chembl-max-phase: 4
half-life:
  value: 40.0
  value-max: 50.0
  unit: h
  notes: Approximately 40–50 hours
protein-binding:
  value: 62.0
  value-max: null
  unit: percent
  notes: 62%
bioavailability:
  value: 97.0
  value-max: null
  notes: 97% (oral)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.49
  notes: Kidney, 80% (of which 49% unchanged); fecal (5 to 8%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, 50% (mostly CYP2D6-mediated, CYP3A4 and CYP1A2 also involved)
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
  title: Palonosetron
  url: https://en.wikipedia.org/w/index.php?title=Palonosetron&oldid=1333743869
  revision: 1333743869
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1189679
  pref-name: PALONOSETRON
  molecule-type: Small molecule
  first-approval: 2003
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A04AA05
  - A04AA55
  targets: []
  properties:
    full-mwt: 296.41
    mw-freebase: 296.41
    alogp: 2.66
    psa: 23.55
    hba: 2
    hbd: 0
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.8
    full-molformula: C19H24N2O
pk-verification:
  source: fda-label
  status: consistent
  set-id: ee6f6f94-1ca7-481e-9909-b19ae64e80c2
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ee6f6f94-1ca7-481e-9909-b19ae64e80c2
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Palonosetron

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `palonosetron-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1189679](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1189679/) · max phase 4 · id via Wikipedia infobox

## Source summary

Antagonises 5-HT3 receptors on vagal afferents and in the area postrema; QT effects vary by agent.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2003
- **ATC A04AA05:** ALIMENTARY TRACT AND METABOLISM › ANTIEMETICS AND ANTINAUSEANTS › Serotonin (5HT3) antagonists
- **ATC A04AA55:** ALIMENTARY TRACT AND METABOLISM › ANTIEMETICS AND ANTINAUSEANTS › Serotonin (5HT3) antagonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 296.41 | 2.66 | 23.55 | 0/2 | 0 | C19H24N2O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Palonosetron*](https://en.wikipedia.org/w/index.php?title=Palonosetron&oldid=1333743869) (revision 1333743869, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 40–50 h | Approximately 40–50 hours |
| Protein binding | 62 % | 62% |
| Bioavailability | 97 % | 97% (oral) |
| Metabolism | hepatic | Liver, 50% (mostly CYP2D6-mediated, CYP3A4 and CYP1A2 also involved) |
| CYP (metabolised by) | CYP1A2, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary · fe 0.49 | Kidney, 80% (of which 49% unchanged); fecal (5 to 8%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set ee6f6f94…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ee6f6f94-1ca7-481e-9909-b19ae64e80c2), label version 20260825. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 20, 30, 40)
> - protein-binding: consistent (label values: 62)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Ondansetron]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
