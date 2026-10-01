---
type: compound
schema-version: 2
compound-id: orlistat-compound
name: Orlistat (Xenical/Alli)
aliases:
- Orlistat
- Xenical
- Alli
cluster: Metabolic and Incretin Agents
group: glp1
class: null
subclass: null
mechanism: Gastric lipase inhibitor; Pancreatic lipase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL175247
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: 2.0
  unit: h
  notes: 1 to 2 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
bioavailability:
  value: null
  value-max: null
  notes: Negligible
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Fecal
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: In the GI tract
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
- glucose-metabolism
- gastrointestinal
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/glp1
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Orlistat
  url: https://en.wikipedia.org/w/index.php?title=Orlistat&oldid=1367132106
  revision: 1367132106
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL175247
  pref-name: ORLISTAT
  molecule-type: Small molecule
  first-approval: 1998
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A08AB01
  targets:
  - id: CHEMBL1796
    name: Gastric triacylglycerol lipase
    action: INHIBITOR
  - id: CHEMBL1812
    name: Pancreatic triacylglycerol lipase
    action: INHIBITOR
  properties:
    full-mwt: 495.75
    mw-freebase: 495.75
    alogp: 6.88
    psa: 81.7
    hba: 5
    hbd: 1
    rtb: 23
    num-ro5-violations: 1
    qed-weighted: 0.09
    full-molformula: C29H53NO5
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 6240792b-9224-2d10-e053-2a91aa0a2c3e
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6240792b-9224-2d10-e053-2a91aa0a2c3e
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Xenical
  ema-number: EMEA/H/C/000154
  url: https://www.ema.europa.eu/en/documents/product-information/xenical-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/xenical-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: consistent
---

# Orlistat (Xenical/Alli)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `orlistat-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **Aliases:** Orlistat, Xenical, Alli
- **ChEMBL:** [CHEMBL175247](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL175247/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Gastrointestinal lipase inhibitor that reduces dietary-fat absorption; produces modest weight loss and can impair fat-soluble vitamin absorption.

## Mechanism

Gastric lipase inhibitor; Pancreatic lipase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1998
- **ATC A08AB01:** ALIMENTARY TRACT AND METABOLISM › ANTIOBESITY PREPARATIONS, EXCL. DIET PRODUCTS › Peripherally acting antiobesity products

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 495.75 | 6.88 | 81.7 | 1/5 | 1 | C29H53NO5 |

**Targets (ChEMBL curated mechanisms):**

- [[Gastric triacylglycerol lipase (CHEMBL1796)|Gastric triacylglycerol lipase]] - inhibitor · SINGLE PROTEIN
- [[Pancreatic triacylglycerol lipase (CHEMBL1812)|Pancreatic triacylglycerol lipase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Orlistat*](https://en.wikipedia.org/w/index.php?title=Orlistat&oldid=1367132106) (revision 1367132106, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–2 h | 1 to 2 hours |
| Protein binding | 99 % | >99% |
| Bioavailability | - | Negligible |
| Metabolism | - | In the GI tract |
| Excretion | mainly non-renal | Fecal |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 6240792b…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6240792b-9224-2d10-e053-2a91aa0a2c3e), label version 20260109. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1, 2, 3, 13.5)
> - protein-binding: consistent (label values: 99)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Xenical*](https://www.ema.europa.eu/en/documents/product-information/xenical-epar-product-information_en.pdf) (EMEA/H/C/000154) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/xenical-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (SmPC values: -)
> - protein-binding: consistent (SmPC values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Cetilistat]] (Gastric triacylglycerol lipase; Pancreatic triacylglycerol lipase)

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[Glucose and Incretin Signaling]]
