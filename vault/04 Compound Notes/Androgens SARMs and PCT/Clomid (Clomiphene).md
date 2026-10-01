---
type: compound
schema-version: 2
compound-id: clomiphene-compound
name: Clomid (Clomiphene)
aliases:
- Clomid
- Clomiphene
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2355051
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: 7.0
  unit: d
  notes: '4–7 days ;; active metabolites: ;; 4-OH-CLO : 13–34 hrs ;; 4-OH-DE-CLO : 15–37 hrs'
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 90.0
  value-max: null
  notes: High (>90%)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Mainly feces, some in urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver CYP2D6 (with enterohepatic circulation)
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
- endocrine-feedback-disruption
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/pct
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Clomifene
  url: https://en.wikipedia.org/w/index.php?title=Clomifene&oldid=1368196377
  revision: 1368196377
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL2355051
  pref-name: CLOMIPHENE
  molecule-type: Small molecule
  first-approval: 1967
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - G03GB02
  targets: []
  properties:
    full-mwt: 405.97
    mw-freebase: 405.97
    alogp: 6.56
    psa: 12.47
    hba: 2
    hbd: 0
    rtb: 9
    num-ro5-violations: 1
    qed-weighted: 0.37
    full-molformula: C26H28ClNO
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Clomid (Clomiphene)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `clomiphene-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Clomid, Clomiphene
- **ChEMBL:** [CHEMBL2355051](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2355051/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Selective estrogen receptor modulator used post-cycle to restart endogenous LH/FSH and testosterone production.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1967
- **ATC G03GB02:** GENITO URINARY SYSTEM AND SEX HORMONES › GONADOTROPINS AND OTHER OVULATION STIMULANTS › Ovulation stimulants, synthetic

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 405.97 | 6.56 | 12.47 | 0/2 | 1 | C26H28ClNO |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Clomifene*](https://en.wikipedia.org/w/index.php?title=Clomifene&oldid=1368196377) (revision 1368196377, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4–7 d | 4–7 days ;; active metabolites: ;; 4-OH-CLO : 13–34 hrs ;; 4-OH-DE-CLO : 15–37 hrs |
| Bioavailability | 90 % | High (>90%) |
| Metabolism | hepatic | Liver CYP2D6 (with enterohepatic circulation) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | 4-Hydroxyclomiphene (4-OH-CLO), 4-Hydroxy-N-desethylclomiphene (4-OH-DE-CLO) |
| Excretion | - | Mainly feces, some in urine |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Cyclofenil]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
