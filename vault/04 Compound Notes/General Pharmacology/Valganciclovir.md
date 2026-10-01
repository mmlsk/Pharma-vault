---
type: compound
schema-version: 2
compound-id: valganciclovir-compound
name: Valganciclovir
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
chembl-id: CHEMBL1201314
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: null
  unit: h
  notes: 4 hours
protein-binding:
  value: 1.0
  value-max: 2.0
  unit: percent
  notes: 1–2%
bioavailability:
  value: 60.0
  value-max: null
  notes: 60%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Hydrolysed to ganciclovir
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
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Valganciclovir
  url: https://en.wikipedia.org/w/index.php?title=Valganciclovir&oldid=1373772191
  revision: 1373772191
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201314
  pref-name: VALGANCICLOVIR
  molecule-type: Small molecule
  first-approval: 2001
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J05AB14
  targets: []
  properties:
    full-mwt: 354.37
    mw-freebase: 354.37
    alogp: -1.44
    psa: 171.37
    hba: 10
    hbd: 4
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.41
    full-molformula: C14H22N6O5
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 4db6dd63-e56b-45a4-86b2-ee125a1854a0
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4db6dd63-e56b-45a4-86b2-ee125a1854a0
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
---

# Valganciclovir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `valganciclovir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1201314](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201314/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Valyl ester prodrug of ganciclovir that made oral CMV prophylaxis after transplantation practical.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2001
- **Flags:** black-box warning, prodrug
- **ATC J05AB14:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Nucleosides and nucleotides excl. reverse transcriptase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 354.37 | -1.44 | 171.37 | 4/10 | 0 | C14H22N6O5 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Valganciclovir*](https://en.wikipedia.org/w/index.php?title=Valganciclovir&oldid=1373772191) (revision 1373772191, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4 h | 4 hours |
| Protein binding | 1–2 % | 1–2% |
| Bioavailability | 60 % | 60% |
| Metabolism | - | Hydrolysed to ganciclovir |
| Excretion | mainly urinary | Kidney |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 4db6dd63…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4db6dd63-e56b-45a4-86b2-ee125a1854a0), label version 20260624. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 0, 24, 624, 2400, 2976, 4800)
> - protein-binding: consistent (label values: 1, 2, 10, 11)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Aciclovir]], [[Ganciclovir]], [[Molnupiravir]], [[Remdesivir]], [[Valaciclovir]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
