---
type: compound
schema-version: 2
compound-id: ipratropium-compound
name: Ipratropium
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
chembl-id: CHEMBL2134724
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: null
  unit: h
  notes: 2 hours
protein-binding:
  value: 0.0
  value-max: 9.0
  unit: percent
  notes: 0–9% in vitro
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Ipratropium bromide
  url: https://en.wikipedia.org/w/index.php?title=Ipratropium_bromide&oldid=1363887579
  revision: 1363887579
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1621597
  pref-name: IPRATROPIUM BROMIDE
  molecule-type: Small molecule
  first-approval: 1986
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - R01AX03
  - R03BB01
  targets: []
  properties:
    full-mwt: 332.46
    mw-freebase: 332.46
    alogp: 2.85
    psa: 46.53
    hba: 3
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.67
    full-molformula: C20H30NO3+
pk-verification:
  source: fda-label
  status: consistent
  set-id: 6b730dd7-4d93-403a-bfd2-fa0efa298b75
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6b730dd7-4d93-403a-bfd2-fa0efa298b75
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Ipratropium

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ipratropium-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL2134724](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2134724/) · max phase 4 · id via Wikipedia infobox

## Source summary

Antagonises muscarinic receptors; peripheral selectivity determines how much dry mouth, constipation and central anticholinergic burden an agent carries; inhaled, airway-restricted.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1986
- **ATC R01AX03:** RESPIRATORY SYSTEM › DECONGESTANTS AND OTHER NASAL PREPARATIONS FOR TOPICAL USE › Other nasal preparations
- **ATC R03BB01:** RESPIRATORY SYSTEM › OTHER DRUGS FOR OBSTRUCTIVE AIRWAY DISEASES, INHALANTS › Anticholinergics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 332.46 | 2.85 | 46.53 | 1/3 | 0 | C20H30NO3+ |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ipratropium bromide*](https://en.wikipedia.org/w/index.php?title=Ipratropium_bromide&oldid=1363887579) (revision 1363887579, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 2 hours |
| Protein binding | 0–9 % | 0–9% in vitro |
| Metabolism | hepatic | Liver |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 6b730dd7…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6b730dd7-4d93-403a-bfd2-fa0efa298b75), label version 20260724. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1.6)
> - protein-binding: consistent (label values: 0, 9)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Glycopyrrolate]], [[Mupirocin]], [[Retinol]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[Cholinergic Load]]
