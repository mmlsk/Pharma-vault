---
type: compound
schema-version: 2
compound-id: edoxaban-compound
name: Edoxaban (Savaysa/Lixiana)
aliases:
- Edoxaban
- Savaysa
- Lixiana
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
chembl-id: CHEMBL1269025
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: 14.0
  unit: h
  notes: 10–14 hours
protein-binding:
  value: 55.0
  value-max: null
  unit: percent
  notes: 55%
bioavailability:
  value: 62.0
  value-max: null
  notes: 62%; Tmax 1–2 hours
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 62% feces, 35% urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: minimal CES1, CYP3A4/5, hydrolysis, glucuronidation
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
- needs-compound-review
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- chembl-name-match
pk-source:
  type: wikipedia-infobox
  title: Edoxaban
  url: https://en.wikipedia.org/w/index.php?title=Edoxaban&oldid=1337833755
  revision: 1337833755
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL1269025
  pref-name: EDOXABAN
  molecule-type: Small molecule
  first-approval: 2015
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - B01AF03
  targets: []
  properties:
    full-mwt: 548.07
    mw-freebase: 548.07
    alogp: 1.29
    psa: 136.63
    hba: 8
    hbd: 3
    rtb: 5
    num-ro5-violations: 1
    qed-weighted: 0.48
    full-molformula: C24H30ClN7O4S
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Edoxaban (Savaysa/Lixiana)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `edoxaban-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Edoxaban, Savaysa, Lixiana
- **ChEMBL:** [CHEMBL1269025](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1269025/) · max phase 4 · id via exact ChEMBL name match - confirm

## Source summary

Once-daily factor Xa inhibitor whose dosing depends on renal function and indication.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2015
- **Flags:** black-box warning
- **ATC B01AF03:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Direct factor Xa inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 548.07 | 1.29 | 136.63 | 3/8 | 1 | C24H30ClN7O4S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Edoxaban*](https://en.wikipedia.org/w/index.php?title=Edoxaban&oldid=1337833755) (revision 1337833755, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–14 h | 10–14 hours |
| Protein binding | 55 % | 55% |
| Bioavailability | 62 % | 62%; Tmax 1–2 hours |
| Metabolism | hepatic | minimal CES1, CYP3A4/5, hydrolysis, glucuronidation |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | 62% feces, 35% urine |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Apixaban (Eliquis)]], [[Betrixaban]], [[Rivaroxaban (Xarelto)]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
