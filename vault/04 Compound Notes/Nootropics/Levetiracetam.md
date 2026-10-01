---
type: compound
schema-version: 2
compound-id: levetiracetam-compound
name: Levetiracetam
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Synaptic vesicle glycoprotein 2A modulator; Voltage-gated N-type calcium channel alpha-1B subunit blocker
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1286
chembl-max-phase: 4
half-life:
  value: 6.0
  value-max: 8.0
  unit: h
  notes: 6–8 hrs
protein-binding:
  value: 10.0
  value-max: null
  unit: percent
  notes: <10%
bioavailability:
  value: 100.0
  value-max: null
  notes: ≈100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Enzymatic hydrolysis of acetamide group
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/neuropsych
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Levetiracetam
  url: https://en.wikipedia.org/w/index.php?title=Levetiracetam&oldid=1370710285
  revision: 1370710285
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1286
  pref-name: LEVETIRACETAM
  molecule-type: Small molecule
  first-approval: 1999
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N03AX14
  targets:
  - id: CHEMBL1998
    name: Synaptic vesicle glycoprotein 2A
    action: MODULATOR
  - id: CHEMBL4478
    name: Voltage-dependent N-type calcium channel subunit alpha-1B
    action: BLOCKER
  properties:
    full-mwt: 170.21
    mw-freebase: 170.21
    alogp: -0.13
    psa: 63.4
    hba: 2
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.64
    full-molformula: C8H14N2O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 0348fec4-d919-4307-ac90-35360819bc00
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0348fec4-d919-4307-ac90-35360819bc00
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Keppra
  ema-number: EMEA/H/C/000277
  url: https://www.ema.europa.eu/en/documents/product-information/keppra-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Levetiracetam

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `levetiracetam-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL1286](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1286/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Broad-spectrum anticonvulsant with no significant drug interactions and a target no other class shares, offset by behavioural adverse effects.

## Mechanism

Synaptic vesicle glycoprotein 2A modulator; Voltage-gated N-type calcium channel alpha-1B subunit blocker _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1999
- **ATC N03AX14:** NERVOUS SYSTEM › ANTIEPILEPTICS › Other antiepileptics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 170.21 | -0.13 | 63.4 | 1/2 | 0 | C8H14N2O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Synaptic vesicle glycoprotein 2A (CHEMBL1998)|Synaptic vesicle glycoprotein 2A]] - modulator · SINGLE PROTEIN
- [[Voltage-dependent N-type calcium channel subunit alpha-1B (CHEMBL4478)|Voltage-dependent N-type calcium channel subunit alpha-1B]] - blocker · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Levetiracetam*](https://en.wikipedia.org/w/index.php?title=Levetiracetam&oldid=1370710285) (revision 1370710285, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6–8 h | 6–8 hrs |
| Protein binding | 10 % | <10% |
| Bioavailability | 100 % | ≈100% |
| Metabolism | - | Enzymatic hydrolysis of acetamide group |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 0348fec4…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0348fec4-d919-4307-ac90-35360819bc00), label version 20260904. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1, 2.5, 5, 5.3, 7, 7.2)
> - protein-binding: consistent (label values: 10)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Keppra*](https://www.ema.europa.eu/en/documents/product-information/keppra-epar-product-information_en.pdf) (EMEA/H/C/000277). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 1, 3.1, 5, 5.3, 6, 7.2)
> - protein-binding: consistent (SmPC values: 10)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Brivaracetam]] (Synaptic vesicle glycoprotein 2A), [[Ralfinamide]] (Voltage-dependent N-type calcium channel subunit alpha-1B)
- **Same ATC subgroup:** [[Brivaracetam]], [[Cannabidiol (Epidiolex)]], [[Cenobamate]], [[Felbamate]], [[Fenfluramine]], [[Ganaxolone]], [[Lacosamide]], [[Lamotrigine]], [[Perampanel]], [[Pheneturide]], [[Retigabine (Ezogabine)]], [[Stiripentol]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
