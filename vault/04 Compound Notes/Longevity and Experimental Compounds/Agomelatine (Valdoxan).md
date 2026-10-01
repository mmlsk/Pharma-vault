---
type: compound
schema-version: 2
compound-id: agomelatine-compound
name: Agomelatine (Valdoxan)
aliases:
- Agomelatine
- Valdoxan
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: Melatonin receptor agonist; Serotonin 2c (5-HT2c) receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL10878
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: 2.0
  unit: h
  notes: 1–2 hours
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: 95%
bioavailability:
  value: 1.0
  value-max: null
  notes: ~1%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (80%, mostly as metabolites)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (90% CYP1A2 and 10% CYP2C9)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2C9
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2C9 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Agomelatine
  url: https://en.wikipedia.org/w/index.php?title=Agomelatine&oldid=1366468764
  revision: 1366468764
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL10878
  pref-name: AGOMELATINE
  molecule-type: Small molecule
  first-approval: 2009
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N06AX22
  targets:
  - id: CHEMBL2094268
    name: Melatonin receptor
    action: AGONIST
  - id: CHEMBL225
    name: 5-hydroxytryptamine receptor 2C
    action: ANTAGONIST
  properties:
    full-mwt: 243.31
    mw-freebase: 243.31
    alogp: 2.53
    psa: 38.33
    hba: 2
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.9
    full-molformula: C15H17NO2
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
  product: Valdoxan
  ema-number: EMEA/H/C/000915
  url: https://www.ema.europa.eu/en/documents/product-information/valdoxan-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/valdoxan-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Agomelatine (Valdoxan)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `agomelatine-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Agomelatine, Valdoxan
- **ChEMBL:** [CHEMBL10878](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL10878/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Melatonin-receptor agonist and 5-HT2C antagonist antidepressant used outside the US; liver monitoring is required.

## Mechanism

Melatonin receptor agonist; Serotonin 2c (5-HT2c) receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2009
- **ATC N06AX22:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Other antidepressants

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 243.31 | 2.53 | 38.33 | 1/2 | 0 | C15H17NO2 |

**Targets (ChEMBL curated mechanisms):**

- [[Melatonin receptor (CHEMBL2094268)|Melatonin receptor]] - agonist · PROTEIN FAMILY
- [[5-hydroxytryptamine receptor 2C (CHEMBL225)|5-hydroxytryptamine receptor 2C]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Agomelatine*](https://en.wikipedia.org/w/index.php?title=Agomelatine&oldid=1366468764) (revision 1366468764, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–2 h | 1–2 hours |
| Protein binding | 95 % | 95% |
| Bioavailability | 1 % | ~1% |
| Metabolism | hepatic | Liver (90% CYP1A2 and 10% CYP2C9) |
| CYP (metabolised by) | CYP1A2, CYP2C9 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney (80%, mostly as metabolites) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Valdoxan*](https://www.ema.europa.eu/en/documents/product-information/valdoxan-epar-product-information_en.pdf) (EMEA/H/C/000915) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/valdoxan-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 1, 2)
> - protein-binding: consistent (SmPC values: 95)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Loxapine]] (5-hydroxytryptamine receptor 2C), [[Melatonin (oral)]] (Melatonin receptor), [[Mirtazapine]] (5-hydroxytryptamine receptor 2C), [[Olanzapine]] (5-hydroxytryptamine receptor 2C), [[Piromelatine]] (Melatonin receptor), [[Risperidone]] (5-hydroxytryptamine receptor 2C), [[Tasimelteon (Hetlioz)]] (Melatonin receptor), [[Thioridazine]] (5-hydroxytryptamine receptor 2C)
- **Same ATC subgroup:** [[Brexanolone]], [[Bupropion (Wellbutrin)]], [[Desvenlafaxine]], [[Duloxetine (Cymbalta)]], [[Esketamine (Spravato)]], [[Levomilnacipran]], [[Minaprine]], [[Mirtazapine]], [[Nefazodone]], [[Tianeptine]], [[Trazodone (Desyrel)]], [[Venlafaxine (Effexor)]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP2C9 (+40 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
