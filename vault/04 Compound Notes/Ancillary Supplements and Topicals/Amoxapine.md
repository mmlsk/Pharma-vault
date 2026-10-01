---
type: compound
schema-version: 2
compound-id: amoxapine-compound
name: Amoxapine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Serotonin transporter inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1113
chembl-max-phase: 4
half-life:
  value: 8.0
  value-max: 10.0
  unit: h
  notes: 8–10 hours (30 hours for chief active metabolite)
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: 90%
bioavailability:
  value: 60.0
  value-max: null
  notes: '>60%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal (60%), feces (18%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (cytochrome P450 system)
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Amoxapine
  url: https://en.wikipedia.org/w/index.php?title=Amoxapine&oldid=1373846822
  revision: 1373846822
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1113
  pref-name: AMOXAPINE
  molecule-type: Small molecule
  first-approval: 1980
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06AA17
  targets:
  - id: CHEMBL228
    name: Sodium-dependent serotonin transporter
    action: INHIBITOR
  - id: CHEMBL222
    name: Sodium-dependent noradrenaline transporter
    action: INHIBITOR
  - id: CHEMBL2096905
    name: Dopamine receptor
    action: ANTAGONIST
  properties:
    full-mwt: 313.79
    mw-freebase: 313.79
    alogp: 3.43
    psa: 36.86
    hba: 4
    hbd: 1
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.81
    full-molformula: C17H16ClN3O
pk-verification:
  source: fda-label
  status: discrepant
  set-id: eed5e856-dd7b-4eaa-9dad-508f2bef9328
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=eed5e856-dd7b-4eaa-9dad-508f2bef9328
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: no-label-value
---

# Amoxapine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `amoxapine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1113](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1113/) · max phase 4 · id via source catalogue

## Source summary

Serotonin transporter inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL1113).

## Mechanism

Serotonin transporter inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1980
- **Flags:** black-box warning
- **ATC N06AA17:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Non-selective monoamine reuptake inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 313.79 | 3.43 | 36.86 | 1/4 | 0 | C17H16ClN3O |

**Targets (ChEMBL curated mechanisms):**

- [[Sodium-dependent serotonin transporter (CHEMBL228)|Sodium-dependent serotonin transporter]] - inhibitor · SINGLE PROTEIN
- [[Sodium-dependent noradrenaline transporter (CHEMBL222)|Sodium-dependent noradrenaline transporter]] - inhibitor · SINGLE PROTEIN
- [[Dopamine receptor (CHEMBL2096905)|Dopamine receptor]] - antagonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Amoxapine*](https://en.wikipedia.org/w/index.php?title=Amoxapine&oldid=1373846822) (revision 1373846822, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8–10 h | 8–10 hours (30 hours for chief active metabolite) |
| Protein binding | 90 % | 90% |
| Bioavailability | 60 % | >60% |
| Metabolism | hepatic | Hepatic (cytochrome P450 system) |
| Excretion | mainly urinary | Renal (60%), feces (18%) |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set eed5e856…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=eed5e856-dd7b-4eaa-9dad-508f2bef9328), label version 20241218. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 30)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Desvenlafaxine]] (Sodium-dependent noradrenaline transporter; Sodium-dependent serotonin transporter), [[Dothiepin]] (Sodium-dependent noradrenaline transporter; Sodium-dependent serotonin transporter), [[MDMA]] (Sodium-dependent noradrenaline transporter; Sodium-dependent serotonin transporter), [[Amphetamine]] (Sodium-dependent noradrenaline transporter), [[Ampreloxetine]] (Sodium-dependent noradrenaline transporter), [[Dapoxetine]] (Sodium-dependent serotonin transporter), [[Debrisoquin]] (Sodium-dependent noradrenaline transporter), [[Dextroamphetamine]] (Sodium-dependent noradrenaline transporter), [[Dibenzepin]] (Sodium-dependent noradrenaline transporter), [[Indalpine]] (Sodium-dependent serotonin transporter), [[Lumateperone]] (Sodium-dependent serotonin transporter), [[Methylphenidate (Ritalin - Concerta)|Methylphenidate (Ritalin / Concerta)]] (Sodium-dependent noradrenaline transporter)
- **Same ATC subgroup:** [[Amineptine]], [[Amitriptyline]], [[Clomipramine]], [[Desipramine]], [[Dibenzepin]], [[Dothiepin]], [[Doxepin]], [[Doxepin, low dose (Silenor)]], [[Imipramine]], [[Maprotiline]], [[Nortriptyline]], [[Protriptyline]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
