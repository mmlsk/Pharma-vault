---
type: compound
schema-version: 2
compound-id: tasimelteon-compound
name: Tasimelteon (Hetlioz)
aliases:
- Tasimelteon
- Hetlioz
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: Melatonin receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2103822
chembl-max-phase: 4
half-life:
  value: 0.9
  value-max: 1.7
  unit: h
  notes: 0.9–1.7 h / 0.8–5.9 h (terminal)
protein-binding:
  value: 89.0
  value-max: 90.0
  unit: percent
  notes: 89–90%
bioavailability:
  value: null
  value-max: null
  notes: not determined in humans
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 80% in urine, 4% in feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: extensive liver, primarily CYP1A2 and CYP3A4-mediated
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- chembl-name-match
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Tasimelteon
  url: https://en.wikipedia.org/w/index.php?title=Tasimelteon&oldid=1329184391
  revision: 1329184391
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL2103822
  pref-name: TASIMELTEON
  molecule-type: Small molecule
  first-approval: 2014
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N05CH03
  targets:
  - id: CHEMBL2094268
    name: Melatonin receptor
    action: AGONIST
  properties:
    full-mwt: 245.32
    mw-freebase: 245.32
    alogp: 2.25
    psa: 38.33
    hba: 2
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.88
    full-molformula: C15H19NO2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: ce5a2fa3-ed54-422d-96c2-1821496eb32f
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ce5a2fa3-ed54-422d-96c2-1821496eb32f
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Hetlioz
  ema-number: EMEA/H/C/003870
  url: https://www.ema.europa.eu/en/documents/product-information/hetlioz-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Tasimelteon (Hetlioz)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tasimelteon-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Tasimelteon, Hetlioz
- **ChEMBL:** [CHEMBL2103822](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2103822/) · max phase 4 · id via exact ChEMBL name match · structure check: ✅ InChIKey matches PubChem

## Source summary

MT1/MT2 agonist approved for non-24-hour sleep-wake disorder and nighttime sleep disturbance in Smith-Magenis syndrome.

## Mechanism

Melatonin receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2014
- **ATC N05CH03:** NERVOUS SYSTEM › HYPNOTICS AND SEDATIVES › Melatonin receptor agonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 245.32 | 2.25 | 38.33 | 1/2 | 0 | C15H19NO2 |

**Targets (ChEMBL curated mechanisms):**

- [[Melatonin receptor (CHEMBL2094268)|Melatonin receptor]] - agonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tasimelteon*](https://en.wikipedia.org/w/index.php?title=Tasimelteon&oldid=1329184391) (revision 1329184391, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.9–1.7 h | 0.9–1.7 h / 0.8–5.9 h (terminal) |
| Protein binding | 89–90 % | 89–90% |
| Bioavailability | - | not determined in humans |
| Metabolism | hepatic | extensive liver, primarily CYP1A2 and CYP3A4-mediated |
| CYP (metabolised by) | CYP1A2, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | 80% in urine, 4% in feces |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set ce5a2fa3…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ce5a2fa3-ed54-422d-96c2-1821496eb32f), label version 20260818. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1.3)
> - protein-binding: no-label-value (label values: -)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Hetlioz*](https://www.ema.europa.eu/en/documents/product-information/hetlioz-epar-product-information_en.pdf) (EMEA/H/C/003870). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 1.3)
> - protein-binding: no-label-value (SmPC values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Agomelatine (Valdoxan)]] (Melatonin receptor), [[Melatonin (oral)]] (Melatonin receptor), [[Piromelatine]] (Melatonin receptor)
- **Same ATC subgroup:** [[Melatonin (oral)]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
