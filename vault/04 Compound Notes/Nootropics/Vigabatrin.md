---
type: compound
schema-version: 2
compound-id: vigabatrin-compound
name: Vigabatrin
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Gamma-amino-N-butyrate transaminase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL89598
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 8.0
  unit: h
  notes: 5–8 hours in young adults, 12–13 hours in the elderly.
protein-binding:
  value: 0.0
  value-max: null
  unit: percent
  notes: 0%
bioavailability:
  value: 80.0
  value-max: 90.0
  notes: 80–90%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: not metabolized
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
  title: Vigabatrin
  url: https://en.wikipedia.org/w/index.php?title=Vigabatrin&oldid=1374816235
  revision: 1374816235
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL89598
  pref-name: VIGABATRIN
  molecule-type: Small molecule
  first-approval: 2009
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N03AG04
  targets:
  - id: CHEMBL2044
    name: 4-aminobutyrate aminotransferase, mitochondrial
    action: INHIBITOR
  properties:
    full-mwt: 129.16
    mw-freebase: 129.16
    alogp: 0.36
    psa: 63.32
    hba: 2
    hbd: 2
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.54
    full-molformula: C6H11NO2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 93ba3894-fd97-4432-9f2d-e7050371e91f
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=93ba3894-fd97-4432-9f2d-e7050371e91f
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Kigabeq
  ema-number: EMEA/H/C/004534
  url: https://www.ema.europa.eu/en/documents/product-information/kigabeq-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Vigabatrin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `vigabatrin-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL89598](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL89598/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Irreversible GABA transaminase inhibitor, uniquely effective in infantile spasms and causing permanent visual field loss in a third of patients.

## Mechanism

Gamma-amino-N-butyrate transaminase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2009
- **Flags:** black-box warning
- **ATC N03AG04:** NERVOUS SYSTEM › ANTIEPILEPTICS › Fatty acid derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 129.16 | 0.36 | 63.32 | 2/2 | 0 | C6H11NO2 |

**Targets (ChEMBL curated mechanisms):**

- [[4-aminobutyrate aminotransferase, mitochondrial (CHEMBL2044)|4-aminobutyrate aminotransferase, mitochondrial]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Vigabatrin*](https://en.wikipedia.org/w/index.php?title=Vigabatrin&oldid=1374816235) (revision 1374816235, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–8 h | 5–8 hours in young adults, 12–13 hours in the elderly. |
| Protein binding | 0 % | 0% |
| Bioavailability | 80–90 % | 80–90% |
| Metabolism | - | not metabolized |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 93ba3894…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=93ba3894-fd97-4432-9f2d-e7050371e91f), label version 20260812. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 5.7, 6.8, 8.1, 9.5, 10.5, 12.5)
> - protein-binding: no-label-value (label values: -)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Kigabeq*](https://www.ema.europa.eu/en/documents/product-information/kigabeq-epar-product-information_en.pdf) (EMEA/H/C/004534). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 5, 5.5, 5.7, 7.5, 8)
> - protein-binding: no-label-value (SmPC values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Sodium Valproate]], [[Tiagabine]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
