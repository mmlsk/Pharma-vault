---
type: compound
schema-version: 2
compound-id: upadacitinib-compound
name: Upadacitinib (Rinvoq)
aliases:
- Upadacitinib
- Rinvoq
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
chembl-id: CHEMBL3622821
chembl-max-phase: 4
half-life:
  value: null
  value-max: null
  unit: null
  notes: 9–14 (6–15) hours
protein-binding:
  value: 52.0
  value-max: null
  unit: percent
  notes: 52%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.38
  notes: Mainly unchanged in feces (38%) and urine (24%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A major, CYP2D6 minor)
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Upadacitinib
  url: https://en.wikipedia.org/w/index.php?title=Upadacitinib&oldid=1370557393
  revision: 1370557393
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL3622821
  pref-name: UPADACITINIB
  molecule-type: Small molecule
  first-approval: 2019
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L04AF03
  targets: []
  properties:
    full-mwt: 380.37
    mw-freebase: 380.37
    alogp: 2.91
    psa: 78.32
    hba: 4
    hbd: 2
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.73
    full-molformula: C17H19F3N6O
pk-verification:
  source: fda-label
  status: consistent
  set-id: 2966aec7-2ef0-923c-d8ff-fe1a957bf095
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2966aec7-2ef0-923c-d8ff-fe1a957bf095
  checked: '2026-10-01'
  fields:
    protein-binding: consistent
---

# Upadacitinib (Rinvoq)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `upadacitinib-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Upadacitinib, Rinvoq
- **ChEMBL:** [CHEMBL3622821](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3622821/) · max phase 4 · id via Wikipedia infobox

## Source summary

Oral JAK1 inhibitor for multiple inflammatory diseases with boxed warnings for infection, malignancy, thrombosis, and cardiovascular events.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2019
- **Flags:** black-box warning
- **ATC L04AF03:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Janus-associated kinase (JAK) inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 380.37 | 2.91 | 78.32 | 2/4 | 0 | C17H19F3N6O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Upadacitinib*](https://en.wikipedia.org/w/index.php?title=Upadacitinib&oldid=1370557393) (revision 1370557393, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | - | 9–14 (6–15) hours |
| Protein binding | 52 % | 52% |
| Metabolism | hepatic | Liver (CYP3A major, CYP2D6 minor) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | M4, an acyl glucuronide |
| Excretion | - · fe 0.38 | Mainly unchanged in feces (38%) and urine (24%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 2966aec7…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2966aec7-2ef0-923c-d8ff-fe1a957bf095), label version 20260630. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - protein-binding: consistent (label values: 52)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Baricitinib (oral, Olumiant)]], [[Filgotinib]], [[Peficitinib]], [[Ritlecitinib (oral, Litfulo)]], [[Tofacitinib]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
