---
type: compound
schema-version: 2
compound-id: miglustat-compound
name: Miglustat
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Ceramide glucosyltransferase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1029
chembl-max-phase: 4
half-life:
  value: 6.0
  value-max: 7.0
  unit: h
  notes: 6–7 hours
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: Nil
bioavailability:
  value: 97.0
  value-max: null
  notes: 97%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney, unchanged
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Nil
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
  title: Miglustat
  url: https://en.wikipedia.org/w/index.php?title=Miglustat&oldid=1364995192
  revision: 1364995192
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1029
  pref-name: MIGLUSTAT
  molecule-type: Small molecule
  first-approval: 2002
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A16AX06
  targets:
  - id: CHEMBL2063
    name: Ceramide glucosyltransferase
    action: INHIBITOR
  properties:
    full-mwt: 219.28
    mw-freebase: 219.28
    alogp: -1.45
    psa: 84.16
    hba: 5
    hbd: 4
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.46
    full-molformula: C10H21NO4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: aa9a3ab6-2376-4b52-9e54-15dc87f25260
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=aa9a3ab6-2376-4b52-9e54-15dc87f25260
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Zavesca
  ema-number: EMEA/H/C/000435
  url: https://www.ema.europa.eu/en/documents/product-information/zavesca-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Miglustat

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `miglustat-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1029](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1029/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Iminosugar substrate reduction therapy for Gaucher and Niemann-Pick type C, small enough to cross into the brain.

## Mechanism

Ceramide glucosyltransferase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2002
- **Flags:** prodrug
- **ATC A16AX06:** ALIMENTARY TRACT AND METABOLISM › OTHER ALIMENTARY TRACT AND METABOLISM PRODUCTS › Various alimentary tract and metabolism products

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 219.28 | -1.45 | 84.16 | 4/5 | 0 | C10H21NO4 |

**Targets (ChEMBL curated mechanisms):**

- [[Ceramide glucosyltransferase (CHEMBL2063)|Ceramide glucosyltransferase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Miglustat*](https://en.wikipedia.org/w/index.php?title=Miglustat&oldid=1364995192) (revision 1364995192, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6–7 h | 6–7 hours |
| Protein binding | - | Nil |
| Bioavailability | 97 % | 97% |
| Metabolism | - | Nil |
| Excretion | mainly urinary | Kidney, unchanged |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set aa9a3ab6…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=aa9a3ab6-2376-4b52-9e54-15dc87f25260), label version 20251231. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 6, 7, 36, 48, 150)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Zavesca*](https://www.ema.europa.eu/en/documents/product-information/zavesca-epar-product-information_en.pdf) (EMEA/H/C/000435). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 6, 7, 150)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Alpha-Lipoic Acid (ALA)]], [[Eliglustat]], [[Glycerol Phenylbutyrate]], [[Lonafarnib (Zokinvy)]], [[Migalastat]], [[Nitisinone]], [[Sodium Phenylbutyrate]], [[Teduglutide]], [[Trientine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
