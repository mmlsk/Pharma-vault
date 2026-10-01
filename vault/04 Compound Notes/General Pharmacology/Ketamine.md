---
type: compound
schema-version: 2
compound-id: ketamine-compound
name: Ketamine
aliases: []
cluster: General Pharmacology
group: analgesia
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL742
chembl-max-phase: 4
half-life:
  value: 2.5
  value-max: 3.0
  unit: h
  notes: 'Ketamine: 2.5–3 hours; Norketamine: 12 hours'
protein-binding:
  value: 23.0
  value-max: 47.0
  unit: percent
  notes: 23–47%
bioavailability:
  value: 100.0
  value-max: null
  notes: 'Intravenous: 100%; Intramuscular: 93%; Epidural: 77%; Intranasal: 45–50%; Sublingual: 24–30%; Rectal: 25–30%; By mouth: 16–20%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: 91%; Feces: 3%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver, intestine (oral):; Major: CYP3A4, CYP2B6'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2B6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2B6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- sedation-respiratory-depression
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/analgesia
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Ketamine
  url: https://en.wikipedia.org/w/index.php?title=Ketamine&oldid=1376271887
  revision: 1376271887
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL742
  pref-name: KETAMINE
  molecule-type: Small molecule
  first-approval: 1970
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N01AX03
  targets: []
  properties:
    full-mwt: 237.73
    mw-freebase: 237.73
    alogp: 2.9
    psa: 29.1
    hba: 2
    hbd: 1
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.86
    full-molformula: C13H16ClNO
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Ketamine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ketamine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL742](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL742/) · max phase 4 · id via Wikipedia infobox

## Source summary

Dissociative anaesthetic that maintains airway reflexes and cardiovascular tone, now equally important as a rapid antidepressant and analgesic adjunct.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1970
- **ATC N01AX03:** NERVOUS SYSTEM › ANESTHETICS, GENERAL › Other general anesthetics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 237.73 | 2.9 | 29.1 | 1/2 | 0 | C13H16ClNO |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ketamine*](https://en.wikipedia.org/w/index.php?title=Ketamine&oldid=1376271887) (revision 1376271887, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5–3 h | Ketamine: 2.5–3 hours; Norketamine: 12 hours |
| Protein binding | 23–47 % | 23–47% |
| Bioavailability | 100 % | Intravenous: 100%; Intramuscular: 93%; Epidural: 77%; Intranasal: 45–50%; Sublingual: 24–30%; Rectal: 25–30%; By mouth: 16–20% |
| Metabolism | hepatic | Liver, intestine (oral):; Major: CYP3A4, CYP2B6 |
| CYP (metabolised by) | CYP2B6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Norketamine; Dehydronorketamine; Hydroxynorketamine |
| Excretion | mainly urinary | Urine: 91%; Feces: 3% |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Esketamine (Spravato)]], [[Etomidate]], [[Nitrous Oxide]], [[Propanidid]], [[Propofol]]
- **Shared CYP substrate pool:** CYP2B6 (+12 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
- [[CYP450 Metabolism]]
