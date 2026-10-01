---
type: compound
schema-version: 2
compound-id: carvedilol-compound
name: Carvedilol
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Adrenergic receptor alpha-1 antagonist; Adrenergic receptor beta antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL723
chembl-max-phase: 4
half-life:
  value: 7.0
  value-max: 10.0
  unit: h
  notes: 7–10 hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98%
bioavailability:
  value: 25.0
  value-max: 35.0
  notes: 25–35%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Urine (16%), feces (60%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2D6, CYP2C9)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C9
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C9, CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Carvedilol
  url: https://en.wikipedia.org/w/index.php?title=Carvedilol&oldid=1365729504
  revision: 1365729504
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL723
  pref-name: CARVEDILOL
  molecule-type: Small molecule
  first-approval: 1995
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C07AG02
  targets:
  - id: CHEMBL2094118
    name: Adrenergic receptor beta
    action: ANTAGONIST
  - id: CHEMBL2094251
    name: Adrenergic receptor alpha-1
    action: ANTAGONIST
  properties:
    full-mwt: 406.48
    mw-freebase: 406.48
    alogp: 3.74
    psa: 75.74
    hba: 5
    hbd: 3
    rtb: 10
    num-ro5-violations: 0
    qed-weighted: 0.35
    full-molformula: C24H26N2O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: d7d6bfff-fbb6-4a1f-aa13-babbb9a1e878
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d7d6bfff-fbb6-4a1f-aa13-babbb9a1e878
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Carvedilol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `carvedilol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL723](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL723/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Non-selective alpha/beta blocker with antioxidant activity and the strongest heart-failure evidence of the class.

## Mechanism

Adrenergic receptor alpha-1 antagonist; Adrenergic receptor beta antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1995
- **ATC C07AG02:** CARDIOVASCULAR SYSTEM › BETA BLOCKING AGENTS › Alpha and beta blocking agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 406.48 | 3.74 | 75.74 | 3/5 | 0 | C24H26N2O4 |

**Targets (ChEMBL curated mechanisms):**

- [[Adrenergic receptor beta (CHEMBL2094118)|Adrenergic receptor beta]] - antagonist · PROTEIN FAMILY
- [[Adrenergic receptor alpha-1 (CHEMBL2094251)|Adrenergic receptor alpha-1]] - antagonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Carvedilol*](https://en.wikipedia.org/w/index.php?title=Carvedilol&oldid=1365729504) (revision 1365729504, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7–10 h | 7–10 hours |
| Protein binding | 98 % | 98% |
| Bioavailability | 25–35 % | 25–35% |
| Metabolism | hepatic | Liver (CYP2D6, CYP2C9) |
| CYP (metabolised by) | CYP2C9, CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Urine (16%), feces (60%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set d7d6bfff…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d7d6bfff-fbb6-4a1f-aa13-babbb9a1e878), label version 20260909. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 5, 7, 9, 10, 11)
> - protein-binding: consistent (label values: 98)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Sertindole]] (Adrenergic receptor alpha-1)
- **Same ATC subgroup:** [[Labetalol (Trandate)]]
- **Shared CYP substrate pool:** CYP2C9 (+40 others), CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
