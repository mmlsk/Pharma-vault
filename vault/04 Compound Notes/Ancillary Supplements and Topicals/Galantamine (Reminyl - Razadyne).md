---
type: compound
schema-version: 2
compound-id: galantamine-compound
name: Galantamine (Reminyl / Razadyne)
aliases:
- Galantamine
- Reminyl
- Razadyne
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
chembl-id: CHEMBL659
chembl-max-phase: 4
half-life:
  value: 7.0
  value-max: null
  unit: h
  notes: 7 hours
protein-binding:
  value: 18.0
  value-max: null
  unit: percent
  notes: 18%
bioavailability:
  value: 80.0
  value-max: 100.0
  notes: 80–100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.32
  notes: Kidney (95%, of which 32% unchanged), fecal (5%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver partially CYP450:CYP2D6/3A4 substrate
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- needs-compound-review
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Galantamine
  url: https://en.wikipedia.org/w/index.php?title=Galantamine&oldid=1354799288
  revision: 1354799288
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL659
  pref-name: GALANTAMINE
  molecule-type: Small molecule
  first-approval: 2001
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N06DA04
  targets: []
  properties:
    full-mwt: 287.36
    mw-freebase: 287.36
    alogp: 1.85
    psa: 41.93
    hba: 4
    hbd: 1
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.8
    full-molformula: C17H21NO3
pk-verification:
  source: fda-label
  status: consistent
  set-id: 261889d3-41c8-4655-98f7-41317778e7a1
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=261889d3-41c8-4655-98f7-41317778e7a1
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Galantamine (Reminyl / Razadyne)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `galantamine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Galantamine, Reminyl, Razadyne
- **ChEMBL:** [CHEMBL659](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL659/) · max phase 4 · id via Wikipedia infobox

## Source summary

Alkaloid cholinesterase inhibitor that is also a positive allosteric modulator of nicotinic acetylcholine receptors.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2001
- **ATC N06DA04:** NERVOUS SYSTEM › ANTI-DEMENTIA DRUGS › Anticholinesterases

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 287.36 | 1.85 | 41.93 | 1/4 | 0 | C17H21NO3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Galantamine*](https://en.wikipedia.org/w/index.php?title=Galantamine&oldid=1354799288) (revision 1354799288, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7 h | 7 hours |
| Protein binding | 18 % | 18% |
| Bioavailability | 80–100 % | 80–100% |
| Metabolism | hepatic | Liver partially CYP450:CYP2D6/3A4 substrate |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary · fe 0.32 | Kidney (95%, of which 32% unchanged), fecal (5%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 261889d3…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=261889d3-41c8-4655-98f7-41317778e7a1), label version 20260702. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 7)
> - protein-binding: consistent (label values: 18)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Donepezil (Aricept)]], [[Rivastigmine (Exelon)]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[Cholinergic Load]]
- [[CYP450 Metabolism]]
