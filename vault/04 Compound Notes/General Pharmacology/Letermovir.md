---
type: compound
schema-version: 2
compound-id: letermovir-compound
name: Letermovir
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: DNA terminase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1241951
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: null
  unit: h
  notes: 12 hours
protein-binding:
  value: 98.2
  value-max: null
  unit: percent
  notes: 98.2%
bioavailability:
  value: 37.0
  value-max: null
  notes: 37% (estimate)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 93.3% via feces, <2% via kidneys
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: glucuronidation (UGT1A1/1A3) to a minor extent
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
  title: Letermovir
  url: https://en.wikipedia.org/w/index.php?title=Letermovir&oldid=1335510246
  revision: 1335510246
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1241951
  pref-name: LETERMOVIR
  molecule-type: Small molecule
  first-approval: 2017
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J05AX18
  targets:
  - id: CHEMBL3991482
    name: DNA terminase
    action: INHIBITOR
  properties:
    full-mwt: 572.56
    mw-freebase: 572.56
    alogp: 5.71
    psa: 77.84
    hba: 7
    hbd: 1
    rtb: 6
    num-ro5-violations: 2
    qed-weighted: 0.38
    full-molformula: C29H28F4N4O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 1b49df80-be4f-47e0-a0b7-123f3e69395b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1b49df80-be4f-47e0-a0b7-123f3e69395b
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Prevymis
  ema-number: EMEA/H/C/004536
  url: https://www.ema.europa.eu/en/documents/product-information/prevymis-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Letermovir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `letermovir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1241951](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1241951/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

CMV prophylactic with a target unique to that virus, avoiding the marrow toxicity that limited valganciclovir prophylaxis.

## Mechanism

DNA terminase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2017
- **ATC J05AX18:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Other antivirals

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 572.56 | 5.71 | 77.84 | 1/7 | 2 | C29H28F4N4O4 |

**Targets (ChEMBL curated mechanisms):**

- [[DNA terminase (CHEMBL3991482)|DNA terminase]] - inhibitor · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Letermovir*](https://en.wikipedia.org/w/index.php?title=Letermovir&oldid=1335510246) (revision 1335510246, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12 h | 12 hours |
| Protein binding | 98.2 % | 98.2% |
| Bioavailability | 37 % | 37% (estimate) |
| Metabolism | hepatic | glucuronidation (UGT1A1/1A3) to a minor extent |
| Excretion | - | 93.3% via feces, <2% via kidneys |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 1b49df80…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1b49df80-be4f-47e0-a0b7-123f3e69395b), label version 20260114. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 12)
> - protein-binding: consistent (label values: 2, 70, 84.27, 93, 97, 99)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Prevymis*](https://www.ema.europa.eu/en/documents/product-information/prevymis-epar-product-information_en.pdf) (EMEA/H/C/004536). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 12)
> - protein-binding: consistent (SmPC values: 98.2)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Baloxavir Marboxil]], [[Bulevirtide (Hepcludex)]], [[Enfuvirtide]], [[Favipiravir]], [[Fostemsavir]], [[Ibalizumab]], [[Lenacapavir]], [[Maribavir]], [[Tecovirimat]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
