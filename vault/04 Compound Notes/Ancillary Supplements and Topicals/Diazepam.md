---
type: compound
schema-version: 2
compound-id: diazepam-compound
name: Diazepam
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: GABA-A receptor; anion channel positive allosteric modulator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL12
chembl-max-phase: 4
half-life:
  value: 50.0
  value-max: null
  unit: h
  notes: (50 hour); 20–100 hour (32–200 hour for main active metabolite desmethyldiazepam)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 76.0
  value-max: null
  notes: 'Oral: 76% (64–97%); Rectal: 81% (62–98%)'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver – CYP2B6 (minor route) to desmethyldiazepam, CYP2C19 (major route) to inactive metabolites, CYP3A4 (major route) to temazepam
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2B6
  - CYP2C19
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2B6, CYP2C19, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- needs-compound-review
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Diazepam
  url: https://en.wikipedia.org/w/index.php?title=Diazepam&oldid=1376693592
  revision: 1376693592
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL12
  pref-name: DIAZEPAM
  molecule-type: Small molecule
  first-approval: 1963
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N05BA01
  targets:
  - id: CHEMBL2093872
    name: GABA-A receptor; anion channel
    action: POSITIVE ALLOSTERIC MODULATOR
  properties:
    full-mwt: 284.75
    mw-freebase: 284.75
    alogp: 3.15
    psa: 32.67
    hba: 2
    hbd: 0
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.79
    full-molformula: C16H13ClN2O
pk-verification:
  source: fda-label
  status: consistent
  set-id: ba953b22-f0cd-4be5-9e0e-178bded88727
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ba953b22-f0cd-4be5-9e0e-178bded88727
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Diazepam

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `diazepam-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL12](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL12/) · max phase 4 · id via source catalogue

## Source summary

GABA-A receptor; anion channel positive allosteric modulator; approved/marketed compound catalogued by ChEMBL (CHEMBL12).

## Mechanism

GABA-A receptor; anion channel positive allosteric modulator _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1963
- **Flags:** black-box warning
- **ATC N05BA01:** NERVOUS SYSTEM › ANXIOLYTICS › Benzodiazepine derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 284.75 | 3.15 | 32.67 | 0/2 | 0 | C16H13ClN2O |

**Targets (ChEMBL curated mechanisms):**

- [[GABA-A receptor; anion channel (CHEMBL2093872)|GABA-A receptor; anion channel]] - positive allosteric modulator · PROTEIN COMPLEX GROUP

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Diazepam*](https://en.wikipedia.org/w/index.php?title=Diazepam&oldid=1376693592) (revision 1376693592, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 50 h | (50 hour); 20–100 hour (32–200 hour for main active metabolite desmethyldiazepam) |
| Bioavailability | 76 % | Oral: 76% (64–97%); Rectal: 81% (62–98%) |
| Metabolism | hepatic | Liver – CYP2B6 (minor route) to desmethyldiazepam, CYP2C19 (major route) to inactive metabolites, CYP3A4 (major route) to temazepam |
| CYP (metabolised by) | CYP2B6, CYP2C19, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Temazepam; Oxazepam; Nordiazepam |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set ba953b22…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ba953b22-f0cd-4be5-9e0e-178bded88727), label version 20260827. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1, 3, 48, 100)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Abp-700]] (GABA-A receptor; anion channel), [[Adipiplon]] (GABA-A receptor; anion channel), [[Alprazolam]] (GABA-A receptor; anion channel), [[Brexanolone]] (GABA-A receptor; anion channel), [[Butalbital]] (GABA-A receptor; anion channel), [[Cenobamate]] (GABA-A receptor; anion channel), [[Chlordiazepoxide]] (GABA-A receptor; anion channel), [[Cipepofol]] (GABA-A receptor; anion channel), [[Clobazam]] (GABA-A receptor; anion channel), [[Clomethiazole]] (GABA-A receptor; anion channel), [[Clonazepam]] (GABA-A receptor; anion channel), [[Clotiazepam]] (GABA-A receptor; anion channel)
- **Same ATC subgroup:** [[Alprazolam]], [[Bentazepam]], [[Bromazepam]], [[Chlordiazepoxide]], [[Clobazam]], [[Clotiazepam]], [[Halazepam]], [[Lorazepam]], [[Oxazepam]], [[Prazepam]]
- **Shared CYP substrate pool:** CYP2B6 (+12 others), CYP2C19 (+43 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
