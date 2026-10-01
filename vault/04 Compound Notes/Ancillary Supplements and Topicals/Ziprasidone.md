---
type: compound
schema-version: 2
compound-id: ziprasidone-compound
name: Ziprasidone
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
chembl-id: CHEMBL708
chembl-max-phase: 4
half-life:
  value: 7.0
  value-max: 10.0
  unit: h
  notes: 7–10 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 60.0
  value-max: null
  notes: 'Oral: 60%; ; IM: 100%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine and feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (aldehyde reductase)
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
  title: Ziprasidone
  url: https://en.wikipedia.org/w/index.php?title=Ziprasidone&oldid=1368778199
  revision: 1368778199
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL708
  pref-name: ZIPRASIDONE
  molecule-type: Small molecule
  first-approval: 2001
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N05AE04
  targets: []
  properties:
    full-mwt: 412.95
    mw-freebase: 412.95
    alogp: 3.81
    psa: 48.47
    hba: 5
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.71
    full-molformula: C21H21ClN4OS
pk-verification:
  source: fda-label
  status: consistent
  set-id: 6665279a-32ab-43ce-a258-039a6779a1a2
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6665279a-32ab-43ce-a258-039a6779a1a2
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Ziprasidone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ziprasidone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL708](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL708/) · max phase 4 · id via Wikipedia infobox

## Source summary

Antagonizes or partially agonizes dopamine D2 receptors; movement, metabolic, and prolactin effects depend on receptor profile.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2001
- **Flags:** black-box warning
- **ATC N05AE04:** NERVOUS SYSTEM › ANTIPSYCHOTICS › Indole derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 412.95 | 3.81 | 48.47 | 1/5 | 0 | C21H21ClN4OS |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ziprasidone*](https://en.wikipedia.org/w/index.php?title=Ziprasidone&oldid=1368778199) (revision 1368778199, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7–10 h | 7–10 hours |
| Bioavailability | 60 % | Oral: 60%; ; IM: 100% |
| Metabolism | hepatic | Liver (aldehyde reductase) |
| Excretion | - | Urine and feces |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 6665279a…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6665279a-32ab-43ce-a258-039a6779a1a2), label version 20260803. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 7)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Lurasidone]], [[Molindone]], [[Sertindole]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
