---
type: compound
schema-version: 2
compound-id: nusinersen-compound
name: Nusinersen (Spinraza)
aliases:
- Nusinersen
- Spinraza
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3301572
chembl-max-phase: 4
half-life:
  value: 135.0
  value-max: 177.0
  unit: d
  notes: 135–177 days (in CSF), 63–87 days (in plasma)
protein-binding:
  value: 94.0
  value-max: null
  unit: percent
  notes: 94% (in plasma)
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (intrathecal)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Exonuclease (3'- and 5')-mediated hydrolysis
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
- cns-activity
- serotonergic-or-dopaminergic-load
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/neuropsych
- stub
- pk-auto
- chembl-profile
- chembl-name-match
- identity-inn-ema
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Nusinersen
  url: https://en.wikipedia.org/w/index.php?title=Nusinersen&oldid=1339936485
  revision: 1339936485
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL3301572
  pref-name: NUSINERSEN
  molecule-type: Oligonucleotide
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - M09AX07
  targets: []
  properties: {}
  identity-check: inn-match-ema
pk-verification:
  source: fda-label
  status: consistent
  set-id: dd70cd5f-b0fc-4ba4-a5ea-89a34778bd94
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=dd70cd5f-b0fc-4ba4-a5ea-89a34778bd94
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
pk-verification-ema:
  source: ema-smpc
  status: no-smpc-value
  product: Spinraza
  ema-number: EMEA/H/C/004312
  url: https://www.ema.europa.eu/en/documents/product-information/spinraza-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Nusinersen (Spinraza)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nusinersen-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **Aliases:** Nusinersen, Spinraza
- **ChEMBL:** [CHEMBL3301572](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3301572/) · max phase 4 · id via exact ChEMBL name match · structure check: INN matches an EU-authorised product (no comparable structure)

## Source summary

An intrathecal antisense oligonucleotide that blocks an intronic splice silencer, forcing SMN2 exon 7 inclusion. The first disease-modifying treatment for spinal muscular atrophy.

## ChEMBL profile

- **Molecule type:** Oligonucleotide
- **ATC M09AX07:** MUSCULO-SKELETAL SYSTEM › OTHER DRUGS FOR DISORDERS OF THE MUSCULO-SKELETAL SYSTEM › Other drugs for disorders of the musculo-skeletal system

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nusinersen*](https://en.wikipedia.org/w/index.php?title=Nusinersen&oldid=1339936485) (revision 1339936485, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 135–177 d | 135–177 days (in CSF), 63–87 days (in plasma) |
| Protein binding | 94 % | 94% (in plasma) |
| Bioavailability | 100 % | 100% (intrathecal) |
| Metabolism | - | Exonuclease (3'- and 5')-mediated hydrolysis |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set dd70cd5f…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=dd70cd5f-b0fc-4ba4-a5ea-89a34778bd94), label version 20260331. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1512, 2088, 3240, 4248)
> - protein-binding: no-label-value (label values: -)

> [!note] EU SmPC cross-check: **no-smpc-value**
> Automated comparison with section 5.2 of the [EU SmPC of *Spinraza*](https://www.ema.europa.eu/en/documents/product-information/spinraza-epar-product-information_en.pdf) (EMEA/H/C/004312). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (SmPC values: -)
> - protein-binding: no-label-value (SmPC values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Givinostat]], [[Palovarotene]], [[Risdiplam (Evrysdi)]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
