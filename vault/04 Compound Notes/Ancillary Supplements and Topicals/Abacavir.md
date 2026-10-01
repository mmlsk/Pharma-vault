---
type: compound
schema-version: 2
compound-id: abacavir-compound
name: Abacavir
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
chembl-id: CHEMBL1380
chembl-max-phase: 4
half-life:
  value: 1.54
  value-max: null
  unit: h
  notes: 1.54 ± 0.63 h
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 83.0
  value-max: null
  notes: 83%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney (1.2% abacavir, 30% 5'-carboxylic acid metabolite, 36% 5'-glucuronide metabolite, 15% unidentified minor metabolites). Fecal (16%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
  title: Abacavir
  url: https://en.wikipedia.org/w/index.php?title=Abacavir&oldid=1351008588
  revision: 1351008588
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1380
  pref-name: ABACAVIR
  molecule-type: Small molecule
  first-approval: 1998
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J05AF06
  targets: []
  properties:
    full-mwt: 286.34
    mw-freebase: 286.34
    alogp: 1.09
    psa: 101.88
    hba: 7
    hbd: 3
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.73
    full-molformula: C14H18N6O
pk-verification:
  source: fda-label
  status: consistent
  set-id: e5cbf204-c10d-444b-aba0-180a30645d55
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e5cbf204-c10d-444b-aba0-180a30645d55
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Abacavir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `abacavir-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1380](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1380/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits HIV reverse transcriptase and is used only as part of a resistance-aware antiretroviral regimen.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1998
- **Flags:** black-box warning, prodrug
- **ATC J05AF06:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Nucleoside and nucleotide reverse transcriptase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 286.34 | 1.09 | 101.88 | 3/7 | 0 | C14H18N6O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Abacavir*](https://en.wikipedia.org/w/index.php?title=Abacavir&oldid=1351008588) (revision 1351008588, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.54 h | 1.54 ± 0.63 h |
| Bioavailability | 83 % | 83% |
| Metabolism | hepatic | Liver |
| Excretion | - | Kidney (1.2% abacavir, 30% 5'-carboxylic acid metabolite, 36% 5'-glucuronide metabolite, 15% unidentified minor metabolites). Fecal (16%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set e5cbf204…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e5cbf204-c10d-444b-aba0-180a30645d55), label version 20260813. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1.54)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Emtricitabine]], [[Lamivudine]], [[Telbivudine]], [[Tenofovir]], [[Tenofovir Alafenamide]], [[Tenofovir Disoproxil]], [[Zidovudine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
