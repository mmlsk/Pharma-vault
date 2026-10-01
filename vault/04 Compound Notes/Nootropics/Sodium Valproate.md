---
type: compound
schema-version: 2
compound-id: valproate-compound
name: Sodium Valproate
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Succinate semialdehyde dehydrogenase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL109
chembl-max-phase: 4
half-life:
  value: 9.0
  value-max: 16.0
  unit: h
  notes: 9–16 hours
protein-binding:
  value: 80.0
  value-max: 90.0
  unit: percent
  notes: 80–90%
bioavailability:
  value: 90.0
  value-max: null
  notes: ~90%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Mostly via hepatic metabolism, <3% in urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver—glucuronide conjugation 30–50%; mitochondrial β-oxidation over 40%; oxidation, hydroxylation, and dehydrogenation 15–20%
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
pk-source:
  type: wikipedia-infobox
  title: Valproate
  url: https://en.wikipedia.org/w/index.php?title=Valproate&oldid=1373159311
  revision: 1373159311
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL109
  pref-name: VALPROIC ACID
  molecule-type: Small molecule
  first-approval: 1978
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N03AG01
  targets:
  - id: CHEMBL1911
    name: Succinate-semialdehyde dehydrogenase, mitochondrial
    action: INHIBITOR
  properties:
    full-mwt: 144.21
    mw-freebase: 144.21
    alogp: 2.29
    psa: 37.3
    hba: 1
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.64
    full-molformula: C8H16O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Sodium Valproate

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `valproate-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL109](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL109/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Broad-spectrum anticonvulsant and mood stabiliser with multiple mechanisms and the most serious teratogenic profile of the class.

## Mechanism

Succinate semialdehyde dehydrogenase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1978
- **Flags:** black-box warning
- **ATC N03AG01:** NERVOUS SYSTEM › ANTIEPILEPTICS › Fatty acid derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 144.21 | 2.29 | 37.3 | 1/1 | 0 | C8H16O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Succinate-semialdehyde dehydrogenase, mitochondrial (CHEMBL1911)|Succinate-semialdehyde dehydrogenase, mitochondrial]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Valproate*](https://en.wikipedia.org/w/index.php?title=Valproate&oldid=1373159311) (revision 1373159311, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9–16 h | 9–16 hours |
| Protein binding | 80–90 % | 80–90% |
| Bioavailability | 90 % | ~90% |
| Metabolism | hepatic | Liver—glucuronide conjugation 30–50%; mitochondrial β-oxidation over 40%; oxidation, hydroxylation, and dehydrogenation 15–20% |
| Excretion | - | Mostly via hepatic metabolism, <3% in urine |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Tiagabine]], [[Vigabatrin]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
