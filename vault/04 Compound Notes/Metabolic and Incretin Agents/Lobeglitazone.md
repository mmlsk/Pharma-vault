---
type: compound
schema-version: 2
compound-id: lobeglitazone-compound
name: Lobeglitazone
aliases: []
cluster: Metabolic and Incretin Agents
group: glp1
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3585580
chembl-max-phase: 3
half-life:
  value: 7.8
  value-max: 9.8
  unit: h
  notes: 7.8–9.8 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '&gt;99%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: liver (CYP2C9, 2C19, and 1A2)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C9
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C9 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- glucose-metabolism
- gastrointestinal
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/glp1
- stub
- pk-auto
- chembl-profile
- chembl-name-match
pk-source:
  type: wikipedia-infobox
  title: Lobeglitazone
  url: https://en.wikipedia.org/w/index.php?title=Lobeglitazone&oldid=1329160872
  revision: 1329160872
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL3585580
  pref-name: LOBEGLITAZONE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A10BG04
  targets: []
  properties:
    full-mwt: 480.55
    mw-freebase: 480.55
    alogp: 3.69
    psa: 102.88
    hba: 9
    hbd: 1
    rtb: 10
    num-ro5-violations: 0
    qed-weighted: 0.47
    full-molformula: C24H24N4O5S
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Lobeglitazone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lobeglitazone-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **ChEMBL:** [CHEMBL3585580](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3585580/) · max phase 3 · id via exact ChEMBL name match - confirm

## Source summary

PPAR-gamma agonist approved in South Korea, with a claimed lower dose than pioglitazone.

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC A10BG04:** ALIMENTARY TRACT AND METABOLISM › BLOOD GLUCOSE LOWERING DRUGS, EXCL. INSULINS › Thiazolidinediones

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 480.55 | 3.69 | 102.88 | 1/9 | 0 | C24H24N4O5S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lobeglitazone*](https://en.wikipedia.org/w/index.php?title=Lobeglitazone&oldid=1329160872) (revision 1329160872, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7.8–9.8 h | 7.8–9.8 hours |
| Protein binding | 99 % | &gt;99% |
| Metabolism | hepatic | liver (CYP2C9, 2C19, and 1A2) |
| CYP (metabolised by) | CYP2C9 | roles as inhibitor/inducer not assessed |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Pioglitazone (Actos)]], [[Rosiglitazone]], [[Troglitazone]]
- **Shared CYP substrate pool:** CYP2C9 (+40 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
- [[Glucose and Incretin Signaling]]
