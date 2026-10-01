---
type: compound
schema-version: 2
compound-id: azilsartan-compound
name: Azilsartan medoxomil (Edarbi)
aliases:
- Azilsartan medoxomil
- Edarbi
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Type-1 angiotensin II receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL57242
chembl-max-phase: 3
half-life:
  value: 11.0
  value-max: null
  unit: h
  notes: 11 hrs
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 60.0
  value-max: null
  notes: 60%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 55% feces, 42% urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP2C9
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C9
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C9 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Azilsartan
  url: https://en.wikipedia.org/w/index.php?title=Azilsartan&oldid=1355215444
  revision: 1355215444
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL57242
  pref-name: AZILSARTAN
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL227
    name: Type-1 angiotensin II receptor
    action: ANTAGONIST
  properties:
    full-mwt: 456.46
    mw-freebase: 456.46
    alogp: 4.19
    psa: 123.24
    hba: 7
    hbd: 2
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.38
    full-molformula: C25H20N4O5
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: b1c8de43-3b26-408f-8c7e-6c7d76348199
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b1c8de43-3b26-408f-8c7e-6c7d76348199
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Edarbi
  ema-number: EMEA/H/C/002293
  url: https://www.ema.europa.eu/en/documents/product-information/edarbi-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/edarbi-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Azilsartan medoxomil (Edarbi)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `azilsartan-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Azilsartan medoxomil, Edarbi
- **ChEMBL:** [CHEMBL57242](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL57242/) · max phase 3 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

The most recently approved angiotensin receptor blocker, with unusually slow dissociation from the AT1 receptor.

## Mechanism

Type-1 angiotensin II receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 456.46 | 4.19 | 123.24 | 2/7 | 0 | C25H20N4O5 |

**Targets (ChEMBL curated mechanisms):**

- [[Type-1 angiotensin II receptor (CHEMBL227)|Type-1 angiotensin II receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Azilsartan*](https://en.wikipedia.org/w/index.php?title=Azilsartan&oldid=1355215444) (revision 1355215444, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 11 h | 11 hrs |
| Bioavailability | 60 % | 60% |
| Metabolism | hepatic | CYP2C9 |
| CYP (metabolised by) | CYP2C9 | roles as inhibitor/inducer not assessed |
| Excretion | - | 55% feces, 42% urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set b1c8de43…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b1c8de43-3b26-408f-8c7e-6c7d76348199), label version 20260513. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 11)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Edarbi*](https://www.ema.europa.eu/en/documents/product-information/edarbi-epar-product-information_en.pdf) (EMEA/H/C/002293) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/edarbi-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 11)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Candesartan (Atacand)]] (Type-1 angiotensin II receptor), [[Candesartan Cilexetil]] (Type-1 angiotensin II receptor), [[Fimasartan]] (Type-1 angiotensin II receptor), [[Irbesartan (Avapro)]] (Type-1 angiotensin II receptor), [[Olmesartan (Benicar)]] (Type-1 angiotensin II receptor), [[Olmesartan Medoxomil]] (Type-1 angiotensin II receptor), [[Sparsentan]] (Type-1 angiotensin II receptor), [[Tasosartan]] (Type-1 angiotensin II receptor), [[Telmisartan]] (Type-1 angiotensin II receptor), [[Trv-120027]] (Type-1 angiotensin II receptor), [[Valsartan (Diovan)]] (Type-1 angiotensin II receptor)
- **Shared CYP substrate pool:** CYP2C9 (+40 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
