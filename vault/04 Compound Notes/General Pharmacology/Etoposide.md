---
type: compound
schema-version: 2
compound-id: etoposide-compound
name: Etoposide
aliases: []
cluster: General Pharmacology
group: oncology
class: null
subclass: null
mechanism: DNA topoisomerase II inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL44657
chembl-max-phase: 4
half-life:
  value: 6.0
  value-max: null
  unit: h
  notes: 'Oral: 6 h., IV: 6-12 h., IV in children: 3 h.'
protein-binding:
  value: 97.0
  value-max: null
  unit: percent
  notes: 97%
bioavailability:
  value: 25.0
  value-max: 75.0
  notes: Highly variable, 25 to 75%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney and fecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4 involved)
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
- cytotoxicity
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/oncology
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Etoposide
  url: https://en.wikipedia.org/w/index.php?title=Etoposide&oldid=1366097537
  revision: 1366097537
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL44657
  pref-name: ETOPOSIDE
  molecule-type: Small molecule
  first-approval: 1983
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L01CB01
  targets:
  - id: CHEMBL2094255
    name: DNA topoisomerase II
    action: INHIBITOR
  properties:
    full-mwt: 588.56
    mw-freebase: 588.56
    alogp: 1.34
    psa: 160.83
    hba: 13
    hbd: 3
    rtb: 5
    num-ro5-violations: 2
    qed-weighted: 0.43
    full-molformula: C29H32O13
pk-verification:
  source: fda-label
  status: consistent
  set-id: 7bc994df-ee84-4ed7-80fa-737f70918953
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7bc994df-ee84-4ed7-80fa-737f70918953
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Etoposide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `etoposide-compound`
- **Source group:** Oncology & Cytotoxics (`oncology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL44657](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL44657/) · max phase 4 · id via Wikipedia infobox

## Source summary

A podophyllotoxin-derived topoisomerase II poison that stabilises the enzyme-DNA cleavage complex, producing double-strand breaks. Its therapy-related leukaemia risk is a direct consequence of that mechanism.

## Mechanism

DNA topoisomerase II inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1983
- **Flags:** black-box warning
- **ATC L01CB01:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › PLANT ALKALOIDS AND OTHER NATURAL PRODUCTS › Podophyllotoxin derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 588.56 | 1.34 | 160.83 | 3/13 | 2 | C29H32O13 |

**Targets (ChEMBL curated mechanisms):**

- [[DNA topoisomerase II (CHEMBL2094255)|DNA topoisomerase II]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Etoposide*](https://en.wikipedia.org/w/index.php?title=Etoposide&oldid=1366097537) (revision 1366097537, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6 h | Oral: 6 h., IV: 6-12 h., IV in children: 3 h. |
| Protein binding | 97 % | 97% |
| Bioavailability | 25–75 % | Highly variable, 25 to 75% |
| Metabolism | hepatic | Liver (CYP3A4 involved) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Kidney and fecal |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 7bc994df…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7bc994df-ee84-4ed7-80fa-737f70918953), label version 20260723. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1.5, 4, 11)
> - protein-binding: consistent (label values: 97)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Dexrazoxane (Zinecard)]] (DNA topoisomerase II)
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cytotoxicity`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
