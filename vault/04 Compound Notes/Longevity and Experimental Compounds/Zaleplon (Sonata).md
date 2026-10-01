---
type: compound
schema-version: 2
compound-id: zaleplon-compound
name: Zaleplon (Sonata)
aliases:
- Zaleplon
- Sonata
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: GABA A receptor alpha-1/beta-1/gamma-2 positive allosteric modulator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1521
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: null
  unit: h
  notes: 1 hour
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 30.0
  value-max: null
  notes: 30% (oral)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver aldehyde oxidase (91%), CYP3A4 (9%)
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Zaleplon
  url: https://en.wikipedia.org/w/index.php?title=Zaleplon&oldid=1347114340
  revision: 1347114340
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1521
  pref-name: ZALEPLON
  molecule-type: Small molecule
  first-approval: 1999
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N05CF03
  targets:
  - id: CHEMBL2111392
    name: GABA A receptor alpha-1/beta-1/gamma-2
    action: POSITIVE ALLOSTERIC MODULATOR
  properties:
    full-mwt: 305.34
    mw-freebase: 305.34
    alogp: 2.64
    psa: 74.29
    hba: 5
    hbd: 0
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.75
    full-molformula: C17H15N5O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: a1277ef5-6072-43ff-a6ce-0a7cea58b7cb
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a1277ef5-6072-43ff-a6ce-0a7cea58b7cb
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Zaleplon (Sonata)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `zaleplon-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Zaleplon, Sonata
- **ChEMBL:** [CHEMBL1521](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1521/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Very short-acting GABA-A hypnotic for sleep-onset insomnia; dependence and complex sleep behaviors remain possible.

## Mechanism

GABA A receptor alpha-1/beta-1/gamma-2 positive allosteric modulator _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1999
- **Flags:** black-box warning
- **ATC N05CF03:** NERVOUS SYSTEM › HYPNOTICS AND SEDATIVES › Benzodiazepine related drugs

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 305.34 | 2.64 | 74.29 | 0/5 | 0 | C17H15N5O |

**Targets (ChEMBL curated mechanisms):**

- [[GABA A receptor alpha-1-beta-1-gamma-2 (CHEMBL2111392)|GABA A receptor alpha-1/beta-1/gamma-2]] - positive allosteric modulator · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Zaleplon*](https://en.wikipedia.org/w/index.php?title=Zaleplon&oldid=1347114340) (revision 1347114340, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1 h | 1 hour |
| Bioavailability | 30 % | 30% (oral) |
| Metabolism | hepatic | Liver aldehyde oxidase (91%), CYP3A4 (9%) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | No active metabolites |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set a1277ef5…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a1277ef5-6072-43ff-a6ce-0a7cea58b7cb), label version 20251017. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Eszopiclone (Lunesta)]], [[Zolpidem (Ambien)]], [[Zopiclone]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
