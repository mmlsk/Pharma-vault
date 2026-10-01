---
type: compound
schema-version: 2
compound-id: zuranolone-compound
name: Zuranolone
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: GABA-A receptor; anion channel positive allosteric modulator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL4105630
chembl-max-phase: 4
half-life:
  value: 16.0
  value-max: 23.0
  unit: h
  notes: 16–23 hours
protein-binding:
  value: 99.5
  value-max: null
  unit: percent
  notes: 99.5%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4
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
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Zuranolone
  url: https://en.wikipedia.org/w/index.php?title=Zuranolone&oldid=1364099628
  revision: 1364099628
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL4105630
  pref-name: ZURANOLONE
  molecule-type: Small molecule
  first-approval: 2023
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06AX31
  targets:
  - id: CHEMBL2093872
    name: GABA-A receptor; anion channel
    action: POSITIVE ALLOSTERIC MODULATOR
  properties:
    full-mwt: 409.57
    mw-freebase: 409.57
    alogp: 4.34
    psa: 78.91
    hba: 5
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.81
    full-molformula: C25H35N3O2
pk-verification:
  source: fda-label
  status: consistent
  set-id: f18e53b0-d0bb-422d-8de7-ab64b7292b29
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f18e53b0-d0bb-422d-8de7-ab64b7292b29
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Zurzuvae
  ema-number: EMEA/H/C/006488
  url: https://www.ema.europa.eu/en/documents/product-information/zurzuvae-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Zuranolone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `zuranolone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL4105630](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL4105630/) · max phase 4 · id via source catalogue

## Source summary

GABA-A receptor; anion channel positive allosteric modulator; approved/marketed compound catalogued by ChEMBL (CHEMBL4105630).

## Mechanism

GABA-A receptor; anion channel positive allosteric modulator _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2023
- **Flags:** black-box warning
- **ATC N06AX31:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Other antidepressants

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 409.57 | 4.34 | 78.91 | 1/5 | 0 | C25H35N3O2 |

**Targets (ChEMBL curated mechanisms):**

- [[GABA-A receptor; anion channel (CHEMBL2093872)|GABA-A receptor; anion channel]] - positive allosteric modulator · PROTEIN COMPLEX GROUP

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Zuranolone*](https://en.wikipedia.org/w/index.php?title=Zuranolone&oldid=1364099628) (revision 1364099628, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 16–23 h | 16–23 hours |
| Protein binding | 99.5 % | 99.5% |
| Metabolism | hepatic | CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set f18e53b0…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f18e53b0-d0bb-422d-8de7-ab64b7292b29), label version 20260615. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 19.7, 24.6)
> - protein-binding: consistent (label values: 99.5)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Zurzuvae*](https://www.ema.europa.eu/en/documents/product-information/zurzuvae-epar-product-information_en.pdf) (EMEA/H/C/006488). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 19.7, 24.6)
> - protein-binding: consistent (SmPC values: 99.5)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Abp-700]] (GABA-A receptor; anion channel), [[Adipiplon]] (GABA-A receptor; anion channel), [[Alprazolam]] (GABA-A receptor; anion channel), [[Brexanolone]] (GABA-A receptor; anion channel), [[Butalbital]] (GABA-A receptor; anion channel), [[Cenobamate]] (GABA-A receptor; anion channel), [[Chlordiazepoxide]] (GABA-A receptor; anion channel), [[Cipepofol]] (GABA-A receptor; anion channel), [[Clobazam]] (GABA-A receptor; anion channel), [[Clomethiazole]] (GABA-A receptor; anion channel), [[Clonazepam]] (GABA-A receptor; anion channel), [[Clotiazepam]] (GABA-A receptor; anion channel)
- **Same ATC subgroup:** [[Agomelatine (Valdoxan)]], [[Brexanolone]], [[Bupropion (Wellbutrin)]], [[Desvenlafaxine]], [[Duloxetine (Cymbalta)]], [[Esketamine (Spravato)]], [[Levomilnacipran]], [[Minaprine]], [[Mirtazapine]], [[Nefazodone]], [[Tianeptine]], [[Trazodone (Desyrel)]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
