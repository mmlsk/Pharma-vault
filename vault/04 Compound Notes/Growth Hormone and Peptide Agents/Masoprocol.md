---
type: compound
schema-version: 2
compound-id: masoprocol-compound
name: Masoprocol
aliases: []
cluster: Growth Hormone and Peptide Agents
group: gh
class: null
subclass: null
mechanism: Insulin-like growth factor I receptor inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL313972
chembl-max-phase: 4
half-life:
  value: null
  unit: null
  notes: null
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: Very low
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
- endocrine-feedback-disruption
- glucose-metabolism
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/gh
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Masoprocol
  url: https://en.wikipedia.org/w/index.php?title=Masoprocol&oldid=1360132863
  revision: 1360132863
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL313972
  pref-name: MASOPROCOL
  molecule-type: Small molecule
  first-approval: 1992
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01XX10
  targets:
  - id: CHEMBL1824
    name: Receptor tyrosine-protein kinase erbB-2
    action: INHIBITOR
  - id: CHEMBL1957
    name: Insulin-like growth factor 1 receptor
    action: INHIBITOR
  properties:
    full-mwt: 302.37
    mw-freebase: 302.37
    alogp: 3.57
    psa: 80.92
    hba: 4
    hbd: 4
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.64
    full-molformula: C18H22O4
---

# Masoprocol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `masoprocol-compound`
- **Source group:** GH & Secretagogues (`gh`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **ChEMBL:** [CHEMBL313972](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL313972/) · max phase 4 · id via source catalogue

## Source summary

Insulin-like growth factor I receptor inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL313972).

## Mechanism

Insulin-like growth factor I receptor inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1992
- **ATC L01XX10:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › OTHER ANTINEOPLASTIC AGENTS › Other antineoplastic agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 302.37 | 3.57 | 80.92 | 4/4 | 0 | C18H22O4 |

**Targets (ChEMBL curated mechanisms):**

- [[Receptor tyrosine-protein kinase erbB-2 (CHEMBL1824)|Receptor tyrosine-protein kinase erbB-2]] - inhibitor · SINGLE PROTEIN
- [[Insulin-like growth factor 1 receptor (CHEMBL1957)|Insulin-like growth factor 1 receptor]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Masoprocol*](https://en.wikipedia.org/w/index.php?title=Masoprocol&oldid=1360132863) (revision 1360132863, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Bioavailability | - | Very low |

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Cudc-101]] (Receptor tyrosine-protein kinase erbB-2), [[Dacomitinib]] (Receptor tyrosine-protein kinase erbB-2), [[Figitumumab]] (Insulin-like growth factor 1 receptor), [[Ganitumab]] (Insulin-like growth factor 1 receptor), [[Istiratumab]] (Insulin-like growth factor 1 receptor), [[Linsitinib]] (Insulin-like growth factor 1 receptor), [[Mecasermin (Increlex)]] (Insulin-like growth factor 1 receptor), [[Mecasermin Rinfabate]] (Insulin-like growth factor 1 receptor), [[MGF (Mechano Growth Factor)]] (Insulin-like growth factor 1 receptor), [[Robatumumab]] (Insulin-like growth factor 1 receptor), [[Teprotumumab]] (Insulin-like growth factor 1 receptor), [[Veligrotug]] (Insulin-like growth factor 1 receptor)
- **Same ATC subgroup:** [[Anagrelide]], [[Celecoxib]], [[Hydroxyurea (hydroxycarbamide)]], [[Mitotane]], [[Navitoclax (ABT-263)]], [[Tazemetostat]], [[Venetoclax]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `glucose-metabolism`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Glucose and Incretin Signaling]]
- [[HPG and GH-IGF-1 Axes]]
