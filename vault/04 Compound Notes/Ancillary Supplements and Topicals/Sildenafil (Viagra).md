---
type: compound
schema-version: 2
compound-id: sildenafil-compound
name: Sildenafil (Viagra)
aliases:
- Sildenafil
- Viagra
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL192
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: 4.0
  unit: h
  notes: 3–4 hours
protein-binding:
  value: 96.0
  value-max: null
  unit: percent
  notes: ~96%
bioavailability:
  value: 41.0
  value-max: null
  notes: 41% (mean)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (~80%), urine (~13%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver: CYP3A4 (major route), CYP2C9 (minor route)'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C9
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C9, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Sildenafil
  url: https://en.wikipedia.org/w/index.php?title=Sildenafil&oldid=1376217569
  revision: 1376217569
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL192
  pref-name: SILDENAFIL
  molecule-type: Small molecule
  first-approval: 1998
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - G04BE03
  targets: []
  properties:
    full-mwt: 474.59
    mw-freebase: 474.59
    alogp: 1.61
    psa: 113.42
    hba: 8
    hbd: 1
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.55
    full-molformula: C22H30N6O4S
pk-verification:
  source: fda-label
  status: consistent
  set-id: 174ef537-e3e6-42bd-a478-47b930ddc761
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=174ef537-e3e6-42bd-a478-47b930ddc761
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Sildenafil (Viagra)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sildenafil-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Sildenafil, Viagra
- **ChEMBL:** [CHEMBL192](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL192/) · max phase 4 · id via Wikipedia infobox

## Source summary

The original PDE5 inhibitor; short-acting, and separately licensed for pulmonary hypertension.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1998
- **ATC G04BE03:** GENITO URINARY SYSTEM AND SEX HORMONES › UROLOGICALS › Drugs used in erectile dysfunction

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 474.59 | 1.61 | 113.42 | 1/8 | 0 | C22H30N6O4S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sildenafil*](https://en.wikipedia.org/w/index.php?title=Sildenafil&oldid=1376217569) (revision 1376217569, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–4 h | 3–4 hours |
| Protein binding | 96 % | ~96% |
| Bioavailability | 41 % | 41% (mean) |
| Metabolism | hepatic | Liver: CYP3A4 (major route), CYP2C9 (minor route) |
| CYP (metabolised by) | CYP2C9, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | N-desmethylsildenafil (~50% potency for PDE5) |
| Excretion | mainly non-renal | Feces (~80%), urine (~13%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 174ef537…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=174ef537-e3e6-42bd-a478-47b930ddc761), label version 20260831. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 4)
> - protein-binding: consistent (label values: 45, 57, 96)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Alprostadil]], [[Apomorphine]], [[Avanafil (Stendra)]], [[Cialis (Tadalafil)]], [[Papaverine]], [[Udenafil]], [[Vardenafil (Levitra)]], [[Yohimbine]]
- **Shared CYP substrate pool:** CYP2C9 (+40 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
