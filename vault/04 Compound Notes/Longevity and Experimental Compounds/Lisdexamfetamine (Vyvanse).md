---
type: compound
schema-version: 2
compound-id: lisdexamfetamine-compound
name: Lisdexamfetamine (Vyvanse)
aliases:
- Lisdexamfetamine
- Vyvanse
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201222
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: null
  unit: h
  notes: 'Lisdexamfetamine: <1 hour; Dextroamphetamine: 10–12 h'
protein-binding:
  value: 20.0
  value-max: null
  unit: percent
  notes: 20% (as dextroamphetamine)
bioavailability:
  value: 96.4
  value-max: null
  notes: 'Oral: 96.4%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Kidney: ~2% as Lisdexamfetamine and ~42% as Dextroamphetamine'
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Hydrolysis by enzymes in red blood cells initially, subsequent metabolism follows
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
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
- chembl-profile
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Lisdexamfetamine
  url: https://en.wikipedia.org/w/index.php?title=Lisdexamfetamine&oldid=1376554958
  revision: 1376554958
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201222
  pref-name: LISDEXAMFETAMINE
  molecule-type: Small molecule
  first-approval: 2007
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06BA12
  targets: []
  properties:
    full-mwt: 263.38
    mw-freebase: 263.38
    alogp: 1.19
    psa: 81.14
    hba: 3
    hbd: 3
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.62
    full-molformula: C15H25N3O
pk-verification:
  source: fda-label
  status: discrepant
  set-id: c11cb3b6-3dff-477b-a249-b4c3118edc5f
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c11cb3b6-3dff-477b-a249-b4c3118edc5f
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: no-label-value
---

# Lisdexamfetamine (Vyvanse)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lisdexamfetamine-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Lisdexamfetamine, Vyvanse
- **ChEMBL:** [CHEMBL1201222](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201222/) · max phase 4 · id via Wikipedia infobox

## Source summary

Dextroamphetamine prodrug for ADHD and binge-eating disorder; controlled stimulant risks still apply.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2007
- **Flags:** black-box warning, prodrug
- **ATC N06BA12:** NERVOUS SYSTEM › PSYCHOSTIMULANTS, AGENTS USED FOR ADHD AND NOOTROPICS › Centrally acting sympathomimetics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 263.38 | 1.19 | 81.14 | 3/3 | 0 | C15H25N3O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lisdexamfetamine*](https://en.wikipedia.org/w/index.php?title=Lisdexamfetamine&oldid=1376554958) (revision 1376554958, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1 h | Lisdexamfetamine: <1 hour; Dextroamphetamine: 10–12 h |
| Protein binding | 20 % | 20% (as dextroamphetamine) |
| Bioavailability | 96.4 % | Oral: 96.4% |
| Metabolism | - | Hydrolysis by enzymes in red blood cells initially, subsequent metabolism follows |
| Metabolites | - | Dextroamphetamine (and its metabolites) and L-lysine |
| Excretion | mainly urinary | Kidney: ~2% as Lisdexamfetamine and ~42% as Dextroamphetamine |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set c11cb3b6…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c11cb3b6-3dff-477b-a249-b4c3118edc5f), label version 20260811. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 8.6, 9.5, 10, 11.3)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Amphetamine]], [[Armodafinil (Nuvigil)]], [[Atomoxetine (Strattera)]], [[Dexmethylphenidate]], [[Dextroamphetamine]], [[Methylphenidate (Ritalin - Concerta)|Methylphenidate (Ritalin / Concerta)]], [[Modafinil (Provigil)]], [[Solriamfetol (Sunosi)]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
