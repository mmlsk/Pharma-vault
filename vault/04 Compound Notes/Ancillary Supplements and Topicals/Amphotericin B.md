---
type: compound
schema-version: 2
compound-id: amphotericin-b-compound
name: Amphotericin B
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Ergosterol sequestering agent
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL267345
chembl-max-phase: 4
half-life:
  value: 24.0
  value-max: null
  unit: h
  notes: 'Initial phase: 24 hours; Second phase: approximately 15 days'
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (IV) low (oral)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 40% found in urine after single cumulated over several days; Biliary excretion is also important
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: kidney
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
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Amphotericin B
  url: https://en.wikipedia.org/w/index.php?title=Amphotericin_B&oldid=1358547003
  revision: 1358547003
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL267345
  pref-name: AMPHOTERICIN B
  molecule-type: Small molecule
  first-approval: 1964
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - A01AB04
  - A07AA07
  - G01AA03
  - J02AA01
  targets:
  - id: CHEMBL2364028
    name: Ergosterol
    action: SEQUESTERING AGENT
  properties:
    full-mwt: 924.09
    mw-freebase: 924.09
    alogp: 0.71
    psa: 319.61
    hba: 17
    hbd: 12
    rtb: 3
    num-ro5-violations: 3
    qed-weighted: 0.17
    full-molformula: C47H73NO17
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 02aadef1-390b-4270-b56d-33452eb89dde
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=02aadef1-390b-4270-b56d-33452eb89dde
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Amphotericin B

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `amphotericin-b-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL267345](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL267345/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Disrupts fungal ergosterol synthesis or membrane function; interaction and organ-toxicity profiles differ substantially.

## Mechanism

Ergosterol sequestering agent _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1964
- **Flags:** black-box warning
- **ATC A01AB04:** ALIMENTARY TRACT AND METABOLISM › STOMATOLOGICAL PREPARATIONS › Antiinfectives and antiseptics for local oral treatment
- **ATC A07AA07:** ALIMENTARY TRACT AND METABOLISM › INTESTINAL ANTIINFECTIVES › Antibiotics
- **ATC G01AA03:** GENITO URINARY SYSTEM AND SEX HORMONES › ANTIINFECTIVES AND ANTISEPTICS, EXCL. COMBINATIONS WITH CORTICOSTEROIDS › Antibiotics
- **ATC J02AA01:** ANTIINFECTIVES FOR SYSTEMIC USE › ANTIMYCOTICS FOR SYSTEMIC USE › Antibiotics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 924.09 | 0.71 | 319.61 | 12/17 | 3 | C47H73NO17 |

**Targets (ChEMBL curated mechanisms):**

- [[Ergosterol (CHEMBL2364028)|Ergosterol]] - sequestering agent · SMALL MOLECULE

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Amphotericin B*](https://en.wikipedia.org/w/index.php?title=Amphotericin_B&oldid=1358547003) (revision 1358547003, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 24 h | Initial phase: 24 hours; Second phase: approximately 15 days |
| Bioavailability | 100 % | 100% (IV) low (oral) |
| Metabolism | - | kidney |
| Excretion | - | 40% found in urine after single cumulated over several days; Biliary excretion is also important |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 02aadef1…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=02aadef1-390b-4270-b56d-33452eb89dde), label version 20260420. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 7, 10, 24, 100, 153, 1176)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Chloramphenicol]], [[Clindamycin]], [[Clindamycin (topical, 1% solution-gel)|Clindamycin (topical, 1% solution/gel)]], [[Fidaxomicin]], [[Metronidazole]], [[Minocycline]], [[Paromomycin]], [[Polymyxin B]], [[Rifaximin]], [[Tetracycline]], [[Vancomycin]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
