---
type: compound
schema-version: 2
compound-id: oseltamivir-compound
name: Oseltamivir
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1229
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: 3.0
  unit: h
  notes: 1–3 hours, 6–10 hours (active metabolite)
protein-binding:
  value: 42.0
  value-max: null
  unit: percent
  notes: 42% (parent drug), 3% (active metabolite)
bioavailability:
  value: 80.0
  value-max: null
  notes: '>80%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (>90% as oseltamivir carboxylate), faeces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, to oseltamivir carboxylate
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
- identity-confirmed
- pk-fda-consistent
- pk-ema-discrepant
- pk-sources-disagree
pk-source:
  type: wikipedia-infobox
  title: Oseltamivir
  url: https://en.wikipedia.org/w/index.php?title=Oseltamivir&oldid=1368822991
  revision: 1368822991
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1229
  pref-name: OSELTAMIVIR
  molecule-type: Small molecule
  first-approval: 1999
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J05AH02
  targets: []
  properties:
    full-mwt: 312.41
    mw-freebase: 312.41
    alogp: 1.29
    psa: 90.65
    hba: 5
    hbd: 2
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.69
    full-molformula: C16H28N2O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: c61bb5af-558f-4b32-b34d-8fdae480443c
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c61bb5af-558f-4b32-b34d-8fdae480443c
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: discrepant
  product: Tamiflu
  ema-number: EMEA/H/C/000402
  url: https://www.ema.europa.eu/en/documents/product-information/tamiflu-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/tamiflu-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: discrepant
---

# Oseltamivir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `oseltamivir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1229](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1229/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Oral neuraminidase inhibitor for influenza, effective only if started within roughly 48 hours because it caps ongoing replication rather than clearing infected cells.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1999
- **Flags:** prodrug
- **ATC J05AH02:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Neuraminidase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 312.41 | 1.29 | 90.65 | 2/5 | 0 | C16H28N2O4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Oseltamivir*](https://en.wikipedia.org/w/index.php?title=Oseltamivir&oldid=1368822991) (revision 1368822991, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–3 h | 1–3 hours, 6–10 hours (active metabolite) |
| Protein binding | 42 % | 42% (parent drug), 3% (active metabolite) |
| Bioavailability | 80 % | >80% |
| Metabolism | hepatic | Liver, to oseltamivir carboxylate |
| Excretion | mainly urinary | Urine (>90% as oseltamivir carboxylate), faeces |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set c61bb5af…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c61bb5af-558f-4b32-b34d-8fdae480443c), label version 20260115. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1, 3, 6, 10)
> - protein-binding: consistent (label values: 3, 42)

> [!danger] EU SmPC cross-check: **discrepant**
> Automated comparison with section 5.2 of the [EU SmPC of *Tamiflu*](https://www.ema.europa.eu/en/documents/product-information/tamiflu-epar-product-information_en.pdf) (EMEA/H/C/000402) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/tamiflu-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (SmPC values: 6, 10)
> - protein-binding: discrepant (SmPC values: 3)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Zanamivir]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
