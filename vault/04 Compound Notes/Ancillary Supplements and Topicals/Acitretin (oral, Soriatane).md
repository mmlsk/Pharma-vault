---
type: compound
schema-version: 2
compound-id: acitretin-compound
name: Acitretin (oral, Soriatane)
aliases:
- Acitretin
- Soriatane
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Retinoid receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1131
chembl-max-phase: 4
half-life:
  value: 49.0
  value-max: null
  unit: h
  notes: 49 hours
protein-binding:
  value: 99.9
  value-max: null
  unit: percent
  notes: '>99.9%'
bioavailability:
  value: 60.0
  value-max: null
  notes: 60%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Faeces & urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
pk-source:
  type: wikipedia-infobox
  title: Acitretin
  url: https://en.wikipedia.org/w/index.php?title=Acitretin&oldid=1366318727
  revision: 1366318727
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1131
  pref-name: ACITRETIN
  molecule-type: Small molecule
  first-approval: 1996
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - D05BB02
  targets:
  - id: CHEMBL2363071
    name: Retinoid receptor
    action: AGONIST
  properties:
    full-mwt: 326.44
    mw-freebase: 326.44
    alogp: 5.17
    psa: 46.53
    hba: 2
    hbd: 1
    rtb: 6
    num-ro5-violations: 1
    qed-weighted: 0.58
    full-molformula: C21H26O3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: a6546625-acb8-460e-b34e-f795bfb3680a
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a6546625-acb8-460e-b34e-f795bfb3680a
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Acitretin (oral, Soriatane)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `acitretin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Acitretin, Soriatane
- **ChEMBL:** [CHEMBL1131](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1131/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Oral monoaromatic retinoid for severe psoriasis; the active metabolite of etretinate, with the same teratogenic ceiling.

## Mechanism

Retinoid receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1996
- **Flags:** black-box warning
- **ATC D05BB02:** DERMATOLOGICALS › ANTIPSORIATICS FOR SYSTEMIC USE › Retinoids for treatment of psoriasis

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 326.44 | 5.17 | 46.53 | 1/2 | 1 | C21H26O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Retinoid receptor (CHEMBL2363071)|Retinoid receptor]] - agonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Acitretin*](https://en.wikipedia.org/w/index.php?title=Acitretin&oldid=1366318727) (revision 1366318727, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 49 h | 49 hours |
| Protein binding | 99.9 % | >99.9% |
| Bioavailability | 60 % | 60% |
| Metabolism | hepatic | Liver |
| Excretion | - | Faeces & urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set a6546625…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a6546625-acb8-460e-b34e-f795bfb3680a), label version 20260805. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 28, 33, 49, 63, 96, 157)
> - protein-binding: consistent (label values: 99.9)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Alitretinoin]] (Retinoid receptor), [[Alitretinoin (oral, Toctino)]] (Retinoid receptor), [[Etretinate]] (Retinoid receptor), [[Mofarotene]] (Retinoid receptor)
- **Same ATC subgroup:** [[Etretinate]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
