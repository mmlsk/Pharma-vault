---
type: compound
schema-version: 2
compound-id: lenvatinib-compound
name: Lenvatinib
aliases: []
cluster: Growth Hormone and Peptide Agents
group: fgfr
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1289601
chembl-max-phase: 4
half-life:
  value: 28.0
  value-max: null
  unit: h
  notes: 28 hours
protein-binding:
  value: 98.0
  value-max: 99.0
  unit: percent
  notes: 98–99%
bioavailability:
  value: 85.0
  value-max: null
  notes: 85% (estimated)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: ~65% feces, 25% urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4, aldehyde oxidase, non-enzymatic
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
- growth-plate
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/fgfr
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Lenvatinib
  url: https://en.wikipedia.org/w/index.php?title=Lenvatinib&oldid=1329259391
  revision: 1329259391
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1289601
  pref-name: LENVATINIB
  molecule-type: Small molecule
  first-approval: 2015
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01EX08
  targets: []
  properties:
    full-mwt: 426.86
    mw-freebase: 426.86
    alogp: 4.07
    psa: 115.57
    hba: 5
    hbd: 3
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.55
    full-molformula: C21H19ClN4O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: f4bedd21-efde-44c6-9d9c-b48b78d7ed1e
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f4bedd21-efde-44c6-9d9c-b48b78d7ed1e
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Lenvima
  ema-number: EMEA/H/C/003727
  url: https://www.ema.europa.eu/en/documents/product-information/lenvima-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Lenvatinib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lenvatinib-compound`
- **Source group:** FGFR3 & Growth Plate (`fgfr`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **ChEMBL:** [CHEMBL1289601](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1289601/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Multi-kinase inhibitor with FGFR1-4 activity used in thyroid, hepatocellular and renal cancer. Included for FGFR completeness, not as a growth agent.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2015
- **ATC L01EX08:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › PROTEIN KINASE INHIBITORS › Other protein kinase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 426.86 | 4.07 | 115.57 | 3/5 | 0 | C21H19ClN4O4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lenvatinib*](https://en.wikipedia.org/w/index.php?title=Lenvatinib&oldid=1329259391) (revision 1329259391, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 28 h | 28 hours |
| Protein binding | 98–99 % | 98–99% |
| Bioavailability | 85 % | 85% (estimated) |
| Metabolism | hepatic | CYP3A4, aldehyde oxidase, non-enzymatic |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Desmethyl-lenvatinib (M2) and others |
| Excretion | - | ~65% feces, 25% urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set f4bedd21…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f4bedd21-efde-44c6-9d9c-b48b78d7ed1e), label version 20260630. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 28)
> - protein-binding: consistent (label values: 97, 99)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Lenvima*](https://www.ema.europa.eu/en/documents/product-information/lenvima-epar-product-information_en.pdf) (EMEA/H/C/003727). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 26, 31)
> - protein-binding: consistent (SmPC values: 98, 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Cabozantinib]], [[Pazopanib]], [[Sorafenib]], [[Sunitinib]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`, `growth-plate`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
