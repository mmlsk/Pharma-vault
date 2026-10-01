---
type: compound
schema-version: 2
compound-id: midazolam-compound
name: Midazolam
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
chembl-id: CHEMBL655
chembl-max-phase: 4
half-life:
  value: 1.5
  value-max: 2.5
  unit: h
  notes: 1.5–2.5 hours
protein-binding:
  value: 97.0
  value-max: null
  unit: percent
  notes: 97%
bioavailability:
  value: 40.0
  value-max: null
  notes: 'By mouth: variable, around 40%; Intramuscular: ≥90%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver: CYP3A3, CYP3A4, CYP3A5'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A3
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A3, CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Midazolam
  url: https://en.wikipedia.org/w/index.php?title=Midazolam&oldid=1368778567
  revision: 1368778567
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL655
  pref-name: MIDAZOLAM
  molecule-type: Small molecule
  first-approval: 1985
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N05CD08
  targets:
  - id: CHEMBL2093872
    name: GABA-A receptor; anion channel
    action: POSITIVE ALLOSTERIC MODULATOR
  properties:
    full-mwt: 325.77
    mw-freebase: 325.77
    alogp: 4.32
    psa: 30.18
    hba: 3
    hbd: 0
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.65
    full-molformula: C18H13ClFN3
pk-verification:
  source: fda-label
  status: consistent
  set-id: f0c8b6cd-9efc-4344-9212-fbdd3b8e2f9b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f0c8b6cd-9efc-4344-9212-fbdd3b8e2f9b
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Midazolam

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `midazolam-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL655](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL655/) · max phase 4 · id via source catalogue

## Source summary

GABA-A receptor; anion channel positive allosteric modulator; approved/marketed compound catalogued by ChEMBL (CHEMBL655).

## Mechanism

GABA-A receptor; anion channel positive allosteric modulator _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1985
- **Flags:** black-box warning
- **ATC N05CD08:** NERVOUS SYSTEM › HYPNOTICS AND SEDATIVES › Benzodiazepine derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 325.77 | 4.32 | 30.18 | 0/3 | 0 | C18H13ClFN3 |

**Targets (ChEMBL curated mechanisms):**

- [[GABA-A receptor; anion channel (CHEMBL2093872)|GABA-A receptor; anion channel]] - positive allosteric modulator · PROTEIN COMPLEX GROUP

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Midazolam*](https://en.wikipedia.org/w/index.php?title=Midazolam&oldid=1368778567) (revision 1368778567, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.5–2.5 h | 1.5–2.5 hours |
| Protein binding | 97 % | 97% |
| Bioavailability | 40 % | By mouth: variable, around 40%; Intramuscular: ≥90% |
| Metabolism | hepatic | Liver: CYP3A3, CYP3A4, CYP3A5 |
| CYP (metabolised by) | CYP3A3, CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set f0c8b6cd…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f0c8b6cd-9efc-4344-9212-fbdd3b8e2f9b), label version 20260619. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1.8, 3, 6.4)
> - protein-binding: consistent (label values: 97)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Abp-700]] (GABA-A receptor; anion channel), [[Adipiplon]] (GABA-A receptor; anion channel), [[Alprazolam]] (GABA-A receptor; anion channel), [[Brexanolone]] (GABA-A receptor; anion channel), [[Butalbital]] (GABA-A receptor; anion channel), [[Cenobamate]] (GABA-A receptor; anion channel), [[Chlordiazepoxide]] (GABA-A receptor; anion channel), [[Cipepofol]] (GABA-A receptor; anion channel), [[Clobazam]] (GABA-A receptor; anion channel), [[Clomethiazole]] (GABA-A receptor; anion channel), [[Clonazepam]] (GABA-A receptor; anion channel), [[Clotiazepam]] (GABA-A receptor; anion channel)
- **Same ATC subgroup:** [[Estazolam]], [[Flunitrazepam]], [[Flurazepam]], [[Quazepam]], [[Remimazolam]], [[Temazepam]], [[Triazolam]]
- **Shared CYP substrate pool:** CYP3A3 (+0 others), CYP3A4 (+204 others), CYP3A5 (+13 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
