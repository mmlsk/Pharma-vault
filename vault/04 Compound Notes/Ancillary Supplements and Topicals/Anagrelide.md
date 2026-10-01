---
type: compound
schema-version: 2
compound-id: anagrelide-compound
name: Anagrelide
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
chembl-id: CHEMBL760
chembl-max-phase: 4
half-life:
  value: 1.3
  value-max: null
  unit: h
  notes: 1.3 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (<1%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, partially through CYP1A2
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- needs-compound-review
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Anagrelide
  url: https://en.wikipedia.org/w/index.php?title=Anagrelide&oldid=1329964098
  revision: 1329964098
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL760
  pref-name: ANAGRELIDE
  molecule-type: Small molecule
  first-approval: 1997
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01XX35
  targets: []
  properties:
    full-mwt: 256.09
    mw-freebase: 256.09
    alogp: 1.93
    psa: 44.7
    hba: 3
    hbd: 1
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.77
    full-molformula: C10H7Cl2N3O
pk-verification:
  source: fda-label
  status: consistent
  set-id: 875cc32a-219c-4b6b-802a-98a47cbc9a78
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=875cc32a-219c-4b6b-802a-98a47cbc9a78
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Anagrelide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `anagrelide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL760](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL760/) · max phase 4 · id via Wikipedia infobox

## Source summary

PDE3 inhibitor used to lower platelet counts in essential thrombocythemia. Its platelet-lowering action is a megakaryocyte effect, separate from the cAMP-mediated antiplatelet one.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1997
- **ATC L01XX35:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › OTHER ANTINEOPLASTIC AGENTS › Other antineoplastic agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 256.09 | 1.93 | 44.7 | 1/3 | 0 | C10H7Cl2N3O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Anagrelide*](https://en.wikipedia.org/w/index.php?title=Anagrelide&oldid=1329964098) (revision 1329964098, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.3 h | 1.3 hours |
| Metabolism | hepatic | Liver, partially through CYP1A2 |
| CYP (metabolised by) | CYP1A2 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine (<1%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 875cc32a…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=875cc32a-219c-4b6b-802a-98a47cbc9a78), label version 20260817. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1.5, 2.5)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Celecoxib]], [[Hydroxyurea (hydroxycarbamide)]], [[Masoprocol]], [[Mitotane]], [[Navitoclax (ABT-263)]], [[Tazemetostat]], [[Venetoclax]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
