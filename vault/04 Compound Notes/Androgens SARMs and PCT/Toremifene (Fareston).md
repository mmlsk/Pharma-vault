---
type: compound
schema-version: 2
compound-id: toremifene-compound
name: Toremifene (Fareston)
aliases:
- Toremifene
- Fareston
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1655
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: 7.0
  unit: d
  notes: 'Toremifene: 3–7 days; Metabolites: 4–21 days'
protein-binding:
  value: 99.7
  value-max: null
  unit: percent
  notes: 99.7%
bioavailability:
  value: 100.0
  value-max: null
  notes: Good/~100%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 'Feces: 70% (as metabolites)'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- endocrine-feedback-disruption
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/pct
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Toremifene
  url: https://en.wikipedia.org/w/index.php?title=Toremifene&oldid=1328755055
  revision: 1328755055
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1655
  pref-name: TOREMIFENE
  molecule-type: Small molecule
  first-approval: 1996
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L02BA02
  targets: []
  properties:
    full-mwt: 405.97
    mw-freebase: 405.97
    alogp: 6.22
    psa: 12.47
    hba: 2
    hbd: 0
    rtb: 9
    num-ro5-violations: 1
    qed-weighted: 0.31
    full-molformula: C26H28ClNO
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Toremifene (Fareston)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `toremifene-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Toremifene, Fareston
- **ChEMBL:** [CHEMBL1655](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1655/) · max phase 4 · id via Wikipedia infobox

## Source summary

Triphenylethylene SERM closely related to tamoxifen, used for estrogen-receptor-positive breast cancer and sometimes for on-cycle estrogen management.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1996
- **Flags:** black-box warning
- **ATC L02BA02:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › HORMONE ANTAGONISTS AND RELATED AGENTS › Anti-estrogens

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 405.97 | 6.22 | 12.47 | 0/2 | 1 | C26H28ClNO |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Toremifene*](https://en.wikipedia.org/w/index.php?title=Toremifene&oldid=1328755055) (revision 1328755055, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–7 d | Toremifene: 3–7 days; Metabolites: 4–21 days |
| Protein binding | 99.7 % | 99.7% |
| Bioavailability | 100 % | Good/~100% |
| Metabolism | hepatic | Liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | N-Desmethyltoremifene; 4-Hydroxytoremifene; Ospemifene |
| Excretion | mainly non-renal | Feces: 70% (as metabolites) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Elacestrant]], [[Fulvestrant (Faslodex)]], [[Nolvadex (Tamoxifen)]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
