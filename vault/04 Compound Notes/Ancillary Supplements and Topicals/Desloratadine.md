---
type: compound
schema-version: 2
compound-id: desloratadine-compound
name: Desloratadine
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
chembl-id: CHEMBL1172
chembl-max-phase: 4
half-life:
  value: 27.0
  value-max: null
  unit: h
  notes: 27 hours, 33.7 hours in elderly patients
protein-binding:
  value: 83.0
  value-max: 87.0
  unit: percent
  notes: 83–87%
bioavailability:
  value: null
  value-max: null
  notes: Rapidly absorbed
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 40% as conjugated metabolites into urine; Similar amount into the feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: UGT2B10, CYP2C8
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C8
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C8 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Desloratadine
  url: https://en.wikipedia.org/w/index.php?title=Desloratadine&oldid=1357378936
  revision: 1357378936
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1172
  pref-name: DESLORATADINE
  molecule-type: Small molecule
  first-approval: 2001
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - R06AX27
  targets:
  - id: CHEMBL231
    name: Histamine H1 receptor
    action: ANTAGONIST
  properties:
    full-mwt: 310.83
    mw-freebase: 310.83
    alogp: 4.02
    psa: 24.92
    hba: 2
    hbd: 1
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.79
    full-molformula: C19H19ClN2
pk-verification:
  source: fda-label
  status: consistent
  set-id: 21174c0f-9204-4c75-b6e6-2f9ada5b535d
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=21174c0f-9204-4c75-b6e6-2f9ada5b535d
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Desloratadine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `desloratadine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1172](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1172/) · max phase 4 · id via source catalogue

## Source summary

Histamine H1 receptor antagonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1172).

## Mechanism

Histamine H1 receptor antagonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2001
- **ATC R06AX27:** RESPIRATORY SYSTEM › ANTIHISTAMINES FOR SYSTEMIC USE › Other antihistamines for systemic use

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 310.83 | 4.02 | 24.92 | 1/2 | 0 | C19H19ClN2 |

**Targets (ChEMBL curated mechanisms):**

- [[Histamine H1 receptor (CHEMBL231)|Histamine H1 receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Desloratadine*](https://en.wikipedia.org/w/index.php?title=Desloratadine&oldid=1357378936) (revision 1357378936, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 27 h | 27 hours, 33.7 hours in elderly patients |
| Protein binding | 83–87 % | 83–87% |
| Bioavailability | - | Rapidly absorbed |
| Metabolism | hepatic | UGT2B10, CYP2C8 |
| CYP (metabolised by) | CYP2C8 | roles as inhibitor/inducer not assessed |
| Metabolites | - | 3-Hydroxydesloratadine |
| Excretion | - | 40% as conjugated metabolites into urine; Similar amount into the feces |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 21174c0f…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=21174c0f-9204-4c75-b6e6-2f9ada5b535d), label version 20260826. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 27, 33.7, 50, 336)
> - protein-binding: consistent (label values: 82, 85, 87, 89)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acrivastine]] (Histamine H1 receptor), [[Alcaftadine]] (Histamine H1 receptor), [[Astemizole]] (Histamine H1 receptor), [[Betahistine]] (Histamine H1 receptor), [[Bilastine]] (Histamine H1 receptor), [[Chlorphenoxamine]] (Histamine H1 receptor), [[Cinnarizine]] (Histamine H1 receptor), [[Dibenzepin]] (Histamine H1 receptor), [[Dimenhydrinate]] (Histamine H1 receptor), [[Dimethindene]] (Histamine H1 receptor), [[Doxepin]] (Histamine H1 receptor), [[Doxepin, low dose (Silenor)]] (Histamine H1 receptor)
- **Same ATC subgroup:** [[Acrivastine]], [[Antazoline]], [[Astemizole]], [[Azatadine]], [[Azelastine]], [[Bilastine]], [[Cyproheptadine]], [[Ebastine]], [[Epinastine]], [[Fexofenadine]], [[Ketotifen]], [[Loratadine]]
- **Shared CYP substrate pool:** CYP2C8 (+15 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
