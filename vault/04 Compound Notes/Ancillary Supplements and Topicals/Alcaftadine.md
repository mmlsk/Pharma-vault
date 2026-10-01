---
type: compound
schema-version: 2
compound-id: alcaftadine-compound
name: Alcaftadine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Histamine H1 receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201747
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: null
  unit: h
  notes: ~2 hrs
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Alcaftadine
  url: https://en.wikipedia.org/w/index.php?title=Alcaftadine&oldid=1329074214
  revision: 1329074214
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1201747
  pref-name: ALCAFTADINE
  molecule-type: Small molecule
  first-approval: 2010
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - S01GX11
  targets:
  - id: CHEMBL231
    name: Histamine H1 receptor
    action: ANTAGONIST
  properties:
    full-mwt: 307.4
    mw-freebase: 307.4
    alogp: 2.78
    psa: 38.13
    hba: 4
    hbd: 0
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.76
    full-molformula: C19H21N3O
pk-verification:
  source: fda-label
  status: consistent
  set-id: 17d37e8d-7825-424b-b6ca-0a85d0bf4694
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=17d37e8d-7825-424b-b6ca-0a85d0bf4694
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Alcaftadine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `alcaftadine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1201747](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201747/) · max phase 4 · id via source catalogue

## Source summary

Histamine H1 receptor antagonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1201747).

## Mechanism

Histamine H1 receptor antagonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2010
- **ATC S01GX11:** SENSORY ORGANS › DECONGESTANTS AND ANTIALLERGICS › Other antiallergics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 307.4 | 2.78 | 38.13 | 0/4 | 0 | C19H21N3O |

**Targets (ChEMBL curated mechanisms):**

- [[Histamine H1 receptor (CHEMBL231)|Histamine H1 receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Alcaftadine*](https://en.wikipedia.org/w/index.php?title=Alcaftadine&oldid=1329074214) (revision 1329074214, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | ~2 hrs |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 17d37e8d…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=17d37e8d-7825-424b-b6ca-0a85d0bf4694), label version 20200601. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acrivastine]] (Histamine H1 receptor), [[Astemizole]] (Histamine H1 receptor), [[Betahistine]] (Histamine H1 receptor), [[Bilastine]] (Histamine H1 receptor), [[Chlorphenoxamine]] (Histamine H1 receptor), [[Cinnarizine]] (Histamine H1 receptor), [[Desloratadine]] (Histamine H1 receptor), [[Dibenzepin]] (Histamine H1 receptor), [[Dimenhydrinate]] (Histamine H1 receptor), [[Dimethindene]] (Histamine H1 receptor), [[Doxepin]] (Histamine H1 receptor), [[Doxepin, low dose (Silenor)]] (Histamine H1 receptor)
- **Same ATC subgroup:** [[Azelastine]], [[Bilastine]], [[Cetirizine]], [[Emedastine]], [[Epinastine]], [[Ketotifen]], [[Levocabastine]], [[Olopatadine]], [[Sodium Cromoglicate]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
