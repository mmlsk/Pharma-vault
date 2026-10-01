---
type: compound
schema-version: 2
compound-id: pazopanib-compound
name: Pazopanib
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL477772
chembl-max-phase: 4
half-life:
  value: 30.9
  value-max: null
  unit: h
  notes: 30.9±4 hours
protein-binding:
  value: 99.5
  value-max: null
  unit: percent
  notes: '>99.5%'
bioavailability:
  value: 21.0
  value-max: null
  notes: 21% (14–39%)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Faeces (primary), urine (<4%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver: CYP3A4 (major), 1A2 and 2C8 (minor)'
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
- evidence-limited
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Pazopanib
  url: https://en.wikipedia.org/w/index.php?title=Pazopanib&oldid=1329209972
  revision: 1329209972
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL477772
  pref-name: PAZOPANIB
  molecule-type: Small molecule
  first-approval: 2009
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L01EX03
  targets: []
  properties:
    full-mwt: 437.53
    mw-freebase: 437.53
    alogp: 3.14
    psa: 119.03
    hba: 8
    hbd: 2
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.49
    full-molformula: C21H23N7O2S
pk-verification:
  source: fda-label
  status: consistent
  set-id: d3e8dd09-d7d2-43da-8f63-bdf0ea0fcdf5
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d3e8dd09-d7d2-43da-8f63-bdf0ea0fcdf5
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Pazopanib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pazopanib-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL477772](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL477772/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits VEGF-receptor angiogenic signaling; hypertension, bleeding, thrombosis, and wound-healing effects require monitoring.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2009
- **Flags:** black-box warning
- **ATC L01EX03:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › PROTEIN KINASE INHIBITORS › Other protein kinase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 437.53 | 3.14 | 119.03 | 2/8 | 0 | C21H23N7O2S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pazopanib*](https://en.wikipedia.org/w/index.php?title=Pazopanib&oldid=1329209972) (revision 1329209972, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 30.9 h | 30.9±4 hours |
| Protein binding | 99.5 % | >99.5% |
| Bioavailability | 21 % | 21% (14–39%) |
| Metabolism | hepatic | Liver: CYP3A4 (major), 1A2 and 2C8 (minor) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Faeces (primary), urine (<4%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set d3e8dd09…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d3e8dd09-d7d2-43da-8f63-bdf0ea0fcdf5), label version 20260519. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 31)
> - protein-binding: consistent (label values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Cabozantinib]], [[Lenvatinib]], [[Sorafenib]], [[Sunitinib]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
