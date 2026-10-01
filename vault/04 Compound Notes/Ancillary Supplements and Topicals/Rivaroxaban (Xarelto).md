---
type: compound
schema-version: 2
compound-id: rivaroxaban-compound
name: Rivaroxaban (Xarelto)
aliases:
- Rivaroxaban
- Xarelto
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
chembl-id: CHEMBL198362
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 9.0
  unit: h
  notes: 5–9 hours in healthy subjects aged 20 to 45
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 80.0
  value-max: 100.0
  notes: 80–100%; Cmax = 2–4 hours (10 mg oral)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: metabolized in liver and eliminated unchanged
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4, CYP2J2 and CYP-independent mechanisms
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2J2
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2J2, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- identity-stereo-check
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Rivaroxaban
  url: https://en.wikipedia.org/w/index.php?title=Rivaroxaban&oldid=1356485488
  revision: 1356485488
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL198362
  pref-name: RIVAROXABAN
  molecule-type: Small molecule
  first-approval: 2008
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - B01AF01
  targets:
  - id: CHEMBL244
    name: Coagulation factor X
    action: INHIBITOR
  properties:
    full-mwt: 435.89
    mw-freebase: 435.89
    alogp: 2.52
    psa: 88.18
    hba: 6
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.78
    full-molformula: C19H18ClN3O5S
  identity-check: connectivity-match
pk-verification:
  source: fda-label
  status: consistent
  set-id: 10db92f9-2300-4a80-836b-673e1ae91610
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=10db92f9-2300-4a80-836b-673e1ae91610
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Xarelto
  ema-number: EMEA/H/C/000944
  url: https://www.ema.europa.eu/en/documents/product-information/xarelto-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Rivaroxaban (Xarelto)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rivaroxaban-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Rivaroxaban, Xarelto
- **ChEMBL:** [CHEMBL198362](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL198362/) · max phase 4 · id via Wikipedia infobox · structure check: ⚠️ same skeleton, stereo/isotope layer differs

## Source summary

Oral factor Xa inhibitor with once-daily regimens for several indications; renal function, food requirements, and bleeding interactions matter.

## Mechanism

Coagulation factor X inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2008
- **Flags:** black-box warning
- **ATC B01AF01:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Direct factor Xa inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 435.89 | 2.52 | 88.18 | 1/6 | 0 | C19H18ClN3O5S |

**Targets (ChEMBL curated mechanisms):**

- [[Coagulation factor X (CHEMBL244)|Coagulation factor X]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rivaroxaban*](https://en.wikipedia.org/w/index.php?title=Rivaroxaban&oldid=1356485488) (revision 1356485488, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–9 h | 5–9 hours in healthy subjects aged 20 to 45 |
| Bioavailability | 80–100 % | 80–100%; Cmax = 2–4 hours (10 mg oral) |
| Metabolism | hepatic | CYP3A4, CYP2J2 and CYP-independent mechanisms |
| CYP (metabolised by) | CYP2J2, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | metabolized in liver and eliminated unchanged |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 10db92f9…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=10db92f9-2300-4a80-836b-673e1ae91610), label version 20260910. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1.6, 1.9, 3, 4.2, 5, 9)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Xarelto*](https://www.ema.europa.eu/en/documents/product-information/xarelto-epar-product-information_en.pdf) (EMEA/H/C/000944). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 4.5, 5, 9, 11, 13)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Antithrombin Alfa]] (Coagulation factor X), [[Apixaban (Eliquis)]] (Coagulation factor X), [[Betrixaban]] (Coagulation factor X), [[Darexaban]] (Coagulation factor X), [[Otamixaban]] (Coagulation factor X)
- **Same ATC subgroup:** [[Apixaban (Eliquis)]], [[Betrixaban]], [[Edoxaban (Savaysa-Lixiana)|Edoxaban (Savaysa/Lixiana)]]
- **Shared CYP substrate pool:** CYP2J2 (+3 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
