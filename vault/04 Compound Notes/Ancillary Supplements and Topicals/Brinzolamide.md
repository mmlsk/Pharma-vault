---
type: compound
schema-version: 2
compound-id: brinzolamide-compound
name: Brinzolamide
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Carbonic anhydrase II inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL220491
chembl-max-phase: 4
half-life:
  value: 111.0
  value-max: null
  unit: d
  notes: 111 days
protein-binding:
  value: 60.0
  value-max: null
  unit: percent
  notes: ~60%
bioavailability:
  value: null
  value-max: null
  notes: Absorbed systemically, but below detectable levels (less than 10 ng/mL)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (60%)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Brinzolamide
  url: https://en.wikipedia.org/w/index.php?title=Brinzolamide&oldid=1366235996
  revision: 1366235996
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL220491
  pref-name: BRINZOLAMIDE
  molecule-type: Small molecule
  first-approval: 1998
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - S01EC04
  - S01EC54
  targets:
  - id: CHEMBL205
    name: Carbonic anhydrase 2
    action: INHIBITOR
  properties:
    full-mwt: 383.52
    mw-freebase: 383.52
    alogp: 0.09
    psa: 118.8
    hba: 7
    hbd: 2
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.64
    full-molformula: C12H21N3O5S3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: fb7229d4-522e-4cb2-b513-9d34f3ded591
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=fb7229d4-522e-4cb2-b513-9d34f3ded591
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Azopt
  ema-number: EMEA/H/C/000267
  url: https://www.ema.europa.eu/en/documents/product-information/azopt-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/azopt-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: consistent
---

# Brinzolamide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `brinzolamide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL220491](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL220491/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits carbonic anhydrase, lowering bicarbonate-dependent fluid secretion; metabolic acidosis and paraesthesia are the usual class effects; topical ophthalmic.

## Mechanism

Carbonic anhydrase II inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1998
- **ATC S01EC04:** SENSORY ORGANS › ANTIGLAUCOMA PREPARATIONS AND MIOTICS › Carbonic anhydrase inhibitors
- **ATC S01EC54:** SENSORY ORGANS › ANTIGLAUCOMA PREPARATIONS AND MIOTICS › Carbonic anhydrase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 383.52 | 0.09 | 118.8 | 2/7 | 0 | C12H21N3O5S3 |

**Targets (ChEMBL curated mechanisms):**

- [[Carbonic anhydrase 2 (CHEMBL205)|Carbonic anhydrase 2]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Brinzolamide*](https://en.wikipedia.org/w/index.php?title=Brinzolamide&oldid=1366235996) (revision 1366235996, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 111 d | 111 days |
| Protein binding | 60 % | ~60% |
| Bioavailability | - | Absorbed systemically, but below detectable levels (less than 10 ng/mL) |
| Excretion | mainly urinary | Kidney (60%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set fb7229d4…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=fb7229d4-522e-4cb2-b513-9d34f3ded591), label version 20260420. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2664)
> - protein-binding: consistent (label values: 60)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Azopt*](https://www.ema.europa.eu/en/documents/product-information/azopt-epar-product-information_en.pdf) (EMEA/H/C/000267) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/azopt-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (SmPC values: -)
> - protein-binding: consistent (SmPC values: 60)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acetazolamide]] (Carbonic anhydrase 2), [[Dichlorphenamide]] (Carbonic anhydrase 2), [[Methazolamide]] (Carbonic anhydrase 2), [[Topiramate (Topamax)]] (Carbonic anhydrase 2)
- **Same ATC subgroup:** [[Acetazolamide]], [[Dichlorphenamide]], [[Dorzolamide]], [[Methazolamide]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
