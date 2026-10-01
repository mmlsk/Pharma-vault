---
type: compound
schema-version: 2
compound-id: pomalidomide-compound
name: Pomalidomide
aliases: []
cluster: General Pharmacology
group: immunology
class: null
subclass: null
mechanism: CRL4(CRBN) E3 ubiquitin ligase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL43452
chembl-max-phase: 4
half-life:
  value: 7.5
  value-max: null
  unit: h
  notes: 7.5 hours
protein-binding:
  value: 12.0
  value-max: 44.0
  unit: percent
  notes: 12–44%
bioavailability:
  value: 73.0
  value-max: null
  notes: 73% (at least)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (73%), faeces (15%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mostly CYP1A2- and CYP3A4-mediated; some minor contributions by CYP2C19 and CYP2D6)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2C19
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2C19, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- immunosuppression-infection
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/immunology
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Pomalidomide
  url: https://en.wikipedia.org/w/index.php?title=Pomalidomide&oldid=1326042409
  revision: 1326042409
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL43452
  pref-name: POMALIDOMIDE
  molecule-type: Small molecule
  first-approval: 2013
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L04AX06
  targets:
  - id: CHEMBL3833061
    name: CRL4(CRBN) E3 ubiquitin ligase
    action: INHIBITOR
  properties:
    full-mwt: 273.25
    mw-freebase: 273.25
    alogp: -0.33
    psa: 109.57
    hba: 5
    hbd: 2
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.54
    full-molformula: C13H11N3O4
pk-verification:
  source: fda-label
  status: consistent
  set-id: 3c222961-5398-4185-b2d0-defe90230094
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3c222961-5398-4185-b2d0-defe90230094
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Pomalidomide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pomalidomide-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL43452](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL43452/) · max phase 4 · id via Wikipedia infobox

## Source summary

Third-generation IMiD active in myeloma refractory to lenalidomide and bortezomib, and used in Kaposi sarcoma.

## Mechanism

CRL4(CRBN) E3 ubiquitin ligase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2013
- **Flags:** black-box warning
- **ATC L04AX06:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Other immunosuppressants

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 273.25 | -0.33 | 109.57 | 2/5 | 0 | C13H11N3O4 |

**Targets (ChEMBL curated mechanisms):**

- [[CRL4(CRBN) E3 ubiquitin ligase (CHEMBL3833061)|CRL4(CRBN) E3 ubiquitin ligase]] - inhibitor · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pomalidomide*](https://en.wikipedia.org/w/index.php?title=Pomalidomide&oldid=1326042409) (revision 1326042409, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7.5 h | 7.5 hours |
| Protein binding | 12–44 % | 12–44% |
| Bioavailability | 73 % | 73% (at least) |
| Metabolism | hepatic | Liver (mostly CYP1A2- and CYP3A4-mediated; some minor contributions by CYP2C19 and CYP2D6) |
| CYP (metabolised by) | CYP1A2, CYP2C19, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine (73%), faeces (15%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 3c222961…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3c222961-5398-4185-b2d0-defe90230094), label version 20260901. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 7.5, 9.5)
> - protein-binding: consistent (label values: 12, 44)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Lenalidomide]] (CRL4(CRBN) E3 ubiquitin ligase), [[Thalidomide]] (CRL4(CRBN) E3 ubiquitin ligase)
- **Same ATC subgroup:** [[Azathioprine]], [[Lenalidomide]], [[Methotrexate]], [[Thalidomide]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP2C19 (+43 others), CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
