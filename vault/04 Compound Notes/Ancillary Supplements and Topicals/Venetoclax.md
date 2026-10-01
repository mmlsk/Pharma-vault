---
type: compound
schema-version: 2
compound-id: venetoclax-compound
name: Venetoclax
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Apoptosis regulator Bcl-2 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3137309
chembl-max-phase: 4
half-life:
  value: 26.0
  value-max: null
  unit: h
  notes: ~26 hours
protein-binding:
  value: 99.9
  value-max: null
  unit: percent
  notes: '>99.9%'
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: 0.208
  notes: Feces (>99.9%; 20.8% as unchanged venetoclax)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4, CYP3A5)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Venetoclax
  url: https://en.wikipedia.org/w/index.php?title=Venetoclax&oldid=1349607450
  revision: 1349607450
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL3137309
  pref-name: VENETOCLAX
  molecule-type: Small molecule
  first-approval: 2016
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01XX52
  targets:
  - id: CHEMBL4860
    name: Apoptosis regulator Bcl-2
    action: INHIBITOR
  properties:
    full-mwt: 868.46
    mw-freebase: 868.46
    alogp: 8.66
    psa: 172.03
    hba: 11
    hbd: 3
    rtb: 13
    num-ro5-violations: 3
    qed-weighted: 0.08
    full-molformula: C45H50ClN7O7S
pk-verification:
  source: fda-label
  status: consistent
  set-id: b118a40d-6b56-cee3-10f6-ded821a97018
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b118a40d-6b56-cee3-10f6-ded821a97018
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Venetoclax

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `venetoclax-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL3137309](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3137309/) · max phase 4 · id via Wikipedia infobox

## Source summary

Selective BCL-2 inhibitor; the first clinically successful BH3 mimetic. Tumour lysis risk requires ramp-up dosing.

## Mechanism

Apoptosis regulator Bcl-2 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2016
- **ATC L01XX52:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › OTHER ANTINEOPLASTIC AGENTS › Other antineoplastic agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 868.46 | 8.66 | 172.03 | 3/11 | 3 | C45H50ClN7O7S |

**Targets (ChEMBL curated mechanisms):**

- [[Apoptosis regulator Bcl-2 (CHEMBL4860)|Apoptosis regulator Bcl-2]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Venetoclax*](https://en.wikipedia.org/w/index.php?title=Venetoclax&oldid=1349607450) (revision 1349607450, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 26 h | ~26 hours |
| Protein binding | 99.9 % | >99.9% |
| Metabolism | hepatic | Liver (CYP3A4, CYP3A5) |
| CYP (metabolised by) | CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal · fe 0.208 | Feces (>99.9%; 20.8% as unchanged venetoclax) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set b118a40d…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b118a40d-6b56-cee3-10f6-ded821a97018), label version 20260520. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 26)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Navitoclax (ABT-263)]] (Apoptosis regulator Bcl-2)
- **Same ATC subgroup:** [[Anagrelide]], [[Celecoxib]], [[Hydroxyurea (hydroxycarbamide)]], [[Masoprocol]], [[Mitotane]], [[Navitoclax (ABT-263)]], [[Tazemetostat]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others), CYP3A5 (+13 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
