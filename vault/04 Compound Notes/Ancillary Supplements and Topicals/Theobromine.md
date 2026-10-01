---
type: compound
schema-version: 2
compound-id: theobromine-compound
name: Theobromine
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
chembl-id: CHEMBL1114
chembl-max-phase: 3
half-life:
  value: 6.0
  value-max: 8.0
  unit: h
  notes: 6–8 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.1
  notes: Renal (10% unchanged, rest as metabolites)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic demethylation and oxidation
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
pk-source:
  type: wikipedia-infobox
  title: Theobromine
  url: https://en.wikipedia.org/w/index.php?title=Theobromine&oldid=1376212585
  revision: 1376212585
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1114
  pref-name: THEOBROMINE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C03BD01
  - R03DA07
  - R03DA57
  targets: []
  properties:
    full-mwt: 180.17
    mw-freebase: 180.17
    alogp: -1.04
    psa: 72.68
    hba: 5
    hbd: 1
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.56
    full-molformula: C7H8N4O2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Theobromine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `theobromine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1114](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1114/) · max phase 3 · id via Wikipedia infobox

## Source summary

The dominant methylxanthine in cocoa. Weaker adenosine antagonist than caffeine with a longer half-life and gentler subjective profile.

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC C03BD01:** CARDIOVASCULAR SYSTEM › LOW-CEILING DIURETICS, EXCL. THIAZIDES › Xanthine derivatives
- **ATC R03DA07:** RESPIRATORY SYSTEM › OTHER SYSTEMIC DRUGS FOR OBSTRUCTIVE AIRWAY DISEASES › Xanthines
- **ATC R03DA57:** RESPIRATORY SYSTEM › OTHER SYSTEMIC DRUGS FOR OBSTRUCTIVE AIRWAY DISEASES › Xanthines

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 180.17 | -1.04 | 72.68 | 1/5 | 0 | C7H8N4O2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Theobromine*](https://en.wikipedia.org/w/index.php?title=Theobromine&oldid=1376212585) (revision 1376212585, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6–8 h | 6–8 hours |
| Metabolism | hepatic | Hepatic demethylation and oxidation |
| Excretion | - · fe 0.1 | Renal (10% unchanged, rest as metabolites) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Doxofylline]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
