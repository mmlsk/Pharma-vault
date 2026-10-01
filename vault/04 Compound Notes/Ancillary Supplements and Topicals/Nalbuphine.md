---
type: compound
schema-version: 2
compound-id: nalbuphine-compound
name: Nalbuphine
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
chembl-id: CHEMBL895
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: null
  unit: h
  notes: ~5 hours (3–6 hours)
protein-binding:
  value: 50.0
  value-max: null
  unit: percent
  notes: 50%
bioavailability:
  value: 11.0
  value-max: null
  notes: '• Oral: 11% (young adults), >44% (elderly); • IM: 81% (10 mg), 83% (20 mg); • SC: 76% (20 mg), 79% (10 mg)'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine, bile, feces; 93% within 6 hours
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
  title: Nalbuphine
  url: https://en.wikipedia.org/w/index.php?title=Nalbuphine&oldid=1362482151
  revision: 1362482151
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL895
  pref-name: NALBUPHINE
  molecule-type: Small molecule
  first-approval: 1979
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N02AF02
  targets: []
  properties:
    full-mwt: 357.45
    mw-freebase: 357.45
    alogp: 1.71
    psa: 73.16
    hba: 5
    hbd: 3
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.75
    full-molformula: C21H27NO4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Nalbuphine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nalbuphine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL895](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL895/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Mixed kappa agonist / mu antagonist with a ceiling on respiratory depression.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1979
- **Flags:** black-box warning
- **ATC N02AF02:** NERVOUS SYSTEM › OPIOIDS › Morphinan derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 357.45 | 1.71 | 73.16 | 3/5 | 0 | C21H27NO4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nalbuphine*](https://en.wikipedia.org/w/index.php?title=Nalbuphine&oldid=1362482151) (revision 1362482151, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5 h | ~5 hours (3–6 hours) |
| Protein binding | 50 % | 50% |
| Bioavailability | 11 % | • Oral: 11% (young adults), >44% (elderly); • IM: 81% (10 mg), 83% (20 mg); • SC: 76% (20 mg), 79% (10 mg) |
| Metabolism | hepatic | Liver (glucuronidation) |
| Metabolites | - | Glucuronide conjugates (inactive), others |
| Excretion | - | Urine, bile, feces; 93% within 6 hours |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Butorphanol]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
