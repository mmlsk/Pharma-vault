---
type: compound
schema-version: 2
compound-id: citalopram-compound
name: Citalopram
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL549
chembl-max-phase: 4
half-life:
  value: 35.0
  value-max: null
  unit: h
  notes: 35 hours
protein-binding:
  value: 80.0
  value-max: null
  unit: percent
  notes: <80%
bioavailability:
  value: 80.0
  value-max: null
  notes: 80% ; peak at 4 hours
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Mostly as unmetabolized citalopram, partly DCT, and traces of DDCT in urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4 and CYP2C19)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Citalopram
  url: https://en.wikipedia.org/w/index.php?title=Citalopram&oldid=1374924002
  revision: 1374924002
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL549
  pref-name: CITALOPRAM
  molecule-type: Small molecule
  first-approval: 1998
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06AB04
  targets: []
  properties:
    full-mwt: 324.4
    mw-freebase: 324.4
    alogp: 3.81
    psa: 36.26
    hba: 3
    hbd: 0
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.84
    full-molformula: C20H21FN2O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: aa9c1440-354f-43a6-9e70-fd7bafcb03c5
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=aa9c1440-354f-43a6-9e70-fd7bafcb03c5
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Citalopram

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `citalopram-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL549](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL549/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits serotonin reuptake through SERT; benefits, activation, sexual effects, and withdrawal profiles differ by agent.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1998
- **Flags:** black-box warning
- **ATC N06AB04:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Selective serotonin reuptake inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 324.4 | 3.81 | 36.26 | 0/3 | 0 | C20H21FN2O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Citalopram*](https://en.wikipedia.org/w/index.php?title=Citalopram&oldid=1374924002) (revision 1374924002, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 35 h | 35 hours |
| Protein binding | 80 % | <80% |
| Bioavailability | 80 % | 80% ; peak at 4 hours |
| Metabolism | hepatic | Liver (CYP3A4 and CYP2C19) |
| CYP (metabolised by) | CYP2C19, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Desmethylcitalopram (DCT) and didesmethylcitalopram (DDCT) |
| Excretion | - | Mostly as unmetabolized citalopram, partly DCT, and traces of DDCT in urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set aa9c1440…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=aa9c1440-354f-43a6-9e70-fd7bafcb03c5), label version 20260727. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 35)
> - protein-binding: consistent (label values: 80)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Alaproclate]], [[Escitalopram (Lexapro)]], [[Fluoxetine (Prozac)]], [[Fluvoxamine]], [[Paroxetine]], [[Sertraline (Zoloft)]], [[Zimelidine]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
