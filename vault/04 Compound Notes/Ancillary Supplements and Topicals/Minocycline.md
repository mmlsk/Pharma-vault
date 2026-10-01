---
type: compound
schema-version: 2
compound-id: minocycline-compound
name: Minocycline
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
chembl-id: CHEMBL1434
chembl-max-phase: 4
half-life:
  value: 15.5
  value-max: null
  unit: h
  notes: 15.5 h (11–26 h)
protein-binding:
  value: 70.0
  value-max: 75.0
  unit: percent
  notes: 70–75%
bioavailability:
  value: 90.0
  value-max: 100.0
  notes: 90–100%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Mostly fecal, 10–15% renal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
- identity-formula-match
pk-source:
  type: wikipedia-infobox
  title: Minocycline
  url: https://en.wikipedia.org/w/index.php?title=Minocycline&oldid=1363129899
  revision: 1363129899
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1434
  pref-name: MINOCYCLINE
  molecule-type: Small molecule
  first-approval: 1971
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A01AB23
  - D10AF07
  - J01AA08
  targets: []
  properties:
    full-mwt: 457.48
    mw-freebase: 457.48
    alogp: 0.19
    psa: 164.63
    hba: 9
    hbd: 5
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.4
    full-molformula: C23H27N3O7
  identity-check: formula-match
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: cbffa96e-2446-43cf-ba5e-38c645302afd
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=cbffa96e-2446-43cf-ba5e-38c645302afd
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Minocycline

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `minocycline-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1434](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1434/) · max phase 4 · id via Wikipedia infobox · structure check: ≈ same formula, different InChIKey (tautomer/representation)

## Source summary

Tetracycline antibiotic used for inflammatory acne; vestibular effects, pigmentation, autoimmune reactions, and antimicrobial stewardship limit long-term casual use.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1971
- **ATC A01AB23:** ALIMENTARY TRACT AND METABOLISM › STOMATOLOGICAL PREPARATIONS › Antiinfectives and antiseptics for local oral treatment
- **ATC D10AF07:** DERMATOLOGICALS › ANTI-ACNE PREPARATIONS FOR TOPICAL USE › Antiinfectives for treatment of acne
- **ATC J01AA08:** ANTIINFECTIVES FOR SYSTEMIC USE › TETRACYCLINES › Tetracyclines

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 457.48 | 0.19 | 164.63 | 5/9 | 0 | C23H27N3O7 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Minocycline*](https://en.wikipedia.org/w/index.php?title=Minocycline&oldid=1363129899) (revision 1363129899, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 15.5 h | 15.5 h (11–26 h) |
| Protein binding | 70–75 % | 70–75% |
| Bioavailability | 90–100 % | 90–100% |
| Metabolism | hepatic | Liver |
| Excretion | - | Mostly fecal, 10–15% renal |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set cbffa96e…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=cbffa96e-2446-43cf-ba5e-38c645302afd), label version 20240209. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Amphotericin B]], [[Chloramphenicol]], [[Clindamycin]], [[Clindamycin (topical, 1% solution-gel)|Clindamycin (topical, 1% solution/gel)]], [[Eravacycline]], [[Erythromycin]], [[Metronidazole]], [[Omadacycline]], [[Sarecycline (oral, Seysara)]], [[Tetracycline]], [[Tigecycline]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
