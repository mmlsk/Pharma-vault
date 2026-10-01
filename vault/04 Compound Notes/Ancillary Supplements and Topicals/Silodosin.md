---
type: compound
schema-version: 2
compound-id: silodosin-compound
name: Silodosin
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Alpha-1a adrenergic receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL24778
chembl-max-phase: 4
half-life:
  value: 13.0
  value-max: null
  unit: h
  notes: 13±8 hours
protein-binding:
  value: 96.6
  value-max: null
  unit: percent
  notes: 96.6%
bioavailability:
  value: 32.0
  value-max: null
  notes: 32%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 33.5% Kidney, 54.9% fecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver glucuronidation (UGT2B7-mediated); also minor CYP3A4 involvement
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- pk-fda-discrepant
- pk-ema-consistent
- pk-sources-disagree
pk-source:
  type: wikipedia-infobox
  title: Silodosin
  url: https://en.wikipedia.org/w/index.php?title=Silodosin&oldid=1370555904
  revision: 1370555904
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL24778
  pref-name: SILODOSIN
  molecule-type: Small molecule
  first-approval: 2008
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - G04CA04
  targets:
  - id: CHEMBL229
    name: Alpha-1A adrenergic receptor
    action: ANTAGONIST
  properties:
    full-mwt: 495.54
    mw-freebase: 495.54
    alogp: 3.07
    psa: 97.05
    hba: 6
    hbd: 3
    rtb: 13
    num-ro5-violations: 0
    qed-weighted: 0.37
    full-molformula: C25H32F3N3O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: discrepant
  set-id: ee8d577e-948d-4164-9671-c876544ac83b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ee8d577e-948d-4164-9671-c876544ac83b
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: no-label-value
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Urorec
  ema-number: EMEA/H/C/001092
  url: https://www.ema.europa.eu/en/documents/product-information/urorec-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Silodosin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `silodosin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL24778](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL24778/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Blocks alpha-1 adrenoceptors to relax vascular or prostatic smooth muscle; first-dose hypotension and floppy-iris syndrome are class effects; alpha-1A selective.

## Mechanism

Alpha-1a adrenergic receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2008
- **ATC G04CA04:** GENITO URINARY SYSTEM AND SEX HORMONES › DRUGS USED IN BENIGN PROSTATIC HYPERTROPHY › Alpha-adrenoreceptor antagonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 495.54 | 3.07 | 97.05 | 3/6 | 0 | C25H32F3N3O4 |

**Targets (ChEMBL curated mechanisms):**

- [[Alpha-1A adrenergic receptor (CHEMBL229)|Alpha-1A adrenergic receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Silodosin*](https://en.wikipedia.org/w/index.php?title=Silodosin&oldid=1370555904) (revision 1370555904, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 13 h | 13±8 hours |
| Protein binding | 96.6 % | 96.6% |
| Bioavailability | 32 % | 32% |
| Metabolism | hepatic | Liver glucuronidation (UGT2B7-mediated); also minor CYP3A4 involvement |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | 33.5% Kidney, 54.9% fecal |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set ee8d577e…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ee8d577e-948d-4164-9671-c876544ac83b), label version 20260818. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 24)
> - protein-binding: no-label-value (label values: -)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Urorec*](https://www.ema.europa.eu/en/documents/product-information/urorec-epar-product-information_en.pdf) (EMEA/H/C/001092). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 11, 18, 24)
> - protein-binding: consistent (SmPC values: 91, 96.6)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Alfuzosin]], [[Tamsulosin]], [[Terazosin]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
