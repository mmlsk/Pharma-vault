---
type: compound
schema-version: 2
compound-id: teduglutide-compound
name: Teduglutide
aliases: []
cluster: Growth Hormone and Peptide Agents
group: peptides
class: null
subclass: null
mechanism: Glucagon-like peptide 2 receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2104987
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: null
  unit: h
  notes: 2h
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 88.0
  value-max: null
  notes: 88%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Proteolysis
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
- evidence-limited
- identity-contamination
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/peptides
- stub
- pk-auto
- chembl-profile
- chembl-name-match
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Teduglutide
  url: https://en.wikipedia.org/w/index.php?title=Teduglutide&oldid=1338719112
  revision: 1338719112
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL2104987
  pref-name: TEDUGLUTIDE
  molecule-type: Protein
  first-approval: 2012
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A16AX08
  targets:
  - id: CHEMBL5844
    name: Glucagon-like peptide 2 receptor
    action: AGONIST
  properties:
    full-mwt: 3752.14
    mw-freebase: 3752.14
    full-molformula: C164H252N44O55S
pk-verification:
  source: fda-label
  status: consistent
  set-id: 66b69c1e-b25c-44d3-b5ff-1c1de9a516fa
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=66b69c1e-b25c-44d3-b5ff-1c1de9a516fa
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Teduglutide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `teduglutide-compound`
- **Source group:** Peptides (`peptides`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **ChEMBL:** [CHEMBL2104987](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2104987/) · max phase 4 · id via exact ChEMBL name match - confirm

## Source summary

GLP-2 analogue for short bowel syndrome, resistant to DPP-4 degradation.

## Mechanism

Glucagon-like peptide 2 receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 2012
- **ATC A16AX08:** ALIMENTARY TRACT AND METABOLISM › OTHER ALIMENTARY TRACT AND METABOLISM PRODUCTS › Various alimentary tract and metabolism products

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 3752.14 | - | - | -/- | - | C164H252N44O55S |

**Targets (ChEMBL curated mechanisms):**

- [[Glucagon-like peptide 2 receptor (CHEMBL5844)|Glucagon-like peptide 2 receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Teduglutide*](https://en.wikipedia.org/w/index.php?title=Teduglutide&oldid=1338719112) (revision 1338719112, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 2h |
| Bioavailability | 88 % | 88% |
| Metabolism | - | Proteolysis |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 66b69c1e…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=66b69c1e-b25c-44d3-b5ff-1c1de9a516fa), label version 20250905. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1.3, 2)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Alpha-Lipoic Acid (ALA)]], [[Eliglustat]], [[Glycerol Phenylbutyrate]], [[Lonafarnib (Zokinvy)]], [[Migalastat]], [[Miglustat]], [[Nitisinone]], [[Sodium Phenylbutyrate]], [[Trientine]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`, `identity-contamination`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
