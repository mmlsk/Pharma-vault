---
type: compound
schema-version: 2
compound-id: ibogaine-compound
name: Ibogaine
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
chembl-id: CHEMBL1215855
chembl-max-phase: null
half-life:
  value: 7.0
  value-max: null
  unit: h
  notes: 'Ibogaine: 7 hours; Noribogaine: 24–50 hours'
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
- source-derived
- group/neuropsych
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Ibogaine
  url: https://en.wikipedia.org/w/index.php?title=Ibogaine&oldid=1374626185
  revision: 1374626185
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1215855
  pref-name: null
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 310.44
    mw-freebase: 310.44
    alogp: 3.94
    psa: 28.26
    hba: 2
    hbd: 1
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.91
    full-molformula: C20H26N2O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Ibogaine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ibogaine-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL1215855](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1215855/) · max phase n/a · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

An iboga alkaloid with NMDA, kappa-opioid, sigma and nicotinic activity, studied for interrupting opioid dependence. It causes marked QT prolongation and has caused deaths in unsupervised settings.

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 310.44 | 3.94 | 28.26 | 1/2 | 0 | C20H26N2O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ibogaine*](https://en.wikipedia.org/w/index.php?title=Ibogaine&oldid=1374626185) (revision 1374626185, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7 h | Ibogaine: 7 hours; Noribogaine: 24–50 hours |
| Metabolites | - | Noribogaine (major active metabolite) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[Cholinergic Load]]
