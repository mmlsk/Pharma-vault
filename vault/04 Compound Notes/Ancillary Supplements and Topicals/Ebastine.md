---
type: compound
schema-version: 2
compound-id: ebastine-compound
name: Ebastine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Histamine H1 receptor inverse agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL305660
chembl-max-phase: 4
half-life:
  value: 15.0
  value-max: 19.0
  unit: h
  notes: 15 to 19 hours (carebastine)
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: Greater than 95%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP3A4-mediated), to carebastine
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
pk-source:
  type: wikipedia-infobox
  title: Ebastine
  url: https://en.wikipedia.org/w/index.php?title=Ebastine&oldid=1329564874
  revision: 1329564874
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL305660
  pref-name: EBASTINE
  molecule-type: Small molecule
  first-approval: 1990
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - R06AX22
  targets:
  - id: CHEMBL231
    name: Histamine H1 receptor
    action: INVERSE AGONIST
  properties:
    full-mwt: 469.67
    mw-freebase: 469.67
    alogp: 7.22
    psa: 29.54
    hba: 3
    hbd: 0
    rtb: 9
    num-ro5-violations: 1
    qed-weighted: 0.31
    full-molformula: C32H39NO2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Ebastine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ebastine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL305660](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL305660/) · max phase 4 · id via source catalogue

## Source summary

Histamine H1 receptor inverse agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL305660).

## Mechanism

Histamine H1 receptor inverse agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1990
- **ATC R06AX22:** RESPIRATORY SYSTEM › ANTIHISTAMINES FOR SYSTEMIC USE › Other antihistamines for systemic use

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 469.67 | 7.22 | 29.54 | 0/3 | 1 | C32H39NO2 |

**Targets (ChEMBL curated mechanisms):**

- [[Histamine H1 receptor (CHEMBL231)|Histamine H1 receptor]] - inverse agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ebastine*](https://en.wikipedia.org/w/index.php?title=Ebastine&oldid=1329564874) (revision 1329564874, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 15–19 h | 15 to 19 hours (carebastine) |
| Protein binding | 95 % | Greater than 95% |
| Metabolism | hepatic | Hepatic (CYP3A4-mediated), to carebastine |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acrivastine]] (Histamine H1 receptor), [[Alcaftadine]] (Histamine H1 receptor), [[Astemizole]] (Histamine H1 receptor), [[Betahistine]] (Histamine H1 receptor), [[Bilastine]] (Histamine H1 receptor), [[Chlorphenoxamine]] (Histamine H1 receptor), [[Cinnarizine]] (Histamine H1 receptor), [[Desloratadine]] (Histamine H1 receptor), [[Dibenzepin]] (Histamine H1 receptor), [[Dimenhydrinate]] (Histamine H1 receptor), [[Dimethindene]] (Histamine H1 receptor), [[Doxepin]] (Histamine H1 receptor)
- **Same ATC subgroup:** [[Acrivastine]], [[Antazoline]], [[Astemizole]], [[Azatadine]], [[Azelastine]], [[Bilastine]], [[Cyproheptadine]], [[Desloratadine]], [[Epinastine]], [[Fexofenadine]], [[Ketotifen]], [[Loratadine]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
