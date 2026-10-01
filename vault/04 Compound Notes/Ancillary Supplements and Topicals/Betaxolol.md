---
type: compound
schema-version: 2
compound-id: betaxolol-compound
name: Betaxolol
aliases: []
cluster: Ancillary Supplements and Topicals
group: derm
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL423
chembl-max-phase: 4
half-life:
  value: 14.0
  value-max: 22.0
  unit: h
  notes: 14–22 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 89.0
  value-max: null
  notes: 89%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (20%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
- group/derm
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Betaxolol
  url: https://en.wikipedia.org/w/index.php?title=Betaxolol&oldid=1358901661
  revision: 1358901661
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL423
  pref-name: BETAXOLOL
  molecule-type: Small molecule
  first-approval: 1985
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C07AB05
  - S01ED02
  - S01ED52
  targets: []
  properties:
    full-mwt: 307.43
    mw-freebase: 307.43
    alogp: 2.39
    psa: 50.72
    hba: 4
    hbd: 2
    rtb: 11
    num-ro5-violations: 0
    qed-weighted: 0.62
    full-molformula: C18H29NO3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: bf716efe-0a9f-43b1-9d8a-c69330b82e18
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=bf716efe-0a9f-43b1-9d8a-c69330b82e18
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Betaxolol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `betaxolol-compound`
- **Source group:** Dermatology & Topicals (`derm`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL423](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL423/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Cardioselective beta-1 blocker used as an eye drop, chosen over timolol where airway disease makes beta-2 blockade unsafe.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1985
- **ATC C07AB05:** CARDIOVASCULAR SYSTEM › BETA BLOCKING AGENTS › Beta blocking agents, selective
- **ATC S01ED02:** SENSORY ORGANS › ANTIGLAUCOMA PREPARATIONS AND MIOTICS › Beta blocking agents
- **ATC S01ED52:** SENSORY ORGANS › ANTIGLAUCOMA PREPARATIONS AND MIOTICS › Beta blocking agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 307.43 | 2.39 | 50.72 | 2/4 | 0 | C18H29NO3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Betaxolol*](https://en.wikipedia.org/w/index.php?title=Betaxolol&oldid=1358901661) (revision 1358901661, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 14–22 h | 14–22 hours |
| Bioavailability | 89 % | 89% |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Kidney (20%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set bf716efe…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=bf716efe-0a9f-43b1-9d8a-c69330b82e18), label version 20231220. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 14, 22, 30)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Atenolol (Tenormin)]], [[Bisoprolol]], [[Celiprolol]], [[Esmolol]], [[Levobunolol]], [[Metipranolol]], [[Metoprolol]], [[Nebivolol]], [[Timolol]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
