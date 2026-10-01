---
type: compound
schema-version: 2
compound-id: eptifibatide-compound
name: Eptifibatide
aliases: []
cluster: Cardiovascular and Lipid Agents
group: cardio
class: null
subclass: null
mechanism: Integrin alpha-IIb/beta-3 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1174
chembl-max-phase: 4
half-life:
  value: 2.5
  value-max: null
  unit: h
  notes: ~2.5 hours
protein-binding:
  value: 25.0
  value-max: null
  unit: percent
  notes: ~25%
bioavailability:
  value: null
  value-max: null
  notes: n/a
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
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
- cardiovascular-load
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/cardio
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Eptifibatide
  url: https://en.wikipedia.org/w/index.php?title=Eptifibatide&oldid=1328962495
  revision: 1328962495
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1174
  pref-name: EPTIFIBATIDE
  molecule-type: Protein
  first-approval: 1998
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - B01AC16
  targets:
  - id: CHEMBL2093869
    name: Integrin alpha-IIb/beta-3
    action: INHIBITOR
  properties:
    full-mwt: 831.98
    mw-freebase: 831.98
    alogp: -1.84
    psa: 323.89
    hba: 11
    hbd: 11
    rtb: 10
    num-ro5-violations: 3
    qed-weighted: 0.05
    full-molformula: C35H49N11O9S2
pk-verification:
  source: fda-label
  status: consistent
  set-id: 2ab98ecd-c578-4032-a3d5-ae14d58d86a7
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2ab98ecd-c578-4032-a3d5-ae14d58d86a7
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Eptifibatide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `eptifibatide-compound`
- **Source group:** Cardiovascular (`cardio`)
- **Cluster:** [[Cardiovascular and Lipid Agents]]
- **ChEMBL:** [CHEMBL1174](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1174/) · max phase 4 · id via Wikipedia infobox

## Source summary

Cyclic heptapeptide GPIIb/IIIa antagonist, reversible with a short half-life so platelet function recovers within hours of stopping.

## Mechanism

Integrin alpha-IIb/beta-3 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 1998
- **ATC B01AC16:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Platelet aggregation inhibitors excl. heparin

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 831.98 | -1.84 | 323.89 | 11/11 | 3 | C35H49N11O9S2 |

**Targets (ChEMBL curated mechanisms):**

- [[Integrin alpha-IIb-beta-3 (CHEMBL2093869)|Integrin alpha-IIb/beta-3]] - inhibitor · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Eptifibatide*](https://en.wikipedia.org/w/index.php?title=Eptifibatide&oldid=1328962495) (revision 1328962495, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5 h | ~2.5 hours |
| Protein binding | 25 % | ~25% |
| Bioavailability | - | n/a |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 2ab98ecd…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2ab98ecd-c578-4032-a3d5-ae14d58d86a7), label version 20260209. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2.5)
> - protein-binding: consistent (label values: 25)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Abciximab]] (Integrin alpha-IIb/beta-3)
- **Same ATC subgroup:** [[Abciximab]], [[Aloxiprin]], [[Aspirin]], [[Beraprost]], [[Cangrelor]], [[Cilostazol]], [[Clopidogrel (Plavix)]], [[Dipyridamole]], [[Epoprostenol]], [[Prasugrel (Effient)]], [[Selexipag]], [[Ticagrelor (Brilinta)]]

## Safety routing

Group-level triage (not compound-specific): `cardiovascular-load`

- [[Stacking and Interaction Risks]]
- [[Stimulant and Cardiovascular Load]]
