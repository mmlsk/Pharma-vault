---
type: compound
schema-version: 2
compound-id: danazol-compound
name: Danazol
aliases: []
cluster: Androgens SARMs and PCT
group: steroids
class: null
subclass: null
mechanism: Androgen Receptor agonist; Progesterone receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1479
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: 10.0
  unit: h
  notes: 'Acute: 3–10 hours; Chronic: 24–26 hours'
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: To albumin, SHBG, CBG
bioavailability:
  value: null
  value-max: null
  notes: Saturable with dosage, higher with food intake
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine, feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4)
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
- endocrine-feedback-disruption
- cardiovascular-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/steroids
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Danazol
  url: https://en.wikipedia.org/w/index.php?title=Danazol&oldid=1354397142
  revision: 1354397142
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1479
  pref-name: DANAZOL
  molecule-type: Small molecule
  first-approval: 1976
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - G03XA01
  targets:
  - id: CHEMBL208
    name: Progesterone receptor
    action: AGONIST
  - id: CHEMBL1871
    name: Androgen receptor
    action: AGONIST
  properties:
    full-mwt: 337.46
    mw-freebase: 337.46
    alogp: 4.22
    psa: 46.26
    hba: 3
    hbd: 1
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.72
    full-molformula: C22H27NO2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 55ad6325-16f6-4f0c-a1dc-734847052d0b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=55ad6325-16f6-4f0c-a1dc-734847052d0b
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Danazol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `danazol-compound`
- **Source group:** Anabolic Steroids (`steroids`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1479](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1479/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Synthetic attenuated androgen used for endometriosis and hereditary angioedema; binds the androgen receptor and displaces hormones from SHBG.

## Mechanism

Androgen Receptor agonist; Progesterone receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1976
- **Flags:** black-box warning
- **ATC G03XA01:** GENITO URINARY SYSTEM AND SEX HORMONES › OTHER SEX HORMONES AND MODULATORS OF THE GENITAL SYSTEM › Antigonadotropins and similar agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 337.46 | 4.22 | 46.26 | 1/3 | 0 | C22H27NO2 |

**Targets (ChEMBL curated mechanisms):**

- [[Progesterone receptor (CHEMBL208)|Progesterone receptor]] - agonist · SINGLE PROTEIN
- [[Androgen receptor (CHEMBL1871)|Androgen receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Danazol*](https://en.wikipedia.org/w/index.php?title=Danazol&oldid=1354397142) (revision 1354397142, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–10 h | Acute: 3–10 hours; Chronic: 24–26 hours |
| Protein binding | - | To albumin, SHBG, CBG |
| Bioavailability | - | Saturable with dosage, higher with food intake |
| Metabolism | hepatic | Liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • 2-OHM-Ethisterone; • Ethisterone |
| Excretion | - | Urine, feces |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 55ad6325…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=55ad6325-16f6-4f0c-a1dc-734847052d0b), label version 20241010. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Cyproterone Acetate]] (Androgen receptor; Progesterone receptor), [[Anadrol (Oxymetholone)]] (Androgen receptor), [[Anavar (Oxandrolone)]] (Androgen receptor), [[Apalutamide (Erleada)]] (Androgen receptor), [[Apc-100]] (Androgen receptor), [[Asoprisnil]] (Progesterone receptor), [[Bicalutamide (Casodex)]] (Androgen receptor), [[CB-03-01 (Clascoterone research formulation)]] (Androgen receptor), [[Chlormadinone Acetate]] (Progesterone receptor), [[Clascoterone (Winlevi)]] (Androgen receptor), [[Darolutamide (Nubeqa)]] (Androgen receptor), [[Desogestrel]] (Progesterone receptor)
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `cardiovascular-load`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Stimulant and Cardiovascular Load]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
