---
type: compound
schema-version: 2
compound-id: dapoxetine-compound
name: Dapoxetine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Serotonin transporter inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2106574
chembl-max-phase: 3
half-life:
  value: 1.5
  value-max: 1.6
  unit: h
  notes: 1.5–1.6 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
bioavailability:
  value: 15.0
  value-max: 76.0
  notes: 15–76% (mean 42%), ; Tmax = 1–1.3 hours
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidneys
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2D6, CYP3A4), kidney (FMO1)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Dapoxetine
  url: https://en.wikipedia.org/w/index.php?title=Dapoxetine&oldid=1335212564
  revision: 1335212564
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL2110900
  pref-name: DAPOXETINE HYDROCHLORIDE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - G04BX14
  targets:
  - id: CHEMBL228
    name: Sodium-dependent serotonin transporter
    action: INHIBITOR
  properties:
    full-mwt: 305.42
    mw-freebase: 305.42
    alogp: 4.91
    psa: 12.47
    hba: 2
    hbd: 0
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.64
    full-molformula: C21H23NO
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Dapoxetine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dapoxetine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL2106574](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2106574/) · max phase 3 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits serotonin reuptake through SERT; benefits, activation, sexual effects, and withdrawal profiles differ by agent.

## Mechanism

Serotonin transporter inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC G04BX14:** GENITO URINARY SYSTEM AND SEX HORMONES › UROLOGICALS › Other urologicals

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 305.42 | 4.91 | 12.47 | 0/2 | 0 | C21H23NO |

**Targets (ChEMBL curated mechanisms):**

- [[Sodium-dependent serotonin transporter (CHEMBL228)|Sodium-dependent serotonin transporter]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dapoxetine*](https://en.wikipedia.org/w/index.php?title=Dapoxetine&oldid=1335212564) (revision 1335212564, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.5–1.6 h | 1.5–1.6 hours |
| Protein binding | 99 % | >99% |
| Bioavailability | 15–76 % | 15–76% (mean 42%), ; Tmax = 1–1.3 hours |
| Metabolism | hepatic | Liver (CYP2D6, CYP3A4), kidney (FMO1) |
| CYP (metabolised by) | CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Dapoxetine-N-oxide, desmethyldapoxetine, didesmethyldapoxetine |
| Excretion | mainly urinary | Kidneys |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Amoxapine]] (Sodium-dependent serotonin transporter), [[Desvenlafaxine]] (Sodium-dependent serotonin transporter), [[Dothiepin]] (Sodium-dependent serotonin transporter), [[Indalpine]] (Sodium-dependent serotonin transporter), [[Lumateperone]] (Sodium-dependent serotonin transporter), [[MDMA]] (Sodium-dependent serotonin transporter)
- **Shared CYP substrate pool:** CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
