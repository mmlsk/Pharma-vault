---
type: compound
schema-version: 2
compound-id: zuclopenthixol-compound
name: Zuclopenthixol
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL53904
chembl-max-phase: 3
half-life:
  value: 20.0
  value-max: null
  unit: h
  notes: 20 hours (oral), 19 days (IM)
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98%
bioavailability:
  value: 49.0
  value-max: null
  notes: 49% (oral)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2D6 and CYP3A4-mediated)
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Zuclopenthixol
  url: https://en.wikipedia.org/w/index.php?title=Zuclopenthixol&oldid=1358444199
  revision: 1358444199
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL53904
  pref-name: ZUCLOPENTHIXOL
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N05AF05
  targets: []
  properties:
    full-mwt: 400.98
    mw-freebase: 400.98
    alogp: 4.24
    psa: 26.71
    hba: 4
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.69
    full-molformula: C22H25ClN2OS
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Zuclopenthixol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `zuclopenthixol-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL53904](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL53904/) · max phase 3 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Thioxanthene available as an acetate for rapid tranquillisation and as a decanoate for maintenance, widely used in acute psychiatry.

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC N05AF05:** NERVOUS SYSTEM › ANTIPSYCHOTICS › Thioxanthene derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 400.98 | 4.24 | 26.71 | 1/4 | 0 | C22H25ClN2OS |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Zuclopenthixol*](https://en.wikipedia.org/w/index.php?title=Zuclopenthixol&oldid=1358444199) (revision 1358444199, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20 h | 20 hours (oral), 19 days (IM) |
| Protein binding | 98 % | 98% |
| Bioavailability | 49 % | 49% (oral) |
| Metabolism | hepatic | Liver (CYP2D6 and CYP3A4-mediated) |
| CYP (metabolised by) | CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Feces |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Thiothixene]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
