---
type: compound
schema-version: 2
compound-id: famotidine-compound
name: Famotidine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Histamine H2 receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL902
chembl-max-phase: 4
half-life:
  value: 2.5
  value-max: 3.5
  unit: h
  notes: 2.5–3.5 hours
protein-binding:
  value: 15.0
  value-max: 20.0
  unit: percent
  notes: 15–20%
bioavailability:
  value: 40.0
  value-max: 45.0
  notes: 'Oral: 40–45%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.3
  notes: Kidney (25–30% unchanged [Oral])
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP1A2
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
  title: Famotidine
  url: https://en.wikipedia.org/w/index.php?title=Famotidine&oldid=1360627089
  revision: 1360627089
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL902
  pref-name: FAMOTIDINE
  molecule-type: Small molecule
  first-approval: 1986
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A02BA03
  - A02BA53
  targets:
  - id: CHEMBL1941
    name: Histamine H2 receptor
    action: ANTAGONIST
  properties:
    full-mwt: 337.46
    mw-freebase: 337.46
    alogp: -0.77
    psa: 175.83
    hba: 6
    hbd: 4
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.29
    full-molformula: C8H15N7O2S3
pk-verification:
  source: fda-label
  status: consistent
  set-id: 669fbd46-cae5-4477-884e-8eca893d2e05
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=669fbd46-cae5-4477-884e-8eca893d2e05
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Famotidine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `famotidine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL902](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL902/) · max phase 4 · id via Wikipedia infobox

## Source summary

Blocks parietal-cell H2 receptors to reduce stimulated gastric acid secretion.

## Mechanism

Histamine H2 receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1986
- **ATC A02BA03:** ALIMENTARY TRACT AND METABOLISM › DRUGS FOR PEPTIC ULCER AND GASTRO-OESOPHAGEAL REFLUX DISEASE (GORD) › H2-receptor antagonists
- **ATC A02BA53:** ALIMENTARY TRACT AND METABOLISM › DRUGS FOR PEPTIC ULCER AND GASTRO-OESOPHAGEAL REFLUX DISEASE (GORD) › H2-receptor antagonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 337.46 | -0.77 | 175.83 | 4/6 | 0 | C8H15N7O2S3 |

**Targets (ChEMBL curated mechanisms):**

- [[Histamine H2 receptor (CHEMBL1941)|Histamine H2 receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Famotidine*](https://en.wikipedia.org/w/index.php?title=Famotidine&oldid=1360627089) (revision 1360627089, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5–3.5 h | 2.5–3.5 hours |
| Protein binding | 15–20 % | 15–20% |
| Bioavailability | 40–45 % | Oral: 40–45% |
| Metabolism | hepatic | CYP1A2 |
| CYP (metabolised by) | CYP1A2 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Famotidine S-oxide |
| Excretion | mainly urinary · fe 0.3 | Kidney (25–30% unchanged [Oral]) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 669fbd46…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=669fbd46-cae5-4477-884e-8eca893d2e05), label version 20260909. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2.5, 3.5)
> - protein-binding: consistent (label values: 20)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Cimetidine]] (Histamine H2 receptor), [[Lafutidine]] (Histamine H2 receptor), [[Ranitidine]] (Histamine H2 receptor)
- **Same ATC subgroup:** [[Cimetidine]], [[Lafutidine]], [[Niperotidine]], [[Ranitidine]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
