---
type: compound
schema-version: 2
compound-id: fentanyl-compound
name: Fentanyl
aliases: []
cluster: General Pharmacology
group: analgesia
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: null
chembl-max-phase: null
half-life:
  value: 6.0
  value-max: null
  unit: min
  notes: 'IV: 6mins (T1/2 α); 1hours (T1/2 β); 16hours (T1/2 ɣ); Intranasal: 15–25hours; Transdermal: 20–27hours; Sublingual: 5–13.5hours; Buccal: 3.2–6.4hours'
protein-binding:
  value: 80.0
  value-max: 85.0
  unit: percent
  notes: 80–85%
bioavailability:
  value: 90.0
  value-max: 92.0
  notes: 'Transdermal: 90–92%; Intranasal: 89%; Buccal: 51% (tablets), 71% (film); Sublingual: 54% (Abstral tablets), 76% (spray); Oral: 35%; Inhalation: 56–96%; IM & IV: 100%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.1
  notes: Mostly urinary (metabolites, <10% unchanged drug)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, primarily by CYP3A4; Norfentanyl; Despropionylfentanyl (minor); Hydroxyfentanyl (minor); Hydroxynorfentanyl (minor secondary metabolite)
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
- sedation-respiratory-depression
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/analgesia
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Fentanyl
  url: https://en.wikipedia.org/w/index.php?title=Fentanyl&oldid=1376528965
  revision: 1376528965
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Fentanyl

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fentanyl-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Highly lipophilic synthetic opioid with rapid brain entry, used clinically by every route and responsible for most opioid overdose deaths.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fentanyl*](https://en.wikipedia.org/w/index.php?title=Fentanyl&oldid=1376528965) (revision 1376528965, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6 min | IV: 6mins (T1/2 α); 1hours (T1/2 β); 16hours (T1/2 ɣ); Intranasal: 15–25hours; Transdermal: 20–27hours; Sublingual: 5–13.5hours; Buccal: 3.2–6.4hours |
| Protein binding | 80–85 % | 80–85% |
| Bioavailability | 90–92 % | Transdermal: 90–92%; Intranasal: 89%; Buccal: 51% (tablets), 71% (film); Sublingual: 54% (Abstral tablets), 76% (spray); Oral: 35%; Inhalation: 56–96%; IM & IV: 100% |
| Metabolism | hepatic | Liver, primarily by CYP3A4; Norfentanyl; Despropionylfentanyl (minor); Hydroxyfentanyl (minor); Hydroxynorfentanyl (minor secondary metabolite) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - · fe 0.1 | Mostly urinary (metabolites, <10% unchanged drug) |

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
- [[CYP450 Metabolism]]
