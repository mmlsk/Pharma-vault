---
type: compound
schema-version: 2
compound-id: ivabradine-compound
name: Ivabradine (Corlanor)
aliases:
- Ivabradine
- Corlanor
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Potassium/sodium hyperpolarization-activated cyclic nucleotide-gated channel 4 blocker
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL471737
chembl-max-phase: 4
half-life:
  value: 6.0
  value-max: null
  unit: h
  notes: 6 hours
protein-binding:
  value: 70.0
  value-max: null
  unit: percent
  notes: 70%
bioavailability:
  value: 40.0
  value-max: null
  notes: 40%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney and fecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (first-pass) >50%, CYP3A4-mediated
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- needs-compound-review
source-status: auto-extracted
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
- pk-ema-discrepant
- pk-sources-disagree
pk-source:
  type: wikipedia-infobox
  title: Ivabradine
  url: https://en.wikipedia.org/w/index.php?title=Ivabradine&oldid=1372056493
  revision: 1372056493
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL471737
  pref-name: IVABRADINE
  molecule-type: Small molecule
  first-approval: 2005
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C01EB17
  targets:
  - id: CHEMBL1250417
    name: Potassium/sodium hyperpolarization-activated cyclic nucleotide-gated channel 4
    action: BLOCKER
  properties:
    full-mwt: 468.59
    mw-freebase: 468.59
    alogp: 3.31
    psa: 60.47
    hba: 6
    hbd: 0
    rtb: 10
    num-ro5-violations: 0
    qed-weighted: 0.53
    full-molformula: C27H36N2O5
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 676907d3-b374-4baa-8422-c04706409540
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=676907d3-b374-4baa-8422-c04706409540
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: discrepant
  product: Procoralan
  ema-number: EMEA/H/C/000597
  url: https://www.ema.europa.eu/en/documents/product-information/procoralan-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
---

# Ivabradine (Corlanor)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ivabradine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Ivabradine, Corlanor
- **ChEMBL:** [CHEMBL471737](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL471737/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Selective sinoatrial node funny-current blocker that slows heart rate without touching contractility or blood pressure.

## Mechanism

Potassium/sodium hyperpolarization-activated cyclic nucleotide-gated channel 4 blocker _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2005
- **ATC C01EB17:** CARDIOVASCULAR SYSTEM › OTHER CARDIAC PREPARATIONS › Other cardiac preparations

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 468.59 | 3.31 | 60.47 | 0/6 | 0 | C27H36N2O5 |

**Targets (ChEMBL curated mechanisms):**

- [[Potassium-sodium hyperpolarization-activated cyclic nucleotide-gated channel 4 (CHEMBL1250417)|Potassium/sodium hyperpolarization-activated cyclic nucleotide-gated channel 4]] - blocker · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ivabradine*](https://en.wikipedia.org/w/index.php?title=Ivabradine&oldid=1372056493) (revision 1372056493, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6 h | 6 hours |
| Protein binding | 70 % | 70% |
| Bioavailability | 40 % | 40% |
| Metabolism | hepatic | Liver (first-pass) >50%, CYP3A4-mediated |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Kidney and fecal |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 676907d3…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=676907d3-b374-4baa-8422-c04706409540), label version 20260820. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2, 6)
> - protein-binding: consistent (label values: 70)

> [!danger] EU SmPC cross-check: **discrepant**
> Automated comparison with section 5.2 of the [EU SmPC of *Procoralan*](https://www.ema.europa.eu/en/documents/product-information/procoralan-epar-product-information_en.pdf) (EMEA/H/C/000597). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (SmPC values: 2, 11)
> - protein-binding: consistent (SmPC values: 70)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Adenosine (IV)]], [[Coenzyme Q10]], [[Ibuprofen]], [[Indomethacin]], [[Mavacamten]], [[Meldonium]], [[Ranolazine (Ranexa)]], [[Trimetazidine]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
