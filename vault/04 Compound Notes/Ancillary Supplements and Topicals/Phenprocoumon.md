---
type: compound
schema-version: 2
compound-id: phenprocoumon-compound
name: Phenprocoumon
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
chembl-id: CHEMBL1465
chembl-max-phase: 4
half-life:
  value: 6.0
  value-max: 7.0
  unit: d
  notes: 6–7 days
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99%
bioavailability:
  value: 100.0
  value-max: null
  notes: 100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C9, CYP3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C9
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C9, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Phenprocoumon
  url: https://en.wikipedia.org/w/index.php?title=Phenprocoumon&oldid=1334264213
  revision: 1334264213
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1465
  pref-name: PHENPROCOUMON
  molecule-type: Small molecule
  first-approval: 1957
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - B01AA04
  targets:
  - id: CHEMBL1930
    name: Vitamin K epoxide reductase complex subunit 1
    action: INHIBITOR
  properties:
    full-mwt: 280.32
    mw-freebase: 280.32
    alogp: 4.04
    psa: 50.44
    hba: 3
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.74
    full-molformula: C18H16O3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Phenprocoumon

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `phenprocoumon-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1465](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1465/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits vitamin K epoxide reductase so clotting factors are undercarboxylated; effect is delayed, diet-sensitive and needs INR monitoring; longer half-life, used in Europe.

## Mechanism

Vitamin k epoxide reductase complex subunit 1 isoform 1 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1957
- **ATC B01AA04:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Vitamin K antagonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 280.32 | 4.04 | 50.44 | 1/3 | 0 | C18H16O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Vitamin K epoxide reductase complex subunit 1 (CHEMBL1930)|Vitamin K epoxide reductase complex subunit 1]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Phenprocoumon*](https://en.wikipedia.org/w/index.php?title=Phenprocoumon&oldid=1334264213) (revision 1334264213, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6–7 d | 6–7 days |
| Protein binding | 99 % | 99% |
| Bioavailability | 100 % | 100% |
| Metabolism | hepatic | Liver (CYP2C9, CYP3A4) |
| CYP (metabolised by) | CYP2C9, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Hydroxyl derivatives, glucuronides |
| Excretion | mainly urinary | Kidney |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acenocoumarol]] (Vitamin K epoxide reductase complex subunit 1), [[Dicoumarol]] (Vitamin K epoxide reductase complex subunit 1), [[Phenindione]] (Vitamin K epoxide reductase complex subunit 1)
- **Same ATC subgroup:** [[Acenocoumarol]], [[Clorindione]], [[Dicoumarol]], [[Fluindione]], [[Phenindione]], [[Tioclomarol]], [[Warfarin (Coumadin)]]
- **Shared CYP substrate pool:** CYP2C9 (+40 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
