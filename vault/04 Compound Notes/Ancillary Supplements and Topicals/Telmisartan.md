---
type: compound
schema-version: 2
compound-id: telmisartan-compound
name: Telmisartan
aliases: []
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
chembl-id: CHEMBL1017
chembl-max-phase: 4
half-life:
  value: 24.0
  value-max: null
  unit: h
  notes: 24 hours
protein-binding:
  value: 99.5
  value-max: null
  unit: percent
  notes: '>99.5%'
bioavailability:
  value: 42.0
  value-max: 100.0
  notes: 42–100%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces 97%
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Minimal liver (glucuronidation)
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
  title: Telmisartan
  url: https://en.wikipedia.org/w/index.php?title=Telmisartan&oldid=1356471866
  revision: 1356471866
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1017
  pref-name: TELMISARTAN
  molecule-type: Small molecule
  first-approval: 1998
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C09CA07
  targets:
  - id: CHEMBL227
    name: Type-1 angiotensin II receptor
    action: ANTAGONIST
  properties:
    full-mwt: 514.63
    mw-freebase: 514.63
    alogp: 7.26
    psa: 72.94
    hba: 5
    hbd: 1
    rtb: 7
    num-ro5-violations: 2
    qed-weighted: 0.24
    full-molformula: C33H30N4O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 57da6ef2-2e86-4e4d-90df-73a2a8cf97f6
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=57da6ef2-2e86-4e4d-90df-73a2a8cf97f6
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Pritor
  ema-number: EMEA/H/C/000210
  url: https://www.ema.europa.eu/en/documents/product-information/pritor-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Telmisartan

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `telmisartan-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1017](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1017/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Long-acting ARB that is also a partial PPAR-gamma agonist -- blood pressure control without a metabolic penalty.

## Mechanism

Type-1 angiotensin II receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1998
- **Flags:** black-box warning
- **ATC C09CA07:** CARDIOVASCULAR SYSTEM › ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), PLAIN › Angiotensin II receptor blockers (ARBs), plain

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 514.63 | 7.26 | 72.94 | 1/5 | 2 | C33H30N4O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Type-1 angiotensin II receptor (CHEMBL227)|Type-1 angiotensin II receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Telmisartan*](https://en.wikipedia.org/w/index.php?title=Telmisartan&oldid=1356471866) (revision 1356471866, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 24 h | 24 hours |
| Protein binding | 99.5 % | >99.5% |
| Bioavailability | 42–100 % | 42–100% |
| Metabolism | hepatic | Minimal liver (glucuronidation) |
| Excretion | mainly non-renal | Feces 97% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 57da6ef2…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=57da6ef2-2e86-4e4d-90df-73a2a8cf97f6), label version 20260811. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 24)
> - protein-binding: consistent (label values: 99.5)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Pritor*](https://www.ema.europa.eu/en/documents/product-information/pritor-epar-product-information_en.pdf) (EMEA/H/C/000210). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 20)
> - protein-binding: consistent (SmPC values: 99.5)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Azilsartan medoxomil (Edarbi)]] (Type-1 angiotensin II receptor), [[Candesartan (Atacand)]] (Type-1 angiotensin II receptor), [[Candesartan Cilexetil]] (Type-1 angiotensin II receptor), [[Fimasartan]] (Type-1 angiotensin II receptor), [[Irbesartan (Avapro)]] (Type-1 angiotensin II receptor), [[Olmesartan (Benicar)]] (Type-1 angiotensin II receptor), [[Olmesartan Medoxomil]] (Type-1 angiotensin II receptor), [[Sparsentan]] (Type-1 angiotensin II receptor), [[Tasosartan]] (Type-1 angiotensin II receptor), [[Trv-120027]] (Type-1 angiotensin II receptor), [[Valsartan (Diovan)]] (Type-1 angiotensin II receptor)
- **Same ATC subgroup:** [[Azilsartan Medoxomil]], [[Candesartan (Atacand)]], [[Eprosartan]], [[Fimasartan]], [[Irbesartan (Avapro)]], [[Losartan]], [[Olmesartan (Benicar)]], [[Olmesartan Medoxomil]], [[Tasosartan]], [[Valsartan (Diovan)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
