---
type: compound
schema-version: 2
compound-id: dipyridamole-compound
name: Dipyridamole
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: 3',5'-cyclic phosphodiesterase inhibitor; Equilibrative nucleoside transporter 1 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL932
chembl-max-phase: 4
half-life:
  value: 40.0
  value-max: null
  unit: min
  notes: 'α phase: 40 min,; β phase: 10 hours'
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: ~99%
bioavailability:
  value: 37.0
  value-max: 66.0
  notes: 37–66%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Biliary (95%), urine (negligible)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (glucuronidation)
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
  title: Dipyridamole
  url: https://en.wikipedia.org/w/index.php?title=Dipyridamole&oldid=1330713177
  revision: 1330713177
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL932
  pref-name: DIPYRIDAMOLE
  molecule-type: Small molecule
  first-approval: 1961
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - B01AC07
  targets:
  - id: CHEMBL1997
    name: Equilibrative nucleoside transporter 1
    action: INHIBITOR
  - id: CHEMBL2363066
    name: 3',5'-cyclic phosphodiesterase
    action: INHIBITOR
  properties:
    full-mwt: 504.64
    mw-freebase: 504.64
    alogp: -0.02
    psa: 145.44
    hba: 12
    hbd: 4
    rtb: 12
    num-ro5-violations: 2
    qed-weighted: 0.31
    full-molformula: C24H40N8O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 6093dcd9-82d2-414f-8507-eda22c14f626
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6093dcd9-82d2-414f-8507-eda22c14f626
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Dipyridamole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dipyridamole-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL932](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL932/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Antiplatelet and vasodilator used mainly with aspirin after stroke or with selected prosthetic valves.

## Mechanism

3',5'-cyclic phosphodiesterase inhibitor; Equilibrative nucleoside transporter 1 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1961
- **ATC B01AC07:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Platelet aggregation inhibitors excl. heparin

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 504.64 | -0.02 | 145.44 | 4/12 | 2 | C24H40N8O4 |

**Targets (ChEMBL curated mechanisms):**

- [[Equilibrative nucleoside transporter 1 (CHEMBL1997)|Equilibrative nucleoside transporter 1]] - inhibitor · SINGLE PROTEIN
- [[3',5'-cyclic phosphodiesterase (CHEMBL2363066)|3',5'-cyclic phosphodiesterase]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dipyridamole*](https://en.wikipedia.org/w/index.php?title=Dipyridamole&oldid=1330713177) (revision 1330713177, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 40 min | α phase: 40 min,; β phase: 10 hours |
| Protein binding | 99 % | ~99% |
| Bioavailability | 37–66 % | 37–66% |
| Metabolism | hepatic | Liver (glucuronidation) |
| Excretion | mainly urinary | Biliary (95%), urine (negligible) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 6093dcd9…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6093dcd9-82d2-414f-8507-eda22c14f626), label version 20260520. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.05, 0.2, 0.55, 1.033, 11.6, 15)
> - protein-binding: consistent (label values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Pentoxifylline]] (3',5'-cyclic phosphodiesterase)
- **Same ATC subgroup:** [[Abciximab]], [[Aloxiprin]], [[Aspirin]], [[Beraprost]], [[Cangrelor]], [[Cilostazol]], [[Clopidogrel (Plavix)]], [[Epoprostenol]], [[Eptifibatide]], [[Prasugrel (Effient)]], [[Selexipag]], [[Ticagrelor (Brilinta)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
