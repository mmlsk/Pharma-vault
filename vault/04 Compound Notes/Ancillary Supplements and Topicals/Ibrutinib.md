---
type: compound
schema-version: 2
compound-id: ibrutinib-compound
name: Ibrutinib
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Tyrosine-protein kinase BTK inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1873475
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: 6.0
  unit: h
  notes: 4–6 hours
protein-binding:
  value: 97.3
  value-max: null
  unit: percent
  notes: 97.3%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (80%), urine (10%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP3A & CYP2D6)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Ibrutinib
  url: https://en.wikipedia.org/w/index.php?title=Ibrutinib&oldid=1337884205
  revision: 1337884205
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1873475
  pref-name: IBRUTINIB
  molecule-type: Small molecule
  first-approval: 2013
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01EL01
  targets:
  - id: CHEMBL5251
    name: Tyrosine-protein kinase BTK
    action: INHIBITOR
  properties:
    full-mwt: 440.51
    mw-freebase: 440.51
    alogp: 4.22
    psa: 99.16
    hba: 7
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.47
    full-molformula: C25H24N6O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 0dfd0279-ff17-4ea9-89be-9803c71bab44
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0dfd0279-ff17-4ea9-89be-9803c71bab44
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Imbruvica
  ema-number: EMEA/H/C/003791
  url: https://www.ema.europa.eu/en/documents/product-information/imbruvica-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/imbruvica-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Ibrutinib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ibrutinib-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1873475](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1873475/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits BTK to interrupt B-cell receptor signalling; covalent and reversible agents differ in kinase selectivity, bleeding and atrial-fibrillation risk; first-generation covalent.

## Mechanism

Tyrosine-protein kinase BTK inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2013
- **ATC L01EL01:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › PROTEIN KINASE INHIBITORS › Bruton's tyrosine kinase (BTK) inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 440.51 | 4.22 | 99.16 | 1/7 | 0 | C25H24N6O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Tyrosine-protein kinase BTK (CHEMBL5251)|Tyrosine-protein kinase BTK]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ibrutinib*](https://en.wikipedia.org/w/index.php?title=Ibrutinib&oldid=1337884205) (revision 1337884205, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4–6 h | 4–6 hours |
| Protein binding | 97.3 % | 97.3% |
| Metabolism | hepatic | Hepatic (CYP3A & CYP2D6) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Feces (80%), urine (10%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 0dfd0279…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0dfd0279-ff17-4ea9-89be-9803c71bab44), label version 20251021. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 4, 6)
> - protein-binding: consistent (label values: 97.3)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Imbruvica*](https://www.ema.europa.eu/en/documents/product-information/imbruvica-epar-product-information_en.pdf) (EMEA/H/C/003791) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/imbruvica-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 4, 13)
> - protein-binding: consistent (SmPC values: 97.3)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acalabrutinib]] (Tyrosine-protein kinase BTK), [[Evobrutinib]] (Tyrosine-protein kinase BTK), [[Fenebrutinib]] (Tyrosine-protein kinase BTK), [[Orelabrutinib]] (Tyrosine-protein kinase BTK), [[Pirtobrutinib]] (Tyrosine-protein kinase BTK), [[Rilzabrutinib]] (Tyrosine-protein kinase BTK), [[Tirabrutinib]] (Tyrosine-protein kinase BTK), [[Zanubrutinib]] (Tyrosine-protein kinase BTK)
- **Same ATC subgroup:** [[Acalabrutinib]], [[Orelabrutinib]], [[Pirtobrutinib]], [[Tirabrutinib]], [[Zanubrutinib]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
