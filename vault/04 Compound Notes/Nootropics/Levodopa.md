---
type: compound
schema-version: 2
compound-id: levodopa-compound
name: Levodopa
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Dopamine D3 receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1009
chembl-max-phase: 4
half-life:
  value: 0.75
  value-max: 1.5
  unit: h
  notes: 0.75–1.5 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 30.0
  value-max: null
  notes: 30%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal 70–80%
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Aromatic--amino-acid decarboxylase
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
- cns-activity
- serotonergic-or-dopaminergic-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/neuropsych
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-discrepant
- pk-ema-consistent
- pk-sources-disagree
pk-source:
  type: wikipedia-infobox
  title: Levodopa
  url: https://en.wikipedia.org/w/index.php?title=Levodopa&oldid=1375811327
  revision: 1375811327
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1009
  pref-name: LEVODOPA
  molecule-type: Small molecule
  first-approval: 1970
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N04BA01
  targets:
  - id: CHEMBL234
    name: D(3) dopamine receptor
    action: AGONIST
  properties:
    full-mwt: 197.19
    mw-freebase: 197.19
    alogp: 0.05
    psa: 103.78
    hba: 4
    hbd: 4
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.51
    full-molformula: C9H11NO4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 077c0f39-a3a2-4b2b-a184-09131889dcfb
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=077c0f39-a3a2-4b2b-a184-09131889dcfb
  checked: '2026-10-01'
  fields:
    half-life: discrepant
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Inbrija
  ema-number: EMEA/H/C/004786
  url: https://www.ema.europa.eu/en/documents/product-information/inbrija-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Levodopa

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `levodopa-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL1009](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1009/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

The dopamine precursor that crosses the blood-brain barrier where dopamine itself cannot. Still the most effective symptomatic treatment for Parkinson disease more than fifty years on, and always co-formulated with a peripheral decarboxylase inhibitor.

## Mechanism

Dopamine D3 receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1970
- **Flags:** prodrug
- **ATC N04BA01:** NERVOUS SYSTEM › DOPAMINERGIC AGENTS › Dopa and dopa derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 197.19 | 0.05 | 103.78 | 4/4 | 0 | C9H11NO4 |

**Targets (ChEMBL curated mechanisms):**

- [[D(3) dopamine receptor (CHEMBL234)|D(3) dopamine receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Levodopa*](https://en.wikipedia.org/w/index.php?title=Levodopa&oldid=1375811327) (revision 1375811327, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.75–1.5 h | 0.75–1.5 hours |
| Bioavailability | 30 % | 30% |
| Metabolism | - | Aromatic--amino-acid decarboxylase |
| Metabolites | - | • Dopamine |
| Excretion | mainly urinary | Renal 70–80% |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 077c0f39…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=077c0f39-a3a2-4b2b-a184-09131889dcfb), label version 20260720. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 2.3)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Inbrija*](https://www.ema.europa.eu/en/documents/product-information/inbrija-epar-product-information_en.pdf) (EMEA/H/C/004786). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 1.9, 2.3)

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
