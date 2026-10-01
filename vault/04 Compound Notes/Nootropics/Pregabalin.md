---
type: compound
schema-version: 2
compound-id: pregabalin-compound
name: Pregabalin
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Voltage-gated calcium channel modulator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1059
chembl-max-phase: 4
half-life:
  value: 4.5
  value-max: 7.0
  unit: h
  notes: 4.5–7 hours (mean 6.3 hours)
protein-binding:
  value: 1.0
  value-max: null
  unit: percent
  notes: <1%
bioavailability:
  value: 90.0
  value-max: null
  notes: 'Oral: ≥90%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Less than 2% is metabolized
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Pregabalin
  url: https://en.wikipedia.org/w/index.php?title=Pregabalin&oldid=1374816232
  revision: 1374816232
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1059
  pref-name: PREGABALIN
  molecule-type: Small molecule
  first-approval: 2004
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N02BF02
  targets:
  - id: CHEMBL2363032
    name: Voltage-gated calcium channel
    action: MODULATOR
  properties:
    full-mwt: 159.23
    mw-freebase: 159.23
    alogp: 1.08
    psa: 63.32
    hba: 2
    hbd: 2
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.63
    full-molformula: C8H17NO2
pk-verification:
  source: fda-label
  status: consistent
  set-id: ab06a36d-9a2d-4eae-8991-4eab5bc8311c
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ab06a36d-9a2d-4eae-8991-4eab5bc8311c
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Pregabalin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pregabalin-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL1059](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1059/) · max phase 4 · id via Wikipedia infobox

## Source summary

Alpha-2-delta ligand with linear pharmacokinetics, licensed for neuropathic pain, generalised anxiety and fibromyalgia, and now a controlled drug in several countries.

## Mechanism

Voltage-gated calcium channel modulator _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2004
- **ATC N02BF02:** NERVOUS SYSTEM › OTHER ANALGESICS AND ANTIPYRETICS › Gabapentinoids

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 159.23 | 1.08 | 63.32 | 2/2 | 0 | C8H17NO2 |

**Targets (ChEMBL curated mechanisms):**

- [[Voltage-gated calcium channel (CHEMBL2363032)|Voltage-gated calcium channel]] - modulator · PROTEIN COMPLEX GROUP

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pregabalin*](https://en.wikipedia.org/w/index.php?title=Pregabalin&oldid=1374816232) (revision 1374816232, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4.5–7 h | 4.5–7 hours (mean 6.3 hours) |
| Protein binding | 1 % | <1% |
| Bioavailability | 90 % | Oral: ≥90% |
| Metabolism | - | Less than 2% is metabolized |
| Metabolites | - | N-methylpregabalin |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set ab06a36d…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ab06a36d-9a2d-4eae-8991-4eab5bc8311c), label version 20260911. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 3, 4, 6, 6.3)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Gabapentin]] (Voltage-gated calcium channel)
- **Same ATC subgroup:** [[Gabapentin]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
