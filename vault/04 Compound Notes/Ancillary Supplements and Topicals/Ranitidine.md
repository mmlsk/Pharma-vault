---
type: compound
schema-version: 2
compound-id: ranitidine-compound
name: Ranitidine
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
chembl-id: CHEMBL1790041
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 3.0
  unit: h
  notes: 2–3 hours
protein-binding:
  value: 15.0
  value-max: null
  unit: percent
  notes: 15%
bioavailability:
  value: 50.0
  value-max: null
  notes: 50% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 30–70% kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver: FMOs, including FMO3; other enzymes'
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
- identity-stereo-check
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Ranitidine
  url: https://en.wikipedia.org/w/index.php?title=Ranitidine&oldid=1375228960
  revision: 1375228960
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1790041
  pref-name: RANITIDINE
  molecule-type: Small molecule
  first-approval: 1983
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A02BA02
  targets:
  - id: CHEMBL1941
    name: Histamine H2 receptor
    action: ANTAGONIST
  properties:
    full-mwt: 314.41
    mw-freebase: 314.41
    alogp: 1.46
    psa: 83.58
    hba: 7
    hbd: 2
    rtb: 10
    num-ro5-violations: 0
    qed-weighted: 0.38
    full-molformula: C13H22N4O3S
  identity-check: connectivity-match
pk-verification:
  source: fda-label
  status: consistent
  set-id: b38a3332-5c54-453f-aeb7-070f830955c2
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b38a3332-5c54-453f-aeb7-070f830955c2
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Ranitidine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ranitidine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1790041](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1790041/) · max phase 4 · id via Wikipedia infobox · structure check: ⚠️ same skeleton, stereo/isotope layer differs

## Source summary

Blocks parietal-cell H2 receptors to reduce stimulated gastric acid secretion; withdrawn in many markets over NDMA contamination.

## Mechanism

Histamine H2 receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1983
- **ATC A02BA02:** ALIMENTARY TRACT AND METABOLISM › DRUGS FOR PEPTIC ULCER AND GASTRO-OESOPHAGEAL REFLUX DISEASE (GORD) › H2-receptor antagonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 314.41 | 1.46 | 83.58 | 2/7 | 0 | C13H22N4O3S |

**Targets (ChEMBL curated mechanisms):**

- [[Histamine H2 receptor (CHEMBL1941)|Histamine H2 receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ranitidine*](https://en.wikipedia.org/w/index.php?title=Ranitidine&oldid=1375228960) (revision 1375228960, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–3 h | 2–3 hours |
| Protein binding | 15 % | 15% |
| Bioavailability | 50 % | 50% (by mouth) |
| Metabolism | hepatic | Liver: FMOs, including FMO3; other enzymes |
| Excretion | mainly urinary | 30–70% kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set b38a3332…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b38a3332-5c54-453f-aeb7-070f830955c2), label version 20260501. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2.5, 3, 4, 4.8)
> - protein-binding: consistent (label values: 15)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Cimetidine]] (Histamine H2 receptor), [[Famotidine]] (Histamine H2 receptor), [[Lafutidine]] (Histamine H2 receptor)
- **Same ATC subgroup:** [[Cimetidine]], [[Famotidine]], [[Lafutidine]], [[Niperotidine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
