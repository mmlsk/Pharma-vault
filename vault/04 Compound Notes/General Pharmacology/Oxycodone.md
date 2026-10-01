---
type: compound
schema-version: 2
compound-id: oxycodone-compound
name: Oxycodone
aliases: []
cluster: General Pharmacology
group: analgesia
class: null
subclass: null
mechanism: Mu opioid receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL656
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 3.0
  unit: h
  notes: ': 2–3 hours; : 4.5 hours'
protein-binding:
  value: 45.0
  value-max: null
  unit: percent
  notes: 45%
bioavailability:
  value: 60.0
  value-max: 87.0
  notes: 'By mouth: 60–87%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (83%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver: mainly CYP3A, and, to a much lesser extent, CYP2D6 (~5%); 95% metabolized (i.e., 5% excreted unchanged)'
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
- sedation-respiratory-depression
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/analgesia
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Oxycodone
  url: https://en.wikipedia.org/w/index.php?title=Oxycodone&oldid=1373295533
  revision: 1373295533
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL656
  pref-name: OXYCODONE
  molecule-type: Small molecule
  first-approval: 1950
  black-box-warning: true
  withdrawn: true
  atc-codes:
  - N02AA05
  targets:
  - id: CHEMBL233
    name: Mu-type opioid receptor
    action: AGONIST
  properties:
    full-mwt: 315.37
    mw-freebase: 315.37
    alogp: 1.05
    psa: 59.0
    hba: 5
    hbd: 1
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.84
    full-molformula: C18H21NO4
pk-verification:
  source: fda-label
  status: consistent
  set-id: 6b6db42b-9821-4aa6-8566-297037d84079
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6b6db42b-9821-4aa6-8566-297037d84079
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Oxycodone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `oxycodone-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL656](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL656/) · max phase 4 · id via Wikipedia infobox

## Source summary

Semi-synthetic opioid with high oral bioavailability, and the drug at the centre of the North American opioid epidemic.

## Mechanism

Mu opioid receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1950
- **Flags:** black-box warning, withdrawn
- **ATC N02AA05:** NERVOUS SYSTEM › OPIOIDS › Natural opium alkaloids

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 315.37 | 1.05 | 59.0 | 1/5 | 0 | C18H21NO4 |

**Targets (ChEMBL curated mechanisms):**

- [[Mu-type opioid receptor (CHEMBL233)|Mu-type opioid receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Oxycodone*](https://en.wikipedia.org/w/index.php?title=Oxycodone&oldid=1373295533) (revision 1373295533, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–3 h | : 2–3 hours; : 4.5 hours |
| Protein binding | 45 % | 45% |
| Bioavailability | 60–87 % | By mouth: 60–87% |
| Metabolism | hepatic | Liver: mainly CYP3A, and, to a much lesser extent, CYP2D6 (~5%); 95% metabolized (i.e., 5% excreted unchanged) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • Noroxycodone (25%); • Noroxymorphone (15%, free and conjugated); • Oxymorphone (11%, conjugated); • Others (e.g., minor metabolites) |
| Excretion | mainly urinary | Urine (83%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 6b6db42b…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6b6db42b-9821-4aa6-8566-297037d84079), label version 20260723. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 3.5, 4, 6)
> - protein-binding: consistent (label values: 45)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Buprenorphine]] (Mu-type opioid receptor), [[Dezocine]] (Mu-type opioid receptor), [[Diamorphine (Heroin)]] (Mu-type opioid receptor), [[Eluxadoline]] (Mu-type opioid receptor), [[Fentanyl]] (Mu-type opioid receptor), [[Oliceridine]] (Mu-type opioid receptor), [[Samidorphan]] (Mu-type opioid receptor)
- **Same ATC subgroup:** [[Codeine]], [[Hydromorphone]], [[Morphine]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
- [[CYP450 Metabolism]]
