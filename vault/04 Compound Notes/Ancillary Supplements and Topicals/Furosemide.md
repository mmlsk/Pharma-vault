---
type: compound
schema-version: 2
compound-id: furosemide-compound
name: Furosemide
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Sodium-(potassium)-chloride cotransporter 2 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL35
chembl-max-phase: 4
half-life:
  value: 100.0
  value-max: null
  unit: min
  notes: up to 100 minutes
protein-binding:
  value: 91.0
  value-max: 99.0
  unit: percent
  notes: 91–99%
bioavailability:
  value: 43.0
  value-max: 69.0
  notes: 43–69%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (66%), bile duct (33%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver and kidney glucuronidation
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
  title: Furosemide
  url: https://en.wikipedia.org/w/index.php?title=Furosemide&oldid=1372679847
  revision: 1372679847
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL35
  pref-name: FUROSEMIDE
  molecule-type: Small molecule
  first-approval: 1966
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C03CA01
  targets:
  - id: CHEMBL1874
    name: Solute carrier family 12 member 1
    action: INHIBITOR
  properties:
    full-mwt: 330.75
    mw-freebase: 330.75
    alogp: 1.89
    psa: 122.63
    hba: 5
    hbd: 3
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.77
    full-molformula: C12H11ClN2O5S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: dba00759-87b4-4ecf-998e-ba03ed3d2f1a
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=dba00759-87b4-4ecf-998e-ba03ed3d2f1a
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Bopediat
  ema-number: EMEA/H/C/006617
  url: https://www.ema.europa.eu/en/documents/product-information/bopediat-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Furosemide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `furosemide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL35](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL35/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Loop diuretic for edema and heart failure; rapid fluid shifts and electrolyte loss make unsupervised use hazardous.

## Mechanism

Sodium-(potassium)-chloride cotransporter 2 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1966
- **Flags:** black-box warning
- **ATC C03CA01:** CARDIOVASCULAR SYSTEM › HIGH-CEILING DIURETICS › Sulfonamides, plain

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 330.75 | 1.89 | 122.63 | 3/5 | 0 | C12H11ClN2O5S |

**Targets (ChEMBL curated mechanisms):**

- [[Solute carrier family 12 member 1 (CHEMBL1874)|Solute carrier family 12 member 1]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Furosemide*](https://en.wikipedia.org/w/index.php?title=Furosemide&oldid=1372679847) (revision 1372679847, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 100 min | up to 100 minutes |
| Protein binding | 91–99 % | 91–99% |
| Bioavailability | 43–69 % | 43–69% |
| Metabolism | hepatic | Liver and kidney glucuronidation |
| Excretion | mainly urinary | Kidney (66%), bile duct (33%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set dba00759…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=dba00759-87b4-4ecf-998e-ba03ed3d2f1a), label version 20260817. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2)
> - protein-binding: no-label-value (label values: -)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Bopediat*](https://www.ema.europa.eu/en/documents/product-information/bopediat-epar-product-information_en.pdf) (EMEA/H/C/006617). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 0.833, 7.7, 19.9)
> - protein-binding: consistent (SmPC values: 96, 98)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Bumetanide]] (Solute carrier family 12 member 1), [[Ethacrynic Acid]] (Solute carrier family 12 member 1), [[Torsemide]] (Solute carrier family 12 member 1)
- **Same ATC subgroup:** [[Bumetanide]], [[Torsemide]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
