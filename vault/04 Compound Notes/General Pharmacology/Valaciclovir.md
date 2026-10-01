---
type: compound
schema-version: 2
compound-id: valacyclovir-compound
name: Valaciclovir
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
chembl-id: CHEMBL1349
chembl-max-phase: 4
half-life:
  value: 30.0
  value-max: null
  unit: min
  notes: <30 minutes (valaciclovir);; 2.5–3.6 hours (aciclovir)
protein-binding:
  value: 13.0
  value-max: 18.0
  unit: percent
  notes: 13–18%
bioavailability:
  value: 55.0
  value-max: null
  notes: 55%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney 40–50% (aciclovir),; faecal 47% (aciclovir)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (to aciclovir)
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
  title: Valaciclovir
  url: https://en.wikipedia.org/w/index.php?title=Valaciclovir&oldid=1356290223
  revision: 1356290223
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1349
  pref-name: VALACYCLOVIR
  molecule-type: Small molecule
  first-approval: 1995
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J05AB11
  targets: []
  properties:
    full-mwt: 324.34
    mw-freebase: 324.34
    alogp: -0.8
    psa: 151.14
    hba: 9
    hbd: 3
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.44
    full-molformula: C13H20N6O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Valaciclovir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `valacyclovir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1349](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1349/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

L-valyl ester prodrug of aciclovir with three to five times the oral bioavailability, achieved by hijacking an intestinal peptide transporter.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1995
- **Flags:** prodrug
- **ATC J05AB11:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Nucleosides and nucleotides excl. reverse transcriptase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 324.34 | -0.8 | 151.14 | 3/9 | 0 | C13H20N6O4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Valaciclovir*](https://en.wikipedia.org/w/index.php?title=Valaciclovir&oldid=1356290223) (revision 1356290223, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 30 min | <30 minutes (valaciclovir);; 2.5–3.6 hours (aciclovir) |
| Protein binding | 13–18 % | 13–18% |
| Bioavailability | 55 % | 55% |
| Metabolism | hepatic | Liver (to aciclovir) |
| Excretion | - | Kidney 40–50% (aciclovir),; faecal 47% (aciclovir) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Aciclovir]], [[Ganciclovir]], [[Molnupiravir]], [[Remdesivir]], [[Valganciclovir]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
