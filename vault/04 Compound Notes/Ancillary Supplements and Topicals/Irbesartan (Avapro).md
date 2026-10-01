---
type: compound
schema-version: 2
compound-id: irbesartan-compound
name: Irbesartan (Avapro)
aliases:
- Irbesartan
- Avapro
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
chembl-id: CHEMBL1513
chembl-max-phase: 4
half-life:
  value: 11.0
  value-max: null
  unit: h
  notes: 11 h to 15 h
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: ~90%
bioavailability:
  value: 60.0
  value-max: null
  notes: 60% to 80%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Kidney 20%, feces 65%
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C9)
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
  title: Irbesartan
  url: https://en.wikipedia.org/w/index.php?title=Irbesartan&oldid=1365409692
  revision: 1365409692
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1513
  pref-name: IRBESARTAN
  molecule-type: Small molecule
  first-approval: 1997
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C09CA04
  targets:
  - id: CHEMBL227
    name: Type-1 angiotensin II receptor
    action: ANTAGONIST
  properties:
    full-mwt: 428.54
    mw-freebase: 428.54
    alogp: 4.78
    psa: 87.13
    hba: 5
    hbd: 1
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.59
    full-molformula: C25H28N6O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 7885b2a8-be4e-48ab-8113-4e6ab791eb98
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7885b2a8-be4e-48ab-8113-4e6ab791eb98
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Aprovel
  ema-number: EMEA/H/C/000141
  url: https://www.ema.europa.eu/en/documents/product-information/aprovel-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Irbesartan (Avapro)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `irbesartan-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Irbesartan, Avapro
- **ChEMBL:** [CHEMBL1513](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1513/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

ARB with a dedicated diabetic nephropathy indication.

## Mechanism

Type-1 angiotensin II receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1997
- **Flags:** black-box warning
- **ATC C09CA04:** CARDIOVASCULAR SYSTEM › ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), PLAIN › Angiotensin II receptor blockers (ARBs), plain

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 428.54 | 4.78 | 87.13 | 1/5 | 0 | C25H28N6O |

**Targets (ChEMBL curated mechanisms):**

- [[Type-1 angiotensin II receptor (CHEMBL227)|Type-1 angiotensin II receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Irbesartan*](https://en.wikipedia.org/w/index.php?title=Irbesartan&oldid=1365409692) (revision 1365409692, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 11 h | 11 h to 15 h |
| Protein binding | 90 % | ~90% |
| Bioavailability | 60 % | 60% to 80% |
| Metabolism | hepatic | Liver (CYP2C9) |
| CYP (metabolised by) | CYP2C9 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Kidney 20%, feces 65% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 7885b2a8…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7885b2a8-be4e-48ab-8113-4e6ab791eb98), label version 20260824. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 11, 15)
> - protein-binding: consistent (label values: 90)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Aprovel*](https://www.ema.europa.eu/en/documents/product-information/aprovel-epar-product-information_en.pdf) (EMEA/H/C/000141). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 11, 15)
> - protein-binding: consistent (SmPC values: 96)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Azilsartan medoxomil (Edarbi)]] (Type-1 angiotensin II receptor), [[Candesartan (Atacand)]] (Type-1 angiotensin II receptor), [[Candesartan Cilexetil]] (Type-1 angiotensin II receptor), [[Fimasartan]] (Type-1 angiotensin II receptor), [[Olmesartan (Benicar)]] (Type-1 angiotensin II receptor), [[Olmesartan Medoxomil]] (Type-1 angiotensin II receptor), [[Sparsentan]] (Type-1 angiotensin II receptor), [[Tasosartan]] (Type-1 angiotensin II receptor), [[Telmisartan]] (Type-1 angiotensin II receptor), [[Trv-120027]] (Type-1 angiotensin II receptor), [[Valsartan (Diovan)]] (Type-1 angiotensin II receptor)
- **Same ATC subgroup:** [[Azilsartan Medoxomil]], [[Candesartan (Atacand)]], [[Eprosartan]], [[Fimasartan]], [[Losartan]], [[Olmesartan (Benicar)]], [[Olmesartan Medoxomil]], [[Tasosartan]], [[Telmisartan]], [[Valsartan (Diovan)]]
- **Shared CYP substrate pool:** CYP2C9 (+40 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
