---
type: compound
schema-version: 2
compound-id: trazodone-compound
name: Trazodone (Desyrel)
aliases:
- Trazodone
- Desyrel
cluster: Ancillary Supplements and Topicals
group: ancillary
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
  value: 4.0
  value-max: 15.0
  unit: h
  notes: '• Trazodone (IR): 4–15 hours; • Trazodone (ER): 9–13 hours; • mCPP: 3–16 hours'
protein-binding:
  value: 89.0
  value-max: 95.0
  unit: percent
  notes: 89–95%
bioavailability:
  value: 63.0
  value-max: 80.0
  notes: 'By mouth: 63–80%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 'Urine: 70–75%; Feces: 21%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4, CYP2D6, CYP1A2?)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Trazodone
  url: https://en.wikipedia.org/w/index.php?title=Trazodone&oldid=1372334694
  revision: 1372334694
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Trazodone (Desyrel)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `trazodone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Trazodone, Desyrel

## Source summary

Serotonin antagonist and reuptake inhibitor, licensed as an antidepressant but overwhelmingly prescribed off-label at low doses for sleep.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Trazodone*](https://en.wikipedia.org/w/index.php?title=Trazodone&oldid=1372334694) (revision 1372334694, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4–15 h | • Trazodone (IR): 4–15 hours; • Trazodone (ER): 9–13 hours; • mCPP: 3–16 hours |
| Protein binding | 89–95 % | 89–95% |
| Bioavailability | 63–80 % | By mouth: 63–80% |
| Metabolism | hepatic | Liver (CYP3A4, CYP2D6, CYP1A2?) |
| CYP (metabolised by) | CYP1A2, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | mCPP |
| Excretion | - | Urine: 70–75%; Feces: 21% |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
