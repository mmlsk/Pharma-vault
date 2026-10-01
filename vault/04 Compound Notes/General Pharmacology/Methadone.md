---
type: compound
schema-version: 2
compound-id: methadone-compound
name: Methadone
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
chembl-id: CHEMBL651
chembl-max-phase: 4
half-life:
  value: 15.0
  value-max: 55.0
  unit: h
  notes: 15–55 hours
protein-binding:
  value: 85.0
  value-max: 90.0
  unit: percent
  notes: 85–90%
bioavailability:
  value: 76.0
  value-max: null
  notes: 'Rectal: 76%; SC: 79% ;; Oral: 41–99%; IV/IM: 100%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine, faeces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4, CYP2B6 and CYP2D6-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2B6
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2B6, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Methadone
  url: https://en.wikipedia.org/w/index.php?title=Methadone&oldid=1376375440
  revision: 1376375440
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL651
  pref-name: METHADONE
  molecule-type: Small molecule
  first-approval: 1947
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N02AC52
  - N07BC02
  targets: []
  properties:
    full-mwt: 309.45
    mw-freebase: 309.45
    alogp: 4.29
    psa: 20.31
    hba: 2
    hbd: 0
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.76
    full-molformula: C21H27NO
pk-verification:
  source: fda-label
  status: consistent
  set-id: 4a44bde6-c348-4316-b0e0-c24b407cb823
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4a44bde6-c348-4316-b0e0-c24b407cb823
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Methadone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `methadone-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL651](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL651/) · max phase 4 · id via Wikipedia infobox

## Source summary

Long-acting opioid used for maintenance therapy and for complex pain, with a half-life that varies tenfold between individuals.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1947
- **Flags:** black-box warning
- **ATC N02AC52:** NERVOUS SYSTEM › OPIOIDS › Diphenylpropylamine derivatives
- **ATC N07BC02:** NERVOUS SYSTEM › DRUGS USED IN ADDICTIVE DISORDERS › Drugs used in opioid dependence

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 309.45 | 4.29 | 20.31 | 0/2 | 0 | C21H27NO |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Methadone*](https://en.wikipedia.org/w/index.php?title=Methadone&oldid=1376375440) (revision 1376375440, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 15–55 h | 15–55 hours |
| Protein binding | 85–90 % | 85–90% |
| Bioavailability | 76 % | Rectal: 76%; SC: 79% ;; Oral: 41–99%; IV/IM: 100% |
| Metabolism | hepatic | Liver (CYP3A4, CYP2B6 and CYP2D6-mediated) |
| CYP (metabolised by) | CYP2B6, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • EDDP; • EDMP; • para-Hydroxymethadone |
| Excretion | - | Urine, faeces |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 4a44bde6…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4a44bde6-c348-4316-b0e0-c24b407cb823), label version 20251231. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 8, 59)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Buprenorphine]]
- **Shared CYP substrate pool:** CYP2B6 (+12 others), CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
- [[CYP450 Metabolism]]
