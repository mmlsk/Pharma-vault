---
type: compound
schema-version: 2
compound-id: tadalafil-compound
name: Cialis (Tadalafil)
aliases:
- Cialis
- Tadalafil
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Phosphodiesterase 5A inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL779
chembl-max-phase: 4
half-life:
  value: 17.5
  value-max: null
  unit: h
  notes: 17.5 hours
protein-binding:
  value: 94.0
  value-max: null
  unit: percent
  notes: 94%
bioavailability:
  value: null
  value-max: null
  notes: Varies
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (~61%), urine (~36%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (predominantly CYP3A4)
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
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Tadalafil
  url: https://en.wikipedia.org/w/index.php?title=Tadalafil&oldid=1366433668
  revision: 1366433668
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL779
  pref-name: TADALAFIL
  molecule-type: Small molecule
  first-approval: 2002
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - G04BE08
  targets:
  - id: CHEMBL1827
    name: cGMP-specific 3',5'-cyclic phosphodiesterase
    action: INHIBITOR
  properties:
    full-mwt: 389.41
    mw-freebase: 389.41
    alogp: 2.21
    psa: 74.87
    hba: 4
    hbd: 1
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.69
    full-molformula: C22H19N3O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 81222924-29d9-4031-954d-132923867b8e
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=81222924-29d9-4031-954d-132923867b8e
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Cialis
  ema-number: EMEA/H/C/000436
  url: https://www.ema.europa.eu/en/documents/product-information/cialis-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Cialis (Tadalafil)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tadalafil-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Cialis, Tadalafil
- **ChEMBL:** [CHEMBL779](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL779/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Long-acting PDE5 inhibitor that lowers blood pressure and improves flow-mediated dilation on chronic dosing.

## Mechanism

Phosphodiesterase 5A inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2002
- **ATC G04BE08:** GENITO URINARY SYSTEM AND SEX HORMONES › UROLOGICALS › Drugs used in erectile dysfunction

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 389.41 | 2.21 | 74.87 | 1/4 | 0 | C22H19N3O4 |

**Targets (ChEMBL curated mechanisms):**

- [[cGMP-specific 3',5'-cyclic phosphodiesterase (CHEMBL1827)|cGMP-specific 3',5'-cyclic phosphodiesterase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tadalafil*](https://en.wikipedia.org/w/index.php?title=Tadalafil&oldid=1366433668) (revision 1366433668, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 17.5 h | 17.5 hours |
| Protein binding | 94 % | 94% |
| Bioavailability | - | Varies |
| Metabolism | hepatic | Liver (predominantly CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Catechol metabolite |
| Excretion | mainly non-renal | Feces (~61%), urine (~36%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 81222924…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=81222924-29d9-4031-954d-132923867b8e), label version 20260909. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 17.5)
> - protein-binding: no-label-value (label values: -)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Cialis*](https://www.ema.europa.eu/en/documents/product-information/cialis-epar-product-information_en.pdf) (EMEA/H/C/000436). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 17.5)
> - protein-binding: no-label-value (SmPC values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Avanafil (Stendra)]] (cGMP-specific 3',5'-cyclic phosphodiesterase), [[Gisadenafil]] (cGMP-specific 3',5'-cyclic phosphodiesterase), [[Ibudilast]] (cGMP-specific 3',5'-cyclic phosphodiesterase), [[Pf-00489791]] (cGMP-specific 3',5'-cyclic phosphodiesterase), [[Udenafil]] (cGMP-specific 3',5'-cyclic phosphodiesterase)
- **Same ATC subgroup:** [[Alprostadil]], [[Apomorphine]], [[Avanafil (Stendra)]], [[Papaverine]], [[Sildenafil (Viagra)]], [[Udenafil]], [[Vardenafil (Levitra)]], [[Yohimbine]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
