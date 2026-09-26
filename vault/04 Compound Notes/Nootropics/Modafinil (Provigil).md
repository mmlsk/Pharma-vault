---
type: compound
schema-version: 2
compound-id: modafinil-compound
name: Modafinil (Provigil)
aliases:
- Modafinil
- Provigil
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
  value: 12.0
  value-max: 15.0
  unit: h
  notes: 'Modafinil: 12–15 hour; Armodafinil: 10–17 hour; Esmodafinil: 3–5 hour'
protein-binding:
  value: 60.0
  value-max: null
  unit: percent
  notes: ~60% (mainly to albumin)
bioavailability:
  value: 40.0
  value-max: 65.0
  notes: 40–65 % (based on urinary excretion)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: 80% (≤10% as modafinil, 35–51 % as modafinil acid); Feces: 1.0%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (amide hydrolysis, S-oxidation, aromatic ring hydroxylation, glucuronide conjugation; CYP1A2, CYP2B6, CYP2C9, CYP2C19, CYP3A4, CYP3A5 involved)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2B6
  - CYP2C19
  - CYP2C9
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2B6, CYP2C19, CYP2C9, CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Modafinil
  url: https://en.wikipedia.org/w/index.php?title=Modafinil&oldid=1375967552
  revision: 1375967552
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Modafinil (Provigil)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `modafinil-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **Aliases:** Modafinil, Provigil

## Source summary

Wake-promoting agent structurally unrelated to the amphetamines. A weak dopamine transporter inhibitor that occupies roughly half of striatal DAT at normal doses -- the finding that complicates its reputation as having no abuse liability.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Modafinil*](https://en.wikipedia.org/w/index.php?title=Modafinil&oldid=1375967552) (revision 1375967552, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12–15 h | Modafinil: 12–15 hour; Armodafinil: 10–17 hour; Esmodafinil: 3–5 hour |
| Protein binding | 60 % | ~60% (mainly to albumin) |
| Bioavailability | 40–65 % | 40–65 % (based on urinary excretion) |
| Metabolism | hepatic | Liver (amide hydrolysis, S-oxidation, aromatic ring hydroxylation, glucuronide conjugation; CYP1A2, CYP2B6, CYP2C9, CYP2C19, CYP3A4, CYP3A5 involved) |
| CYP (metabolised by) | CYP1A2, CYP2B6, CYP2C19, CYP2C9, CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Modafinil acid (35–65 %); Modafinil sulfone |
| Excretion | mainly urinary | Urine: 80% (≤10% as modafinil, 35–51 % as modafinil acid); Feces: 1.0% |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
