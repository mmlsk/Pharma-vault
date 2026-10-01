---
type: compound
schema-version: 2
compound-id: metoprolol-compound
name: Metoprolol
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
chembl-id: CHEMBL13
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: 7.0
  unit: h
  notes: 3–7 hours
protein-binding:
  value: 12.0
  value-max: null
  unit: percent
  notes: 12%
bioavailability:
  value: 50.0
  value-max: null
  notes: 50% (single dose);; 70% (repeated administration)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver via CYP2D6, CYP3A4
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Metoprolol
  url: https://en.wikipedia.org/w/index.php?title=Metoprolol&oldid=1376129637
  revision: 1376129637
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL13
  pref-name: METOPROLOL
  molecule-type: Small molecule
  first-approval: 1978
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C07AB02
  targets: []
  properties:
    full-mwt: 267.37
    mw-freebase: 267.37
    alogp: 1.61
    psa: 50.72
    hba: 4
    hbd: 2
    rtb: 9
    num-ro5-violations: 0
    qed-weighted: 0.71
    full-molformula: C15H25NO3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 59ed27b8-32b5-60c0-e063-6394a90a8a23
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=59ed27b8-32b5-60c0-e063-6394a90a8a23
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Metoprolol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `metoprolol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL13](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL13/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

The most commonly prescribed beta-1 selective blocker; effective on blood pressure, without nebivolol's endothelial effect.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1978
- **Flags:** black-box warning
- **ATC C07AB02:** CARDIOVASCULAR SYSTEM › BETA BLOCKING AGENTS › Beta blocking agents, selective

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 267.37 | 1.61 | 50.72 | 2/4 | 0 | C15H25NO3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Metoprolol*](https://en.wikipedia.org/w/index.php?title=Metoprolol&oldid=1376129637) (revision 1376129637, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–7 h | 3–7 hours |
| Protein binding | 12 % | 12% |
| Bioavailability | 50 % | 50% (single dose);; 70% (repeated administration) |
| Metabolism | hepatic | Liver via CYP2D6, CYP3A4 |
| CYP (metabolised by) | CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 59ed27b8…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=59ed27b8-32b5-60c0-e063-6394a90a8a23), label version 20260826. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 3, 4, 7, 9)
> - protein-binding: consistent (label values: 10)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Atenolol (Tenormin)]], [[Betaxolol]], [[Bisoprolol]], [[Celiprolol]], [[Esmolol]], [[Nebivolol]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
