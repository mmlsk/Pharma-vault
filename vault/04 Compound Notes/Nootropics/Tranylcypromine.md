---
type: compound
schema-version: 2
compound-id: tranylcypromine-compound
name: Tranylcypromine
aliases: []
cluster: Nootropics
group: nootropic
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1179
chembl-max-phase: null
half-life:
  value: 2.5
  value-max: null
  unit: h
  notes: 2.5 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 50.0
  value-max: null
  notes: 50%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine, Feces
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
  title: Tranylcypromine
  url: https://en.wikipedia.org/w/index.php?title=Tranylcypromine&oldid=1374868074
  revision: 1374868074
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1179
  pref-name: null
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 133.19
    mw-freebase: 133.19
    alogp: 1.5
    psa: 26.02
    hba: 1
    hbd: 1
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.62
    full-molformula: C9H11N
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 83942f11-e10c-4c2d-ad78-880e1886064d
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=83942f11-e10c-4c2d-ad78-880e1886064d
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Tranylcypromine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tranylcypromine-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL1179](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1179/) · max phase n/a · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits monoamine oxidase to raise synaptic monoamines; selectivity and reversibility determine tyramine and serotonin-syndrome risk; irreversible non-selective, requires tyramine restriction.

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 133.19 | 1.5 | 26.02 | 1/1 | 0 | C9H11N |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tranylcypromine*](https://en.wikipedia.org/w/index.php?title=Tranylcypromine&oldid=1374868074) (revision 1374868074, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5 h | 2.5 hours |
| Bioavailability | 50 % | 50% |
| Metabolism | hepatic | Liver |
| Excretion | - | Urine, Feces |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 83942f11…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=83942f11-e10c-4c2d-ad78-880e1886064d), label version 20260722. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
