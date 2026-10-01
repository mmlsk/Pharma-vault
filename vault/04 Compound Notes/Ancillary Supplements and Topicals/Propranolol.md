---
type: compound
schema-version: 2
compound-id: propranolol-compound
name: Propranolol
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL27
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: null
  unit: h
  notes: ~4 hours (range 3–8 hours)
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: 90% (albumin and α1-acid glycoprotein)
bioavailability:
  value: 25.0
  value-max: null
  notes: 'Oral: 25%; Sublingual: 63%; Intranasal: ~100%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: 91%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver (extensive) CYP1A2, CYP2D6; minor: CYP2C19, CYP3A4; aromatic hydroxylation (mainly 4-hydroxylation), N-dealkylation, side-chain oxidation, glucuronidation'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2C19
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2C19, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Propranolol
  url: https://en.wikipedia.org/w/index.php?title=Propranolol&oldid=1369411043
  revision: 1369411043
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL27
  pref-name: PROPRANOLOL
  molecule-type: Small molecule
  first-approval: 1967
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C07AA05
  targets: []
  properties:
    full-mwt: 259.35
    mw-freebase: 259.35
    alogp: 2.58
    psa: 41.49
    hba: 3
    hbd: 2
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.84
    full-molformula: C16H21NO2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 54dd0fad-64ee-788f-e063-6394a90ac88e
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=54dd0fad-64ee-788f-e063-6394a90ac88e
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Hemangiol
  ema-number: EMEA/H/C/002621
  url: https://www.ema.europa.eu/en/documents/product-information/hemangiol-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Propranolol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `propranolol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL27](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL27/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Classic non-selective beta-blocker; blocks rather than activates beta-adrenergic receptors, the exact opposite mechanism from beta-agonists like clenbuterol -- used clinically to reduce physical tremor and performance anxiety.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1967
- **Flags:** black-box warning
- **ATC C07AA05:** CARDIOVASCULAR SYSTEM › BETA BLOCKING AGENTS › Beta blocking agents, non-selective

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 259.35 | 2.58 | 41.49 | 2/3 | 0 | C16H21NO2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Propranolol*](https://en.wikipedia.org/w/index.php?title=Propranolol&oldid=1369411043) (revision 1369411043, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4 h | ~4 hours (range 3–8 hours) |
| Protein binding | 90 % | 90% (albumin and α1-acid glycoprotein) |
| Bioavailability | 25 % | Oral: 25%; Sublingual: 63%; Intranasal: ~100% |
| Metabolism | hepatic | Liver (extensive) CYP1A2, CYP2D6; minor: CYP2C19, CYP3A4; aromatic hydroxylation (mainly 4-hydroxylation), N-dealkylation, side-chain oxidation, glucuronidation |
| CYP (metabolised by) | CYP1A2, CYP2C19, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | N-Desisopropylpropranolol; 4'-Hydroxypropanolol |
| Excretion | mainly urinary | Urine: 91% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 54dd0fad…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=54dd0fad-64ee-788f-e063-6394a90ac88e), label version 20260622. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.083, 0.167, 2, 2.533, 5.5)
> - protein-binding: consistent (label values: 90)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Hemangiol*](https://www.ema.europa.eu/en/documents/product-information/hemangiol-epar-product-information_en.pdf) (EMEA/H/C/002621). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 3, 6)
> - protein-binding: consistent (SmPC values: 90)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Nadolol]], [[Oxprenolol]], [[Penbutolol]], [[Pindolol]], [[Sotalol]], [[Timolol]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP2C19 (+43 others), CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
