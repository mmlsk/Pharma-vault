---
type: compound
schema-version: 2
compound-id: gemfibrozil-compound
name: Gemfibrozil (Lopid)
aliases:
- Gemfibrozil
- Lopid
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Peroxisome proliferator-activated receptor alpha agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL457
chembl-max-phase: 4
half-life:
  value: 1.5
  value-max: null
  unit: h
  notes: 1.5 hours
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: 95%
bioavailability:
  value: 100.0
  value-max: null
  notes: Close to 100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney 94% ; Feces 6%
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
  title: Gemfibrozil
  url: https://en.wikipedia.org/w/index.php?title=Gemfibrozil&oldid=1359319524
  revision: 1359319524
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL457
  pref-name: GEMFIBROZIL
  molecule-type: Small molecule
  first-approval: 1981
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C10AB04
  targets:
  - id: CHEMBL239
    name: Peroxisome proliferator-activated receptor alpha
    action: AGONIST
  properties:
    full-mwt: 250.34
    mw-freebase: 250.34
    alogp: 3.57
    psa: 46.53
    hba: 2
    hbd: 1
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.78
    full-molformula: C15H22O3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 42e40524-57e9-4fee-993f-be0fda14936b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=42e40524-57e9-4fee-993f-be0fda14936b
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Gemfibrozil (Lopid)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `gemfibrozil-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Gemfibrozil, Lopid
- **ChEMBL:** [CHEMBL457](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL457/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Older fibrate, now largely displaced -- its statin interaction is the reason.

## Mechanism

Peroxisome proliferator-activated receptor alpha agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1981
- **ATC C10AB04:** CARDIOVASCULAR SYSTEM › LIPID MODIFYING AGENTS, PLAIN › Fibrates

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 250.34 | 3.57 | 46.53 | 1/2 | 0 | C15H22O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Peroxisome proliferator-activated receptor alpha (CHEMBL239)|Peroxisome proliferator-activated receptor alpha]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Gemfibrozil*](https://en.wikipedia.org/w/index.php?title=Gemfibrozil&oldid=1359319524) (revision 1359319524, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.5 h | 1.5 hours |
| Protein binding | 95 % | 95% |
| Bioavailability | 100 % | Close to 100% |
| Metabolism | hepatic | Liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney 94% ; Feces 6% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 42e40524…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=42e40524-57e9-4fee-993f-be0fda14936b), label version 20260903. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1, 1.5, 2)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aleglitazar]] (Peroxisome proliferator-activated receptor alpha), [[Ciprofibrate]] (Peroxisome proliferator-activated receptor alpha), [[Clofibrate]] (Peroxisome proliferator-activated receptor alpha), [[Elafibranor]] (Peroxisome proliferator-activated receptor alpha), [[Fenofibrate]] (Peroxisome proliferator-activated receptor alpha), [[Fenofibric Acid]] (Peroxisome proliferator-activated receptor alpha), [[Imiglitazar]] (Peroxisome proliferator-activated receptor alpha), [[K-877]] (Peroxisome proliferator-activated receptor alpha), [[Mk-0767]] (Peroxisome proliferator-activated receptor alpha), [[Muraglitazar]] (Peroxisome proliferator-activated receptor alpha), [[Pemafibrate (Parmodia)]] (Peroxisome proliferator-activated receptor alpha), [[Saroglitazar]] (Peroxisome proliferator-activated receptor alpha)
- **Same ATC subgroup:** [[Bezafibrate]], [[Ciprofibrate]], [[Clofibrate]], [[Fenofibrate]], [[Pemafibrate (Parmodia)]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
