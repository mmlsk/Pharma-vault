---
type: compound
schema-version: 2
compound-id: pentoxifylline-compound
name: Pentoxifylline
aliases:
- Pentoxifyline
- Trental
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: 3',5'-cyclic phosphodiesterase inhibitor; Adenosine A2 receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL628
chembl-max-phase: 4
half-life:
  value: 0.4
  value-max: 0.8
  unit: h
  notes: 0.4–0.8 hours (1–1.6 hours for active metabolite)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 10.0
  value-max: 30.0
  notes: 10–30%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (95%), faeces (<4%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic and via erythrocytes
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
  title: Pentoxifylline
  url: https://en.wikipedia.org/w/index.php?title=Pentoxifylline&oldid=1361439043
  revision: 1361439043
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL628
  pref-name: PENTOXIFYLLINE
  molecule-type: Small molecule
  first-approval: 1984
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C04AD03
  targets:
  - id: CHEMBL2094257
    name: Adenosine A2 receptor
    action: ANTAGONIST
  - id: CHEMBL2363066
    name: 3',5'-cyclic phosphodiesterase
    action: INHIBITOR
  properties:
    full-mwt: 278.31
    mw-freebase: 278.31
    alogp: 0.19
    psa: 78.89
    hba: 7
    hbd: 0
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.73
    full-molformula: C13H18N4O3
pk-verification:
  source: fda-label
  status: consistent
  set-id: cd840a2c-2a0e-4b2b-84ff-a0406bb6fa37
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=cd840a2c-2a0e-4b2b-84ff-a0406bb6fa37
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Pentoxifylline

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pentoxifylline-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Pentoxifyline, Trental
- **ChEMBL:** [CHEMBL628](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL628/) · max phase 4 · id via Wikipedia infobox

## Source summary

Methylxanthine hemorheologic drug used for intermittent claudication. Benefits are modest and evidence is weaker than for structured exercise or cilostazol.

## Mechanism

3',5'-cyclic phosphodiesterase inhibitor; Adenosine A2 receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1984
- **ATC C04AD03:** CARDIOVASCULAR SYSTEM › PERIPHERAL VASODILATORS › Purine derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 278.31 | 0.19 | 78.89 | 0/7 | 0 | C13H18N4O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Adenosine A2 receptor (CHEMBL2094257)|Adenosine A2 receptor]] - antagonist · PROTEIN FAMILY
- [[3',5'-cyclic phosphodiesterase (CHEMBL2363066)|3',5'-cyclic phosphodiesterase]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pentoxifylline*](https://en.wikipedia.org/w/index.php?title=Pentoxifylline&oldid=1361439043) (revision 1361439043, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.4–0.8 h | 0.4–0.8 hours (1–1.6 hours for active metabolite) |
| Bioavailability | 10–30 % | 10–30% |
| Metabolism | hepatic | Hepatic and via erythrocytes |
| Excretion | mainly urinary | Urine (95%), faeces (<4%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set cd840a2c…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=cd840a2c-2a0e-4b2b-84ff-a0406bb6fa37), label version 20260515. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.4, 0.8, 1, 1.6)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Dipyridamole]] (3',5'-cyclic phosphodiesterase)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
