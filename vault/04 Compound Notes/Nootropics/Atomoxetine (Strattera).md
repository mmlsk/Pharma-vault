---
type: compound
schema-version: 2
compound-id: atomoxetine-compound
name: Atomoxetine (Strattera)
aliases:
- Atomoxetine
- Strattera
cluster: Nootropics
group: nootropic
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL641
chembl-max-phase: 4
half-life:
  value: 4.5
  value-max: 5.3
  unit: h
  notes: '2D6 EMs: 4.5–5.3 h; 2D6 PMs: 19–22 h'
protein-binding:
  value: 98.7
  value-max: null
  unit: percent
  notes: 'ATX: 98.7%; 4-OH-ATX: 66.6%; N-DM-ATX: 99.1%'
bioavailability:
  value: 94.0
  value-max: null
  notes: '2D6 EMs: 94%; 2D6 PMs: 63%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: '2D6 EMs: urine (>96%), feces (1–2%); 2D6 PMs: urine (80%), feces (13–22%)'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver: ring hydroxylation (CYP2D6, others), benzylic hydroxylation, N-demethylation (CYP2C19), glucuronidation (UGTs)'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Atomoxetine
  url: https://en.wikipedia.org/w/index.php?title=Atomoxetine&oldid=1375538637
  revision: 1375538637
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL641
  pref-name: ATOMOXETINE
  molecule-type: Small molecule
  first-approval: 2002
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06BA09
  targets: []
  properties:
    full-mwt: 255.36
    mw-freebase: 255.36
    alogp: 3.72
    psa: 21.26
    hba: 2
    hbd: 1
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.85
    full-molformula: C17H21NO
pk-verification:
  source: fda-label
  status: consistent
  set-id: d7002d75-edad-4141-91bf-7eebf50ad1aa
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d7002d75-edad-4141-91bf-7eebf50ad1aa
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Atomoxetine (Strattera)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `atomoxetine-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **Aliases:** Atomoxetine, Strattera
- **ChEMBL:** [CHEMBL641](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL641/) · max phase 4 · id via Wikipedia infobox

## Source summary

Selective noradrenaline reuptake inhibitor for ADHD. Non-stimulant and non-scheduled, with a slow onset over weeks rather than hours -- a genuinely different clinical shape from the stimulants.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2002
- **Flags:** black-box warning
- **ATC N06BA09:** NERVOUS SYSTEM › PSYCHOSTIMULANTS, AGENTS USED FOR ADHD AND NOOTROPICS › Centrally acting sympathomimetics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 255.36 | 3.72 | 21.26 | 1/2 | 0 | C17H21NO |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Atomoxetine*](https://en.wikipedia.org/w/index.php?title=Atomoxetine&oldid=1375538637) (revision 1375538637, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4.5–5.3 h | 2D6 EMs: 4.5–5.3 h; 2D6 PMs: 19–22 h |
| Protein binding | 98.7 % | ATX: 98.7%; 4-OH-ATX: 66.6%; N-DM-ATX: 99.1% |
| Bioavailability | 94 % | 2D6 EMs: 94%; 2D6 PMs: 63% |
| Metabolism | hepatic | Liver: ring hydroxylation (CYP2D6, others), benzylic hydroxylation, N-demethylation (CYP2C19), glucuronidation (UGTs) |
| CYP (metabolised by) | CYP2C19, CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • 4-Hydroxyatomoxetine; • N-Desmethylatomoxetine; ; • N-Desmethyl-4-hydroxyatomoxetine; • Glucuronide conjugates |
| Excretion | mainly urinary | 2D6 EMs: urine (>96%), feces (1–2%); 2D6 PMs: urine (80%), feces (13–22%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set d7002d75…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d7002d75-edad-4141-91bf-7eebf50ad1aa), label version 20260904. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 5, 5.2, 6, 8, 21.6, 24)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Amphetamine]], [[Armodafinil (Nuvigil)]], [[Dexmethylphenidate]], [[Dextroamphetamine]], [[Lisdexamfetamine (Vyvanse)]], [[Methylphenidate (Ritalin - Concerta)|Methylphenidate (Ritalin / Concerta)]], [[Modafinil (Provigil)]], [[Solriamfetol (Sunosi)]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others), CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
