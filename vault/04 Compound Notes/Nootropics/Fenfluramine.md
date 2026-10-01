---
type: compound
schema-version: 2
compound-id: fenfluramine-compound
name: Fenfluramine
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL87493
chembl-max-phase: 4
half-life:
  value: 13.0
  value-max: 30.0
  unit: h
  notes: 13–30 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
  title: Fenfluramine
  url: https://en.wikipedia.org/w/index.php?title=Fenfluramine&oldid=1365703472
  revision: 1365703472
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL87493
  pref-name: FENFLURAMINE
  molecule-type: Small molecule
  first-approval: 1963
  black-box-warning: true
  withdrawn: true
  atc-codes:
  - A08AA02
  - N03AX26
  targets: []
  properties:
    full-mwt: 231.26
    mw-freebase: 231.26
    alogp: 3.25
    psa: 12.03
    hba: 1
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.84
    full-molformula: C12H16F3N
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: e88f360e-33ad-4cd6-b2de-5ef885857c5d
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e88f360e-33ad-4cd6-b2de-5ef885857c5d
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Fintepla
  ema-number: EMEA/H/C/003933
  url: https://www.ema.europa.eu/en/documents/product-information/fintepla-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Fenfluramine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fenfluramine-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL87493](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL87493/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Withdrawn appetite suppressant reintroduced at low dose for Dravet syndrome, where it is among the most effective anticonvulsants available.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1963
- **Flags:** black-box warning, withdrawn
- **ATC A08AA02:** ALIMENTARY TRACT AND METABOLISM › ANTIOBESITY PREPARATIONS, EXCL. DIET PRODUCTS › Centrally acting antiobesity products
- **ATC N03AX26:** NERVOUS SYSTEM › ANTIEPILEPTICS › Other antiepileptics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 231.26 | 3.25 | 12.03 | 1/1 | 0 | C12H16F3N |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fenfluramine*](https://en.wikipedia.org/w/index.php?title=Fenfluramine&oldid=1365703472) (revision 1365703472, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 13–30 h | 13–30 hours |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set e88f360e…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e88f360e-33ad-4cd6-b2de-5ef885857c5d), label version 20251027. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 20)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Fintepla*](https://www.ema.europa.eu/en/documents/product-information/fintepla-epar-product-information_en.pdf) (EMEA/H/C/003933). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 20, 22.8, 30, 30.2, 34.5, 41.1)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Brivaracetam]], [[Cannabidiol (Epidiolex)]], [[Cenobamate]], [[Diethylpropion]], [[Ephedrine]], [[Felbamate]], [[Ganaxolone]], [[Lacosamide]], [[Lamotrigine]], [[Levetiracetam]], [[Mazindol]], [[Perampanel]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
