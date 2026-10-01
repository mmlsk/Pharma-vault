---
type: compound
schema-version: 2
compound-id: eluxadoline-compound
name: Eluxadoline
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Mu opioid receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2159122
chembl-max-phase: 4
half-life:
  value: 3.7
  value-max: 6.0
  unit: h
  notes: 3.7–6 hours
protein-binding:
  value: 81.0
  value-max: null
  unit: percent
  notes: 81%
bioavailability:
  value: 1.0
  value-max: null
  notes: 1.0 % (low due to poor gastrointestinal permeability and significant first-pass metabolism)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 82.2% (feces), <1% (urine)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
- chembl-name-match
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Eluxadoline
  url: https://en.wikipedia.org/w/index.php?title=Eluxadoline&oldid=1363340378
  revision: 1363340378
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL2159122
  pref-name: ELUXADOLINE
  molecule-type: Small molecule
  first-approval: 2015
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A07DA06
  targets:
  - id: CHEMBL233
    name: Mu-type opioid receptor
    action: AGONIST
  properties:
    full-mwt: 569.66
    mw-freebase: 569.66
    alogp: 4.16
    psa: 164.63
    hba: 6
    hbd: 4
    rtb: 11
    num-ro5-violations: 1
    qed-weighted: 0.21
    full-molformula: C32H35N5O5
pk-verification:
  source: fda-label
  status: consistent
  set-id: 7821bd40-4c84-4984-951b-6436ae20421a
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7821bd40-4c84-4984-951b-6436ae20421a
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Eluxadoline

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `eluxadoline-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL2159122](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2159122/) · max phase 4 · id via exact ChEMBL name match - confirm

## Source summary

Mixed mu agonist / delta antagonist acting locally in the gut for IBS with diarrhoea; contraindicated without a gallbladder over pancreatitis risk.

## Mechanism

Mu opioid receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2015
- **ATC A07DA06:** ALIMENTARY TRACT AND METABOLISM › ANTIPROPULSIVES › Antipropulsives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 569.66 | 4.16 | 164.63 | 4/6 | 1 | C32H35N5O5 |

**Targets (ChEMBL curated mechanisms):**

- [[Mu-type opioid receptor (CHEMBL233)|Mu-type opioid receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Eluxadoline*](https://en.wikipedia.org/w/index.php?title=Eluxadoline&oldid=1363340378) (revision 1363340378, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3.7–6 h | 3.7–6 hours |
| Protein binding | 81 % | 81% |
| Bioavailability | 1 % | 1.0 % (low due to poor gastrointestinal permeability and significant first-pass metabolism) |
| Excretion | - | 82.2% (feces), <1% (urine) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 7821bd40…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7821bd40-4c84-4984-951b-6436ae20421a), label version 20240716. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 3.7, 6)
> - protein-binding: consistent (label values: 81)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Buprenorphine]] (Mu-type opioid receptor), [[Dezocine]] (Mu-type opioid receptor), [[Diamorphine (Heroin)]] (Mu-type opioid receptor), [[Fentanyl]] (Mu-type opioid receptor), [[Oliceridine]] (Mu-type opioid receptor), [[Oxycodone]] (Mu-type opioid receptor), [[Samidorphan]] (Mu-type opioid receptor)
- **Same ATC subgroup:** [[Loperamide]], [[Morphine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
