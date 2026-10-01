---
type: compound
schema-version: 2
compound-id: amifampridine-compound
name: Amifampridine (3,4-Diaminopyridine)
aliases:
- Amifampridine
- '3'
- 4-Diaminopyridine
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Voltage-gated potassium channel blocker
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL354077
chembl-max-phase: 4
half-life:
  value: 2.5
  value-max: null
  unit: h
  notes: 2.5 hrs (amifampridine); 4 hrs (3-N-acetyl&shy;amifampridine)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 93.0
  value-max: 100.0
  notes: 93–100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (19% unmetabolized, 74–81% 3-N-acetyl&shy;amifampridine)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Acetylation to 3-N-acetyl&shy;amifampridine
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
- pk-ema-consistent
pk-source:
  type: wikipedia-infobox
  title: Amifampridine
  url: https://en.wikipedia.org/w/index.php?title=Amifampridine&oldid=1337381039
  revision: 1337381039
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL354077
  pref-name: AMIFAMPRIDINE
  molecule-type: Small molecule
  first-approval: 2009
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N07XX05
  targets:
  - id: CHEMBL2362996
    name: Voltage-gated potassium channel
    action: BLOCKER
  properties:
    full-mwt: 109.13
    mw-freebase: 109.13
    alogp: 0.25
    psa: 64.93
    hba: 3
    hbd: 2
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.5
    full-molformula: C5H7N3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Firdapse (previously Zenas)
  ema-number: EMEA/H/C/001032
  url: https://www.ema.europa.eu/en/documents/product-information/firdapse-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/firdapse-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Amifampridine (3,4-Diaminopyridine)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `amifampridine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Amifampridine, 3, 4-Diaminopyridine
- **ChEMBL:** [CHEMBL354077](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL354077/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Presynaptic voltage-gated potassium channel blocker; the approved symptomatic treatment for Lambert-Eaton myasthenic syndrome.

## Mechanism

Voltage-gated potassium channel blocker _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2009
- **ATC N07XX05:** NERVOUS SYSTEM › OTHER NERVOUS SYSTEM DRUGS › Other nervous system drugs

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 109.13 | 0.25 | 64.93 | 2/3 | 0 | C5H7N3 |

**Targets (ChEMBL curated mechanisms):**

- [[Voltage-gated potassium channel (CHEMBL2362996)|Voltage-gated potassium channel]] - blocker · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Amifampridine*](https://en.wikipedia.org/w/index.php?title=Amifampridine&oldid=1337381039) (revision 1337381039, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5 h | 2.5 hrs (amifampridine); 4 hrs (3-N-acetyl&shy;amifampridine) |
| Bioavailability | 93–100 % | 93–100% |
| Metabolism | - | Acetylation to 3-N-acetyl&shy;amifampridine |
| Excretion | mainly urinary | Kidney (19% unmetabolized, 74–81% 3-N-acetyl&shy;amifampridine) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Firdapse (previously Zenas)*](https://www.ema.europa.eu/en/documents/product-information/firdapse-epar-product-information_en.pdf) (EMEA/H/C/001032) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/firdapse-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 2.5, 4)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Tedisamil]] (Voltage-gated potassium channel)
- **Same ATC subgroup:** [[Deutetrabenazine]], [[Dextromethorphan]], [[Edaravone]], [[Inotersen (Tegsedi)]], [[Patisiran (Onpattro)]], [[Pitolisant (Wakix)]], [[Riluzole (Rilutek)]], [[Tafamidis (Vyndaqel)]], [[Tetrabenazine]], [[Troriluzole]], [[Valbenazine]], [[Vutrisiran (Amvuttra)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
