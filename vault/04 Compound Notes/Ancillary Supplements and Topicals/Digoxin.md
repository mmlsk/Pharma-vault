---
type: compound
schema-version: 2
compound-id: digoxin-compound
name: Digoxin
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Sodium/potassium-transporting ATPase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1751
chembl-max-phase: 4
half-life:
  value: 36.0
  value-max: 48.0
  unit: h
  notes: 36 to 48 hours ; (normal kidney function); 3.5 to 5 days ; (impaired kidney function)
protein-binding:
  value: 25.0
  value-max: null
  unit: percent
  notes: 25%
bioavailability:
  value: 60.0
  value-max: 80.0
  notes: 60 to 80% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (16%)
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Digoxin
  url: https://en.wikipedia.org/w/index.php?title=Digoxin&oldid=1371893917
  revision: 1371893917
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1751
  pref-name: DIGOXIN
  molecule-type: Small molecule
  first-approval: 1975
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C01AA05
  targets:
  - id: CHEMBL2095186
    name: Sodium/potassium-transporting ATPase
    action: INHIBITOR
  properties:
    full-mwt: 780.95
    mw-freebase: 780.95
    alogp: 2.22
    psa: 203.06
    hba: 14
    hbd: 6
    rtb: 7
    num-ro5-violations: 3
    qed-weighted: 0.16
    full-molformula: C41H64O14
pk-verification:
  source: fda-label
  status: consistent
  set-id: e61d2108-d871-44c0-b12a-2e61fbb56967
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e61d2108-d871-44c0-b12a-2e61fbb56967
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Digoxin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `digoxin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1751](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1751/) · max phase 4 · id via Wikipedia infobox

## Source summary

Cardiac glycoside from foxglove; a positive inotrope and rate-control agent with a famously narrow therapeutic index.

## Mechanism

Sodium/potassium-transporting ATPase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1975
- **ATC C01AA05:** CARDIOVASCULAR SYSTEM › CARDIAC GLYCOSIDES › Digitalis glycosides

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 780.95 | 2.22 | 203.06 | 6/14 | 3 | C41H64O14 |

**Targets (ChEMBL curated mechanisms):**

- [[Sodium-potassium-transporting ATPase (CHEMBL2095186)|Sodium/potassium-transporting ATPase]] - inhibitor · PROTEIN COMPLEX GROUP

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Digoxin*](https://en.wikipedia.org/w/index.php?title=Digoxin&oldid=1371893917) (revision 1371893917, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 36–48 h | 36 to 48 hours ; (normal kidney function); 3.5 to 5 days ; (impaired kidney function) |
| Protein binding | 25 % | 25% |
| Bioavailability | 60–80 % | 60 to 80% (by mouth) |
| Metabolism | hepatic | Liver (16%) |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set e61d2108…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e61d2108-d871-44c0-b12a-2e61fbb56967), label version 20260727. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 36, 48, 84, 120)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Digitoxin]] (Sodium/potassium-transporting ATPase), [[Istaroxime]] (Sodium/potassium-transporting ATPase)
- **Same ATC subgroup:** [[Digitoxin]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
