---
type: compound
schema-version: 2
compound-id: axitinib-compound
name: Axitinib
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: Vascular endothelial growth factor receptor inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1289926
chembl-max-phase: 4
half-life:
  value: 2.5
  value-max: 6.1
  unit: h
  notes: 2.5-6.1 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
bioavailability:
  value: 58.0
  value-max: null
  notes: 58%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.12
  notes: Feces (41%; 12% as unchanged drug), urine (23%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mostly CYP3A4/CYP3A5-mediated but with some contributions from CYP1A2, CYP2C19, UGT1A1)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2C19
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2C19, CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- evidence-limited
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Axitinib
  url: https://en.wikipedia.org/w/index.php?title=Axitinib&oldid=1335549960
  revision: 1335549960
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1289926
  pref-name: AXITINIB
  molecule-type: Small molecule
  first-approval: 2012
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01EK01
  targets:
  - id: CHEMBL2095227
    name: Vascular endothelial growth factor receptor
    action: INHIBITOR
  properties:
    full-mwt: 386.48
    mw-freebase: 386.48
    alogp: 4.64
    psa: 70.67
    hba: 4
    hbd: 2
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.52
    full-molformula: C22H18N4OS
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 8a903e31-936e-4ed7-8a59-59f32374f338
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8a903e31-936e-4ed7-8a59-59f32374f338
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Inlyta
  ema-number: EMEA/H/C/002406
  url: https://www.ema.europa.eu/en/documents/product-information/inlyta-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/inlyta-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Axitinib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `axitinib-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL1289926](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1289926/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits VEGF-receptor angiogenic signaling; hypertension, bleeding, thrombosis, and wound-healing effects require monitoring.

## Mechanism

Vascular endothelial growth factor receptor inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2012
- **ATC L01EK01:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › PROTEIN KINASE INHIBITORS › Vascular endothelial growth factor receptor (VEGFR) tyrosine kinase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 386.48 | 4.64 | 70.67 | 2/4 | 0 | C22H18N4OS |

**Targets (ChEMBL curated mechanisms):**

- [[Vascular endothelial growth factor receptor (CHEMBL2095227)|Vascular endothelial growth factor receptor]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Axitinib*](https://en.wikipedia.org/w/index.php?title=Axitinib&oldid=1335549960) (revision 1335549960, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5–6.1 h | 2.5-6.1 hours |
| Protein binding | 99 % | >99% |
| Bioavailability | 58 % | 58% |
| Metabolism | hepatic | Liver (mostly CYP3A4/CYP3A5-mediated but with some contributions from CYP1A2, CYP2C19, UGT1A1) |
| CYP (metabolised by) | CYP1A2, CYP2C19, CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Excretion | - · fe 0.12 | Feces (41%; 12% as unchanged drug), urine (23%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 8a903e31…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8a903e31-936e-4ed7-8a59-59f32374f338), label version 20260312. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2.5, 6.1, 48, 72)
> - protein-binding: consistent (label values: 99)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Inlyta*](https://www.ema.europa.eu/en/documents/product-information/inlyta-epar-product-information_en.pdf) (EMEA/H/C/002406) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/inlyta-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 2.5, 6.1, 48, 72)
> - protein-binding: consistent (SmPC values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Dovitinib]] (Vascular endothelial growth factor receptor)
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP2C19 (+43 others), CYP3A4 (+204 others), CYP3A5 (+13 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
