---
type: compound
schema-version: 2
compound-id: cimetidine-compound
name: Cimetidine
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
chembl-id: CHEMBL30
chembl-max-phase: 4
half-life:
  value: 123.0
  value-max: null
  unit: min
  notes: 123 minutes (~2 hours)
protein-binding:
  value: 13.0
  value-max: 25.0
  unit: percent
  notes: 13–25%
bioavailability:
  value: 60.0
  value-max: 70.0
  notes: 60–70%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine
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
  title: Cimetidine
  url: https://en.wikipedia.org/w/index.php?title=Cimetidine&oldid=1371790419
  revision: 1371790419
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL30
  pref-name: CIMETIDINE
  molecule-type: Small molecule
  first-approval: 1977
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A02BA01
  - A02BA51
  targets:
  - id: CHEMBL1941
    name: Histamine H2 receptor
    action: ANTAGONIST
  properties:
    full-mwt: 252.35
    mw-freebase: 252.35
    alogp: 0.6
    psa: 88.89
    hba: 4
    hbd: 3
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.23
    full-molformula: C10H16N6S
pk-verification:
  source: fda-label
  status: consistent
  set-id: 06c0a509-026f-44e0-9975-a94a8de51d43
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=06c0a509-026f-44e0-9975-a94a8de51d43
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Cimetidine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cimetidine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL30](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL30/) · max phase 4 · id via Wikipedia infobox

## Source summary

Blocks parietal-cell H2 receptors to reduce stimulated gastric acid secretion; notable CYP inhibition and antiandrogenic effect.

## Mechanism

Histamine H2 receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1977
- **ATC A02BA01:** ALIMENTARY TRACT AND METABOLISM › DRUGS FOR PEPTIC ULCER AND GASTRO-OESOPHAGEAL REFLUX DISEASE (GORD) › H2-receptor antagonists
- **ATC A02BA51:** ALIMENTARY TRACT AND METABOLISM › DRUGS FOR PEPTIC ULCER AND GASTRO-OESOPHAGEAL REFLUX DISEASE (GORD) › H2-receptor antagonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 252.35 | 0.6 | 88.89 | 3/4 | 0 | C10H16N6S |

**Targets (ChEMBL curated mechanisms):**

- [[Histamine H2 receptor (CHEMBL1941)|Histamine H2 receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cimetidine*](https://en.wikipedia.org/w/index.php?title=Cimetidine&oldid=1371790419) (revision 1371790419, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 123 min | 123 minutes (~2 hours) |
| Protein binding | 13–25 % | 13–25% |
| Bioavailability | 60–70 % | 60–70% |
| Metabolism | hepatic | Liver |
| Metabolites | - | • Cimetidine sulfoxide; • Hydroxycimetidine; • Guanyl urea cimetidine |
| Excretion | mainly urinary | Urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 06c0a509…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=06c0a509-026f-44e0-9975-a94a8de51d43), label version 20260715. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Famotidine]] (Histamine H2 receptor), [[Lafutidine]] (Histamine H2 receptor), [[Ranitidine]] (Histamine H2 receptor)
- **Same ATC subgroup:** [[Famotidine]], [[Lafutidine]], [[Niperotidine]], [[Ranitidine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
