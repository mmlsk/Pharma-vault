---
type: compound
schema-version: 2
compound-id: letrozole-compound
name: Femara (Letrozole)
aliases:
- Femara
- Letrozole
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
chembl-id: CHEMBL1444
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: null
  unit: d
  notes: 2 days
protein-binding:
  value: 60.0
  value-max: null
  unit: percent
  notes: 60%, mainly to albumin
bioavailability:
  value: 99.9
  value-max: null
  notes: 99.9%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: pharmacologically-inactive metabolites Bis(4-cyanophenyl)methanol and 4,4'-dicyanobenzophenone.
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
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Letrozole
  url: https://en.wikipedia.org/w/index.php?title=Letrozole&oldid=1356902222
  revision: 1356902222
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1444
  pref-name: LETROZOLE
  molecule-type: Small molecule
  first-approval: 1997
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L02BG04
  targets:
  - id: CHEMBL1978
    name: Aromatase
    action: INHIBITOR
  properties:
    full-mwt: 285.31
    mw-freebase: 285.31
    alogp: 2.66
    psa: 78.29
    hba: 5
    hbd: 0
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.74
    full-molformula: C17H11N5
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 3cc750a5-cc88-4b42-b4ab-a87e760f291d
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3cc750a5-cc88-4b42-b4ab-a87e760f291d
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Femara (Letrozole)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `letrozole-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Femara, Letrozole
- **ChEMBL:** [CHEMBL1444](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1444/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Highly potent non-steroidal aromatase inhibitor, more aggressive than anastrozole at suppressing estrogen.

## Mechanism

Cytochrome P450 19A1 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1997
- **ATC L02BG04:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › HORMONE ANTAGONISTS AND RELATED AGENTS › Aromatase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 285.31 | 2.66 | 78.29 | 0/5 | 0 | C17H11N5 |

**Targets (ChEMBL curated mechanisms):**

- [[Aromatase (CHEMBL1978)|Aromatase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Letrozole*](https://en.wikipedia.org/w/index.php?title=Letrozole&oldid=1356902222) (revision 1356902222, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 d | 2 days |
| Protein binding | 60 % | 60%, mainly to albumin |
| Bioavailability | 99.9 % | 99.9% |
| Metabolism | - | pharmacologically-inactive metabolites Bis(4-cyanophenyl)methanol and 4,4'-dicyanobenzophenone. |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 3cc750a5…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3cc750a5-cc88-4b42-b4ab-a87e760f291d), label version 20260820. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 48)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aminoglutethimide]] (Aromatase), [[Arimidex (Anastrozole)]] (Aromatase), [[Aromasin (Exemestane)]] (Aromatase), [[Testolactone]] (Aromatase)
- **Same ATC subgroup:** [[Aminoglutethimide]], [[Arimidex (Anastrozole)]], [[Aromasin (Exemestane)]], [[Formestane]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
