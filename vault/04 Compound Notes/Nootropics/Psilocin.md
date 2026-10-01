---
type: compound
schema-version: 2
compound-id: psilocin-compound
name: Psilocin
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL65547
chembl-max-phase: 2
half-life:
  value: 2.3
  value-max: 3.0
  unit: h
  notes: 'Oral psilocybin: 2.3–3 hours (as psilocin); IV psilocybin: 1.2 hours (as psilocin)'
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 52.7
  value-max: null
  notes: 'Oral psilocybin: 52.7 ± 20.4% (as psilocin)'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.04
  notes: Urine (mainly as psilocin-O-glucuronide, 2–4% unchanged)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, other tissues:; • Demethylation and deamination (MAO); • Oxidation (ALDH); • Glucuronidation (UGTs)
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
- serotonergic-or-dopaminergic-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- curated-addition
- group/neuropsych
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Psilocin
  url: https://en.wikipedia.org/w/index.php?title=Psilocin&oldid=1368850101
  revision: 1368850101
  retrieved: '2026-10-01'
  chembl-confirmed: true
chembl:
  identity-source: curated-addition
  parent-id: CHEMBL65547
  pref-name: PSILOCIN
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 204.27
    mw-freebase: 204.27
    alogp: 1.98
    psa: 39.26
    hba: 2
    hbd: 2
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.8
    full-molformula: C12H16N2O
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Psilocin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `psilocin-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL65547](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL65547/) · max phase 2 · id via curated addition, exact ChEMBL match

## Source summary

Curated addition (backlog: Psychoplastogens / Reference psychedelics). Identity resolved by exact name match (synonym) to ChEMBL CHEMBL65547 (PSILOCIN).

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 204.27 | 1.98 | 39.26 | 2/2 | 0 | C12H16N2O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Psilocin*](https://en.wikipedia.org/w/index.php?title=Psilocin&oldid=1368850101) (revision 1368850101, retrieved 2026-10-01); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.3–3 h | Oral psilocybin: 2.3–3 hours (as psilocin); IV psilocybin: 1.2 hours (as psilocin) |
| Bioavailability | 52.7 % | Oral psilocybin: 52.7 ± 20.4% (as psilocin) |
| Metabolism | hepatic | Liver, other tissues:; • Demethylation and deamination (MAO); • Oxidation (ALDH); • Glucuronidation (UGTs) |
| Metabolites | - | • Psilocin-O-glucuronide; • 4-Hydroxy-indole-3-acetaldehyde; • 4-Hydroxyindole-3-acetic acid (4-HIAA); • 4-Hydroxytryptophol |
| Excretion | - · fe 0.04 | Urine (mainly as psilocin-O-glucuronide, 2–4% unchanged) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
