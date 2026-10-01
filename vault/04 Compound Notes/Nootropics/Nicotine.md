---
type: compound
schema-version: 2
compound-id: nicotine-compound
name: Nicotine
aliases: []
cluster: Nootropics
group: nootropic
class: null
subclass: null
mechanism: Neuronal acetylcholine receptor; alpha4/beta2 agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: 2.0
  unit: h
  notes: 1–2 hours; 16–19 hours cotinine (range is 10–27 hours)
protein-binding:
  value: 5.0
  value-max: null
  unit: percent
  notes: <5%
bioavailability:
  value: 80.0
  value-max: 90.0
  notes: 'Inhalation administration; Inhalation: 80–90%; Nasal administration; Intranasal: 60–80%; Transdermal: 68–100%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal, urine pH-dependent;; 10–20% (gum), 30% (inhaled); 10–30% (intranasal)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Primarily hepatic: CYP2A6, CYP2B6, FMO3, others'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2A6
  - CYP2B6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2A6, CYP2B6 (from metabolism field); inhibitor/inducer roles not assessed
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Nicotine
  url: https://en.wikipedia.org/w/index.php?title=Nicotine&oldid=1376342739
  revision: 1376342739
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL3
  pref-name: NICOTINE
  molecule-type: Small molecule
  first-approval: 1984
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N07BA01
  targets:
  - id: CHEMBL1907589
    name: Neuronal acetylcholine receptor; alpha4/beta2
    action: AGONIST
  properties:
    full-mwt: 162.24
    mw-freebase: 162.24
    alogp: 1.85
    psa: 16.13
    hba: 2
    hbd: 0
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.63
    full-molformula: C10H14N2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Nicotine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nicotine-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL3](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Nicotinic acetylcholine receptor agonist with genuine, replicated attentional effects, and the strongest dependence liability of anything in this section. The cognitive benefit is real and so is the addiction.

## Mechanism

Neuronal acetylcholine receptor; alpha4/beta2 agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1984
- **ATC N07BA01:** NERVOUS SYSTEM › DRUGS USED IN ADDICTIVE DISORDERS › Drugs used in nicotine dependence

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 162.24 | 1.85 | 16.13 | 0/2 | 0 | C10H14N2 |

**Targets (ChEMBL curated mechanisms):**

- [[Neuronal acetylcholine receptor; alpha4-beta2 (CHEMBL1907589)|Neuronal acetylcholine receptor; alpha4/beta2]] - agonist · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nicotine*](https://en.wikipedia.org/w/index.php?title=Nicotine&oldid=1376342739) (revision 1376342739, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–2 h | 1–2 hours; 16–19 hours cotinine (range is 10–27 hours) |
| Protein binding | 5 % | <5% |
| Bioavailability | 80–90 % | Inhalation administration; Inhalation: 80–90%; Nasal administration; Intranasal: 60–80%; Transdermal: 68–100% |
| Metabolism | hepatic | Primarily hepatic: CYP2A6, CYP2B6, FMO3, others |
| CYP (metabolised by) | CYP2A6, CYP2B6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Cotinine, Nornicotine, others |
| Excretion | mainly urinary | Renal, urine pH-dependent;; 10–20% (gum), 30% (inhaled); 10–30% (intranasal) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared CYP substrate pool:** CYP2A6 (+4 others), CYP2B6 (+12 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[Cholinergic Load]]
- [[CYP450 Metabolism]]
