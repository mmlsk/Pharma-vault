---
type: compound
schema-version: 2
compound-id: dorzolamide-compound
name: Dorzolamide
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
chembl-id: CHEMBL218490
chembl-max-phase: 4
half-life:
  value: null
  value-max: null
  unit: null
  notes: 4 months
protein-binding:
  value: 33.0
  value-max: null
  unit: percent
  notes: ~33%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
  title: Dorzolamide
  url: https://en.wikipedia.org/w/index.php?title=Dorzolamide&oldid=1366236200
  revision: 1366236200
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL218490
  pref-name: DORZOLAMIDE
  molecule-type: Small molecule
  first-approval: 1994
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - S01EC03
  targets: []
  properties:
    full-mwt: 324.45
    mw-freebase: 324.45
    alogp: 0.61
    psa: 106.33
    hba: 6
    hbd: 2
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.85
    full-molformula: C10H16N2O4S3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 462a61b2-1ec6-4d18-bc6b-fc03e027caa0
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=462a61b2-1ec6-4d18-bc6b-fc03e027caa0
  checked: '2026-10-01'
  fields:
    protein-binding: consistent
---

# Dorzolamide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dorzolamide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL218490](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL218490/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits carbonic anhydrase, lowering bicarbonate-dependent fluid secretion; metabolic acidosis and paraesthesia are the usual class effects; topical ophthalmic.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1994
- **ATC S01EC03:** SENSORY ORGANS › ANTIGLAUCOMA PREPARATIONS AND MIOTICS › Carbonic anhydrase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 324.45 | 0.61 | 106.33 | 2/6 | 0 | C10H16N2O4S3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dorzolamide*](https://en.wikipedia.org/w/index.php?title=Dorzolamide&oldid=1366236200) (revision 1366236200, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | - | 4 months |
| Protein binding | 33 % | ~33% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 462a61b2…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=462a61b2-1ec6-4d18-bc6b-fc03e027caa0), label version 20241004. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - protein-binding: consistent (label values: 33)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Acetazolamide]], [[Brinzolamide]], [[Dichlorphenamide]], [[Methazolamide]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
