---
type: compound
schema-version: 2
compound-id: rimonabant-compound
name: Rimonabant
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Cannabinoid CB1 receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL111
chembl-max-phase: 4
half-life:
  value: 6.0
  value-max: 9.0
  unit: d
  notes: Variable:; 6 to 9 days with normal BMI; 16 days if BMI >30
protein-binding:
  value: 100.0
  value-max: null
  unit: percent
  notes: Nearly 100%
bioavailability:
  value: null
  value-max: null
  notes: Undetermined
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Fecal (86%) and renal (3%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic, CYP3A4 involved
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Rimonabant
  url: https://en.wikipedia.org/w/index.php?title=Rimonabant&oldid=1370371728
  revision: 1370371728
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL111
  pref-name: RIMONABANT
  molecule-type: Small molecule
  first-approval: 2006
  black-box-warning: false
  withdrawn: true
  atc-codes:
  - A08AX01
  targets:
  - id: CHEMBL218
    name: Cannabinoid receptor 1
    action: ANTAGONIST
  properties:
    full-mwt: 463.8
    mw-freebase: 463.8
    alogp: 5.94
    psa: 50.16
    hba: 4
    hbd: 1
    rtb: 4
    num-ro5-violations: 1
    qed-weighted: 0.52
    full-molformula: C22H21Cl3N4O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Rimonabant

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rimonabant-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL111](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL111/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

CB1 inverse agonist withdrawn worldwide after psychiatric adverse effects; the definitive cautionary case for central CB1 blockade in obesity.

## Mechanism

Cannabinoid CB1 receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2006
- **Flags:** withdrawn
- **ATC A08AX01:** ALIMENTARY TRACT AND METABOLISM › ANTIOBESITY PREPARATIONS, EXCL. DIET PRODUCTS › Other antiobesity drugs

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 463.8 | 5.94 | 50.16 | 1/4 | 1 | C22H21Cl3N4O |

**Targets (ChEMBL curated mechanisms):**

- [[Cannabinoid receptor 1 (CHEMBL218)|Cannabinoid receptor 1]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rimonabant*](https://en.wikipedia.org/w/index.php?title=Rimonabant&oldid=1370371728) (revision 1370371728, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6–9 d | Variable:; 6 to 9 days with normal BMI; 16 days if BMI >30 |
| Protein binding | 100 % | Nearly 100% |
| Bioavailability | - | Undetermined |
| Metabolism | hepatic | Hepatic, CYP3A4 involved |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Fecal (86%) and renal (3%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Cannabidiol (Epidiolex)]] (Cannabinoid receptor 1), [[Dronabinol]] (Cannabinoid receptor 1)
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
