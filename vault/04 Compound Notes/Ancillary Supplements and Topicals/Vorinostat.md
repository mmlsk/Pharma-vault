---
type: compound
schema-version: 2
compound-id: vorinostat-compound
name: Vorinostat
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Histone deacetylase 1 inhibitor; Histone deacetylase 2 inhibitor; Histone deacetylase 3 inhibitor; Histone deacetylase 6 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL98
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: null
  unit: h
  notes: ~2 hours (vorinostat and O-glucuronide), 11 hours (4-anilino-4-oxobutanoic acid)
protein-binding:
  value: 71.0
  value-max: null
  unit: percent
  notes: ~71%
bioavailability:
  value: 1.8
  value-max: 11.0
  notes: 1.8–11%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal (negligible)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic glucuronidation and β-oxidation; CYP system not involved
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
  title: Vorinostat
  url: https://en.wikipedia.org/w/index.php?title=Vorinostat&oldid=1370306811
  revision: 1370306811
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL98
  pref-name: VORINOSTAT
  molecule-type: Small molecule
  first-approval: 2006
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01XH01
  targets:
  - id: CHEMBL325
    name: Histone deacetylase 1
    action: INHIBITOR
  - id: CHEMBL1829
    name: Histone deacetylase 3
    action: INHIBITOR
  - id: CHEMBL1865
    name: Protein deacetylase HDAC6
    action: INHIBITOR
  - id: CHEMBL1937
    name: Histone deacetylase 2
    action: INHIBITOR
  properties:
    full-mwt: 264.32
    mw-freebase: 264.32
    alogp: 2.47
    psa: 78.43
    hba: 3
    hbd: 3
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.38
    full-molformula: C14H20N2O3
pk-verification:
  source: fda-label
  status: consistent
  set-id: cd86ee78-2781-468b-930c-3c4677bcc092
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=cd86ee78-2781-468b-930c-3c4677bcc092
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Vorinostat

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `vorinostat-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL98](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL98/) · max phase 4 · id via Wikipedia infobox

## Source summary

First approved HDAC inhibitor, for cutaneous T-cell lymphoma.

## Mechanism

Histone deacetylase 1 inhibitor; Histone deacetylase 2 inhibitor; Histone deacetylase 3 inhibitor; Histone deacetylase 6 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2006
- **ATC L01XH01:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › OTHER ANTINEOPLASTIC AGENTS › Histone deacetylase (HDAC) inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 264.32 | 2.47 | 78.43 | 3/3 | 0 | C14H20N2O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Histone deacetylase 1 (CHEMBL325)|Histone deacetylase 1]] - inhibitor · SINGLE PROTEIN
- [[Histone deacetylase 3 (CHEMBL1829)|Histone deacetylase 3]] - inhibitor · SINGLE PROTEIN
- [[Protein deacetylase HDAC6 (CHEMBL1865)|Protein deacetylase HDAC6]] - inhibitor · SINGLE PROTEIN
- [[Histone deacetylase 2 (CHEMBL1937)|Histone deacetylase 2]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Vorinostat*](https://en.wikipedia.org/w/index.php?title=Vorinostat&oldid=1370306811) (revision 1370306811, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | ~2 hours (vorinostat and O-glucuronide), 11 hours (4-anilino-4-oxobutanoic acid) |
| Protein binding | 71 % | ~71% |
| Bioavailability | 1.8–11 % | 1.8–11% |
| Metabolism | hepatic | Hepatic glucuronidation and β-oxidation; CYP system not involved |
| Metabolites | - | vorinostat O-glucuronide, 4-anilino-4-oxobutanoic acid (both inactive) |
| Excretion | mainly urinary | Renal (negligible) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set cd86ee78…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=cd86ee78-2781-468b-930c-3c4677bcc092), label version 20241112. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2, 11)
> - protein-binding: consistent (label values: 71)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Mocetinostat]] (Histone deacetylase 1; Histone deacetylase 2; Histone deacetylase 3), [[Ricolinostat (ACY-1215)]] (Protein deacetylase HDAC6)
- **Same ATC subgroup:** [[Belinostat]], [[Entinostat]], [[Panobinostat]], [[Resminostat]], [[Tucidinostat (chidamide)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
