---
type: compound
schema-version: 2
compound-id: butorphanol-compound
name: Butorphanol
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
chembl-id: CHEMBL33986
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: 7.0
  unit: h
  notes: 4–7 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 60.0
  value-max: 70.0
  notes: 'Intranasal: 60–70%; Oral: 10%; Sublingual/Buccal: 25–35%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney, 75%; Biliary, 11-14%; Fecal, 15%
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver hydroxylated & glucuronidated
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
  title: Butorphanol
  url: https://en.wikipedia.org/w/index.php?title=Butorphanol&oldid=1373297983
  revision: 1373297983
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL33986
  pref-name: BUTORPHANOL
  molecule-type: Small molecule
  first-approval: 1978
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N02AF01
  targets: []
  properties:
    full-mwt: 327.47
    mw-freebase: 327.47
    alogp: 3.37
    psa: 43.7
    hba: 3
    hbd: 2
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.88
    full-molformula: C21H29NO2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Butorphanol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `butorphanol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL33986](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL33986/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Kappa agonist / partial mu agonist available as a nasal spray.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1978
- **Flags:** black-box warning
- **ATC N02AF01:** NERVOUS SYSTEM › OPIOIDS › Morphinan derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 327.47 | 3.37 | 43.7 | 2/3 | 0 | C21H29NO2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Butorphanol*](https://en.wikipedia.org/w/index.php?title=Butorphanol&oldid=1373297983) (revision 1373297983, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4–7 h | 4–7 hours |
| Bioavailability | 60–70 % | Intranasal: 60–70%; Oral: 10%; Sublingual/Buccal: 25–35% |
| Metabolism | hepatic | Liver hydroxylated & glucuronidated |
| Excretion | mainly urinary | Kidney, 75%; Biliary, 11-14%; Fecal, 15% |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Nalbuphine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
