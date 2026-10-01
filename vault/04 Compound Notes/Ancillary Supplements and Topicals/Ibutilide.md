---
type: compound
schema-version: 2
compound-id: ibutilide-compound
name: Ibutilide
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
chembl-id: CHEMBL533
chembl-max-phase: 4
half-life:
  value: 6.0
  value-max: null
  unit: h
  notes: 6 hours (2-12 hours)
protein-binding:
  value: 40.0
  value-max: null
  unit: percent
  notes: 40%
bioavailability:
  value: null
  value-max: null
  notes: N/A
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal (82%), fecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic oxidation
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Ibutilide
  url: https://en.wikipedia.org/w/index.php?title=Ibutilide&oldid=1331776655
  revision: 1331776655
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL533
  pref-name: IBUTILIDE
  molecule-type: Small molecule
  first-approval: 1995
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C01BD05
  targets: []
  properties:
    full-mwt: 384.59
    mw-freebase: 384.59
    alogp: 4.16
    psa: 69.64
    hba: 4
    hbd: 2
    rtb: 14
    num-ro5-violations: 0
    qed-weighted: 0.47
    full-molformula: C20H36N2O3S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Ibutilide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ibutilide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL533](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL533/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Alters cardiac repolarization through potassium-channel effects; QT prolongation and torsades risk vary by agent.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1995
- **Flags:** black-box warning
- **ATC C01BD05:** CARDIOVASCULAR SYSTEM › ANTIARRHYTHMICS, CLASS I AND III › Antiarrhythmics, class III

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 384.59 | 4.16 | 69.64 | 2/4 | 0 | C20H36N2O3S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ibutilide*](https://en.wikipedia.org/w/index.php?title=Ibutilide&oldid=1331776655) (revision 1331776655, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6 h | 6 hours (2-12 hours) |
| Protein binding | 40 % | 40% |
| Bioavailability | - | N/A |
| Metabolism | hepatic | Hepatic oxidation |
| Excretion | mainly urinary | Renal (82%), fecal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Amiodarone]], [[Dofetilide]], [[Dronedarone]], [[Tedisamil]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
