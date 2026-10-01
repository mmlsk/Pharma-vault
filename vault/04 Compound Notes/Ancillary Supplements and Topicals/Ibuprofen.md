---
type: compound
schema-version: 2
compound-id: ibuprofen-compound
name: Ibuprofen
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Cyclooxygenase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL521
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 4.0
  unit: h
  notes: 2–4 hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98%
bioavailability:
  value: 80.0
  value-max: 100.0
  notes: 80–100% (oral), 87% (rectal)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (95%)
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
- pk-ema-discrepant
- pk-sources-disagree
pk-source:
  type: wikipedia-infobox
  title: Ibuprofen
  url: https://en.wikipedia.org/w/index.php?title=Ibuprofen&oldid=1376621174
  revision: 1376621174
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL521
  pref-name: IBUPROFEN
  molecule-type: Small molecule
  first-approval: 1974
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C01EB16
  - G02CC01
  - M01AE01
  - M01AE51
  - M02AA13
  - R02AX02
  targets:
  - id: CHEMBL2094253
    name: Cyclooxygenase
    action: INHIBITOR
  properties:
    full-mwt: 206.28
    mw-freebase: 206.28
    alogp: 3.07
    psa: 37.3
    hba: 1
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.82
    full-molformula: C13H18O2
pk-verification:
  source: fda-label
  status: consistent
  set-id: 2144eff0-d7ab-486d-b116-a4ff3ae2afe2
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2144eff0-d7ab-486d-b116-a4ff3ae2afe2
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
pk-verification-ema:
  source: ema-smpc
  status: discrepant
  product: Pedea
  ema-number: EMEA/H/C/000549
  url: https://www.ema.europa.eu/en/documents/product-information/pedea-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/pedea-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
---

# Ibuprofen

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ibuprofen-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL521](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL521/) · max phase 4 · id via source catalogue

## Source summary

Cyclooxygenase inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL521).

## Mechanism

Cyclooxygenase inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1974
- **Flags:** black-box warning
- **ATC C01EB16:** CARDIOVASCULAR SYSTEM › OTHER CARDIAC PREPARATIONS › Other cardiac preparations
- **ATC G02CC01:** GENITO URINARY SYSTEM AND SEX HORMONES › OTHER GYNECOLOGICALS › Antiinflammatory products for vaginal administration
- **ATC M01AE01:** MUSCULO-SKELETAL SYSTEM › ANTIINFLAMMATORY AND ANTIRHEUMATIC PRODUCTS, NON-STEROIDS › Propionic acid derivatives
- **ATC M01AE51:** MUSCULO-SKELETAL SYSTEM › ANTIINFLAMMATORY AND ANTIRHEUMATIC PRODUCTS, NON-STEROIDS › Propionic acid derivatives
- **ATC M02AA13:** MUSCULO-SKELETAL SYSTEM › TOPICAL PRODUCTS FOR JOINT AND MUSCULAR PAIN › Antiinflammatory preparations, non-steroids for topical use
- **ATC R02AX02:** RESPIRATORY SYSTEM › THROAT PREPARATIONS › Other throat preparations

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 206.28 | 3.07 | 37.3 | 1/1 | 0 | C13H18O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Cyclooxygenase (CHEMBL2094253)|Cyclooxygenase]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ibuprofen*](https://en.wikipedia.org/w/index.php?title=Ibuprofen&oldid=1376621174) (revision 1376621174, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–4 h | 2–4 hours |
| Protein binding | 98 % | 98% |
| Bioavailability | 80–100 % | 80–100% (oral), 87% (rectal) |
| Metabolism | hepatic | Liver (CYP2C9) |
| CYP (metabolised by) | CYP2C9 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Ibuprofen glucuronide, 2-hydroxyibuprofen, 3-hydroxyibuprofen, carboxy-ibuprofen, 1-hydroxyibuprofen |
| Excretion | mainly urinary | Urine (95%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 2144eff0…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2144eff0-d7ab-486d-b116-a4ff3ae2afe2), label version 20260908. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1.8, 2)
> - protein-binding: no-label-value (label values: -)

> [!danger] EU SmPC cross-check: **discrepant**
> Automated comparison with section 5.2 of the [EU SmPC of *Pedea*](https://www.ema.europa.eu/en/documents/product-information/pedea-epar-product-information_en.pdf) (EMEA/H/C/000549) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/pedea-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (SmPC values: 30)
> - protein-binding: consistent (SmPC values: 95, 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acemetacin]] (Cyclooxygenase), [[Acetaminophen]] (Cyclooxygenase), [[Aloxiprin]] (Cyclooxygenase), [[Aspirin]] (Cyclooxygenase), [[Benzydamine]] (Cyclooxygenase), [[Bismuth Subsalicylate]] (Cyclooxygenase), [[Clometacin]] (Cyclooxygenase), [[Dexibuprofen]] (Cyclooxygenase), [[Dexketoprofen]] (Cyclooxygenase), [[Diclofenac]] (Cyclooxygenase), [[Diflunisal]] (Cyclooxygenase), [[Esflurbiprofen]] (Cyclooxygenase)
- **Same ATC subgroup:** [[Aceclofenac]], [[Adenosine (IV)]], [[Benzydamine]], [[Coenzyme Q10]], [[Dexibuprofen]], [[Dexketoprofen]], [[Diclofenac]], [[Esflurbiprofen]], [[Fenoprofen]], [[Flurbiprofen]], [[Indomethacin]], [[Indoprofen]]
- **Shared CYP substrate pool:** CYP2C9 (+40 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
