---
type: compound
schema-version: 2
compound-id: selexipag-compound
name: Selexipag
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Prostanoid IP receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL238804
chembl-max-phase: 4
half-life:
  value: 0.8
  value-max: 2.5
  unit: h
  notes: 0.8–2.5 h (selexipag) and 6.2–13.5 h (ACT-333679)
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99%
bioavailability:
  value: 49.0
  value-max: null
  notes: 49%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 93% faeces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Activation by carboxylesterases, inactivation by CYP2C8 and others
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C8
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C8 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Selexipag
  url: https://en.wikipedia.org/w/index.php?title=Selexipag&oldid=1329368752
  revision: 1329368752
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL238804
  pref-name: SELEXIPAG
  molecule-type: Small molecule
  first-approval: 2015
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - B01AC27
  targets:
  - id: CHEMBL1995
    name: Prostacyclin receptor
    action: AGONIST
  properties:
    full-mwt: 496.63
    mw-freebase: 496.63
    alogp: 3.9
    psa: 101.49
    hba: 7
    hbd: 1
    rtb: 12
    num-ro5-violations: 0
    qed-weighted: 0.38
    full-molformula: C26H32N4O4S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: a7a23b87-f892-4e2c-8e2e-ebf841220f90
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a7a23b87-f892-4e2c-8e2e-ebf841220f90
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Uptravi
  ema-number: EMEA/H/C/003774
  url: https://www.ema.europa.eu/en/documents/product-information/uptravi-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/uptravi-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Selexipag

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `selexipag-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL238804](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL238804/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Non-prostanoid selective IP receptor agonist, orally active with an active metabolite carrying most of the effect.

## Mechanism

Prostanoid IP receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2015
- **Flags:** prodrug
- **ATC B01AC27:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Platelet aggregation inhibitors excl. heparin

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 496.63 | 3.9 | 101.49 | 1/7 | 0 | C26H32N4O4S |

**Targets (ChEMBL curated mechanisms):**

- [[Prostacyclin receptor (CHEMBL1995)|Prostacyclin receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Selexipag*](https://en.wikipedia.org/w/index.php?title=Selexipag&oldid=1329368752) (revision 1329368752, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.8–2.5 h | 0.8–2.5 h (selexipag) and 6.2–13.5 h (ACT-333679) |
| Protein binding | 99 % | 99% |
| Bioavailability | 49 % | 49% |
| Metabolism | hepatic | Activation by carboxylesterases, inactivation by CYP2C8 and others |
| CYP (metabolised by) | CYP2C8 | roles as inhibitor/inducer not assessed |
| Metabolites | - | ACT-333679, the free acid (active metabolite) |
| Excretion | mainly non-renal | 93% faeces |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set a7a23b87…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a7a23b87-f892-4e2c-8e2e-ebf841220f90), label version 20260528. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.8, 2.5, 3, 4, 6.2, 13.5)
> - protein-binding: consistent (label values: 99)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Uptravi*](https://www.ema.europa.eu/en/documents/product-information/uptravi-epar-product-information_en.pdf) (EMEA/H/C/003774) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/uptravi-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 0.8, 2.5, 6.2, 13.5)
> - protein-binding: consistent (SmPC values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Abciximab]], [[Aloxiprin]], [[Aspirin]], [[Beraprost]], [[Cangrelor]], [[Cilostazol]], [[Clopidogrel (Plavix)]], [[Dipyridamole]], [[Epoprostenol]], [[Eptifibatide]], [[Prasugrel (Effient)]], [[Ticagrelor (Brilinta)]]
- **Shared CYP substrate pool:** CYP2C8 (+15 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
