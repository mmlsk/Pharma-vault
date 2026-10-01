---
type: compound
schema-version: 2
compound-id: dibenzepin-compound
name: Dibenzepin
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Histamine H1 receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1442422
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: null
  unit: h
  notes: 5 hours
protein-binding:
  value: 80.0
  value-max: null
  unit: percent
  notes: 80%
bioavailability:
  value: 25.0
  value-max: null
  notes: 25%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (80%), feces (20%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Dibenzepin
  url: https://en.wikipedia.org/w/index.php?title=Dibenzepin&oldid=1268909070
  revision: 1268909070
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1442422
  pref-name: DIBENZEPIN
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: true
  atc-codes:
  - N06AA08
  targets:
  - id: CHEMBL231
    name: Histamine H1 receptor
    action: ANTAGONIST
  - id: CHEMBL222
    name: Sodium-dependent noradrenaline transporter
    action: INHIBITOR
  properties:
    full-mwt: 295.39
    mw-freebase: 295.39
    alogp: 2.98
    psa: 26.79
    hba: 3
    hbd: 0
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.87
    full-molformula: C18H21N3O
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Dibenzepin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dibenzepin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1442422](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1442422/) · max phase 4 · id via source catalogue

## Source summary

Histamine H1 receptor antagonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1442422).

## Mechanism

Histamine H1 receptor antagonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **Flags:** withdrawn
- **ATC N06AA08:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Non-selective monoamine reuptake inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 295.39 | 2.98 | 26.79 | 0/3 | 0 | C18H21N3O |

**Targets (ChEMBL curated mechanisms):**

- [[Histamine H1 receptor (CHEMBL231)|Histamine H1 receptor]] - antagonist · SINGLE PROTEIN
- [[Sodium-dependent noradrenaline transporter (CHEMBL222)|Sodium-dependent noradrenaline transporter]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dibenzepin*](https://en.wikipedia.org/w/index.php?title=Dibenzepin&oldid=1268909070) (revision 1268909070, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5 h | 5 hours |
| Protein binding | 80 % | 80% |
| Bioavailability | 25 % | 25% |
| Metabolism | hepatic | Hepatic |
| Excretion | mainly urinary | Urine (80%), feces (20%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acrivastine]] (Histamine H1 receptor), [[Alcaftadine]] (Histamine H1 receptor), [[Amoxapine]] (Sodium-dependent noradrenaline transporter), [[Amphetamine]] (Sodium-dependent noradrenaline transporter), [[Ampreloxetine]] (Sodium-dependent noradrenaline transporter), [[Astemizole]] (Histamine H1 receptor), [[Betahistine]] (Histamine H1 receptor), [[Bilastine]] (Histamine H1 receptor), [[Chlorphenoxamine]] (Histamine H1 receptor), [[Cinnarizine]] (Histamine H1 receptor), [[Debrisoquin]] (Sodium-dependent noradrenaline transporter), [[Desloratadine]] (Histamine H1 receptor)
- **Same ATC subgroup:** [[Amineptine]], [[Amitriptyline]], [[Amoxapine]], [[Clomipramine]], [[Desipramine]], [[Dothiepin]], [[Doxepin]], [[Doxepin, low dose (Silenor)]], [[Imipramine]], [[Maprotiline]], [[Nortriptyline]], [[Protriptyline]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
