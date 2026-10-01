---
type: compound
schema-version: 2
compound-id: spironolactone-compound
name: Spironolactone
aliases: []
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: Mineralocorticoid receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1393
chembl-max-phase: 4
half-life:
  value: 1.4
  value-max: null
  unit: h
  notes: 'Spironolactone: 1.4 hrs; 7α-TMS: 13.8 hours; 6β-OH-7α-TMS: 15.0 hrs; Canrenone: 16.5 hours'
protein-binding:
  value: 88.0
  value-max: null
  unit: percent
  notes: 'Spironolactone: 88% (to albumin and AGP); Canrenone: 99.2% (to albumin)'
bioavailability:
  value: 60.0
  value-max: 90.0
  notes: 60–90%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine, bile
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, others:; • Deacetylation via CES; • S-Oxygenation via FOM; • S-Methylation via TMT; • Dethioacetylation; • Hydroxylation via CYP3A4; • Lactone hydrolysis via PON3
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/pct
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Spironolactone
  url: https://en.wikipedia.org/w/index.php?title=Spironolactone&oldid=1369649243
  revision: 1369649243
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1393
  pref-name: SPIRONOLACTONE
  molecule-type: Small molecule
  first-approval: 1960
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C03DA01
  targets:
  - id: CHEMBL1994
    name: Mineralocorticoid receptor
    action: ANTAGONIST
  properties:
    full-mwt: 416.58
    mw-freebase: 416.58
    alogp: 4.85
    psa: 60.44
    hba: 5
    hbd: 0
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.57
    full-molformula: C24H32O4S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 8b76a904-6c99-485a-a05f-13a36c5f720c
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8b76a904-6c99-485a-a05f-13a36c5f720c
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Qaialdo
  ema-number: EMEA/H/C/005535
  url: https://www.ema.europa.eu/en/documents/product-information/qaialdo-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Spironolactone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `spironolactone-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1393](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1393/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Potassium-sparing diuretic with real antiandrogenic activity at the androgen receptor, commonly used off-label for hormonal acne and hirsutism.

## Mechanism

Mineralocorticoid receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1960
- **Flags:** black-box warning
- **ATC C03DA01:** CARDIOVASCULAR SYSTEM › ALDOSTERONE ANTAGONISTS AND OTHER POTASSIUM-SPARING AGENTS › Aldosterone antagonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 416.58 | 4.85 | 60.44 | 0/5 | 0 | C24H32O4S |

**Targets (ChEMBL curated mechanisms):**

- [[Mineralocorticoid receptor (CHEMBL1994)|Mineralocorticoid receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Spironolactone*](https://en.wikipedia.org/w/index.php?title=Spironolactone&oldid=1369649243) (revision 1369649243, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.4 h | Spironolactone: 1.4 hrs; 7α-TMS: 13.8 hours; 6β-OH-7α-TMS: 15.0 hrs; Canrenone: 16.5 hours |
| Protein binding | 88 % | Spironolactone: 88% (to albumin and AGP); Canrenone: 99.2% (to albumin) |
| Bioavailability | 60–90 % | 60–90% |
| Metabolism | hepatic | Liver, others:; • Deacetylation via CES; • S-Oxygenation via FOM; • S-Methylation via TMT; • Dethioacetylation; • Hydroxylation via CYP3A4; • Lactone hydrolysis via PON3 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | 7α-TS, 7α-TMS, 6β-OH-7α-TMS, canrenone, others; (All three active) |
| Excretion | - | Urine, bile |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 8b76a904…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8b76a904-6c99-485a-a05f-13a36c5f720c), label version 20260915. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1.4, 15)
> - protein-binding: consistent (label values: 90)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Qaialdo*](https://www.ema.europa.eu/en/documents/product-information/qaialdo-epar-product-information_en.pdf) (EMEA/H/C/005535). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 1.3, 2.8, 11.2)
> - protein-binding: no-label-value (SmPC values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Apararenone]] (Mineralocorticoid receptor), [[Balcinrenone]] (Mineralocorticoid receptor), [[Canrenone]] (Mineralocorticoid receptor), [[Desoxycorticosterone Acetate]] (Mineralocorticoid receptor), [[Desoxycorticosterone Pivalate]] (Mineralocorticoid receptor), [[Drospirenone]] (Mineralocorticoid receptor), [[Eplerenone]] (Mineralocorticoid receptor), [[Felodipine]] (Mineralocorticoid receptor), [[Finerenone (Kerendia)]] (Mineralocorticoid receptor), [[Fludrocortisone Acetate]] (Mineralocorticoid receptor), [[Nimodipine]] (Mineralocorticoid receptor), [[Vamorolone]] (Mineralocorticoid receptor)
- **Same ATC subgroup:** [[Canrenone]], [[Eplerenone]], [[Finerenone (Kerendia)]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
