---
type: compound
schema-version: 2
compound-id: amineptine-compound
name: Amineptine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Dopamine D1 and D2 receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL418995
chembl-max-phase: 4
half-life:
  value: 0.8
  value-max: 1.0
  unit: h
  notes: 'Amineptine: 0.8–1.0 hours; Metabolite: 1.5–2.5 hours'
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Amineptine
  url: https://en.wikipedia.org/w/index.php?title=Amineptine&oldid=1355513493
  revision: 1355513493
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL418995
  pref-name: AMINEPTINE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: true
  atc-codes:
  - N06AA19
  targets:
  - id: CHEMBL2111341
    name: Dopamine D1 and D2 receptor
    action: ANTAGONIST
  properties:
    full-mwt: 337.46
    mw-freebase: 337.46
    alogp: 4.5
    psa: 49.33
    hba: 2
    hbd: 2
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.7
    full-molformula: C22H27NO2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Amineptine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `amineptine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL418995](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL418995/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits norepinephrine reuptake, often alongside serotonin effects; blood pressure and discontinuation effects require attention.

## Mechanism

Dopamine D1 and D2 receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **Flags:** withdrawn
- **ATC N06AA19:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Non-selective monoamine reuptake inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 337.46 | 4.5 | 49.33 | 2/2 | 0 | C22H27NO2 |

**Targets (ChEMBL curated mechanisms):**

- [[Dopamine D1 and D2 receptor (CHEMBL2111341)|Dopamine D1 and D2 receptor]] - antagonist · SELECTIVITY GROUP

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Amineptine*](https://en.wikipedia.org/w/index.php?title=Amineptine&oldid=1355513493) (revision 1355513493, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.8–1 h | Amineptine: 0.8–1.0 hours; Metabolite: 1.5–2.5 hours |
| Metabolism | hepatic | Hepatic |
| Excretion | mainly urinary | Renal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Minaprine]] (Dopamine D1 and D2 receptor)
- **Same ATC subgroup:** [[Amitriptyline]], [[Amoxapine]], [[Clomipramine]], [[Desipramine]], [[Dibenzepin]], [[Dothiepin]], [[Doxepin]], [[Doxepin, low dose (Silenor)]], [[Imipramine]], [[Maprotiline]], [[Nortriptyline]], [[Protriptyline]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
