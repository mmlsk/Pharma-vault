---
type: compound
schema-version: 2
compound-id: paroxetine-compound
name: Paroxetine
aliases: []
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
chembl-id: CHEMBL490
chembl-max-phase: 4
half-life:
  value: 21.0
  value-max: null
  unit: h
  notes: 21 hours
protein-binding:
  value: 93.0
  value-max: 95.0
  unit: percent
  notes: 93–95%
bioavailability:
  value: 50.0
  value-max: null
  notes: 50%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.02
  notes: Kidney (64%; 2% unchanged and 62% as metabolites), faecal (36%; <1% unchanged)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Extensive, liver (mostly CYP2D6-mediated)
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
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Paroxetine
  url: https://en.wikipedia.org/w/index.php?title=Paroxetine&oldid=1373241436
  revision: 1373241436
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL490
  pref-name: PAROXETINE
  molecule-type: Small molecule
  first-approval: 1992
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06AB05
  targets: []
  properties:
    full-mwt: 329.37
    mw-freebase: 329.37
    alogp: 3.33
    psa: 39.72
    hba: 4
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.93
    full-molformula: C19H20FNO3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 598ece4d-0ac4-993b-e063-6294a90a1d34
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=598ece4d-0ac4-993b-e063-6294a90a1d34
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Paroxetine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `paroxetine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL490](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL490/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits serotonin reuptake through SERT; benefits, activation, sexual effects, and withdrawal profiles differ by agent.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1992
- **Flags:** black-box warning
- **ATC N06AB05:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Selective serotonin reuptake inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 329.37 | 3.33 | 39.72 | 1/4 | 0 | C19H20FNO3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Paroxetine*](https://en.wikipedia.org/w/index.php?title=Paroxetine&oldid=1373241436) (revision 1373241436, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 21 h | 21 hours |
| Protein binding | 93–95 % | 93–95% |
| Bioavailability | 50 % | 50% |
| Metabolism | hepatic | Extensive, liver (mostly CYP2D6-mediated) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | - · fe 0.02 | Kidney (64%; 2% unchanged and 62% as metabolites), faecal (36%; <1% unchanged) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 598ece4d…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=598ece4d-0ac4-993b-e063-6294a90a1d34), label version 20260821. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 5.2, 21, 720)
> - protein-binding: consistent (label values: 93, 95)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Alaproclate]], [[Citalopram]], [[Escitalopram (Lexapro)]], [[Fluoxetine (Prozac)]], [[Fluvoxamine]], [[Sertraline (Zoloft)]], [[Zimelidine]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
