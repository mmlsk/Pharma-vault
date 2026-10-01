---
type: compound
schema-version: 2
compound-id: propofol-compound
name: Propofol
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
chembl-id: CHEMBL526
chembl-max-phase: 4
half-life:
  value: 1.5
  value-max: 31.0
  unit: h
  notes: 1.5–31 hours
protein-binding:
  value: 95.0
  value-max: 99.0
  unit: percent
  notes: 95–99%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Liver
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver glucuronidation
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
  title: Propofol
  url: https://en.wikipedia.org/w/index.php?title=Propofol&oldid=1376002434
  revision: 1376002434
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL526
  pref-name: PROPOFOL
  molecule-type: Small molecule
  first-approval: 1989
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N01AX10
  targets:
  - id: CHEMBL2093872
    name: GABA-A receptor; anion channel
    action: POSITIVE ALLOSTERIC MODULATOR
  properties:
    full-mwt: 178.27
    mw-freebase: 178.27
    alogp: 3.64
    psa: 20.23
    hba: 1
    hbd: 1
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.73
    full-molformula: C12H18O
pk-verification:
  source: fda-label
  status: consistent
  set-id: 9ba70032-40c2-41c5-9f99-d1f94032d3dc
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=9ba70032-40c2-41c5-9f99-d1f94032d3dc
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Propofol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `propofol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL526](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL526/) · max phase 4 · id via source catalogue

## Source summary

GABA-A receptor; anion channel positive allosteric modulator; approved/marketed compound catalogued by ChEMBL (CHEMBL526).

## Mechanism

GABA-A receptor; anion channel positive allosteric modulator _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1989
- **ATC N01AX10:** NERVOUS SYSTEM › ANESTHETICS, GENERAL › Other general anesthetics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 178.27 | 3.64 | 20.23 | 1/1 | 0 | C12H18O |

**Targets (ChEMBL curated mechanisms):**

- [[GABA-A receptor; anion channel (CHEMBL2093872)|GABA-A receptor; anion channel]] - positive allosteric modulator · PROTEIN COMPLEX GROUP

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Propofol*](https://en.wikipedia.org/w/index.php?title=Propofol&oldid=1376002434) (revision 1376002434, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.5–31 h | 1.5–31 hours |
| Protein binding | 95–99 % | 95–99% |
| Metabolism | hepatic | Liver glucuronidation |
| Excretion | - | Liver |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 9ba70032…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=9ba70032-40c2-41c5-9f99-d1f94032d3dc), label version 20260918. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 24, 72)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Abp-700]] (GABA-A receptor; anion channel), [[Adipiplon]] (GABA-A receptor; anion channel), [[Alprazolam]] (GABA-A receptor; anion channel), [[Brexanolone]] (GABA-A receptor; anion channel), [[Butalbital]] (GABA-A receptor; anion channel), [[Cenobamate]] (GABA-A receptor; anion channel), [[Chlordiazepoxide]] (GABA-A receptor; anion channel), [[Cipepofol]] (GABA-A receptor; anion channel), [[Clobazam]] (GABA-A receptor; anion channel), [[Clomethiazole]] (GABA-A receptor; anion channel), [[Clonazepam]] (GABA-A receptor; anion channel), [[Clotiazepam]] (GABA-A receptor; anion channel)
- **Same ATC subgroup:** [[Esketamine (Spravato)]], [[Etomidate]], [[Ketamine]], [[Nitrous Oxide]], [[Propanidid]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
