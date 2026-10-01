---
type: compound
schema-version: 2
compound-id: amantadine-compound
name: Amantadine
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
chembl-id: CHEMBL660
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: 31.0
  unit: h
  notes: 10–31 hours
protein-binding:
  value: 67.0
  value-max: null
  unit: percent
  notes: 67%
bioavailability:
  value: 86.0
  value-max: 90.0
  notes: 86–90%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Minimal (mostly to acetyl metabolites)
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
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Amantadine
  url: https://en.wikipedia.org/w/index.php?title=Amantadine&oldid=1369113052
  revision: 1369113052
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL660
  pref-name: AMANTADINE
  molecule-type: Small molecule
  first-approval: 1968
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N04BB01
  targets: []
  properties:
    full-mwt: 151.25
    mw-freebase: 151.25
    alogp: 1.91
    psa: 26.02
    hba: 1
    hbd: 1
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.56
    full-molformula: C10H17N
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 2bee0631-0028-1314-e063-6394a90aaaed
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2bee0631-0028-1314-e063-6394a90aaaed
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Amantadine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `amantadine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL660](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL660/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Aminoadamantane with weak NMDA antagonist and dopamine-releasing activity; originally an influenza A antiviral, now an antiparkinsonian.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1968
- **ATC N04BB01:** NERVOUS SYSTEM › DOPAMINERGIC AGENTS › Adamantane derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 151.25 | 1.91 | 26.02 | 1/1 | 0 | C10H17N |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Amantadine*](https://en.wikipedia.org/w/index.php?title=Amantadine&oldid=1369113052) (revision 1369113052, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–31 h | 10–31 hours |
| Protein binding | 67 % | 67% |
| Bioavailability | 86–90 % | 86–90% |
| Metabolism | - | Minimal (mostly to acetyl metabolites) |
| Excretion | mainly urinary | Urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 2bee0631…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2bee0631-0028-1314-e063-6394a90aaaed), label version 20260908. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 16)
> - protein-binding: consistent (label values: 67)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
