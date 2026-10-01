---
type: compound
schema-version: 2
compound-id: dicoumarol-compound
name: Dicoumarol
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Vitamin k epoxide reductase complex subunit 1 isoform 1 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1466
chembl-max-phase: 4
half-life:
  value: null
  unit: null
  notes: null
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: plasmatic proteins
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: faeces, urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: hepatic
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
- identity-formula-match
pk-source:
  type: wikipedia-infobox
  title: Dicoumarol
  url: https://en.wikipedia.org/w/index.php?title=Dicoumarol&oldid=1329250023
  revision: 1329250023
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1466
  pref-name: DICUMAROL
  molecule-type: Small molecule
  first-approval: 1944
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - B01AA01
  targets:
  - id: CHEMBL1930
    name: Vitamin K epoxide reductase complex subunit 1
    action: INHIBITOR
  properties:
    full-mwt: 336.3
    mw-freebase: 336.3
    alogp: 2.9
    psa: 100.88
    hba: 6
    hbd: 2
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.55
    full-molformula: C19H12O6
  identity-check: formula-match
---

# Dicoumarol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dicoumarol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1466](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1466/) · max phase 4 · id via Wikipedia infobox · structure check: ≈ same formula, different InChIKey (tautomer/representation)

## Source summary

Inhibits vitamin K epoxide reductase so clotting factors are undercarboxylated; effect is delayed, diet-sensitive and needs INR monitoring; the original coumarin anticoagulant.

## Mechanism

Vitamin k epoxide reductase complex subunit 1 isoform 1 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1944
- **ATC B01AA01:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Vitamin K antagonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 336.3 | 2.9 | 100.88 | 2/6 | 0 | C19H12O6 |

**Targets (ChEMBL curated mechanisms):**

- [[Vitamin K epoxide reductase complex subunit 1 (CHEMBL1930)|Vitamin K epoxide reductase complex subunit 1]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dicoumarol*](https://en.wikipedia.org/w/index.php?title=Dicoumarol&oldid=1329250023) (revision 1329250023, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Protein binding | - | plasmatic proteins |
| Metabolism | hepatic | hepatic |
| Excretion | - | faeces, urine |

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acenocoumarol]] (Vitamin K epoxide reductase complex subunit 1), [[Phenindione]] (Vitamin K epoxide reductase complex subunit 1), [[Phenprocoumon]] (Vitamin K epoxide reductase complex subunit 1)
- **Same ATC subgroup:** [[Acenocoumarol]], [[Clorindione]], [[Fluindione]], [[Phenindione]], [[Phenprocoumon]], [[Tioclomarol]], [[Warfarin (Coumadin)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
