---
type: compound
schema-version: 2
compound-id: tacedinaline-compound
name: Tacedinaline
aliases: []
cluster: General Pharmacology
group: oncology
class: null
subclass: null
mechanism: Histone deacetylase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL235191
chembl-max-phase: 3
half-life:
  value: 9.6
  value-max: 14.0
  unit: h
  notes: 9.6–14 hours
protein-binding:
  value: null
  unit: percent
  notes: null
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
- cytotoxicity
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/oncology
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Tacedinaline
  url: https://en.wikipedia.org/w/index.php?title=Tacedinaline&oldid=1369189922
  revision: 1369189922
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL235191
  pref-name: TACEDINALINE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL2093865
    name: Histone deacetylase
    action: INHIBITOR
  properties:
    full-mwt: 269.3
    mw-freebase: 269.3
    alogp: 2.48
    psa: 84.22
    hba: 3
    hbd: 3
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.75
    full-molformula: C15H15N3O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Tacedinaline

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tacedinaline-compound`
- **Source group:** Oncology & Cytotoxics (`oncology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL235191](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL235191/) · max phase 3 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Tacedinaline is a named HDAC research compound with a curated biochemical result against HDAC2. ChEMBL records Ki 190.0 nM in the selected assay; that describes target potency, not a proven clinical benefit.

## Mechanism

Histone deacetylase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 269.3 | 2.48 | 84.22 | 3/3 | 0 | C15H15N3O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Histone deacetylase (CHEMBL2093865)|Histone deacetylase]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tacedinaline*](https://en.wikipedia.org/w/index.php?title=Tacedinaline&oldid=1369189922) (revision 1369189922, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9.6–14 h | 9.6–14 hours |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Abexinostat]] (Histone deacetylase), [[Belinostat]] (Histone deacetylase), [[Cudc-101]] (Histone deacetylase), [[Entinostat]] (Histone deacetylase), [[Fimepinostat]] (Histone deacetylase), [[Quisinostat]] (Histone deacetylase)

## Safety routing

Group-level triage (not compound-specific): `cytotoxicity`

- [[Stacking and Interaction Risks]]
