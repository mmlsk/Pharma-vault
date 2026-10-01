---
type: compound
schema-version: 2
compound-id: diazoxide-compound
name: Diazoxide
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Potassium channel, inwardly rectifying, subfamily J, member 11 opener; Potassium channel, inwardly rectifying, subfamily J, member 8 opener
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL181
chembl-max-phase: 4
half-life:
  value: 24.0
  value-max: 36.0
  unit: h
  notes: 'Adults: 24–36 hours; Children: 9.5–24 hours'
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: '>90%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver oxidation and sulfate conjugation
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
  title: Diazoxide
  url: https://en.wikipedia.org/w/index.php?title=Diazoxide&oldid=1367332229
  revision: 1367332229
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL181
  pref-name: DIAZOXIDE
  molecule-type: Small molecule
  first-approval: 1973
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C02DA01
  - V03AH01
  targets:
  - id: CHEMBL1886
    name: ATP-sensitive inward rectifier potassium channel 11
    action: OPENER
  - id: CHEMBL4770
    name: ATP-sensitive inward rectifier potassium channel 8
    action: OPENER
  properties:
    full-mwt: 230.68
    mw-freebase: 230.68
    alogp: 1.68
    psa: 58.53
    hba: 3
    hbd: 1
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.74
    full-molformula: C8H7ClN2O2S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: abe317a5-6c63-469c-89c8-9fedfe859c3d
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=abe317a5-6c63-469c-89c8-9fedfe859c3d
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Diazoxide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `diazoxide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL181](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL181/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Potassium-channel opener that suppresses insulin release and treats selected hypoglycemia disorders; causes fluid retention.

## Mechanism

Potassium channel, inwardly rectifying, subfamily J, member 11 opener; Potassium channel, inwardly rectifying, subfamily J, member 8 opener _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1973
- **ATC C02DA01:** CARDIOVASCULAR SYSTEM › ARTERIOLAR SMOOTH MUSCLE, AGENTS ACTING ON › Thiazide derivatives
- **ATC V03AH01:** VARIOUS › ALL OTHER THERAPEUTIC PRODUCTS › Drugs for treatment of hypoglycemia

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 230.68 | 1.68 | 58.53 | 1/3 | 0 | C8H7ClN2O2S |

**Targets (ChEMBL curated mechanisms):**

- [[ATP-sensitive inward rectifier potassium channel 11 (CHEMBL1886)|ATP-sensitive inward rectifier potassium channel 11]] - opener · SINGLE PROTEIN
- [[ATP-sensitive inward rectifier potassium channel 8 (CHEMBL4770)|ATP-sensitive inward rectifier potassium channel 8]] - opener · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Diazoxide*](https://en.wikipedia.org/w/index.php?title=Diazoxide&oldid=1367332229) (revision 1367332229, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 24–36 h | Adults: 24–36 hours; Children: 9.5–24 hours |
| Protein binding | 90 % | >90% |
| Metabolism | hepatic | Liver oxidation and sulfate conjugation |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set abe317a5…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=abe317a5-6c63-469c-89c8-9fedfe859c3d), label version 20260807. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 9.5, 24, 28, 36)
> - protein-binding: no-label-value (label values: -)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
