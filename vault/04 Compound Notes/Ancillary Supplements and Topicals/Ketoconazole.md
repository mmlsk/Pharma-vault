---
type: compound
schema-version: 2
compound-id: ketoconazole-compound
name: Ketoconazole
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
chembl-id: CHEMBL75
chembl-max-phase: null
half-life:
  value: null
  value-max: null
  unit: null
  notes: Biphasic
protein-binding:
  value: 84.0
  value-max: 99.0
  unit: percent
  notes: 84 to 99%
bioavailability:
  value: 37.0
  value-max: 97.0
  notes: 'By mouth: 37–97%'
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Bile duct (major) and kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Extensive liver (predominantly oxidation, O-dealkylation)
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
- identity-stereo-check
- pk-ema-consistent
pk-source:
  type: wikipedia-infobox
  title: Ketoconazole
  url: https://en.wikipedia.org/w/index.php?title=Ketoconazole&oldid=1370370477
  revision: 1370370477
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL75
  pref-name: null
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 531.44
    mw-freebase: 531.44
    alogp: 4.21
    psa: 69.06
    hba: 7
    hbd: 0
    rtb: 7
    num-ro5-violations: 1
    qed-weighted: 0.46
    full-molformula: C26H28Cl2N4O4
  identity-check: connectivity-match
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
  product: Ketoconazole Esteve (previously Ketoconazole HRA)
  ema-number: EMEA/H/C/003906
  url: https://www.ema.europa.eu/en/documents/product-information/ketoconazole-esteve-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    protein-binding: consistent
---

# Ketoconazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ketoconazole-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL75](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL75/) · max phase n/a · id via Wikipedia infobox · structure check: ⚠️ same skeleton, stereo/isotope layer differs

## Source summary

Antifungal with real antiandrogen activity via steroidogenic enzyme inhibition at high doses; topical formulations are also used for scalp seborrhea and hair loss support.

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 531.44 | 4.21 | 69.06 | 0/7 | 1 | C26H28Cl2N4O4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ketoconazole*](https://en.wikipedia.org/w/index.php?title=Ketoconazole&oldid=1370370477) (revision 1370370477, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | - | Biphasic |
| Protein binding | 84–99 % | 84 to 99% |
| Bioavailability | 37–97 % | By mouth: 37–97% |
| Metabolism | hepatic | Extensive liver (predominantly oxidation, O-dealkylation) |
| Metabolites | - | N-deacetyl ketoconazole |
| Excretion | mainly non-renal | Bile duct (major) and kidney |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Ketoconazole Esteve (previously Ketoconazole HRA)*](https://www.ema.europa.eu/en/documents/product-information/ketoconazole-esteve-epar-product-information_en.pdf) (EMEA/H/C/003906). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - protein-binding: consistent (SmPC values: 99)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
