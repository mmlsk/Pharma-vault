---
type: compound
schema-version: 2
compound-id: deferasirox-compound
name: Deferasirox
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Iron chelating agent
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL550348
chembl-max-phase: 4
half-life:
  value: 8.0
  value-max: 16.0
  unit: h
  notes: 8 to 16 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99%
bioavailability:
  value: 70.0
  value-max: null
  notes: 70%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Fecal (84%) and kidney (8%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver glucuronidation
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
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Deferasirox
  url: https://en.wikipedia.org/w/index.php?title=Deferasirox&oldid=1329248849
  revision: 1329248849
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL550348
  pref-name: DEFERASIROX
  molecule-type: Small molecule
  first-approval: 2005
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - V03AC03
  targets:
  - id: CHEMBL2363058
    name: Iron
    action: CHELATING AGENT
  properties:
    full-mwt: 373.37
    mw-freebase: 373.37
    alogp: 3.71
    psa: 108.47
    hba: 6
    hbd: 3
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.5
    full-molformula: C21H15N3O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 3495a70c-870c-4968-940e-8baea152cf85
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3495a70c-870c-4968-940e-8baea152cf85
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Exjade
  ema-number: EMEA/H/C/000670
  url: https://www.ema.europa.eu/en/documents/product-information/exjade-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Deferasirox

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `deferasirox-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL550348](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL550348/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Oral iron chelator for transfusional overload; renal and hepatic toxicity require monitoring.

## Mechanism

Iron chelating agent _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2005
- **Flags:** black-box warning
- **ATC V03AC03:** VARIOUS › ALL OTHER THERAPEUTIC PRODUCTS › Iron chelating agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 373.37 | 3.71 | 108.47 | 3/6 | 0 | C21H15N3O4 |

**Targets (ChEMBL curated mechanisms):**

- [[Iron (CHEMBL2363058)|Iron]] - chelating agent · METAL

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Deferasirox*](https://en.wikipedia.org/w/index.php?title=Deferasirox&oldid=1329248849) (revision 1329248849, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8–16 h | 8 to 16 hours |
| Protein binding | 99 % | 99% |
| Bioavailability | 70 % | 70% |
| Metabolism | hepatic | Liver glucuronidation |
| Excretion | mainly non-renal | Fecal (84%) and kidney (8%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 3495a70c…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3495a70c-870c-4968-940e-8baea152cf85), label version 20260128. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 8, 16)
> - protein-binding: consistent (label values: 99)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Exjade*](https://www.ema.europa.eu/en/documents/product-information/exjade-epar-product-information_en.pdf) (EMEA/H/C/000670). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 8, 16)
> - protein-binding: consistent (SmPC values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Dexrazoxane (Zinecard)]] (Iron)
- **Same ATC subgroup:** [[Deferiprone]], [[Deferoxamine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
