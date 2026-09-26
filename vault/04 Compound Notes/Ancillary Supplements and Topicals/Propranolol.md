---
type: compound
schema-version: 2
compound-id: propranolol-compound
name: Propranolol
aliases: []
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
  value-max: null
  unit: h
  notes: ~4hours (range 3–8hours)
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: 90% (albumin and α1-acid glycoprotein)
bioavailability:
  value: 25.0
  value-max: null
  notes: 'Oral: 25%; Sublingual: 63%; Intranasal: ~100%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: 91%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver (extensive) CYP1A2, CYP2D6; minor: CYP2C19, CYP3A4; aromatic hydroxylation (mainly 4-hydroxylation), N-dealkylation, side-chain oxidation, glucuronidation'
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
  title: Propranolol
  url: https://en.wikipedia.org/w/index.php?title=Propranolol&oldid=1369411043
  revision: 1369411043
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Propranolol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `propranolol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Classic non-selective beta-blocker; blocks rather than activates beta-adrenergic receptors, the exact opposite mechanism from beta-agonists like clenbuterol -- used clinically to reduce physical tremor and performance anxiety.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Propranolol*](https://en.wikipedia.org/w/index.php?title=Propranolol&oldid=1369411043) (revision 1369411043, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4 h | ~4hours (range 3–8hours) |
| Protein binding | 90 % | 90% (albumin and α1-acid glycoprotein) |
| Bioavailability | 25 % | Oral: 25%; Sublingual: 63%; Intranasal: ~100% |
| Metabolism | hepatic | Liver (extensive) CYP1A2, CYP2D6; minor: CYP2C19, CYP3A4; aromatic hydroxylation (mainly 4-hydroxylation), N-dealkylation, side-chain oxidation, glucuronidation |
| CYP (metabolised by) | CYP1A2, CYP2C19, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | N-Desisopropylpropranolol; 4'-Hydroxypropanolol |
| Excretion | mainly urinary | Urine: 91% |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
