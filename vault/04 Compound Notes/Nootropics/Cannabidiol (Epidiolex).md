---
type: compound
schema-version: 2
compound-id: cannabidiol-compound
name: Cannabidiol (Epidiolex)
aliases:
- Cannabidiol
- Epidiolex
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Cannabinoid CB1 receptor negative allosteric modulator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL190461
chembl-max-phase: 4
half-life:
  value: 18.0
  value-max: 32.0
  unit: h
  notes: 18–32 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 6.0
  value-max: null
  notes: 'Oral administration; Oral: 6% (fasted); 36–57% (fed-state); Inhalation: 31% (range 11–45%) Sublingual: 12–35%'
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
- chembl-name-match
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Cannabidiol
  url: https://en.wikipedia.org/w/index.php?title=Cannabidiol&oldid=1376409525
  revision: 1376409525
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL190461
  pref-name: CANNABIDIOL
  molecule-type: Small molecule
  first-approval: 2018
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N03AX24
  targets:
  - id: CHEMBL218
    name: Cannabinoid receptor 1
    action: NEGATIVE ALLOSTERIC MODULATOR
  properties:
    full-mwt: 314.47
    mw-freebase: 314.47
    alogp: 5.85
    psa: 40.46
    hba: 2
    hbd: 2
    rtb: 6
    num-ro5-violations: 1
    qed-weighted: 0.51
    full-molformula: C21H30O2
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 8bf27097-4870-43fb-94f0-f3d0871d1eec
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8bf27097-4870-43fb-94f0-f3d0871d1eec
  checked: '2026-10-01'
  fields:
    half-life: discrepant
---

# Cannabidiol (Epidiolex)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cannabidiol-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **Aliases:** Cannabidiol, Epidiolex
- **ChEMBL:** [CHEMBL190461](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL190461/) · max phase 4 · id via exact ChEMBL name match - confirm

## Source summary

Purified plant cannabidiol licensed for Dravet, Lennox-Gastaut and tuberous sclerosis seizures, with a mechanism still not settled.

## Mechanism

Cannabinoid CB1 receptor negative allosteric modulator _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2018
- **ATC N03AX24:** NERVOUS SYSTEM › ANTIEPILEPTICS › Other antiepileptics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 314.47 | 5.85 | 40.46 | 2/2 | 1 | C21H30O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Cannabinoid receptor 1 (CHEMBL218)|Cannabinoid receptor 1]] - negative allosteric modulator · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cannabidiol*](https://en.wikipedia.org/w/index.php?title=Cannabidiol&oldid=1376409525) (revision 1376409525, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 18–32 h | 18–32 hours |
| Bioavailability | 6 % | Oral administration; Oral: 6% (fasted); 36–57% (fed-state); Inhalation: 31% (range 11–45%) Sublingual: 12–35% |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 8bf27097…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8bf27097-4870-43fb-94f0-f3d0871d1eec), label version 20260529. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 56, 61, 168)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Dronabinol]] (Cannabinoid receptor 1), [[Rimonabant]] (Cannabinoid receptor 1)
- **Same ATC subgroup:** [[Brivaracetam]], [[Cenobamate]], [[Felbamate]], [[Fenfluramine]], [[Ganaxolone]], [[Lacosamide]], [[Lamotrigine]], [[Levetiracetam]], [[Perampanel]], [[Pheneturide]], [[Retigabine (Ezogabine)]], [[Stiripentol]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
