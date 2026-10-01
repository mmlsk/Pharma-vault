---
type: compound
schema-version: 2
compound-id: acetazolamide-compound
name: Acetazolamide
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Carbonic anhydrase I inhibitor; Carbonic anhydrase II inhibitor; Carbonic anhydrase IV inhibitor; Carbonic anhydrase XII inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL20
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 4.0
  unit: h
  notes: 2–4 hours
protein-binding:
  value: 70.0
  value-max: 90.0
  unit: percent
  notes: 70–90%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (90%)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: None
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
  title: Acetazolamide
  url: https://en.wikipedia.org/w/index.php?title=Acetazolamide&oldid=1368294821
  revision: 1368294821
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL20
  pref-name: ACETAZOLAMIDE
  molecule-type: Small molecule
  first-approval: 1953
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - S01EC01
  targets:
  - id: CHEMBL261
    name: Carbonic anhydrase 1
    action: INHIBITOR
  - id: CHEMBL205
    name: Carbonic anhydrase 2
    action: INHIBITOR
  - id: CHEMBL3242
    name: Carbonic anhydrase 12
    action: INHIBITOR
  - id: CHEMBL3729
    name: Carbonic anhydrase 4
    action: INHIBITOR
  properties:
    full-mwt: 222.25
    mw-freebase: 222.25
    alogp: -0.86
    psa: 115.04
    hba: 6
    hbd: 2
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.63
    full-molformula: C4H6N4O3S2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 4813b9dd-5f58-44bb-ad64-cdb331828080
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4813b9dd-5f58-44bb-ad64-cdb331828080
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Acetazolamide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `acetazolamide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL20](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL20/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits carbonic anhydrase, lowering bicarbonate-dependent fluid secretion; metabolic acidosis and paraesthesia are the usual class effects.

## Mechanism

Carbonic anhydrase I inhibitor; Carbonic anhydrase II inhibitor; Carbonic anhydrase IV inhibitor; Carbonic anhydrase XII inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1953
- **Flags:** black-box warning
- **ATC S01EC01:** SENSORY ORGANS › ANTIGLAUCOMA PREPARATIONS AND MIOTICS › Carbonic anhydrase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 222.25 | -0.86 | 115.04 | 2/6 | 0 | C4H6N4O3S2 |

**Targets (ChEMBL curated mechanisms):**

- [[Carbonic anhydrase 1 (CHEMBL261)|Carbonic anhydrase 1]] - inhibitor · SINGLE PROTEIN
- [[Carbonic anhydrase 2 (CHEMBL205)|Carbonic anhydrase 2]] - inhibitor · SINGLE PROTEIN
- [[Carbonic anhydrase 12 (CHEMBL3242)|Carbonic anhydrase 12]] - inhibitor · SINGLE PROTEIN
- [[Carbonic anhydrase 4 (CHEMBL3729)|Carbonic anhydrase 4]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Acetazolamide*](https://en.wikipedia.org/w/index.php?title=Acetazolamide&oldid=1368294821) (revision 1368294821, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–4 h | 2–4 hours |
| Protein binding | 70–90 % | 70–90% |
| Metabolism | - | None |
| Excretion | mainly urinary | Urine (90%) |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 4813b9dd…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4813b9dd-5f58-44bb-ad64-cdb331828080), label version 20260819. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Dichlorphenamide]] (Carbonic anhydrase 1; Carbonic anhydrase 12; Carbonic anhydrase 2), [[Methazolamide]] (Carbonic anhydrase 1; Carbonic anhydrase 2; Carbonic anhydrase 4), [[Topiramate (Topamax)]] (Carbonic anhydrase 2; Carbonic anhydrase 4), [[Brinzolamide]] (Carbonic anhydrase 2)
- **Same ATC subgroup:** [[Brinzolamide]], [[Dichlorphenamide]], [[Dorzolamide]], [[Methazolamide]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
