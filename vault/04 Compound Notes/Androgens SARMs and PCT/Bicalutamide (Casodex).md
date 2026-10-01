---
type: compound
schema-version: 2
compound-id: bicalutamide-compound
name: Bicalutamide (Casodex)
aliases:
- Bicalutamide
- Casodex
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: Androgen Receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL409
chembl-max-phase: 4
half-life:
  value: 5.8
  value-max: null
  unit: d
  notes: 'Single-dose: 5.8 days; Continuous: 7–10 days; <!--'
protein-binding:
  value: 96.1
  value-max: null
  unit: percent
  notes: 'Racemate: 96.1%; (R)-Isomer: 99.6%; (Mainly to albumin)'
bioavailability:
  value: null
  value-max: null
  notes: Well-absorbed; absolute bioavailability unknown
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 'Feces: 43%; Urine: 34%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (extensively):; • Hydroxylation (CYP3A4); • Glucuronidation (UGT1A9)
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
pk-source:
  type: wikipedia-infobox
  title: Bicalutamide
  url: https://en.wikipedia.org/w/index.php?title=Bicalutamide&oldid=1371710878
  revision: 1371710878
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL409
  pref-name: BICALUTAMIDE
  molecule-type: Small molecule
  first-approval: 1995
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L02BB03
  targets:
  - id: CHEMBL1871
    name: Androgen receptor
    action: ANTAGONIST
  properties:
    full-mwt: 430.38
    mw-freebase: 430.38
    alogp: 2.88
    psa: 107.26
    hba: 5
    hbd: 2
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.56
    full-molformula: C18H14F4N2O4S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 26e30155-a50b-df14-e063-6394a90a9be4
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=26e30155-a50b-df14-e063-6394a90a9be4
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: consistent
---

# Bicalutamide (Casodex)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `bicalutamide-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Bicalutamide, Casodex
- **ChEMBL:** [CHEMBL409](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL409/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Nonsteroidal antiandrogen that competitively blocks testosterone and DHT at the androgen receptor, used in prostate cancer and sometimes for anti-androgen effect.

## Mechanism

Androgen Receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1995
- **ATC L02BB03:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › HORMONE ANTAGONISTS AND RELATED AGENTS › Anti-androgens

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 430.38 | 2.88 | 107.26 | 2/5 | 0 | C18H14F4N2O4S |

**Targets (ChEMBL curated mechanisms):**

- [[Androgen receptor (CHEMBL1871)|Androgen receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Bicalutamide*](https://en.wikipedia.org/w/index.php?title=Bicalutamide&oldid=1371710878) (revision 1371710878, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5.8 d | Single-dose: 5.8 days; Continuous: 7–10 days; <!-- |
| Protein binding | 96.1 % | Racemate: 96.1%; (R)-Isomer: 99.6%; (Mainly to albumin) |
| Bioavailability | - | Well-absorbed; absolute bioavailability unknown |
| Metabolism | hepatic | Liver (extensively):; • Hydroxylation (CYP3A4); • Glucuronidation (UGT1A9) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • Bicalutamide glucuronide; • Hydroxybicalutamide; • Hydroxybicalutamide gluc.; (All inactive); <!-- |
| Excretion | - | Feces: 43%; Urine: 34% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 26e30155…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=26e30155-a50b-df14-e063-6394a90a9be4), label version 20260423. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: consistent (label values: 96)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Anadrol (Oxymetholone)]] (Androgen receptor), [[Anavar (Oxandrolone)]] (Androgen receptor), [[Apalutamide (Erleada)]] (Androgen receptor), [[Apc-100]] (Androgen receptor), [[CB-03-01 (Clascoterone research formulation)]] (Androgen receptor), [[Clascoterone (Winlevi)]] (Androgen receptor), [[Cyproterone Acetate]] (Androgen receptor), [[Danazol]] (Androgen receptor), [[Darolutamide (Nubeqa)]] (Androgen receptor), [[Dianabol (Methandienone)]] (Androgen receptor), [[Dromostanolone Propionate]] (Androgen receptor), [[Enzalutamide]] (Androgen receptor)
- **Same ATC subgroup:** [[Apalutamide (Erleada)]], [[Darolutamide (Nubeqa)]], [[Enzalutamide]], [[Flutamide]], [[Nilutamide (Nilandron)]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
