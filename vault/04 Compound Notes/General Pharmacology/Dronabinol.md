---
type: compound
schema-version: 2
compound-id: dronabinol-compound
name: Dronabinol
aliases: []
cluster: General Pharmacology
group: gi
class: null
subclass: null
mechanism: Cannabinoid CB1 receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL465
chembl-max-phase: 4
half-life:
  value: 25.0
  value-max: 36.0
  unit: h
  notes: 25–36 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 6.0
  value-max: 20.0
  notes: 'PO: 6–20%'
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
- needs-compound-review
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/gi
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Dronabinol
  url: https://en.wikipedia.org/w/index.php?title=Dronabinol&oldid=1373296293
  revision: 1373296293
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL465
  pref-name: DRONABINOL
  molecule-type: Small molecule
  first-approval: 1985
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A04AD10
  targets:
  - id: CHEMBL218
    name: Cannabinoid receptor 1
    action: AGONIST
  properties:
    full-mwt: 314.47
    mw-freebase: 314.47
    alogp: 5.74
    psa: 29.46
    hba: 2
    hbd: 1
    rtb: 4
    num-ro5-violations: 1
    qed-weighted: 0.57
    full-molformula: C21H30O2
pk-verification:
  source: fda-label
  status: consistent
  set-id: fd8c5d57-0173-4f62-8ff0-d8147986a976
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=fd8c5d57-0173-4f62-8ff0-d8147986a976
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Dronabinol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dronabinol-compound`
- **Source group:** Gastrointestinal & Hepatic (`gi`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL465](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL465/) · max phase 4 · id via Wikipedia infobox

## Source summary

Synthetic delta-9-tetrahydrocannabinol licensed for chemotherapy nausea and for AIDS-related anorexia.

## Mechanism

Cannabinoid CB1 receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1985
- **ATC A04AD10:** ALIMENTARY TRACT AND METABOLISM › ANTIEMETICS AND ANTINAUSEANTS › Other antiemetics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 314.47 | 5.74 | 29.46 | 1/2 | 1 | C21H30O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Cannabinoid receptor 1 (CHEMBL218)|Cannabinoid receptor 1]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dronabinol*](https://en.wikipedia.org/w/index.php?title=Dronabinol&oldid=1373296293) (revision 1373296293, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 25–36 h | 25–36 hours |
| Bioavailability | 6–20 % | PO: 6–20% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set fd8c5d57…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=fd8c5d57-0173-4f62-8ff0-d8147986a976), label version 20260513. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 4, 25, 36)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Cannabidiol (Epidiolex)]] (Cannabinoid receptor 1), [[Rimonabant]] (Cannabinoid receptor 1)
- **Same ATC subgroup:** [[Aprepitant]], [[Hyoscine (Scopolamine)]], [[Rolapitant]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
