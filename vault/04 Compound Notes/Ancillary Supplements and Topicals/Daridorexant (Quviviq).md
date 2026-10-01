---
type: compound
schema-version: 2
compound-id: daridorexant-compound
name: Daridorexant (Quviviq)
aliases:
- Daridorexant
- Quviviq
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Orexin receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL4297590
chembl-max-phase: 4
half-life:
  value: 8.0
  value-max: null
  unit: h
  notes: 8 hours (6–10 hours)
protein-binding:
  value: 99.7
  value-max: null
  unit: percent
  notes: 99.7%
bioavailability:
  value: 62.0
  value-max: null
  notes: 62%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 'Feces: ~57%; Urine: ~28%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Extensive (mainly CYP3A4 (89%))
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Daridorexant
  url: https://en.wikipedia.org/w/index.php?title=Daridorexant&oldid=1368786208
  revision: 1368786208
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL4297590
  pref-name: DARIDOREXANT
  molecule-type: Small molecule
  first-approval: 2022
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N05CJ03
  targets:
  - id: CHEMBL3307226
    name: Orexin receptor
    action: ANTAGONIST
  properties:
    full-mwt: 450.93
    mw-freebase: 450.93
    alogp: 4.27
    psa: 88.93
    hba: 6
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.5
    full-molformula: C23H23ClN6O2
pk-verification:
  source: fda-label
  status: consistent
  set-id: 3a2d1503-b816-40c9-9fac-7e03c5a3bcef
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3a2d1503-b816-40c9-9fac-7e03c5a3bcef
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Daridorexant (Quviviq)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `daridorexant-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Daridorexant, Quviviq
- **ChEMBL:** [CHEMBL4297590](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL4297590/) · max phase 4 · id via Wikipedia infobox

## Source summary

Dual orexin receptor antagonist for insomnia, engineered for a short half-life to limit next-morning residual effect.

## Mechanism

Orexin receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2022
- **ATC N05CJ03:** NERVOUS SYSTEM › HYPNOTICS AND SEDATIVES › Orexin receptor antagonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 450.93 | 4.27 | 88.93 | 1/6 | 0 | C23H23ClN6O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Orexin receptor (CHEMBL3307226)|Orexin receptor]] - antagonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Daridorexant*](https://en.wikipedia.org/w/index.php?title=Daridorexant&oldid=1368786208) (revision 1368786208, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8 h | 8 hours (6–10 hours) |
| Protein binding | 99.7 % | 99.7% |
| Bioavailability | 62 % | 62% |
| Metabolism | hepatic | Extensive (mainly CYP3A4 (89%)) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Feces: ~57%; Urine: ~28% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 3a2d1503…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3a2d1503-b816-40c9-9fac-7e03c5a3bcef), label version 20260226. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 8)
> - protein-binding: consistent (label values: 99.7)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Almorexant]] (Orexin receptor), [[Filorexant]] (Orexin receptor), [[Orn-0829 Hydrate]] (Orexin receptor), [[Suvorexant (Belsomra)]] (Orexin receptor)
- **Same ATC subgroup:** [[Lemborexant (Dayvigo)]], [[Suvorexant (Belsomra)]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
