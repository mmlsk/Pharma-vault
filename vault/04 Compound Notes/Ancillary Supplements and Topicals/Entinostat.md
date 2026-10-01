---
type: compound
schema-version: 2
compound-id: entinostat-compound
name: Entinostat
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Histone deacetylase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL27759
chembl-max-phase: 3
half-life:
  value: 33.0
  value-max: 150.0
  unit: h
  notes: 33–150 hours
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Entinostat
  url: https://en.wikipedia.org/w/index.php?title=Entinostat&oldid=1368798893
  revision: 1368798893
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL27759
  pref-name: ENTINOSTAT
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01XH05
  targets:
  - id: CHEMBL2093865
    name: Histone deacetylase
    action: INHIBITOR
  properties:
    full-mwt: 376.42
    mw-freebase: 376.42
    alogp: 3.34
    psa: 106.34
    hba: 5
    hbd: 3
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.57
    full-molformula: C21H20N4O3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Entinostat

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `entinostat-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL27759](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL27759/) · max phase 3 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Class I selective HDAC inhibitor investigated in combination oncology.

## Mechanism

Histone deacetylase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC L01XH05:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › OTHER ANTINEOPLASTIC AGENTS › Histone deacetylase (HDAC) inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 376.42 | 3.34 | 106.34 | 3/5 | 0 | C21H20N4O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Histone deacetylase (CHEMBL2093865)|Histone deacetylase]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Entinostat*](https://en.wikipedia.org/w/index.php?title=Entinostat&oldid=1368798893) (revision 1368798893, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 33–150 h | 33–150 hours |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Abexinostat]] (Histone deacetylase), [[Belinostat]] (Histone deacetylase), [[Cudc-101]] (Histone deacetylase), [[Fimepinostat]] (Histone deacetylase), [[Quisinostat]] (Histone deacetylase), [[Tacedinaline]] (Histone deacetylase)
- **Same ATC subgroup:** [[Belinostat]], [[Panobinostat]], [[Resminostat]], [[Tucidinostat (chidamide)]], [[Vorinostat]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
