---
type: compound
schema-version: 2
compound-id: doxazosin-compound
name: Doxazosin (Cardura)
aliases:
- Doxazosin
- Cardura
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
chembl-id: CHEMBL707
chembl-max-phase: 4
half-life:
  value: 22.0
  value-max: null
  unit: h
  notes: 22 hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98%
bioavailability:
  value: 65.0
  value-max: null
  notes: 65%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Doxazosin
  url: https://en.wikipedia.org/w/index.php?title=Doxazosin&oldid=1356471571
  revision: 1356471571
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL707
  pref-name: DOXAZOSIN
  molecule-type: Small molecule
  first-approval: 1990
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C02CA04
  targets: []
  properties:
    full-mwt: 451.48
    mw-freebase: 451.48
    alogp: 1.72
    psa: 112.27
    hba: 9
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.63
    full-molformula: C23H25N5O5
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 30a6bb83-f91b-4c4f-a849-4f2be3735a0e
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=30a6bb83-f91b-4c4f-a849-4f2be3735a0e
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Doxazosin (Cardura)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `doxazosin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Doxazosin, Cardura
- **ChEMBL:** [CHEMBL707](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL707/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Alpha-1 blocker that treats blood pressure and prostatic obstruction at once.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1990
- **ATC C02CA04:** CARDIOVASCULAR SYSTEM › ANTIADRENERGIC AGENTS, PERIPHERALLY ACTING › Alpha-adrenoreceptor antagonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 451.48 | 1.72 | 112.27 | 1/9 | 0 | C23H25N5O5 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Doxazosin*](https://en.wikipedia.org/w/index.php?title=Doxazosin&oldid=1356471571) (revision 1356471571, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 22 h | 22 hours |
| Protein binding | 98 % | 98% |
| Bioavailability | 65 % | 65% |
| Metabolism | hepatic | Liver |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 30a6bb83…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=30a6bb83-f91b-4c4f-a849-4f2be3735a0e), label version 20260814. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 22)
> - protein-binding: consistent (label values: 98)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Indoramin]], [[Prazosin (Minipress)]], [[Urapidil]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
