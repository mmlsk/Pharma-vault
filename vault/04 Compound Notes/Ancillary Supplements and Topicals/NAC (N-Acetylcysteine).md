---
type: compound
schema-version: 2
compound-id: nac-compound
name: NAC (N-Acetylcysteine)
aliases:
- NAC
- N-Acetylcysteine
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
  value: 5.6
  value-max: null
  unit: h
  notes: 5.6 hours
protein-binding:
  value: 50.0
  value-max: 83.0
  unit: percent
  notes: 50 to 83%
bioavailability:
  value: 6.0
  value-max: 10.0
  notes: 6–10% (Oral); nearly 100% (intravenous)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney (30%), faecal (3%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
dosage-ranges: {}
cyp-interactions:
  substrates: []
  inhibitors: []
  inducers: []
  transporters: []
  notes: null
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
  title: Acetylcysteine
  url: https://en.wikipedia.org/w/index.php?title=Acetylcysteine&oldid=1375254688
  revision: 1375254688
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# NAC (N-Acetylcysteine)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nac-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** NAC, N-Acetylcysteine

## Source summary

Glutathione precursor and antioxidant, the clinical antidote for acetaminophen overdose; studied for broader hepatoprotection against drug-induced liver injury.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Acetylcysteine*](https://en.wikipedia.org/w/index.php?title=Acetylcysteine&oldid=1375254688) (revision 1375254688, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5.6 h | 5.6 hours |
| Protein binding | 50–83 % | 50 to 83% |
| Bioavailability | 6–10 % | 6–10% (Oral); nearly 100% (intravenous) |
| Metabolism | hepatic | Liver |
| Excretion | - | Kidney (30%), faecal (3%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
