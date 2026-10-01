---
type: compound
schema-version: 2
compound-id: sodium-oxybate-compound
name: Sodium Oxybate (GHB)
aliases:
- Sodium Oxybate
- GHB
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
chembl-id: CHEMBL1342
chembl-max-phase: 4
half-life:
  value: 30.0
  value-max: 60.0
  unit: min
  notes: 30–60 minutes
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 25.0
  value-max: null
  notes: 25% (oral)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 1–5%, kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 95–98%, mainly liver, also in blood and tissues
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
  title: Γ-Hydroxybutyric acid
  url: https://en.wikipedia.org/w/index.php?title=%CE%93-Hydroxybutyric_acid&oldid=1375974367
  revision: 1375974367
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1342
  pref-name: OXYBATE
  molecule-type: Small molecule
  first-approval: 2002
  black-box-warning: true
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 104.11
    mw-freebase: 104.11
    alogp: -0.16
    psa: 57.53
    hba: 2
    hbd: 2
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.52
    full-molformula: C4H8O3
pk-verification:
  source: fda-label
  status: consistent
  set-id: 5dcf9a5c-312b-420b-82f3-42177d8f9ee4
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5dcf9a5c-312b-420b-82f3-42177d8f9ee4
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Sodium Oxybate (GHB)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sodium-oxybate-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Sodium Oxybate, GHB
- **ChEMBL:** [CHEMBL1342](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1342/) · max phase 4 · id via Wikipedia infobox

## Source summary

Sodium salt of GHB, approved for narcolepsy with cataplexy under restricted distribution; also a drug of misuse.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2002
- **Flags:** black-box warning

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 104.11 | -0.16 | 57.53 | 2/2 | 0 | C4H8O3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Γ-Hydroxybutyric acid*](https://en.wikipedia.org/w/index.php?title=%CE%93-Hydroxybutyric_acid&oldid=1375974367) (revision 1375974367, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 30–60 min | 30–60 minutes |
| Bioavailability | 25 % | 25% (oral) |
| Metabolism | hepatic | 95–98%, mainly liver, also in blood and tissues |
| Metabolites | - | Succinic semialdehyde, Succinic acid |
| Excretion | - | 1–5%, kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 5dcf9a5c…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5dcf9a5c-312b-420b-82f3-42177d8f9ee4), label version 20260421. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.367, 0.5, 0.533, 0.983, 1)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
