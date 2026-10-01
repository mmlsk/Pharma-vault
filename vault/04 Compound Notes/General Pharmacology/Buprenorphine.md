---
type: compound
schema-version: 2
compound-id: buprenorphine-compound
name: Buprenorphine
aliases: []
cluster: General Pharmacology
group: analgesia
class: null
subclass: null
mechanism: Kappa opioid receptor agonist; Mu opioid receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL511142
chembl-max-phase: 4
half-life:
  value: 37.0
  value-max: null
  unit: h
  notes: 37 hours (range 20–70 hours)
protein-binding:
  value: 96.0
  value-max: null
  unit: percent
  notes: 96%
bioavailability:
  value: 30.0
  value-max: null
  notes: 'Sublingual: 30%; Intranasal: 48%; Buccal: 65%; IV/IM: 100%'
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Bile duct and kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4, CYP2C8)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C8
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C8, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- identity-stereo-check
- pk-fda-discrepant
- pk-ema-discrepant
pk-source:
  type: wikipedia-infobox
  title: Buprenorphine
  url: https://en.wikipedia.org/w/index.php?title=Buprenorphine&oldid=1375171241
  revision: 1375171241
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL511142
  pref-name: BUPRENORPHINE
  molecule-type: Small molecule
  first-approval: 1981
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N02AE01
  - N07BC01
  - N07BC51
  targets:
  - id: CHEMBL233
    name: Mu-type opioid receptor
    action: AGONIST
  - id: CHEMBL237
    name: Kappa-type opioid receptor
    action: AGONIST
  properties:
    full-mwt: 467.65
    mw-freebase: 467.65
    alogp: 4.41
    psa: 62.16
    hba: 5
    hbd: 2
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.69
    full-molformula: C29H41NO4
  identity-check: connectivity-match
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 6189fb21-9432-45f8-8481-0bfaf3ccde95
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6189fb21-9432-45f8-8481-0bfaf3ccde95
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: discrepant
  product: Buvidal
  ema-number: EMEA/H/C/004651
  url: https://www.ema.europa.eu/en/documents/product-information/buvidal-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/buvidal-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
---

# Buprenorphine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `buprenorphine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL511142](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL511142/) · max phase 4 · id via Wikipedia infobox · structure check: ⚠️ same skeleton, stereo/isotope layer differs

## Source summary

High-affinity partial mu agonist with a ceiling on respiratory depression, the safety property that makes it a first-line maintenance treatment.

## Mechanism

Kappa opioid receptor agonist; Mu opioid receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1981
- **Flags:** black-box warning
- **ATC N02AE01:** NERVOUS SYSTEM › OPIOIDS › Oripavine derivatives
- **ATC N07BC01:** NERVOUS SYSTEM › DRUGS USED IN ADDICTIVE DISORDERS › Drugs used in opioid dependence
- **ATC N07BC51:** NERVOUS SYSTEM › DRUGS USED IN ADDICTIVE DISORDERS › Drugs used in opioid dependence

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 467.65 | 4.41 | 62.16 | 2/5 | 0 | C29H41NO4 |

**Targets (ChEMBL curated mechanisms):**

- [[Mu-type opioid receptor (CHEMBL233)|Mu-type opioid receptor]] - agonist · SINGLE PROTEIN
- [[Kappa-type opioid receptor (CHEMBL237)|Kappa-type opioid receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Buprenorphine*](https://en.wikipedia.org/w/index.php?title=Buprenorphine&oldid=1375171241) (revision 1375171241, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 37 h | 37 hours (range 20–70 hours) |
| Protein binding | 96 % | 96% |
| Bioavailability | 30 % | Sublingual: 30%; Intranasal: 48%; Buccal: 65%; IV/IM: 100% |
| Metabolism | hepatic | Liver (CYP3A4, CYP2C8) |
| CYP (metabolised by) | CYP2C8, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Norbuprenorphine, Hydroxybuprenorphine, Hydroxynorbuprenorphine, Buprenorphine glucuronide |
| Excretion | mainly non-renal | Bile duct and kidney |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 6189fb21…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6189fb21-9432-45f8-8481-0bfaf3ccde95), label version 20260727. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 1032, 1440)
> - protein-binding: consistent (label values: 96)

> [!danger] EU SmPC cross-check: **discrepant**
> Automated comparison with section 5.2 of the [EU SmPC of *Buvidal*](https://www.ema.europa.eu/en/documents/product-information/buvidal-epar-product-information_en.pdf) (EMEA/H/C/004651) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/buvidal-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (SmPC values: 72, 120)
> - protein-binding: consistent (SmPC values: 96)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Dezocine]] (Kappa-type opioid receptor; Mu-type opioid receptor), [[Aticaprant]] (Kappa-type opioid receptor), [[Diamorphine (Heroin)]] (Mu-type opioid receptor), [[Difelikefalin]] (Kappa-type opioid receptor), [[Eluxadoline]] (Mu-type opioid receptor), [[Fentanyl]] (Mu-type opioid receptor), [[Oliceridine]] (Mu-type opioid receptor), [[Oxycodone]] (Mu-type opioid receptor), [[Samidorphan]] (Mu-type opioid receptor)
- **Same ATC subgroup:** [[Methadone]]
- **Shared CYP substrate pool:** CYP2C8 (+15 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
- [[CYP450 Metabolism]]
