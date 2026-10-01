---
type: compound
schema-version: 2
compound-id: etanercept-compound
name: Etanercept
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: TNF-alpha inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201572
chembl-max-phase: 4
half-life:
  value: 70.0
  value-max: 132.0
  unit: h
  notes: 70–132 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 58.0
  value-max: 76.0
  notes: 58–76% (SC)
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
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Etanercept
  url: https://en.wikipedia.org/w/index.php?title=Etanercept&oldid=1368878362
  revision: 1368878362
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201572
  pref-name: ETANERCEPT
  molecule-type: Protein
  first-approval: 1998
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L04AB01
  targets:
  - id: CHEMBL1825
    name: Tumor necrosis factor
    action: INHIBITOR
  properties: {}
  identity-check: inn-match-ema
pk-verification:
  source: fda-label
  status: consistent
  set-id: a002b40c-097d-47a5-957f-7a7b1807af7f
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a002b40c-097d-47a5-957f-7a7b1807af7f
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Enbrel
  ema-number: EMEA/H/C/000262
  url: https://www.ema.europa.eu/en/documents/product-information/enbrel-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Etanercept

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `etanercept-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1201572](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201572/) · max phase 4 · id via Wikipedia infobox · structure check: INN matches an EU-authorised product (no comparable structure)

## Source summary

Neutralizes TNF or its receptor signaling to suppress systemic inflammation, increasing susceptibility to selected infections.

## Mechanism

TNF-alpha inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 1998
- **Flags:** black-box warning
- **ATC L04AB01:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Tumor necrosis factor alpha (TNF-alpha) inhibitors

**Targets (ChEMBL curated mechanisms):**

- [[Tumor necrosis factor (CHEMBL1825)|Tumor necrosis factor]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Etanercept*](https://en.wikipedia.org/w/index.php?title=Etanercept&oldid=1368878362) (revision 1368878362, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 70–132 h | 70–132 hours |
| Bioavailability | 58–76 % | 58–76% (SC) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set a002b40c…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a002b40c-097d-47a5-957f-7a7b1807af7f), label version 20260511. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 102)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Enbrel*](https://www.ema.europa.eu/en/documents/product-information/enbrel-epar-product-information_en.pdf) (EMEA/H/C/000262). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 70)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Adalimumab]] (Tumor necrosis factor), [[Afelimomab]] (Tumor necrosis factor), [[Certolizumab Pegol]] (Tumor necrosis factor), [[Certolizumab Pegol]] (Tumor necrosis factor), [[Golimumab]] (Tumor necrosis factor), [[Infliximab]] (Tumor necrosis factor), [[Infliximab-abda]] (Tumor necrosis factor), [[Onercept]] (Tumor necrosis factor), [[Ozoralizumab]] (Tumor necrosis factor)
- **Same ATC subgroup:** [[Adalimumab]], [[Afelimomab]], [[Certolizumab Pegol]], [[Certolizumab Pegol]], [[Golimumab]], [[Infliximab]], [[Infliximab-abda]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
