---
type: compound
schema-version: 2
compound-id: darigabat-compound
name: Darigabat
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: gABA-A receptor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3647536
chembl-max-phase: 2
half-life:
  value: 11.0
  value-max: null
  unit: h
  notes: 11 hours
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
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4
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
  title: Darigabat
  url: https://en.wikipedia.org/w/index.php?title=Darigabat&oldid=1366501664
  revision: 1366501664
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL3647536
  pref-name: DARIGABAT
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL2093872
    name: GABA-A receptor; anion channel
    action: AGONIST
  properties:
    full-mwt: 440.5
    mw-freebase: 440.5
    alogp: 4.12
    psa: 86.97
    hba: 7
    hbd: 0
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.45
    full-molformula: C22H21FN4O3S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Darigabat

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `darigabat-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL3647536](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3647536/) · max phase 2 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Darigabat is a phase 2 compound catalogued by ChEMBL. Its curated mechanism is gABA-A receptor; anion channel agonist; the pathway link is mechanistic and does not by itself establish benefit, safety, or an appropriate use.

## Mechanism

gABA-A receptor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 440.5 | 4.12 | 86.97 | 0/7 | 0 | C22H21FN4O3S |

**Targets (ChEMBL curated mechanisms):**

- [[GABA-A receptor; anion channel (CHEMBL2093872)|GABA-A receptor; anion channel]] - agonist · PROTEIN COMPLEX GROUP

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Darigabat*](https://en.wikipedia.org/w/index.php?title=Darigabat&oldid=1366501664) (revision 1366501664, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 11 h | 11 hours |
| Metabolism | hepatic | CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Abp-700]] (GABA-A receptor; anion channel), [[Adipiplon]] (GABA-A receptor; anion channel), [[Alprazolam]] (GABA-A receptor; anion channel), [[Brexanolone]] (GABA-A receptor; anion channel), [[Butalbital]] (GABA-A receptor; anion channel), [[Cenobamate]] (GABA-A receptor; anion channel), [[Chlordiazepoxide]] (GABA-A receptor; anion channel), [[Cipepofol]] (GABA-A receptor; anion channel), [[Clobazam]] (GABA-A receptor; anion channel), [[Clomethiazole]] (GABA-A receptor; anion channel), [[Clonazepam]] (GABA-A receptor; anion channel), [[Clotiazepam]] (GABA-A receptor; anion channel)
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
