---
type: compound
schema-version: 2
compound-id: aprepitant-compound
name: Aprepitant
aliases: []
cluster: General Pharmacology
group: gi
class: null
subclass: null
mechanism: Neurokinin 1 receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1471
chembl-max-phase: 4
half-life:
  value: 9.0
  value-max: 13.0
  unit: h
  notes: 9–13 hours
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: '>95%'
bioavailability:
  value: 60.0
  value-max: 65.0
  notes: 60–65%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (57%), feces (45%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mostly CYP3A4- mediated; some contributions by CYP2C19 & CYP1A2)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2C19
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2C19, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- group/gi
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Aprepitant
  url: https://en.wikipedia.org/w/index.php?title=Aprepitant&oldid=1373784554
  revision: 1373784554
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1471
  pref-name: APREPITANT
  molecule-type: Small molecule
  first-approval: 2003
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A04AD12
  targets:
  - id: CHEMBL249
    name: Substance-P receptor
    action: ANTAGONIST
  properties:
    full-mwt: 534.43
    mw-freebase: 534.43
    alogp: 4.95
    psa: 83.24
    hba: 5
    hbd: 2
    rtb: 6
    num-ro5-violations: 1
    qed-weighted: 0.44
    full-molformula: C23H21F7N4O3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: af9b6086-4bf2-472c-8740-4134eaaebace
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=af9b6086-4bf2-472c-8740-4134eaaebace
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Emend
  ema-number: EMEA/H/C/000527
  url: https://www.ema.europa.eu/en/documents/product-information/emend-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/emend-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Aprepitant

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `aprepitant-compound`
- **Source group:** Gastrointestinal & Hepatic (`gi`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1471](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1471/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Neurokinin-1 antagonist that controls delayed chemotherapy-induced nausea, which the 5-HT3 antagonists do not reach.

## Mechanism

Neurokinin 1 receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2003
- **ATC A04AD12:** ALIMENTARY TRACT AND METABOLISM › ANTIEMETICS AND ANTINAUSEANTS › Other antiemetics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 534.43 | 4.95 | 83.24 | 2/5 | 1 | C23H21F7N4O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Substance-P receptor (CHEMBL249)|Substance-P receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Aprepitant*](https://en.wikipedia.org/w/index.php?title=Aprepitant&oldid=1373784554) (revision 1373784554, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9–13 h | 9–13 hours |
| Protein binding | 95 % | >95% |
| Bioavailability | 60–65 % | 60–65% |
| Metabolism | hepatic | Liver (mostly CYP3A4- mediated; some contributions by CYP2C19 & CYP1A2) |
| CYP (metabolised by) | CYP1A2, CYP2C19, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney (57%), feces (45%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set af9b6086…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=af9b6086-4bf2-472c-8740-4134eaaebace), label version 20260611. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: consistent (label values: 21, 32, 95)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Emend*](https://www.ema.europa.eu/en/documents/product-information/emend-epar-product-information_en.pdf) (EMEA/H/C/000527) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/emend-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 9, 13)
> - protein-binding: consistent (SmPC values: 21, 32, 97)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Netupitant]] (Substance-P receptor)
- **Same ATC subgroup:** [[Dronabinol]], [[Hyoscine (Scopolamine)]], [[Rolapitant]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP2C19 (+43 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
