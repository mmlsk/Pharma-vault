---
type: compound
schema-version: 2
compound-id: desvenlafaxine-compound
name: Desvenlafaxine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Norepinephrine transporter inhibitor; Serotonin transporter inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1118
chembl-max-phase: 4
half-life:
  value: 11.0
  value-max: null
  unit: h
  notes: 11 hours
protein-binding:
  value: 30.0
  value-max: null
  unit: percent
  notes: Low (30%)
bioavailability:
  value: 80.0
  value-max: null
  notes: 80%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.45
  notes: 45% excreted unchanged in urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP2C19, CYP3A4, (CYP2D6 is not involved)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Desvenlafaxine
  url: https://en.wikipedia.org/w/index.php?title=Desvenlafaxine&oldid=1364182583
  revision: 1364182583
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1118
  pref-name: DESVENLAFAXINE
  molecule-type: Small molecule
  first-approval: 2008
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06AX23
  targets:
  - id: CHEMBL228
    name: Sodium-dependent serotonin transporter
    action: INHIBITOR
  - id: CHEMBL222
    name: Sodium-dependent noradrenaline transporter
    action: INHIBITOR
  properties:
    full-mwt: 263.38
    mw-freebase: 263.38
    alogp: 2.73
    psa: 43.7
    hba: 3
    hbd: 2
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.88
    full-molformula: C16H25NO2
pk-verification:
  source: fda-label
  status: consistent
  set-id: ff837eb1-24c3-4c63-9b4b-c6b5935a9b47
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ff837eb1-24c3-4c63-9b4b-c6b5935a9b47
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: consistent
---

# Desvenlafaxine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `desvenlafaxine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1118](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1118/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits norepinephrine reuptake, often alongside serotonin effects; blood pressure and discontinuation effects require attention.

## Mechanism

Norepinephrine transporter inhibitor; Serotonin transporter inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2008
- **Flags:** black-box warning
- **ATC N06AX23:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Other antidepressants

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 263.38 | 2.73 | 43.7 | 2/3 | 0 | C16H25NO2 |

**Targets (ChEMBL curated mechanisms):**

- [[Sodium-dependent serotonin transporter (CHEMBL228)|Sodium-dependent serotonin transporter]] - inhibitor · SINGLE PROTEIN
- [[Sodium-dependent noradrenaline transporter (CHEMBL222)|Sodium-dependent noradrenaline transporter]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Desvenlafaxine*](https://en.wikipedia.org/w/index.php?title=Desvenlafaxine&oldid=1364182583) (revision 1364182583, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 11 h | 11 hours |
| Protein binding | 30 % | Low (30%) |
| Bioavailability | 80 % | 80% |
| Metabolism | hepatic | CYP2C19, CYP3A4, (CYP2D6 is not involved) |
| CYP (metabolised by) | CYP2C19, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - · fe 0.45 | 45% excreted unchanged in urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set ff837eb1…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ff837eb1-24c3-4c63-9b4b-c6b5935a9b47), label version 20260821. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: consistent (label values: 30)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Amoxapine]] (Sodium-dependent noradrenaline transporter; Sodium-dependent serotonin transporter), [[Dothiepin]] (Sodium-dependent noradrenaline transporter; Sodium-dependent serotonin transporter), [[MDMA]] (Sodium-dependent noradrenaline transporter; Sodium-dependent serotonin transporter), [[Amphetamine]] (Sodium-dependent noradrenaline transporter), [[Ampreloxetine]] (Sodium-dependent noradrenaline transporter), [[Dapoxetine]] (Sodium-dependent serotonin transporter), [[Debrisoquin]] (Sodium-dependent noradrenaline transporter), [[Dextroamphetamine]] (Sodium-dependent noradrenaline transporter), [[Dibenzepin]] (Sodium-dependent noradrenaline transporter), [[Indalpine]] (Sodium-dependent serotonin transporter), [[Lumateperone]] (Sodium-dependent serotonin transporter), [[Methylphenidate (Ritalin - Concerta)|Methylphenidate (Ritalin / Concerta)]] (Sodium-dependent noradrenaline transporter)
- **Same ATC subgroup:** [[Agomelatine (Valdoxan)]], [[Brexanolone]], [[Bupropion (Wellbutrin)]], [[Duloxetine (Cymbalta)]], [[Esketamine (Spravato)]], [[Levomilnacipran]], [[Minaprine]], [[Mirtazapine]], [[Nefazodone]], [[Tianeptine]], [[Trazodone (Desyrel)]], [[Venlafaxine (Effexor)]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others), CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
