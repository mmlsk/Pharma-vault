---
type: compound
schema-version: 2
compound-id: nitazoxanide-compound
name: Nitazoxanide
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Pyruvate:ferredoxin oxidoreductase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1401
chembl-max-phase: 4
half-life:
  value: 3.5
  value-max: null
  unit: h
  notes: 3.5 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 'Nitazoxanide: ?; Tizoxanide: over 99%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney, bile duct, and fecal
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Rapidly hydrolyzed to tizoxanide
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
- cyp-interactions
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Nitazoxanide
  url: https://en.wikipedia.org/w/index.php?title=Nitazoxanide&oldid=1376092849
  revision: 1376092849
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1401
  pref-name: NITAZOXANIDE
  molecule-type: Small molecule
  first-approval: 2002
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - P01AX11
  targets:
  - id: CHEMBL2364026
    name: Pyruvate dehydrogenase [NADP(+)]
    action: INHIBITOR
  - id: CHEMBL2364027
    name: Pyruvate:ferredoxin oxidoreductase
    action: INHIBITOR
  properties:
    full-mwt: 307.29
    mw-freebase: 307.29
    alogp: 2.23
    psa: 111.43
    hba: 7
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.4
    full-molformula: C12H9N3O5S
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 40a7cc30-76cd-49fe-965a-7823c4140d0f
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=40a7cc30-76cd-49fe-965a-7823c4140d0f
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Nitazoxanide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nitazoxanide-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1401](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1401/) · max phase 4 · id via Wikipedia infobox

## Source summary

Thiazolide antiparasitic for cryptosporidiosis and giardiasis, with broad in vitro antiviral activity that has not translated cleanly.

## Mechanism

Pyruvate:ferredoxin oxidoreductase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2002
- **Flags:** prodrug
- **ATC P01AX11:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › AGENTS AGAINST AMOEBIASIS AND OTHER PROTOZOAL DISEASES › Other agents against amoebiasis and other protozoal diseases

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 307.29 | 2.23 | 111.43 | 1/7 | 0 | C12H9N3O5S |

**Targets (ChEMBL curated mechanisms):**

- [[Pyruvate dehydrogenase -NADP(+)- (CHEMBL2364026)|Pyruvate dehydrogenase [NADP(+)]]] - inhibitor · SINGLE PROTEIN
- [[Pyruvate-ferredoxin oxidoreductase (CHEMBL2364027)|Pyruvate:ferredoxin oxidoreductase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nitazoxanide*](https://en.wikipedia.org/w/index.php?title=Nitazoxanide&oldid=1376092849) (revision 1376092849, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3.5 h | 3.5 hours |
| Protein binding | 99 % | Nitazoxanide: ?; Tizoxanide: over 99% |
| Metabolism | - | Rapidly hydrolyzed to tizoxanide |
| Metabolites | - | tizoxanide; tizoxanide glucuronide |
| Excretion | - | Kidney, bile duct, and fecal |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 40a7cc30…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=40a7cc30-76cd-49fe-965a-7823c4140d0f), label version 20260618. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Atovaquone]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
