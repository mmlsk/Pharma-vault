---
type: compound
schema-version: 2
compound-id: fluoxetine-compound
name: Fluoxetine (Prozac)
aliases:
- Fluoxetine
- Prozac
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
chembl-id: CHEMBL41
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: 3.0
  unit: d
  notes: 1–3 days (acute); 4–6 days (chronic)
protein-binding:
  value: 94.0
  value-max: 95.0
  unit: percent
  notes: 94–95%
bioavailability:
  value: 60.0
  value-max: 80.0
  notes: 60–80%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (80%), feces (15%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mostly CYP2D6-mediated)
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
  title: Fluoxetine
  url: https://en.wikipedia.org/w/index.php?title=Fluoxetine&oldid=1373682188
  revision: 1373682188
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL41
  pref-name: FLUOXETINE
  molecule-type: Small molecule
  first-approval: 1987
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06AB03
  targets: []
  properties:
    full-mwt: 309.33
    mw-freebase: 309.33
    alogp: 4.44
    psa: 21.26
    hba: 2
    hbd: 1
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.85
    full-molformula: C17H18F3NO
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 6f4e4e9f-9ded-452f-b3ef-ab6aa9c72952
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6f4e4e9f-9ded-452f-b3ef-ab6aa9c72952
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Fluoxetine (Prozac)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fluoxetine-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Fluoxetine, Prozac
- **ChEMBL:** [CHEMBL41](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL41/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Long-half-life SSRI for depression and related disorders; sexual dysfunction, activation, and serotonergic interactions matter.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1987
- **Flags:** black-box warning
- **ATC N06AB03:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Selective serotonin reuptake inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 309.33 | 4.44 | 21.26 | 1/2 | 0 | C17H18F3NO |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fluoxetine*](https://en.wikipedia.org/w/index.php?title=Fluoxetine&oldid=1373682188) (revision 1373682188, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–3 d | 1–3 days (acute); 4–6 days (chronic) |
| Protein binding | 94–95 % | 94–95% |
| Bioavailability | 60–80 % | 60–80% |
| Metabolism | hepatic | Liver (mostly CYP2D6-mediated) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • Norfluoxetine (desmethylfluoxetine) ; • Seproxetine (S-norfluoxetine, S-desmethylfluoxetine) |
| Excretion | mainly urinary | Urine (80%), feces (15%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 6f4e4e9f…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6f4e4e9f-9ded-452f-b3ef-ab6aa9c72952), label version 20260811. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 24, 72, 96, 144, 206.4, 223.2)
> - protein-binding: consistent (label values: 94.5)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Alaproclate]], [[Citalopram]], [[Escitalopram (Lexapro)]], [[Fluvoxamine]], [[Paroxetine]], [[Sertraline (Zoloft)]], [[Zimelidine]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
