---
type: compound
schema-version: 2
compound-id: domperidone-compound
name: Domperidone
aliases: []
cluster: General Pharmacology
group: gi
class: null
subclass: null
mechanism: Dopamine D2 receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL219916
chembl-max-phase: 4
half-life:
  value: 7.0
  value-max: 9.0
  unit: h
  notes: 7–9 hours
protein-binding:
  value: 92.0
  value-max: null
  unit: percent
  notes: ~92%
bioavailability:
  value: 13.0
  value-max: 17.0
  notes: 'Oral: 13–17%; Intramuscular: 90%'
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 'Feces: 66%; Urine: 32%; Breast milk: small quantities'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP3A4/5) and intestinal (first-pass)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- group/gi
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Domperidone
  url: https://en.wikipedia.org/w/index.php?title=Domperidone&oldid=1376277051
  revision: 1376277051
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL219916
  pref-name: DOMPERIDONE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A03FA03
  targets:
  - id: CHEMBL217
    name: D(2) dopamine receptor
    action: ANTAGONIST
  properties:
    full-mwt: 425.92
    mw-freebase: 425.92
    alogp: 3.35
    psa: 78.82
    hba: 5
    hbd: 2
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.51
    full-molformula: C22H24ClN5O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Domperidone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `domperidone-compound`
- **Source group:** Gastrointestinal & Hepatic (`gi`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL219916](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL219916/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Peripheral dopamine antagonist prokinetic that does not cross the blood-brain barrier, so it lacks the extrapyramidal effects of metoclopramide.

## Mechanism

Dopamine D2 receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC A03FA03:** ALIMENTARY TRACT AND METABOLISM › PROPULSIVES › Propulsives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 425.92 | 3.35 | 78.82 | 2/5 | 0 | C22H24ClN5O2 |

**Targets (ChEMBL curated mechanisms):**

- [[D(2) dopamine receptor (CHEMBL217)|D(2) dopamine receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Domperidone*](https://en.wikipedia.org/w/index.php?title=Domperidone&oldid=1376277051) (revision 1376277051, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7–9 h | 7–9 hours |
| Protein binding | 92 % | ~92% |
| Bioavailability | 13–17 % | Oral: 13–17%; Intramuscular: 90% |
| Metabolism | hepatic | Hepatic (CYP3A4/5) and intestinal (first-pass) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | All inactive |
| Excretion | mainly non-renal | Feces: 66%; Urine: 32%; Breast milk: small quantities |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aripiprazole]] (D(2) dopamine receptor), [[Benperidol]] (D(2) dopamine receptor), [[Brexpiprazole]] (D(2) dopamine receptor), [[Cabergoline (Dostinex)]] (D(2) dopamine receptor), [[Clozapine]] (D(2) dopamine receptor), [[Iloperidone]] (D(2) dopamine receptor), [[Itopride]] (D(2) dopamine receptor), [[Lumateperone]] (D(2) dopamine receptor), [[Paliperidone]] (D(2) dopamine receptor), [[Perphenazine]] (D(2) dopamine receptor), [[Pridopidine]] (D(2) dopamine receptor), [[Remoxipride]] (D(2) dopamine receptor)
- **Same ATC subgroup:** [[Acotiamide]], [[Cisapride]], [[Itopride]], [[Metoclopramide]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
