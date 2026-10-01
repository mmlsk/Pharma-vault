---
type: compound
schema-version: 2
compound-id: lenalidomide-compound
name: Lenalidomide
aliases: []
cluster: General Pharmacology
group: immunology
class: null
subclass: null
mechanism: CRL4(CRBN) E3 ubiquitin ligase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL848
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: null
  unit: h
  notes: 3 hours
protein-binding:
  value: 30.0
  value-max: null
  unit: percent
  notes: 30%
bioavailability:
  value: null
  value-max: null
  notes: Undetermined
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.67
  notes: Kidney (67% unchanged)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Undetermined
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
- immunosuppression-infection
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/immunology
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Lenalidomide
  url: https://en.wikipedia.org/w/index.php?title=Lenalidomide&oldid=1365170764
  revision: 1365170764
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL848
  pref-name: LENALIDOMIDE
  molecule-type: Small molecule
  first-approval: 2005
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L04AX04
  targets:
  - id: CHEMBL3833061
    name: CRL4(CRBN) E3 ubiquitin ligase
    action: INHIBITOR
  properties:
    full-mwt: 259.26
    mw-freebase: 259.26
    alogp: 0.03
    psa: 92.5
    hba: 4
    hbd: 2
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.55
    full-molformula: C13H13N3O3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 1b2716cf-24b4-4157-a218-58ede63917bd
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1b2716cf-24b4-4157-a218-58ede63917bd
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Revlimid
  ema-number: EMEA/H/C/000717
  url: https://www.ema.europa.eu/en/documents/product-information/revlimid-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/revlimid-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Lenalidomide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lenalidomide-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL848](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL848/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Second-generation IMiD central to myeloma therapy and uniquely effective in del(5q) myelodysplastic syndrome.

## Mechanism

CRL4(CRBN) E3 ubiquitin ligase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2005
- **Flags:** black-box warning
- **ATC L04AX04:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Other immunosuppressants

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 259.26 | 0.03 | 92.5 | 2/4 | 0 | C13H13N3O3 |

**Targets (ChEMBL curated mechanisms):**

- [[CRL4(CRBN) E3 ubiquitin ligase (CHEMBL3833061)|CRL4(CRBN) E3 ubiquitin ligase]] - inhibitor · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lenalidomide*](https://en.wikipedia.org/w/index.php?title=Lenalidomide&oldid=1365170764) (revision 1365170764, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3 h | 3 hours |
| Protein binding | 30 % | 30% |
| Bioavailability | - | Undetermined |
| Metabolism | - | Undetermined |
| Excretion | mainly urinary · fe 0.67 | Kidney (67% unchanged) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 1b2716cf…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1b2716cf-24b4-4157-a218-58ede63917bd), label version 20260527. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 3, 5)
> - protein-binding: consistent (label values: 30)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Revlimid*](https://www.ema.europa.eu/en/documents/product-information/revlimid-epar-product-information_en.pdf) (EMEA/H/C/000717) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/revlimid-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 3, 3.5, 5, 9)
> - protein-binding: consistent (SmPC values: 23, 29)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Pomalidomide]] (CRL4(CRBN) E3 ubiquitin ligase), [[Thalidomide]] (CRL4(CRBN) E3 ubiquitin ligase)
- **Same ATC subgroup:** [[Azathioprine]], [[Methotrexate]], [[Pomalidomide]], [[Thalidomide]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
