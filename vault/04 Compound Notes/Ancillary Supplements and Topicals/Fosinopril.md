---
type: compound
schema-version: 2
compound-id: fosinopril-compound
name: Fosinopril
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
chembl-id: CHEMBL3039598
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: null
  unit: h
  notes: 12 hours (fosinoprilat)
protein-binding:
  value: 87.0
  value-max: null
  unit: percent
  notes: 87% (fosinoprilat)
bioavailability:
  value: 36.0
  value-max: null
  notes: ~36%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: liver, GIT mucosa (to fosinoprilat)
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Fosinopril
  url: https://en.wikipedia.org/w/index.php?title=Fosinopril&oldid=1329255012
  revision: 1329255012
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL3039598
  pref-name: FOSINOPRIL
  molecule-type: Small molecule
  first-approval: 1991
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C09AA09
  targets: []
  properties:
    full-mwt: 563.67
    mw-freebase: 563.67
    alogp: 6.12
    psa: 110.21
    hba: 6
    hbd: 1
    rtb: 14
    num-ro5-violations: 2
    qed-weighted: 0.13
    full-molformula: C30H46NO7P
pk-verification:
  source: fda-label
  status: discrepant
  set-id: fc38f1bb-f175-4a81-8ed9-c8701efdea35
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=fc38f1bb-f175-4a81-8ed9-c8701efdea35
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: discrepant
---

# Fosinopril

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fosinopril-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL3039598](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3039598/) · max phase 4 · id via Wikipedia infobox

## Source summary

ACE inhibitor cleared by liver and kidney; cough, angioedema, hyperkalemia, and pregnancy toxicity remain class risks.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1991
- **Flags:** black-box warning, prodrug
- **ATC C09AA09:** CARDIOVASCULAR SYSTEM › ACE INHIBITORS, PLAIN › ACE inhibitors, plain

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 563.67 | 6.12 | 110.21 | 1/6 | 2 | C30H46NO7P |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fosinopril*](https://en.wikipedia.org/w/index.php?title=Fosinopril&oldid=1329255012) (revision 1329255012, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12 h | 12 hours (fosinoprilat) |
| Protein binding | 87 % | 87% (fosinoprilat) |
| Bioavailability | 36 % | ~36% |
| Metabolism | hepatic | liver, GIT mucosa (to fosinoprilat) |
| Excretion | mainly urinary | kidney |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set fc38f1bb…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=fc38f1bb-f175-4a81-8ed9-c8701efdea35), label version 20231127. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 11, 11.5, 12, 13, 14)
> - protein-binding: discrepant (label values: 99.4)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Benazepril (Lotensin)]], [[Captopril (Capoten)]], [[Cilazapril]], [[Delapril]], [[Enalapril]], [[Imidapril]], [[Moexipril]], [[Perindopril (Aceon)]], [[Quinapril]], [[Ramipril (Altace)]], [[Spirapril]], [[Temocapril]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
