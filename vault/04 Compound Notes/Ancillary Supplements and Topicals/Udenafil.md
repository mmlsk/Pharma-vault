---
type: compound
schema-version: 2
compound-id: udenafil-compound
name: Udenafil
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Phosphodiesterase 5A inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2103849
chembl-max-phase: 3
half-life:
  value: 7.3
  value-max: 12.1
  unit: h
  notes: 7.3–12.1 hours
protein-binding:
  value: 93.9
  value-max: null
  unit: percent
  notes: 93,9%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Biliary
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mainly CYP3A4)
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- chembl-name-match
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Udenafil
  url: https://en.wikipedia.org/w/index.php?title=Udenafil&oldid=1366312134
  revision: 1366312134
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL2103849
  pref-name: UDENAFIL
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - G04BE11
  targets:
  - id: CHEMBL1827
    name: cGMP-specific 3',5'-cyclic phosphodiesterase
    action: INHIBITOR
  properties:
    full-mwt: 516.67
    mw-freebase: 516.67
    alogp: 2.83
    psa: 122.21
    hba: 8
    hbd: 2
    rtb: 11
    num-ro5-violations: 1
    qed-weighted: 0.4
    full-molformula: C25H36N6O4S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Udenafil

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `udenafil-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL2103849](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2103849/) · max phase 3 · id via exact ChEMBL name match · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits PDE5 so nitric-oxide/cGMP vasodilation persists in corporal and pulmonary vascular smooth muscle; approved in South Korea.

## Mechanism

Phosphodiesterase 5A inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC G04BE11:** GENITO URINARY SYSTEM AND SEX HORMONES › UROLOGICALS › Drugs used in erectile dysfunction

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 516.67 | 2.83 | 122.21 | 2/8 | 1 | C25H36N6O4S |

**Targets (ChEMBL curated mechanisms):**

- [[cGMP-specific 3',5'-cyclic phosphodiesterase (CHEMBL1827)|cGMP-specific 3',5'-cyclic phosphodiesterase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Udenafil*](https://en.wikipedia.org/w/index.php?title=Udenafil&oldid=1366312134) (revision 1366312134, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7.3–12.1 h | 7.3–12.1 hours |
| Protein binding | 93.9 % | 93,9% |
| Metabolism | hepatic | Liver (mainly CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Biliary |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Avanafil (Stendra)]] (cGMP-specific 3',5'-cyclic phosphodiesterase), [[Cialis (Tadalafil)]] (cGMP-specific 3',5'-cyclic phosphodiesterase), [[Gisadenafil]] (cGMP-specific 3',5'-cyclic phosphodiesterase), [[Ibudilast]] (cGMP-specific 3',5'-cyclic phosphodiesterase), [[Pf-00489791]] (cGMP-specific 3',5'-cyclic phosphodiesterase)
- **Same ATC subgroup:** [[Alprostadil]], [[Apomorphine]], [[Avanafil (Stendra)]], [[Cialis (Tadalafil)]], [[Papaverine]], [[Sildenafil (Viagra)]], [[Vardenafil (Levitra)]], [[Yohimbine]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
