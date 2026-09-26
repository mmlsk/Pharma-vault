---
type: compound
schema-version: 2
compound-id: armodafinil-compound
name: Armodafinil (Nuvigil)
aliases:
- Armodafinil
- Nuvigil
cluster: Nootropics
group: nootropic
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
  value: 10.0
  value-max: 17.0
  unit: h
  notes: 10–17hours
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: Unknown (but for modafinil is moderate, primarily to albumin)
bioavailability:
  value: 40.0
  value-max: 65.0
  notes: Unknown (due to poor aqueous solubility; but modafinil is 40–65% based on urinary excretion)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Unknown (but modafinil is excreted 80% in urine and 1.0% in feces)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, including CYP3A4 and other enzymes (hydrolytic amidation, sulfoxidation, aromatic ring hydroxylation, and glucuronide conjugation)
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
- cns-activity
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/nootropic
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Armodafinil
  url: https://en.wikipedia.org/w/index.php?title=Armodafinil&oldid=1370773396
  revision: 1370773396
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Armodafinil (Nuvigil)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `armodafinil-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **Aliases:** Armodafinil, Nuvigil

## Source summary

The longer-lived R-enantiomer of modafinil, with the same dopamine transporter mechanism and a flatter plasma curve. Differences from modafinil are pharmacokinetic rather than pharmacodynamic.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Armodafinil*](https://en.wikipedia.org/w/index.php?title=Armodafinil&oldid=1370773396) (revision 1370773396, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–17 h | 10–17hours |
| Protein binding | - | Unknown (but for modafinil is moderate, primarily to albumin) |
| Bioavailability | 40–65 % | Unknown (due to poor aqueous solubility; but modafinil is 40–65% based on urinary excretion) |
| Metabolism | hepatic | Liver, including CYP3A4 and other enzymes (hydrolytic amidation, sulfoxidation, aromatic ring hydroxylation, and glucuronide conjugation) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • Armodafinil acid; • Modafinil sulfone |
| Excretion | - | Unknown (but modafinil is excreted 80% in urine and 1.0% in feces) |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
