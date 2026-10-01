---
type: compound
schema-version: 2
compound-id: dezocine-compound
name: Dezocine
aliases: []
cluster: General Pharmacology
group: analgesia
class: null
subclass: null
mechanism: Kappa opioid receptor antagonist; Mu opioid receptor partial agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1685
chembl-max-phase: 4
half-life:
  value: 2.2
  value-max: null
  unit: h
  notes: 2.2 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Dezocine
  url: https://en.wikipedia.org/w/index.php?title=Dezocine&oldid=1369637918
  revision: 1369637918
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1685
  pref-name: DEZOCINE
  molecule-type: Small molecule
  first-approval: 1989
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N02AX03
  targets:
  - id: CHEMBL233
    name: Mu-type opioid receptor
    action: PARTIAL AGONIST
  - id: CHEMBL237
    name: Kappa-type opioid receptor
    action: ANTAGONIST
  properties:
    full-mwt: 245.37
    mw-freebase: 245.37
    alogp: 3.11
    psa: 46.25
    hba: 2
    hbd: 2
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.74
    full-molformula: C16H23NO
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Dezocine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dezocine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1685](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1685/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Mixed agonist-antagonist opioid used widely in China, with additional monoamine reuptake inhibition.

## Mechanism

Kappa opioid receptor antagonist; Mu opioid receptor partial agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1989
- **ATC N02AX03:** NERVOUS SYSTEM › OPIOIDS › Other opioids

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 245.37 | 3.11 | 46.25 | 2/2 | 0 | C16H23NO |

**Targets (ChEMBL curated mechanisms):**

- [[Mu-type opioid receptor (CHEMBL233)|Mu-type opioid receptor]] - partial agonist · SINGLE PROTEIN
- [[Kappa-type opioid receptor (CHEMBL237)|Kappa-type opioid receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dezocine*](https://en.wikipedia.org/w/index.php?title=Dezocine&oldid=1369637918) (revision 1369637918, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.2 h | 2.2 hours |
| Metabolism | hepatic | Hepatic |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Buprenorphine]] (Kappa-type opioid receptor; Mu-type opioid receptor), [[Aticaprant]] (Kappa-type opioid receptor), [[Diamorphine (Heroin)]] (Mu-type opioid receptor), [[Difelikefalin]] (Kappa-type opioid receptor), [[Eluxadoline]] (Mu-type opioid receptor), [[Fentanyl]] (Mu-type opioid receptor), [[Oliceridine]] (Mu-type opioid receptor), [[Oxycodone]] (Mu-type opioid receptor), [[Samidorphan]] (Mu-type opioid receptor)
- **Same ATC subgroup:** [[Oliceridine]], [[Tapentadol]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
