---
type: compound
schema-version: 2
compound-id: methylone-compound
name: Methylone
aliases: []
cluster: Novel Psychoactive Substances
group: nps
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3604010
chembl-max-phase: 2
half-life:
  value: 5.8
  value-max: 6.9
  unit: h
  notes: 5.8–6.9 hours
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
  notes: CYP2D6, CYP1A2, CYP2B6, and CYP2C19, COMT. [https://www.researchgate.net/figure/Common-routes-of-metabolism-for-methylone-3-Hydroxy-4-methoxy-N-methylcathinone-and_fig3_326760071]
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2B6
  - CYP2C19
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2B6, CYP2C19, CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- cns-activity
- identity-contamination
- evidence-limited
- cardiovascular-load
- serotonergic-or-dopaminergic-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- curated-addition
- group/nps
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Methylone
  url: https://en.wikipedia.org/w/index.php?title=Methylone&oldid=1376760575
  revision: 1376760575
  retrieved: '2026-10-01'
  chembl-confirmed: false
chembl:
  identity-source: curated-addition
  parent-id: CHEMBL3604010
  pref-name: METHYLONE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 207.23
    mw-freebase: 207.23
    alogp: 1.21
    psa: 47.56
    hba: 4
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.76
    full-molformula: C11H13NO3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Methylone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `methylone-compound`
- **Source group:** Novel Psychoactive Substances (forensic NPS, curated addition) (`nps`)
- **Cluster:** [[Novel Psychoactive Substances]]
- **ChEMBL:** [CHEMBL3604010](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3604010/) · max phase 2 · id via curated addition, exact ChEMBL match

## Source summary

Curated addition (backlog: Designer-drug families / Synthetic stimulants). Identity resolved by exact name match (synonym) to ChEMBL CHEMBL3604010 (METHYLONE).

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 207.23 | 1.21 | 47.56 | 1/4 | 0 | C11H13NO3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Methylone*](https://en.wikipedia.org/w/index.php?title=Methylone&oldid=1376760575) (revision 1376760575, retrieved 2026-10-01); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5.8–6.9 h | 5.8–6.9 hours |
| Metabolism | hepatic | CYP2D6, CYP1A2, CYP2B6, and CYP2C19, COMT. [https://www.researchgate.net/figure/Common-routes-of-metabolism-for-methylone-3-Hydroxy-4-methoxy-N-methylcathinone-and_fig3_326760071] |
| CYP (metabolised by) | CYP1A2, CYP2B6, CYP2C19, CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Dihydromethylone; 3,4-dihydroxy-N-methylcathinone; Methylenedioxycathinone; 4-hydroxy-3-methoxy-N-methylcathinone; 3-hydroxy-4-methoxy-N-methylcathinone |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP2B6 (+12 others), CYP2C19 (+43 others), CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `identity-contamination`, `evidence-limited`, `cardiovascular-load`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[Stimulant and Cardiovascular Load]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
