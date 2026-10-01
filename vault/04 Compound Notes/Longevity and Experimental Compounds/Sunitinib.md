---
type: compound
schema-version: 2
compound-id: sunitinib-compound
name: Sunitinib
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: Macrophage colony stimulating factor receptor inhibitor; Platelet-derived growth factor receptor alpha inhibitor; Platelet-derived growth factor receptor beta inhibitor; Stem cell growth factor receptor inhibitor; Tyrosine-protein kinase receptor FLT3 inhibitor; Tyrosine-protein kinase receptor RET inhibitor; Vascular endothelial growth factor receptor 1 inhibitor; Vascular endothelial growth factor receptor 2 inhibitor; Vascular endothelial growth factor receptor 3 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL535
chembl-max-phase: 4
half-life:
  value: 40.0
  value-max: 60.0
  unit: h
  notes: 40 to 60 hours (sunitinib); 80 to 110 hours (metabolite)
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: 95%
bioavailability:
  value: null
  value-max: null
  notes: Unaffected by food
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Fecal (61%) and kidney (16%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4-mediated)
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
- pk-ema-consistent
pk-source:
  type: wikipedia-infobox
  title: Sunitinib
  url: https://en.wikipedia.org/w/index.php?title=Sunitinib&oldid=1328958998
  revision: 1328958998
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL535
  pref-name: SUNITINIB
  molecule-type: Small molecule
  first-approval: 2006
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L01EX01
  targets:
  - id: CHEMBL1844
    name: Macrophage colony-stimulating factor 1 receptor
    action: INHIBITOR
  - id: CHEMBL279
    name: Vascular endothelial growth factor receptor 2
    action: INHIBITOR
  - id: CHEMBL1936
    name: Mast/stem cell growth factor receptor Kit
    action: INHIBITOR
  - id: CHEMBL1913
    name: Platelet-derived growth factor receptor beta
    action: INHIBITOR
  - id: CHEMBL2007
    name: Platelet-derived growth factor receptor alpha
    action: INHIBITOR
  - id: CHEMBL1868
    name: Vascular endothelial growth factor receptor 1
    action: INHIBITOR
  - id: CHEMBL1955
    name: Vascular endothelial growth factor receptor 3
    action: INHIBITOR
  - id: CHEMBL1974
    name: Receptor-type tyrosine-protein kinase FLT3
    action: INHIBITOR
  - id: CHEMBL2041
    name: Proto-oncogene tyrosine-protein kinase receptor Ret
    action: INHIBITOR
  properties:
    full-mwt: 398.48
    mw-freebase: 398.48
    alogp: 3.33
    psa: 77.23
    hba: 3
    hbd: 3
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.63
    full-molformula: C22H27FN4O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Sutent
  ema-number: EMEA/H/C/000687
  url: https://www.ema.europa.eu/en/documents/product-information/sutent-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Sunitinib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sunitinib-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL535](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL535/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits VEGF-receptor angiogenic signaling; hypertension, bleeding, thrombosis, and wound-healing effects require monitoring.

## Mechanism

Macrophage colony stimulating factor receptor inhibitor; Platelet-derived growth factor receptor alpha inhibitor; Platelet-derived growth factor receptor beta inhibitor; Stem cell growth factor receptor inhibitor; Tyrosine-protein kinase receptor FLT3 inhibitor; Tyrosine-protein kinase receptor RET inhibitor; Vascular endothelial growth factor receptor 1 inhibitor; Vascular endothelial growth factor receptor 2 inhibitor; Vascular endothelial growth factor receptor 3 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2006
- **Flags:** black-box warning
- **ATC L01EX01:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › PROTEIN KINASE INHIBITORS › Other protein kinase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 398.48 | 3.33 | 77.23 | 3/3 | 0 | C22H27FN4O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Macrophage colony-stimulating factor 1 receptor (CHEMBL1844)|Macrophage colony-stimulating factor 1 receptor]] - inhibitor · SINGLE PROTEIN
- [[Vascular endothelial growth factor receptor 2 (CHEMBL279)|Vascular endothelial growth factor receptor 2]] - inhibitor · SINGLE PROTEIN
- [[Mast-stem cell growth factor receptor Kit (CHEMBL1936)|Mast/stem cell growth factor receptor Kit]] - inhibitor · SINGLE PROTEIN
- [[Platelet-derived growth factor receptor beta (CHEMBL1913)|Platelet-derived growth factor receptor beta]] - inhibitor · SINGLE PROTEIN
- [[Platelet-derived growth factor receptor alpha (CHEMBL2007)|Platelet-derived growth factor receptor alpha]] - inhibitor · SINGLE PROTEIN
- [[Vascular endothelial growth factor receptor 1 (CHEMBL1868)|Vascular endothelial growth factor receptor 1]] - inhibitor · SINGLE PROTEIN
- [[Vascular endothelial growth factor receptor 3 (CHEMBL1955)|Vascular endothelial growth factor receptor 3]] - inhibitor · SINGLE PROTEIN
- [[Receptor-type tyrosine-protein kinase FLT3 (CHEMBL1974)|Receptor-type tyrosine-protein kinase FLT3]] - inhibitor · SINGLE PROTEIN
- [[Proto-oncogene tyrosine-protein kinase receptor Ret (CHEMBL2041)|Proto-oncogene tyrosine-protein kinase receptor Ret]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sunitinib*](https://en.wikipedia.org/w/index.php?title=Sunitinib&oldid=1328958998) (revision 1328958998, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 40–60 h | 40 to 60 hours (sunitinib); 80 to 110 hours (metabolite) |
| Protein binding | 95 % | 95% |
| Bioavailability | - | Unaffected by food |
| Metabolism | hepatic | Liver (CYP3A4-mediated) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Fecal (61%) and kidney (16%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Sutent*](https://www.ema.europa.eu/en/documents/product-information/sutent-epar-product-information_en.pdf) (EMEA/H/C/000687). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 40, 60, 80, 110)
> - protein-binding: consistent (SmPC values: 90, 95)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Dasatinib (Sprycel)]] (Mast/stem cell growth factor receptor Kit; Platelet-derived growth factor receptor beta), [[Dovitinib]] (Mast/stem cell growth factor receptor Kit; Receptor-type tyrosine-protein kinase FLT3), [[Lestaurtinib]] (Proto-oncogene tyrosine-protein kinase receptor Ret; Receptor-type tyrosine-protein kinase FLT3), [[Fedratinib]] (Receptor-type tyrosine-protein kinase FLT3), [[Pacritinib]] (Receptor-type tyrosine-protein kinase FLT3)
- **Same ATC subgroup:** [[Cabozantinib]], [[Lenvatinib]], [[Pazopanib]], [[Sorafenib]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
