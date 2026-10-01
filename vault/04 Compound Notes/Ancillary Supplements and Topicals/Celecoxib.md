---
type: compound
schema-version: 2
compound-id: celecoxib-compound
name: Celecoxib
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Cyclooxygenase-2 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL118
chembl-max-phase: 4
half-life:
  value: 7.8
  value-max: null
  unit: h
  notes: 7.8 hours; 11 hours (mild hepatic impairment); 13 hours (moderate-severe hepatic impairment)
protein-binding:
  value: 97.0
  value-max: null
  unit: percent
  notes: 97% (mainly to serum albumin)
bioavailability:
  value: null
  value-max: null
  notes: Unknown
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Faeces (57%), urine (27%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mainly CYP2C9)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C9
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C9 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Celecoxib
  url: https://en.wikipedia.org/w/index.php?title=Celecoxib&oldid=1366925464
  revision: 1366925464
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL118
  pref-name: CELECOXIB
  molecule-type: Small molecule
  first-approval: 1998
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L01XX33
  - M01AH01
  targets:
  - id: CHEMBL230
    name: Prostaglandin G/H synthase 2
    action: INHIBITOR
  properties:
    full-mwt: 381.38
    mw-freebase: 381.38
    alogp: 3.51
    psa: 77.98
    hba: 4
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.75
    full-molformula: C17H14F3N3O2S
pk-verification:
  source: fda-label
  status: consistent
  set-id: 3a1eadd5-c0a7-473e-bde0-6b9450d11c95
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3a1eadd5-c0a7-473e-bde0-6b9450d11c95
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Celecoxib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `celecoxib-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL118](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL118/) · max phase 4 · id via source catalogue

## Source summary

Cyclooxygenase-2 inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL118).

## Mechanism

Cyclooxygenase-2 inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1998
- **Flags:** black-box warning
- **ATC L01XX33:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › OTHER ANTINEOPLASTIC AGENTS › Other antineoplastic agents
- **ATC M01AH01:** MUSCULO-SKELETAL SYSTEM › ANTIINFLAMMATORY AND ANTIRHEUMATIC PRODUCTS, NON-STEROIDS › Coxibs

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 381.38 | 3.51 | 77.98 | 1/4 | 0 | C17H14F3N3O2S |

**Targets (ChEMBL curated mechanisms):**

- [[Prostaglandin G-H synthase 2 (CHEMBL230)|Prostaglandin G/H synthase 2]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Celecoxib*](https://en.wikipedia.org/w/index.php?title=Celecoxib&oldid=1366925464) (revision 1366925464, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7.8 h | 7.8 hours; 11 hours (mild hepatic impairment); 13 hours (moderate-severe hepatic impairment) |
| Protein binding | 97 % | 97% (mainly to serum albumin) |
| Bioavailability | - | Unknown |
| Metabolism | hepatic | Liver (mainly CYP2C9) |
| CYP (metabolised by) | CYP2C9 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Faeces (57%), urine (27%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 3a1eadd5…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3a1eadd5-c0a7-473e-bde0-6b9450d11c95), label version 20260902. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1, 2, 11)
> - protein-binding: consistent (label values: 97)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aceclofenac]] (Prostaglandin G/H synthase 2), [[Carprofen]] (Prostaglandin G/H synthase 2), [[Cimicoxib]] (Prostaglandin G/H synthase 2), [[Etodolac]] (Prostaglandin G/H synthase 2), [[Etoricoxib]] (Prostaglandin G/H synthase 2), [[Gw-406381]] (Prostaglandin G/H synthase 2), [[Iguratimod]] (Prostaglandin G/H synthase 2), [[Lumiracoxib]] (Prostaglandin G/H synthase 2), [[Meloxicam]] (Prostaglandin G/H synthase 2), [[Nabumetone]] (Prostaglandin G/H synthase 2), [[Parecoxib]] (Prostaglandin G/H synthase 2), [[Rofecoxib]] (Prostaglandin G/H synthase 2)
- **Same ATC subgroup:** [[Anagrelide]], [[Etoricoxib]], [[Hydroxyurea (hydroxycarbamide)]], [[Lumiracoxib]], [[Masoprocol]], [[Mitotane]], [[Navitoclax (ABT-263)]], [[Parecoxib]], [[Rofecoxib]], [[Tazemetostat]], [[Valdecoxib]], [[Venetoclax]]
- **Shared CYP substrate pool:** CYP2C9 (+40 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
