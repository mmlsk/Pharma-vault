---
type: compound
schema-version: 2
compound-id: isoniazid-compound
name: Isoniazid
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Enoyl-[acyl-carrier-protein] reductase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL64
chembl-max-phase: 4
half-life:
  value: 0.5
  value-max: 1.6
  unit: h
  notes: 0.5–1.6h (fast acetylators), 2-5h (slow acetylators)
protein-binding:
  value: 0.0
  value-max: 10.0
  unit: percent
  notes: Very low (0–10%)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: urine (primarily), feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'liver; CYP450: 2C19, 3A4 inhibitor'
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Isoniazid
  url: https://en.wikipedia.org/w/index.php?title=Isoniazid&oldid=1373328078
  revision: 1373328078
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL64
  pref-name: ISONIAZID
  molecule-type: Small molecule
  first-approval: 1952
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J04AC01
  - J04AC51
  targets:
  - id: CHEMBL1849
    name: Enoyl-[acyl-carrier-protein] reductase [NADH]
    action: INHIBITOR
  properties:
    full-mwt: 137.14
    mw-freebase: 137.14
    alogp: -0.31
    psa: 68.01
    hba: 3
    hbd: 2
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.32
    full-molformula: C6H7N3O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 6dab7b7b-a3a9-47ef-b423-134bc6970d8b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Isoniazid

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `isoniazid-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL64](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL64/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Cornerstone of tuberculosis therapy, a prodrug activated by the mycobacterial catalase KatG. Hepatotoxicity and neuropathy are its two defining adverse effects.

## Mechanism

Enoyl-[acyl-carrier-protein] reductase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1952
- **Flags:** black-box warning
- **ATC J04AC01:** ANTIINFECTIVES FOR SYSTEMIC USE › DRUGS FOR TREATMENT OF TUBERCULOSIS › Hydrazides
- **ATC J04AC51:** ANTIINFECTIVES FOR SYSTEMIC USE › DRUGS FOR TREATMENT OF TUBERCULOSIS › Hydrazides

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 137.14 | -0.31 | 68.01 | 2/3 | 0 | C6H7N3O |

**Targets (ChEMBL curated mechanisms):**

- [[Enoyl--acyl-carrier-protein- reductase -NADH- (CHEMBL1849)|Enoyl-[acyl-carrier-protein] reductase [NADH]]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Isoniazid*](https://en.wikipedia.org/w/index.php?title=Isoniazid&oldid=1373328078) (revision 1373328078, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.5–1.6 h | 0.5–1.6h (fast acetylators), 2-5h (slow acetylators) |
| Protein binding | 0–10 % | Very low (0–10%) |
| Metabolism | hepatic | liver; CYP450: 2C19, 3A4 inhibitor |
| Excretion | - | urine (primarily), feces |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 6dab7b7b…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b), label version 20260904. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Ethionamide]] (Enoyl-[acyl-carrier-protein] reductase [NADH])

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
