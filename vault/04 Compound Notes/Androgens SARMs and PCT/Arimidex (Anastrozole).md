---
type: compound
schema-version: 2
compound-id: anastrozole-compound
name: Arimidex (Anastrozole)
aliases:
- Arimidex
- Anastrozole
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: Cytochrome P450 19A1 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1399
chembl-max-phase: 4
half-life:
  value: 40.0
  value-max: 50.0
  unit: h
  notes: 40–50 hours
protein-binding:
  value: 40.0
  value-max: null
  unit: percent
  notes: 40%
bioavailability:
  value: null
  value-max: null
  notes: Unknown (but well-absorbed in animals)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (11%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (~85%) (N-dealkylation, hydroxylation, glucuronidation)
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
- endocrine-feedback-disruption
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/pct
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Anastrozole
  url: https://en.wikipedia.org/w/index.php?title=Anastrozole&oldid=1356471610
  revision: 1356471610
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1399
  pref-name: ANASTROZOLE
  molecule-type: Small molecule
  first-approval: 1995
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L02BG03
  targets:
  - id: CHEMBL1978
    name: Aromatase
    action: INHIBITOR
  properties:
    full-mwt: 293.37
    mw-freebase: 293.37
    alogp: 2.93
    psa: 78.29
    hba: 5
    hbd: 0
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.87
    full-molformula: C17H19N5
pk-verification:
  source: fda-label
  status: consistent
  set-id: 1d1d5818-1594-4f54-90a9-ae9a9afcdc67
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1d1d5818-1594-4f54-90a9-ae9a9afcdc67
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Arimidex (Anastrozole)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `anastrozole-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Arimidex, Anastrozole
- **ChEMBL:** [CHEMBL1399](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1399/) · max phase 4 · id via Wikipedia infobox

## Source summary

Non-steroidal aromatase inhibitor used to control estrogen-related side effects during anabolic steroid use.

## Mechanism

Cytochrome P450 19A1 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1995
- **ATC L02BG03:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › HORMONE ANTAGONISTS AND RELATED AGENTS › Aromatase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 293.37 | 2.93 | 78.29 | 0/5 | 0 | C17H19N5 |

**Targets (ChEMBL curated mechanisms):**

- [[Aromatase (CHEMBL1978)|Aromatase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Anastrozole*](https://en.wikipedia.org/w/index.php?title=Anastrozole&oldid=1356471610) (revision 1356471610, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 40–50 h | 40–50 hours |
| Protein binding | 40 % | 40% |
| Bioavailability | - | Unknown (but well-absorbed in animals) |
| Metabolism | hepatic | Liver (~85%) (N-dealkylation, hydroxylation, glucuronidation) |
| Excretion | mainly urinary | Urine (11%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 1d1d5818…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1d1d5818-1594-4f54-90a9-ae9a9afcdc67), label version 20260820. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 50)
> - protein-binding: consistent (label values: 40)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aminoglutethimide]] (Aromatase), [[Aromasin (Exemestane)]] (Aromatase), [[Femara (Letrozole)]] (Aromatase), [[Testolactone]] (Aromatase)
- **Same ATC subgroup:** [[Aminoglutethimide]], [[Aromasin (Exemestane)]], [[Femara (Letrozole)]], [[Formestane]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
