---
type: compound
schema-version: 2
compound-id: mitotane-compound
name: Mitotane
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Cytochrome P450 11A1 inhibitor; Cytochrome P450 11B1 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1670
chembl-max-phase: 4
half-life:
  value: 18.0
  value-max: 159.0
  unit: d
  notes: 18–159 days
protein-binding:
  value: 6.0
  value-max: null
  unit: percent
  notes: 6%
bioavailability:
  value: 40.0
  value-max: null
  notes: 40%
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
  title: Mitotane
  url: https://en.wikipedia.org/w/index.php?title=Mitotane&oldid=1369886453
  revision: 1369886453
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1670
  pref-name: MITOTANE
  molecule-type: Small molecule
  first-approval: 1970
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L01XX23
  targets:
  - id: CHEMBL2033
    name: Cholesterol side-chain cleavage enzyme, mitochondrial
    action: INHIBITOR
  - id: CHEMBL1908
    name: Cytochrome P450 11B1, mitochondrial
    action: INHIBITOR
  properties:
    full-mwt: 320.05
    mw-freebase: 320.05
    alogp: 5.93
    psa: 0.0
    hba: 0
    hbd: 0
    rtb: 3
    num-ro5-violations: 1
    qed-weighted: 0.62
    full-molformula: C14H10Cl4
pk-verification:
  source: fda-label
  status: consistent
  set-id: 4046a224-8832-daa2-e063-6294a90a11d7
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4046a224-8832-daa2-e063-6294a90a11d7
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Mitotane

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `mitotane-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1670](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1670/) · max phase 4 · id via Wikipedia infobox

## Source summary

Adrenolytic drug for adrenocortical carcinoma that causes profound, persistent adrenal suppression.

## Mechanism

Cytochrome P450 11A1 inhibitor; Cytochrome P450 11B1 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1970
- **Flags:** black-box warning
- **ATC L01XX23:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › OTHER ANTINEOPLASTIC AGENTS › Other antineoplastic agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 320.05 | 5.93 | 0.0 | 0/0 | 1 | C14H10Cl4 |

**Targets (ChEMBL curated mechanisms):**

- [[Cholesterol side-chain cleavage enzyme, mitochondrial (CHEMBL2033)|Cholesterol side-chain cleavage enzyme, mitochondrial]] - inhibitor · SINGLE PROTEIN
- [[Cytochrome P450 11B1, mitochondrial (CHEMBL1908)|Cytochrome P450 11B1, mitochondrial]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Mitotane*](https://en.wikipedia.org/w/index.php?title=Mitotane&oldid=1369886453) (revision 1369886453, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 18–159 d | 18–159 days |
| Protein binding | 6 % | 6% |
| Bioavailability | 40 % | 40% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 4046a224…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4046a224-8832-daa2-e063-6294a90a11d7), label version 20260303. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 432, 1272, 3816)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Levoketoconazole]] (Cholesterol side-chain cleavage enzyme, mitochondrial; Cytochrome P450 11B1, mitochondrial), [[Aminoglutethimide]] (Cholesterol side-chain cleavage enzyme, mitochondrial), [[Metyrapone (Metopirone)]] (Cytochrome P450 11B1, mitochondrial)
- **Same ATC subgroup:** [[Anagrelide]], [[Celecoxib]], [[Hydroxyurea (hydroxycarbamide)]], [[Masoprocol]], [[Navitoclax (ABT-263)]], [[Tazemetostat]], [[Venetoclax]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
