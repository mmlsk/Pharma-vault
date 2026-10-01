---
type: compound
schema-version: 2
compound-id: belinostat-compound
name: Belinostat
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
chembl-id: CHEMBL408513
chembl-max-phase: 4
half-life:
  value: null
  unit: null
  notes: null
protein-binding:
  value: 92.9
  value-max: 95.8
  unit: percent
  notes: 92.9–95.8%
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (IV)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: UGT1A1
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
pk-source:
  type: wikipedia-infobox
  title: Belinostat
  url: https://en.wikipedia.org/w/index.php?title=Belinostat&oldid=1329528223
  revision: 1329528223
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL408513
  pref-name: BELINOSTAT
  molecule-type: Small molecule
  first-approval: 2014
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01XH04
  targets:
  - id: CHEMBL2093865
    name: Histone deacetylase
    action: INHIBITOR
  properties:
    full-mwt: 318.35
    mw-freebase: 318.35
    alogp: 2.01
    psa: 95.5
    hba: 4
    hbd: 3
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.45
    full-molformula: C15H14N2O4S
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 2e8ef36b-71fa-4492-a16f-577d5f7d111d
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2e8ef36b-71fa-4492-a16f-577d5f7d111d
  checked: '2026-10-01'
  fields:
    protein-binding: no-label-value
---

# Belinostat

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `belinostat-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL408513](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL408513/) · max phase 4 · id via Wikipedia infobox

## Source summary

Intravenous pan-HDAC inhibitor for peripheral T-cell lymphoma.

## Mechanism

Histone deacetylase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2014
- **ATC L01XH04:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › OTHER ANTINEOPLASTIC AGENTS › Histone deacetylase (HDAC) inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 318.35 | 2.01 | 95.5 | 3/4 | 0 | C15H14N2O4S |

**Targets (ChEMBL curated mechanisms):**

- [[Histone deacetylase (CHEMBL2093865)|Histone deacetylase]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Belinostat*](https://en.wikipedia.org/w/index.php?title=Belinostat&oldid=1329528223) (revision 1329528223, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Protein binding | 92.9–95.8 % | 92.9–95.8% |
| Bioavailability | 100 % | 100% (IV) |
| Metabolism | hepatic | UGT1A1 |
| Excretion | mainly urinary | Urine |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 2e8ef36b…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2e8ef36b-71fa-4492-a16f-577d5f7d111d), label version 20250407. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Abexinostat]] (Histone deacetylase), [[Cudc-101]] (Histone deacetylase), [[Entinostat]] (Histone deacetylase), [[Fimepinostat]] (Histone deacetylase), [[Quisinostat]] (Histone deacetylase), [[Tacedinaline]] (Histone deacetylase)
- **Same ATC subgroup:** [[Entinostat]], [[Panobinostat]], [[Resminostat]], [[Tucidinostat (chidamide)]], [[Vorinostat]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
