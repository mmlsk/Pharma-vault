---
type: compound
schema-version: 2
compound-id: colchicine-compound
name: Colchicine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Tubulin inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL107
chembl-max-phase: 4
half-life:
  value: 26.6
  value-max: 31.2
  unit: h
  notes: 26.6-31.2 hours
protein-binding:
  value: 35.0
  value-max: 44.0
  unit: percent
  notes: 35-44%
bioavailability:
  value: 45.0
  value-max: null
  notes: 45%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (65%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Metabolism, partly by CYP3A4
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
  title: Colchicine
  url: https://en.wikipedia.org/w/index.php?title=Colchicine&oldid=1374505164
  revision: 1374505164
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL107
  pref-name: COLCHICINE
  molecule-type: Small molecule
  first-approval: 1961
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - M04AC01
  targets:
  - id: CHEMBL2095182
    name: Tubulin
    action: INHIBITOR
  properties:
    full-mwt: 399.44
    mw-freebase: 399.44
    alogp: 2.87
    psa: 83.09
    hba: 6
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.83
    full-molformula: C22H25NO6
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 5a0b4246-e7dd-29e5-e063-6294a90a2871
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5a0b4246-e7dd-29e5-e063-6294a90a2871
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Colchicine Agepha Pharma
  ema-number: EMEA/H/C/006653
  url: https://www.ema.europa.eu/en/documents/product-information/colchicine-agepha-pharma-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/colchicine-agepha-pharma-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Colchicine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `colchicine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL107](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL107/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Low-dose anti-inflammatory with a hard cardiovascular outcome trial behind it -- the only compound here targeting inflammation directly.

## Mechanism

Tubulin inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1961
- **ATC M04AC01:** MUSCULO-SKELETAL SYSTEM › ANTIGOUT PREPARATIONS › Preparations with no effect on uric acid metabolism

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 399.44 | 2.87 | 83.09 | 1/6 | 0 | C22H25NO6 |

**Targets (ChEMBL curated mechanisms):**

- [[Tubulin (CHEMBL2095182)|Tubulin]] - inhibitor · PROTEIN COMPLEX GROUP

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Colchicine*](https://en.wikipedia.org/w/index.php?title=Colchicine&oldid=1374505164) (revision 1374505164, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 26.6–31.2 h | 26.6-31.2 hours |
| Protein binding | 35–44 % | 35-44% |
| Bioavailability | 45 % | 45% |
| Metabolism | hepatic | Metabolism, partly by CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Feces (65%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 5a0b4246…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5a0b4246-e7dd-29e5-e063-6294a90a2871), label version 20260827. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 4.4, 26.6, 31.2, 36, 240)
> - protein-binding: no-label-value (label values: -)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Colchicine Agepha Pharma*](https://www.ema.europa.eu/en/documents/product-information/colchicine-agepha-pharma-epar-product-information_en.pdf) (EMEA/H/C/006653) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/colchicine-agepha-pharma-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 4.4, 18.8, 19)
> - protein-binding: no-label-value (SmPC values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Belantamab Mafodotin]] (Tubulin), [[Brentuximab Vedotin]] (Tubulin), [[Davunetide]] (Tubulin)
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
