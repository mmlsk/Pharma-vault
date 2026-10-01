---
type: compound
schema-version: 2
compound-id: apixaban-compound
name: Apixaban (Eliquis)
aliases:
- Apixaban
- Eliquis
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Coagulation factor X inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL231779
chembl-max-phase: 4
half-life:
  value: 9.0
  value-max: 14.0
  unit: h
  notes: 9–14 h
protein-binding:
  value: 87.0
  value-max: null
  unit: percent
  notes: ~87%
bioavailability:
  value: 50.0
  value-max: null
  notes: ~50%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Bile duct (75%), kidney (25%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4, CYP3A5, CYP1A2 and others
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Apixaban
  url: https://en.wikipedia.org/w/index.php?title=Apixaban&oldid=1370302718
  revision: 1370302718
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL231779
  pref-name: APIXABAN
  molecule-type: Small molecule
  first-approval: 2011
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - B01AF02
  targets:
  - id: CHEMBL244
    name: Coagulation factor X
    action: INHIBITOR
  properties:
    full-mwt: 459.51
    mw-freebase: 459.51
    alogp: 2.7
    psa: 110.76
    hba: 6
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.63
    full-molformula: C25H25N5O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: a454cd24-0c6d-46e8-b1e4-197388606175
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a454cd24-0c6d-46e8-b1e4-197388606175
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Eliquis
  ema-number: EMEA/H/C/002148
  url: https://www.ema.europa.eu/en/documents/product-information/eliquis-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/eliquis-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Apixaban (Eliquis)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `apixaban-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Apixaban, Eliquis
- **ChEMBL:** [CHEMBL231779](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL231779/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Direct factor Xa inhibitor used for atrial fibrillation and venous thromboembolism; interactions and additive bleeding make casual stack use hazardous.

## Mechanism

Coagulation factor X inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2011
- **Flags:** black-box warning
- **ATC B01AF02:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Direct factor Xa inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 459.51 | 2.7 | 110.76 | 1/6 | 0 | C25H25N5O4 |

**Targets (ChEMBL curated mechanisms):**

- [[Coagulation factor X (CHEMBL244)|Coagulation factor X]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Apixaban*](https://en.wikipedia.org/w/index.php?title=Apixaban&oldid=1370302718) (revision 1370302718, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9–14 h | 9–14 h |
| Protein binding | 87 % | ~87% |
| Bioavailability | 50 % | ~50% |
| Metabolism | hepatic | CYP3A4, CYP3A5, CYP1A2 and others |
| CYP (metabolised by) | CYP1A2, CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Bile duct (75%), kidney (25%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set a454cd24…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a454cd24-0c6d-46e8-b1e4-197388606175), label version 20260424. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 12)
> - protein-binding: consistent (label values: 87, 92, 94)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Eliquis*](https://www.ema.europa.eu/en/documents/product-information/eliquis-epar-product-information_en.pdf) (EMEA/H/C/002148) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/eliquis-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 12)
> - protein-binding: consistent (SmPC values: 87)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Antithrombin Alfa]] (Coagulation factor X), [[Betrixaban]] (Coagulation factor X), [[Darexaban]] (Coagulation factor X), [[Otamixaban]] (Coagulation factor X), [[Rivaroxaban (Xarelto)]] (Coagulation factor X)
- **Same ATC subgroup:** [[Betrixaban]], [[Edoxaban (Savaysa-Lixiana)|Edoxaban (Savaysa/Lixiana)]], [[Rivaroxaban (Xarelto)]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP3A4 (+204 others), CYP3A5 (+13 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
