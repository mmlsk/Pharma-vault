---
type: compound
schema-version: 2
compound-id: cyclosporine-compound
name: Cyclosporine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Cyclophilin A modulator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL160
chembl-max-phase: 4
half-life:
  value: 24.0
  value-max: null
  unit: h
  notes: variable (about 24 hours)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: variable
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Bile duct
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver CYP3A4
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Ciclosporin
  url: https://en.wikipedia.org/w/index.php?title=Ciclosporin&oldid=1371223778
  revision: 1371223778
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL160
  pref-name: CYCLOSPORINE
  molecule-type: Protein
  first-approval: 1983
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L04AD01
  - S01XA18
  targets:
  - id: CHEMBL1949
    name: Peptidyl-prolyl cis-trans isomerase A
    action: MODULATOR
  properties:
    full-mwt: 1202.63
    mw-freebase: 1202.63
    full-molformula: C62H111N11O12
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 5baaf78c-90f6-abcf-52c8-814490f3cf9f
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5baaf78c-90f6-abcf-52c8-814490f3cf9f
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: no-smpc-value
  product: Ikervis
  ema-number: EMEA/H/C/002066
  url: https://www.ema.europa.eu/en/documents/product-information/ikervis-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/ikervis-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Cyclosporine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cyclosporine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL160](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL160/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Calcineurin inhibitor binding cyclophilin, the original transplant immunosuppressant; also a potent P-glycoprotein and CYP3A4 inhibitor.

## Mechanism

Cyclophilin A modulator _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 1983
- **Flags:** black-box warning
- **ATC L04AD01:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Calcineurin inhibitors
- **ATC S01XA18:** SENSORY ORGANS › OTHER OPHTHALMOLOGICALS › Other ophthalmologicals

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1202.63 | - | - | -/- | - | C62H111N11O12 |

**Targets (ChEMBL curated mechanisms):**

- [[Peptidyl-prolyl cis-trans isomerase A (CHEMBL1949)|Peptidyl-prolyl cis-trans isomerase A]] - modulator · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ciclosporin*](https://en.wikipedia.org/w/index.php?title=Ciclosporin&oldid=1371223778) (revision 1371223778, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 24 h | variable (about 24 hours) |
| Bioavailability | - | variable |
| Metabolism | hepatic | Liver CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Bile duct |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 5baaf78c…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5baaf78c-90f6-abcf-52c8-814490f3cf9f), label version 20260910. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 5, 8.4, 18)

> [!note] EU SmPC cross-check: **no-smpc-value**
> Automated comparison with section 5.2 of the [EU SmPC of *Ikervis*](https://www.ema.europa.eu/en/documents/product-information/ikervis-epar-product-information_en.pdf) (EMEA/H/C/002066) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/ikervis-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (SmPC values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Alteplase]], [[Avacincaptad Pegol]], [[NAC (N-Acetylcysteine)]], [[Pegcetacoplan]], [[Potassium Iodide (SSKI-KI)|Potassium Iodide (SSKI/KI)]], [[Rapamycin (Sirolimus)]], [[Retinol]], [[Sirolimus (Rapamycin)]], [[Vitamin C (Ascorbic Acid)]], [[Voclosporin]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
