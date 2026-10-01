---
type: compound
schema-version: 2
compound-id: panobinostat-compound
name: Panobinostat
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
chembl-id: CHEMBL483254
chembl-max-phase: 4
half-life:
  value: 37.0
  value-max: null
  unit: h
  notes: 37 hours
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: 90%
bioavailability:
  value: 21.0
  value-max: null
  notes: 21%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Fecal (44–77%), renal (29–51%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A (40%), CYP2D6, CYP2C19
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
- chembl-name-match
- identity-confirmed
- pk-ema-consistent
pk-source:
  type: wikipedia-infobox
  title: Panobinostat
  url: https://en.wikipedia.org/w/index.php?title=Panobinostat&oldid=1368886946
  revision: 1368886946
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL483254
  pref-name: PANOBINOSTAT
  molecule-type: Small molecule
  first-approval: 2015
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L01XH03
  targets: []
  properties:
    full-mwt: 349.43
    mw-freebase: 349.43
    alogp: 3.33
    psa: 77.15
    hba: 3
    hbd: 4
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.23
    full-molformula: C21H23N3O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Farydak
  ema-number: EMEA/H/C/003725
  url: https://www.ema.europa.eu/en/documents/product-information/farydak-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Panobinostat

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `panobinostat-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL483254](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL483254/) · max phase 4 · id via exact ChEMBL name match · structure check: ✅ InChIKey matches PubChem

## Source summary

Potent pan-HDAC inhibitor used in myeloma with substantial toxicity.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2015
- **Flags:** black-box warning
- **ATC L01XH03:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › OTHER ANTINEOPLASTIC AGENTS › Histone deacetylase (HDAC) inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 349.43 | 3.33 | 77.15 | 4/3 | 0 | C21H23N3O2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Panobinostat*](https://en.wikipedia.org/w/index.php?title=Panobinostat&oldid=1368886946) (revision 1368886946, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 37 h | 37 hours |
| Protein binding | 90 % | 90% |
| Bioavailability | 21 % | 21% |
| Metabolism | hepatic | CYP3A (40%), CYP2D6, CYP2C19 |
| CYP (metabolised by) | CYP2C19, CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Fecal (44–77%), renal (29–51%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Farydak*](https://www.ema.europa.eu/en/documents/product-information/farydak-epar-product-information_en.pdf) (EMEA/H/C/003725). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 37)
> - protein-binding: consistent (SmPC values: 90)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Belinostat]], [[Entinostat]], [[Resminostat]], [[Tucidinostat (chidamide)]], [[Vorinostat]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others), CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
