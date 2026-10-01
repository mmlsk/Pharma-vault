---
type: compound
schema-version: 2
compound-id: roxatidine-compound
name: Roxatidine
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
chembl-id: CHEMBL46102
chembl-max-phase: null
half-life:
  value: 5.0
  value-max: 7.0
  unit: h
  notes: 5–7 hours
protein-binding:
  value: 5.0
  value-max: 7.0
  unit: percent
  notes: 5–7%
bioavailability:
  value: 80.0
  value-max: 90.0
  notes: 80–90%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic deacetylation; Minor involvement of CYP2D6 and CYP2A6
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2A6
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2A6, CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Roxatidine acetate
  url: https://en.wikipedia.org/w/index.php?title=Roxatidine_acetate&oldid=1330111613
  revision: 1330111613
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL46102
  pref-name: ROXATIDINE ACETATE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 348.44
    mw-freebase: 348.44
    alogp: 2.12
    psa: 67.87
    hba: 5
    hbd: 1
    rtb: 9
    num-ro5-violations: 0
    qed-weighted: 0.55
    full-molformula: C19H28N2O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Roxatidine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `roxatidine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL46102](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL46102/) · max phase n/a · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Blocks parietal-cell H2 receptors to reduce stimulated gastric acid secretion.

## ChEMBL profile

- **Molecule type:** Small molecule
- **Flags:** prodrug

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 348.44 | 2.12 | 67.87 | 1/5 | 0 | C19H28N2O4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Roxatidine acetate*](https://en.wikipedia.org/w/index.php?title=Roxatidine_acetate&oldid=1330111613) (revision 1330111613, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–7 h | 5–7 hours |
| Protein binding | 5–7 % | 5–7% |
| Bioavailability | 80–90 % | 80–90% |
| Metabolism | hepatic | Hepatic deacetylation; Minor involvement of CYP2D6 and CYP2A6 |
| CYP (metabolised by) | CYP2A6, CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Renal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared CYP substrate pool:** CYP2A6 (+4 others), CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
