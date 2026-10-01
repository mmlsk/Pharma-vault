---
type: compound
schema-version: 2
compound-id: entecavir-compound
name: Entecavir
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL713
chembl-max-phase: 4
half-life:
  value: 128.0
  value-max: 149.0
  unit: h
  notes: 128–149 hours
protein-binding:
  value: 13.0
  value-max: null
  unit: percent
  notes: 13% (in vitro)
bioavailability:
  value: null
  value-max: null
  notes: n/a (≥70)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney 62–73%
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: negligible/nil
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
- cyp-interactions
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Entecavir
  url: https://en.wikipedia.org/w/index.php?title=Entecavir&oldid=1339067882
  revision: 1339067882
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL713
  pref-name: ENTECAVIR ANHYDROUS
  molecule-type: Small molecule
  first-approval: 2005
  black-box-warning: true
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 277.28
    mw-freebase: 277.28
    alogp: -0.83
    psa: 130.05
    hba: 7
    hbd: 4
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.53
    full-molformula: C12H15N5O3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 73dea2a4-a596-477f-b66d-5a80dd019837
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=73dea2a4-a596-477f-b66d-5a80dd019837
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Baraclude
  ema-number: EMEA/H/C/000623
  url: https://www.ema.europa.eu/en/documents/product-information/baraclude-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Entecavir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `entecavir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL713](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL713/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Guanosine analogue for hepatitis B with a very high genetic barrier to resistance in treatment-naive patients.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2005
- **Flags:** black-box warning, prodrug

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 277.28 | -0.83 | 130.05 | 4/7 | 0 | C12H15N5O3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Entecavir*](https://en.wikipedia.org/w/index.php?title=Entecavir&oldid=1339067882) (revision 1339067882, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 128–149 h | 128–149 hours |
| Protein binding | 13 % | 13% (in vitro) |
| Bioavailability | - | n/a (≥70) |
| Metabolism | - | negligible/nil |
| Excretion | mainly urinary | Kidney 62–73% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 73dea2a4…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=73dea2a4-a596-477f-b66d-5a80dd019837), label version 20260707. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 24, 128, 149)
> - protein-binding: no-label-value (label values: -)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Baraclude*](https://www.ema.europa.eu/en/documents/product-information/baraclude-epar-product-information_en.pdf) (EMEA/H/C/000623). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 24, 128, 149)
> - protein-binding: consistent (SmPC values: 13)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
