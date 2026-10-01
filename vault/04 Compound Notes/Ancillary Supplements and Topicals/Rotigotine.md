---
type: compound
schema-version: 2
compound-id: rotigotine-compound
name: Rotigotine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: D2-like dopamine receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1303
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 7.0
  unit: h
  notes: 5–7 hours
protein-binding:
  value: 92.0
  value-max: null
  unit: percent
  notes: 92%
bioavailability:
  value: 37.0
  value-max: null
  notes: 37% (transdermal)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (71%), Feces (23%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP-mediated)
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
pk-source:
  type: wikipedia-infobox
  title: Rotigotine
  url: https://en.wikipedia.org/w/index.php?title=Rotigotine&oldid=1366385573
  revision: 1366385573
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1303
  pref-name: ROTIGOTINE
  molecule-type: Small molecule
  first-approval: 2006
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N04BC09
  targets:
  - id: CHEMBL2331075
    name: D2-like dopamine receptor
    action: AGONIST
  properties:
    full-mwt: 315.48
    mw-freebase: 315.48
    alogp: 4.27
    psa: 23.47
    hba: 3
    hbd: 1
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.86
    full-molformula: C19H25NOS
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Rotigotine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rotigotine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1303](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1303/) · max phase 4 · id via source catalogue

## Source summary

D2-like dopamine receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1303).

## Mechanism

D2-like dopamine receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2006
- **ATC N04BC09:** NERVOUS SYSTEM › DOPAMINERGIC AGENTS › Dopamine agonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 315.48 | 4.27 | 23.47 | 1/3 | 0 | C19H25NOS |

**Targets (ChEMBL curated mechanisms):**

- [[D2-like dopamine receptor (CHEMBL2331075)|D2-like dopamine receptor]] - agonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rotigotine*](https://en.wikipedia.org/w/index.php?title=Rotigotine&oldid=1366385573) (revision 1366385573, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–7 h | 5–7 hours |
| Protein binding | 92 % | 92% |
| Bioavailability | 37 % | 37% (transdermal) |
| Metabolism | hepatic | Liver (CYP-mediated) |
| Excretion | mainly urinary | Urine (71%), Feces (23%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Chlorpromazine]] (D2-like dopamine receptor), [[Droperidol]] (D2-like dopamine receptor), [[Haloperidol]] (D2-like dopamine receptor), [[Haloperidol Decanoate]] (D2-like dopamine receptor), [[Levomepromazine]] (D2-like dopamine receptor), [[Loxapine]] (D2-like dopamine receptor), [[Olanzapine]] (D2-like dopamine receptor), [[Thioridazine]] (D2-like dopamine receptor)
- **Same ATC subgroup:** [[Apomorphine]], [[Bromocriptine (Parlodel)]], [[Cabergoline (Dostinex)]], [[Pergolide]], [[Pramipexole (Mirapex)]], [[Ropinirole]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
