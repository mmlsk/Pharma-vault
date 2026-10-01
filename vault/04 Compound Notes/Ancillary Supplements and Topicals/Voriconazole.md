---
type: compound
schema-version: 2
compound-id: voriconazole-compound
name: Voriconazole
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Cytochrome P450 51 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL638
chembl-max-phase: 4
half-life:
  value: null
  value-max: null
  unit: null
  notes: Dose-dependent
protein-binding:
  value: 58.0
  value-max: null
  unit: percent
  notes: 58%
bioavailability:
  value: 96.0
  value-max: null
  notes: 96% (oral)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (80–83%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver: CYP2C19 (significant involvement), also CYP2C9, CYP3A4'
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
  title: Voriconazole
  url: https://en.wikipedia.org/w/index.php?title=Voriconazole&oldid=1370056373
  revision: 1370056373
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL638
  pref-name: VORICONAZOLE
  molecule-type: Small molecule
  first-approval: 2002
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J02AC03
  targets:
  - id: CHEMBL1780
    name: Lanosterol 14-alpha demethylase
    action: INHIBITOR
  properties:
    full-mwt: 349.32
    mw-freebase: 349.32
    alogp: 2.18
    psa: 76.72
    hba: 6
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.76
    full-molformula: C16H14F3N5O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: c620b2d7-3c2b-4252-8cfc-2f322d624435
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c620b2d7-3c2b-4252-8cfc-2f322d624435
  checked: '2026-10-01'
  fields:
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Vfend
  ema-number: EMEA/H/C/000387
  url: https://www.ema.europa.eu/en/documents/product-information/vfend-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    protein-binding: consistent
---

# Voriconazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `voriconazole-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL638](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL638/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Disrupts fungal ergosterol synthesis or membrane function; interaction and organ-toxicity profiles differ substantially.

## Mechanism

Cytochrome P450 51 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2002
- **ATC J02AC03:** ANTIINFECTIVES FOR SYSTEMIC USE › ANTIMYCOTICS FOR SYSTEMIC USE › Triazole and tetrazole derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 349.32 | 2.18 | 76.72 | 1/6 | 0 | C16H14F3N5O |

**Targets (ChEMBL curated mechanisms):**

- [[Lanosterol 14-alpha demethylase (CHEMBL1780)|Lanosterol 14-alpha demethylase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Voriconazole*](https://en.wikipedia.org/w/index.php?title=Voriconazole&oldid=1370056373) (revision 1370056373, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | - | Dose-dependent |
| Protein binding | 58 % | 58% |
| Bioavailability | 96 % | 96% (oral) |
| Metabolism | hepatic | Liver: CYP2C19 (significant involvement), also CYP2C9, CYP3A4 |
| CYP (metabolised by) | CYP2C19, CYP2C9, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Voriconazole N-oxide (major; minimal antifungal activity) |
| Excretion | mainly urinary | Urine (80–83%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set c620b2d7…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c620b2d7-3c2b-4252-8cfc-2f322d624435), label version 20260827. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - protein-binding: consistent (label values: 58)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Vfend*](https://www.ema.europa.eu/en/documents/product-information/vfend-epar-product-information_en.pdf) (EMEA/H/C/000387). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - protein-binding: consistent (SmPC values: 58)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Fluconazole]] (Lanosterol 14-alpha demethylase), [[Posaconazole]] (Lanosterol 14-alpha demethylase), [[Tioconazole]] (Lanosterol 14-alpha demethylase)
- **Same ATC subgroup:** [[Fluconazole]], [[Oteseconazole]], [[Posaconazole]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others), CYP2C9 (+40 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
