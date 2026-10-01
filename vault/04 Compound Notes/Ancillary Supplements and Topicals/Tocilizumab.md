---
type: compound
schema-version: 2
compound-id: tocilizumab-compound
name: Tocilizumab
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Interleukin-6 receptor alpha subunit inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1237022
chembl-max-phase: 4
half-life:
  value: 8.0
  value-max: 14.0
  unit: d
  notes: 8–14 days during steady state (dependent on concentration)
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- identity-inn-ema
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Tocilizumab
  url: https://en.wikipedia.org/w/index.php?title=Tocilizumab&oldid=1360662761
  revision: 1360662761
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1237022
  pref-name: TOCILIZUMAB
  molecule-type: Antibody
  first-approval: 2005
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L04AC07
  targets:
  - id: CHEMBL2364155
    name: Interleukin-6 receptor subunit alpha
    action: INHIBITOR
  properties: {}
  identity-check: inn-match-ema
pk-verification:
  source: fda-label
  status: consistent
  set-id: 581c288f-8015-40ef-a4c3-683c96db193d
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=581c288f-8015-40ef-a4c3-683c96db193d
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: no-smpc-text
  product: RoActemra
  ema-number: EMEA/H/C/000955
  url: null
  chpl-url: null
  checked: '2026-10-01'
  fields: {}
---

# Tocilizumab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tocilizumab-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1237022](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1237022/) · max phase 4 · id via Wikipedia infobox · structure check: INN matches an EU-authorised product (no comparable structure)

## Source summary

IL-6 receptor antibody used in rheumatoid arthritis, giant cell arteritis and cytokine release syndrome.

## Mechanism

Interleukin-6 receptor alpha subunit inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 2005
- **Flags:** black-box warning
- **ATC L04AC07:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Interleukin inhibitors

**Targets (ChEMBL curated mechanisms):**

- [[Interleukin-6 receptor subunit alpha (CHEMBL2364155)|Interleukin-6 receptor subunit alpha]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tocilizumab*](https://en.wikipedia.org/w/index.php?title=Tocilizumab&oldid=1360662761) (revision 1360662761, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8–14 d | 8–14 days during steady state (dependent on concentration) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 581c288f…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=581c288f-8015-40ef-a4c3-683c96db193d), label version 20260727. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 48, 96, 100.8, 120, 189.6, 240)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Sarilumab]] (Interleukin-6 receptor subunit alpha)
- **Same ATC subgroup:** [[Anakinra]], [[Basiliximab]], [[Bimekizumab]], [[Briakinumab]], [[Brodalumab]], [[Canakinumab (Ilaris)]], [[Guselkumab]], [[Ixekizumab]], [[Mirikizumab]], [[Netakimab]], [[Olokizumab]], [[Rilonacept]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
