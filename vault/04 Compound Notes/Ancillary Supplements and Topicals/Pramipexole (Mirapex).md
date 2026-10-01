---
type: compound
schema-version: 2
compound-id: pramipexole-compound
name: Pramipexole (Mirapex)
aliases:
- Pramipexole
- Mirapex
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
chembl-id: CHEMBL301265
chembl-max-phase: 4
half-life:
  value: 8.0
  value-max: 12.0
  unit: h
  notes: 8–12 hours
protein-binding:
  value: 15.0
  value-max: null
  unit: percent
  notes: 15%
bioavailability:
  value: 90.0
  value-max: null
  notes: '>90%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (90%), feces (2%)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
  title: Pramipexole
  url: https://en.wikipedia.org/w/index.php?title=Pramipexole&oldid=1376132340
  revision: 1376132340
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL301265
  pref-name: PRAMIPEXOLE
  molecule-type: Small molecule
  first-approval: 1997
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N04BC05
  targets: []
  properties:
    full-mwt: 211.33
    mw-freebase: 211.33
    alogp: 1.58
    psa: 50.94
    hba: 4
    hbd: 2
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.8
    full-molformula: C10H17N3S
pk-verification:
  source: fda-label
  status: consistent
  set-id: a7405a56-de1c-4875-b57f-210c991474ba
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a7405a56-de1c-4875-b57f-210c991474ba
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Pramipexole (Mirapex)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pramipexole-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Pramipexole, Mirapex
- **ChEMBL:** [CHEMBL301265](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL301265/) · max phase 4 · id via Wikipedia infobox

## Source summary

Non-ergoline dopamine agonist with D3 receptor preference; used in Parkinson's disease and restless legs syndrome.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1997
- **ATC N04BC05:** NERVOUS SYSTEM › DOPAMINERGIC AGENTS › Dopamine agonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 211.33 | 1.58 | 50.94 | 2/4 | 0 | C10H17N3S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pramipexole*](https://en.wikipedia.org/w/index.php?title=Pramipexole&oldid=1376132340) (revision 1376132340, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8–12 h | 8–12 hours |
| Protein binding | 15 % | 15% |
| Bioavailability | 90 % | >90% |
| Excretion | mainly urinary | Urine (90%), feces (2%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set a7405a56…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a7405a56-de1c-4875-b57f-210c991474ba), label version 20161013. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 8, 12)
> - protein-binding: consistent (label values: 15)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Apomorphine]], [[Bromocriptine (Parlodel)]], [[Cabergoline (Dostinex)]], [[Pergolide]], [[Ropinirole]], [[Rotigotine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
