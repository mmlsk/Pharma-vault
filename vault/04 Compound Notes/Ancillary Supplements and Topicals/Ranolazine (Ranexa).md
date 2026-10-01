---
type: compound
schema-version: 2
compound-id: ranolazine-compound
name: Ranolazine (Ranexa)
aliases:
- Ranolazine
- Ranexa
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Sodium channel protein type IV alpha subunit blocker; Sodium channel protein type V alpha subunit blocker
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1404
chembl-max-phase: 4
half-life:
  value: 1.4
  value-max: 1.9
  unit: h
  notes: 1.4 to 1.9 hours
protein-binding:
  value: 62.0
  value-max: null
  unit: percent
  notes: ~62%
bioavailability:
  value: 35.0
  value-max: 50.0
  notes: 35 to 50%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (75%) and fecal (25%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Extensive in liver (CYP3A, CYP2D6) and intestine
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
- pk-fda-discrepant
- pk-ema-discrepant
pk-source:
  type: wikipedia-infobox
  title: Ranolazine
  url: https://en.wikipedia.org/w/index.php?title=Ranolazine&oldid=1359319819
  revision: 1359319819
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1404
  pref-name: RANOLAZINE
  molecule-type: Small molecule
  first-approval: 2006
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C01EB18
  targets:
  - id: CHEMBL1980
    name: Sodium channel protein type 5 subunit alpha
    action: BLOCKER
  - id: CHEMBL2072
    name: Sodium channel protein type 4 subunit alpha
    action: BLOCKER
  properties:
    full-mwt: 427.55
    mw-freebase: 427.55
    alogp: 2.31
    psa: 74.27
    hba: 6
    hbd: 2
    rtb: 9
    num-ro5-violations: 0
    qed-weighted: 0.64
    full-molformula: C24H33N3O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 90c5a0c2-542c-467e-9c0c-ef320534c560
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=90c5a0c2-542c-467e-9c0c-ef320534c560
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: discrepant
  product: Ranexa (previously Latixa)
  ema-number: EMEA/H/C/000805
  url: https://www.ema.europa.eu/en/documents/product-information/ranexa-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/ranexa-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
---

# Ranolazine (Ranexa)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ranolazine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Ranolazine, Ranexa
- **ChEMBL:** [CHEMBL1404](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1404/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Antianginal that inhibits the late sodium current, working without lowering heart rate or blood pressure.

## Mechanism

Sodium channel protein type IV alpha subunit blocker; Sodium channel protein type V alpha subunit blocker _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2006
- **ATC C01EB18:** CARDIOVASCULAR SYSTEM › OTHER CARDIAC PREPARATIONS › Other cardiac preparations

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 427.55 | 2.31 | 74.27 | 2/6 | 0 | C24H33N3O4 |

**Targets (ChEMBL curated mechanisms):**

- [[Sodium channel protein type 5 subunit alpha (CHEMBL1980)|Sodium channel protein type 5 subunit alpha]] - blocker · SINGLE PROTEIN
- [[Sodium channel protein type 4 subunit alpha (CHEMBL2072)|Sodium channel protein type 4 subunit alpha]] - blocker · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ranolazine*](https://en.wikipedia.org/w/index.php?title=Ranolazine&oldid=1359319819) (revision 1359319819, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.4–1.9 h | 1.4 to 1.9 hours |
| Protein binding | 62 % | ~62% |
| Bioavailability | 35–50 % | 35 to 50% |
| Metabolism | hepatic | Extensive in liver (CYP3A, CYP2D6) and intestine |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney (75%) and fecal (25%) |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 90c5a0c2…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=90c5a0c2-542c-467e-9c0c-ef320534c560), label version 20260819. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 6, 7, 22)
> - protein-binding: consistent (label values: 62)

> [!danger] EU SmPC cross-check: **discrepant**
> Automated comparison with section 5.2 of the [EU SmPC of *Ranexa (previously Latixa)*](https://www.ema.europa.eu/en/documents/product-information/ranexa-epar-product-information_en.pdf) (EMEA/H/C/000805) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/ranexa-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (SmPC values: 3, 7)
> - protein-binding: consistent (SmPC values: 62)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Bupivacaine]] (Sodium channel protein type 4 subunit alpha)
- **Same ATC subgroup:** [[Adenosine (IV)]], [[Coenzyme Q10]], [[Ibuprofen]], [[Indomethacin]], [[Ivabradine (Corlanor)]], [[Mavacamten]], [[Meldonium]], [[Trimetazidine]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
