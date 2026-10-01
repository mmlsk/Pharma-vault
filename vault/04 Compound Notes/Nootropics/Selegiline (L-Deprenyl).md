---
type: compound
schema-version: 2
compound-id: selegiline-compound
name: Selegiline (L-Deprenyl)
aliases:
- Selegiline
- L-Deprenyl
cluster: Nootropics
group: nootropic
class: null
subclass: null
mechanism: Monoamine oxidase B inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL972
chembl-max-phase: 4
half-life:
  value: 1.2
  value-max: 3.5
  unit: h
  notes: '• S (single): 1.2–3.5 h; • S (multi): 7.7–9.7 h; • DMS (single): 2.2–3.8 h; • DMS (multi): 9.5 h; • L-MA: 14–21 h; • L-A: 16–18 h; ; • S (single): 1.3 h; • S (multi): 10 h; ; • S: 20 h'
protein-binding:
  value: 85.0
  value-max: 90.0
  unit: percent
  notes: 85–90%
bioavailability:
  value: 4.0
  value-max: 10.0
  notes: 'Oral: 4–10%; ODT: ~5–8× oral; Transdermal: 75%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine (87%):; • L-MA: 20–63%; • L-A: 9–26%; • DMS: 1%; • S: 0.01–0.03%; Feces: 15%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, other tissues (CYP2B6, CYP2C19, others)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2B6
  - CYP2C19
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2B6, CYP2C19 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- cns-activity
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/nootropic
- stub
- pk-auto
- chembl-profile
- pk-fda-discrepant
- possible-duplicate
pk-source:
  type: wikipedia-infobox
  title: Selegiline
  url: https://en.wikipedia.org/w/index.php?title=Selegiline&oldid=1369810254
  revision: 1369810254
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL972
  pref-name: SELEGILINE
  molecule-type: Small molecule
  first-approval: 1989
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N04BD01
  targets:
  - id: CHEMBL2039
    name: Amine oxidase [flavin-containing] B
    action: INHIBITOR
  properties:
    full-mwt: 187.29
    mw-freebase: 187.29
    alogp: 2.18
    psa: 3.24
    hba: 1
    hbd: 0
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.65
    full-molformula: C13H17N
pk-verification:
  source: fda-label
  status: discrepant
  set-id: b891bd9f-fdb8-4862-89c5-ecdd700398a3
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b891bd9f-fdb8-4862-89c5-ecdd700398a3
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
---

# Selegiline (L-Deprenyl)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `selegiline-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **Aliases:** Selegiline, L-Deprenyl
- **ChEMBL:** [CHEMBL972](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL972/) · max phase 4 · id via Wikipedia infobox

## Source summary

Irreversible MAO-B inhibitor, selective at low doses and losing that selectivity as dose rises -- which is when the tyramine pressor interaction reappears.

## Mechanism

Monoamine oxidase B inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1989
- **Flags:** black-box warning
- **ATC N04BD01:** NERVOUS SYSTEM › DOPAMINERGIC AGENTS › Monoamine oxidase B inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 187.29 | 2.18 | 3.24 | 0/1 | 0 | C13H17N |

**Targets (ChEMBL curated mechanisms):**

- [[Amine oxidase -flavin-containing- B (CHEMBL2039)|Amine oxidase [flavin-containing] B]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Selegiline*](https://en.wikipedia.org/w/index.php?title=Selegiline&oldid=1369810254) (revision 1369810254, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.2–3.5 h | • S (single): 1.2–3.5 h; • S (multi): 7.7–9.7 h; • DMS (single): 2.2–3.8 h; • DMS (multi): 9.5 h; • L-MA: 14–21 h; • L-A: 16–18 h; ; • S (single): 1.3 h; • S (multi): 10 h; ; • S: 20 h |
| Protein binding | 85–90 % | 85–90% |
| Bioavailability | 4–10 % | Oral: 4–10%; ODT: ~5–8× oral; Transdermal: 75% |
| Metabolism | hepatic | Liver, other tissues (CYP2B6, CYP2C19, others) |
| CYP (metabolised by) | CYP2B6, CYP2C19 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • Desmethylselegiline (DMS); • Levomethamphetamine (L-MA); • Levoamphetamine (L-A) |
| Excretion | mainly urinary | Urine (87%):; • L-MA: 20–63%; • L-A: 9–26%; • DMS: 1%; • S: 0.01–0.03%; Feces: 15% |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set b891bd9f…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b891bd9f-fdb8-4862-89c5-ecdd700398a3), label version 20200515. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 18, 25)
> - protein-binding: consistent (label values: 90)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- ⚠️ **Same molecule in ChEMBL (formulation variant or possible duplicate):** [[Selegiline (oral)]]
- **Shared target:** [[Ralfinamide]] (Amine oxidase [flavin-containing] B), [[Safinamide]] (Amine oxidase [flavin-containing] B), [[Selegiline (oral)]] (Amine oxidase [flavin-containing] B)
- **Same ATC subgroup:** [[Rasagiline (Azilect)]], [[Safinamide]], [[Selegiline (oral)]]
- **Shared CYP substrate pool:** CYP2B6 (+12 others), CYP2C19 (+43 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
