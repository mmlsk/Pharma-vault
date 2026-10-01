---
type: compound
schema-version: 2
compound-id: saxagliptin-compound
name: Saxagliptin
aliases: []
cluster: Metabolic and Incretin Agents
group: glp1
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL385517
chembl-max-phase: 4
half-life:
  value: 2.5
  value-max: null
  unit: h
  notes: 2.5 h (saxagliptin), 3.1 h (main metabolite)
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: negligible
bioavailability:
  value: 75.0
  value-max: null
  notes: ~75% (Tmax = 2 h)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 22% (Bile duct), 75% (Urine)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4 and CYP3A5)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- glucose-metabolism
- gastrointestinal
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/glp1
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
- possible-duplicate
pk-source:
  type: wikipedia-infobox
  title: Saxagliptin
  url: https://en.wikipedia.org/w/index.php?title=Saxagliptin&oldid=1329368130
  revision: 1329368130
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL385517
  pref-name: SAXAGLIPTIN ANHYDROUS
  molecule-type: Small molecule
  first-approval: 2009
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 315.42
    mw-freebase: 315.42
    alogp: 1.16
    psa: 90.35
    hba: 4
    hbd: 2
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.8
    full-molformula: C18H25N3O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: e286ffd4-c598-47fb-af06-2e15f7e6f99f
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e286ffd4-c598-47fb-af06-2e15f7e6f99f
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Onglyza
  ema-number: EMEA/H/C/001039
  url: https://www.ema.europa.eu/en/documents/product-information/onglyza-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Saxagliptin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `saxagliptin-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **ChEMBL:** [CHEMBL385517](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL385517/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits DPP-4 to prolong endogenous incretin signaling and glucose-dependent insulin release.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2009

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 315.42 | 1.16 | 90.35 | 2/4 | 0 | C18H25N3O2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Saxagliptin*](https://en.wikipedia.org/w/index.php?title=Saxagliptin&oldid=1329368130) (revision 1329368130, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5 h | 2.5 h (saxagliptin), 3.1 h (main metabolite) |
| Protein binding | - | negligible |
| Bioavailability | 75 % | ~75% (Tmax = 2 h) |
| Metabolism | hepatic | Liver (CYP3A4 and CYP3A5) |
| CYP (metabolised by) | CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | 22% (Bile duct), 75% (Urine) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set e286ffd4…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e286ffd4-c598-47fb-af06-2e15f7e6f99f), label version 20260127. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2.5, 3.1)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Onglyza*](https://www.ema.europa.eu/en/documents/product-information/onglyza-epar-product-information_en.pdf) (EMEA/H/C/001039). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 2.5, 3.1, 26.9)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- ⚠️ **Same molecule in ChEMBL (formulation variant or possible duplicate):** [[Saxagliptin Anhydrous]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others), CYP3A5 (+13 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
- [[Glucose and Incretin Signaling]]
