---
type: compound
schema-version: 2
compound-id: diazepam-compound
name: Diazepam
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: GABA-A receptor; anion channel positive allosteric modulator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL12
chembl-max-phase: 4
half-life:
  value: 50.0
  value-max: null
  unit: h
  notes: (50 hour); 20–100 hour (32–200 hour for main active metabolite desmethyldiazepam)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 76.0
  value-max: null
  notes: 'Oral: 76% (64–97%); Rectal: 81% (62–98%)'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver – CYP2B6 (minor route) to desmethyldiazepam, CYP2C19 (major route) to inactive metabolites, CYP3A4 (major route) to temazepam
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2B6
  - CYP2C19
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2B6, CYP2C19, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
pk-source:
  type: wikipedia-infobox
  title: Diazepam
  url: https://en.wikipedia.org/w/index.php?title=Diazepam&oldid=1376693592
  revision: 1376693592
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Diazepam

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `diazepam-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL12](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL12/) · max phase 4

## Source summary

GABA-A receptor; anion channel positive allosteric modulator; approved/marketed compound catalogued by ChEMBL (CHEMBL12).

## Mechanism

GABA-A receptor; anion channel positive allosteric modulator _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Diazepam*](https://en.wikipedia.org/w/index.php?title=Diazepam&oldid=1376693592) (revision 1376693592, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 50 h | (50 hour); 20–100 hour (32–200 hour for main active metabolite desmethyldiazepam) |
| Bioavailability | 76 % | Oral: 76% (64–97%); Rectal: 81% (62–98%) |
| Metabolism | hepatic | Liver – CYP2B6 (minor route) to desmethyldiazepam, CYP2C19 (major route) to inactive metabolites, CYP3A4 (major route) to temazepam |
| CYP (metabolised by) | CYP2B6, CYP2C19, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Temazepam; Oxazepam; Nordiazepam |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
