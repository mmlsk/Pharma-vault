---
type: compound
schema-version: 2
compound-id: escitalopram-compound
name: Escitalopram (Lexapro)
aliases:
- Escitalopram
- Lexapro
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1508
chembl-max-phase: 4
half-life:
  value: 27.0
  value-max: 32.0
  unit: h
  notes: ~27–32 hours
protein-binding:
  value: 55.0
  value-max: 56.0
  unit: percent
  notes: ~55–56% (low)
bioavailability:
  value: 80.0
  value-max: null
  notes: ~80%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.1
  notes: Urine (major; 8–10% unchanged), feces (minor)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C19, CYP3A4, CYP2D6)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- evidence-limited
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Escitalopram
  url: https://en.wikipedia.org/w/index.php?title=Escitalopram&oldid=1373241194
  revision: 1373241194
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1508
  pref-name: ESCITALOPRAM
  molecule-type: Small molecule
  first-approval: 2002
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06AB10
  targets: []
  properties:
    full-mwt: 324.4
    mw-freebase: 324.4
    alogp: 3.81
    psa: 36.26
    hba: 3
    hbd: 0
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.84
    full-molformula: C20H21FN2O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: d75e3b97-1ead-4e7b-9ae3-3626aede1efd
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d75e3b97-1ead-4e7b-9ae3-3626aede1efd
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Escitalopram (Lexapro)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `escitalopram-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Escitalopram, Lexapro
- **ChEMBL:** [CHEMBL1508](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1508/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Selective SSRI for depression and generalized anxiety; QT, sexual, withdrawal, and serotonin-syndrome considerations remain.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2002
- **Flags:** black-box warning
- **ATC N06AB10:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Selective serotonin reuptake inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 324.4 | 3.81 | 36.26 | 0/3 | 0 | C20H21FN2O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Escitalopram*](https://en.wikipedia.org/w/index.php?title=Escitalopram&oldid=1373241194) (revision 1373241194, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 27–32 h | ~27–32 hours |
| Protein binding | 55–56 % | ~55–56% (low) |
| Bioavailability | 80 % | ~80% |
| Metabolism | hepatic | Liver (CYP2C19, CYP3A4, CYP2D6) |
| CYP (metabolised by) | CYP2C19, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • Desmethylcitalopram; • Didesmethylcitalopram |
| Excretion | - · fe 0.1 | Urine (major; 8–10% unchanged), feces (minor) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set d75e3b97…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d75e3b97-1ead-4e7b-9ae3-3626aede1efd), label version 20260903. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 27, 32)
> - protein-binding: consistent (label values: 56)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Alaproclate]], [[Citalopram]], [[Fluoxetine (Prozac)]], [[Fluvoxamine]], [[Paroxetine]], [[Sertraline (Zoloft)]], [[Zimelidine]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others), CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
