---
type: compound
schema-version: 2
compound-id: nebivolol-compound
name: Nebivolol
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
chembl-id: CHEMBL434394
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: 19.0
  unit: h
  notes: 12-19 hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney and fecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2D6-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Nebivolol
  url: https://en.wikipedia.org/w/index.php?title=Nebivolol&oldid=1369604339
  revision: 1369604339
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL434394
  pref-name: NEBIVOLOL
  molecule-type: Small molecule
  first-approval: 2007
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C07AB12
  targets: []
  properties:
    full-mwt: 405.44
    mw-freebase: 405.44
    alogp: 2.36
    psa: 70.95
    hba: 5
    hbd: 3
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.69
    full-molformula: C22H25F2NO4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 3e9e1048-b5ea-4d6a-9363-3ee0d059e088
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3e9e1048-b5ea-4d6a-9363-3ee0d059e088
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Nebivolol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nebivolol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL434394](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL434394/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Beta-1 selective blocker that also raises nitric oxide bioavailability, improving endothelial function rather than only lowering the number.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2007
- **ATC C07AB12:** CARDIOVASCULAR SYSTEM › BETA BLOCKING AGENTS › Beta blocking agents, selective

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 405.44 | 2.36 | 70.95 | 3/5 | 0 | C22H25F2NO4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nebivolol*](https://en.wikipedia.org/w/index.php?title=Nebivolol&oldid=1369604339) (revision 1369604339, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12–19 h | 12-19 hours |
| Protein binding | 98 % | 98% |
| Metabolism | hepatic | Liver (CYP2D6-mediated) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | - | Kidney and fecal |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 3e9e1048…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3e9e1048-b5ea-4d6a-9363-3ee0d059e088), label version 20260609. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 12, 19)
> - protein-binding: consistent (label values: 98)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Atenolol (Tenormin)]], [[Betaxolol]], [[Bisoprolol]], [[Celiprolol]], [[Esmolol]], [[Metoprolol]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
