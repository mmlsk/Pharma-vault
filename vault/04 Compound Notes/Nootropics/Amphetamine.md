---
type: compound
schema-version: 2
compound-id: amphetamine-compound
name: Amphetamine
aliases: []
cluster: Nootropics
group: nootropic
class: null
subclass: null
mechanism: Dopamine transporter releasing agent; Norepinephrine transporter releasing agent
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL405
chembl-max-phase: 4
half-life:
  value: 9.0
  value-max: 11.0
  unit: h
  notes: 'D-amph: 9–11 hours; L-amph: 11–14 hours; pH-dependent: 7–34 hours'
protein-binding:
  value: 16.0
  value-max: 20.0
  unit: percent
  notes: 16-20%
bioavailability:
  value: 90.0
  value-max: null
  notes: 'Oral: ~90%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 'Primarily renal;; pH-dependent range: 1–75%'
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
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Amphetamine
  url: https://en.wikipedia.org/w/index.php?title=Amphetamine&oldid=1376818496
  revision: 1376818496
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL405
  pref-name: AMPHETAMINE
  molecule-type: Small molecule
  first-approval: 1955
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06BA01
  targets:
  - id: CHEMBL238
    name: Sodium-dependent dopamine transporter
    action: RELEASING AGENT
  - id: CHEMBL222
    name: Sodium-dependent noradrenaline transporter
    action: RELEASING AGENT
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
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: ae304b29-0b40-40ec-ad0d-76b742d4a9b9
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ae304b29-0b40-40ec-ad0d-76b742d4a9b9
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Amphetamine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `amphetamine-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL405](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL405/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Reverses the dopamine transporter into efflux rather than merely blocking reuptake, which is why it releases transmitter instead of only preserving it. Meta-analysis in healthy non-sleep-deprived adults found no cognitive enhancement.

## Mechanism

Dopamine transporter releasing agent; Norepinephrine transporter releasing agent _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1955
- **Flags:** black-box warning
- **ATC N06BA01:** NERVOUS SYSTEM › PSYCHOSTIMULANTS, AGENTS USED FOR ADHD AND NOOTROPICS › Centrally acting sympathomimetics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 135.21 | 1.58 | 26.02 | 1/1 | 0 | C9H13N |

**Targets (ChEMBL curated mechanisms):**

- [[Sodium-dependent dopamine transporter (CHEMBL238)|Sodium-dependent dopamine transporter]] - releasing agent · SINGLE PROTEIN
- [[Sodium-dependent noradrenaline transporter (CHEMBL222)|Sodium-dependent noradrenaline transporter]] - releasing agent · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Amphetamine*](https://en.wikipedia.org/w/index.php?title=Amphetamine&oldid=1376818496) (revision 1376818496, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9–11 h | D-amph: 9–11 hours; L-amph: 11–14 hours; pH-dependent: 7–34 hours |
| Protein binding | 16–20 % | 16-20% |
| Bioavailability | 90 % | Oral: ~90% |
| Metabolism | hepatic | CYP2D6, DBH, FMO3 |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | 4-hydroxyamphetamine, 4-hydroxynorephedrine, 4-hydroxyphenylacetone, N-hydroxyamphetamine, benzoic acid, hippuric acid, norephedrine, phenylacetone |
| Excretion | - | Primarily renal;; pH-dependent range: 1–75% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set ae304b29…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ae304b29-0b40-40ec-ad0d-76b742d4a9b9), label version 20260224. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 10.4, 12.1, 12.4, 13.5, 15.1, 17.3)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Dextroamphetamine]] (Sodium-dependent dopamine transporter; Sodium-dependent noradrenaline transporter), [[MDMA]] (Sodium-dependent dopamine transporter; Sodium-dependent noradrenaline transporter), [[Methylphenidate (Ritalin - Concerta)|Methylphenidate (Ritalin / Concerta)]] (Sodium-dependent dopamine transporter; Sodium-dependent noradrenaline transporter), [[Serdexmethylphenidate]] (Sodium-dependent dopamine transporter; Sodium-dependent noradrenaline transporter), [[Amoxapine]] (Sodium-dependent noradrenaline transporter), [[Ampreloxetine]] (Sodium-dependent noradrenaline transporter), [[Armodafinil (Nuvigil)]] (Sodium-dependent dopamine transporter), [[Debrisoquin]] (Sodium-dependent noradrenaline transporter), [[Desvenlafaxine]] (Sodium-dependent noradrenaline transporter), [[Dibenzepin]] (Sodium-dependent noradrenaline transporter), [[Dothiepin]] (Sodium-dependent noradrenaline transporter), [[Modafinil (Provigil)]] (Sodium-dependent dopamine transporter)
- **Same ATC subgroup:** [[Armodafinil (Nuvigil)]], [[Atomoxetine (Strattera)]], [[Dexmethylphenidate]], [[Dextroamphetamine]], [[Lisdexamfetamine (Vyvanse)]], [[Methylphenidate (Ritalin - Concerta)|Methylphenidate (Ritalin / Concerta)]], [[Modafinil (Provigil)]], [[Solriamfetol (Sunosi)]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
