---
type: compound
schema-version: 2
compound-id: tigecycline-compound
name: Tigecycline
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
chembl-id: CHEMBL376140
chembl-max-phase: 4
half-life:
  value: 42.4
  value-max: null
  unit: h
  notes: 42.4 hours
protein-binding:
  value: 71.0
  value-max: 89.0
  unit: percent
  notes: 71–89%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 59% Bile duct, 33% kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Not metabolized
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
- identity-formula-match
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Tigecycline
  url: https://en.wikipedia.org/w/index.php?title=Tigecycline&oldid=1354792999
  revision: 1354792999
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL376140
  pref-name: TIGECYCLINE
  molecule-type: Small molecule
  first-approval: 2005
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J01AA12
  targets:
  - id: CHEMBL2363135
    name: Bacterial 70S ribosome
    action: INHIBITOR
  properties:
    full-mwt: 585.66
    mw-freebase: 585.66
    alogp: 0.51
    psa: 205.76
    hba: 11
    hbd: 7
    rtb: 6
    num-ro5-violations: 3
    qed-weighted: 0.18
    full-molformula: C29H39N5O8
  identity-check: formula-match
pk-verification:
  source: fda-label
  status: consistent
  set-id: 6e9a34af-8dee-4ba2-9157-2f5cb46958a9
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6e9a34af-8dee-4ba2-9157-2f5cb46958a9
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Tygacil
  ema-number: EMEA/H/C/000644
  url: https://www.ema.europa.eu/en/documents/product-information/tygacil-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Tigecycline

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tigecycline-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL376140](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL376140/) · max phase 4 · id via Wikipedia infobox · structure check: ≈ same formula, different InChIKey (tautomer/representation)

## Source summary

Inhibits bacterial protein synthesis at the ribosome; spectrum, resistance, and toxicity are agent-specific.

## Mechanism

Bacterial 70S ribosome inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2005
- **Flags:** black-box warning
- **ATC J01AA12:** ANTIINFECTIVES FOR SYSTEMIC USE › TETRACYCLINES › Tetracyclines

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 585.66 | 0.51 | 205.76 | 7/11 | 3 | C29H39N5O8 |

**Targets (ChEMBL curated mechanisms):**

- [[Bacterial 70S ribosome (CHEMBL2363135)|Bacterial 70S ribosome]] - inhibitor · PROTEIN NUCLEIC-ACID COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tigecycline*](https://en.wikipedia.org/w/index.php?title=Tigecycline&oldid=1354792999) (revision 1354792999, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 42.4 h | 42.4 hours |
| Protein binding | 71–89 % | 71–89% |
| Metabolism | - | Not metabolized |
| Excretion | - | 59% Bile duct, 33% kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 6e9a34af…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6e9a34af-8dee-4ba2-9157-2f5cb46958a9), label version 20260217. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0, 12, 24)
> - protein-binding: consistent (label values: 15, 22, 27, 30, 33, 36)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Tygacil*](https://www.ema.europa.eu/en/documents/product-information/tygacil-epar-product-information_en.pdf) (EMEA/H/C/000644). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 42)
> - protein-binding: consistent (SmPC values: 71, 89)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Azithromycin]] (Bacterial 70S ribosome), [[Chloramphenicol]] (Bacterial 70S ribosome), [[Clarithromycin]] (Bacterial 70S ribosome), [[Eravacycline]] (Bacterial 70S ribosome), [[Erythromycin]] (Bacterial 70S ribosome), [[Linezolid]] (Bacterial 70S ribosome), [[Tedizolid]] (Bacterial 70S ribosome), [[Tetracycline]] (Bacterial 70S ribosome)
- **Same ATC subgroup:** [[Eravacycline]], [[Minocycline]], [[Omadacycline]], [[Sarecycline (oral, Seysara)]], [[Tetracycline]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
