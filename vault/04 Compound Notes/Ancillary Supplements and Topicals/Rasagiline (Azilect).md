---
type: compound
schema-version: 2
compound-id: rasagiline-compound
name: Rasagiline (Azilect)
aliases:
- Rasagiline
- Azilect
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
chembl-id: CHEMBL887
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: null
  unit: h
  notes: 3 hours
protein-binding:
  value: 88.0
  value-max: 94.0
  unit: percent
  notes: 88–94%
bioavailability:
  value: 36.0
  value-max: null
  notes: 36%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: 62%; Feces: 7%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP1A2)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2 (from metabolism field); inhibitor/inducer roles not assessed
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
- identity-confirmed
- pk-fda-consistent
- pk-ema-discrepant
- pk-sources-disagree
pk-source:
  type: wikipedia-infobox
  title: Rasagiline
  url: https://en.wikipedia.org/w/index.php?title=Rasagiline&oldid=1375491838
  revision: 1375491838
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL887
  pref-name: RASAGILINE
  molecule-type: Small molecule
  first-approval: 2005
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N04BD02
  targets: []
  properties:
    full-mwt: 171.24
    mw-freebase: 171.24
    alogp: 1.9
    psa: 12.03
    hba: 1
    hbd: 1
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.67
    full-molformula: C12H13N
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 9bf059f4-4da8-48fe-aacb-c50717d36606
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=9bf059f4-4da8-48fe-aacb-c50717d36606
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: discrepant
  product: Azilect
  ema-number: EMEA/H/C/000574
  url: https://www.ema.europa.eu/en/documents/product-information/azilect-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/azilect-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: discrepant
---

# Rasagiline (Azilect)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rasagiline-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Rasagiline, Azilect
- **ChEMBL:** [CHEMBL887](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL887/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Selective irreversible MAO-B inhibitor of the propargylamine class, given once daily for Parkinson's disease.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2005
- **ATC N04BD02:** NERVOUS SYSTEM › DOPAMINERGIC AGENTS › Monoamine oxidase B inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 171.24 | 1.9 | 12.03 | 1/1 | 0 | C12H13N |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rasagiline*](https://en.wikipedia.org/w/index.php?title=Rasagiline&oldid=1375491838) (revision 1375491838, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3 h | 3 hours |
| Protein binding | 88–94 % | 88–94% |
| Bioavailability | 36 % | 36% |
| Metabolism | hepatic | Liver (CYP1A2) |
| CYP (metabolised by) | CYP1A2 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • (R)-1-Aminoindan; • 3-OH-PAI; • 3-OH-AI |
| Excretion | mainly urinary | Urine: 62%; Feces: 7% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 9bf059f4…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=9bf059f4-4da8-48fe-aacb-c50717d36606), label version 20260826. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 3)
> - protein-binding: consistent (label values: 61, 63, 88, 94)

> [!danger] EU SmPC cross-check: **discrepant**
> Automated comparison with section 5.2 of the [EU SmPC of *Azilect*](https://www.ema.europa.eu/en/documents/product-information/azilect-epar-product-information_en.pdf) (EMEA/H/C/000574) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/azilect-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 0.6, 2)
> - protein-binding: discrepant (SmPC values: 60, 70)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Safinamide]], [[Selegiline (L-Deprenyl)]], [[Selegiline (oral)]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
