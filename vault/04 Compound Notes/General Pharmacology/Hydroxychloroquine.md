---
type: compound
schema-version: 2
compound-id: hydroxychloroquine-compound
name: Hydroxychloroquine
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1535
chembl-max-phase: 4
half-life:
  value: 32.0
  value-max: 50.0
  unit: d
  notes: 32–50 days
protein-binding:
  value: 45.0
  value-max: null
  unit: percent
  notes: 45%
bioavailability:
  value: 74.0
  value-max: null
  notes: Variable (74% on average)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.25
  notes: Mostly kidney (23–25% as unchanged drug), also biliary (<10%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
- cyp-interactions
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Hydroxychloroquine
  url: https://en.wikipedia.org/w/index.php?title=Hydroxychloroquine&oldid=1369104674
  revision: 1369104674
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1535
  pref-name: HYDROXYCHLOROQUINE
  molecule-type: Small molecule
  first-approval: 1955
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - P01BA02
  targets: []
  properties:
    full-mwt: 335.88
    mw-freebase: 335.88
    alogp: 3.78
    psa: 48.39
    hba: 4
    hbd: 2
    rtb: 9
    num-ro5-violations: 0
    qed-weighted: 0.73
    full-molformula: C18H26ClN3O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 7e09aeca-0cec-4a88-9dde-a2098a08b877
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7e09aeca-0cec-4a88-9dde-a2098a08b877
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Hydroxychloroquine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `hydroxychloroquine-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1535](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1535/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Hydroxylated chloroquine analogue used far more as an immunomodulator in lupus and rheumatoid arthritis than as an antimalarial.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1955
- **ATC P01BA02:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › ANTIMALARIALS › Aminoquinolines

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 335.88 | 3.78 | 48.39 | 2/4 | 0 | C18H26ClN3O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Hydroxychloroquine*](https://en.wikipedia.org/w/index.php?title=Hydroxychloroquine&oldid=1369104674) (revision 1369104674, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 32–50 d | 32–50 days |
| Protein binding | 45 % | 45% |
| Bioavailability | 74 % | Variable (74% on average) |
| Metabolism | hepatic | Liver |
| Excretion | - · fe 0.25 | Mostly kidney (23–25% as unchanged drug), also biliary (<10%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 7e09aeca…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7e09aeca-0cec-4a88-9dde-a2098a08b877), label version 20251210. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 3, 4, 960, 1200)
> - protein-binding: consistent (label values: 50)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Chloroquine]], [[Primaquine]], [[Tafenoquine]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
