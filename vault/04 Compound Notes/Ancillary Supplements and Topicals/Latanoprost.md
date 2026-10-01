---
type: compound
schema-version: 2
compound-id: latanoprost-compound
name: Latanoprost
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Prostanoid FP receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1051
chembl-max-phase: 4
half-life:
  value: 17.0
  value-max: null
  unit: min
  notes: 17 minutes (plasma)
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Mainly via kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Activation by ester hydrolysis, deactivation by beta oxidation
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
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Latanoprost
  url: https://en.wikipedia.org/w/index.php?title=Latanoprost&oldid=1356289299
  revision: 1356289299
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1051
  pref-name: LATANOPROST
  molecule-type: Small molecule
  first-approval: 1996
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - S01EE01
  targets:
  - id: CHEMBL1987
    name: Prostaglandin F2-alpha receptor
    action: AGONIST
  properties:
    full-mwt: 432.6
    mw-freebase: 432.6
    alogp: 4.19
    psa: 86.99
    hba: 5
    hbd: 3
    rtb: 13
    num-ro5-violations: 0
    qed-weighted: 0.25
    full-molformula: C26H40O5
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: be74d517-7f73-a74c-e053-2a95a90a3819
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=be74d517-7f73-a74c-e053-2a95a90a3819
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Catiolanze
  ema-number: EMEA/H/C/005933
  url: https://www.ema.europa.eu/en/documents/product-information/catiolanze-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Latanoprost

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `latanoprost-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1051](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1051/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Glaucoma prostaglandin analogue whose eyelash side effect became the point.

## Mechanism

Prostanoid FP receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1996
- **Flags:** prodrug
- **ATC S01EE01:** SENSORY ORGANS › ANTIGLAUCOMA PREPARATIONS AND MIOTICS › Prostaglandin analogues

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 432.6 | 4.19 | 86.99 | 3/5 | 0 | C26H40O5 |

**Targets (ChEMBL curated mechanisms):**

- [[Prostaglandin F2-alpha receptor (CHEMBL1987)|Prostaglandin F2-alpha receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Latanoprost*](https://en.wikipedia.org/w/index.php?title=Latanoprost&oldid=1356289299) (revision 1356289299, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 17 min | 17 minutes (plasma) |
| Metabolism | hepatic | Activation by ester hydrolysis, deactivation by beta oxidation |
| Excretion | - | Mainly via kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set be74d517…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=be74d517-7f73-a74c-e053-2a95a90a3819), label version 20260904. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.283)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Catiolanze*](https://www.ema.europa.eu/en/documents/product-information/catiolanze-epar-product-information_en.pdf) (EMEA/H/C/005933). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 0.283, 0.333)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Bimatoprost (Latisse)]] (Prostaglandin F2-alpha receptor), [[Bimatoprost (topical, Latisse)]] (Prostaglandin F2-alpha receptor), [[Latanoprostene Bunod]] (Prostaglandin F2-alpha receptor), [[Latanoprostene Bunod (latanoprostene-compound)|Latanoprostene Bunod]] (Prostaglandin F2-alpha receptor), [[Tafluprost]] (Prostaglandin F2-alpha receptor), [[Travoprost]] (Prostaglandin F2-alpha receptor)
- **Same ATC subgroup:** [[Bimatoprost (Latisse)]], [[Bimatoprost (topical, Latisse)]], [[Latanoprostene Bunod]], [[Latanoprostene Bunod (latanoprostene-compound)|Latanoprostene Bunod]], [[Tafluprost]], [[Travoprost]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
