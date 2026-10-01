---
type: compound
schema-version: 2
compound-id: cariprazine-compound
name: Cariprazine
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
chembl-id: CHEMBL2028019
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 4.0
  unit: d
  notes: 2–4 days for parent drug, and 1–3 weeks for active metabolites
protein-binding:
  value: 91.0
  value-max: 97.0
  unit: percent
  notes: 91–97%
bioavailability:
  value: null
  value-max: null
  notes: High
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine (21%), bile
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver via CYP3A4 and to a lesser extent CYP2D6
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Cariprazine
  url: https://en.wikipedia.org/w/index.php?title=Cariprazine&oldid=1375757853
  revision: 1375757853
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL2028019
  pref-name: CARIPRAZINE
  molecule-type: Small molecule
  first-approval: 2015
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N05AX15
  targets: []
  properties:
    full-mwt: 427.42
    mw-freebase: 427.42
    alogp: 4.34
    psa: 38.82
    hba: 3
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.76
    full-molformula: C21H32Cl2N4O
pk-verification:
  source: fda-label
  status: consistent
  set-id: 4b5f7c65-aa2d-452a-b3db-bc85c06ff12f
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4b5f7c65-aa2d-452a-b3db-bc85c06ff12f
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Cariprazine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cariprazine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL2028019](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2028019/) · max phase 4 · id via Wikipedia infobox

## Source summary

Antagonizes or partially agonizes dopamine D2 receptors; movement, metabolic, and prolactin effects depend on receptor profile.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2015
- **Flags:** black-box warning
- **ATC N05AX15:** NERVOUS SYSTEM › ANTIPSYCHOTICS › Other antipsychotics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 427.42 | 4.34 | 38.82 | 1/3 | 0 | C21H32Cl2N4O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cariprazine*](https://en.wikipedia.org/w/index.php?title=Cariprazine&oldid=1375757853) (revision 1375757853, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–4 d | 2–4 days for parent drug, and 1–3 weeks for active metabolites |
| Protein binding | 91–97 % | 91–97% |
| Bioavailability | - | High |
| Metabolism | hepatic | Liver via CYP3A4 and to a lesser extent CYP2D6 |
| CYP (metabolised by) | CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | desmethylcariprazine, didesmethylcariprazine |
| Excretion | - | Urine (21%), bile |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 4b5f7c65…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4b5f7c65-aa2d-452a-b3db-bc85c06ff12f), label version 20251218. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 24, 48, 96)
> - protein-binding: consistent (label values: 91, 97)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Aripiprazole]], [[Brexpiprazole]], [[Iloperidone]], [[Paliperidone]], [[Pimavanserin]], [[Risperidone]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
