---
type: compound
schema-version: 2
compound-id: sorafenib-compound
name: Sorafenib
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1336
chembl-max-phase: 4
half-life:
  value: 25.0
  value-max: 48.0
  unit: h
  notes: 25–48 hours
protein-binding:
  value: 99.5
  value-max: null
  unit: percent
  notes: 99.5%
bioavailability:
  value: 38.0
  value-max: 49.0
  notes: 38–49%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (77%) and urine (19%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver oxidation and glucuronidation (CYP3A4 & UGT1A9-mediated)
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
  title: Sorafenib
  url: https://en.wikipedia.org/w/index.php?title=Sorafenib&oldid=1373726418
  revision: 1373726418
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1336
  pref-name: SORAFENIB
  molecule-type: Small molecule
  first-approval: 2005
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01EX02
  targets: []
  properties:
    full-mwt: 464.83
    mw-freebase: 464.83
    alogp: 5.55
    psa: 92.35
    hba: 4
    hbd: 3
    rtb: 5
    num-ro5-violations: 1
    qed-weighted: 0.46
    full-molformula: C21H16ClF3N4O3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: faa9d847-2cd5-6538-e053-6394a90aa92b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=faa9d847-2cd5-6538-e053-6394a90aa92b
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Nexavar
  ema-number: EMEA/H/C/000690
  url: https://www.ema.europa.eu/en/documents/product-information/nexavar-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Sorafenib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sorafenib-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL1336](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1336/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits VEGF-receptor angiogenic signaling; hypertension, bleeding, thrombosis, and wound-healing effects require monitoring.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2005
- **ATC L01EX02:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › PROTEIN KINASE INHIBITORS › Other protein kinase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 464.83 | 5.55 | 92.35 | 3/4 | 1 | C21H16ClF3N4O3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sorafenib*](https://en.wikipedia.org/w/index.php?title=Sorafenib&oldid=1373726418) (revision 1373726418, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 25–48 h | 25–48 hours |
| Protein binding | 99.5 % | 99.5% |
| Bioavailability | 38–49 % | 38–49% |
| Metabolism | hepatic | Liver oxidation and glucuronidation (CYP3A4 & UGT1A9-mediated) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Feces (77%) and urine (19%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set faa9d847…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=faa9d847-2cd5-6538-e053-6394a90aa92b), label version 20260728. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 25, 48)
> - protein-binding: consistent (label values: 99.5)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Nexavar*](https://www.ema.europa.eu/en/documents/product-information/nexavar-epar-product-information_en.pdf) (EMEA/H/C/000690). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 25, 48)
> - protein-binding: consistent (SmPC values: 99.5)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Cabozantinib]], [[Lenvatinib]], [[Pazopanib]], [[Sunitinib]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
