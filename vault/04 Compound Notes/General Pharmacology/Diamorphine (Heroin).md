---
type: compound
schema-version: 2
compound-id: diamorphine-compound
name: Diamorphine (Heroin)
aliases:
- Diamorphine
- Heroin
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
chembl-id: CHEMBL459324
chembl-max-phase: 3
half-life:
  value: 2.0
  value-max: 3.0
  unit: min
  notes: 2–3 minutes
protein-binding:
  value: 0.0
  value-max: null
  unit: percent
  notes: 0% (morphine metabolite 35%)
bioavailability:
  value: 35.0
  value-max: null
  notes: <35% (by mouth), 44–61% (inhalation)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 90% kidney as glucuronides, rest bile duct
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
  title: Heroin
  url: https://en.wikipedia.org/w/index.php?title=Heroin&oldid=1376264455
  revision: 1376264455
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL459324
  pref-name: DIACETYLMORPHINE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL233
    name: Mu-type opioid receptor
    action: AGONIST
  properties:
    full-mwt: 369.42
    mw-freebase: 369.42
    alogp: 1.99
    psa: 65.07
    hba: 6
    hbd: 0
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.45
    full-molformula: C21H23NO5
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Diamorphine (Heroin)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `diamorphine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **Aliases:** Diamorphine, Heroin
- **ChEMBL:** [CHEMBL459324](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL459324/) · max phase 3 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Diacetylmorphine, a prodrug of morphine used clinically in the United Kingdom for acute severe pain and in supervised injectable treatment programmes.

## Mechanism

Mu opioid receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 369.42 | 1.99 | 65.07 | 0/6 | 0 | C21H23NO5 |

**Targets (ChEMBL curated mechanisms):**

- [[Mu-type opioid receptor (CHEMBL233)|Mu-type opioid receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Heroin*](https://en.wikipedia.org/w/index.php?title=Heroin&oldid=1376264455) (revision 1376264455, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–3 min | 2–3 minutes |
| Protein binding | 0 % | 0% (morphine metabolite 35%) |
| Bioavailability | 35 % | <35% (by mouth), 44–61% (inhalation) |
| Metabolism | hepatic | Liver |
| Metabolites | - | 6-Monoacetylmorphine, morphine |
| Excretion | mainly urinary | 90% kidney as glucuronides, rest bile duct |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Buprenorphine]] (Mu-type opioid receptor), [[Dezocine]] (Mu-type opioid receptor), [[Eluxadoline]] (Mu-type opioid receptor), [[Fentanyl]] (Mu-type opioid receptor), [[Oliceridine]] (Mu-type opioid receptor), [[Oxycodone]] (Mu-type opioid receptor), [[Samidorphan]] (Mu-type opioid receptor)

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
