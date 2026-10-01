---
type: compound
schema-version: 2
compound-id: clopidogrel-compound
name: Clopidogrel (Plavix)
aliases:
- Clopidogrel
- Plavix
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
chembl-id: CHEMBL1771
chembl-max-phase: 4
half-life:
  value: 7.0
  value-max: 8.0
  unit: h
  notes: 7–8 hours (inactive metabolite)
protein-binding:
  value: 94.0
  value-max: 98.0
  unit: percent
  notes: 94–98%
bioavailability:
  value: 50.0
  value-max: null
  notes: '>50%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 50% Kidney; 46% bile duct
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
  title: Clopidogrel
  url: https://en.wikipedia.org/w/index.php?title=Clopidogrel&oldid=1356288019
  revision: 1356288019
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1771
  pref-name: CLOPIDOGREL
  molecule-type: Small molecule
  first-approval: 1997
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - B01AC04
  targets: []
  properties:
    full-mwt: 321.83
    mw-freebase: 321.83
    alogp: 3.67
    psa: 29.54
    hba: 4
    hbd: 0
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.81
    full-molformula: C16H16ClNO2S
pk-verification:
  source: fda-label
  status: consistent
  set-id: 55731d95-0c99-ff61-e063-6394a90a1ab5
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=55731d95-0c99-ff61-e063-6394a90a1ab5
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Clopidogrel (Plavix)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `clopidogrel-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Clopidogrel, Plavix
- **ChEMBL:** [CHEMBL1771](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1771/) · max phase 4 · id via Wikipedia infobox

## Source summary

P2Y12 platelet inhibitor used after acute coronary syndromes and stenting; response varies with CYP2C19 activation and bleeding risk compounds with other antithrombotics.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1997
- **Flags:** black-box warning, prodrug
- **ATC B01AC04:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Platelet aggregation inhibitors excl. heparin

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 321.83 | 3.67 | 29.54 | 0/4 | 0 | C16H16ClNO2S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Clopidogrel*](https://en.wikipedia.org/w/index.php?title=Clopidogrel&oldid=1356288019) (revision 1356288019, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7–8 h | 7–8 hours (inactive metabolite) |
| Protein binding | 94–98 % | 94–98% |
| Bioavailability | 50 % | >50% |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | 50% Kidney; 46% bile duct |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 55731d95…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=55731d95-0c99-ff61-e063-6394a90a1ab5), label version 20260630. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.5, 6)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Abciximab]], [[Aloxiprin]], [[Aspirin]], [[Beraprost]], [[Cangrelor]], [[Cilostazol]], [[Dipyridamole]], [[Epoprostenol]], [[Eptifibatide]], [[Prasugrel (Effient)]], [[Selexipag]], [[Ticagrelor (Brilinta)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
