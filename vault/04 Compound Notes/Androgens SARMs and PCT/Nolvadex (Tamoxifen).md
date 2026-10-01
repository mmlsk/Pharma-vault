---
type: compound
schema-version: 2
compound-id: tamoxifen-compound
name: Nolvadex (Tamoxifen)
aliases:
- Nolvadex
- Tamoxifen
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
chembl-id: CHEMBL83
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 7.0
  unit: d
  notes: 5–7 days
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99% (albumin)'
bioavailability:
  value: 100.0
  value-max: null
  notes: ~100%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 'Feces: 65%; Urine: 9%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4, CYP2C9, CYP2D6)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C9
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C9, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Tamoxifen
  url: https://en.wikipedia.org/w/index.php?title=Tamoxifen&oldid=1365921295
  revision: 1365921295
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL83
  pref-name: TAMOXIFEN
  molecule-type: Small molecule
  first-approval: 1977
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L02BA01
  targets: []
  properties:
    full-mwt: 371.52
    mw-freebase: 371.52
    alogp: 6.0
    psa: 12.47
    hba: 2
    hbd: 0
    rtb: 8
    num-ro5-violations: 1
    qed-weighted: 0.45
    full-molformula: C26H29NO
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Nolvadex (Tamoxifen)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tamoxifen-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Nolvadex, Tamoxifen
- **ChEMBL:** [CHEMBL83](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL83/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

SERM used post-cycle and to manage gynecomastia by blocking estrogen receptors in breast tissue.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1977
- **Flags:** black-box warning, prodrug
- **ATC L02BA01:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › HORMONE ANTAGONISTS AND RELATED AGENTS › Anti-estrogens

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 371.52 | 6.0 | 12.47 | 0/2 | 1 | C26H29NO |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tamoxifen*](https://en.wikipedia.org/w/index.php?title=Tamoxifen&oldid=1365921295) (revision 1365921295, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–7 d | 5–7 days |
| Protein binding | 99 % | >99% (albumin) |
| Bioavailability | 100 % | ~100% |
| Metabolism | hepatic | Liver (CYP3A4, CYP2C9, CYP2D6) |
| CYP (metabolised by) | CYP2C9, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • N-Desmethyltamoxifen; • Endoxifen (4-hydroxy-N-desmethyltamoxifen); • Afimoxifene (4-hydroxytamoxifen); • N,N-Didesmethyltamoxifen; • Norendoxifen (4-hydroxy-N,N-didesmethyltamoxifen); • Others, conjugates |
| Excretion | mainly non-renal | Feces: 65%; Urine: 9% |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Elacestrant]], [[Fulvestrant (Faslodex)]], [[Toremifene (Fareston)]]
- **Shared CYP substrate pool:** CYP2C9 (+40 others), CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
