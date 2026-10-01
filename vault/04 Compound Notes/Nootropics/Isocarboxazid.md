---
type: compound
schema-version: 2
compound-id: isocarboxazid-compound
name: Isocarboxazid
aliases: []
cluster: Nootropics
group: nootropic
class: null
subclass: null
mechanism: Monoamine oxidase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201168
chembl-max-phase: 4
half-life:
  value: 1.5
  value-max: 4.0
  unit: h
  notes: 1.5–4 h
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: Low, peak at 1–2 h
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (Carboxylesterase)
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
- cns-activity
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/nootropic
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Isocarboxazid
  url: https://en.wikipedia.org/w/index.php?title=Isocarboxazid&oldid=1360629569
  revision: 1360629569
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201168
  pref-name: ISOCARBOXAZID
  molecule-type: Small molecule
  first-approval: 1959
  black-box-warning: true
  withdrawn: true
  atc-codes:
  - N06AF01
  targets:
  - id: CHEMBL2095205
    name: Monoamine oxidase
    action: INHIBITOR
  properties:
    full-mwt: 231.25
    mw-freebase: 231.25
    alogp: 1.42
    psa: 67.16
    hba: 4
    hbd: 2
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.78
    full-molformula: C12H13N3O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 95fde749-44ad-4668-86c4-0ff17bca0074
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=95fde749-44ad-4668-86c4-0ff17bca0074
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Isocarboxazid

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `isocarboxazid-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL1201168](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201168/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits monoamine oxidase to raise synaptic monoamines; selectivity and reversibility determine tyramine and serotonin-syndrome risk; irreversible non-selective, requires tyramine restriction.

## Mechanism

Monoamine oxidase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1959
- **Flags:** black-box warning, withdrawn
- **ATC N06AF01:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Monoamine oxidase inhibitors, non-selective

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 231.25 | 1.42 | 67.16 | 2/4 | 0 | C12H13N3O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Monoamine oxidase (CHEMBL2095205)|Monoamine oxidase]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Isocarboxazid*](https://en.wikipedia.org/w/index.php?title=Isocarboxazid&oldid=1360629569) (revision 1360629569, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.5–4 h | 1.5–4 h |
| Bioavailability | - | Low, peak at 1–2 h |
| Metabolism | hepatic | Liver (Carboxylesterase) |
| Metabolites | - | Hippuric acid |
| Excretion | mainly urinary | Urine |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 95fde749…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=95fde749-44ad-4668-86c4-0ff17bca0074), label version 20260421. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Phenelzine]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
