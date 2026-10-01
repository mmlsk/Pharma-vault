---
type: compound
schema-version: 2
compound-id: clarithromycin-compound
name: Clarithromycin
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Bacterial 70S ribosome inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1741
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: 4.0
  unit: h
  notes: 3–4 h
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: Low binding
bioavailability:
  value: 50.0
  value-max: null
  notes: 50%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
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
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Clarithromycin
  url: https://en.wikipedia.org/w/index.php?title=Clarithromycin&oldid=1375765210
  revision: 1375765210
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1741
  pref-name: CLARITHROMYCIN
  molecule-type: Small molecule
  first-approval: 1991
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01FA09
  targets:
  - id: CHEMBL2363135
    name: Bacterial 70S ribosome
    action: INHIBITOR
  properties:
    full-mwt: 747.96
    mw-freebase: 747.96
    alogp: 2.44
    psa: 182.91
    hba: 14
    hbd: 4
    rtb: 8
    num-ro5-violations: 2
    qed-weighted: 0.27
    full-molformula: C38H69NO13
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 9d5848f0-e9f0-4112-a7ca-bcc8ea2e69c6
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=9d5848f0-e9f0-4112-a7ca-bcc8ea2e69c6
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Clarithromycin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `clarithromycin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1741](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1741/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits bacterial protein synthesis at the ribosome; spectrum, resistance, and toxicity are agent-specific.

## Mechanism

Bacterial 70S ribosome inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1991
- **ATC J01FA09:** ANTIINFECTIVES FOR SYSTEMIC USE › MACROLIDES, LINCOSAMIDES AND STREPTOGRAMINS › Macrolides

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 747.96 | 2.44 | 182.91 | 4/14 | 2 | C38H69NO13 |

**Targets (ChEMBL curated mechanisms):**

- [[Bacterial 70S ribosome (CHEMBL2363135)|Bacterial 70S ribosome]] - inhibitor · PROTEIN NUCLEIC-ACID COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Clarithromycin*](https://en.wikipedia.org/w/index.php?title=Clarithromycin&oldid=1375765210) (revision 1375765210, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–4 h | 3–4 h |
| Protein binding | - | Low binding |
| Bioavailability | 50 % | 50% |
| Metabolism | hepatic | Liver |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 9d5848f0…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=9d5848f0-e9f0-4112-a7ca-bcc8ea2e69c6), label version 20260624. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 3, 4, 5, 6, 7, 8)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Azithromycin]] (Bacterial 70S ribosome), [[Chloramphenicol]] (Bacterial 70S ribosome), [[Eravacycline]] (Bacterial 70S ribosome), [[Erythromycin]] (Bacterial 70S ribosome), [[Linezolid]] (Bacterial 70S ribosome), [[Tedizolid]] (Bacterial 70S ribosome), [[Tetracycline]] (Bacterial 70S ribosome), [[Tigecycline]] (Bacterial 70S ribosome)
- **Same ATC subgroup:** [[Azithromycin]], [[Erythromycin]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
