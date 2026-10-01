---
type: compound
schema-version: 2
compound-id: methylphenidate-compound
name: Methylphenidate (Ritalin / Concerta)
aliases:
- Methylphenidate
- Ritalin
- Concerta
cluster: Nootropics
group: nootropic
class: null
subclass: null
mechanism: Dopamine transporter inhibitor; Norepinephrine transporter inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL796
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 3.0
  unit: h
  notes: 2—3 hours
protein-binding:
  value: 15.0
  value-max: null
  unit: percent
  notes: ~15% (±5%) binds to plasma proteins
bioavailability:
  value: 30.0
  value-max: null
  notes: 'Oral: ~30% (range: 11–52%)'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (90%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (80%) mostly CES1-mediated
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
- cns-activity
- evidence-limited
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/nootropic
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Methylphenidate
  url: https://en.wikipedia.org/w/index.php?title=Methylphenidate&oldid=1376343432
  revision: 1376343432
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL796
  pref-name: METHYLPHENIDATE
  molecule-type: Small molecule
  first-approval: 1955
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06BA04
  targets:
  - id: CHEMBL238
    name: Sodium-dependent dopamine transporter
    action: INHIBITOR
  - id: CHEMBL222
    name: Sodium-dependent noradrenaline transporter
    action: INHIBITOR
  properties:
    full-mwt: 233.31
    mw-freebase: 233.31
    alogp: 2.09
    psa: 38.33
    hba: 3
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.81
    full-molformula: C14H19NO2
pk-verification:
  source: fda-label
  status: consistent
  set-id: 1643b6a5-80da-4d4f-8c5f-feb907875702
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1643b6a5-80da-4d4f-8c5f-feb907875702
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Methylphenidate (Ritalin / Concerta)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `methylphenidate-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **Aliases:** Methylphenidate, Ritalin, Concerta
- **ChEMBL:** [CHEMBL796](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL796/) · max phase 4 · id via Wikipedia infobox

## Source summary

Blocks the dopamine and noradrenaline transporters. The best-evidenced cognitive effects in healthy adults are on recall, sustained attention and inhibitory control -- all small, and smaller than users believe.

## Mechanism

Dopamine transporter inhibitor; Norepinephrine transporter inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1955
- **Flags:** black-box warning
- **ATC N06BA04:** NERVOUS SYSTEM › PSYCHOSTIMULANTS, AGENTS USED FOR ADHD AND NOOTROPICS › Centrally acting sympathomimetics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 233.31 | 2.09 | 38.33 | 1/3 | 0 | C14H19NO2 |

**Targets (ChEMBL curated mechanisms):**

- [[Sodium-dependent dopamine transporter (CHEMBL238)|Sodium-dependent dopamine transporter]] - inhibitor · SINGLE PROTEIN
- [[Sodium-dependent noradrenaline transporter (CHEMBL222)|Sodium-dependent noradrenaline transporter]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Methylphenidate*](https://en.wikipedia.org/w/index.php?title=Methylphenidate&oldid=1376343432) (revision 1376343432, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–3 h | 2—3 hours |
| Protein binding | 15 % | ~15% (±5%) binds to plasma proteins |
| Bioavailability | 30 % | Oral: ~30% (range: 11–52%) |
| Metabolism | hepatic | Liver (80%) mostly CES1-mediated |
| Metabolites | - | α-phenyl-2-piperidine acetic acid (ritalinic acid) |
| Excretion | mainly urinary | Urine (90%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 1643b6a5…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1643b6a5-80da-4d4f-8c5f-feb907875702), label version 20251007. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1.4, 2.9, 4, 5)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Amphetamine]] (Sodium-dependent dopamine transporter; Sodium-dependent noradrenaline transporter), [[Dextroamphetamine]] (Sodium-dependent dopamine transporter; Sodium-dependent noradrenaline transporter), [[MDMA]] (Sodium-dependent dopamine transporter; Sodium-dependent noradrenaline transporter), [[Serdexmethylphenidate]] (Sodium-dependent dopamine transporter; Sodium-dependent noradrenaline transporter), [[Amoxapine]] (Sodium-dependent noradrenaline transporter), [[Ampreloxetine]] (Sodium-dependent noradrenaline transporter), [[Armodafinil (Nuvigil)]] (Sodium-dependent dopamine transporter), [[Debrisoquin]] (Sodium-dependent noradrenaline transporter), [[Desvenlafaxine]] (Sodium-dependent noradrenaline transporter), [[Dibenzepin]] (Sodium-dependent noradrenaline transporter), [[Dothiepin]] (Sodium-dependent noradrenaline transporter), [[Modafinil (Provigil)]] (Sodium-dependent dopamine transporter)
- **Same ATC subgroup:** [[Amphetamine]], [[Armodafinil (Nuvigil)]], [[Atomoxetine (Strattera)]], [[Dexmethylphenidate]], [[Dextroamphetamine]], [[Lisdexamfetamine (Vyvanse)]], [[Modafinil (Provigil)]], [[Solriamfetol (Sunosi)]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
