---
type: compound
schema-version: 2
compound-id: cenobamate-compound
name: Cenobamate
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: GABA-A receptor; anion channel positive allosteric modulator; Sodium channel alpha subunit inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3989949
chembl-max-phase: 4
half-life:
  value: 50.0
  value-max: 60.0
  unit: h
  notes: 50–60 hours
protein-binding:
  value: 60.0
  value-max: null
  unit: percent
  notes: 60%
bioavailability:
  value: 88.0
  value-max: null
  notes: ≥88%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Mainly via urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Mainly glucuronidation via UGT2B7
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
  title: Cenobamate
  url: https://en.wikipedia.org/w/index.php?title=Cenobamate&oldid=1369068966
  revision: 1369068966
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL3989949
  pref-name: CENOBAMATE
  molecule-type: Small molecule
  first-approval: 2020
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N03AX25
  targets:
  - id: CHEMBL2093872
    name: GABA-A receptor; anion channel
    action: POSITIVE ALLOSTERIC MODULATOR
  - id: CHEMBL2331043
    name: Sodium channel alpha subunit
    action: INHIBITOR
  properties:
    full-mwt: 267.68
    mw-freebase: 267.68
    alogp: 1.16
    psa: 95.92
    hba: 6
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.9
    full-molformula: C10H10ClN5O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 565c2126-57ae-4e29-b443-723bbe7e2072
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=565c2126-57ae-4e29-b443-723bbe7e2072
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Ontozry
  ema-number: EMEA/H/C/005377
  url: https://www.ema.europa.eu/en/documents/product-information/ontozry-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/ontozry-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Cenobamate

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cenobamate-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL3989949](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3989949/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Reduces high-frequency neuronal firing through voltage-gated sodium-channel modulation.

## Mechanism

GABA-A receptor; anion channel positive allosteric modulator; Sodium channel alpha subunit inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2020
- **ATC N03AX25:** NERVOUS SYSTEM › ANTIEPILEPTICS › Other antiepileptics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 267.68 | 1.16 | 95.92 | 1/6 | 0 | C10H10ClN5O2 |

**Targets (ChEMBL curated mechanisms):**

- [[GABA-A receptor; anion channel (CHEMBL2093872)|GABA-A receptor; anion channel]] - positive allosteric modulator · PROTEIN COMPLEX GROUP
- [[Sodium channel alpha subunit (CHEMBL2331043)|Sodium channel alpha subunit]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cenobamate*](https://en.wikipedia.org/w/index.php?title=Cenobamate&oldid=1369068966) (revision 1369068966, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 50–60 h | 50–60 hours |
| Protein binding | 60 % | 60% |
| Bioavailability | 88 % | ≥88% |
| Metabolism | hepatic | Mainly glucuronidation via UGT2B7 |
| Excretion | - | Mainly via urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 565c2126…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=565c2126-57ae-4e29-b443-723bbe7e2072), label version 20250825. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 50, 60)
> - protein-binding: consistent (label values: 60)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Ontozry*](https://www.ema.europa.eu/en/documents/product-information/ontozry-epar-product-information_en.pdf) (EMEA/H/C/005377) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/ontozry-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 50, 60)
> - protein-binding: consistent (SmPC values: 60)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Primidone]] (GABA-A receptor; anion channel; Sodium channel alpha subunit), [[Topiramate (Topamax)]] (GABA-A receptor; anion channel; Sodium channel alpha subunit), [[Abp-700]] (GABA-A receptor; anion channel), [[Adipiplon]] (GABA-A receptor; anion channel), [[Alprazolam]] (GABA-A receptor; anion channel), [[Brexanolone]] (GABA-A receptor; anion channel), [[Butalbital]] (GABA-A receptor; anion channel), [[Carbamazepine]] (Sodium channel alpha subunit), [[Chlordiazepoxide]] (GABA-A receptor; anion channel), [[Cipepofol]] (GABA-A receptor; anion channel), [[Clobazam]] (GABA-A receptor; anion channel), [[Clomethiazole]] (GABA-A receptor; anion channel)
- **Same ATC subgroup:** [[Brivaracetam]], [[Cannabidiol (Epidiolex)]], [[Felbamate]], [[Fenfluramine]], [[Ganaxolone]], [[Lacosamide]], [[Lamotrigine]], [[Levetiracetam]], [[Perampanel]], [[Pheneturide]], [[Retigabine (Ezogabine)]], [[Stiripentol]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
