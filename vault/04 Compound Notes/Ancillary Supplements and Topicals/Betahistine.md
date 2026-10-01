---
type: compound
schema-version: 2
compound-id: betahistine-compound
name: Betahistine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Histamine H3 receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL24441
chembl-max-phase: 4
half-life:
  value: 3.5
  value-max: null
  unit: h
  notes: 3.5 hours
protein-binding:
  value: 5.0
  value-max: null
  unit: percent
  notes: <5%
bioavailability:
  value: 100.0
  value-max: null
  notes: ~100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: 91%'
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
  title: Betahistine
  url: https://en.wikipedia.org/w/index.php?title=Betahistine&oldid=1367375469
  revision: 1367375469
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL24441
  pref-name: BETAHISTINE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N07CA01
  targets:
  - id: CHEMBL264
    name: Histamine H3 receptor
    action: ANTAGONIST
  - id: CHEMBL231
    name: Histamine H1 receptor
    action: AGONIST
  properties:
    full-mwt: 136.2
    mw-freebase: 136.2
    alogp: 0.84
    psa: 24.92
    hba: 2
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.67
    full-molformula: C8H12N2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Betahistine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `betahistine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL24441](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL24441/) · max phase 4 · id via source catalogue

## Source summary

Histamine H3 receptor antagonist; approved/marketed compound catalogued by ChEMBL (CHEMBL24441).

## Mechanism

Histamine H3 receptor antagonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC N07CA01:** NERVOUS SYSTEM › ANTIVERTIGO PREPARATIONS › Antivertigo preparations

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 136.2 | 0.84 | 24.92 | 1/2 | 0 | C8H12N2 |

**Targets (ChEMBL curated mechanisms):**

- [[Histamine H3 receptor (CHEMBL264)|Histamine H3 receptor]] - antagonist · SINGLE PROTEIN
- [[Histamine H1 receptor (CHEMBL231)|Histamine H1 receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Betahistine*](https://en.wikipedia.org/w/index.php?title=Betahistine&oldid=1367375469) (revision 1367375469, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3.5 h | 3.5 hours |
| Protein binding | 5 % | <5% |
| Bioavailability | 100 % | ~100% |
| Metabolism | hepatic | Liver |
| Metabolites | - | • 2-(2-Aminoethyl)pyridine; • 2-Pyridylacetic acid |
| Excretion | mainly urinary | Urine: 91% |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acrivastine]] (Histamine H1 receptor), [[Alcaftadine]] (Histamine H1 receptor), [[Astemizole]] (Histamine H1 receptor), [[Bilastine]] (Histamine H1 receptor), [[Chlorphenoxamine]] (Histamine H1 receptor), [[Cinnarizine]] (Histamine H1 receptor), [[Desloratadine]] (Histamine H1 receptor), [[Dibenzepin]] (Histamine H1 receptor), [[Dimenhydrinate]] (Histamine H1 receptor), [[Dimethindene]] (Histamine H1 receptor), [[Doxepin]] (Histamine H1 receptor), [[Doxepin, low dose (Silenor)]] (Histamine H1 receptor)
- **Same ATC subgroup:** [[Cinnarizine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
