---
type: compound
schema-version: 2
compound-id: etravirine-compound
name: Etravirine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Human immunodeficiency virus type 1 reverse transcriptase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL308954
chembl-max-phase: 4
half-life:
  value: 41.0
  value-max: null
  unit: h
  notes: 41±20 hours
protein-binding:
  value: 99.9
  value-max: null
  unit: percent
  notes: 99.9%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Faeces (93.7%), urine (1.2%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4, CYP2C9 & CYP2C19-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP2C9
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP2C9, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Etravirine
  url: https://en.wikipedia.org/w/index.php?title=Etravirine&oldid=1352070686
  revision: 1352070686
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL308954
  pref-name: ETRAVIRINE
  molecule-type: Small molecule
  first-approval: 2008
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J05AG04
  targets:
  - id: CHEMBL247
    name: Human immunodeficiency virus type 1 reverse transcriptase
    action: INHIBITOR
  properties:
    full-mwt: 435.29
    mw-freebase: 435.29
    alogp: 4.72
    psa: 120.64
    hba: 7
    hbd: 2
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.61
    full-molformula: C20H15BrN6O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: ea3856f6-fedf-ee88-e053-2a95a90a33ce
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ea3856f6-fedf-ee88-e053-2a95a90a33ce
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Intelence
  ema-number: EMEA/H/C/000900
  url: https://www.ema.europa.eu/en/documents/product-information/intelence-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Etravirine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `etravirine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL308954](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL308954/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits HIV reverse transcriptase and is used only as part of a resistance-aware antiretroviral regimen.

## Mechanism

Human immunodeficiency virus type 1 reverse transcriptase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2008
- **ATC J05AG04:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Non-nucleoside reverse transcriptase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 435.29 | 4.72 | 120.64 | 2/7 | 0 | C20H15BrN6O |

**Targets (ChEMBL curated mechanisms):**

- [[Human immunodeficiency virus type 1 reverse transcriptase (CHEMBL247)|Human immunodeficiency virus type 1 reverse transcriptase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Etravirine*](https://en.wikipedia.org/w/index.php?title=Etravirine&oldid=1352070686) (revision 1352070686, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 41 h | 41±20 hours |
| Protein binding | 99.9 % | 99.9% |
| Metabolism | hepatic | Liver (CYP3A4, CYP2C9 & CYP2C19-mediated) |
| CYP (metabolised by) | CYP2C19, CYP2C9, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Faeces (93.7%), urine (1.2%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set ea3856f6…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ea3856f6-fedf-ee88-e053-2a95a90a33ce), label version 20260113. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: consistent (label values: 97.66, 99, 99.02, 99.6, 99.9)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Intelence*](https://www.ema.europa.eu/en/documents/product-information/intelence-epar-product-information_en.pdf) (EMEA/H/C/000900). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 30, 40)
> - protein-binding: consistent (SmPC values: 97.66, 99.02, 99.6, 99.9)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Doravirine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Efavirenz]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Emtricitabine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Islatravir]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Lamivudine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Nevirapine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Rilpivirine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Tenofovir Alafenamide]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Zidovudine]] (Human immunodeficiency virus type 1 reverse transcriptase)
- **Same ATC subgroup:** [[Doravirine]], [[Efavirenz]], [[Nevirapine]], [[Rilpivirine]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others), CYP2C9 (+40 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
