---
type: compound
schema-version: 2
compound-id: dextroamphetamine-compound
name: Dextroamphetamine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Norepinephrine transporter releasing agent
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL612
chembl-max-phase: 4
half-life:
  value: 9.0
  value-max: 11.0
  unit: h
  notes: '9–11 hours; pH-dependent: 7–34 hours'
protein-binding:
  value: 15.0
  value-max: 40.0
  unit: percent
  notes: 15–40%
bioavailability:
  value: 90.0
  value-max: null
  notes: 'Oral: ~90%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (45%); urinary pH-dependent
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP2D6, DBH, FMO3
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Dextroamphetamine
  url: https://en.wikipedia.org/w/index.php?title=Dextroamphetamine&oldid=1376553161
  revision: 1376553161
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL612
  pref-name: DEXTROAMPHETAMINE
  molecule-type: Small molecule
  first-approval: 1955
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06BA02
  targets:
  - id: CHEMBL238
    name: Sodium-dependent dopamine transporter
    action: RELEASING AGENT
  - id: CHEMBL222
    name: Sodium-dependent noradrenaline transporter
    action: RELEASING AGENT
  - id: CHEMBL1893
    name: Synaptic vesicular amine transporter
    action: INHIBITOR
  properties:
    full-mwt: 135.21
    mw-freebase: 135.21
    alogp: 1.58
    psa: 26.02
    hba: 1
    hbd: 1
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.65
    full-molformula: C9H13N
pk-verification:
  source: fda-label
  status: consistent
  set-id: 0862f02a-72a8-41cc-8845-57cf4974bb6f
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0862f02a-72a8-41cc-8845-57cf4974bb6f
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Dextroamphetamine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dextroamphetamine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL612](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL612/) · max phase 4 · id via source catalogue

## Source summary

Norepinephrine transporter releasing agent; approved/marketed compound catalogued by ChEMBL (CHEMBL612).

## Mechanism

Norepinephrine transporter releasing agent _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1955
- **Flags:** black-box warning
- **ATC N06BA02:** NERVOUS SYSTEM › PSYCHOSTIMULANTS, AGENTS USED FOR ADHD AND NOOTROPICS › Centrally acting sympathomimetics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 135.21 | 1.58 | 26.02 | 1/1 | 0 | C9H13N |

**Targets (ChEMBL curated mechanisms):**

- [[Sodium-dependent dopamine transporter (CHEMBL238)|Sodium-dependent dopamine transporter]] - releasing agent · SINGLE PROTEIN
- [[Sodium-dependent noradrenaline transporter (CHEMBL222)|Sodium-dependent noradrenaline transporter]] - releasing agent · SINGLE PROTEIN
- [[Synaptic vesicular amine transporter (CHEMBL1893)|Synaptic vesicular amine transporter]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dextroamphetamine*](https://en.wikipedia.org/w/index.php?title=Dextroamphetamine&oldid=1376553161) (revision 1376553161, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9–11 h | 9–11 hours; pH-dependent: 7–34 hours |
| Protein binding | 15–40 % | 15–40% |
| Bioavailability | 90 % | Oral: ~90% |
| Metabolism | hepatic | CYP2D6, DBH, FMO3 |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | 4-Hydroxyamphetamine |
| Excretion | mainly urinary | Kidney (45%); urinary pH-dependent |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 0862f02a…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0862f02a-72a8-41cc-8845-57cf4974bb6f), label version 20251223. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 6.4, 9, 11.5)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Amphetamine]] (Sodium-dependent dopamine transporter; Sodium-dependent noradrenaline transporter), [[MDMA]] (Sodium-dependent dopamine transporter; Sodium-dependent noradrenaline transporter), [[Methylphenidate (Ritalin - Concerta)|Methylphenidate (Ritalin / Concerta)]] (Sodium-dependent dopamine transporter; Sodium-dependent noradrenaline transporter), [[Serdexmethylphenidate]] (Sodium-dependent dopamine transporter; Sodium-dependent noradrenaline transporter), [[Amoxapine]] (Sodium-dependent noradrenaline transporter), [[Ampreloxetine]] (Sodium-dependent noradrenaline transporter), [[Armodafinil (Nuvigil)]] (Sodium-dependent dopamine transporter), [[Debrisoquin]] (Sodium-dependent noradrenaline transporter), [[Desvenlafaxine]] (Sodium-dependent noradrenaline transporter), [[Deutetrabenazine]] (Synaptic vesicular amine transporter), [[Dibenzepin]] (Sodium-dependent noradrenaline transporter), [[Dothiepin]] (Sodium-dependent noradrenaline transporter)
- **Same ATC subgroup:** [[Amphetamine]], [[Armodafinil (Nuvigil)]], [[Atomoxetine (Strattera)]], [[Dexmethylphenidate]], [[Lisdexamfetamine (Vyvanse)]], [[Methylphenidate (Ritalin - Concerta)|Methylphenidate (Ritalin / Concerta)]], [[Modafinil (Provigil)]], [[Solriamfetol (Sunosi)]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
